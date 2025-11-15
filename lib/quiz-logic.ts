export type Choice = { text: string; isCorrect: boolean };

export function shuffleArray<T>(arr: T[]): T[] {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export function generateChoices(
    correctText: string,
    allDistractors: string[],
    count = 3
): Choice[] {
    const pool = allDistractors.filter((t) => t && t !== correctText);
    const picks: string[] = [];
    const used = new Set<number>();
    while (picks.length < count && pool.length > 0) {
        const i = Math.floor(Math.random() * pool.length);
        if (used.has(i)) continue;
        used.add(i);
        picks.push(pool[i]);
    }

    // fallback simple transformations if not enough distractors
    while (picks.length < count) {
        const alt = `${correctText} (common)`;
        if (!picks.includes(alt)) picks.push(alt);
    }

    const choices: Choice[] = [
        { text: correctText, isCorrect: true },
        ...picks.map((p) => ({ text: p, isCorrect: false })),
    ];

    return shuffleArray(choices);
}

// Rewrite an answer into a short noun phrase using the local OpenAI proxy.
export async function rewriteAnswerWithAI(answer: string): Promise<string> {
    const original = String(answer || "").trim();
    if (!original) return original;

    const prompt = `Rewrite the following text as a short noun phrase (max 8 words). Do not make it a sentence or a command. Do not start with verbs like describe, explain, identify, outline. Return only the phrase.\n\nOriginal:\n"""${original}"""`;

    // local availability cache to prevent repeated immediate retries
    let localAvailCache: { available: boolean; ts: number } | null = (globalThis as any).__quiz_local_proxy_avail || null;
    const LOCAL_TTL = 60 * 1000;
    const now = Date.now();
    if (localAvailCache && now - localAvailCache.ts < LOCAL_TTL && !localAvailCache.available) {
        // proxy recently marked unavailable — skip network call
        return (function fallbackShort() {
            try {
                const words = original.split(/\s+/).filter(Boolean);
                if (words.length <= 8) return original;
                return words.slice(0, Math.min(6, words.length)).join(" ");
            } catch (e) {
                return original;
            }
        })();
    }

    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 4000);
        let resp;
        try {
            resp = await fetch("http://localhost:3000/api/openai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt, model: "gpt-3.5-turbo", max_tokens: 60 }),
                signal: controller.signal,
            });
        } finally {
            clearTimeout(timeout);
        }

        if (!resp || !resp.ok) {
            const txt = resp && typeof resp.text === "function" ? await resp.text().catch(() => "") : "";
            console.warn("rewriteAnswerWithAI proxy failure", resp && resp.status, txt);
            // mark unavailable in global cache
            try {
                (globalThis as any).__quiz_local_proxy_avail = { available: false, ts: Date.now() };
            } catch (e) {}
            throw new Error("proxy failure");
        }

        const data = await resp.json().catch(() => null);
        const content = data?.choices?.[0]?.message?.content ?? data?.choices?.[0]?.text ?? "";
        let out = String(content || "").trim();

        // cleanup: remove trailing punctuation and limit words
        out = out.replace(/[.?!]$/g, "");
        const words = out.split(/\s+/).filter(Boolean);
        if (words.length > 8) out = words.slice(0, 8).join(" ");
        out = out.replace(/^(describe|explain|identify|outline)\s+/i, "");

        if (!out) return original;
        return out;
    } catch (err) {
        // mark proxy as unavailable to short-circuit further attempts
        try {
            (globalThis as any).__quiz_local_proxy_avail = { available: false, ts: Date.now() };
        } catch (e) {}
        // safe fallback: derive a short noun phrase from the original
        try {
            const words = original.split(/\s+/).filter(Boolean);
            if (words.length <= 8) return original;
            return words.slice(0, Math.min(6, words.length)).join(" ");
        } catch (e) {
            return original;
        }
    }
}

// Generate clean distractors matching the answer style using candidate pool.
export async function generateCleanDistractors(
    cleanAnswer: string,
    candidates: string[],
    count = 3
): Promise<string[]> {
    const out: string[] = [];
    const pool = (candidates || [])
        .map((s) => String(s || "").trim())
        .filter(Boolean)
        .filter((s) => s.toLowerCase() !== cleanAnswer.toLowerCase());
    const used = new Set<string>([cleanAnswer.toLowerCase()]);

    // try candidate pool first
    const shuffled = shuffleArray(pool.slice());
    for (const c of shuffled) {
        if (out.length >= count) break;
        try {
            const r = await rewriteAnswerWithAI(c);
            const rc = r.trim();
            if (!rc) continue;
            const key = rc.toLowerCase();
            if (used.has(key)) continue;
            used.add(key);
            out.push(rc);
        } catch (e) {
            continue;
        }
    }

    // fallback heuristics if not enough
    let i = 1;
    while (out.length < count) {
        // create short variations from the answer
        const parts = cleanAnswer.split(/\s+/).filter(Boolean);
        let candidate = parts
            .slice(0, Math.max(1, Math.min(3, parts.length - i)))
            .join(" ");
        if (!candidate) candidate = `Related concept ${i}`;
        candidate = candidate.replace(/[,.;]$/g, "");
        const key = candidate.toLowerCase();
        if (!used.has(key)) {
            used.add(key);
            out.push(candidate);
        }
        i++;
        if (i > 10) break;
    }

    return out
        .slice(0, count)
        .map((s) => s.trim())
        .filter(Boolean);
}

export function calculatePercentage(score: number, total: number): number {
    if (total === 0) return 0;
    return Math.round((score / total) * 100);
}

export function passed(score: number, total: number, threshold = 0.7): boolean {
    if (total === 0) return false;
    return score / total >= threshold;
}

export default { shuffleArray, generateChoices, calculatePercentage, passed };
