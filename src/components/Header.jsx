//HEADER
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about', hash: '#about' },
  { label: 'Services & Amenities', to: '/#services', hash: '#services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Booking & Support', to: '/booking' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);
  const location = useLocation();


  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      if (window.location.pathname === '/') {
        const sections = ['about', 'services', 'celebrations', 'testimonials'];
        let current = '';
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = `#${section}`;
              break;
            }
          }
        }
        setActiveHash(current);
      } else {
        setActiveHash('');
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); // initial check
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Handle smooth scroll when URL hash changes or when on the same page
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const handleNavClick = (e, link) => {
    setMenuOpen(false);

    // If it's a hash link and we are already on home page, just smooth scroll
    if (link.hash && location.pathname === '/') {
      e.preventDefault();
      const el = document.querySelector(link.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        // Update URL without jump
        window.history.pushState(null, '', `/${link.hash}`);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : ' opacity-90 py-3'
          }`}
      >
        <div className="max-w-7xl sm:px-6 flex items-center justify-end lg:justify-between">
          {/* Logo */}
          <Link to="/" className="hidden lg:flex items-center">
            <img src="/logo.webp" alt="Shantadurga Logo" className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={(e) => handleNavClick(e, link)}
                className={`px-4 py-2 text-md font-body font-semibold tracking-wide transition-all duration-300 rounded-full border-2 ${(link.hash ? activeHash === link.hash : (location.pathname === link.to && !activeHash))
                  ? 'border-[#D4A017] text-[#B8860B]'
                  : 'border-transparent text-[#D4A017] hover:border-[#D4A017] hover:text-[#B8860B]'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 mr-4"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className={`w-6 h-[2px] block transition-colors duration-300 ${location.pathname === '/' && !scrolled ? 'bg-white' : 'bg-black'}`} />
            <span className={`w-6 h-[2px] block transition-colors duration-300 ${location.pathname === '/' && !scrolled ? 'bg-white' : 'bg-black'}`} />
            <span className={`w-6 h-[2px] block transition-colors duration-300 ${location.pathname === '/' && !scrolled ? 'bg-white' : 'bg-black'}`} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] overflow-hidden">
          {/* Backdrop covering entire screen */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px] animate-fade-in"
            onClick={() => setMenuOpen(false)}
          />

          {/* Sidebar drawer sliding on top */}
          <div className="absolute right-0 top-0 w-72 bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
            <div className="flex items-center justify-between p-5 border-b border-[#FFF4C2]">
              <span className="font-accent text-sm font-bold tracking-widest uppercase">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center hover:bg-[#FFF4C2] rounded-full transition"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 1L15 15M15 1L1 15" stroke="black" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={(e) => handleNavClick(e, link)}
                  className="px-4 py-3 text-sm font-body font-semibold text-black hover:bg-[#FFF4C2] hover:text-[#B8860B] rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto p-5 border-t border-[#FFF4C2]">
              <p className="text-xs text-gray-400 font-body">Vegetarian Venue</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}