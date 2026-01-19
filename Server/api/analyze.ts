import type { VercelRequest, VercelResponse } from "@vercel/node";
import { analyzeGitHubRepo } from "../src/models/github/github.service.js";
import { analyzeSystemArchitecture } from "../src/models/gemini.js";

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    // ✅ CORS HEADERS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // ✅ Handle preflight request
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { repoUrl } = req.body;

        if (!repoUrl) {
            return res.status(400).json({ message: "repoUrl is required" });
        }

        const githubResult = await analyzeGitHubRepo(repoUrl);
        const aiResult = await analyzeSystemArchitecture(githubResult);

        return res.status(200).json({
            success: true,
            data: {
                ...githubResult,
                ai: aiResult
            }
        });
    } catch (error: any) {
        console.error("Analyze error:", error);
        return res.status(500).json({
            message: "Analysis failed",
            error: error?.message || "Unknown error"
        });
    }
}
