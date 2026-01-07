import express from "express";
import { analyzeSystemArchitecture } from "../models/gemini.js";

const router = express.Router();

router.post("/analyze", async (req, res) => {
    try {
        const { repoName, fileTree, keyFiles } = req.body;
        if (!repoName || !fileTree || !keyFiles) {
            return res.status(400).json({ error: "repoName, fileTree, and keyFiles are required" });
        }

        const result = await analyzeSystemArchitecture({ repoName, fileTree, keyFiles });
        res.json(result);
    } catch (error) {
        console.error("Error analyzing repo:", error);
        res.status(500).json({ error: "Failed to analyze repo" });
    }
});

export default router;