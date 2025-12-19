import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Sobre', id: SectionId.ABOUT },
    { label: 'Como Funciona', id: SectionId.HOW_IT_WORKS },
    { label: 'Cardápio', id: SectionId.MENU },
    { label: 'Orçamento', id: SectionId.PRICING },
    { label: 'Fotos', id: SectionId.GALLERY },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-happy-green/95 backdrop-blur-md py-4 shadow-lg' : 'bg-gradient-to-b from-black/50 to-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo Text */}
        <div className="cursor-pointer group" onClick={() => scrollTo(SectionId.HOME)}>
            <span className="font-retro text-2xl md:text-3xl text-happy-cream drop-shadow-md transition-transform transform group-hover:scale-105 inline-block">
                Happy <span className="text-happy-accent">Pizzas</span>
            </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-happy-cream font-medium text-sm uppercase tracking-wider hover:text-happy-accent transition-colors drop-shadow-sm"
                >
                    {item.label}
                </button>
            ))}
        </div>

        {/* Mobile Toggle */}
        <button 
            className="md:hidden text-happy-cream drop-shadow-md"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="absolute top-full left-0 w-full bg-happy-green border-t border-white/10 p-6 flex flex-col gap-4 shadow-2xl md:hidden">
                 {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-happy-cream text-left font-medium py-2 hover:text-happy-accent transition-colors border-b border-white/5 last:border-0"
                >
                    {item.label}
                </button>
            ))}
            </div>
        )}
      </div>
    </nav>
  );
};