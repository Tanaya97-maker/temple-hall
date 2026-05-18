import { motion } from 'framer-motion';

const services = [
  {
    title: 'Weddings',
    description: 'Transform your special day into a divine union. Our grand hall provides the perfect atmosphere for traditional rituals and modern celebrations.',
    image: '/img1/16.webp',
    accent: 'Beautiful Beginings'
  },
  {
    title: 'Haldi Ceremony',
    description: 'Brighten your celebrations with our vibrant Haldi ceremony setup. A cheerful space filled with joy and auspicious colors.',
    image: '/img1/14.webp',
    accent: 'Joyful Rituals'
  },
  {
    title: 'Summer camps',
    description: 'A wonderful space for children to learn and have fun. Our hall provides a safe and engaging environment for educational activities.',
    image: '/img1/34.webp',
    accent: 'Fun and Learning'
  },
  {
    title: 'Religious Events',
    description: 'Our hall is designed with temple-inspired aesthetics, making it the ideal venue for sacred ceremonies and spiritual gatherings.',
    image: '/img1/21.webp',
    accent: 'Divine Aura'
  },
  {
    title: 'Corporate Gatherings',
    description: 'Elevate your corporate events with our premium facilities and professional ambiance. Perfect for seminars, awards, and galas.',
    image: '/img1/20.webp',
    accent: 'Professional Elegance'
  },
  {
    title: 'Other',
    description: 'We provide a wide range of services for various events. Contact us to know more.',
    image: '/img1/26.webp',
    accent: 'Customized for You'
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-cream pt-20 pb-10 overflow-hidden">
      <header className="px-6 mb-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-2 block">Our Offerings</span>
          <h1 className="text-dark font-heading text-3xl md:text-5xl mb-4 font-semibold tracking-wide">Exquisite Services</h1>
        </motion.div>
      </header>

      <section className="max-w-7xl mx-auto px-4 md:px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="relative w-full h-[33vh] md:h-[40vh] overflow-hidden rounded-2xl md:rounded-[2rem] shadow-xl"
          >
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover origin-center"
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.15 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ amount: 0.3 }}
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4 md:px-8 transition-colors hover:bg-black/50">
              <span className="text-gold font-body text-[10px] md:text-xs tracking-[0.3em] uppercase mb-2 block drop-shadow-md">
                {service.accent}
              </span>
              <h2 className="text-white font-heading text-3xl md:text-4xl mb-3 drop-shadow-lg">
                {service.title}
              </h2>
              <div className="w-12 h-px bg-gold mb-3" />
              <p className="text-cream/90 font-body text-xs md:text-sm leading-relaxed max-w-xl drop-shadow-md">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
