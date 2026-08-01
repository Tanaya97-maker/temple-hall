import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import BookingPage from './BookingPage';
import {
  HandPlatter, Image, CalendarDays, Sparkles, School,
  Wind, Leaf, Users, Car, Zap, ChefHat, ShieldCheck,
  Utensils, Volume2, Lightbulb, Flower2
} from 'lucide-react';

const navItems = [
  { name: 'About', to: '/about', icon: School },
  { name: 'Services', to: '/services', icon: HandPlatter },
  { name: 'Amenities', to: '/amenities', icon: Sparkles },
  { name: 'Gallery', to: '/gallery', icon: Image },
  { name: 'Booking', to: '/booking', icon: CalendarDays },
];

const services = [
  {
    title: 'Weddings',
    description: 'Transform your special day into a divine union. Our grand hall provides the perfect atmosphere for traditional rituals and modern celebrations.',
    image: '/img1/16.webp',
  },
  {
    title: 'Haldi Ceremony',
    description: 'Brighten your celebrations with our vibrant Haldi ceremony setup. A cheerful space filled with joy and auspicious colors.',
    image: '/img1/14.webp',
  },
  {
    title: 'Summer camps',
    description: 'A wonderful space for children to learn and have fun. Our hall provides a safe and engaging environment for educational activities.',
    image: '/img1/34.webp',
  },
  {
    title: 'Religious Events',
    description: 'Our hall is designed with temple-inspired aesthetics, making it the ideal venue for sacred ceremonies and spiritual gatherings.',
    image: '/img1/21.webp',
  },
  {
    title: 'Corporate Gatherings',
    description: 'Elevate your corporate events with our premium facilities and professional ambiance. Perfect for seminars, awards, and galas.',
    image: '/img1/20.webp',
  },
  {
    title: 'Other',
    description: 'We provide a wide range of services for various events. Contact us to know more.',
    image: '/img1/26.webp',
  },
];

const categories = [
  {
    name: 'Comfort',
    amenities: [
      { name: 'AC Hall Capacity', icon: Wind, description: '(1000 - 1500)' },
      { name: 'Vegetarian Venue', icon: Leaf, description: '' },
      { name: 'AC - Non AC Halls', icon: School, description: '(Both available)' },
      { name: 'Dressing Room with washroom', icon: Sparkles, description: '(Separate for Bride & Groom)' },
      { name: 'Public Washrooms', icon: Users, description: '(Clean and accessible for all guests)' },
    ]
  },
  {
    name: 'Convenience',
    amenities: [
      { name: 'Parking', icon: Car, description: '(250Cars)' },
      { name: 'Generator', icon: Zap, description: '(250KV Backup)' },
      { name: 'Buffet hall', icon: ChefHat, description: '(250 Seating + Kitchen)' },
      { name: 'Security', icon: ShieldCheck, description: '(24/7 Security)' },
    ]
  },
  {
    name: 'Celebration',
    amenities: [
      { name: 'Catering', icon: Utensils, description: '' },
      { name: 'Sound System', icon: Volume2, description: '' },
      { name: 'Lighting', icon: Lightbulb, description: '' },
      { name: 'Decoration', icon: Flower2, description: '' },
    ]
  },
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

const sentenceVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035, // speed between letters
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};
const quote =
  "Where tradition meets elegance, and every celebration becomes divine.";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.substring(1);
    const sectionRoutes = ['about', 'services', 'amenities'];
    if (sectionRoutes.includes(path)) {
      requestAnimationFrame(() => {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
      return;
    }

    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    }
  }, [location.pathname]);

  return (
    <main className="bg-cream min-h-screen overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Quote Section */}
      <section className="relative py-6 text-center overflow-hidden mandala-bg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-4"
        >
          {/* Gold Decorative Divider */}
          <div className="flex items-center gap-4 w-full justify-center">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-gold" />
            <div className="text-gold text-2xl">༻⚛༺</div>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-gold" />
          </div>

          <motion.p
            variants={sentenceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gold px-1 font-heading text-2xl md:text-4xl italic leading-tight tracking-wide drop-shadow-sm"
          >
            <span>“</span>

            {quote.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{
                  display: "inline-block",
                  whiteSpace: char === " " ? "pre" : "normal",
                }}
              >
                {char}
              </motion.span>
            ))}

            <span>”</span>
          </motion.p>

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
      <section className="pb-10 px-6 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-6"
        >
          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Link to={item.to}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass-gold card-luxury flex flex-col items-center justify-center gap-3 rounded-3xl p-4 text-center transition-all duration-500 group overflow-hidden relative shadow-[0_20px_40px_rgba(212,175,55,0.08)] bg-gold/5 border border-gold/15"
                >
                  <div className="absolute inset-0 bg-gold/10 transition-opacity opacity-0 group-hover:opacity-100" />
                  <div className="relative z-10 p-4 rounded-3xl bg-gold text-white shadow-lg shadow-gold/20">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="relative z-10 font-heading text-lg md:text-xl font-semibold text-dark tracking-wide">{item.name}</span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-14 px-6 bg-cream border-t border-gold/10 scroll-mt-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-gold font-body text-sm tracking-[0.3em] uppercase block mb-1">Discover Our Journey</span>
            <h2 className="text-dark font-heading text-3xl md:text-5xl font-semibold leading-tight">A Blessed Space for Every Occasion</h2>
            <div className="w-16 h-[2px] bg-gold mx-auto mt-3" />
          </div>

          <div className="space-y-12">
            {/* Story Block 1 */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-4"
              >
                <h3 className="text-gold font-heading text-xl md:text-2xl font-semibold">Spiritual Ambiance & Modern Convenience</h3>
                <p className="text-gray-600 font-body leading-relaxed text-base md:text-lg">
                  Step into a space thoughtfully designed for both devotion and joyful celebration. Our temple banquet hall offers a serene, welcoming indoor setting that beautifully blends spiritual ambiance with modern convenience. Whether you are planning a grand wedding, intimate engagement, traditional naming ceremony, religious gathering, corporate event, or any other cherished occasion, we provide the perfect backdrop. Every detail of our design has been curated to inspire peace, happiness, and elegance, ensuring that your guests feel fully welcomed and your meaningful moments are elevated into timeless, beautiful memories.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-[400px] shrink-0"
              >
                <div className="relative overflow-hidden rounded-[2rem] shadow-xl aspect-[4/3] max-w-md mx-auto border border-gold/20 p-1.5 bg-white">
                  <img src="/img1/35.webp" alt="Banquet Hall Wedding Setup" className="w-full h-full object-cover rounded-[1.8rem] hover:scale-105 transition-transform duration-500" />
                </div>
              </motion.div>
            </div>

            {/* Story Block 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-4"
              >
                <h3 className="text-gold font-heading text-xl md:text-2xl font-semibold">Pure Vegetarian & Custom Flexibility</h3>
                <p className="text-gray-600 font-body leading-relaxed text-base md:text-lg">
                  With both AC and non-AC hall options, we offer the flexibility to choose what best suits your comfort and budget. Our strictly vegetarian environment ensures a sattvic, temple-aligned experience for you and your guests, thoughtfully preserving the sanctity and sacred atmosphere that every special occasion deserves. Your traditions are respected here, in every detail, creating a pure and positive environment that elevates the spiritual essence of your celebrations while keeping everyone thoroughly comfortable.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-[400px] shrink-0"
              >
                <div className="relative overflow-hidden rounded-[2rem] shadow-xl aspect-[4/3] max-w-md mx-auto border border-gold/20 p-1.5 bg-white">
                  <img src="/img1/26.webp" alt="Vegetarian Dining Setup" className="w-full h-full object-cover rounded-[1.8rem] hover:scale-105 transition-transform duration-500" />
                </div>
              </motion.div>
            </div>

            {/* Story Block 3 */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-4"
              >
                <h3 className="text-gold font-heading text-xl md:text-2xl font-semibold">Complete One-Stop Facilities</h3>
                <p className="text-gray-600 font-body leading-relaxed text-base md:text-lg">
                  Our spacious, clean, and well-ventilated halls come equipped with 250KVA generator backup, dedicated private dressing rooms, ample parking, professional sound and lighting systems, round-the-clock security, and optional catering — making us your complete one-stop solution. Here, we do not simply host events; we help you create timeless memories in a setting that truly feels blessed, backed by a dedicated support team that handles all the technicalities so you can focus entirely on celebrating with loved ones.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-[400px] shrink-0"
              >
                <div className="relative overflow-hidden rounded-[2rem] shadow-xl aspect-[4/3] max-w-md mx-auto border border-gold/20 p-1.5 bg-white">
                  <img src="/img1/15.webp" alt="Traditional Ceremonial Setup" className="w-full h-full object-cover rounded-[1.8rem] hover:scale-105 transition-transform duration-500" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-14 bg-cream border-t border-gold/10 scroll-mt-16">
        <div className="px-6 mb-12 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-2 block">Our Offerings</span>
            <h2 className="text-dark font-heading text-3xl md:text-5xl mb-4 font-semibold tracking-wide">Exquisite Services</h2>
            <div className="w-16 h-[2px] bg-gold mx-auto" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative w-full h-[33vh] md:h-[40vh] overflow-hidden rounded-3xl shadow-xl border border-gold/15"
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
              <div className="absolute inset-0 bg-black/45 flex flex-col justify-center items-center text-center px-4 md:px-8 transition-colors hover:bg-black/55">
                <h3 className="text-white font-heading text-3xl md:text-4xl mb-3 drop-shadow-lg font-semibold">
                  {service.title}
                </h3>
                <div className="w-12 h-px bg-gold mb-3" />
                <p className="text-cream/90 font-body text-xs md:text-sm leading-relaxed max-w-xl drop-shadow-md">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-14 bg-dark-soft relative overflow-hidden mandala-bg border-t border-gold/10 scroll-mt-16">
        <header className="px-6 text-center max-w-4xl mx-auto relative z-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-2 block">Amenities</span>
            <h2 className="text-cream font-heading text-3xl md:text-5xl mb-4 font-semibold tracking-wide">Class Facilities</h2>
            <div className="w-16 h-[2px] bg-gold mx-auto" />
          </motion.div>
        </header>

        <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
          {categories.map((category) => (
            <div key={category.name}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gold font-heading text-2xl md:text-3xl mb-6 flex items-center gap-4 font-semibold"
              >
                {category.name}
                <div className="flex-1 h-px bg-gold/20" />
              </motion.h3>

              <div className="flex flex-wrap gap-3">
                {category.amenities.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2.5 p-2 px-4 rounded-full border border-gold/15 glass card-luxury transition-all duration-300 group relative overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <div className="bg-gold/15 p-1.5 rounded-full shrink-0 group-hover:bg-gold transition-colors duration-300">
                      <item.icon size={14} className="text-gold group-hover:text-dark transition-colors" />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1.5 min-w-0 text-xs md:text-sm">
                      <span className="text-cream font-body whitespace-normal md:whitespace-nowrap font-medium">{item.name}</span>
                      {item.description && (
                        <span className="text-cream/60 md:text-cream/80 whitespace-normal md:whitespace-nowrap font-body text-[10px] md:text-xs">{item.description}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Background Ornaments */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gold/5 blur-[100px] rounded-full" />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-14 bg-cream border-t border-gold/10 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold font-body text-xs tracking-[0.3em] uppercase block mb-1">Gallery Preview</span>
            <h2 className="text-dark font-heading text-3xl md:text-5xl font-semibold tracking-wide">A Glimpse of Our Hall</h2>
            <div className="w-16 h-[2px] bg-gold mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { id: 22, title: 'Banquet Hall Setup', desc: 'Elegant and spacious arrangement' },
              { id: 15, title: 'Decorations', desc: 'Traditional and auspicious details' },
              { id: 31, title: 'Lighting & Ambience', desc: 'Warm and divine atmosphere' },
            ].map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-2xl shadow-xl border border-gold/10 aspect-[4/3] group cursor-pointer bg-white p-1"
              >
                <div className="w-full h-full overflow-hidden rounded-xl relative">
                  <img
                    src={`/img1/${img.id}.webp`}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                    <h4 className="text-white font-heading text-lg font-bold">{img.title}</h4>
                    <p className="text-gold font-body text-xs mt-1">{img.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/gallery">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-black hover:bg-gold text-[#FFF4C2] hover:text-dark font-body font-semibold tracking-widest text-xs uppercase transition-all duration-300 border border-gold/20"
              >
                View More
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
