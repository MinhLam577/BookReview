import { useEffect, useMemo, useState } from "react";
import BookCard from "../components/BookCard";
import { useBooks } from "../hooks/useBooks";
import { Empty, Skeleton } from "antd";
import { useSearchParams } from "react-router-dom";
import { BookCardSkeleton } from "../components/BookCardSkeleton";
import useCategories from "../hooks/useCatagories";
export default function Explore() {
    const [params] = useSearchParams();
    const search = params.get("search") || "";

    const [selectedCategory, setSelectedCategory] = useState("All");

    const { data: categories = [], isLoading: isLoadingCategories } =
        useCategories();

    const { data: books = [], isLoading } = useBooks(selectedCategory, search);

    const skeletonItems = Array.from({ length: 8 });
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-16">
                <h1 className="text-5xl font-serif font-bold mb-8">
                    Explore Catalog
                </h1>

                {/* Categories */}
                <Skeleton loading={isLoading} active paragraph={{ rows: 2 }}>
                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`cursor-pointer px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                                    selectedCategory === cat
                                        ? "bg-brand-primary text-white shadow-lg"
                                        : "bg-white border border-black/5 hover:border-black/20"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </Skeleton>
            </div>
            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {skeletonItems.map((_, i) => (
                        <BookCardSkeleton key={i} index={i} />
                    ))}
                </div>
            ) : books.length === 0 ? (
                <Empty description="No books found" />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {books.map((book, index) => (
                        <BookCard key={book.id} book={book} index={index} />
                    ))}
                </div>
            )}
        </div>
    );
}
