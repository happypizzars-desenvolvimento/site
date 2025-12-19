import React from 'react';
import { SectionId } from '../types';
import { Instagram, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-black text-happy-cream pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
                <h3 className="font-retro text-3xl mb-4">Happy Pizzas</h3>
                <p className="text-gray-400 max-w-xs mx-auto md:mx-0">
                    Levando a verdadeira experiência da pizzaria para dentro do seu evento, com qualidade e sofisticação.
                </p>
            </div>
            
            <div>
                <h4 className="font-bold text-xl mb-4 text-happy-accent">Formas de Pagamento</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li>Pix</li>
                    <li>Dinheiro</li>
                    <li>Cartão de Débito</li>
                    <li>Cartão de Crédito (com acréscimo)</li>
                </ul>
            </div>

            <div>
                 <h4 className="font-bold text-xl mb-4 text-happy-accent">Contato</h4>
                 <div className="flex flex-col gap-4 items-center md:items-start">
                    <a href="https://instagram.com/happypizzas_" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                        <Instagram className="w-5 h-5" />
                        @happypizzas_
                    </a>
                    <div className="flex items-center gap-2">
                        <Phone className="w-5 h-5" />
                        (51) 99392-2477
                    </div>
                 </div>
            </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Happy Pizzas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};