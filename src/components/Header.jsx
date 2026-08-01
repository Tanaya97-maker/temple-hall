
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, School, HandPlatter, Sparkles, ImageIcon, CalendarDays, X, Ellipsis } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'About', to: '/about', icon: School },
  { label: 'Services', to: '/services', icon: HandPlatter },
  { label: 'Amenities', to: '/amenities', icon: Sparkles },
  { label: 'Gallery', to: '/gallery', icon: ImageIcon },
];

export default function Header() {
  const ignoreScrollSpy = useRef(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname);

  useEffect(() => {
    setMobileMenuOpen(false);
    ignoreScrollSpy.current = true;
    setActiveSection(location.pathname);
    const timer = setTimeout(() => {
      ignoreScrollSpy.current = false;
    }, 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const isCombinedPage = ['/', '/about', '/services', '/amenities'].includes(location.pathname);
    if (!isCombinedPage) return;

    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'services', 'amenities'];
      const HEADER_OFFSET = 100;
      const scrollPosition = window.scrollY + HEADER_OFFSET;
      if (ignoreScrollSpy.current) return;
      if (window.scrollY < 100 && location.pathname === "/") {
        setActiveSection("/");
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            const next = section === "home" ? "/" : `/${section}`;
            setActiveSection(prev => (prev === next ? prev : next));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-2 bg-cream/95 backdrop-blur-md shadow-md border-b border-gold/10">
        <div className="px-2 mx-auto flex items-center justify-between w-full relative">

          {/* Brand Logo (Left) */}
          <Link to="/" className="flex items-center gap-2.5 z-50">
            <img src="/logo1.webp" alt="Temple Hall Logo" className="h-9 sm:h-11 w-auto object-contain rounded-lg" />
            <div className='flex flex-col leading-none'>
              <span className="font-heading text-sm md:text-md lg:text-xl font-semibold text-dark">
                SHRI SHANTADURGA
              </span>
              <span className="font-heading text-sm md:text-md lg:text-xl font-semibold text-dark">
                SANGODKARIN SABHAGRUHA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center">
            <div className="px-2 py-1.5 rounded-full flex gap-1 shadow-lg border transition-all duration-300 bg-white/80 border-gold/10 shadow-gold/5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.to;
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={`relative px-5 py-2 text-sm font-body font-medium transition-all duration-300 rounded-full ${isActive
                      ? 'text-gold font-semibold'
                      : 'text-dark hover:text-gold'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-gold rounded-full -z-10 shadow-md shadow-gold/30"
                      />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Call to Action Button (Right) */}
          <div className="hidden lg:block">
            <Link to="/booking">
              <button className="px-5 py-2.5 rounded-full font-body text-xs font-semibold uppercase tracking-widest shadow-md transition-all duration-300 bg-gold hover:bg-gold-dark text-white hover:scale-105">
                Book Now
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger Button - Visible on all pages */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 z-[60] p-1.5 rounded-full border transition-all duration-300 text-black border-gold bg-gold/20"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} strokeWidth={2.5} /> : <Ellipsis size={20} strokeWidth={2.5} />}
          </button>

        </div >
      </header >

      {/* Mobile Badge Menu - Column Format */}
      < AnimatePresence >
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-[40] lg:hidden"
          >
            <div className="flex flex-col items-end space-y-2 py-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.to;
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full border shadow-md ${isActive
                      ? 'bg-gold border-gold text-white shadow-gold/30 font-semibold'
                      : 'bg-white border-gold/20 text-dark'
                      }`}
                  >
                    <link.icon size={16} strokeWidth={2} className={isActive ? 'text-white' : 'text-gold'} />
                    <span className="font-heading text-xs font-semibold tracking-wide uppercase">{link.label}</span>
                  </Link>
                );
              })}
              {/* Extra button on mobile menu */}
              <Link
                to="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border shadow-md bg-gold border-gold text-white shadow-gold/30 font-semibold"
              >
                <CalendarDays size={16} strokeWidth={2} className="text-white" />
                <span className="font-heading text-xs font-semibold tracking-wide uppercase">Book Now</span>
              </Link>
            </div>
          </motion.div>
        )
        }
      </AnimatePresence >
    </>
  );
}
