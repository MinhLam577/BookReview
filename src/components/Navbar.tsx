import { Search, User, BookOpen, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { currentUser } from '../data/mockData';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would filter books
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
                <BookOpen className="text-white" size={20} />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">LuminaBooks</span>
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search titles, authors, or genres..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/5 border-none rounded-full py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-brand-primary/20 transition-all outline-none"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-primary/40" size={18} />
            </form>
          </div>

          {/* Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="font-medium hover:text-brand-primary/70 transition-colors">Home</Link>
            <Link to="/explore" className="font-medium hover:text-brand-primary/70 transition-colors">Explore</Link>
            <Link to="/profile" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-black/10">
                <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-black/5 px-4 py-6 space-y-6 animate-in slide-in-from-top duration-300">
          <form onSubmit={handleSearch} className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-black/5 border-none rounded-full py-3 pl-10 pr-4 focus:ring-2 focus:ring-brand-primary/20 outline-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-primary/40" size={18} />
          </form>
          <div className="flex flex-col gap-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Home</Link>
            <Link to="/explore" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Explore</Link>
            <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
              <User size={20} />
              <span className="text-lg font-medium">Profile</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
