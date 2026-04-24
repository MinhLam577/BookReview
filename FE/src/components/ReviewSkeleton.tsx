export default function ReviewSkeleton() {
    return (
        <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="animate-pulse border p-4 rounded-xl">
                    <div className="h-4 bg-gray-300 rounded w-1/3 mb-2" />
                    <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                    <div className="h-4 bg-gray-300 rounded w-2/3" />
                </div>
            ))}
        </div>
    );
}
