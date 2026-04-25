const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export async function fetchAPI<T>(
    url: string,
    options: RequestInit = {}
): Promise<T> {
    const token = localStorage.getItem("token");

    const res = await fetch(BASE_API_URL + url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...(options.headers || {}),
        },
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.detail || "API Error");
    }

    return data;
}
