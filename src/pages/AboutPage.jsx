import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Wind, Leaf, School, Sparkles, Users, Car, Zap, 
  ChefHat, ShieldCheck, Utensils, Volume2, Lightbulb, Flower2 
} from 'lucide-react';

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

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.replace('/', '');
    if (sectionId && ['about', 'services', 'amenities'].includes(sectionId)) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (location.pathname === '/about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <main className="bg-cream overflow-hidden">
      {/* Cinematic Hero */}
      <section id="about" className="w-full mb-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[20vh] sm:h-[40vh] md:h-[60vh] w-full overflow-hidden shadow-md"
        >
          <img src="/img1/11.webp" alt="Temple Hall" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-white font-heading text-4xl md:text-6xl mb-4">About Us</h1>
              <div className="w-16 h-1 bg-gold mx-auto" />
            </div>
          </div>
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
            <p className="text-white/90 font-body text-sm md:text-base tracking-widest uppercase bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/30">
              <span className="text-gold mr-2">✦</span> Pure Vegetarian Venue
            </p>
          </div>
        </motion.div>
      </section>

      {/* Storytelling Layout */}
      <section className="px-6 mb-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <span className="text-gold font-body text-sm tracking-[0.3em] uppercase block mb-1">Discover Our Journey</span>
            <h2 className="text-dark font-heading text-3xl md:text-4xl leading-tight">A Blessed Space for Every Occasion</h2>
            <div className="w-12 h-[2px] bg-gold mx-auto mt-2" />
          </div>

          <div className="space-y-8">
            {/* Story Block 1: Devotion & Celebration */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-3"
              >
                <h3 className="text-gold font-heading text-lg md:text-xl">Spiritual Ambiance & Modern Convenience</h3>
                <p className="text-gray-600 font-body leading-relaxed text-sm md:text-base">
                  Step into a space thoughtfully designed for both devotion and joyful celebration. Our temple banquet hall offers a serene, welcoming indoor setting that beautifully blends spiritual ambiance with modern convenience. Whether you are planning a grand wedding, intimate engagement, traditional naming ceremony, religious gathering, corporate event, or any other cherished occasion, we provide the perfect backdrop. Every detail of our design has been curated to inspire peace, happiness, and elegance, ensuring that your guests feel fully welcomed and your meaningful moments are elevated into timeless, beautiful memories.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-[320px] shrink-0"
              >
                <div className="relative overflow-hidden rounded-2xl md:rounded-[1.5rem] shadow-md aspect-[4/3] max-w-[280px] md:max-w-sm mx-auto border border-gold/20 p-1 bg-white">
                  <img src="/img1/35.webp" alt="Banquet Hall Wedding Setup" className="w-full h-full object-cover rounded-xl md:rounded-[1.3rem] hover:scale-105 transition-transform duration-500" />
                </div>
              </motion.div>
            </div>

            {/* Story Block 2: Vegetarian & Flexibility */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-3"
              >
                <h3 className="text-gold font-heading text-lg md:text-xl">Pure Vegetarian & Custom Flexibility</h3>
                <p className="text-gray-600 font-body leading-relaxed text-sm md:text-base">
                  With both AC and non-AC hall options, we offer the flexibility to choose what best suits your comfort and budget. Our strictly vegetarian environment ensures a sattvic, temple-aligned experience for you and your guests, thoughtfully preserving the sanctity and sacred atmosphere that every special occasion deserves. Your traditions are respected here, in every detail, creating a pure and positive environment that elevates the spiritual essence of your celebrations while keeping everyone thoroughly comfortable.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-[320px] shrink-0"
              >
                <div className="relative overflow-hidden rounded-2xl md:rounded-[1.5rem] shadow-md aspect-[4/3] max-w-[280px] md:max-w-sm mx-auto border border-gold/20 p-1 bg-white">
                  <img src="/img1/26.webp" alt="Vegetarian Dining Setup" className="w-full h-full object-cover rounded-xl md:rounded-[1.3rem] hover:scale-105 transition-transform duration-500" />
                </div>
              </motion.div>
            </div>

            {/* Story Block 3: Premium Amenities */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-3"
              >
                <h3 className="text-gold font-heading text-lg md:text-xl">Complete One-Stop Facilities</h3>
                <p className="text-gray-600 font-body leading-relaxed text-sm md:text-base">
                  Our spacious, clean, and well-ventilated halls come equipped with 250KVA generator backup, dedicated private dressing rooms, ample parking, professional sound and lighting systems, round-the-clock security, and optional catering — making us your complete one-stop solution. Here, we do not simply host events; we help you create timeless memories in a setting that truly feels blessed, backed by a dedicated support team that handles all the technicalities so you can focus entirely on celebrating with loved ones.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-[320px] shrink-0"
              >
                <div className="relative overflow-hidden rounded-2xl md:rounded-[1.5rem] shadow-md aspect-[4/3] max-w-[280px] md:max-w-sm mx-auto border border-gold/20 p-1 bg-white">
                  <img src="/img1/15.webp" alt="Traditional Ceremonial Setup" className="w-full h-full object-cover rounded-xl md:rounded-[1.3rem] hover:scale-105 transition-transform duration-500" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pt-20 pb-16 bg-cream border-t border-gold/10">
        <header className="px-6 mb-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-2 block">Our Offerings</span>
            <h2 className="text-dark font-heading text-3xl md:text-5xl mb-4 font-semibold tracking-wide">Exquisite Services</h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </motion.div>
        </header>

        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                <h3 className="text-white font-heading text-3xl md:text-4xl mb-3 drop-shadow-lg">
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
      <section id="amenities" className="pt-20 pb-16 bg-dark-soft relative overflow-hidden mandala-bg border-t border-gold/10">
        <header className="px-6 text-center max-w-4xl mx-auto relative z-10 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-2 block">Amenities</span>
            <h2 className="text-cream font-heading text-3xl md:text-5xl mb-4 font-semibold tracking-wide">Class Facilities</h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </motion.div>
        </header>

        <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
          {categories.map((category, catIdx) => (
            <div key={category.name}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gold font-heading text-2xl md:text-3xl mb-6 flex items-center gap-4"
              >
                {category.name}
                <div className="flex-1 h-px bg-gold/20" />
              </motion.h3>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.amenities.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 p-1.5 px-3 md:p-2 md:px-4 rounded-xl md:rounded-full border border-gold/10 glass card-luxury transition-all duration-300 group relative overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <div className="bg-gold/10 p-1.5 rounded-full shrink-0 group-hover:bg-gold transition-colors duration-300">
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
    </main>
  );
}
