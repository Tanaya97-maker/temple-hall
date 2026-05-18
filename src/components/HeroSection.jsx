import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const images = [
  '/img1/11.webp',
  '/img1/12.webp',
  '/img1/13.webp',
];

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-[33vh] md:h-[50vh] lg:h-[66vh] overflow-hidden bg-white/20 backdrop-blur-lg border-b border-white/20">
      {/* Cinematic Banner with Rounded Edges */}
      <motion.div
        style={{ scale }}
        className="relative w-full h-full overflow-hidden"
      >
        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src="/img1/11.webp"
            alt="Wedding Hall"
            className="w-full h-full object-cover"
          />
          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-white/5 to-black/70 " />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-px h-8 md:h-12 bg-gradient-to-b from-gold to-transparent mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}
