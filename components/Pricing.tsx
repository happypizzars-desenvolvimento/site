
import React from 'react';
import { SectionId } from '../types';
import { PRICING_TIERS, CONTACT_WHATSAPP } from '../constants';
import { Check, Beer, Star } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id={SectionId.PRICING} className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Decorative Checkerboard */}
      <div className="absolute top-0 w-full h-4 bg-[length:20px_20px] opacity-5"
           style={{
               backgroundImage: `repeating-linear-gradient(45deg, #022c22 25%, transparent 25%, transparent 75%, #022c22 75%, #022c22), repeating-linear-gradient(45deg, #022c22 25%, transparent 25%, transparent 75%, #022c22 75%, #022c22)`
           }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
            <h2 className="font-retro text-happy-green text-5xl mb-4 tracking-tight">Investimento</h2>
            <p className="text-gray-500 text-lg">Valores por pessoa • Mínimo de 15 pessoas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            {PRICING_TIERS.map((tier, index) => {
                const isSpecial = tier.isSpecial;
                const isPopular = tier.isPopular;

                return (
                    <div key={index} className={`relative flex flex-col p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                        isSpecial 
                        ? 'bg-gradient-to-br from-happy-accent to-amber-700 text-white shadow-2xl scale-105 z-20 border-4 border-happy-accent' 
                        : isPopular
                        ? 'bg-happy-green text-happy-cream shadow-2xl scale-105 z-10'
                        : 'bg-white text-happy-green shadow-xl shadow-gray-200/50 border border-gray-100'
                    }`}>
                        {isPopular && !isSpecial && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-happy-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm uppercase tracking-wider flex items-center gap-1">
                                <Star className="w-3 h-3 fill-current" /> Mais Popular
                            </div>
                        )}
                        {isSpecial && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-happy-accent px-4 py-1 rounded-full text-sm font-bold shadow-md uppercase tracking-wider flex items-center gap-1">
                                <Beer className="w-3 h-3 fill-current" /> Edição 2026
                            </div>
                        )}

                        <div className="text-center mb-6">
                            <h3 className="font-retro text-3xl mb-1">
                                {tier.title || `${tier.hours} Horas`}
                            </h3>
                            {tier.title && <p className="text-sm opacity-90 font-bold uppercase tracking-widest">{tier.hours} Horas de Rodízio</p>}
                        </div>
                        
                        <p className={`text-center mb-8 text-sm leading-relaxed ${isSpecial ? 'text-white/90' : isPopular ? 'text-happy-cream/80' : 'text-gray-400'}`}>
                            {tier.description}
                        </p>
                        
                        <div className="text-center mb-8">
                            <span className="text-sm align-top mr-1">A partir de R$</span>
                            <span className="text-6xl font-bold font-retro tracking-tighter">{tier.price.toFixed(2).replace('.', ',').split(',')[0]}</span>
                            <span className="text-2xl font-bold">,{tier.price.toFixed(2).split('.')[1]}</span>
                        </div>

                        <ul className="space-y-4 mb-10 flex-grow">
                             {tier.features?.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-center gap-3">
                                    {isSpecial && feature.toLowerCase().includes('chopp') ? (
                                        <Beer className="w-5 h-5 text-white animate-pulse" />
                                    ) : (
                                        <Check className={`w-5 h-5 ${isSpecial ? 'text-white' : isPopular ? 'text-happy-accent' : 'text-happy-green'}`} />
                                    )}
                                    <span className={`text-sm font-semibold ${isSpecial ? 'text-white' : isPopular ? 'text-white' : 'text-gray-700'}`}>
                                        {feature}
                                    </span>
                                </li>
                             ))}
                        </ul>

                        <a 
                            href={`https://wa.me/${CONTACT_WHATSAPP}?text=Olá! Gostaria de um orçamento para o plano ${tier.title || tier.hours + ' horas'}.`}
                            target="_blank"
                            rel="noreferrer"
                            className={`block w-full py-4 rounded-xl font-bold text-center transition-all shadow-md active:scale-95 ${
                                isSpecial 
                                ? 'bg-white text-happy-accent hover:bg-happy-cream' 
                                : isPopular
                                ? 'bg-happy-accent text-white hover:bg-orange-600'
                                : 'bg-happy-green text-happy-cream hover:bg-green-900'
                            }`}
                        >
                            {isSpecial ? 'Garanta sua data!' : 'Quero esse!'}
                        </a>
                    </div>
                );
            })}
        </div>

        {/* Informações Adicionais */}
        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="bg-happy-green/10 p-3 rounded-full text-happy-green">
                    <Check className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="font-bold text-happy-green text-lg">Crianças até 5 anos</h4>
                    <p className="text-gray-600">São totalmente <span className="font-bold text-happy-green">Isentas</span>.</p>
                </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="bg-happy-green/10 p-3 rounded-full text-happy-green">
                    <Check className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="font-bold text-happy-green text-lg">Crianças até 12 anos</h4>
                    <p className="text-gray-600">Pagamento de <span className="font-bold text-happy-green">50%</span> do valor.</p>
                </div>
            </div>
            {/* NOVO BLOCO DE CHOPP */}
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="bg-happy-accent/10 p-3 rounded-full text-happy-accent">
                    <Beer className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="font-bold text-amber-900 text-lg">Chopp Geladinho</h4>
                    <p className="text-amber-800/80">Barrís de <span className="font-bold">30L ou 50L</span>. Consulte disponibilidade.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
