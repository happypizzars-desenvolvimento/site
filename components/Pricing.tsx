import React from 'react';
import { SectionId } from '../types';
import { PRICING_TIERS, CONTACT_WHATSAPP } from '../constants';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id={SectionId.PRICING} className="py-24 bg-happy-cream relative overflow-hidden">
      {/* Decorative Checkerboard */}
      <div className="absolute top-0 w-full h-8 bg-[length:40px_40px] opacity-10"
           style={{
               backgroundImage: `repeating-linear-gradient(45deg, #022c22 25%, transparent 25%, transparent 75%, #022c22 75%, #022c22), repeating-linear-gradient(45deg, #022c22 25%, transparent 25%, transparent 75%, #022c22 75%, #022c22)`
           }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
            <h2 className="font-retro text-happy-green text-5xl mb-4">Investimento</h2>
            <p className="text-happy-green/70 text-lg">Valores por pessoa • Mínimo de 15 pessoas</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
            {PRICING_TIERS.map((tier, index) => (
                <div key={index} className={`relative w-full md:w-80 lg:w-96 p-8 rounded-3xl transition-transform hover:-translate-y-2 ${
                    index === 1 
                    ? 'bg-happy-green text-happy-cream shadow-2xl scale-105 z-10 border-4 border-happy-accent' 
                    : 'bg-white text-happy-green shadow-xl border border-gray-100'
                }`}>
                    {index === 1 && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-happy-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm uppercase tracking-wider">
                            Mais Popular
                        </div>
                    )}
                    <h3 className="font-retro text-3xl mb-2 text-center">{tier.hours} Horas</h3>
                    <p className={`text-center mb-8 text-sm opacity-80 ${index === 1 ? 'text-happy-cream' : 'text-gray-500'}`}>
                        {tier.description}
                    </p>
                    
                    <div className="text-center mb-8">
                        <span className="text-sm align-top">R$</span>
                        <span className="text-6xl font-bold font-retro">{tier.price.toFixed(2).replace('.', ',').split(',')[0]}</span>
                        <span className="text-2xl font-bold">,{tier.price.toFixed(2).split('.')[1]}</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                         <li className="flex items-center gap-3">
                            <Check className={`w-5 h-5 ${index === 1 ? 'text-happy-accent' : 'text-happy-green'}`} />
                            <span className="text-sm font-semibold">Rodízio Livre</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Check className={`w-5 h-5 ${index === 1 ? 'text-happy-accent' : 'text-happy-green'}`} />
                            <span className="text-sm font-semibold">Massa Artesanal</span>
                        </li>
                         <li className="flex items-center gap-3">
                            <Check className={`w-5 h-5 ${index === 1 ? 'text-happy-accent' : 'text-happy-green'}`} />
                            <span className="text-sm font-semibold">Equipe Inclusa</span>
                        </li>
                    </ul>

                    <a 
                        href={`https://wa.me/${CONTACT_WHATSAPP}?text=Olá, gostaria de um orçamento para o plano de ${tier.hours} horas!`}
                        target="_blank"
                        rel="noreferrer"
                        className={`block w-full py-4 rounded-xl font-bold text-center transition-colors ${
                            index === 1 
                            ? 'bg-happy-accent text-white hover:bg-orange-600' 
                            : 'bg-happy-green text-happy-cream hover:bg-green-900'
                        }`}
                    >
                        Quero esse!
                    </a>
                </div>
            ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-happy-green/10">
                <h4 className="font-bold text-happy-green text-lg mb-2">Crianças até 5 anos</h4>
                <p className="text-gray-600">São totalmente <span className="font-bold text-happy-green">Isentas</span>.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-happy-green/10">
                <h4 className="font-bold text-happy-green text-lg mb-2">Crianças até 12 anos</h4>
                <p className="text-gray-600">Pagamento de <span className="font-bold text-happy-green">50%</span> do valor da modalidade.</p>
            </div>
        </div>
      </div>
    </section>
  );
};