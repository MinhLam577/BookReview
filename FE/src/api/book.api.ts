import { fetchAPI } from "../lib/helperFetchApi";
import { Book } from "../types/models/book";
import { ApiResponse } from "../types/models/response";

export async function getBooks(category?: string, search?: string) {
    const params = new URLSearchParams();

    if (category && category !== "All") {
        params.append("category", category);
    }

    if (search) {
        params.append("search", search);
    }
    const res = await fetchAPI<ApiResponse<Book[]>>(
        `/books?${params.toString()}`
    );
    return (res?.data || res) as Book[];
}

export async function getBookById(id: string) {
    return fetchAPI<Book>(`/books/${id}`);
}
export async function getCategories() {
    return fetchAPI<string[]>("/books/categories");
}
