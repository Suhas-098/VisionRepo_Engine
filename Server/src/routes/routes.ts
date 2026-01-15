import express from "express";
import { analyzeSystemArchitecture } from "../models/gemini.js";

const router = express.Router();

// router.post("/analyze", async (req, res) => {
//     try {
//         const { repoUrl } = req.body;
//         if (!repoUrl) {
//             return res.status(400).json({ error: "repoUrl is required" });
//         }

//         const result = await analyzeSystemArchitecture({ repoUrl });
//         res.json(result);
//     } catch (error) {
//         console.error("Error analyzing repo:", error);
//         res.status(500).json({ error: "Failed to analyze repo" });
//     }
// });
router.post("/analyze", async (req, res) => {
    try {
        const { repoUrl } = req.body as { repoUrl?: string };

        if (!repoUrl) {
            return res.status(400).json({ error: "repoUrl is required" });
        }

        // later you will transform repoUrl → RepoAnalysisInput
        res.json({ success: true, repoUrl });
    } catch (err) {
        res.status(500).json({ error: "Failed to analyze repo" });
    }
});


export default router;