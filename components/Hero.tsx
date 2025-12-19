import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { HERO_IMAGES, CONTACT_WHATSAPP } from '../constants';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleCtaClick = () => {
    const section = document.getElementById(SectionId.HOW_IT_WORKS);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.HOME} className="relative w-full h-screen overflow-hidden bg-happy-green">
      
      {/* GLOBAL BACKGROUND LAYER */}
      {/* Takes 100% width/height. Image + Green Overlay */}
      <div className="absolute inset-0 z-0">
         <img 
            src={HERO_IMAGES[0]} 
            alt="Background Texture" 
            className="w-full h-full object-cover opacity-100 animate-ken-burns"
         />
         {/* Gradient: Solid Green on Left (Text) -> Transparent Green on Right (Pizza Visibility) */}
         <div className="absolute inset-0 bg-gradient-to-r from-happy-green via-happy-green/95 to-happy-green/40" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row">
        
        {/* Left Content Area (65% width to give space for layout) */}
        <div className="w-full lg:w-[65%] h-full flex flex-col justify-center px-6 md:px-16 lg:px-24">
          
          <div className="animate-fade-in-up max-w-2xl">
              <span className="text-happy-cream/80 uppercase tracking-widest text-sm font-semibold mb-4 block">
              Desde Novembro 2025
              </span>
              <h1 className="font-retro text-6xl md:text-8xl text-happy-cream mb-6 leading-tight drop-shadow-lg">
              Happy <br/>
              <span className="text-happy-accent">Pizzas</span>
              </h1>
              
              <p className="text-happy-cream/90 text-lg md:text-2xl font-light mb-10 leading-relaxed drop-shadow-md max-w-lg">
              A experiência que transforma seu evento. Levamos o rodízio de pizzas artesanais para o conforto do seu local.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                      onClick={handleCtaClick}
                      className="group bg-happy-cream text-happy-green px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                      Como funciona
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a 
                      href={`https://wa.me/${CONTACT_WHATSAPP}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group border-2 border-happy-cream text-happy-cream px-8 py-4 rounded-full font-bold text-lg hover:bg-happy-cream/10 transition-all flex items-center justify-center backdrop-blur-sm"
                  >
                      Fale Conosco
                  </a>
              </div>
          </div>
        </div>

        {/* Right Image Carousel (35%) */}
        {/* Container is transparent to reveal the global background underneath */}
        {/* Images are object-contain to act as "floating" elements (ready for transparent PNGs) */}
        <div className="hidden lg:block lg:w-[35%] h-full relative pointer-events-none">
          {HERO_IMAGES.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out px-8 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt="Pizza Slide"
                // Using object-contain and max dimensions ensures it floats nicely
                // drop-shadow filter works great for transparent PNGs later
                className="w-full h-[80%] object-contain drop-shadow-2xl filter"
                style={{ filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))' }}
              />
            </div>
          ))}
          
          {/* Vertical Text Decoration */}
          <div className="absolute bottom-12 right-12 z-20 text-white/80 writing-vertical-rl rotate-180 text-xs tracking-[0.4em] font-light drop-shadow-md mix-blend-overlay">
            COLECIONANDO MOMENTOS
          </div>
        </div>

      </div>
    </section>
  );
};