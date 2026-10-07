import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
  '/img1/35.webp',
  '/img1/31.webp',
  '/img1/25.jpg',
  '/img1/24.webp',
  '/img1/11.webp',
  '/img1/22.webp',
  '/img1/17.webp',
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const [[page, direction], setPage] = useState([0, 0]);
  const currentIndex = (page % images.length + images.length) % images.length;

  const paginate = (newDirection) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative overflow-hidden border-b border-gold/20 bg-dark w-full md:h-[52vh] md:min-h-[420px] lg:h-[70vh] lg:min-h-[520px]"
    >
      {/* ============================================================ */}
      {/* MOBILE VIEW (< 768px): Carousel on top, Black Strip below   */}
      {/* ============================================================ */}
      <div className="flex flex-col w-full md:hidden">
        {/* 1. Image Carousel (Styled like Desktop Carousel) */}
        <div className="relative w-full h-[280px] sm:h-[340px] overflow-hidden bg-dark">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000 || offset.x < -50) {
                  paginate(1);
                } else if (swipe > 10000 || offset.x > 50) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
            />
          </AnimatePresence>

          {/* Carousel Slide Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const diff = index - currentIndex;
                  if (diff !== 0) setPage([page + diff, diff]);
                }}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-5 bg-gold' : 'w-1.5 bg-white/60'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* 2. Black Strip Having Text & Buttons Below Image Carousel */}
        <div className="bg-black px-4 py-6 sm:py-8 sm:px-6 text-center border-t border-gold/10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto flex flex-col items-center"
          >
            <h1 className="text-white font-heading font-bold leading-tight text-2xl sm:text-3xl">
              A Space for <span className="text-gold">Every Occasion</span>
            </h1>

            <div className="w-16 h-[2px] bg-gold my-3.5" />

            <div className="flex flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <Link to="/booking" className="flex-1 sm:flex-initial">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gold text-white font-bold uppercase tracking-wider text-xs shadow-md shadow-gold/20"
                >
                  Book Venue
                </motion.button>
              </Link>

              <Link to="/gallery" className="flex-1 sm:flex-initial">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#FFF4C2] text-[#FFF4C2] font-bold uppercase tracking-wider text-xs transition-colors hover:bg-[#FFF4C2]/10"
                >
                  Explore Gallery
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* TABLET & DESKTOP VIEW (>= 768px): Split Grid Layout          */}
      {/* ============================================================ */}
      <div className="hidden md:grid h-full md:grid-cols-12">
        {/* LEFT PANEL: Text & Buttons */}
        <div className="bg-black flex items-center md:col-span-5 lg:col-span-4 xl:col-span-4 z-10">
          <div className="px-6 md:px-8 lg:px-12 xl:px-16 py-8 max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-white font-heading font-bold leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                A Space for
                <br />
                <span className="text-gold">Every Occasion</span>
              </h1>

              <div className="w-16 md:w-20 lg:w-24 h-[2px] bg-gold my-4 md:my-6 lg:my-8" />

              <div className="flex flex-wrap gap-3 lg:gap-4">
                <Link to="/booking">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full bg-gold text-white font-bold uppercase tracking-widest text-xs lg:text-sm shadow-lg shadow-gold/20"
                  >
                    Book Venue
                  </motion.button>
                </Link>

                <Link to="/gallery">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full border border-[#FFF4C2] text-[#FFF4C2] font-bold uppercase tracking-widest text-xs lg:text-sm transition-colors hover:bg-[#FFF4C2]/10"
                  >
                    Explore Gallery
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT PANEL: Image Carousel */}
        <div className="relative md:col-span-7 lg:col-span-8 xl:col-span-8 overflow-hidden bg-dark">
          <motion.div style={{ scale }} className="absolute inset-0">
            <motion.div style={{ y }} className="absolute inset-0">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.5 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -10000 || offset.x < -50) {
                      paginate(1);
                    } else if (swipe > 10000 || offset.x > 50) {
                      paginate(-1);
                    }
                  }}
                  className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
                />
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Indicators on right panel */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const diff = index - currentIndex;
                  if (diff !== 0) setPage([page + diff, diff]);
                }}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-6 bg-gold' : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
