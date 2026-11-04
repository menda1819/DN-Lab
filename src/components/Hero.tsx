import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-surface border-b border-outline-variant/30 pt-8 pb-16 lg:py-20" id="home">
      {/* Background Imagery matching Why Us section */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img 
          src="/images/wedding-prints-showcase.jpg" 
          alt="DN Digital Colour Lab print works background" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-surface/80 backdrop-blur-[1px]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-surface to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-margin md:px-margin-lg">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-secondary font-label-sm text-label-sm border border-secondary/30 shadow-sm">
            <span className="material-symbols-outlined text-sm">print</span> Official Xerox Digital Lab Equipment
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm border border-primary/30 shadow-sm">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 4.1 ★ (75 Reviews)
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface-variant font-label-sm text-label-sm border border-outline-variant/40 shadow-sm">
            <span className="material-symbols-outlined text-sm">bolt</span> Fast Turnaround in Panadura
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-label-md font-label-md tracking-wider text-secondary uppercase font-semibold">Quality Digital Photo Printing &amp; Offset Lab</span>
              <h1 className="text-headline-lg-mobile md:text-headline-lg lg:text-display font-display font-bold text-on-surface tracking-tight leading-tight">
                Bringing Your <span className="text-secondary underline decoration-primary-container decoration-4">Memories</span> to Life
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                Your trusted destination for quality digital photo printing, framing, and professional printing services in Panadura. Crafted on industrial Xerox presses with true-to-life color calibration.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-secondary text-on-secondary text-label-lg font-label-lg shadow-sm hover:brightness-110 active:scale-[0.98] transition-all" href="#services">
                <span>Explore Our Services</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
              <a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border-2 border-outline-variant/80 bg-surface-container-lowest/80 backdrop-blur-sm text-on-surface hover:bg-surface-container text-label-lg font-label-lg active:scale-[0.98] transition-all shadow-sm" href="#contact">
                <span className="material-symbols-outlined text-base">location_on</span>
                <span>Contact Us</span>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant/30 flex items-center justify-between flex-wrap gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">support_agent</span>
                </div>
                <div>
                  <div className="text-label-sm font-label-sm text-outline uppercase font-semibold">Immediate Studio Inquiries</div>
                  <div className="text-title-md font-title-md text-on-surface font-bold tracking-tight">+94 77 731 2167</div>
                </div>
              </div>
              <a className="px-4 py-2 bg-tertiary text-on-tertiary rounded-lg text-label-sm font-label-sm font-semibold hover:opacity-90 transition-opacity shadow-sm" href="tel:+94777312167">
                Call Direct
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-outline-variant/30 bg-surface-container">
              <img alt="DN Digital Offset Panadura Banner with Xerox Digital Press" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500" src="/images/hero-banner.jpg"/>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/60 to-transparent p-5 text-inverse-on-surface">
                <span className="text-label-sm font-label-sm text-primary-fixed uppercase tracking-wider block mb-1">State-of-the-Art Production</span>
                <p className="text-body-sm font-body-sm font-medium">Equipped with production Xerox color presses for commercial print accuracy and fast execution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};
