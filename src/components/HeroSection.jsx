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
      className="relative min-h-[calc(100vh-16px)] lg:min-h-screen m-[8px] rounded-2xl lg:rounded-none lg:m-0 flex items-center justify-center overflow-hidden bg-black"
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
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-6">
          Perfect Venue for<br />
          <em className="not-italic text-[#D4A017]">Sacred & Grand Celebrations</em><br />
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <img src="/logo.webp" alt="Logo" className="h-40 w-auto object-contain rounded-sm" />
        </div>

        {/* Stats bar */}
        <div className="mt-4 grid grid-cols-3 gap-4 max-w-lg mx-auto pt-8">
          {[
            { value: 'AC &', label: ' NON-AC Halls' },
            { value: '3000', label: 'Guest Capacity' },
            { value: '250+', label: 'Car Parking' },
          ].map((stat) => (
            <div key={stat.label} className="text-center border border-[#D4A017] bg-black/40 backdrop-blur-sm">
              <div className="font-display text-2xl font-semibold text-[#FFF4C2]">{stat.value}</div>
              <div className="font-display text-md font-bold text-gray-300 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
