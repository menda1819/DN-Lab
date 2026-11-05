import React from 'react';

export const About: React.FC = () => {
  return (
<section className="py-16 md:py-24 bg-surface border-b border-outline-variant/20 relative overflow-hidden" id="about">
  {/* Clearly Visible Xerox Equipment Background */}
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    <img 
      src="/images/xerox-production-press.jpg" 
      alt="Xerox digital production press at DN Digital Colour Lab" 
      className="absolute right-0 top-0 w-full lg:w-3/5 h-full object-cover object-right opacity-65"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-surface/40" />
    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-surface to-transparent" />
  </div>

<div className="relative z-10 max-w-7xl mx-auto px-margin md:px-margin-lg">
<div className="max-w-3xl mb-12">
<span className="text-label-md font-label-md uppercase tracking-wider text-primary font-semibold block mb-2">About DN Digital Colour Lab</span>
<h2 className="text-headline-md md:text-headline-lg font-headline-md md:font-headline-lg text-on-surface font-bold tracking-tight">
            Trusted Digital Photo Printing &amp; Offset Lab in Panadura
          </h2>
<p className="text-body-lg font-body-lg text-on-surface-variant mt-4 leading-relaxed">
            Situated centrally at <strong>437/B2, Galle Road, Panadura</strong>, DN Digital Colour Lab (Pvt) Ltd delivers industrial color grading, photo enlargement, custom framed memorabilia, and multi-format commercial printing for families, studios, and businesses across the Western Province.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col justify-between hover:border-secondary transition-colors group">
<div className="relative h-44 overflow-hidden bg-surface-container">
  <img 
    src="/images/wedding-prints-showcase.jpg" 
    alt="High precision wedding photo prints and tri-fold album cards" 
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  />
  <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-label-sm font-label-sm font-semibold text-secondary">
    Archival Media
  </div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-xl">photo_camera</span>
</div>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface mb-2">High Precision Digital Photo Printing</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
  Archival papers, glossy, lustre, and metallic photo finishes engineered to safeguard visual clarity for years.
</p>
</div>
<div className="mt-5 pt-3 border-t border-outline-variant/20 flex items-center text-label-sm font-label-sm text-secondary font-semibold">
<span>RGB to Print Precision</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col justify-between hover:border-primary transition-colors group">
<div className="relative h-44 overflow-hidden bg-surface-container">
  <img 
    src="/images/xerox-production-press.jpg" 
    alt="Xerox digital production color press at DN Digital Colour Lab" 
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  />
  <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-label-sm font-label-sm font-semibold text-primary">
    Production Press
  </div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-xl">print</span>
</div>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface mb-2">Xerox Digital Production Press</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
  Industrial hardware ensuring razor-sharp registration, consistent halftone density, and swift turnaround time.
</p>
</div>
<div className="mt-5 pt-3 border-t border-outline-variant/20 flex items-center text-label-sm font-label-sm text-primary font-semibold">
<span>Lab-Grade Technology</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col justify-between hover:border-tertiary transition-colors group">
<div className="relative h-44 overflow-hidden bg-surface-container">
  <img 
    src="/images/lab-operator-press.jpg" 
    alt="Dedicated print operator running color calibration on Xerox press" 
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  />
  <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-label-sm font-label-sm font-semibold text-tertiary">
    In-House Tech
  </div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-xl">engineering</span>
</div>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface mb-2">Expert Machine Operation</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
  Meticulously operated by seasoned print technicians for optimal density, tone gradation, and registration accuracy.
</p>
</div>
<div className="mt-5 pt-3 border-t border-outline-variant/20 flex items-center text-label-sm font-label-sm text-tertiary font-semibold">
<span>Skilled Craftsmanship</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col justify-between hover:border-secondary transition-colors group">
<div className="relative h-44 overflow-hidden bg-surface-container">
  <img 
    src="/images/offset-services-flyer.jpg" 
    alt="DN Digital Offset commercial printing services promotional flyer" 
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  />
  <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-label-sm font-label-sm font-semibold text-secondary">
    All-In-One
  </div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-xl">loyalty</span>
</div>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface mb-2">Offset &amp; Custom Collateral</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
  Suppliers essentials, corporate stationery, leaflets, posters, wire-bound books, and custom stickers in any run.
</p>
</div>
<div className="mt-5 pt-3 border-t border-outline-variant/20 flex items-center text-label-sm font-label-sm text-secondary font-semibold">
<span>Commercial Variety</span>
</div>
</div>
</div>

</div>
</div>
</section>


  );
};
