import SectionHeading from './SectionHeading';

const testimonials = [
  {
    name: 'Priya & Rohan Sharma',
    event: 'Wedding Ceremony',
    text: "Our wedding was everything we dreamed of. The hall's spiritual ambiance and the seamless service made our special day truly divine. The vegetarian meals were delicious and the staff was incredibly attentive.",
    rating: 5,
  },
  {
    name: 'Sunita Patil',
    event: 'Naming Ceremony',
    text: "We hosted our son's naming ceremony here and it was perfect. The vegetarian environment aligned beautifully with our traditions. Clean, spacious, and blessed — exactly what we needed.",
    rating: 5,
  },
  {
    name: 'Vikram Desai',
    event: 'Navratri Event',
    text: "The hall was ideal for our Navratri celebration. The AC facility kept everyone comfortable during the garba, and the parking was very convenient. Highly recommended for festive events.",
    rating: 5,
  },
  {
    name: 'Meena & Suresh Joshi',
    event: 'Engagement Ceremony',
    text: "From booking to the final event, the team was professional and helpful. The dressing rooms for bride and groom were thoughtfully arranged. We will definitely host future events here.",
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" fill="#D4A017" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  const prev = () => setCurrentIndex(c => (c === 0 ? maxIndex : c - 1));
  const next = () => setCurrentIndex(c => (c >= maxIndex ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          tag="Testimonials"
          title="Words from Our Guests"
          subtitle="Families who trusted us to host their most precious moments."
        />
        <div className="relative w-full mx-auto px-6 sm:px-12">
          {/* Card Wrapper */}
          <div className="overflow-hidden">
            <div className="transition-transform duration-500 ease-in-out flex" style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}>
              {testimonials.map((t) => (
                <div key={t.name} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3">
                  <div className="border border-[#FFF4C2] bg-[#FFF4C2]/20 p-6 sm:p-8 hover:border-[#D4A017] hover:bg-[#FFF4C2]/50 transition-all duration-300 relative text-center h-full flex flex-col justify-center items-center">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 font-display text-6xl text-[#D4A017]/20 leading-none select-none">"</div>
                    <StarRating count={t.rating} />
                    <p className="font-body text-gray-700 text-sm sm:text-[15px] italic leading-relaxed mt-4 mb-6 relative z-10 flex-grow">
                      "{t.text}"
                    </p>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-[#FFF4C2] font-accent text-xs font-bold">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="font-body font-semibold text-sm text-black leading-tight">{t.name}</div>
                        <div className="font-body text-[10px] text-[#B8860B] uppercase tracking-wider">{t.event}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-[#D4A017] text-[#D4A017] rounded-full flex items-center justify-center hover:bg-[#D4A017] hover:text-white transition-colors z-10 shadow-lg">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-[#D4A017] text-[#D4A017] rounded-full flex items-center justify-center hover:bg-[#D4A017] hover:text-white transition-colors z-10 shadow-lg">
             <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
