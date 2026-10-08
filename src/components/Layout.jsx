import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';

const routeTitles = {
  '/': 'Shree Shantadurga Sangodkarin Sabhagruha | Wedding & Event Hall in Sangolda, Porvorim, Goa',
  '/about': 'About Us & Hall Heritage | Shree Shantadurga Sangodkarin Sabhagruha',
  '/services': 'Wedding & Event Services | Shree Shantadurga Sangodkarin Sabhagruha',
  '/amenities': 'Hall Amenities & Facilities | Shree Shantadurga Sangodkarin Sabhagruha',
  '/gallery': 'Photo Gallery | Shree Shantadurga Sangodkarin Sabhagruha Goa',
  '/booking': 'Reserve Your Date & Enquiry | Shree Shantadurga Sangodkarin Sabhagruha',
  '/faq': 'Frequently Asked Questions (FAQ) | Shree Shantadurga Sangodkarin Sabhagruha',
  '/privacy': 'Privacy Policy | Shree Shantadurga Sangodkarin Sabhagruha',
  '/terms': 'Terms of Service & Hall Rules | Shree Shantadurga Sangodkarin Sabhagruha',
};

export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Dynamic page title update
    if (routeTitles[pathname]) {
      document.title = routeTitles[pathname];
    }

    const sectionRoutes = ['/about', '/services', '/amenities'];
    if (!sectionRoutes.includes(pathname)) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <div className="flex-1 mt-14">{children}</div>

      {/* Floating Action Button for Instant Mobile Inquiries */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/919822155422?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20booking%20Shree%20Shantadurga%20Sangodkarin%20Sabhagruha."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-green-900/20 hover:scale-110 active:scale-95 transition-transform"
        >
          <MessageSquare size={22} className="fill-current" />
        </a>
        <a
          href="tel:+919822155422"
          aria-label="Call Management"
          className="w-12 h-12 rounded-full bg-gold hover:bg-gold-dark text-white flex items-center justify-center shadow-xl shadow-gold/30 hover:scale-110 active:scale-95 transition-transform"
        >
          <Phone size={22} />
        </a>
      </div>

      <Footer />
    </div>
  );
}
