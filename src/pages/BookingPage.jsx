import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';

// ---- Replace with your deployed Google Apps Script Web App URL ----
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyoO_-D5d4X-xodhYxRxFvZljMCDx_-KWXlLkSE2t9MwG_NENpRLnmRlpEaqLH9ANow/exec';

const eventTypes = [
  'Wedding',
  'Engagement',
  'Naming Ceremony',
  'Navratri Event',
  'Puja',
  'Conference',
  'Summer Camp',
  'Other',
];

export default function BookingPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    date: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const params = new URLSearchParams(form);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      setStatus('success');
      setForm({ name: '', phone: '', email: '', eventType: '', date: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <main className="pt-24 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12">
          <SectionHeading
            tag="Booking & Support"
            title="Reserve Your Date"
            subtitle="Fill out the form below and our team will get back to you within 24 hours."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white border-2 border-[#FFF4C2] p-8">
            <h3 className="font-accent text-sm tracking-widest uppercase text-[#B8860B] mb-6">
              Enquiry / Booking Form
            </h3>

            {status === 'success' && (
              <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#FFF4C2] border border-[#D4A017] p-4 shadow-xl rounded w-[90%] max-w-md text-center font-body text-sm text-black animate-slide-in-right">
                Your enquiry has been submitted. We will contact you shortly.
              </div>
            )}
            {status === 'error' && (
              <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-red-50 border border-red-200 p-4 shadow-xl rounded w-[90%] max-w-md text-center font-body text-sm text-red-700 animate-slide-in-right">
                Something went wrong. Please call us directly or try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <label className="block font-body text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full border border-gray-200 focus:border-[#D4A017] outline-none px-4 py-3 font-body text-sm text-black placeholder-gray-300 transition-colors bg-white"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-body text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full border border-gray-200 focus:border-[#D4A017] outline-none px-4 py-3 font-body text-sm text-black placeholder-gray-300 transition-colors bg-white"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-body text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="w-full border border-gray-200 focus:border-[#D4A017] outline-none px-4 py-3 font-body text-sm text-black placeholder-gray-300 transition-colors bg-white"
                />
              </div>

              {/* Event Type */}
              <div>
                <label className="block font-body text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Event Type *
                </label>
                <select
                  name="eventType"
                  required
                  value={form.eventType}
                  onChange={handleChange}
                  className="w-full border border-gray-200 focus:border-[#D4A017] outline-none px-4 py-3 font-body text-sm text-black transition-colors bg-white appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select event type</option>
                  {eventTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Event Date */}
              <div>
                <label className="block font-body text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full border border-gray-200 focus:border-[#D4A017] outline-none px-4 py-3 font-body text-sm text-black transition-colors bg-white uppercase cursor-pointer"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-body text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Message / Requirements
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event, preferred date, guest count..."
                  className="w-full border border-gray-200 focus:border-[#D4A017] outline-none px-4 py-3 font-body text-sm text-black placeholder-gray-300 transition-colors bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-black text-[#FFF4C2] font-body font-semibold text-sm tracking-wider px-8 py-4 hover:bg-[#B8860B] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 uppercase"
              >
                {status === 'loading' ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>

          {/* Right Panel: Pricing + Contact */}
          <div className="flex flex-col gap-6">
            {/* Fee Breakdown */}
            <div className="bg-black text-white p-8">
              <h3 className="font-accent text-xs tracking-[0.25em] uppercase text-[#D4A017] mb-6">
                Fee Breakdown
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start justify-between border-b border-white/10 pb-4">
                  <div>
                    <div className="font-body text-sm font-semibold text-white">Base Package</div>
                    <div className="font-body text-xs text-gray-400 mt-1">Both halls(AC & Non AC) · 5 hours</div>
                  </div>
                  <div className="font-display text-2xl font-semibold text-[#FFF4C2]">₹1,40,000</div>
                </div>

                <div className="flex items-start justify-between border-b border-white/10 pb-4">
                  <div>
                    <div className="font-body text-sm font-semibold text-white">Extra Hours</div>
                    <div className="font-body text-xs text-gray-400 mt-1">Per hour beyond 5 hrs</div>
                  </div>
                  <div className="font-display text-2xl font-semibold text-[#FFF4C2]">₹8,000</div>
                </div>
              </div>

              <p className="font-body text-gray-200 font-semibold text-xs mt-4">
                * Includes AC & non-AC halls, generator backup, and parking.
              </p>
            </div>

            {/* Contact Info */}
            <div className="border border-[#FFF4C2] bg-[#FFF4C2]/30 p-6">
              <h3 className="font-accent text-xs tracking-[0.25em] uppercase text-[#B8860B] mb-5">
                Direct Contact
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+919822155422"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-black text-[#FFF4C2] rounded-full flex items-center justify-center group-hover:bg-[#D4A017] transition-colors">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 14.92v2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-body text-xs text-gray-500 uppercase tracking-wider">Manager</div>
                    <div className="font-body text-sm font-semibold text-black">+91 98221 55422</div>
                  </div>
                </a>

                <a
                  href="mailto:rajeshsangodkar12@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-black text-[#FFF4C2] rounded-full flex items-center justify-center group-hover:bg-[#D4A017] transition-colors">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-body text-xs text-gray-500 uppercase tracking-wider">Email</div>
                    <div className="font-body text-sm font-semibold text-black break-all">rajeshsangodkar12@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="border border-[#FFF4C2] h-64 sm:h-80 w-full overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=GRX7+466,%20Porvorim,%20Goa%20403511&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
