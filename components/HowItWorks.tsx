import React from 'react';
import { SectionId } from '../types';
import { Clock, CalendarCheck, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Clock className="w-10 h-10 text-happy-green" />,
      title: "1. Escolha a modalidade",
      description: "Opte por 2 ou 3 horas de evento conforme a sua necessidade.",
    },
    {
      icon: <CalendarCheck className="w-10 h-10 text-happy-green" />,
      title: "2. Agende e personalize",
      description: "Informe a data, local e nº de convidados. Escolha seus sabores preferidos.",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-happy-green" />,
      title: "3. Confirme seu evento",
      description: "Sinal de 30% para reservar a data. O restante no dia do evento.",
    },
  ];

  return (
    <section id={SectionId.HOW_IT_WORKS} className="py-24 bg-happy-cream text-happy-green">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-retro text-5xl mb-6">Como funciona?</h2>
            <p className="text-xl text-happy-green/80">
                Vai rolar muita pizza deliciosa! Com apenas 3 passos, transformamos seu evento em uma experiência gastronômica inesquecível.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-happy-green/20 -z-0 border-t-2 border-dashed border-happy-green/30"></div>

            {steps.map((step, index) => (
                <div key={index} className="relative z-10 bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-happy-green/5 text-center group">
                    <div className="w-20 h-20 bg-happy-cream rounded-full mx-auto flex items-center justify-center mb-6 shadow-inner group-hover:bg-happy-green/10 transition-colors">
                        {step.icon}
                    </div>
                    <h3 className="font-bold text-2xl mb-4 font-retro">{step.title}</h3>
                    <p className="text-happy-green/70">{step.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};