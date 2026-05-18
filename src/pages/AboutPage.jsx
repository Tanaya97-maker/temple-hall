import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="bg-cream">
      {/* Cinematic Hero */}
      <section className="w-full mb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[20vh] sm:h-[40vh] md:h-[60vh] w-full overflow-hidden shadow-lg"
        >
          <img src="/img1/11.webp" alt="Temple Hall" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-white font-heading text-4xl md:text-6xl mb-4">About Us</h1>
              <div className="w-16 h-1 bg-gold mx-auto" />
            </div>
          </div>
          <div className="absolute bottom-1 right-2">
            <p className="text-white/90 font-body text-[8px] md:text-sm tracking-widest uppercase bg-black/30 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-full border border-gold/30">
              Vegetarian Venue
            </p>
          </div>
        </motion.div>
      </section>

      {/* Storytelling Layout */}
      <section className="px-6 mb-12 overflow-hidden">
        <div className="mx-auto">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="space-y-2"
          >
            <span className="text-gold font-body text-sm tracking-[0.3em] uppercase block">Discover Our Journey</span>
            <h2 className="text-dark p-2 font-heading text-3xl md:text-4xl leading-tight">A Blessed Space for Every Occasion</h2>
            <p className="text-gray-600 font-body leading-loose text-sm md:text-md">
              Step into a space designed for both devotion and celebration. Our temple banquet hall offers a peaceful indoor setting that blends spiritual ambiance with modren conveniance. Wheather you're planning a wedding, engagement, naming ceremony, religious event, corporate gathering, or any other special moment, we have the perfect space for you.
            </p>
            <p className="text-gray-600 font-body leading-loose text-sm md:text-md">
              With both AC and non-AC hall options,we give you the flexibility to choose what suits your comfort and budget. The vegetarian enviromnt ensures a sattvic, temple aligned experience for you and your guests, maintaining the sanctionity of every event.
            </p>
            <p className="text-gray-600 font-body leading-loose text-sm md:text-md">
              Spacious, clean and well-ventilated halls, 250KV generator backup, dedicated private dressing rooms, ample parking, excellent sound and lighting systems, round-the-clock security, and optional catering make us a one-stop solution for all your needs. Here we dont just host an event you create memories in a setting that feels blessed.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
