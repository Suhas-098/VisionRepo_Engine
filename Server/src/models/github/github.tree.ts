export async function fetchRepoTree(
    owner: string,
    repo: string,
    branch: string
) {
    const res = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch repository tree");
    }

    const data = await res.json();
    return data.tree as Array<{ path: string; type: string }>;
}
