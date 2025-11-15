import competencyData from "@/output/competency_summaries.json";
import { rewriteAnswerWithAI, generateCleanDistractors, shuffleArray } from "@/lib/quiz-logic";

export type QuizQuestion = {
    number: number;
    question: string;
    answer: string;
    guide?: any;
    title?: string;
};

function flattenItems(): Array<any> {
    const out: any[] = [];
    for (const levelKey of Object.keys(competencyData)) {
        const level = (competencyData as any)[levelKey];
        for (const lineKey of Object.keys(level)) {
            const arr = level[lineKey];
            if (Array.isArray(arr)) {
                for (const item of arr) out.push(item);
            }
        }
    }
    return out;
}

export function getAllQuestions(): QuizQuestion[] {
    const items = flattenItems();
    return items.map((item: any, idx: number) => ({
        number: idx + 1,
        question: item.Quiz ?? "",
        answer: item.Title ?? "",
        guide: item.Summary ?? null,
        title: item.Title ?? "",
    }));
}

export function getAllTitles(): string[] {
    return getAllQuestions().map((q) => q.title || q.answer).filter(Boolean);
}

export function getRandomQuestions(count = 6): QuizQuestion[] {
    const all = getAllQuestions();
    const selected: QuizQuestion[] = [];
    const used = new Set<number>();
    const max = Math.min(count, all.length);
    while (selected.length < max) {
        const i = Math.floor(Math.random() * all.length);
        if (used.has(i)) continue;
        used.add(i);
        selected.push(all[i]);
    }
    return selected;
}

// Simple in-memory cache for rewritten questions during app runtime
const rewriteCache = new Map<string, string>();

let availabilityCache: { available: boolean; ts: number } | null = null;
const AVAILABILITY_TTL = 60 * 1000; // 60s
// log failing proxy URLs only once to avoid spamming console
const loggedFailedUrls = new Set<string>();

async function isProxyAvailable(): Promise<boolean> {
    try {
        const now = Date.now();
        if (availabilityCache && now - availabilityCache.ts < AVAILABILITY_TTL) {
            return availabilityCache.available;
        }

        // small timeout for quick failure
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), 2000);
        try {
            const resp = await fetch("http://localhost:3000/", {
                method: "GET",
                signal: (controller as any).signal,
            });
            clearTimeout(id);
            const ok = !!resp && resp.ok;
            availabilityCache = { available: ok, ts: Date.now() };
            return ok;
        } catch (e) {
            clearTimeout(id);
            availabilityCache = { available: false, ts: Date.now() };
            if (!loggedFailedUrls.has("http://localhost:3000/")) {
                console.warn("proxy health check failed: http://localhost:3000/", String(e));
                loggedFailedUrls.add("http://localhost:3000/");
            }
            return false;
        }
    } catch (e) {
        return false;
    }
}

async function callOpenAIRewrite(original: string): Promise<string> {
    const proxyOk = await isProxyAvailable();
    if (!proxyOk) {
        // proxy not reachable — skip rewrite
        return original;
    }
    try {
        const prompt = `Rewrite the following text into a clear, conversational QUESTION. Output must be ONE sentence (or at most 2 very short sentences) and, if possible, under 25 words; it must always end with a question mark. Preserve the original meaning and return only the question text.\n\nOriginal:\n"""${original}"""`;
        let resp;
        try {
            resp = await fetch("http://localhost:3000/api/openai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt, model: "gpt-3.5-turbo", max_tokens: 200 }),
            });
        } catch (e) {
            // mark proxy unavailable and log once
            availabilityCache = { available: false, ts: Date.now() };
            if (!loggedFailedUrls.has("http://localhost:3000/api/openai")) {
                console.warn("proxy request failed:", "http://localhost:3000/api/openai", String(e));
                loggedFailedUrls.add("http://localhost:3000/api/openai");
            }
            return original;
        }
        if (!resp.ok) {
            const txt = await resp.text().catch(() => "");
            throw new Error(`openai proxy error ${resp.status}: ${txt}`);
        }
        const data = await resp.json();
        // Expecting OpenAI chat completion structure
        const content =
            data?.choices?.[0]?.message?.content || data?.choices?.[0]?.text || "";
        const clean = (content || "").toString().trim();
        // Ensure it ends with a question mark; otherwise append one
        if (clean && !clean.endsWith("?")) return clean + "?";
        return clean || original;
    } catch (e) {
        console.warn("rewrite failed, falling back to original", e?.message ?? e);
        return original;
    }
}
function truncateToThreeSentences(s: string): string {
    try {
        const str = (s || "").trim();
        // split into sentences
        const parts = str.match(/[^.!?]+[.!?]+/g) || [str];
        // prefer the first sentence
        let first = parts[0] || str;
        first = first.replace(/[\n\r]+/g, " ").trim();
        // if first sentence is long, try splitting by comma and take first clause
        const words = first.split(/\s+/).filter(Boolean);
        if (words.length > 25) {
            const clauses = first.split(/,|;|—/);
            if (clauses && clauses[0]) {
                first = clauses[0].trim();
            }
        }
        let finalWords = first.split(/\s+/).filter(Boolean);
        if (finalWords.length > 25) finalWords = finalWords.slice(0, 25);
        let out = finalWords.join(" ").trim();
        // ensure it ends with a question mark
        if (!out.endsWith("?")) out = out.replace(/[.?!]+$/g, "") + "?";
        return out;
    } catch (e) {
        return s;
    }
}

export async function rewriteQuestionWithAI(text: string): Promise<string> {
    const key = String(text).slice(0, 500);
    let cached = rewriteCache.get(key);
    if (cached) return cached;

    // Attempt rewrite via proxy/OpenAI
    let rewritten = await callOpenAIRewrite(text);

    // Enforce ≤3 sentences and ensure it ends with a question mark
    try {
        rewritten = truncateToThreeSentences(rewritten || text);
        const trimmed = rewritten.trim();
        if (!trimmed) {
            rewritten = text;
        } else {
            const last = trimmed.charAt(trimmed.length - 1);
            if (last !== "?") {
                // if ends with . or ! replace with ? else append
                if (last === "." || last === "!") {
                    rewritten = trimmed.slice(0, -1) + "?";
                } else {
                    rewritten = trimmed + "?";
                }
            } else {
                rewritten = trimmed;
            }
        }
    } catch (e) {
        rewritten = text;
    }

    try {
        rewriteCache.set(key, rewritten);
    } catch (e) {
        // ignore cache errors
    }

    return rewritten;
}

export async function getRandomQuestionsAsync(count = 6): Promise<QuizQuestion[]> {
    const pool = getRandomQuestions(count);
    const results: QuizQuestion[] = [];
    const allTitles = getAllTitles();
    for (const q of pool) {
        const rewrittenQuestion = await rewriteQuestionWithAI(q.question);
        const cleanAnswer = await rewriteAnswerWithAI(q.answer);
        let distractors = await generateCleanDistractors(cleanAnswer, allTitles, 3);
        // ensure unique and not equal to cleanAnswer
        distractors = distractors.filter((d) => d && d.toLowerCase() !== cleanAnswer.toLowerCase());
        while (distractors.length < 3) {
            distractors.push(`${cleanAnswer} (alt ${distractors.length + 1})`);
        }
        const choices = shuffleArray([
            { text: cleanAnswer, isCorrect: true },
            ...distractors.slice(0, 3).map((t) => ({ text: t, isCorrect: false })),
        ]);
        results.push({ ...q, question: rewrittenQuestion, answer: cleanAnswer, title: q.title, guide: q.guide, number: q.number, choices });
    }
    return results;
}

export default {
    getRandomQuestions,
    getAllQuestions,
    getAllTitles,
};
