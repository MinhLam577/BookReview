import { motion } from "motion/react";
import { useState, FormEvent } from "react";
import { Mail, Lock, Eye, EyeOff, Github, Chrome } from "lucide-react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { mutate: loginUser, isPending, error } = useLogin();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            return alert("Please fill in all fields");
        }

        loginUser(
            { email, password },
            {
                onSuccess: () => {
                    navigate("/");
                },
                onError: (err: any) => {
                    console.error(err);
                },
            }
        );
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-[#0A0A0A]">
            {/* Atmospheric Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-600/10 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-md z-10"
            >
                <div className="bg-white/5 dark:bg-gray-900/40 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                    <div
                        className="text-center mb-10 cursor-pointer"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6 shadow-xl shadow-blue-500/20"
                        >
                            <div className="w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
                                <span className="text-white font-bold text-xl">
                                    N
                                </span>
                            </div>
                        </motion.div>
                        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-gray-400 font-medium">
                            Log in to your account
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="name@example.com"
                            icon={Mail}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <div className="relative">
                            <Input
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                icon={Lock}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-[38px] text-gray-400 hover:text-white transition-colors"
                                id="password-toggle"
                            >
                                {showPassword ? (
                                    <EyeOff size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="checkbox"
                                        className="peer sr-only"
                                    />
                                    <div className="w-5 h-5 border-2 border-gray-600 rounded-lg group-hover:border-blue-500 transition-colors peer-checked:bg-blue-600 peer-checked:border-blue-600" />
                                    <div className="absolute scale-0 peer-checked:scale-100 transition-transform">
                                        <svg
                                            className="w-3 h-3 text-white fill-current"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                        </svg>
                                    </div>
                                </div>
                                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                    Remember me
                                </span>
                            </label>
                            <a
                                href="#"
                                className="text-blue-500 hover:text-blue-400 font-medium transition-colors"
                            >
                                Forgot password?
                            </a>
                        </div>

                        <Button
                            type="submit"
                            isLoading={isPending}
                            disabled={isPending}
                            className="w-full py-4 text-lg"
                        >
                            {isPending ? "Logging in..." : "Login"}
                        </Button>
                        {error && (
                            <p className="text-red-500">{error.message}</p>
                        )}
                    </form>

                    <div className="mt-8">
                        <div className="relative flex items-center py-2 mb-6">
                            <div className="flex-grow border-t border-white/5"></div>
                            <span className="flex-shrink mx-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">
                                Or continue with
                            </span>
                            <div className="flex-grow border-t border-white/5"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Button
                                variant="secondary"
                                className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                            >
                                <Chrome size={18} /> Google
                            </Button>
                            <Button
                                variant="secondary"
                                className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                            >
                                <Github size={18} /> GitHub
                            </Button>
                        </div>
                    </div>

                    <div className="mt-10 text-center">
                        <p className="text-gray-400 font-medium">
                            Don't have an account?{" "}
                            <a
                                href="#"
                                className="text-white hover:text-blue-400 font-semibold transition-colors"
                            >
                                Sign up for free
                            </a>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
