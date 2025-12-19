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
      sub: "Nosso maior orgulho é o seu sorriso"
    }
  ];

  return (
    <section className="bg-happy-accent text-white py-20 relative overflow-hidden shadow-inner">
      {/* Abstract Background Shapes to break monotony */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
         <div className="absolute -left-20 top-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-screen blur-3xl animate-pulse"></div>
         <div className="absolute -right-20 bottom-20 w-96 h-96 bg-red-500 rounded-full mix-blend-screen blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-300 hover:bg-white/10 hover:shadow-xl border border-white/10 hover:border-white/30 backdrop-blur-sm"
            >
              <div className="bg-white text-happy-accent p-5 rounded-full mb-6 shadow-xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              <h3 className="font-retro text-6xl mb-3 drop-shadow-md">{stat.value}</h3>
              <p className="font-bold text-xl uppercase tracking-widest mb-3 opacity-90">{stat.label}</p>
              <div className="h-1 w-12 bg-white/50 rounded-full mb-4 group-hover:w-24 transition-all"></div>
              <p className="text-sm font-medium opacity-90 max-w-xs leading-relaxed">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};