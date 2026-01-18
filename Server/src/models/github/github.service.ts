import { parseGitHubUrl } from "./github.parser.js";
import { fetchRepoTree } from "./github.tree.js";
import { isImportantFile, fetchFileContent } from "./github.files.js";

export async function analyzeGitHubRepo(repoUrl: string) {
    const { owner, repo, branch } = parseGitHubUrl(repoUrl);

    const tree = await fetchRepoTree(owner, repo, branch);

    const importantFiles = tree
        .filter(item => item.type === "blob")
        .filter(item => isImportantFile(item.path));

    const files = [];

    for (const file of importantFiles) {
        const content = await fetchFileContent(
            owner,
            repo,
            branch,
            file.path
        );

        if (!content) continue;

        files.push({
            path: file.path,
            content,
            size: content.length
        });
    }

    return {
        repoMeta: {
            owner,
            repo,
            branch,
            totalFiles: tree.length,
            analyzedFiles: importantFiles.length
        },
        files
    };
}
