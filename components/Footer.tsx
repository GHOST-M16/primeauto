
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-slate-950 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="bg-amber-500 p-1.5 sm:p-2 rounded-lg">
                <i className="fas fa-car-side text-slate-900 text-lg sm:text-xl"></i>
              </div>
              <span className="font-display font-black text-xl sm:text-2xl tracking-tighter">
                PRIME<span className="text-amber-500">AUTO</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Kuala Lumpur's premier automotive spa. We specialize in bespoke detailing, 
              ceramic coatings, and paint protection films for the discerning enthusiast.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-all text-sm sm:text-base">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-all text-sm sm:text-base">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-all text-sm sm:text-base">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-100 font-bold mb-4 sm:mb-6 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Home', 'Services', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onPageChange(item.toLowerCase().replace(' ', '') as Page)}
                    className="text-slate-400 hover:text-amber-500 transition-colors text-xs sm:text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-100 font-bold mb-4 sm:mb-6 text-sm sm:text-base">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Ceramic Coating', 'Paint Correction', 'Interior Deep Clean', 'Engine Bay Detailing', 'Window Tinting'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors text-xs sm:text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-100 font-bold mb-4 sm:mb-6 text-sm sm:text-base">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <li className="flex gap-2 sm:gap-3">
                <i className="fas fa-map-marker-alt text-amber-500 mt-0.5 sm:mt-1 shrink-0"></i>
                <span className="text-slate-400 leading-snug">
                  12, Jalan Kia Peng,<br />
                  50450 Kuala Lumpur,<br />
                  Wilayah Persekutuan Kuala Lumpur
                </span>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <i className="fas fa-phone text-amber-500 mt-0.5 sm:mt-1 shrink-0"></i>
                <span className="text-slate-400 break-all">+60 12-345 6789</span>
              </li>
              <li className="flex gap-2 sm:gap-3">
                <i className="fas fa-envelope text-amber-500 mt-0.5 sm:mt-1 shrink-0"></i>
                <span className="text-slate-400 break-all">bookings@primeauto.my</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-slate-500">
          <p>© 2024 PrimeAuto KL. All Rights Reserved.</p>
          <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
