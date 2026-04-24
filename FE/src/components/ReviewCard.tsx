import React from "react";
import RatingStars from "./RatingStars";
import { Review } from "../types/models/review";
import { Book } from "../types/models/book";

interface ReviewCardProps {
    review: Review;
    book?: Book;
    key?: React.Key;
}

export default function ReviewCard({ review, book }: ReviewCardProps) {
    return (
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm">
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-black/10">
                        <img
                            src={review.userAvatar}
                            alt={review.username}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg leading-none">
                            {review.username}
                        </h4>
                        <p className="text-xs text-brand-primary/40 mt-1">
                            {review.date}
                        </p>
                    </div>
                </div>
                <RatingStars
                    rating={review.rating}
                    size={14}
                    className="opacity-90"
                />
            </div>

            {book && (
                <div className="mb-4 flex items-center gap-2 px-3 py-1 bg-brand-accent/50 rounded-lg w-fit">
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 italic">
                        Reviewed:
                    </span>
                    <span className="text-sm font-medium">{book.title}</span>
                </div>
            )}

            <p className="text-brand-primary/80 leading-relaxed italic font-serif text-lg">
                "{review.content}"
            </p>
        </div>
    );
}
