import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CelebrationsSection from '../components/CelebrationsSection';
import ServicesSection from '../components/ServicesSection';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

export default function HomePage() {
  useScrollReveal();

  return (
    <main>
      <div className="reveal"><HeroSection /></div>
      <div className="reveal"><AboutSection /></div>
      <div className="reveal"><ServicesSection /></div>
      <div className="reveal"><CelebrationsSection /></div>
    </main>
  );
}
