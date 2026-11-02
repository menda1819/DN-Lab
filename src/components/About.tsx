import React from 'react';
import { Camera, Layers, Frame, MapPin, Award, CheckCircle } from 'lucide-react';
import { businessInfo } from '../data/business';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Camera,
      title: "True-Color Photo Printing",
      description: "Dedicated photographic printing using genuine photo papers and calibrated color management for skin tones and vivid scenery."
    },
    {
      icon: Frame,
      title: "Custom Framing & Finishing",
      description: "Comprehensive framing solutions with a variety of moulding styles, protective glass, and acid-free mounting under one roof."
    },
    {
      icon: Layers,
      title: "Digital & Sticker Printing",
      description: "Versatile digital printing capabilities for custom brand stickers, commercial documents, certificates, and marketing leaflets."
    },
    {
      icon: MapPin,
      title: "Convenient Galle Road Location",
      description: "Centrally situated at 437/B2, Galle Road in Panadura, providing easy access and parking for local residents and businesses."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase Grid */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-card border border-slate-100 h-48 sm:h-56">
                    <img
                      src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=600&q=80"
                      alt="Digital Photo Lab Printing"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-card border border-slate-100 h-60 sm:h-72">
                    <img
                      src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80"
                      alt="Custom Photo Framing"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="rounded-2xl overflow-hidden shadow-card border border-slate-100 h-60 sm:h-72">
                    <img
                      src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80"
                      alt="Photo Enlargement Output"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-card border border-slate-100 h-48 sm:h-56">
                    <img
                      src="https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=600&q=80"
                      alt="Custom Sticker Printing"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Central badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-2xl bg-slate-900 text-white shadow-2xl border border-slate-700 text-center">
                <Award className="w-6 h-6 text-amber-400 mx-auto mb-1" />
                <p className="text-xs font-bold uppercase tracking-wider text-sky-400">DN Digital Lab</p>
                <p className="text-[11px] text-slate-300 font-medium">Panadura, Sri Lanka</p>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                Local Photo Lab &amp; Digital Printing
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                About DN Digital Colour Lab
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              Located on Galle Road in Panadura, <strong className="text-slate-900 font-semibold">{businessInfo.legalName}</strong> is your local destination for premium photographic printing, custom framing, and professional digital printing services.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              We specialize in bringing visual moments to life. Whether you need crisp digital photo prints for family albums, large-format enlargements for your living room wall, handcrafted custom frames, custom brand stickers, or urgent document prints, we combine photographic attention to detail with dependable turnaround.
            </p>

            {/* Inclusions checklist */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-600 mt-1 shrink-0" />
                <span className="text-sm font-medium text-slate-700">Dedicated photo papers &amp; genuine inks</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-600 mt-1 shrink-0" />
                <span className="text-sm font-medium text-slate-700">Custom moulding frame assembly</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-600 mt-1 shrink-0" />
                <span className="text-sm font-medium text-slate-700">Convenient location with easy Galle Road access</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-600 mt-1 shrink-0" />
                <span className="text-sm font-medium text-slate-700">Prompt turnaround for urgent printing tasks</span>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-slate-50 hover:bg-sky-50/50 border border-slate-100 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white shadow-xs border border-slate-200/60 flex items-center justify-center text-sky-600 mb-2.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Action */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700"
              >
                <span>Visit our lab on Galle Road</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

