import React from 'react';

export const Footer: React.FC = () => {
  return (
<footer className="w-full bg-inverse-surface border-t border-outline-variant/20 text-inverse-on-surface">
<div className="w-full px-margin md:px-margin-lg py-space-xl max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

<div className="space-y-4">
<div className="flex items-center gap-3">
<img alt="DN Digital Colour Lab Logo" className="h-10 w-auto object-contain bg-surface-container-lowest p-1 rounded" src="/images/logo.png"/>
<span className="text-headline-sm font-headline-sm font-bold text-inverse-on-surface tracking-tight">DN Digital Colour Lab</span>
</div>
<p className="text-body-sm font-body-sm text-inverse-on-surface/70 leading-relaxed">
            Professional photographic printing, custom framing, enlargements, and digital offset production based in Panadura, Sri Lanka.
          </p>
<div className="text-label-sm font-label-sm text-secondary-fixed">
            437/B2, Galle Road, Panadura 12500
          </div>
</div>

<div>
<h4 className="text-title-md font-title-md font-bold text-inverse-on-surface mb-4">Our Services</h4>
<ul className="space-y-2 text-body-sm font-body-sm">
<li><a className="text-inverse-on-surface/70 hover:text-inverse-on-surface transition-colors" href="#services">Digital Photo Printing</a></li>
<li><a className="text-inverse-on-surface/70 hover:text-inverse-on-surface transition-colors" href="#services">Large Format Framing</a></li>
<li><a className="text-inverse-on-surface/70 hover:text-inverse-on-surface transition-colors" href="#services">Custom Stickers</a></li>
<li><a className="text-inverse-on-surface/70 hover:text-inverse-on-surface transition-colors" href="#products">Price Inquiry</a></li>
<li><a className="text-inverse-on-surface/70 hover:text-inverse-on-surface transition-colors" href="#about">Lab Equipment</a></li>
</ul>
</div>

<div>
<h4 className="text-title-md font-title-md font-bold text-inverse-on-surface mb-4">Direct Contact</h4>
<ul className="space-y-2 text-body-sm font-body-sm text-inverse-on-surface/70">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-base text-secondary-fixed">call</span>
<a className="hover:underline text-inverse-on-surface" href="tel:+94777312167">+94 77 731 2167</a>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-base text-primary-fixed">chat</span>
<a className="hover:underline text-inverse-on-surface" href="https://wa.me/94777312167" target="_blank">WhatsApp Chat</a>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-base text-secondary-fixed">schedule</span>
<span>Mon – Sat: 8:30 AM – 6:00 PM</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-base text-tertiary-fixed">block</span>
<span>Sunday: Closed</span>
</li>
</ul>
</div>

<div>
<h4 className="text-title-md font-title-md font-bold text-inverse-on-surface mb-4">Digital Precision</h4>
<p className="text-body-sm font-body-sm text-inverse-on-surface/70 leading-relaxed mb-4">
            Utilizing Xerox industrial digital press architecture for continuous tone photographic fidelity and durable color reproduction.
          </p>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-[#00a4e4]"></span>
<span className="w-3 h-3 rounded-full bg-[#e11d48]"></span>
<span className="w-3 h-3 rounded-full bg-[#facc15]"></span>
<span className="w-3 h-3 rounded-full bg-[#1e293b]"></span>
<span className="w-3 h-3 rounded-full bg-[#7cb342]"></span>
<span className="text-label-sm font-label-sm text-inverse-on-surface/60 ml-2">CMYK Calibrated</span>
</div>
</div>
</div>

<div className="pt-8 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-label-sm font-label-sm text-inverse-on-surface/60">
<p>© 2024 DN Digital Colour Lab (Pvt) Ltd. Panadura, Sri Lanka. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-primary-fixed transition-colors" href="#about">Panadura Location</a>
<a className="hover:text-primary-fixed transition-colors" href="#services">Terms &amp; Policies</a>
</div>
</div>
</div>
</footer>
  );
};
