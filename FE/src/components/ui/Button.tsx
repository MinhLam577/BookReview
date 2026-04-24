import { motion } from "motion/react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader2 } from "lucide-react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    isLoading?: boolean;
    variant?: "primary" | "secondary" | "ghost";
    className?: string;
};

export function Button({
    children,
    isLoading,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    const variants = {
        primary:
            "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40",
        secondary:
            "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700",
        ghost: "bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading || props.disabled}
            className={`
        relative overflow-hidden px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2
        disabled:opacity-70 disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
            {...props}
        >
            <span className={isLoading ? "opacity-0" : "opacity-100"}>
                {children}
            </span>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="animate-spin" size={20} />
                </div>
            )}
        </motion.button>
    );
}
