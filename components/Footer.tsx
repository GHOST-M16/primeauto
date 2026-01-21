
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-amber-500 p-2 rounded-lg">
                <i className="fas fa-car-side text-slate-900 text-xl"></i>
              </div>
              <span className="font-display font-black text-2xl tracking-tighter">
                PRIME<span className="text-amber-500">AUTO</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Kuala Lumpur's premier automotive spa. We specialize in bespoke detailing, 
              ceramic coatings, and paint protection films for the discerning enthusiast.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500 transition-all">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-100 font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onPageChange(item.toLowerCase().replace(' ', '') as Page)}
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-100 font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Ceramic Coating', 'Paint Correction', 'Interior Deep Clean', 'Engine Bay Detailing', 'Window Tinting'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-100 font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <i className="fas fa-map-marker-alt text-amber-500 mt-1"></i>
                <span className="text-slate-400 leading-snug">
                  12, Jalan Kia Peng,<br />
                  50450 Kuala Lumpur,<br />
                  Wilayah Persekutuan Kuala Lumpur
                </span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-phone text-amber-500 mt-1"></i>
                <span className="text-slate-400">+60 12-345 6789</span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-envelope text-amber-500 mt-1"></i>
                <span className="text-slate-400">bookings@primeauto.my</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 PrimeAuto KL. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
