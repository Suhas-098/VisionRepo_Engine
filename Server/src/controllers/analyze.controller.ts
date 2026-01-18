import { analyzeGitHubRepo } from "../models/github/github.service.js";
import type { Request, Response, NextFunction } from "express";


export const analyzeRepoController = async (req: Request, res: Response, next: NextFunction) => {
    console.log("REQ BODY:", req.body);

    try {
        const { repoUrl } = req.body;

        if (!repoUrl) {
            throw new Error("repoUrl is required");
        }

        const result = await analyzeGitHubRepo(repoUrl);

        res.json({
            success: true,
            data: result
        });
    } catch (err) {
        next(err);
    }
};
