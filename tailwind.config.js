/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fff9e2ff',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C158',
          dark: '#B8860B',
        },
        dark: {
          DEFAULT: '#0B0B0B',
          soft: '#1A1A1A',
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Poppins', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'glow': 'glow 2s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        glow: { '0%, 100%': { filter: 'drop-shadow(0 0 5px rgba(212, 175, 55, 0.4))' }, '50%': { filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.8))' } },
      },
    },
  },
  plugins: [],
}


