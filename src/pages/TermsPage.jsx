import { motion } from 'framer-motion';
import { FileCheck, AlertCircle, Sparkles, CheckCircle2, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms & Conditions | Shree Shantadurga Sangodkarin Sabhagruha";
  }, []);

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
            <FileCheck size={32} />
          </div>
          <span className="text-gold font-body text-xs tracking-[0.3em] uppercase block mb-1">
            Guidelines & Venue Rules
          </span>
          <h1 className="text-dark font-heading text-3xl md:text-5xl font-semibold tracking-wide">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 font-body text-xs md:text-sm mt-2">
            Last Updated: October 2026 | Shree Shantadurga Sangodkarin Sabhagruha, Sangolda, Goa
          </p>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 space-y-8 text-gray-700 font-body text-sm md:text-base leading-relaxed"
        >
          {/* Section 1 */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-gold/15 shadow-sm">
            <h2 className="text-dark font-heading text-xl md:text-2xl font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="text-gold" size={20} />
              1. Booking & Reservation Confirmation
            </h2>
            <p className="mb-3">
              All bookings for <strong>Shree Shantadurga Sangodkarin Sabhagruha</strong> are accepted on a first-come, first-served basis.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
              <li>A booking is officially confirmed only upon receipt of the advance booking amount and execution of the booking agreement with management.</li>
              <li>Base package covers <strong>5 continuous hours</strong> for both AC and Non-AC halls, 500kVA generator backup, and parking facilities.</li>
              <li>Extra hours beyond the allocated time slot will be charged at <strong>₹11,000 per hour</strong> and must be coordinated with the management in advance.</li>
              <li>A refundable security deposit of <strong>₹10,000</strong> is mandatory and will be refunded post-event after inspection of premises.</li>
            </ul>
          </section>

          {/* Section 2: Strict Veg Policy */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-gold/15 shadow-sm">
            <div className="flex items-center gap-2.5 mb-3 text-gold-dark">
              <CheckCircle2 size={22} className="text-gold" />
              <h2 className="text-dark font-heading text-xl md:text-2xl font-semibold">
                2. Strictly Vegetarian Venue
              </h2>
            </div>
            <p className="text-gray-700 mb-3">
              As a blessed temple-affiliated institution dedicated to preserving traditions, <strong>Shree Shantadurga Sangodkarin Sabhagruha strictly enforces a Vegetarian policy</strong> on the entire premises.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
              <li>No non-vegetarian food, seafood, eggs, or meat-derived products of any kind may be prepared, brought, or consumed on the property.</li>
              <li>Caterers and food vendors must strictly abide by vegetarian culinary guidelines.</li>
              <li>Any violation will result in immediate event stoppage and forfeiture of the entire deposit.</li>
            </ul>
          </section>

          {/* Section 3: Prohibited Items */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-gold/15 shadow-sm">
            <div className="flex items-center gap-2.5 mb-3 text-red-600">
              <AlertCircle size={22} />
              <h2 className="text-dark font-heading text-xl md:text-2xl font-semibold">
                3. Prohibition of Alcohol, Smoking & Tobacco
              </h2>
            </div>
            <p className="text-gray-700">
              To uphold the spiritual ambiance, dignity, and family-friendly atmosphere of the temple sabhagruha:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2 mt-2">
              <li>Alcohol consumption, distribution, or storage is <strong>strictly prohibited</strong> anywhere within the hall, dining area, parking lot, or adjacent temple complex.</li>
              <li>Smoking, vaping, chewing tobacco, or using intoxicating substances is strictly disallowed.</li>
            </ul>
          </section>

          {/* Section 4: Noise & Curfew */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-gold/15 shadow-sm">
            <h2 className="text-dark font-heading text-xl md:text-2xl font-semibold mb-3">
              4. Sound, Music & Timing Regulations
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
              <li>All sound systems, live bands, and DJs must operate within decibel levels prescribed by Goa State Pollution Control Board and local administration norms.</li>
              <li>Outdoor sound and music must strictly cease by <strong>10:00 PM</strong> in compliance with Goa government regulations.</li>
              <li>Event hosts and planners are responsible for adhering to reserved time slots to ensure smooth changeover between events.</li>
            </ul>
          </section>

          {/* Section 5: Decoration, Cleanliness & Property Care */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-gold/15 shadow-sm">
            <h2 className="text-dark font-heading text-xl md:text-2xl font-semibold mb-3">
              5. Decor, Cleanliness & Hall Maintenance
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
              <li>Nails, screws, heavy adhesives, or paint that causes structural or aesthetic damage to the walls, false ceilings, and pillars are prohibited.</li>
              <li>Open flames, unshielded firecrackers, or hazardous fireworks are strictly disallowed inside the enclosed hall spaces for fire safety.</li>
              <li>The host/event organizer is responsible for leaving the hall and buffet kitchen in a neat and orderly state.</li>
              <li>Any deliberate or negligent damage to air conditioners, electrical fittings, generator units, or furniture will be deducted from the security deposit or billed separately.</li>
            </ul>
          </section>

          {/* Section 6: Cancellation & Refund Policy */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-gold/15 shadow-sm">
            <h2 className="text-dark font-heading text-xl md:text-2xl font-semibold mb-3">
              6. Cancellation & Postponement Policy
            </h2>
            <p className="mb-2">
              In the event of a cancellation or rescheduling request by the client:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
              <li>Cancellations requested well in advance are subject to management review; advance deposits may be partially refundable or transferable to an alternate available date at management discretion.</li>
              <li>Last-minute cancellations (less than 30 days prior to event) will result in forfeiture of the advance booking fee as the date was blocked exclusively.</li>
              <li>The ₹10,000 security deposit is always 100% refunded in full if the event is cancelled before the date.</li>
            </ul>
          </section>

          {/* Section 7: Limitation of Liability */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-gold/15 shadow-sm">
            <h2 className="text-dark font-heading text-xl md:text-2xl font-semibold mb-3">
              7. Limitation of Liability & Force Majeure
            </h2>
            <p>
              Management is not liable for personal belongings, valuables, or vehicles parked in the parking lot. Guests are encouraged to take care of their personal property. Neither party shall be held liable for failure to execute obligations due to natural calamities, statutory restrictions, severe weather, or unforeseen Force Majeure events beyond reasonable control.
            </p>
          </section>

          {/* Section 8: Contact */}
          <section className="bg-dark-soft text-cream p-6 sm:p-8 rounded-3xl border border-gold/30">
            <h2 className="text-gold font-heading text-xl md:text-2xl font-semibold mb-3">
              8. Management Contact & Assistance
            </h2>
            <p className="text-cream/80 text-sm mb-4">
              For any clarification regarding our terms, custom arrangements, or booking paperwork, please reach out directly:
            </p>
            <div className="space-y-2 text-sm text-cream/90">
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-gold" />
                <span>+91 98221 55422</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-gold" />
                <span>shreeshantadurgasangodkarin2@gmail.com</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <span>Shree Shantadurga Sangodkarin Sabhagruha, Sangolda, Porvorim, North Goa, Goa - 403511, India</span>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
