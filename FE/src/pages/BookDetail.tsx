import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Star, MessageSquare, Bookmark, Share2, Plus } from "lucide-react";
import { mockBooks, currentUser } from "../data/mockData";
import RatingStars from "../components/RatingStars";
import ReviewCard from "../components/ReviewCard";
import Modal from "../components/Modal";
import toast from "react-hot-toast";
import { cn } from "../lib/utils";
import { useBooks } from "../hooks/useBooks";
import { Book } from "../types/models/book";

export default function BookDetail() {
    const { id } = useParams();
    const { data: books = [], isLoading, error } = useBooks();
    const book = books.find((b: Book) => b.id === id);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [reviewContent, setReviewContent] = useState("");

    const handleSubmitReview = (e: React.FormEvent) => {
        e.preventDefault();
        if (rating === 0) {
            toast.error("Please select a rating");
            return;
        }
        if (reviewContent.trim().length < 10) {
            toast.error("Review must be at least 10 characters");
            return;
        }

        toast.success("Review submitted successfully!");
        setIsReviewModalOpen(false);
        setRating(0);
        setReviewContent("");
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Left: Book Cover */}
                <div className="lg:col-span-5">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="sticky top-32"
                    >
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5">
                            <img
                                src={book.coverImage}
                                alt={book.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-2xl border border-black/5 hover:bg-black/5 transition-colors group">
                                <Bookmark className="text-brand-primary/40 group-hover:text-brand-primary transition-colors" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">
                                    Want to Read
                                </span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-2xl border border-black/5 hover:bg-black/5 transition-colors group">
                                <Star className="text-brand-primary/40 group-hover:text-brand-primary transition-colors" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">
                                    Mark Favorite
                                </span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-2xl border border-black/5 hover:bg-black/5 transition-colors group">
                                <Share2 className="text-brand-primary/40 group-hover:text-brand-primary transition-colors" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">
                                    Share
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                            {book.category}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mt-6 mb-2 tracking-tight leading-tight">
                            {book.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-brand-primary/60 font-serif italic mb-8">
                            by {book.author}
                        </p>

                        <div className="flex items-center gap-6 mb-12">
                            <RatingStars rating={book.rating} size={24} />
                            <div className="h-8 w-px bg-black/10" />
                            <div className="flex items-center gap-2 text-brand-primary/60">
                                <MessageSquare size={18} />
                                <span className="font-bold">
                                    {book.reviewCount} Reviews
                                </span>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none mb-16">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity-40 mb-4">
                                Description
                            </h3>
                            <p className="text-lg leading-relaxed text-brand-primary/80 font-light">
                                {book.description}
                            </p>
                        </div>

                        {/* Review Section */}
                        <div className="space-y-12">
                            <div className="flex items-center justify-between">
                                <h2 className="text-3xl font-serif font-bold">
                                    Reader Reviews
                                </h2>
                                <button
                                    onClick={() => setIsReviewModalOpen(true)}
                                    className="px-6 py-3 bg-brand-primary text-white rounded-full font-bold flex items-center gap-2 hover:bg-brand-primary/90 transition-all hover:scale-105"
                                >
                                    <Plus size={20} />
                                    Write a Review
                                </button>
                            </div>

                            {book.reviews.length > 0 ? (
                                <div className="space-y-6">
                                    {book.reviews.map((review) => (
                                        <ReviewCard
                                            key={review.id}
                                            review={review}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="p-12 text-center bg-white rounded-3xl border border-dashed border-black/20">
                                    <p className="text-brand-primary/40 italic">
                                        No reviews yet. Be the first to share
                                        your thoughts!
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Review Modal */}
            <Modal
                isOpen={isReviewModalOpen}
                onClose={() => setIsReviewModalOpen(false)}
                title="Add Your Review"
            >
                <form onSubmit={handleSubmitReview} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold uppercase tracking-widest opacity-40 mb-3">
                            Your Rating
                        </label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onMouseEnter={() => setHoverRating(star)}
                                    onMouseLeave={() => setHoverRating(0)}
                                    onClick={() => setRating(star)}
                                    className="transition-transform active:scale-90"
                                >
                                    <Star
                                        size={32}
                                        className={cn(
                                            "transition-colors",
                                            (hoverRating || rating) >= star
                                                ? "fill-brand-primary text-brand-primary"
                                                : "text-brand-primary/10"
                                        )}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold uppercase tracking-widest opacity-40 mb-3">
                            Review Content
                        </label>
                        <textarea
                            required
                            rows={5}
                            placeholder="What did you love about this book? What surprised you?"
                            value={reviewContent}
                            onChange={(e) => setReviewContent(e.target.value)}
                            className="w-full bg-white border border-black/5 rounded-2xl p-4 focus:ring-2 focus:ring-brand-primary/10 outline-none transition-all resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-primary/90 transition-all"
                    >
                        Submit Review
                    </button>
                </form>
            </Modal>
        </div>
    );
}
