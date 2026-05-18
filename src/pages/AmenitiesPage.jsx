import { motion } from 'framer-motion';
import { Wind, Car, Zap, ShieldCheck, School, Utensils, Volume2, Lightbulb, Leaf, Users, Sparkles, ChefHat, Flower2 } from 'lucide-react';

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

export default function AmenitiesPage() {
  return (
    <main className="bg-dark-soft min-h-screen pt-20 pb-4 relative overflow-hidden">
      <header className="px-6 text-center max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-gold font-body text-xs tracking-[0.3em] uppercase mb-2 block">Amenities</span>
          <h1 className="text-cream font-heading text-3xl md:text-5xl mb-4 font-semibold tracking-wide">Class Facilities</h1>
        </motion.div>
      </header>

      <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
        {categories.map((category, catIdx) => (
          <section key={category.name}>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-gold font-heading text-2xl md:text-3xl mb-6 flex items-center gap-4"
            >
              {category.name}
              <div className="flex-1 h-px bg-gold/20" />
            </motion.h2>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {category.amenities.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
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
          </section>
        ))}
      </div>

      {/* Background Ornaments */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gold/5 blur-[100px] rounded-full" />
    </main>
  );
}
