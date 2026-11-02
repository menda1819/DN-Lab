import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { businessInfo, getStoreStatus, getWhatsAppUrl } from '../data/business';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [storeStatus, setStoreStatus] = useState(getStoreStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Refresh open/closed status every 2 minutes
    const interval = setInterval(() => {
      setStoreStatus(getStoreStatus());
    }, 120000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Products', href: '#products', id: 'products' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Bar (Business Hours & Galle Road Location) */}
      <div className={`bg-slate-900 text-slate-300 text-xs py-1.5 px-4 transition-all duration-300 border-b border-slate-800 ${
        isScrolled ? 'hidden md:block' : 'block'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] sm:text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>437/B2, Galle Road, Panadura</span>
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Mon - Sat: 8:30 AM – 6:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Store Status Pill */}
            <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-800/80 border border-slate-700">
              <span className={`w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
              <span className={storeStatus.isOpen ? 'text-emerald-300' : 'text-rose-300'}>
                {storeStatus.statusText}
              </span>
            </span>

            <a
              href={`tel:${businessInfo.contact.phone}`}
              className="flex items-center gap-1 text-slate-200 hover:text-sky-400 font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>{businessInfo.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200'
            : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-100 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg"
          >
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors relative ${
                    isActive
                      ? 'text-sky-600 font-semibold'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-sky-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={getWhatsAppUrl("Hello DN Digital Colour Lab, I have an urgent printing inquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-all shadow-sm"
              title="Chat with us on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            <a
              href={`tel:${businessInfo.contact.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 shadow-sm hover:shadow transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${businessInfo.contact.phone}`}
              className="p-2 rounded-lg bg-sky-50 text-sky-700 sm:hidden"
              aria-label="Call business"
            >
              <Phone className="w-4 h-4" />
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                      isActive
                        ? 'bg-sky-50 text-sky-600 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-sky-600" />}
                  </a>
                );
              })}
            </div>

            <div className="pt-4 mt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-xs px-2 py-1 text-slate-500 bg-slate-50 rounded-md">
                <span className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                  <span>{storeStatus.statusText}</span>
                </span>
                <span>{storeStatus.nextScheduleText}</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

