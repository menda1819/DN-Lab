import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { businessInfo, getWhatsAppUrl } from '../data/business';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white shadow-lg backdrop-blur-sm border border-slate-700 flex items-center justify-center transition-all duration-200 transform hover:scale-105"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Call Button for mobile */}
      <a
        href={`tel:${businessInfo.contact.phone}`}
        className="sm:hidden w-12 h-12 rounded-full bg-sky-600 hover:bg-sky-500 text-white shadow-lg flex items-center justify-center transition-all duration-200"
        aria-label="Call DN Digital Colour Lab"
        title="Call Now"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp Speed Dial */}
      <a
        href={getWhatsAppUrl("Hello DN Digital Colour Lab, I would like to inquire about printing services.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
        aria-label="Chat with DN Digital Colour Lab on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:opacity-60 animate-ping -z-10" />
        <MessageCircle className="w-6 h-6 shrink-0 fill-white text-emerald-500" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};

