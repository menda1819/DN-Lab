import React, { useState } from 'react';

export const Gallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<{ src: string; caption: string } | null>(null);

  const openLightbox = (src: string, caption: string) => {
    setActiveImage({ src, caption });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
<section className="py-16 md:py-24 bg-surface-container-lowest border-b border-outline-variant/20" id="gallery">
<div className="max-w-7xl mx-auto px-margin md:px-margin-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<span className="text-label-md font-label-md uppercase tracking-wider text-secondary font-semibold block mb-2">Portfolio</span>
<h2 className="text-headline-md md:text-headline-lg font-headline-md md:font-headline-lg text-on-surface font-bold tracking-tight">
              Our Work &amp; Print Showcase
            </h2>
</div>
<p className="text-body-md font-body-md text-on-surface-variant max-w-md">
            A sample of recent digital prints, framed memories, enlargements, and custom stickers produced at our Panadura lab.
          </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface shadow-sm cursor-pointer" onClick={() => openLightbox("/images/wedding-prints-showcase.jpg", "Wedding Thank You Cards & Album Prints")}>
<div className="aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Real wedding photo prints, tri-fold cards and thank-you cards printed at DN Digital Colour Lab" src="/images/wedding-prints-showcase.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
<div>
<span className="text-label-sm font-label-sm text-primary-fixed uppercase tracking-wider">Photo Prints &amp; Albums</span>
<h4 className="text-title-md font-title-md text-inverse-on-surface font-semibold">Wedding Thank You Cards &amp; Album Prints</h4>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface shadow-sm cursor-pointer" onClick={() => openLightbox("/images/lab-operator-press.jpg", "Expert Machine Operator at Xerox Press")}>
<div className="aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Dedicated print operator running color calibration on Xerox press" src="/images/lab-operator-press.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
<div>
<span className="text-label-sm font-label-sm text-primary-fixed uppercase tracking-wider">Lab Operation</span>
<h4 className="text-title-md font-title-md text-inverse-on-surface font-semibold">Real-Time Digital Press Calibration</h4>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface shadow-sm cursor-pointer" onClick={() => openLightbox("/images/offset-services-flyer.jpg", "DN Digital Offset Commercial Products")}>
<div className="aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="DN Digital Offset commercial printing design services flyer" src="/images/offset-services-flyer.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
<div>
<span className="text-label-sm font-label-sm text-primary-fixed uppercase tracking-wider">Commercial Offset</span>
<h4 className="text-title-md font-title-md text-inverse-on-surface font-semibold">Corporate Stationery &amp; Marketing Collateral</h4>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface shadow-sm cursor-pointer" onClick={() => openLightbox("/images/xerox-production-press.jpg", "Industrial Xerox Digital Color Press")}>
<div className="aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Industrial Xerox digital production press at Panadura facility" src="/images/xerox-production-press.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
<div>
<span className="text-label-sm font-label-sm text-primary-fixed uppercase tracking-wider">Production Hardware</span>
<h4 className="text-title-md font-title-md text-inverse-on-surface font-semibold">Industrial Xerox Digital Press Equipment</h4>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface shadow-sm cursor-pointer" onClick={() => openLightbox("/images/dn-lab-team.jpg", "The Dedicated DN Lab Team in Panadura")}>
<div className="aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="DN Digital Colour Lab professional team in Panadura" src="/images/dn-lab-team.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
<div>
<span className="text-label-sm font-label-sm text-primary-fixed uppercase tracking-wider">Our Team</span>
<h4 className="text-title-md font-title-md text-inverse-on-surface font-semibold">The Dedicated DN Lab Team in Panadura</h4>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface shadow-sm cursor-pointer" onClick={() => openLightbox("https://lh3.googleusercontent.com/aida-public/AB6AXuBq307p_j3NIzWu78FZDYvPzJb5sdLCP015rknQ3SKPOgajTAGv8fZFaUmoar0vb7f90z2PnUnAT5YsmpKF8l57og9Gvc5b5VV8GhGNKddVNzp6VuJPYioaj_bQqJk-bcrWZlEegXORJGZsASQuPKxpDfNrGZrIm22NaGJr2ME-j3ILaLQqB6Ki_Oa2x4ESvC2jw2xEExMhLvq6_mkat6AZPNL9dXNuVw6XS05obwc", "Graduation Portrait with Gold Fillet Border")}>
<div className="aspect-[4/3] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A formal graduation photograph printed with rich deep colors and crisp skin tones, encased in a traditional deep-set wooden frame with an elegant gold inner fillet border." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq307p_j3NIzWu78FZDYvPzJb5sdLCP015rknQ3SKPOgajTAGv8fZFaUmoar0vb7f90z2PnUnAT5YsmpKF8l57og9Gvc5b5VV8GhGNKddVNzp6VuJPYioaj_bQqJk-bcrWZlEegXORJGZsASQuPKxpDfNrGZrIm22NaGJr2ME-j3ILaLQqB6Ki_Oa2x4ESvC2jw2xEExMhLvq6_mkat6AZPNL9dXNuVw6XS05obwc"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
<div>
<span className="text-label-sm font-label-sm text-primary-fixed uppercase tracking-wider">Framed Memories</span>
<h4 className="text-title-md font-title-md text-inverse-on-surface font-semibold">Graduation Portrait with Gold Fillet Border</h4>
</div>
</div>
</div>
</div>
</div>
</section>

<div className={`fixed inset-0 z-50 bg-inverse-surface/90 backdrop-blur-md ${activeImage ? "flex" : "hidden"} items-center justify-center p-4`} id="lightbox-modal" style={{ display: activeImage ? "flex" : "none" }} onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}>
<div className="relative max-w-4xl w-full bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/40">
<button className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface/80 hover:bg-surface flex items-center justify-center text-on-surface transition-colors" onClick={closeLightbox}>
<span className="material-symbols-outlined">close</span>
</button>
<div className="p-2">
<img alt="Gallery Preview" className="w-full max-h-[75vh] object-contain rounded-xl" id="lightbox-img" src={activeImage ? activeImage.src : ""}/>
</div>
<div className="p-4 border-t border-outline-variant/20 flex items-center justify-between bg-surface">
<span className="text-title-md font-title-md font-bold text-on-surface" id="lightbox-caption">{activeImage ? activeImage.caption : ""}</span>
<a className="text-label-sm font-label-sm text-secondary font-semibold hover:underline" href="#contact" onClick={closeLightbox}>Inquire About This Print</a>
</div>
</div>
</div>


    </>
  );
};
