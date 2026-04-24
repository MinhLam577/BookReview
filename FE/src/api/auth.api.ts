import { fetchAPI } from "../lib/helperFetchApi";

import { LoginResponse } from "../types/models/auth";
export async function login(email: string, password: string) {
    const data = await fetchAPI<LoginResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });

    localStorage.setItem("token", data.access_token);
    return data;
}
