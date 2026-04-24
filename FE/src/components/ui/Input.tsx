import { motion, AnimatePresence } from "motion/react";
import { LucideIcon } from "lucide-react";
import { InputHTMLAttributes, useState } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    icon?: LucideIcon;
    error?: string;
    className?: string;
};

export function Input({
    label,
    icon: Icon,
    error,
    className = "",
    ...props
}: InputProps) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={`space-y-1.5 w-full ${className}`}>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                {label}
            </label>
            <div className="relative group">
                <div
                    className={`
            absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-md transition-opacity duration-300
            ${isFocused || props.value ? "opacity-100" : "opacity-0"}
          `}
                />
                <div className="relative flex items-center">
                    {Icon && (
                        <div
                            className={`absolute left-4 transition-colors duration-200 ${
                                isFocused ? "text-blue-500" : "text-gray-400"
                            }`}
                        >
                            <Icon size={18} />
                        </div>
                    )}
                    <input
                        {...props}
                        onFocus={(e) => {
                            setIsFocused(true);
                            props.onFocus?.(e);
                        }}
                        onBlur={(e) => {
                            setIsFocused(false);
                            props.onBlur?.(e);
                        }}
                        className={`
              w-full px-4 py-3 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border-2 transition-all duration-200 outline-none rounded-xl
              ${Icon ? "pl-11" : ""}
              ${
                  error
                      ? "border-red-500/50 focus:border-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.1)]"
                      : "border-transparent focus:border-blue-500/50 bg-white/70 dark:bg-gray-800/70 shadow-sm focus:shadow-md"
              }
              text-gray-900 dark:text-gray-100 placeholder:text-gray-400
            `}
                    />
                </div>
            </div>
            <AnimatePresence>
                {error && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-xs font-medium text-red-500 ml-1"
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
}
