import SectionHeading from '../components/SectionHeading';

const placeholders = Array.from({ length: 27 }, (_, i) => ({
  id: i + 1,
  aspect: [
    'aspect-square',
    'aspect-[4/3]',
    'aspect-[3/4]',
    'aspect-[16/9]',
    'aspect-[4/3]',
    'aspect-square',
  ][i % 6],
}));

export default function GalleryPage() {

  return (
    <main className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12">
          <SectionHeading
            tag="Gallery"
            title="A Glimpse of Our Hall"
            subtitle="Moments captured within our sacred and elegant spaces."
          />
        </div>
        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {placeholders.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid bg-[#FFF4C2] overflow-hidden group relative cursor-pointer border border-transparent hover:border-[#D4A017] transition-all duration-300"
            >
              <div className={`${item.aspect} w-full flex items-center justify-center bg-[#FFF4C2] relative`}>
                {/* Real Image */}
                <img
                  src={`/img1/${10 + item.id}.webp`}
                  alt="image"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
