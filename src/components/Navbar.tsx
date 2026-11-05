import React from 'react';
import { useContent } from '../context/ContentContext';
import { useAdminAuth } from '../context/AdminAuthContext';

export const Navbar: React.FC = () => {
  const { content } = useContent();
  const { business } = content;
  const { isAdmin, openAdminPanel } = useAdminAuth();

  return (
    <header className="sticky top-0 z-50 w-full bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/40 shadow-sm">
      <div className="flex justify-between items-center w-full px-margin md:px-margin-lg max-w-7xl mx-auto h-20">
        <a className="flex items-center gap-3 group focus:outline-none" href="#home">
          <img alt="DN Digital Colour Lab Logo" className="h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-200" src="/images/logo.png"/>
          <div className="flex flex-col">
            <span className="text-title-lg font-title-lg font-bold text-on-surface tracking-tight leading-tight">{business.name}</span>
            <span className="text-label-sm font-label-sm text-outline tracking-wider">(Pvt) Ltd • Panadura</span>
          </div>
        </a>

        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6">
          <a className="text-primary font-title-md border-b-2 border-primary pb-1" href="#home">Home</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#about">About Us</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#services">Services</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#products">Catalog &amp; Pricing</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#gallery">Gallery</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#why-us">Why Us</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          {isAdmin && (
            <button
              onClick={openAdminPanel}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary-fixed text-on-secondary-fixed text-label-sm font-semibold border border-secondary/30 hover:bg-secondary-fixed-dim transition-colors shadow-sm"
              title="Open Admin Customizer"
            >
              <span className="material-symbols-outlined text-[16px]">edit</span>
              <span className="hidden sm:inline">Admin</span>
            </button>
          )}

          <a className="inline-flex items-center gap-2 bg-tertiary text-on-tertiary px-4 py-2.5 rounded-lg shadow-sm hover:opacity-95 active:scale-[0.98] transition-all duration-150 text-label-md font-label-md" href={`tel:${business.phone}`}>
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span className="hidden sm:inline">Call Now</span>
          </a>

          <a className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2.5 rounded-lg shadow-sm hover:opacity-90 active:scale-[0.98] transition-all duration-150 text-label-md font-label-md" href={`https://wa.me/${business.whatsapp}`} rel="noopener noreferrer" target="_blank">
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="hidden sm:inline">Get Quote</span>
          </a>
        </div>
      </div>
    </header>
  );
};
