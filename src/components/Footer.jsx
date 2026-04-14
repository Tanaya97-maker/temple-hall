import { Link } from 'react-router-dom';

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919822155422',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L.054 23.5l5.81-1.524A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.497-5.195-1.366l-.371-.22-3.847 1.009 1.025-3.742-.241-.384A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & tagline */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-red-300 rounded-xl inline-block mb-0 shrink-0">
                <img src="/logo.webp" alt="Shantadurga Logo" className="h-16 w-auto object-contain" />
              </div>
              <p className="text-gray-200 text-lg font-display leading-snug flex-1">
                "Where tradition meets elegance, and every celebration becomes divine."
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-[#FFF4C2] hover:border-[#D4A017] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-accent text-xs tracking-widest uppercase text-[#D4A017] mb-4">
              Location
            </h4>
            <a
              href="https://maps.app.goo.gl/FRHo8eqdSQhqmWKk7"
              target="_blank"
              rel="noopener noreferrer"
              className="not-italic text-gray-400 text-sm font-body leading-relaxed hover:text-[#FFF4C2] transition-colors"
            >
              Shree Shantadurga Sangodkarin Sabhagruha A/c Hall<br />
              Sangolda, North Goa<br />
              Goa, India - 403501
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-accent text-xs tracking-widest uppercase text-[#D4A017] mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919822155422"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors group"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 14.92v2z" />
                </svg>
                +91 98221 55422
              </a>
              <a
                href="mailto:rajeshsangodkar12@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                rajeshsangodkar12@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs font-body">
            © {new Date().getFullYear()} wedding halls in porvorim. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Vegetarian Venue
          </p>
        </div>
      </div>
    </footer>
  );
}
