import React from 'react';
import { SectionId } from '../types';

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", // Preparo
  "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", // Fatia close
  "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", // Forno
  "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", // Vegetais
  "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", // Pepperoni close
  "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", // Mesa posta
];

export const Gallery: React.FC = () => {
  // Duplicate images to create seamless loop
  const LOOP_IMAGES = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <section id={SectionId.GALLERY} className="py-20 bg-happy-green text-happy-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center mb-12">
        <h2 className="font-retro text-4xl md:text-5xl">Colecionando Momentos</h2>
        <p className="mt-4 opacity-70">Um pouco da nossa história em cada clique</p>
      </div>
        
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-happy-green to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-happy-green to-transparent z-20 pointer-events-none" />
        
        <div className="flex w-max animate-scroll">
            {LOOP_IMAGES.map((src, idx) => (
                <div key={idx} className="w-[300px] h-[300px] mx-4 relative group flex-shrink-0">
                    <div className="w-full h-full overflow-hidden rounded-2xl border-4 border-white/5">
                        <img 
                            src={src} 
                            alt={`Momento Happy ${idx}`} 
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};