import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
  '/img1/35.webp',
  '/img1/31.webp',
  '/img1/25.png',
  '/img1/24.webp',
  '/img1/11.webp',
  '/img1/22.webp',
  '/img1/17.webp',
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0
  })
};

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const [[page, direction], setPage] = useState([0, 0]);
  const currentIndex = (page % images.length + images.length) % images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setPage(([prevPage]) => [prevPage + 1, 1]);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative overflow-hidden border-b border-gold/20 bg-dark h-[36vh] sm:h-[36vh] md:h-[45vh] lg:h-[70vh]"
    >
      {/* MOBILE VIEW */}
      <div className="relative h-full lg:hidden">
        <motion.div
          style={{ scale }}
          className="absolute inset-0 overflow-hidden"
        >
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
                  x: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  },
                  opacity: {
                    duration: 0.5,
                  },
                }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-md"
          >
            <h1 className="text-white font-heading font-bold leading-tight text-3xl sm:text-4xl md:text-5xl">
              A Space for{" "}<span className="text-gold">Every Occasion</span>
            </h1>

            <div className="w-20 h-[2px] bg-gradient-to-r from-gold to-transparent my-4 md:my-6" />

            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <Link to="/booking">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-2 md:px-6 md:py-3 rounded-full bg-gold text-white md:font-bold uppercase tracking-widest text-xs"
                >
                  Book Venue
                </motion.button>
              </Link>

              <Link to="/gallery">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-2 md:px-6 md:py-3 rounded-full border border-[#FFF4C2] text-[#FFF4C2] md:font-bold uppercase tracking-widest text-xs"
                >
                  Explore Gallery
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:grid h-full lg:grid-cols-3">

        {/* LEFT PANEL */}
        <div className="bg-black flex items-center">
          <div className="px-12 xl:px-16 max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="
              text-white
              font-heading
              font-bold
              leading-tight
              text-5xl
              xl:text-6xl
            "
              >
                A Space for
                <br />
                <span className="text-gold">
                  Every Occasion
                </span>
              </h1>

              <div className="w-24 h-[2px] bg-gold my-8" />

              <div className="flex flex-wrap gap-4">
                <Link to="/booking">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                  px-8
                  py-4
                  rounded-full
                  bg-gold
                  text-white
                  font-bold
                  uppercase
                  tracking-widest
                  text-sm
                "
                  >
                    Book Venue
                  </motion.button>
                </Link>

                <Link to="/gallery">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                  px-8
                  py-4
                  rounded-full
                  border
                  border-[#FFF4C2]
                  text-[#FFF4C2]
                  font-bold
                  uppercase
                  tracking-widest
                  text-sm
                "
                  >
                    Explore Gallery
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative col-span-2 overflow-hidden">

          <motion.div
            style={{ scale }}
            className="absolute inset-0"
          >
            <motion.div
              style={{ y }}
              className="absolute inset-0"
            >
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
                    x: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    },
                    opacity: {
                      duration: 0.5,
                    },
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const diff = index - currentIndex;
              if (diff !== 0) setPage([page + diff, diff]);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
              ? "w-6 bg-gold"
              : "w-2 bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
