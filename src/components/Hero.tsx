import React from 'react';
import { ArrowRight, PhoneCall, Star, MapPin, Zap, CheckCircle2 } from 'lucide-react';
import { businessInfo, getWhatsAppUrl } from '../data/business';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 md:py-32 overflow-hidden bg-slate-950">
      {/* Background Photography Image with Deep Vignette & Lab Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=2000&q=85"
          alt="Digital Photo Lab Printing and Framing Showcase"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000"
        />
        {/* Gradients to create premium photography lab depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        
        {/* Subtle decorative aperture / CMYK glow rings */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Verified Location & Review Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-950/90 text-sky-300 border border-sky-800/80 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Panadura, Sri Lanka</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-950/60 text-amber-300 border border-amber-800/60 shadow-sm">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.1 / 5 (75 Google Reviews)</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.12]">
              Bringing Your <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-amber-300">
                Memories to Life
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Your trusted destination for quality digital photo printing, framing and professional printing services in Panadura.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-600/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 shadow-sm transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4 text-sky-400" />
                <span>Contact Us</span>
              </a>

              <a
                href={getWhatsAppUrl("Hello DN Digital Colour Lab, I have a photo printing inquiry.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-emerald-400 font-medium underline underline-offset-4 decoration-slate-700 hover:decoration-emerald-400 transition-colors py-2 sm:py-0"
              >
                Inquire on WhatsApp →
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>True Color Photo Calibration</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Custom Framing &amp; Mouldings</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 col-span-2 sm:col-span-1">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Quick Turnaround Available</span>
              </div>
            </div>
          </div>

          {/* Right Side Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Stacked Showcase Frame */}
              <div className="relative rounded-2xl p-2.5 bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden group">
                <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80"
                    alt="Framed Photography Samples"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  
                  {/* Overlay Card Label */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-lg text-left">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                        Photo Lab &amp; Framing
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                        Panadura
                      </span>
                    </div>
                    <p className="text-white font-semibold text-sm">
                      {businessInfo.legalName}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      437/B2, Galle Road • Photo prints, enlargements, stickers &amp; custom frames.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Review Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 p-3.5 rounded-xl bg-white text-slate-900 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-base font-bold text-slate-900">4.1</span>
                    <span className="text-xs text-slate-500">/ 5.0</span>
                    <span className="text-[11px] text-amber-600 font-semibold ml-1">★★★★☆</span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium">
                    75+ Verified Google Reviews
                  </p>
                </div>
              </div>

              {/* Floating Quick Service Badge */}
              <div className="absolute -top-4 -right-3 sm:-right-4 p-3 rounded-xl bg-slate-900/95 backdrop-blur-md text-white shadow-xl border border-slate-700 hidden sm:flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">
                  Quick Turnaround for Urgent Jobs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

