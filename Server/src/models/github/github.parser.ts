export interface ParsedGitHubRepo {
    owner: string;
    repo: string;
    branch: string;
}

export function parseGitHubUrl(url: string): ParsedGitHubRepo {
    const match = url.match(
        /^https:\/\/github\.com\/([^\/]+)\/([^\/]+)(?:\/tree\/([^\/]+))?/
    );

    if (!match) {
        throw new Error("Invalid GitHub repository URL");
    }

    return {
        owner: match[1]!,
        repo: match[2]!,
        branch: match[3] ?? "main",
    };
}
