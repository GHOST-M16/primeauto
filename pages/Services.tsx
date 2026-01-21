
import React from 'react';
import { SERVICES } from '../constants';
import { Page } from '../types';

interface ServicesProps {
  onPageChange: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ onPageChange }) => {
  return (
    <div className="pt-40 pb-32 px-6 reveal-anim">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="max-w-2xl">
            <span className="text-amber-500 text-xs font-black tracking-[0.4em] uppercase mb-4 block">Our Curation</span>
            <h1 className="font-display text-5xl md:text-7xl font-black uppercase leading-none">
              Service <br /> <span className="text-amber-500">Tiering</span>
            </h1>
          </div>
          <p className="text-slate-500 max-w-sm font-light text-right hidden md:block">
            Transparent pricing models for unparalleled results. All chemicals used are high-performance imported brands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {SERVICES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`flex flex-col rounded-[3rem] overflow-hidden border transition-all duration-500 relative group ${
                pkg.highlight 
                  ? 'border-amber-500/40 bg-slate-900/50 scale-105 z-10 shadow-3xl shadow-amber-500/5' 
                  : 'border-white/5 bg-slate-950/40 hover:border-white/20'
              }`}
            >
              <div className="p-10">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-2xl font-bold font-display uppercase tracking-tight">{pkg.name}</h3>
                  {pkg.highlight && (
                    <span className="bg-amber-500 text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                      Elite Choice
                    </span>
                  )}
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">{pkg.price}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-2">
                    Studio Time: {pkg.duration}
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-10 min-h-[60px] font-light">
                  {pkg.description}
                </p>

                <div className="space-y-4 mb-12">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.5)]"></div>
                      <span className="text-slate-300 text-xs font-medium uppercase tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => onPageChange(Page.Contact)}
                  className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                    pkg.highlight 
                      ? 'bg-amber-500 text-black hover:bg-white' 
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  Book Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="glass p-16 rounded-[4rem]">
          <h2 className="text-3xl font-black font-display mb-12 uppercase tracking-tight text-center">Bespoke Enhancements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
            {[
              { name: 'Headlight Restoration', price: 'RM 120' },
              { name: 'Ozone Sanitization', price: 'RM 80' },
              { name: 'Leather Nano-Protection', price: 'RM 150' },
              { name: 'Engine Bay Detailing', price: 'RM 180' },
              { name: 'Windshield Coating', price: 'RM 150' },
              { name: 'Wheel Ceramic Finish', price: 'RM 350' },
            ].map((addon, i) => (
              <div key={i} className="flex justify-between items-center group cursor-default border-b border-white/5 pb-6">
                <span className="text-slate-300 font-bold uppercase text-xs tracking-widest group-hover:text-amber-500 transition-colors">{addon.name}</span>
                <span className="text-amber-500 font-black text-sm">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
