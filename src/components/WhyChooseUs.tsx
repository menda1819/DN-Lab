import React from 'react';

export const WhyChooseUs: React.FC = () => {
  return (
<section className="py-16 md:py-24 bg-surface border-b border-outline-variant/20 relative overflow-hidden" id="why-us">
  {/* Clearly Visible Background */}
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    <img 
      src="/images/wedding-prints-showcase.jpg" 
      alt="Wedding prints background" 
      className="absolute inset-0 w-full h-full object-cover object-center opacity-65"
    />
    <div className="absolute inset-0 bg-surface/80 backdrop-blur-[1px]" />
    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-surface to-transparent" />
  </div>

<div className="relative z-10 max-w-7xl mx-auto px-margin md:px-margin-lg">
<div className="max-w-3xl mb-12">
<span className="text-label-md font-label-md uppercase tracking-wider text-primary font-semibold block mb-2">Our Standards</span>
<h2 className="text-headline-md md:text-headline-lg font-headline-md md:font-headline-lg text-on-surface font-bold tracking-tight">
            Why Photographers &amp; Families Choose DN Digital
          </h2>
<p className="text-body-lg font-body-lg text-on-surface-variant mt-3">
            Real craftsmanship, calibrated digital offset hardware, and localized dependability right along Galle Road.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex gap-4">
<div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-2xl">palette</span>
</div>
<div>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface mb-1">High-Fidelity Color &amp; Clarity</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Vibrant CMYK and RGB reproduction across archival photo media, preserving the exact dynamic range and skin tones of your original captures.
              </p>
</div>
</div>

<div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex gap-4">
<div className="w-12 h-12 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-2xl">pin_drop</span>
</div>
<div>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface mb-1">Convenient Galle Road Location</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Centrally situated at 437/B2 Galle Road in Panadura, providing effortless roadside access, parking convenience, and swift walk-in pickups.
              </p>
</div>
</div>

<div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex gap-4">
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-2xl">photo_frame</span>
</div>
<div>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface mb-1">Integrated Print &amp; Framing</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                End-to-end service from RAW digital file to ready-to-hang finished wall frames under one roof, eliminating separate framing workshop trips.
              </p>
</div>
</div>

<div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex gap-4">
<div className="w-12 h-12 rounded-xl bg-secondary-container/30 text-secondary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-2xl">schedule</span>
</div>
<div>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface mb-1">Quick Turnaround Available</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Prompt digital processing for urgent photo printing, passport requirements, and priority studio jobs without sacrificing final finish quality.
              </p>
</div>
</div>

<div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex gap-4 md:col-span-2 lg:col-span-2">
<div className="w-12 h-12 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-2xl">auto_awesome_motion</span>
</div>
<div>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface mb-1">Versatile Printing Solutions</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                Seamless handling for single family photo keepsakes, bespoke studio portrait albums, custom contour-cut sticker runs, and commercial marketing collaterals.
              </p>
</div>
</div>
</div>

{/* Dedicated Real Team Showcase */}
<div className="mt-10 rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface-container-lowest shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch">
  <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[320px] overflow-hidden bg-surface-container">
    <img 
      src="/images/dn-lab-team.jpg" 
      alt="DN Digital Colour Lab professional team in Panadura" 
      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full text-label-sm font-label-sm font-semibold text-primary flex items-center gap-1.5 shadow-sm">
      <span className="material-symbols-outlined text-sm">groups</span> In-House Specialists
    </div>
  </div>
  <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-center space-y-4">
    <span className="text-label-md font-label-md uppercase tracking-wider text-secondary font-semibold">The People Behind Your Prints</span>
    <h3 className="text-headline-sm sm:text-headline-md font-headline-sm font-bold text-on-surface tracking-tight">
      12+ Dedicated Technicians, Designers &amp; Framing Artisans
    </h3>
    <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
      From RAW camera file color calibration and custom sizing to precision digital press operation and hand-finished glass framing, our Panadura team handles every order with authentic local pride.
    </p>
    <div className="pt-2 flex flex-wrap gap-3">
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface text-label-sm font-label-sm font-medium">
        <span className="material-symbols-outlined text-primary text-base">verified</span> 10+ Years Experience
      </span>
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface text-label-sm font-label-sm font-medium">
        <span className="material-symbols-outlined text-secondary text-base">storefront</span> Direct Studio Access
      </span>
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface text-label-sm font-label-sm font-medium">
        <span className="material-symbols-outlined text-tertiary text-base">thumb_up</span> 99.4% Satisfaction
      </span>
    </div>
  </div>
</div>
</div>
</section>


  );
};
