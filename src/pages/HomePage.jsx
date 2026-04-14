import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CelebrationsSection from '../components/CelebrationsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ServicesSection from '../components/ServicesSection';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CelebrationsSection />
      <ServicesSection />
      <TestimonialsSection />

      {/* CTA Banner */}
      <section className="bg-[#FFF4C2] py-10 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-accent text-[10px] tracking-[0.3em] uppercase text-[#B8860B] mb-4">
            Begin Your Journey
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-black leading-tight mb-6">
            Ready to Host Your Celebration?
          </h2>
          <p className="font-body text-gray-600 text-base mb-8 leading-relaxed">
            Contact us today and let us help you plan an event that honors your traditions and delights your guests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 bg-black text-[#FFF4C2] font-body font-semibold text-sm tracking-wider px-8 py-4 hover:bg-[#B8860B] transition-all duration-300 uppercase"
            >
              Book Now
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-2 border border-black text-black font-body font-semibold text-sm tracking-wider px-8 py-4 hover:bg-black hover:text-[#FFF4C2] transition-all duration-300 uppercase"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
