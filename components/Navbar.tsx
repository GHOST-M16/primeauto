
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
          <img 
            src="/Untitled_design__2_-removebg-preview.png" 
            alt="PRIMEOTO Logo" 
            className="h-24 sm:h-28 md:h-32 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => onPageChange(link.value)}
              className={`text-sm font-medium tracking-wide hover:text-amber-500 transition-colors ${
                currentPage === link.value ? 'text-amber-500' : isScrolled ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              {link.name}
            </button>
          ))}
          <a 
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2vgKK9SacbTXOJqiMYWM1IVmXN0Q1RqnP3DM3b0A_fB5T--UpyppHYGtilx7vTOWc_QJuTOFF2?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20 inline-block"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden text-xl sm:text-2xl p-2 -mr-2 ${isScrolled ? 'text-slate-700' : 'text-slate-200'}`}
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
                  currentPage === link.value ? 'text-amber-500' : 'text-slate-700'
                }`}
              >
                {link.name}
              </button>
            ))}
            <a 
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2vgKK9SacbTXOJqiMYWM1IVmXN0Q1RqnP3DM3b0A_fB5T--UpyppHYGtilx7vTOWc_QJuTOFF2?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="bg-amber-500 text-slate-900 w-full py-3 sm:py-3.5 rounded-xl font-bold mt-2 text-sm sm:text-base text-center block"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
