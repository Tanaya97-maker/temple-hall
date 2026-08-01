import useScrollReveal from '../hooks/useScrollReveal';
import { useState, useEffect } from "react";

// Exact files present in /public/img1/ with correct extensions
const images = [
  { id: '2', ext: 'png' },
  { id: '11', ext: 'webp' },
  { id: '12', ext: 'webp' },
  { id: '13', ext: 'webp' },
  { id: '14', ext: 'webp' },
  { id: '15', ext: 'webp' },
  { id: '16', ext: 'webp' },
  { id: '17', ext: 'webp' },
  { id: '18', ext: 'webp' },
  { id: '19', ext: 'webp' },
  { id: '20', ext: 'webp' },
  { id: '21', ext: 'webp' },
  { id: '22', ext: 'webp' },
  { id: '23', ext: 'webp' },
  { id: '24', ext: 'webp' },
  { id: '25', ext: 'png' },
  { id: '26', ext: 'webp' },
  { id: '27', ext: 'webp' },
  { id: '28', ext: 'webp' },
  { id: '29', ext: 'webp' },
  { id: '30', ext: 'webp' },
  { id: '31', ext: 'webp' },
  { id: '32', ext: 'webp' },
  { id: '33', ext: 'webp' },
  { id: '34', ext: 'webp' },
  { id: '35', ext: 'webp' },
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
    <main className="pt-16 pb-5 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center py-4">
          <span className="text-gold font-body text-xs tracking-[0.3em] uppercase block mb-1">Gallery</span>
          <h1 className="text-dark font-heading text-3xl md:text-5xl font-semibold tracking-wide">A Glimpse of Our Hall</h1>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-3 xl:columns-4 gap-2 space-y-2">
          {images.map((img, index) => (
            <div
              key={img.id}
              className="break-inside-avoid overflow-hidden rounded-md cursor-pointer reveal"
              onClick={() => setSelectedImage(img.id)}
            >
              <div className={`${aspectClasses[index % 6]} w-full relative bg-[#FFF4C2]`}>
                <img
                  src={`/img1/${img.id}.${img.ext}`}
                  alt={`Gallery ${img.id}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] animate-[zoomIn_.25s_ease]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-4xl leading-none hover:text-yellow-400"
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={`/img1/${selectedImg.id}.${selectedImg.ext}`}
              alt={`Gallery ${selectedImg.id}`}
              className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </main>
  );
}
