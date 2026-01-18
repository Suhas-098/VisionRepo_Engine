const IMPORTANT_FILES = [
    "package.json",
    "README.md",
    "tsconfig.json",
    "next.config.js",
    "prisma/schema.prisma",
];

export function isImportantFile(path: string) {
    if (IMPORTANT_FILES.includes(path)) return true;
    if (path.startsWith("src/")) return true;
    return false;
}

export async function fetchFileContent(
    owner: string,
    repo: string,
    branch: string,
    path: string
) {
    const res = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`
    );

    if (!res.ok) return null;

    const data = await res.json();

    if (!data.content) return null;

    return Buffer.from(data.content, "base64").toString("utf-8");
}
