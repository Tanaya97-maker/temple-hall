import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionRoutes = ['/about', '/services', '/amenities'];
    if (!sectionRoutes.includes(pathname)) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <div className="flex-1 mt-14">{children}</div>
      <Footer />
    </div>
  );
}
