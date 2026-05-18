import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
