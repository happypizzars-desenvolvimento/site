
import React from 'react';
import { SectionId } from '../types';
import { Instagram, Phone, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-black text-happy-cream pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
                <h3 className="font-retro text-3xl mb-4 text-white">Happy Pizzas</h3>
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
                    <a href="https://instagram.com/happypizzas_" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group">
                        <Instagram className="w-5 h-5 group-hover:text-happy-accent transition-colors" />
                        @happypizzas_
                    </a>
                    <div className="flex items-center gap-2 text-gray-300">
                        <Phone className="w-5 h-5 text-happy-accent" />
                        (51) 99392-2477
                    </div>
                 </div>
            </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-gray-600">
                &copy; {new Date().getFullYear()} Happy Pizzas. Todos os direitos reservados.
            </div>
            
            <div className="text-xs text-gray-500 font-medium">
                Desenvolvido por{' '}
                <a 
                    href="https://www.topstack.com.br/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-all duration-200 hover:text-[#00ffd5] active:text-[#00ffd5] hover:drop-shadow-[0_0_8px_rgba(0,255,213,0.5)] inline-flex items-center gap-1 font-bold tracking-wider"
                >
                    TOPSTACK
                    <ExternalLink className="w-3 h-3" />
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};
