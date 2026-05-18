import useScrollReveal from '../hooks/useScrollReveal';

const availableImageIds = [
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 26, 27, 28, 30, 31, 32,
  33, 34, 35, 36, 37
];

const placeholders = availableImageIds.map((imgId, i) => ({
  id: imgId,
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
  useScrollReveal();

  return (
    <main className="pt-16 pb-5 min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center py-4">
          <span className="text-gold font-body text-xs tracking-[0.3em] uppercase block mb-1">Gallery</span>
          <h1 className="text-dark font-heading text-3xl md:text-5xl font-semibold tracking-wide">A Glimpse of Our Hall</h1>
        </div>
        {/* Masonry-style Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-3 xl:columns-4 gap-2 space-y-2">
          {placeholders.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid bg-[#FFF4C2] overflow-hidden group relative cursor-pointer border border-transparent hover:border-[#D4A017] transition-all duration-300 reveal"
            >
              <div className={`${item.aspect} w-full flex items-center justify-center bg-[#FFF4C2] relative`}>
                {/* Real Image */}
                <img
                  src={`/img1/${item.id}.webp`}
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
