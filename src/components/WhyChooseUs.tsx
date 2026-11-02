import React from 'react';
import { Star, ShieldCheck, Clock, MapPin, Layers, Frame, Sparkles, Quote } from 'lucide-react';
import { businessInfo } from '../data/business';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Sparkles,
      title: "Quality Photographic Printing",
      description: "Dedicated photo papers and professional calibration ensure accurate skin tones, deep blacks, and lasting colors for family albums and wall art."
    },
    {
      icon: Frame,
      title: "Printing & Framing Under One Roof",
      description: "Complete convenience: pick your photo, choose a frame moulding, and collect a fully finished, ready-to-hang piece without visiting multiple shops."
    },
    {
      icon: Clock,
      title: "Quick Turnaround for Urgent Jobs",
      description: "Need passport photos, rush document prints, or immediate photo gifts? We support fast turnaround times for urgent printing requirements."
    },
    {
      icon: MapPin,
      title: "Convenient Galle Road Location",
      description: "Centrally located at 437/B2 Galle Road in Panadura, easily accessible for motorists, pedestrians, and local businesses."
    },
    {
      icon: Layers,
      title: "Multiple Printing Solutions",
      description: "From individual photo prints and large enlargements to custom packaging stickers, leaflets, and certificates, we cover diverse personal and commercial needs."
    },
    {
      icon: ShieldCheck,
      title: "Attentive Local Service",
      description: "A customer-first approach rooted in the Panadura community, ensuring your memories and printing projects receive personalized care."
    }
  ];

  const testimonials = [
    {
      comment: "Very quick and responsive service for urgent photo prints. The quality and colors came out clean.",
      tag: "Urgent Printing"
    },
    {
      comment: "Got our family wedding photos framed here. Good selection of mouldings and neat glass finishing.",
      tag: "Photo Framing"
    },
    {
      comment: "Convenient location right on Galle Road in Panadura. Dependable photo lab for passport and everyday prints.",
      tag: "Local Service"
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-100/60 px-3.5 py-1 rounded-full border border-sky-200">
            Why Panadura Chooses Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Craftsmanship, Speed &amp; Convenience
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            The photo lab and printing partner dedicated to preserving your moments with care and quality.
          </p>
        </div>

        {/* Value Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 border border-sky-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Google Review Strip */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-200 flex items-center justify-center shrink-0">
                <Star className="w-7 h-7 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-slate-900 font-heading">
                    {businessInfo.rating.score}
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Based on {businessInfo.rating.reviewCount} customer reviews on Google
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-500 text-center lg:text-right max-w-sm">
              Recognized by customers in Panadura and surrounding areas for dependable photo printing and framing.
            </div>
          </div>

          {/* Testimonial Snippets */}
          <div className="grid md:grid-cols-3 gap-6 pt-6">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-slate-50 border border-slate-100/80 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <Quote className="w-4 h-4 text-sky-400" />
                  <p className="text-xs text-slate-700 italic leading-relaxed">
                    "{test.comment}"
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-between border-t border-slate-200/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100/70 px-2 py-0.5 rounded">
                    {test.tag}
                  </span>
                  <span className="text-[10px] text-slate-400">Google Reviewer</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
