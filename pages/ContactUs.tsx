
import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', car: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', car: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 reveal-anim">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24">
          <div>
            <span className="text-amber-500 text-xs font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 block">Concierge</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 sm:mb-10 md:mb-12 leading-tight">
              Connect <br /> with <span className="text-amber-500">Us</span>
            </h1>
            
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              <div className="group">
                <div className="text-[9px] sm:text-[10px] text-slate-500 font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-3 sm:mb-4">Visit the Studio</div>
                <p className="text-lg sm:text-xl text-white font-light leading-relaxed">
                  612 Jalan Riang 6,<br />
                  Happy Garden, Jalan Kuchai Lama,<br />
                  58200 Kuala Lumpur, Malaysia
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div>
                  <div className="text-[9px] sm:text-[10px] text-slate-500 font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-3 sm:mb-4">Contact Us</div>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <a href="https://wa.me/60192023407" className="text-base sm:text-lg text-white font-bold hover:text-amber-500 transition-colors break-all block">Devan +60192023407</a>
                    </div>
                    <div>
                      <a href="https://wa.me/60123023595" className="text-base sm:text-lg text-white font-bold hover:text-amber-500 transition-colors break-all block">KS Vinodh +60123023595</a>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Available Mon - Sat (9am - 7pm)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-6 sm:p-8 md:p-10 lg:p-12 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] border-white/5 shadow-3xl">
            {formStatus === 'success' ? (
              <div className="py-12 sm:py-16 md:py-20 text-center animate-scale-in">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                  <i className="fas fa-check text-emerald-500 text-3xl sm:text-4xl"></i>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display mb-3 sm:mb-4 uppercase">Request Logged</h3>
                <p className="text-slate-400 text-sm sm:text-base font-light mb-8 sm:mb-10 px-2">Our concierge will reach out via WhatsApp to finalize your booking.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="text-amber-500 font-black text-xs uppercase tracking-widest hover:underline"
                >
                  New Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6 sm:space-y-8">
                <div className="space-y-2">
                  <label className="text-[9px] sm:text-[10px] text-slate-500 font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] ml-1">Your Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 focus:border-amber-500 focus:bg-white/[0.08] focus:outline-none transition-all text-white placeholder-slate-700 font-light text-sm sm:text-base"
                    placeholder="Dato' John Smith"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] sm:text-[10px] text-slate-500 font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 focus:border-amber-500 focus:outline-none transition-all text-white font-light text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] sm:text-[10px] text-slate-500 font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] ml-1">Vehicle Model</label>
                    <input 
                      required
                      type="text" 
                      value={formData.car}
                      onChange={(e) => setFormData({...formData, car: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 focus:border-amber-500 focus:outline-none transition-all text-white font-light text-sm sm:text-base"
                      placeholder="e.g. McLaren 720S"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] sm:text-[10px] text-slate-500 font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] ml-1">Message / Requirements</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 focus:border-amber-500 focus:outline-none transition-all text-white font-light resize-none text-sm sm:text-base"
                    placeholder="Tell us about the current condition and preferred services..."
                  ></textarea>
                </div>
                
                <button 
                  disabled={formStatus === 'sending'}
                  className="w-full py-5 sm:py-6 bg-amber-500 hover:bg-white text-black font-black text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] rounded-xl sm:rounded-2xl transition-all shadow-xl shadow-amber-500/10 disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {formStatus === 'sending' ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    <>
                      <span>Log Booking Request</span>
                      <i className="fas fa-arrow-right text-xs"></i>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
