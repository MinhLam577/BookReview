import { motion } from "framer-motion";

export function BookCardSkeleton({ index }: { index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
        >
            <div className="flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-black/5 animate-pulse">
                {/* Cover Image */}
                <div className="relative aspect-[3/4] bg-gray-200">
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                        <div className="h-5 w-16 bg-white/70 rounded-full" />
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 space-y-3">
                    {/* Title */}
                    <div className="h-5 bg-gray-200 rounded w-3/4" />

                    {/* Author */}
                    <div className="h-4 bg-gray-200 rounded w-1/2" />

                    {/* Spacer giống mt-auto */}
                    <div className="flex-1" />

                    {/* Footer */}
                    <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                        {/* Rating */}
                        <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="w-3 h-3 bg-gray-200 rounded"
                                />
                            ))}
                        </div>

                        {/* Review count */}
                        <div className="h-3 bg-gray-200 rounded w-12" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
