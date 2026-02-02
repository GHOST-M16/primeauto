
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-slate-100 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <img 
                src="/Untitled_design__2_-removebg-preview.png" 
                alt="PRIMEOTO Logo" 
                className="h-24 sm:h-28 w-auto object-contain"
              />
            </div>
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-slate-600 hover:text-amber-500 hover:border-amber-500 transition-all text-sm sm:text-base">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-slate-600 hover:text-amber-500 hover:border-amber-500 transition-all text-sm sm:text-base">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="https://wa.me/60192023407" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-slate-600 hover:text-amber-500 hover:border-amber-500 transition-all text-sm sm:text-base"
                title="WhatsApp Devan"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4 sm:mb-6 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: 'Home', page: Page.Home },
                { label: 'Services', page: Page.Services },
                { label: 'About Us', page: Page.About },
                { label: 'Contact', page: Page.Contact }
              ].map((item) => (
                <li key={item.page}>
                  <button 
                    onClick={() => onPageChange(item.page)}
                    className="text-slate-600 hover:text-amber-500 transition-colors text-xs sm:text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4 sm:mb-6 text-sm sm:text-base">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Wax', 'Polish & Wax', 'Coating', 'Others'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-600 hover:text-amber-500 transition-colors text-xs sm:text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4 sm:mb-6 text-sm sm:text-base">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <li className="flex gap-2 sm:gap-3">
                <i className="fas fa-map-marker-alt text-amber-500 mt-0.5 sm:mt-1 shrink-0"></i>
                <span className="text-slate-600 leading-snug">
                  612 Jalan Riang 6,<br />
                  Happy Garden, Jalan Kuchai Lama,<br />
                  58200 Kuala Lumpur
                </span>
              </li>
              <li className="flex flex-col gap-2 sm:gap-3">
                <div className="flex gap-2 sm:gap-3">
                  <i className="fas fa-phone text-amber-500 mt-0.5 sm:mt-1 shrink-0"></i>
                  <span className="text-slate-600 break-all">Devan +60192023407</span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <i className="fas fa-phone text-amber-500 mt-0.5 sm:mt-1 shrink-0"></i>
                  <span className="text-slate-600 break-all">KS Vinodh +60123023595</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-slate-600">
          <p>© 2024 Primeoto Detailers. All Rights Reserved.</p>
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
