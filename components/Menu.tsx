import React, { useState } from 'react';
import { SectionId } from '../types';
import { SAVORY_FLAVORS, SWEET_FLAVORS } from '../constants';
import { Pizza } from 'lucide-react';

export const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'savory' | 'sweet'>('savory');

  const activeFlavors = activeTab === 'savory' ? SAVORY_FLAVORS : SWEET_FLAVORS;

  return (
    <section id={SectionId.MENU} className="py-24 bg-happy-green text-happy-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
            <span className="text-happy-accent uppercase tracking-widest text-sm font-bold">Nosso Cardápio</span>
            <h2 className="font-retro text-5xl mt-2 mb-8">Sabores Irresistíveis</h2>
            
            <div className="inline-flex bg-happy-cream/10 p-1 rounded-full">
                <button
                    onClick={() => setActiveTab('savory')}
                    className={`px-8 py-3 rounded-full text-lg font-bold transition-all ${
                        activeTab === 'savory' 
                        ? 'bg-happy-cream text-happy-green shadow-lg' 
                        : 'text-happy-cream hover:bg-white/5'
                    }`}
                >
                    Clássicos
                </button>
                <button
                    onClick={() => setActiveTab('sweet')}
                    className={`px-8 py-3 rounded-full text-lg font-bold transition-all ${
                        activeTab === 'sweet' 
                        ? 'bg-happy-cream text-happy-green shadow-lg' 
                        : 'text-happy-cream hover:bg-white/5'
                    }`}
                >
                    Doces
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeFlavors.map((pizza, index) => (
                <div 
                    key={index} 
                    className="flex flex-row bg-white/5 rounded-2xl border border-white/10 hover:border-happy-accent/50 transition-colors group overflow-hidden h-40"
                >
                    {/* Content Section - 70% Width */}
                    <div className="w-[70%] p-5 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                             {/* Badge Row */}
                            {pizza.isVegetarian && (
                                <span className="text-[10px] uppercase font-bold bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full">Veg</span>
                            )}
                            {pizza.isPremium && (
                                <span className="text-[10px] uppercase font-bold bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded-full">Premium</span>
                            )}
                        </div>
                        
                        <h3 className="font-bold text-lg mb-1 font-retro tracking-wide leading-tight group-hover:text-happy-accent transition-colors">
                            {pizza.name}
                        </h3>
                        
                        {pizza.description && (
                            <p className="text-xs text-happy-cream/60 leading-relaxed line-clamp-3">
                                {pizza.description}
                            </p>
                        )}
                    </div>

                    {/* Image Section - 30% Width */}
                    <div className="w-[30%] relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20 z-10" />
                        <img 
                            src={pizza.image} 
                            alt={pizza.name} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                    </div>
                </div>
            ))}
        </div>
        
        <p className="text-center mt-12 text-sm opacity-50 italic">
            * Massa de longa fermentação para leveza incomparável.
        </p>
      </div>
    </section>
  );
};