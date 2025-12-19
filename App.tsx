import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { HowItWorks } from './components/HowItWorks';
import { Menu } from './components/Menu';
import { Pricing } from './components/Pricing';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { CONTACT_WHATSAPP } from './constants';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-happy-accent selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <HowItWorks />
      <Menu />
      <Pricing />
      <Gallery />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${CONTACT_WHATSAPP}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 hover:-translate-y-1 animate-bounce-slow flex items-center gap-2"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="font-bold hidden md:inline">Orçamento</span>
      </a>
    </div>
  );
};

export default App;