import { apiClient } from "./client";

export function analyzeRepository(repoUrl: string) {
    return apiClient("/api/analyze", {
        method: "POST",
        body: JSON.stringify({ repoUrl })
    });
}