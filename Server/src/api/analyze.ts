import type { VercelRequest, VercelResponse } from "@vercel/node";
import { analyzeGitHubRepo } from "../models/github/github.service.js";
import { analyzeSystemArchitecture } from "../models/gemini.js";

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
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

        return res.json({
            success: true,
            data: {
                ...githubResult,
                ai: aiResult
            }
        });
    } catch (error) {
        console.error("Analyze error:", error);
        return res.status(500).json({ message: "Analysis failed" });
    }
}
