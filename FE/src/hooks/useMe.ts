import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../api/user.api";

export function useMe() {
    return useQuery({
        queryKey: ["me"],
        queryFn: getCurrentUser,
        enabled: !!localStorage.getItem("token"),
        staleTime: 1000 * 60 * 5,
    });
}
