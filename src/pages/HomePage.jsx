import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HandPlatter, Image, CalendarDays, Sparkles, School } from 'lucide-react';

const navItems = [
  { name: 'About', to: '/about', icon: School, description: "Our story, values and more" },
  { name: 'Services', to: '/services', icon: HandPlatter, description: "Everything for your perfect celebration" },
  { name: 'Amenities', to: '/amenities', icon: Sparkles, description: "Our premium facilities" },
  { name: 'Gallery', to: '/gallery', icon: Image, description: "Glimpses of our venue" },
  { name: 'Booking', to: '/booking', icon: CalendarDays, description: "Reserve your date" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <main className="bg-cream min-h-screen">
      <HeroSection />

      {/* Quote Section */}
      <section className="relative py-6 px-6 text-center overflow-hidden mandala-bg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-2"
        >
          {/* Gold Decorative Divider */}
          <div className="flex items-center gap-4 w-full justify-center">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-gold" />
            <div className="text-gold text-2xl">༻⚛༺</div>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-gold" />
          </div>

          <p className="text-gold font-heading text-2xl md:text-3xl italic leading-tight tracking-wide drop-shadow-sm">
            “Where tradition meets elegance, and every celebration becomes divine.”
          </p>

          <div className="flex items-center gap-4 w-full justify-center">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-gold" />
            <div className="text-gold text-2xl">༺⚛༻</div>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-gold" />
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-gold/5 blur-3xl rounded-full" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-gold/5 blur-3xl rounded-full" />
      </section>

      {/* Quick Navigation Grid */}
      <section className="pb-4 px-6 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4"
        >
          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Link to={item.to}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="glass-gold card-luxury flex flex-col items-center justify-center gap-2 rounded-3xl p-4 text-center transition-all duration-500 group overflow-hidden relative shadow-[0_20px_40px_rgba(212,175,55,0.1)] bg-gold/5"
                >
                  <div className="absolute inset-0 bg-gold/10 transition-opacity" />
                  <div className="relative z-10 p-4 rounded-3xl bg-gold text-white shadow-lg shadow-gold/20">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="relative z-10 font-heading text-lg md:text-xl font-semibold text-dark tracking-wide">{item.name}</span>
                  <span className="hidden md:block relative z-10 font-heading text-xs md:text-sm font-medium text-dark tracking-wide">{item.description}</span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
