
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', value: Page.Home },
    { name: 'Services', value: Page.Services },
    { name: 'About Us', value: Page.About },
    { name: 'Contact', value: Page.Contact },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-2 sm:py-3' : 'bg-transparent py-4 sm:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group"
          onClick={() => onPageChange(Page.Home)}
        >
          <div className="bg-amber-500 p-1.5 sm:p-2 rounded-lg group-hover:bg-amber-400 transition-colors">
            <i className="fas fa-car-side text-slate-900 text-lg sm:text-xl"></i>
          </div>
          <span className="font-display font-black text-lg sm:text-xl md:text-2xl tracking-tighter">
            PRIME<span className="text-amber-500">AUTO</span><span className="text-xs sm:text-sm font-light ml-0.5 sm:ml-1 text-slate-400">KL</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => onPageChange(link.value)}
              className={`text-sm font-medium tracking-wide hover:text-amber-500 transition-colors ${
                currentPage === link.value ? 'text-amber-500' : 'text-slate-200'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => onPageChange(Page.Contact)}
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
          >
            BOOK NOW
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-xl sm:text-2xl text-slate-200 p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full border-t border-white/10 animate-fade-in-down">
          <div className="flex flex-col p-4 sm:p-6 gap-3 sm:gap-4">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => {
                  onPageChange(link.value);
                  setIsMenuOpen(false);
                }}
                className={`text-left py-2.5 sm:py-3 text-base sm:text-lg font-medium ${
                  currentPage === link.value ? 'text-amber-500' : 'text-slate-200'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => {
                onPageChange(Page.Contact);
                setIsMenuOpen(false);
              }}
              className="bg-amber-500 text-slate-900 w-full py-3 sm:py-3.5 rounded-xl font-bold mt-2 text-sm sm:text-base"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
