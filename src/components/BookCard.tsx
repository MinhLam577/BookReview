import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Book } from '../types';
import RatingStars from './RatingStars';

interface BookCardProps {
  book: Book;
  index: number;
  key?: React.Key;
}

export default function BookCard({ book, index }: BookCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link to={`/book/${book.id}`} className="group block h-full">
        <div className="flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-black/5 book-card-hover">
          {/* Cover Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest rounded-full border border-black/5">
                {book.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-serif font-bold leading-tight group-hover:text-brand-primary/70 transition-colors line-clamp-1">
              {book.title}
            </h3>
            <p className="text-sm text-brand-primary/60 mt-1 mb-3">
              by {book.author}
            </p>
            <div className="mt-auto pt-4 border-t border-black/5 flex items-center justify-between">
              <RatingStars rating={book.rating} size={14} />
              <span className="text-[10px] font-bold uppercase tracking-tighter opacity-40">
                {book.reviewCount} Reviews
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
