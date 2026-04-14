import SectionHeading from './SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual block */}
          <div className="relative">
            <div className="relative h-[450px] sm:h-[550px] lg:h-[600px] w-full">
              <img
                src="/img1/12.webp"
                alt="Hall Interior"
                className="absolute top-0 right-0 w-[75%] h-[70%] object-cover shadow-xl"
              />
              <img
                src="/img1/13.webp"
                alt="Ceremony Setup"
                className="absolute bottom-0 left-0 w-[65%] h-[60%] object-cover shadow-2xl border-4 border-white"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 max-w-[180px]">
              <div className="font-display text-3xl font-semibold text-[#FFF4C2]">Vegetarian</div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <SectionHeading
              tag="About Us"
              title="A Blessed Space for Every Occasion"
            />

            <blockquote className="border-l-2 border-[#D4A017] pl-5 mb-6">
              <p className="font-display text-xl italic text-gray-700 leading-relaxed">
                "Where tradition meets elegance, and every celebration becomes divine."
              </p>
            </blockquote>

            <div className="space-y-4 font-body text-gray-600 leading-relaxed text-[15px]">
              <p>
                Step into a space designed for both devotion and celebration. Our temple banquet hall offers a peaceful indoor setting that blends spiritual ambiance with modern convenience. Whether you're planning a wedding, engagement, naming ceremony, or any sacred occasion, this is a place where every moment feels meaningful.
              </p>
              <p>
                With both AC and non-AC hall options, we give you the flexibility to choose what suits your comfort and budget. The vegetarian environment ensures a sattvic, temple-aligned experience for you and your guests, maintaining the sanctity of every event.
              </p>
              <p>
                Spacious, clean, and thoughtfully managed, our hall is ideal for families who want a serene yet well-equipped venue. Here, you don't just host an event — you create memories in a setting that feels blessed.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'AC & Non-AC Halls', icon: '❄' },
                { label: 'Temple Ambiance', icon: '🪔' },
                { label: 'Dedicated Dressing Rooms', icon: '✦' },
                { label: 'Ample Parking', icon: '🚗' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <span className="text-[#D4A017] text-lg">{f.icon}</span>
                  <span className="font-body text-sm text-gray-700 font-semibold">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
