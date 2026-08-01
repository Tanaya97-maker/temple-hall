import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-cream">
            <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/services" element={<HomePage />} />
            <Route path="/amenities" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
