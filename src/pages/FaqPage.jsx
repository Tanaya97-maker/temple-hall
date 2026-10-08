import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles, Phone, Calendar, Search, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    category: 'Capacity & Space',
    question: 'What is the guest seating and floating capacity of the hall?',
    answer: 'Shree Shantadurga Sangodkarin Sabhagruha comfortably accommodates between 1,000 and 1,500 guests. The grand main AC hall is spacious, well-ventilated, and designed to manage large wedding receptions, religious celebrations, and community gatherings effortlessly.',
  },
  {
    category: 'Pricing & Packages',
    question: 'What are the hall rental charges and booking packages?',
    answer: 'Our standard base package is ₹1,60,000 for a 5-hour event window. This all-inclusive fee covers access to both the AC and Non-AC halls, 500 kVA generator backup, bridal & groom suites, and parking. Additional hours beyond the 5-hour slot are charged at ₹11,000 per hour. A refundable security deposit of ₹10,000 is required at the time of reservation.',
  },
  {
    category: 'Food & Catering',
    question: 'What is the catering and food policy? Is non-vegetarian food allowed?',
    answer: 'Shree Shantadurga Sangodkarin Sabhagruha is strictly a Vegetarian venue. In alignment with our temple traditions, no meat, fish, poultry, or egg-based dishes are permitted on the premises. We provide a spacious dedicated 500-seat buffet dining hall with an adjacent commercial vegetarian kitchen for your chosen caterers.',
  },
  {
    category: 'Parking & Accessibility',
    question: 'How much parking space is available for guests?',
    answer: 'The venue provides generous on-site parking accommodating 250+ cars and numerous two-wheelers. The parking grounds are easily accessible and managed to ensure hassle-free vehicle flow for your attendees.',
  },
  {
    category: 'Power & Infrastructure',
    question: 'What happens during power outages in Goa?',
    answer: 'We have a powerful 500 kVA automatic generator backup on standby. It seamlessly powers the entire facility—including all central air conditioning units, stage lights, audio setups, and dining area lighting—ensuring your celebration continues without a second of interruption.',
  },
  {
    category: 'Facilities & Rooms',
    question: 'Are there separate dressing rooms for the bride and groom?',
    answer: 'Yes! We provide dedicated, fully air-conditioned bridal and groom dressing suites complete with attached private washrooms, mirrors, wardrobe hanging space, and comfortable seating.',
  },
  {
    category: 'Location & Directions',
    question: 'Where is the hall located and how far is it from Panaji or Mapusa?',
    answer: 'The sabhagruha is located in Sangolda, Porvorim, North Goa (PIN 403511), just off the main arterial corridors connecting Panaji (approx. 10-15 minutes) and Mapusa (approx. 10 minutes). Both Dabolim and Manohar International (Mopa) airports are directly accessible via NH66.',
  },
  {
    category: 'Event Types',
    question: 'What events are suitable for this venue?',
    answer: 'Our hall is perfect for Hindu Weddings, Receptions, Haldi & Sangeet ceremonies, Engagements, Naming Ceremonies (Barse), Upanayana (Munj / Thread Ceremony), Navratri poojas, Bhajan sandhyas, Corporate AGMs & conferences, and Educational workshops/camps.',
  },
  {
    category: 'Booking Process',
    question: 'How can I check date availability and confirm my reservation?',
    answer: 'You can check real-time date availability directly on our online Booking page, submit your enquiry form, or call management at +91 98221 55422. We also welcome in-person hall walkthroughs during standard working hours.',
  },
  {
    category: 'Music & Timing',
    question: 'What are the music and curfew timings for events?',
    answer: 'In compliance with Goa state administration and local noise regulations, outdoor amplified sound and music must conclude by 10:00 PM. Indoor music during your reserved slot must adhere to permitted decibel thresholds.',
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.title = "Frequently Asked Questions (FAQ) | Shree Shantadurga Sangodkarin Sabhagruha";
  }, []);

  const categories = ['All', ...new Set(faqs.map(f => f.category))];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <main className="pt-20 pb-16 min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-dark/70 hover:text-gold transition-colors font-body text-sm font-medium"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center pb-8 border-b border-gold/20">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-gold/10 text-gold mb-3">
            <HelpCircle size={32} />
          </div>
          <span className="text-gold font-body text-xs tracking-[0.3em] uppercase block mb-1">
            Answers & Essential Details
          </span>
          <h1 className="text-dark font-heading text-3xl md:text-5xl font-semibold tracking-wide">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 font-body text-xs md:text-sm mt-2 max-w-xl mx-auto">
            Everything you need to know about booking, amenities, capacity, and rules at Shree Shantadurga Sangodkarin Sabhagruha in Sangolda, Goa.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mt-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions (e.g. price, capacity, parking, vegetarian, AC)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white border border-gold/20 focus:border-gold outline-none font-body text-sm shadow-sm transition-colors text-dark"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-body font-medium transition-all ${selectedCategory === cat
                  ? 'bg-gold text-white shadow-sm shadow-gold/30 font-semibold'
                  : 'bg-white/80 border border-gold/20 text-gray-700 hover:border-gold'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-8 space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-gold/20 p-8">
              <p className="text-gray-600 font-body">No matching questions found.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="mt-3 text-gold font-body text-sm font-semibold underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="bg-white rounded-2xl border border-gold/15 overflow-hidden shadow-sm hover:border-gold/40 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading text-lg md:text-xl font-semibold text-dark cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="flex-1">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 p-1.5 rounded-full bg-gold/10 text-gold"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-gray-600 font-body text-sm md:text-base leading-relaxed border-t border-gray-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-12 bg-dark text-cream p-8 rounded-3xl border border-gold/30 text-center flex flex-col items-center">
          <Sparkles className="text-gold mb-2" size={28} />
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-2">
            Have More Questions or Ready to Reserve?
          </h3>
          <p className="text-cream/80 font-body text-xs md:text-sm max-w-lg mb-6">
            Our management team is here to assist with custom event arrangements, auspicious muhurat planning, and site visits.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/booking"
              className="px-6 py-3 rounded-full bg-gold hover:bg-gold-dark text-white font-body font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105 shadow-lg shadow-gold/20 flex items-center gap-2"
            >
              <Calendar size={16} /> Book Venue Online
            </Link>
            <a
              href="tel:+919822155422"
              className="px-6 py-3 rounded-full border border-gold text-gold hover:bg-gold/10 font-body font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <Phone size={16} /> Call +91 98221 55422
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
