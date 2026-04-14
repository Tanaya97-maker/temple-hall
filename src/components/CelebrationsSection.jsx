import SectionHeading from './SectionHeading';

const events = [
  { title: 'Weddings', icon: '💍', image: '/img1/16.webp', desc: 'Grand wedding ceremonies with divine blessings' },
  { title: 'Haldi Ceremony', icon: '🌸', image: '/img1/13.webp', desc: 'Celebrate new beginnings in a sacred setting' },
  { title: 'Summer Camps', icon: '☀', image: '/img1/34.webp', desc: 'Spacious halls for educational gatherings' },
  { title: 'Sacred Occasions', icon: '🪔', image: '/img1/21.webp', desc: 'Pujas, havans and spiritual celebrations' },
  { title: 'Other Events', icon: '✦', image: '/img1/26.webp', desc: 'Parties, functions and other celebrations' },
  { title: 'Conferences', icon: '🎙', image: '/img1/20.webp', desc: 'Corporate and community meetings' },
];

export default function CelebrationsSection() {
  return (
    <section id="celebrations" className="py-10 bg-[#FFF4C2]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          tag="Celebrations"
          title="Every Occasion, Celebrated with Grace"
          subtitle="From intimate rituals to grand festivities, our hall adapts to every sacred and joyous event."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="group bg-white border border-[#FFF4C2] hover:border-[#D4A017] p-0 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Image placeholder */}
              <div className="aspect-[16/10] bg-[#FFF4C2] flex items-center justify-center relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#D4A017] text-sm">{event.icon}</span>
                  <h3 className="font-accent text-sm font-semibold tracking-wide uppercase text-black">
                    {event.title}
                  </h3>
                </div>
                <p className="font-body text-gray-500 text-sm leading-relaxed">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
