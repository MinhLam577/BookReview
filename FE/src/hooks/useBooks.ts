import { getBooks } from "../api/book.api";

import { useQuery } from "@tanstack/react-query";

export function useBooks(category?: string, search?: string) {
    return useQuery({
        queryKey: ["books", category, search],
        queryFn: () => getBooks(category, search),
    });
}
