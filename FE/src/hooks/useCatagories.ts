import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/book.api";

export default function useCategories() {
    return useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
        staleTime: 1000 * 60 * 10, // cache 10 phút
    });
}
