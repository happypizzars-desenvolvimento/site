import React from 'react';
import { Heart, Users, Star } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "500+",
      label: "Eventos Realizados",
      sub: "Momentos únicos criados com carinho"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      value: "10k+",
      label: "Pizzas Servidas",
      sub: "Fatias de felicidade compartilhadas"
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: "99%",
      label: "Clientes Satisfeitos",
      sub: "Nosso maior pride é o seu sorriso"
    }
  ];

  return (
    <section className="bg-white text-happy-green py-24 relative overflow-hidden border-y border-gray-100">
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
         <div className="absolute -left-20 top-20 w-96 h-96 bg-happy-green rounded-full blur-3xl"></div>
         <div className="absolute -right-20 bottom-20 w-96 h-96 bg-happy-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-300 hover:bg-gray-50 border border-transparent hover:border-gray-100"
            >
              <div className="bg-happy-green text-white p-5 rounded-full mb-6 shadow-lg transform group-hover:rotate-6 transition-all duration-300">
                {stat.icon}
              </div>
              <h3 className="font-retro text-6xl mb-3 text-happy-green">{stat.value}</h3>
              <p className="font-bold text-lg uppercase tracking-widest mb-3 text-happy-green/80">{stat.label}</p>
              <div className="h-1 w-12 bg-happy-accent rounded-full mb-4"></div>
              <p className="text-sm font-medium text-gray-500 max-w-xs leading-relaxed">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};