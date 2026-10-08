import { motion } from 'framer-motion';
import { Home, Calendar, Image as ImageIcon, HelpCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Page Not Found (404) | Shree Shantadurga Sangodkarin Sabhagruha";
  }, []);

  return (
    <main className="min-h-[80vh] flex items-center justify-center py-20 px-4 bg-cream mandala-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full text-center bg-white/90 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-gold/25 shadow-xl"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-heading text-4xl font-bold">
          404
        </div>

        <span className="text-gold font-body text-xs tracking-[0.3em] uppercase block mb-2">
          Page Not Found
        </span>
        <h1 className="text-dark font-heading text-3xl md:text-4xl font-bold mb-4">
          Seeking a Destination?
        </h1>
        <p className="text-gray-600 font-body text-sm md:text-base leading-relaxed mb-8">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let us help guide you back to our sanctuary.
        </p>

        {/* Quick navigation actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-gold hover:bg-gold-dark text-white font-body text-xs uppercase tracking-wider font-semibold shadow-md shadow-gold/20 transition-all hover:scale-[1.02]"
          >
            <Home size={16} /> Return to Home
          </Link>
          <Link
            to="/booking"
            className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-dark hover:bg-dark-soft text-cream font-body text-xs uppercase tracking-wider font-semibold shadow-md transition-all hover:scale-[1.02]"
          >
            <Calendar size={16} /> Reserve Venue
          </Link>
          <Link
            to="/gallery"
            className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-cream border border-gold/30 hover:border-gold text-dark font-body text-xs uppercase tracking-wider font-semibold transition-all hover:scale-[1.02]"
          >
            <ImageIcon size={16} className="text-gold" /> View Gallery
          </Link>
          <Link
            to="/faq"
            className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-cream border border-gold/30 hover:border-gold text-dark font-body text-xs uppercase tracking-wider font-semibold transition-all hover:scale-[1.02]"
          >
            <HelpCircle size={16} className="text-gold" /> Venue FAQ
          </Link>
        </div>

        <div className="pt-6 border-t border-gold/15 text-xs text-gray-500 font-body">
          Need immediate assistance? Call us directly at{' '}
          <a href="tel:+919822155422" className="text-gold font-semibold underline">
            +91 98221 55422
          </a>
        </div>
      </motion.div>
    </main>
  );
}
