import React from 'react';

export const Services: React.FC = () => {
  return (
<section className="py-16 md:py-24 bg-surface-container-lowest border-b border-outline-variant/20 relative overflow-hidden" id="services">
  {/* Professional Ambient Background */}
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    <div 
      className="absolute -left-20 top-1/4 w-1/2 h-2/3 bg-cover bg-center opacity-[0.06] mix-blend-multiply"
      style={{ backgroundImage: "url('/images/wedding-prints-showcase.jpg')" }}
    />
    <div 
      className="absolute -right-20 bottom-10 w-1/2 h-1/2 bg-contain bg-no-repeat bg-right opacity-[0.07] mix-blend-multiply"
      style={{ backgroundImage: "url('/images/xerox-production-press.jpg')" }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest via-surface-container-lowest/95 to-surface-container-lowest" />
  </div>

<div className="relative z-10 max-w-7xl mx-auto px-margin md:px-margin-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<span className="text-label-md font-label-md uppercase tracking-wider text-secondary font-semibold block mb-2">Our Capabilities</span>
<h2 className="text-headline-md md:text-headline-lg font-headline-md md:font-headline-lg text-on-surface font-bold tracking-tight">
              Comprehensive Printing &amp; Finishing Services
            </h2>
</div>
<p className="text-body-md font-body-md text-on-surface-variant max-w-md">
            Engineered workflows ensuring vibrant hues, exact dimensions, and archival longevity on every single order.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group rounded-2xl border border-outline-variant/30 bg-surface overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div className="relative h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="High precision wedding photo prints, tri-fold cards, and portrait albums printed at DN Digital Colour Lab" src="/images/wedding-prints-showcase.jpg"/>
<div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-label-sm font-label-sm font-semibold text-secondary">
                Lustre / Glossy
              </div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">Digital Photo Printing</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Vibrant true-to-life studio prints, passport photos, portfolio prints, and personal albums processed with strict color balance.
                </p>
</div>
<div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span className="text-label-sm font-label-sm text-outline">From 4R to Custom</span>
<a className="text-label-md font-label-md text-primary font-semibold hover:underline inline-flex items-center gap-1" href="#contact">
                  Inquire Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>

<div className="group rounded-2xl border border-outline-variant/30 bg-surface overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div className="relative h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Large format high definition photographic enlargement being inspected on a modern printing bench in Panadura. The large poster showcases vivid scenic landscape colors and crisp sharp fine art details with rich green and cyan tonal gradations." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe0Bl5Fs8dnZXk436QKOP3-NQSlAHfDf8IvpXnKzsPUFqKamci2IWU1fAl9XaQrPmiPgb-sWU0dn0If86yKcnDCr33Eo35e8iB6mXIS2U3sqtjTWIlOosulsFwjg7WJ_7eusH6MQnV6rwJ7rz5slhsI9anzJCvN5QKII1eLVS2xDdtTCnBKdeyPtuthP6W7jRWztx6rTlZLf3FjVLgXsXb64g6V6He_NhNeEopr7Q"/>
<div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-label-sm font-label-sm font-semibold text-primary">
                Large Format
              </div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">Photo Enlargement</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Large-format high-resolution photographic enlargements up to poster and gallery exhibition sizes with zero pixel degradation.
                </p>
</div>
<div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span className="text-label-sm font-label-sm text-outline">Up to 24x36 &amp; Beyond</span>
<a className="text-label-md font-label-md text-primary font-semibold hover:underline inline-flex items-center gap-1" href="#contact">
                  Inquire Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>

<div className="group rounded-2xl border border-outline-variant/30 bg-surface overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div className="relative h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Craftsman workshop presenting a variety of custom wooden photo frames, black minimalist synthetic profiles, and glass borders against a clean studio wall. The lighting is crisp and modern, highlighting the precision joins and protective glass coating." src="https://lh3.googleusercontent.com/aida-public/AB6AXuArAfUMZBFJN5g2vZz2uhpPgybLvxLczJMCubzyaWiZWy0fCxDBf097aimqzKuVNtx-LKPZ0FHwYp0G9S8wnWwkJ-2uKDzTwDW23PvuNTwC_aacHP4VuCwKIqGkhoVL8LaDkcpbjVAY38H7-pB7RHQoTpCEZYFfDivroLjZlWurd1gi0nUPMdam7o5Ze3PmL6tTf6jd_J1AsX0ubab1m4fb57hIfSFv6cG8QbN4l7Q"/>
<div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-label-sm font-label-sm font-semibold text-tertiary">
                Custom Mouldings
              </div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">Photo Framing</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Custom wooden, synthetic, and minimalist floating borders and glass frames crafted to preserve family and portrait memories.
                </p>
</div>
<div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span className="text-label-sm font-label-sm text-outline">Protective Glass Mount</span>
<a className="text-label-md font-label-md text-primary font-semibold hover:underline inline-flex items-center gap-1" href="#contact">
                  Inquire Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>

<div className="group rounded-2xl border border-outline-variant/30 bg-surface overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div className="relative h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="A complete framed photographic print ready to hang shown in an elegant interior setting. The frame features a fine black border, archival acid-free mat board, and vivid portrait photography printed with professional accuracy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQH0TITlkMfmYSErbmABl0GI2-G4me42U-qLuoiGjNidWIV-oOuprBQDG0xdAivW3uv6m8etMEJ2sflP5HjhhGVVvBXwPjoJHK2JHr2WnsrjJ-QK36pAQCNUf3Z4Q40Nt3rNKRUuTfULKg3w6gIZrmLQ0YiBMTuWJUb80dtuZF4yhML8ZfPlUApiACteAr7OnTGy5GiXDe5GKyidYY1xaXg5Vpon2Ay3thlUAZ4Dw"/>
<div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-label-sm font-label-sm font-semibold text-secondary">
                Turnkey Package
              </div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">Print &amp; Frame Services</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Complete all-in-one package: print, mount, and custom frame ready to hang on your living room or corporate office wall.
                </p>
</div>
<div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span className="text-label-sm font-label-sm text-outline">Ready to Hang</span>
<a className="text-label-md font-label-md text-primary font-semibold hover:underline inline-flex items-center gap-1" href="#contact">
                  Inquire Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>

<div className="group rounded-2xl border border-outline-variant/30 bg-surface overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div className="relative h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="A colorful assortment of die-cut vinyl stickers and glossy product packaging labels arranged neatly on a cutting mat. The stickers feature vibrant cyan, lime green, and magenta print tones with sharp laser kiss cut borders." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvUh04cm3ApIZPLarvoUp_FOfxfK55KU16X_wpfGFxYjTNM92-yi1wWNrDMEp0n_u-vbXcIdb8msOPEtcrmUAEADeKt4oqlWCjUF49xF-LOlutJ6Lp2wu9XIUDz-6Yj83td3GpLZw7s0V9EDNRKkqrmxBT_BLDk9OLMWeG2veivkAhQ_mEMQAqv4YkUE5igzl6sdfR5PORFzmsHfT144fIrTCm-_fEiti4izyxsSg"/>
<div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-label-sm font-label-sm font-semibold text-primary">
                Vinyl &amp; Paper
              </div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">Custom Sticker Printing</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Die-cut labels, promotional stickers, waterproof vinyl decals, and tailored product packaging stickers with high-tack adhesion.
                </p>
</div>
<div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span className="text-label-sm font-label-sm text-outline">Custom Die Cut</span>
<a className="text-label-md font-label-md text-primary font-semibold hover:underline inline-flex items-center gap-1" href="#contact">
                  Inquire Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>

<div className="group rounded-2xl border border-outline-variant/30 bg-surface overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div className="relative h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="DN Digital Offset commercial printing design services flyer" src="/images/offset-services-flyer.jpg"/>
<div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-label-sm font-label-sm font-semibold text-secondary">
                Digital Offset
              </div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">Digital Printing</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
                  Fast digital offset printing for brochures, business cards, certificates, greeting cards, and marketing flyers with crisp font rendering.
                </p>
</div>
<div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span className="text-label-sm font-label-sm text-outline">Single or Bulk Runs</span>
<a className="text-label-md font-label-md text-primary font-semibold hover:underline inline-flex items-center gap-1" href="#contact">
                  Inquire Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>


  );
};
