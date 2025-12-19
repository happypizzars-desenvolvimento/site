
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
    <section id={SectionId.HOW_IT_WORKS} className="py-24 bg-white text-happy-green">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-retro text-5xl mb-6">Como funciona?</h2>
            <p className="text-xl text-gray-600">
                Vai rolar muita pizza deliciosa! Com apenas 3 passos, transformamos seu evento em uma experiência gastronômica inesquecível.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-0 border-t-2 border-dashed border-gray-200"></div>

            {steps.map((step, index) => (
                <div key={index} className="relative z-10 bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 border border-gray-100 text-center group">
                    <div className="w-20 h-20 bg-gray-50 rounded-full mx-auto flex items-center justify-center mb-6 shadow-inner group-hover:bg-happy-green group-hover:text-white transition-all">
                        <div className="group-hover:text-white transition-colors">
                            {/* FIX: Cast to React.ReactElement<any> to resolve the 'className' property type error during cloning */}
                            {React.cloneElement(step.icon as React.ReactElement<any>, { 
                                className: `w-10 h-10 transition-colors duration-300 ${index >= 0 ? 'group-hover:text-white' : ''}` 
                            })}
                        </div>
                    </div>
                    <h3 className="font-bold text-2xl mb-4 font-retro">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
