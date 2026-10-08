import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';

const quickLinks = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Amenities', to: '/amenities' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Booking', to: '/booking' },
  { name: 'FAQs', to: '/faq' },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-soft text-cream pt-10 pb-6 overflow-hidden mandala-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-gold/20">
          {/* Column 1: Brand & Logo */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link to="/" className="inline-block shrink-0">
              <div className="bg-white rounded-xl p-1.5 w-auto max-w-[200px] flex items-center justify-center shadow-md">
                <img src="/logo1.jpg" alt="Shree Shantadurga Sangodkarin Sabhagruha Logo" className="h-16 w-auto object-contain rounded" />
              </div>
            </Link>
            <h3 className="text-gold font-heading text-xl font-semibold leading-tight">
              SHREE SHANTADURGA SANGODKARIN SABHAGRUHA
            </h3>
            <p className="text-cream/80 font-heading text-sm md:text-base italic leading-relaxed max-w-sm">
              "Where tradition meets elegance, and every celebration becomes divine."
            </p>
            <div className="flex items-center gap-2 text-gold/80 text-xs font-body">
              <Sparkles size={14} className="text-gold" />
              <span>Vegetarian Banquet & Wedding Hall in Sangolda, Goa</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="text-gold font-heading text-xl md:text-2xl mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 w-full">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-cream/70 hover:text-gold transition-colors font-body text-xs md:text-sm flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="text-gold font-heading text-xl md:text-2xl mb-4">Get in Touch</h4>
            <div className="space-y-3.5 flex flex-col items-start w-full text-xs md:text-sm">
              <a href="tel:+919822155422" className="flex items-start gap-3 group w-full hover:text-gold transition-colors">
                <div className="bg-gold/10 p-2 rounded-lg group-hover:bg-gold transition-colors shrink-0">
                  <Phone size={16} className="text-gold group-hover:text-dark" />
                </div>
                <div>
                  <p className="text-[10px] text-cream/40 uppercase tracking-widest font-semibold">Call & WhatsApp</p>
                  <p className="text-cream/90 font-body font-medium">+91 98221 55422</p>
                </div>
              </a>

              <a href="mailto:shreeshantadurgasangodkarin2@gmail.com" className="flex items-start gap-3 group w-full hover:text-gold transition-colors">
                <div className="bg-gold/10 p-2 rounded-lg group-hover:bg-gold transition-colors shrink-0">
                  <Mail size={16} className="text-gold group-hover:text-dark" />
                </div>
                <div className="break-all">
                  <p className="text-[10px] text-cream/40 uppercase tracking-widest font-semibold">Email Us</p>
                  <p className="text-cream/90 font-body font-medium">shreeshantadurgasangodkarin2@gmail.com</p>
                </div>
              </a>

              <a
                href="https://maps.app.goo.gl/FRHo8eqdSQhqmWKk7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group w-full hover:text-gold transition-colors"
              >
                <div className="bg-gold/10 p-2 rounded-lg group-hover:bg-gold transition-colors shrink-0">
                  <MapPin size={16} className="text-gold group-hover:text-dark" />
                </div>
                <div>
                  <p className="text-[10px] text-cream/40 uppercase tracking-widest font-semibold">Hall Location</p>
                  <p className="text-cream/90 font-body leading-snug">Sangolda, Porvorim, North Goa, Goa - 403511</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-cream/40 text-xs font-body tracking-wider">
            © {new Date().getFullYear()} Shree Shantadurga Sangodkarin Sabhagruha. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-cream/50 text-xs font-body tracking-wider uppercase">
            <Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link>
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Decorative mandala element */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 opacity-5 pointer-events-none">
        <img src="https://www.transparenttextures.com/patterns/mandala.png" alt="" className="w-full h-full object-contain invert" />
      </div>
    </footer>
  );
}
