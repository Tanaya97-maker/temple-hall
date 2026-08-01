import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const quickLinks = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Amenities', to: '/amenities' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Booking', to: '/booking' },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-soft text-cream pt-10 pb-5 overflow-hidden mandala-bg">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 pb-5 border-b border-gold/20">
          {/* Column 1: Logo */}
          <div className="col-span-1 flex flex-col justify-center md:justify-start">
            <div className="flex flex-col md:flex-col items-start md:items-start gap-2 md:gap-6">
              <Link to="/" className="inline-block shrink-0">
                <div className="bg-white rounded-xl p-1 md:p-1.5 w-24 h-20 md:w-48 md:h-28 flex items-center justify-center">
                  <img src="/logo1.webp" alt="Logo" className="max-w-full max-h-full object-contain" />
                </div>
              </Link>
              <p className="text-cream/80 font-heading text-sm md:text-xl italic leading-tight md:leading-relaxed">
                "Where tradition meets elegance, and every celebration becomes divine."
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (Desktop) */}
          <div className="hidden md:flex flex-col items-start">
            <div className="space-y-8 w-full">
              <h4 className="text-gold font-heading text-2xl">Explore</h4>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="text-cream/60 hover:text-gold transition-colors font-body text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-span-1 flex flex-col items-start">
            <h4 className="hidden md:block text-gold font-heading text-2xl mb-8">Get in Touch</h4>
            <div className="space-y-3 md:space-y-5 flex flex-col items-start w-full">
              <a href="tel:+919822155422" className="flex flex-row items-center md:items-start gap-2 md:gap-4 group w-full">
                <div className="bg-gold/10 p-1.5 md:p-3 rounded-lg group-hover:bg-gold transition-colors shrink-0">
                  <Phone size={14} className="text-gold group-hover:text-dark md:w-4 md:h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] sm:text-[10px] md:text-base text-cream/40 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-[9px] sm:text-[10px] md:text-base text-cream/90 font-body">+91 98221 55422</p>
                </div>
              </a>
              <a href="mailto:rajeshsangodkar12@gmail.com" className="flex flex-row items-center md:items-start gap-2 md:gap-4 group w-full">
                <div className="bg-gold/10 p-1.5 md:p-3 rounded-lg group-hover:bg-gold transition-colors shrink-0">
                  <Mail size={14} className="text-gold group-hover:text-dark md:w-4 md:h-4" />
                </div>
                <div className="text-left break-all">
                  <p className="text-[9px] sm:text-[10px] md:text-base text-xs text-cream/40 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-[9px] sm:text-[10px] md:text-base text-cream/90 font-body">rajeshsangodkar12@gmail.com</p>
                </div>
              </a>
              {/* Location */}
              <a href="https://maps.app.goo.gl/FRHo8eqdSQhqmWKk7" target="_blank" rel="noopener noreferrer" className="flex flex-row items-start gap-2 md:gap-4 group w-full cursor-pointer">
                <div className="bg-gold/10 p-1.5 md:p-3 rounded-lg group-hover:bg-gold transition-colors shrink-0">
                  <MapPin size={14} className="text-gold group-hover:text-dark md:w-[18px] md:h-[18px]" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] sm:text-[10px] md:text-base text-xs text-cream/40 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-[9px] sm:text-[10px] md:text-base text-cream/90 font-body leading-tight md:leading-relaxed">Sangolda, North Goa,<br className="hidden md:block" />Goa, India - 403501</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-cream/30 text-[10px] md:text-xs font-body tracking-wider text-center md:text-left">
            © {new Date().getFullYear()} TEMPLE HERITAGE HALL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-cream/30 text-[10px] md:text-xs font-body tracking-widest uppercase">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Decorative mandala element */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 opacity-10 pointer-events-none">
        <img src="https://www.transparenttextures.com/patterns/mandala.png" alt="" className="w-full h-full object-contain invert" />
      </div>
    </footer>
  );
}
