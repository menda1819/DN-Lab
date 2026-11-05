import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';

export const Navbar: React.FC = () => {
  const { content } = useContent();
  const { business } = content;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Catalog & Pricing', href: '#products' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/40 shadow-sm">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-20">
        {/* Brand Logo & Name */}
        <a className="flex items-center gap-3 group focus:outline-none flex-shrink-0" href="#home">
          <img 
            alt="DN Digital Colour Lab Logo" 
            className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-200" 
            src="/images/logo.png"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/logo.png';
            }}
          />
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold text-on-surface tracking-tight leading-tight">
              {business.name}
            </span>
            <span className="text-[11px] text-outline tracking-wider font-medium">
              (Pvt) Ltd • Panadura
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-7 flex-shrink min-w-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-xs xl:text-sm font-medium transition-colors ${
                link.href === '#home'
                  ? 'text-primary font-semibold border-b-2 border-primary pb-0.5'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Call & Quote Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <a 
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-tertiary text-on-tertiary px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-sm hover:opacity-95 active:scale-[0.98] transition-all text-xs sm:text-sm font-semibold whitespace-nowrap" 
            href={`tel:${business.phone}`}
          >
            <span className="material-symbols-outlined text-base sm:text-[18px]">call</span>
            <span className="hidden sm:inline">Call Now</span>
          </a>

          <a 
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary-container text-on-primary-container px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-sm hover:opacity-90 active:scale-[0.98] transition-all text-xs sm:text-sm font-semibold whitespace-nowrap" 
            href={`https://wa.me/${business.whatsapp}`} 
            rel="noopener noreferrer" 
            target="_blank"
          >
            <span className="material-symbols-outlined text-base sm:text-[18px]">chat</span>
            <span className="hidden sm:inline">Get Quote</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-outline-variant/30 px-6 py-4 space-y-2 animate-fade-in shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-on-surface py-2 border-b border-outline-variant/10 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
