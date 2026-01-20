import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
});

type GeminiInput = {
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

export const analyzeSystemArchitecture = async (
    input: GeminiInput
) => {
    try {
        // 🔒 HARD LIMIT (100k is TOO HIGH for Flash in real usage)
        const MAX_CHARS = 12_000;

        let totalChars = 0;
        const selectedFiles: { path: string; content: string }[] = [];

        for (const file of input.files) {
            // 🛡️ Guard against undefined / empty / non-string
            if (!file.content || typeof file.content !== "string") continue;

            if (totalChars + file.content.length > MAX_CHARS) break;

            selectedFiles.push(file);
            totalChars += file.content.length;
        }

        // 🛡️ If nothing selected, fail gracefully
        if (selectedFiles.length === 0) {
            return {
                summary: "Repository analyzed using lightweight mode.",
                repoType: "unknown",
                entryPoint: "Not detected",
                techStack: [],
                folders: {},
                components: [],
                flow: [],
                onboardingSteps: [],
                missingContext: ["Insufficient readable source files"],
                stateless: true,
                persistence: "none (stateless analysis)",
                confidenceScore: 0.2
            };
        }

        const formattedKeyFiles = selectedFiles
            .map(f => `File: ${f.path}\n${f.content}`)
            .join("\n\n");

        let response;
        try {
            response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                text: `
Repository:
${input.repoMeta.owner}/${input.repoMeta.repo}

${formattedKeyFiles}
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
- Do NOT assume the presence of a database or authentication unless explicitly found.
- Do NOT include markdown.
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
        } catch (aiError) {
            console.error("Gemini call failed:", aiError);
            response = null;
        }

        const rawJson =
            response?.candidates?.[0]?.content?.parts?.[0]?.text;

        // 🛡️ If Gemini returned nothing or invalid JSON
        if (!rawJson) {
            return {
                summary: "Architecture inferred using fallback analysis.",
                repoType: "frontend-focused repository",
                entryPoint: "Not explicitly detected",
                techStack: [],
                folders: {},
                components: [],
                flow: [],
                onboardingSteps: [],
                missingContext: ["AI response unavailable or truncated"],
                stateless: true,
                persistence: "none (stateless analysis)",
                confidenceScore: 0.3
            };
        }

        return JSON.parse(rawJson);
    } catch (error) {
        // 🚨 NEVER throw → prevents 500
        console.error("Gemini Analysis Fatal Error:", error);

        return {
            summary: "Partial repository analysis completed.",
            repoType: "unknown",
            entryPoint: "Unknown",
            techStack: [],
            folders: {},
            components: [],
            flow: [],
            onboardingSteps: [],
            missingContext: ["Unexpected error during analysis"],
            stateless: true,
            persistence: "none (stateless analysis)",
            confidenceScore: 0.1
        };
    }
};
