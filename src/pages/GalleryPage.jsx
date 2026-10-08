import useScrollReveal from '../hooks/useScrollReveal';
import { useState, useEffect } from "react";

// Exact files present in /public/img1/ with descriptive SEO titles
const images = [
  { id: '35', ext: 'webp', title: 'Shree Shantadurga Sabhagruha Exterior View' },
  { id: '31', ext: 'webp', title: 'Shree Shantadurga Sabhagruha Exterior View' },
  { id: '25', ext: 'jpg', title: 'Shree Shantadurga Sabhagruha Exterior View' },
  { id: '22', ext: 'webp', title: 'Wedding and Mandap Area' },
  { id: '16', ext: 'webp', title: 'Wedding Ceremony Decoration' },
  { id: '14', ext: 'webp', title: 'Haldi Ceremony Decoration' },
  { id: '15', ext: 'webp', title: 'Wedding Ceremony Decoration' },
  { id: '2', ext: 'png', title: 'Shree Shantadurga Sabhagruha Exterior View' },
  { id: '11', ext: 'webp', title: 'Wedding Ceremony Decoration' },
  { id: '12', ext: 'webp', title: 'Wedding Ceremony Decoration' },
  { id: '13', ext: 'webp', title: 'Haldi Ceremony Decoration' },
  { id: '17', ext: 'webp', title: 'Entrance & Welcome Corridor' },
  { id: '18', ext: 'webp', title: 'Wedding and Mandap Area' },
  { id: '19', ext: 'webp', title: 'Wedding and Mandap Area' },
  { id: '20', ext: 'webp', title: 'Air-Conditioned Guest Seating Area' },
  { id: '21', ext: 'webp', title: 'Entrance & Welcome Corridor' },
  { id: '23', ext: 'webp', title: 'Shree Shantadurga Sabhagruha Exterior View' },
  { id: '24', ext: 'webp', title: 'Shree Shantadurga Sabhagruha Exterior View' },
  { id: '26', ext: 'webp', title: 'Engagement Ceremony Decoration' },
  { id: '27', ext: 'webp', title: 'Entrance & Welcome Corridor' },
  { id: '28', ext: 'webp', title: 'Entrance & Welcome Corridor' },
  { id: '29', ext: 'webp', title: 'Shree Shantadurga Sabhagruha Exterior View' },
  { id: '30', ext: 'webp', title: 'Wedding Ceremony Decoration' },
  { id: '32', ext: 'webp', title: 'Wedding and Mandap Area' },
  { id: '33', ext: 'webp', title: 'Entrance & Welcome Corridor' },
  { id: '34', ext: 'webp', title: 'Educational & Summer Camp Gathering' },
];

const aspectClasses = [
  'aspect-square',
  'aspect-[4/3]',
  'aspect-[3/4]',
  'aspect-[16/9]',
  'aspect-[4/3]',
  'aspect-square',
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  useScrollReveal();

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  const selectedImg = selectedImage
    ? images.find((img) => img.id === selectedImage)
    : null;

  return (
    <main className="pt-16 pb-12 min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center py-6">
          <span className="text-gold font-body text-xs tracking-[0.3em] uppercase block mb-1">Visual Showcase</span>
          <h1 className="text-dark font-heading text-3xl md:text-5xl font-semibold tracking-wide">A Glimpse of Our Hall</h1>
          <p className="text-gray-600 font-body text-xs md:text-sm mt-2 max-w-lg mx-auto">
            Explore authentic photos of wedding stages, traditional mandaps, 1000+ guest seating, dining halls, and vibrant celebrations.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-3 xl:columns-4 gap-3 space-y-3">
          {images.map((img, index) => (
            <div
              key={img.id}
              className="break-inside-avoid overflow-hidden rounded-2xl cursor-pointer reveal border border-gold/15 bg-white shadow-md hover:shadow-xl transition-all duration-300 group"
              onClick={() => setSelectedImage(img.id)}
            >
              <div className={`${aspectClasses[index % 6]} w-full relative overflow-hidden bg-dark/5`}>
                <img
                  src={`/img1/${img.id}.${img.ext}`}
                  alt={`Shree Shantadurga Sangodkarin Sabhagruha - ${img.title}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
                  <span className="text-white text-xs font-heading font-medium tracking-wide leading-tight">
                    {img.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center animate-[zoomIn_.25s_ease]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-11 right-0 text-white text-3xl leading-none hover:text-gold transition-colors p-2"
              aria-label="Close image preview"
            >
              ×
            </button>
            <img
              src={`/img1/${selectedImg.id}.${selectedImg.ext}`}
              alt={`Shree Shantadurga Sangodkarin Sabhagruha - ${selectedImg.title}`}
              className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl border border-gold/20"
            />
            <div className="mt-3 text-center bg-black/70 backdrop-blur-md px-6 py-2 rounded-full border border-gold/20 text-cream font-heading text-sm md:text-base">
              {selectedImg.title}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
