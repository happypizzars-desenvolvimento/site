import React from 'react';
import { SectionId } from '../types';
import { Leaf, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-20 bg-happy-green text-happy-cream relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
                <div className="relative">
                    <img 
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Pizza making process" 
                        className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 transform rotate-2"
                    />
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-happy-cream rounded-full flex items-center justify-center text-happy-green font-retro text-center p-4 shadow-lg animate-bounce-slow">
                        <span className="text-sm leading-tight">Aproveite cada fatia</span>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-2 text-happy-accent">
                    <Sparkles className="w-6 h-6" />
                    <h2 className="text-sm uppercase tracking-widest font-bold">Nossa História</h2>
                </div>
                <h3 className="font-retro text-5xl mb-4">Sobre nós</h3>
                
                <p className="text-lg font-light leading-relaxed text-happy-cream/80">
                    Foi a paixão por levar alegria e sabor às pessoas que nos impulsionou a criar um serviço sofisticado. 
                    Somos reconhecidos pela <strong className="text-white">qualidade, criatividade e atenção aos detalhes</strong> que tornam cada evento único.
                </p>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10 mt-8">
                    <div className="flex items-start gap-4">
                        <Leaf className="w-8 h-8 text-happy-accent flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-xl mb-2">Personalização Total</h4>
                            <p className="text-sm text-happy-cream/70">
                                Nossa sequência de pizzas é totalmente PERSONALIZADA. Gostamos de brincar que temos a fórmula secreta, com uma farinha especial e molho fresco com especiarias.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};