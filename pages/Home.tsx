
import React from 'react';
import { Page } from '../types';
import { TESTIMONIALS } from '../constants';

interface HomeProps {
  onPageChange: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  return (
    <div className="reveal-anim">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom opacity-60"
          alt="Luxury Auto Detailing"
        />
        
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <div className="inline-block mb-6 px-4 py-1 border border-amber-500/30 rounded-full bg-amber-500/10 backdrop-blur-sm">
            <span className="text-amber-500 text-[10px] font-black tracking-[0.3em] uppercase">The Pinnacle of Automotive Care</span>
          </div>
          <h1 className="font-display text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
            MASTERING THE <br />
            <span className="gradient-text italic">ART OF SHINE</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Preserving investment-grade vehicles in Kuala Lumpur with bespoke detailing 
            rituals and world-leading surface technologies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => onPageChange(Page.Services)}
              className="group relative px-10 py-5 bg-amber-500 text-black font-black text-sm uppercase tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button 
              onClick={() => onPageChange(Page.Contact)}
              className="px-10 py-5 border border-white/20 hover:border-amber-500 text-white font-black text-sm uppercase tracking-widest rounded-full backdrop-blur-sm transition-all hover:bg-white/5"
            >
              Private Consultation
            </button>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
          <span className="text-[10px] text-slate-500 uppercase tracking-[0.4em] rotate-90 mb-8 origin-left">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-amber-500 to-transparent"></div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl md:text-5xl font-black mb-6 uppercase leading-tight">
                Beyond a Clean. <br />
                <span className="text-amber-500">The Prime Standard.</span>
              </h2>
              <div className="h-1 w-20 bg-amber-500"></div>
            </div>
            <p className="text-slate-400 max-w-md text-lg font-light leading-relaxed">
              We operate at the intersection of chemistry and craftsmanship. Every vehicle undergoes 
              a multi-stage inspection process to ensure perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: 'fa-microscope', 
                title: 'Surface Analysis', 
                desc: 'Ultrasonic depth measurement and scangrip spectral analysis to determine the perfect correction strategy.'
              },
              { 
                icon: 'fa-shield-virus', 
                title: 'Graphene Matrix', 
                desc: 'Utilizing next-gen Graphene infused coatings for extreme chemical resistance and hydrophobic self-cleaning.'
              },
              { 
                icon: 'fa-award', 
                title: 'Master Craftsmen', 
                desc: 'Technicians certified by world-leading brands, with a minimum of 5,000 hours of correction experience.'
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-12 rounded-[2rem] group">
                <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 transition-colors">
                  <i className={`fas ${item.icon} text-amber-500 text-2xl group-hover:text-black`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase / Stats */}
      <section className="bg-slate-900/40 py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: '750+', label: 'Exotic Vehicles Protected' },
              { val: '12', label: 'Years of Excellence' },
              { val: '100%', label: 'Satisfaction Guarantee' },
              { val: 'RM 10M+', label: 'Asset Value Preserved' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-black font-display text-white mb-2">{stat.val}</div>
                <div className="text-[10px] text-amber-500 uppercase tracking-[0.3em] font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="font-display text-4xl font-black uppercase mb-4">The Voice of Trust</h2>
          <p className="text-slate-500 text-sm tracking-widest uppercase">Endorsed by KL's Elite Enthusiasts</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass p-10 rounded-[3rem] relative">
              <div className="flex gap-1 text-amber-500 mb-8 text-xs">
                {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
              </div>
              <p className="text-slate-300 text-lg font-light italic mb-10 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center font-black text-black">
                  {t.name[0]}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-white text-sm uppercase tracking-wide">{t.name}</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{t.car}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-amber-500 to-amber-700 p-1 rounded-[4rem] shadow-2xl shadow-amber-500/20">
          <div className="bg-slate-950 rounded-[3.8rem] p-16 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-8 uppercase leading-tight">
              Begin Your <span className="text-amber-500">Transformation</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-light">
              Experience the definitive standard of automotive care. Your vehicle deserves the absolute best.
            </p>
            <button 
              onClick={() => onPageChange(Page.Contact)}
              className="px-14 py-6 bg-amber-500 text-black font-black uppercase tracking-widest rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-amber-500/20"
            >
              Secure Your Slot
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
