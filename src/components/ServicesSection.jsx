import SectionHeading from './SectionHeading';

const amenities = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    label: 'AC Hall Capacity',
    value: '1,000 – 1,500',
    unit: 'people',
  },

  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path d="M16 3v4M8 3v4M12 12h.01" />
      </svg>
    ),
    label: 'Dressing Rooms',
    value: 'Bride & Groom',
    unit: 'with washroom',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 2h18v4H3zM3 6v16h18V6" />
        <path d="M9 10h6M9 14h4" />
      </svg>
    ),
    label: 'Buffet Hall',
    value: '250',
    unit: 'seating + kitchen',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    label: 'Generator',
    value: '250 KV',
    unit: 'backup power',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8zM5 17v2M15 17v2" />
        <circle cx="5.5" cy="18.5" r="1.5" />
        <circle cx="14.5" cy="18.5" r="1.5" />
      </svg>
    ),
    label: 'Parking',
    value: '250',
    unit: 'cars',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-4 bg-[#FFF4C2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Column 1: Heading */}
          <div>
            <SectionHeading
              tag="Services & Amenities"
              title="Everything You Need, In One Place"
              subtitle="Facilities to make your event comfortable, elegant, and effortless."
            />
          </div>

          {/* Column 2: Amenities */}
          <div className="bg-black p-4 border border-[#D4A017]/30">
            <div className="flex flex-col gap-6">
              {amenities.map((a) => (
                <div key={a.label} className="flex flex-row items-center justify-between group border-b border-white/10 pb-2 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 flex items-center justify-center text-[#B8860B] group-hover:scale-110 transition-transform duration-300">
                      {a.icon}
                    </div>
                    <div>
                      <div className="font-body text-xs text-gray-300 uppercase tracking-widest">{a.label}</div>
                      <div className="font-body text-[10px] text-[#B8860B] mt-1">{a.unit}</div>
                    </div>
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-semibold text-white whitespace-nowrap text-right pl-4">
                    {a.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
