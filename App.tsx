
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home onPageChange={setCurrentPage} />;
      case Page.Services:
        return <Services onPageChange={setCurrentPage} />;
      case Page.About:
        return <AboutUs />;
      case Page.Contact:
        return <ContactUs />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Decorative background elements */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      <Footer onPageChange={setCurrentPage} />

      {/* Persistent WhatsApp CTA */}
      <a 
        href="https://wa.me/60192023407" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 bg-emerald-500 hover:bg-emerald-400 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-2xl shadow-emerald-500/40 transition-all transform hover:scale-110 active:scale-90"
        title="WhatsApp Us"
        aria-label="Contact us on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default App;
