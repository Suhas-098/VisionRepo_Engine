import express from "express";
import { analyzeGitHubRepo } from "../models/github/github.service.js";
import { analyzeSystemArchitecture } from "../models/gemini.js";

const router = express.Router();

router.post("/analyze", async (req, res) => {
    try {
        const { repoUrl } = req.body;

        if (!repoUrl) {
            return res.status(400).json({
                message: "repoUrl is required"
            });
        }

        // gitHub analysis
        const githubResult = await analyzeGitHubRepo(repoUrl);

        // gemini analysis
        const aiResult = await analyzeSystemArchitecture(githubResult);


        res.json({
            success: true,
            data: {
                ...githubResult,
                ai: aiResult
            }
        });

    } catch (error) {
        console.error("Analyze error:", error);
        res.status(500).json({
            message: "Analysis failed"
        });
    }
});

export default router;
