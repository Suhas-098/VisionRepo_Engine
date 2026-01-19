export async function apiClient<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        ...options,
    });

    if (!response.ok) {
        let message = "Something went wrong";
        try {
            const err = await response.json();
            message = err.message ?? message;
        } catch { }
        throw new Error(message);
    }

    return response.json();
}
