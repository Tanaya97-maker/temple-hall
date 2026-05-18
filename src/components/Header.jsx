import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Ellipsis, X, Home, School, HandPlatter, Sparkles, Image as ImageIcon, CalendarDays, MessageSquareQuote, Ellipse } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'About', to: '/about', icon: School },
  { label: 'Services', to: '/services', icon: HandPlatter },
  { label: 'Amenities', to: '/amenities', icon: Sparkles },
  { label: 'Gallery', to: '/gallery', icon: ImageIcon },
  { label: 'Booking', to: '/booking', icon: CalendarDays },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 relative flex items-center justify-center">

          {/* Mobile Hamburger Button (Top Right) - Hidden on Home Page */}
          {location.pathname !== '/' && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden absolute left-6 top-1/2 -translate-y-1/2 text-gold z-[60] p-1 rounded-full"
            >
              {mobileMenuOpen ? <X size={24} strokeWidth={3} /> : <Ellipsis size={24} strokeWidth={3} />}
            </button>
          )}

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center">
            <div className="glass-gold px-2 py-1.5 rounded-full flex gap-1 shadow-lg border border-gold/10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`relative px-5 py-2 text-sm font-body font-medium transition-all duration-300 rounded-full ${location.pathname === link.to
                    ? 'text-white'
                    : 'text-dark hover:text-gold'
                    }`}
                >
                  {location.pathname === link.to && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-gold rounded-full -z-10 shadow-lg shadow-gold/30"
                    />
                  )}
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Badge Menu - Column Format */}
      <AnimatePresence>
        {mobileMenuOpen && location.pathname !== '/' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-10 left-6 z-[40] md:hidden"
          >
            <div className="flex flex-col items-start space-y-2 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border shadow-md ${location.pathname === link.to
                    ? 'bg-gold border-gold text-white shadow-gold/30'
                    : 'bg-white border-gold/20 text-dark'
                    }`}
                >
                  <link.icon size={16} strokeWidth={2} className={location.pathname === link.to ? 'text-white' : 'text-gold'} />
                  <span className="font-heading text-xs font-semibold tracking-wide uppercase">{link.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}