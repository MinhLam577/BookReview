import React from 'react';
import { motion } from 'motion/react';
import { mockBooks } from '../data/mockData';
import BookCard from '../components/BookCard';

export default function Explore() {
  const categories = ['All', 'Fiction', 'Mythology', 'Sci-Fi', 'Dystopian', 'Historical Fiction', 'Self-Help'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16">
        <h1 className="text-5xl font-serif font-bold mb-8">Explore Catalog</h1>
        
        {/* Categories */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                i === 0 
                  ? 'bg-brand-primary text-white shadow-lg' 
                  : 'bg-white border border-black/5 hover:border-black/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {mockBooks.map((book, index) => (
          <BookCard key={book.id} book={book} index={index} />
        ))}
      </div>
    </div>
  );
}
