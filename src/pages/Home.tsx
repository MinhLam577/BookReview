import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockBooks } from '../data/mockData';
import BookCard from '../components/BookCard';

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-[#1a1a1a] text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] tracking-tight mb-8">
                Discover Your <br />
                <span className="text-brand-accent/40 italic">Next Favorite</span> <br />
                Book
              </h1>
              <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-12 max-w-xl">
                Explore thousands of curated reviews, trending titles, and literary gems. 
                LuminaBooks is your refined companion in the world of reading.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/explore">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-brand-primary rounded-full font-bold flex items-center gap-2 group transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                  >
                    Explore Books
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </Link>
                <Link to="/profile">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-white/20 hover:bg-white/10 rounded-full font-bold transition-all"
                  >
                    My Library
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Section Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-3 block">Current Trends</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Recommended for You</h2>
          </div>
          <Link to="/explore" className="text-brand-primary/60 hover:text-brand-primary font-bold flex items-center gap-1 group transition-colors">
            See all books
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {mockBooks.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))}
        </div>
      </section>

      {/* Literary Quote Section */}
      <section className="bg-white py-24 border-y border-black/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <BookOpen className="mx-auto mb-8 text-brand-primary opacity-20" size={48} />
          <blockquote className="text-3xl md:text-4xl font-serif italic text-brand-primary leading-tight mb-8">
            "A reader lives a thousand lives before he dies. The man who never reads lives only one."
          </blockquote>
          <cite className="text-sm font-bold uppercase tracking-widest opacity-40 not-italic">
            — George R.R. Martin
          </cite>
        </div>
      </section>
    </div>
  );
}
