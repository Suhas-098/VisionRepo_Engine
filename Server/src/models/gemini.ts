import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
});

type RepoAnalysisInput = {
    repoName: string;
    fileTree: string;
    keyFiles: Record<string, string>;
};

export const analyzeSystemArchitecture = async (
    input: RepoAnalysisInput
) => {
    try {
        const { repoName, fileTree, keyFiles } = input;

        // ✅ FORMAT KEY FILES FOR LLM READABILITY
        const formattedKeyFiles = Object.entries(keyFiles)
            .map(
                ([fileName, content]) =>
                    `File: ${fileName}\n${content}`
            )
            .join("\n\n");

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: `
                    Repository Name:
                    ${repoName}

                    File Tree:
                    ${fileTree}

                    Key Files:
                    ${formattedKeyFiles}

                    Analyze this repository as if you are onboarding a new developer.
`
                        }
                    ]
                }
            ],
            config: {
                responseMimeType: "application/json",
                systemInstruction: `
                    You are a senior software architect.

                    Your task is to understand an unfamiliar software repository
                    and explain its system architecture.

                    Rules:
                    - Think at repository level, not file level.
                    - Identify backend, frontend, database, and external services.
                    - Explain folder responsibilities.
                    - Identify the entry point and request flow.
                    - Do NOT assume the presence of a database or authentication unless explicitly found in the repository.
                    - Do NOT assume the presence of a frontend unless explicitly found in the repository.
                    - DO NOT include visualization or UI-specific data.
                    - DO NOT include markdown.
                    - Return ONLY valid JSON.

                    Return JSON strictly in this schema:

                    {
                        "summary": "string",
                        "repoType": "string",
                        "entryPoint": "string",
                        "techStack": ["string"],
                        "folders": {
                            "path": "responsibility"
                        },
                        "components": [
                            {
                                "name": "string",
                                "type": "frontend | backend | database | external",
                                "responsibility": "string"
                            }
                        ],
                        "flow": ["string"],
                        "onboardingSteps": ["string"],
                        "missingContext": ["string"],
                        "stateless": true,
                        "persistence": "none (stateless analysis)",
                        "confidenceScore": 0.0
                    }
                    `
            }
        });

        const rawJson =
            response.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!rawJson) {
            throw new Error("No content returned from Gemini");
        }

        // ✅ SAFE JSON PARSE
        return JSON.parse(rawJson);
    } catch (error) {
        console.error("Gemini Analysis Error:", error);
        throw error;
    }
};
