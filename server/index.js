#!/usr/bin/env node
// Minimal OpenAI proxy server. Keep your OPENAI_API_KEY in environment variables.
// Load .env when present
try {
    require("dotenv").config();
} catch (e) {}
const http = require("http");
const url = require("url");

const PORT = process.env.PORT || 3000;

function sendJson(res, status, obj) {
    const body = JSON.stringify(obj);
    res.writeHead(status, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
    });
    res.end(body);
}

async function proxyOpenAI(prompt, model = "gpt-3.5-turbo", max_tokens = 500) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey)
        throw new Error("OPENAI_API_KEY not set in server environment");

    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model,
            messages: [{ role: "user", content: prompt }],
            max_tokens,
        }),
    });

    if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`OpenAI error: ${resp.status} ${text}`);
    }
    return resp.json();
}

const fs = require("fs");
const path = require("path");

function shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Simple in-memory cache to avoid repeated OpenAI calls for the same question
// Key format: `${sourceFile||'all'}|${sectionTitle}|${questionNumber}`
const quizCache = new Map();

function cleanChoice(s) {
    return (s || "").toString().trim().replace(/^"|"$/g, "");
}

const server = http.createServer(async (req, res) => {
    const parsed = url.parse(req.url, true);
    if (req.method === "OPTIONS") return sendJson(res, 200, { ok: true });

    if (req.method === "POST" && parsed.pathname === "/api/openai") {
        try {
            let body = "";
            for await (const chunk of req) body += chunk;
            const { prompt, model, max_tokens } = body ? JSON.parse(body) : {};
            if (!prompt)
                return sendJson(res, 400, {
                    error: "missing prompt in request body",
                });
            const data = await proxyOpenAI(prompt, model, max_tokens);
            return sendJson(res, 200, data);
        } catch (err) {
            console.error("proxy error", err);
            return sendJson(res, 500, { error: String(err) });
        }
    }

    if (req.method === "POST" && parsed.pathname === "/api/quiz") {
        try {
            let body = "";
            for await (const chunk of req) body += chunk;
            const { file, questionNumber, section, questionText, item } = body
                ? JSON.parse(body)
                : {};

            // Questions directory
            const questionsDir = path.join(__dirname, "..", "questions");

            // Build allQuestions from either a specific file or all files
            const allQuestions = [];
            if (file) {
                const target = path.join(questionsDir, path.basename(file));
                if (!target.startsWith(questionsDir))
                    return sendJson(res, 400, { error: "invalid file" });
                if (!fs.existsSync(target))
                    return sendJson(res, 404, { error: "file not found" });
                const contents = fs.readFileSync(target, "utf8");
                const parsedFile = JSON.parse(contents);
                for (const sectionObj of parsedFile) {
                    if (Array.isArray(sectionObj.questions)) {
                        for (const q of sectionObj.questions) {
                            allQuestions.push({
                                ...q,
                                title: sectionObj.title,
                                guide: sectionObj.guide,
                                sourceFile: path.basename(file),
                            });
                        }
                    }
                }
            } else {
                // Read all json files in questions directory
                if (!fs.existsSync(questionsDir))
                    return sendJson(res, 500, {
                        error: "questions directory missing",
                    });
                const files = fs
                    .readdirSync(questionsDir)
                    .filter((f) => f.endsWith(".json"));
                for (const fname of files) {
                    try {
                        const contents = fs.readFileSync(
                            path.join(questionsDir, fname),
                            "utf8"
                        );
                        const parsedFile = JSON.parse(contents);
                        for (const sectionObj of parsedFile) {
                            if (Array.isArray(sectionObj.questions)) {
                                for (const q of sectionObj.questions) {
                                    allQuestions.push({
                                        ...q,
                                        title: sectionObj.title,
                                        guide: sectionObj.guide,
                                        sourceFile: fname,
                                    });
                                }
                            }
                        }
                    } catch (e) {
                        console.warn(
                            "failed to read questions file",
                            fname,
                            e.message
                        );
                    }
                }
            }

            if (allQuestions.length === 0)
                return sendJson(res, 400, { error: "no questions available" });

            // Optionally filter by section (title or guide) across the pool
            let pool = allQuestions;
            if (section) {
                pool = allQuestions.filter(
                    (x) => x.title === section || x.guide === section
                );
                if (pool.length === 0) {
                    // fallback to full pool if specified section not found
                    pool = allQuestions;
                }
            }

            // Optionally find by explicit question number or exact question text/item
            let q;
            if (typeof questionNumber === "number") {
                q = pool.find((x) => x.number === questionNumber) || pool[0];
            } else if (questionText || item) {
                const matchText = questionText || item;
                q =
                    pool.find((x) => x.question === matchText) ||
                    pool.find((x) => x.question?.includes(matchText)) ||
                    pool[0];
            } else {
                q = pool[Math.floor(Math.random() * pool.length)];
            }

            // Try cache first
            const cacheKey = `${q.sourceFile || "all"}|${q.title || ""}|${
                q.number || ""
            }`;
            if (quizCache.has(cacheKey)) {
                const cached = quizCache.get(cacheKey);
                return sendJson(res, 200, {
                    question: q.question,
                    guide: q.guide,
                    title: q.title,
                    number: q.number,
                    sourceFile: q.sourceFile,
                    choices: cached,
                });
            }

            // Local distractor generator (no OpenAI) — simple heuristics
            function generateLocalWrongs(answer) {
                const out = [];
                const a = (answer ?? "").toString().trim();

                // Numeric answers
                if (/^\d+$/.test(a)) {
                    const num = parseInt(a, 10);
                    out.push(String(num + 1));
                    out.push(String(Math.max(0, num - 1)));
                    out.push(String(num + 2));
                    return out;
                }

                // Answers that look like percentages or include digits
                if (/\d/.test(a)) {
                    out.push(a + " approx");
                    out.push("About " + a);
                    out.push("Unknown");
                    return out;
                }

                // Boolean / True or False
                if (
                    /^true$/i.test(a) ||
                    /^false$/i.test(a) ||
                    /^(yes|no)$/i.test(a)
                ) {
                    if (/^true$/i.test(a) || /^yes$/i.test(a)) {
                        return ["False", "Sometimes", "Depends"];
                    }
                    return ["True", "Sometimes", "Depends"];
                }

                // Multi-part answers separated by semicolon or comma
                if (/[;,]/.test(a)) {
                    const parts = a
                        .split(/[;,]/)
                        .map((s) => s.trim())
                        .filter(Boolean);
                    for (let i = 0; i < parts.length && out.length < 3; i++)
                        out.push(parts[i] + " (alt)");
                    while (out.length < 3) out.push(parts[0] + " other");
                    return out;
                }

                // Short phrase / single word — create plausible variations
                const words = a.split(/\s+/);
                if (words.length === 1) {
                    out.push(a + "s");
                    out.push("Non-" + a);
                    out.push(a + " (incorrect)");
                    return out;
                }

                // Multi-word answer: produce small edits
                out.push(
                    words.slice(0, Math.max(1, words.length - 1)).join(" ")
                );
                out.push(words.slice(1).join(" "));
                out.push(words[0] + " " + (words[1] || "") + " (alt)");
                return out;
            }

            const wrongCandidates = generateLocalWrongs(q.answer);
            const cleaned = Array.from(
                new Set(wrongCandidates.map(cleanChoice).filter(Boolean))
            ).filter((x) => x.toLowerCase() !== String(q.answer).toLowerCase());
            const finalWrongs = cleaned.slice(0, 3);
            while (finalWrongs.length < 3)
                finalWrongs.push(`${q.answer} (alt ${finalWrongs.length + 1})`);

            const choices = shuffleArray([
                { text: String(q.answer), isCorrect: true },
                { text: finalWrongs[0], isCorrect: false },
                { text: finalWrongs[1], isCorrect: false },
                { text: finalWrongs[2], isCorrect: false },
            ]);

            // cache
            try {
                quizCache.set(cacheKey, choices);
                if (quizCache.size > 2000) {
                    const firstKey = quizCache.keys().next().value;
                    quizCache.delete(firstKey);
                }
            } catch (e) {
                console.warn("cache set failed", e?.message ?? e);
            }

            return sendJson(res, 200, {
                question: q.question,
                guide: q.guide,
                title: q.title,
                number: q.number,
                choices,
            });
        } catch (err) {
            console.error("quiz error", err);
            return sendJson(res, 500, { error: String(err) });
        }
    }

    // Serve random question(s) from output/ JSON files (array of question objects with options)
    if (req.method === "POST" && parsed.pathname === "/api/output-quiz") {
        try {
            let body = "";
            for await (const chunk of req) body += chunk;
            const { section } = body ? JSON.parse(body) : {};

            const outputDir = path.join(__dirname, "..", "output");
            if (!fs.existsSync(outputDir))
                return sendJson(res, 500, {
                    error: "output directory missing",
                });

            const files = fs
                .readdirSync(outputDir)
                .filter((f) => f.endsWith(".json"));
            const pool = [];
            for (const fname of files) {
                try {
                    const contents = fs.readFileSync(
                        path.join(outputDir, fname),
                        "utf8"
                    );
                    const parsedFile = JSON.parse(contents);
                    if (Array.isArray(parsedFile)) {
                        for (const q of parsedFile) {
                            if (q && q.question && q.options && q.answer) {
                                pool.push({ ...q, sourceFile: fname });
                            }
                        }
                    }
                } catch (e) {
                    console.warn(
                        "failed to read output file",
                        fname,
                        e.message
                    );
                }
            }

            if (pool.length === 0)
                return sendJson(res, 400, {
                    error: "no output questions available",
                });

            let candidates = pool;
            if (section) {
                const s = String(section).toLowerCase();
                const filtered = pool.filter(
                    (x) =>
                        (x.title && String(x.title).toLowerCase() === s) ||
                        (x.question &&
                            String(x.question).toLowerCase().includes(s))
                );
                if (filtered.length > 0) candidates = filtered;
            }

            const q = candidates[Math.floor(Math.random() * candidates.length)];
            const choices = shuffleArray(
                (q.options || []).map((o) => ({
                    text: String(o),
                    isCorrect: String(o) === String(q.answer),
                }))
            );

            return sendJson(res, 200, {
                question: q.question,
                title: q.title || q.sourceFile,
                number: q.number,
                sourceFile: q.sourceFile,
                choices,
            });
        } catch (err) {
            console.error("output-quiz error", err);
            return sendJson(res, 500, { error: String(err) });
        }
    }

    // default: small help text
    if (req.method === "GET" && parsed.pathname === "/api/health") {
        return sendJson(res, 200, { status: "ok" });
    }

    if (req.method === "GET" && parsed.pathname === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        return res.end("OpenAI proxy server. POST /api/openai { prompt }");
    }

    sendJson(res, 404, { error: "not found" });
});

server.listen(PORT, () => {
    console.log(`OpenAI proxy server listening at http://localhost:${PORT}`);
});
