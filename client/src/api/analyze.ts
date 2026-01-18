import { apiClient } from "./client";

type AnalyzeResponse = {
    success: boolean;
    data: {
        repoMeta: {
            owner: string;
            repo: string;
            branch: string;
            totalFiles: number;
            analyzedFiles: number;
        };
        files: {
            path: string;
            content: string;
        }[];
    };
};

export function analyzeRepo(repoUrl: string) {
    return apiClient<AnalyzeResponse>("/api/analyze", {
        method: "POST",
        body: JSON.stringify({ repoUrl })
    });
}
