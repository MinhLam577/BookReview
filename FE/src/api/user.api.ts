import { fetchAPI } from "../lib/helperFetchApi";
import { User } from "../types/models/user";

export async function getCurrentUser() {
    return await fetchAPI<User>("/users/me");
}
