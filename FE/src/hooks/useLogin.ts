import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth.api";

export function useLogin() {
    return useMutation({
        mutationFn: ({
            email,
            password,
        }: {
            email: string;
            password: string;
        }) => login(email, password),

        onSuccess: (data) => {
            localStorage.setItem("token", data.access_token);
        },
    });
}
