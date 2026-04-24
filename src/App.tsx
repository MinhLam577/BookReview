import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import Profile from './pages/Profile';
import Explore from './pages/Explore';

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </AnimatePresence>
      </main>
      <footer className="bg-white border-t border-black/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] opacity-20 mb-4">LuminaBooks</p>
          <p className="text-brand-primary/40 text-sm">
            © 2026 LuminaBooks. All rights reserved. Built with passion for readers.
          </p>
        </div>
      </footer>
      <Toaster position="bottom-right" toastOptions={{
        style: {
          borderRadius: '20px',
          background: '#1a1a1a',
          color: '#fff',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          fontWeight: '600'
        }
      }} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
