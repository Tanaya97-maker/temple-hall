import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const backgroundImages = [
  '/img1/11.webp',
  '/img1/12.webp',
  '/img1/13.webp',
  '/img1/14.webp',
  '/img1/15.webp',
  '/img1/36.webp',
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <section
      id="home"
      className="relative h-[calc(100dvh-16px)] lg:h-screen lg:min-h-screen m-[8px] lg:m-0 flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Images Carousel */}
      {backgroundImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out blur-[2px] ${index === currentImageIndex ? 'opacity-40 z-0' : 'opacity-0 z-0'
            }`}
        >
          <img
            src={src}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-4 lg:mb-6">
          Perfect Venue for<br />
          <em className="not-italic text-[#D4A017]">Sacred & Grand Celebrations</em><br />
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <img src="/logo.webp" alt="Logo" className="h-32 lg:h-40 w-auto object-contain rounded-sm" />
        </div>

        {/* Navigation Buttons */}
        <div className="mt-4 lg:mt-8 grid grid-cols-2 gap-4 max-w-lg mx-auto">
          <Link
            to="/booking"
            className="text-center border border-[#D4A017] bg-black/40 backdrop-blur-sm py-4 hover:bg-[#D4A017]/20 transition-all duration-300"
          >
            <div className="font-display text-xl sm:text-2xl font-semibold text-[#FFF4C2] uppercase tracking-wider">Book Now</div>
          </Link>
          <Link
            to="/gallery"
            className="text-center border border-[#D4A017] bg-black/40 backdrop-blur-sm py-4 hover:bg-[#D4A017]/20 transition-all duration-300"
          >
            <div className="font-display text-xl sm:text-2xl font-semibold text-[#FFF4C2] uppercase tracking-wider">Gallery</div>
          </Link>
        </div>
      </div>
    </section>
  );
}
