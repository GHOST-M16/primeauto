
import React, { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    calendar?: {
      schedulingButton?: {
        load: (options: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', car: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const calendarButtonRef = useRef<HTMLDivElement>(null);
  const buttonInitialized = useRef(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', car: '', message: '' });
    }, 1500);
  };

  useEffect(() => {
    // Initialize Google Calendar scheduling button (only once)
    const initCalendarButton = () => {
      // Prevent multiple initializations
      if (buttonInitialized.current) {
        return true;
      }

      if (window.calendar?.schedulingButton && calendarButtonRef.current) {
        try {
          // Clear any existing content first
          if (calendarButtonRef.current) {
            calendarButtonRef.current.innerHTML = '';
          }
          
          window.calendar.schedulingButton.load({
            url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2vgKK9SacbTXOJqiMYWM1IVmXN0Q1RqnP3DM3b0A_fB5T--UpyppHYGtilx7vTOWc_QJuTOFF2?gv=true',
            color: '#F09300',
            label: 'Book an appointment',
            target: calendarButtonRef.current,
          });
          
          buttonInitialized.current = true;
          return true;
        } catch (error) {
          console.error('Error loading calendar button:', error);
        }
      }
      return false;
    };

    // Wait for window load event (as per Google's example)
    const handleLoad = () => {
      initCalendarButton();
    };

    if (document.readyState === 'complete') {
      // Script might already be loaded
      setTimeout(handleLoad, 100);
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Also try periodically in case script loads after window load (but only if not initialized)
    const retryInterval = setInterval(() => {
      if (initCalendarButton()) {
        clearInterval(retryInterval);
      }
    }, 500);

    // Stop retrying after 10 seconds
    setTimeout(() => clearInterval(retryInterval), 10000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearInterval(retryInterval);
    };
  }, []);

  return (
    <div className="pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 reveal-anim">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24">
          <div>
            <span className="text-amber-500 text-xs font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 block">Concierge</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-8 sm:mb-10 md:mb-12 leading-tight text-slate-900">
              Connect <br /> with <span className="text-amber-500">Us</span>
            </h1>
            
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              <div className="group">
                <div className="text-[9px] sm:text-[10px] text-slate-500 font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-3 sm:mb-4">Visit the Studio</div>
                <p className="text-lg sm:text-xl text-slate-700 font-light leading-relaxed">
                  612 Jalan Riang 6,<br />
                  Happy Garden, Jalan Kuchai Lama,<br />
                  58200 Kuala Lumpur, Malaysia
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div>
                  <div className="text-[9px] sm:text-[10px] text-slate-600 font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-3 sm:mb-4">Contact Us</div>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <a href="https://wa.me/60192023407" className="text-base sm:text-lg text-slate-900 font-bold hover:text-amber-500 transition-colors break-all block">Devan +60192023407</a>
                    </div>
                    <div>
                      <a href="https://wa.me/60123023595" className="text-base sm:text-lg text-slate-900 font-bold hover:text-amber-500 transition-colors break-all block">KS Vinodh +60123023595</a>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 mt-2">Available Mon - Sat (9am - 7pm)</p>
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
                <p className="text-slate-600 text-sm sm:text-base font-light mb-8 sm:mb-10 px-2">Our concierge will reach out via WhatsApp to finalize your booking.</p>
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
                    className="w-full bg-white border border-slate-300 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 focus:border-amber-500 focus:bg-slate-50 focus:outline-none transition-all text-slate-900 placeholder-slate-400 font-light text-sm sm:text-base"
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
                      className="w-full bg-white border border-slate-300 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 focus:border-amber-500 focus:outline-none transition-all text-slate-900 font-light text-sm sm:text-base"
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
                      className="w-full bg-white border border-slate-300 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 focus:border-amber-500 focus:outline-none transition-all text-slate-900 font-light text-sm sm:text-base"
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
                    className="w-full bg-white border border-slate-300 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 focus:border-amber-500 focus:outline-none transition-all text-slate-900 font-light resize-none text-sm sm:text-base"
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

        {/* Google Calendar Appointment Scheduling */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <span className="text-amber-500 text-xs font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 block">Book Your Appointment</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-4 sm:mb-6 text-slate-900">
            Schedule <span className="text-amber-500">Your Visit</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8">
            Select a convenient time slot for your vehicle detailing service
          </p>
          
          {/* Calendar Button */}
          <div ref={calendarButtonRef} className="flex justify-center min-h-[50px] items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
