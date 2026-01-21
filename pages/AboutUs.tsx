
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="pt-32 pb-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="rounded-[3rem] overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200" 
                alt="Premium car detailing studio with luxury vehicles" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl max-w-xs shadow-2xl">
              <div className="text-4xl font-black text-amber-500 mb-2">12+</div>
              <div className="text-sm text-slate-400 font-medium">Years of mastery in automotive aesthetics.</div>
            </div>
          </div>
          
          <div>
            <h1 className="font-display text-5xl font-black mb-8 uppercase leading-tight">Crafting Excellence Since <span className="text-amber-500">2012</span></h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              PrimeAuto KL began as a private passion project in a small garage in Ampang. Our founder, a certified automotive painter, noticed a gap in the market for truly high-end car care in Malaysia's challenging climate.
            </p>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Today, we operate from a state-of-the-art studio in the heart of Kuala Lumpur. We've stayed true to our roots: small-batch detailing, no compromises on products, and a obsession with perfection that borders on the fanatical.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <i className="fas fa-check text-amber-500"></i>
                  Precision
                </h4>
                <p className="text-xs text-slate-500">Micron-level paint correction for ultimate clarity.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <i className="fas fa-check text-amber-500"></i>
                  Technology
                </h4>
                <p className="text-xs text-slate-500">Using Gtechniq and Rupes professional systems.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values / Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { 
              title: "Our Studio", 
              text: "Climate-controlled, dust-free environment with specialized scangrip lighting.",
              icon: "fa-building" 
            },
            { 
              title: "Our Team", 
              text: "Every technician undergoes rigorous 6-month training before touching a client car.",
              icon: "fa-users" 
            },
            { 
              title: "Our Promise", 
              text: "No hidden charges, no shortcuts. We don't release the car until it's perfect.",
              icon: "fa-handshake" 
            }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 glass rounded-full flex items-center justify-center mx-auto mb-8 border-amber-500/20">
                <i className={`fas ${item.icon} text-3xl text-amber-500`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Precision Polishing Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
              <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/auto-detailing-courses.webp" 
                  alt="Professional car polishing process - master technician using precision polishing tool on glossy black surface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-amber-500 text-xs font-black tracking-[0.4em] uppercase mb-4 block">Our Craft</span>
              <h2 className="font-display text-4xl md:text-5xl font-black mb-8 uppercase leading-tight">
                Precision <span className="text-amber-500">Polishing</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Our certified technicians use professional-grade rotary polishers and premium compounds to achieve mirror-like finishes. Every stroke is calculated, every surface meticulously inspected under specialized lighting.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                The art of paint correction requires more than just tools—it demands an intimate understanding of paint chemistry, surface tension, and the delicate balance between removing imperfections and preserving factory clear coat integrity.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="glass px-6 py-3 rounded-full border border-white/10">
                  <span className="text-sm text-slate-300 font-medium">Rotary Polishers</span>
                </div>
                <div className="glass px-6 py-3 rounded-full border border-white/10">
                  <span className="text-sm text-slate-300 font-medium">Premium Compounds</span>
                </div>
                <div className="glass px-6 py-3 rounded-full border border-white/10">
                  <span className="text-sm text-slate-300 font-medium">Specialized Lighting</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Showcase */}
        <section className="glass p-16 rounded-[4rem]">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
               <h2 className="font-display text-3xl font-black mb-6 uppercase">World-Class Equipment</h2>
               <p className="text-slate-400 mb-8">
                We believe a craftsman is only as good as his tools. That's why we invest in the same gear used by luxury detailers in Europe and the US.
               </p>
               <ul className="space-y-4">
                 <li className="flex items-center gap-4 text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    Rupes BigFoot Polishing Systems
                 </li>
                 <li className="flex items-center gap-4 text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    Scangrip Multimatch Inspection Lighting
                 </li>
                 <li className="flex items-center gap-4 text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    Industrial Grade De-Ionized Water Filtration
                 </li>
                 <li className="flex items-center gap-4 text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    Steam Vacuum Sanitization Units
                 </li>
               </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1621360841013-c7683c659ec6?auto=format&fit=crop&q=80&w=800" className="rounded-2xl w-full h-80 object-cover shadow-xl" alt="Detailing Gear" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
