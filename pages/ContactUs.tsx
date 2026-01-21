
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
    <div className="pt-40 pb-32 px-6 reveal-anim">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="text-amber-500 text-xs font-black tracking-[0.4em] uppercase mb-4 block">Concierge</span>
            <h1 className="font-display text-5xl md:text-7xl font-black uppercase mb-12 leading-tight">
              Connect <br /> with <span className="text-amber-500">Us</span>
            </h1>
            
            <div className="space-y-12">
              <div className="group">
                <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mb-4">Visit the Studio</div>
                <p className="text-xl text-white font-light leading-relaxed">
                  No. 12, Jalan Kia Peng, <br />
                  50450 Kuala Lumpur, Malaysia
                </p>
                <a href="#" className="inline-block mt-4 text-amber-500 font-bold text-sm hover:underline">Open in Google Maps</a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div>
                  <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mb-4">Direct Link</div>
                  <a href="https://wa.me/60123456789" className="text-lg text-white font-bold hover:text-amber-500 transition-colors">+60 12-345 6789</a>
                  <p className="text-xs text-slate-500 mt-2">Available Mon - Sat (9am - 7pm)</p>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mb-4">Enquiries</div>
                  <a href="mailto:hello@primeauto.my" className="text-lg text-white font-bold hover:text-amber-500 transition-colors">hello@primeauto.my</a>
                  <p className="text-xs text-slate-500 mt-2">General & Corporate Fleet</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-12 rounded-[3.5rem] border-white/5 shadow-3xl">
            {formStatus === 'success' ? (
              <div className="py-20 text-center animate-scale-in">
                <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <i className="fas fa-check text-emerald-500 text-4xl"></i>
                </div>
                <h3 className="text-3xl font-black font-display mb-4 uppercase">Request Logged</h3>
                <p className="text-slate-400 font-light mb-10">Our concierge will reach out via WhatsApp to finalize your booking.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="text-amber-500 font-black text-xs uppercase tracking-widest hover:underline"
                >
                  New Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] ml-1">Your Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-amber-500 focus:bg-white/[0.08] focus:outline-none transition-all text-white placeholder-slate-700 font-light"
                    placeholder="Dato' John Smith"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-amber-500 focus:outline-none transition-all text-white font-light"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] ml-1">Vehicle Model</label>
                    <input 
                      required
                      type="text" 
                      value={formData.car}
                      onChange={(e) => setFormData({...formData, car: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-amber-500 focus:outline-none transition-all text-white font-light"
                      placeholder="e.g. McLaren 720S"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] ml-1">Message / Requirements</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:border-amber-500 focus:outline-none transition-all text-white font-light resize-none"
                    placeholder="Tell us about the current condition and preferred services..."
                  ></textarea>
                </div>
                
                <button 
                  disabled={formStatus === 'sending'}
                  className="w-full py-6 bg-amber-500 hover:bg-white text-black font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl shadow-amber-500/10 disabled:opacity-50 flex items-center justify-center gap-3"
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
