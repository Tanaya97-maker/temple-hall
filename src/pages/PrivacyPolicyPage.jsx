import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, FileText, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | Shree Shantadurga Sangodkarin Sabhagruha";
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
            <ShieldCheck size={32} />
          </div>
          <span className="text-gold font-body text-xs tracking-[0.3em] uppercase block mb-1">
            Transparency & Trust
          </span>
          <h1 className="text-dark font-heading text-3xl md:text-5xl font-semibold tracking-wide">
            Privacy Policy
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
            <div className="flex items-center gap-3 mb-3">
              <Lock className="text-gold" size={20} />
              <h2 className="text-dark font-heading text-xl md:text-2xl font-semibold">
                1. Overview & Commitment
              </h2>
            </div>
            <p>
              Welcome to <strong>Shree Shantadurga Sangodkarin Sabhagruha</strong> ("we", "our", or "us"). We are committed to protecting your personal privacy and safeguarding any information you share with us through our website (
              <span className="text-gold font-medium">https://www.shrishantadurgasangodkarin.com</span>) or during venue booking enquiries. This Privacy Policy details the types of information we collect, how it is used, and the steps we take to ensure your personal data remains confidential and secure.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-gold/15 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="text-gold" size={20} />
              <h2 className="text-dark font-heading text-xl md:text-2xl font-semibold">
                2. Information We Collect
              </h2>
            </div>
            <p className="mb-3">
              We only collect information that is strictly necessary to assist you with hall reservations, event consultations, and customer service. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
              <li><strong>Contact Information:</strong> Full name, telephone/mobile number, and email address submitted via our booking enquiry form.</li>
              <li><strong>Event Details:</strong> Event category (e.g., Wedding, Engagement, Naming Ceremony, Puja, Conference), preferred event dates, expected guest count, and specific hall requirements.</li>
              <li><strong>Technical Data:</strong> Standard anonymous web analytics data (such as browser type, approximate device location, pages visited, and session duration) used solely to enhance website usability.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-gold/15 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="text-gold" size={20} />
              <h2 className="text-dark font-heading text-xl md:text-2xl font-semibold">
                3. How We Use Your Information
              </h2>
            </div>
            <p className="mb-3">The personal details you provide are used strictly for legitimate event management purposes:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
              <li>To verify date availability on our venue calendar and respond to your booking enquiry.</li>
              <li>To communicate with you via phone call, WhatsApp, or email regarding quotations, hall walkthroughs, and event arrangements.</li>
              <li>To prepare booking receipts, agreements, and security deposit documentation.</li>
              <li>To improve our website performance, layout, and service offerings.</li>
            </ul>
            <p className="mt-4 font-semibold text-dark">
              We never sell, rent, trade, or disclose your personal data to third-party marketing companies.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-gold/15 shadow-sm">
            <h2 className="text-dark font-heading text-xl md:text-2xl font-semibold mb-3">
              4. Data Protection & Security
            </h2>
            <p>
              We implement industry-standard SSL (HTTPS) encryption, restricted access controls, and secure data storage practices to protect your data against unauthorized access, loss, or misuse. Form submissions are routed securely to our authorized venue administrative team.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-gold/15 shadow-sm">
            <h2 className="text-dark font-heading text-xl md:text-2xl font-semibold mb-3">
              5. Cookies & Analytics
            </h2>
            <p>
              Our website may use standard session cookies or light analytical scripts to ensure rapid page loading, responsive layout rendering, and to gauge visitor traffic. You can choose to disable cookies in your browser settings without impacting your ability to browse our hall information.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-gold/15 shadow-sm">
            <h2 className="text-dark font-heading text-xl md:text-2xl font-semibold mb-3">
              6. Your Data Rights
            </h2>
            <p>
              Under applicable Indian data protection laws, you have the right to request access to the personal data we hold about you, request corrections to inaccurate information, or request deletion of your enquiry history from our records once your event has concluded.
            </p>
          </section>

          {/* Section 7: Contact Box */}
          <section className="bg-dark-soft text-cream p-6 sm:p-8 rounded-3xl border border-gold/30">
            <h2 className="text-gold font-heading text-xl md:text-2xl font-semibold mb-3">
              7. Contact Us Regarding Privacy
            </h2>
            <p className="text-cream/80 text-sm mb-4">
              If you have any questions, clarifications, or requests concerning this Privacy Policy, please feel free to contact our administrative office:
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
