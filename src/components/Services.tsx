import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, X, MessageCircle, Phone, Info } from 'lucide-react';
import { servicesData, ServiceItem } from '../data/services';
import { getWhatsAppUrl, businessInfo } from '../data/business';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-100/60 text-sky-700 px-3.5 py-1 rounded-full border border-sky-200">
            Our Confirmed Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Professional Photo Lab &amp; Digital Printing
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Delivering quality prints, custom framing, and digital services crafted with precision right here in Panadura.
          </p>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Consistent Ratio */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
                
                {/* Category Number Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-[11px] font-bold text-sky-400 border border-slate-700">
                  0{index + 1}
                </div>

                {/* Popular Size Pill if available */}
                {service.popularSizes && service.popularSizes.length > 0 && (
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[11px] font-medium text-slate-800 shadow-sm">
                    {service.popularSizes[0]} &amp; more
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2 line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Key feature checklist preview */}
                <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  {service.features.slice(0, 2).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 mt-0.5 shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-md py-1"
                  >
                    <span>View Details &amp; Options</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppUrl(`Hello DN Digital Colour Lab, I would like to inquire about your "${service.title}" service.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
                    title={`Inquire about ${service.title} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Dialog for Detailed Service View */}
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Title in Header */}
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-xs font-semibold text-sky-300 uppercase tracking-wider">
                    Service Overview
                  </span>
                  <h3 className="text-2xl font-bold font-heading mt-0.5">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Description
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {selectedService.fullDescription}
                  </p>
                </div>

                {/* Features List */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Service Capabilities &amp; Specifications
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Sizes & Dimensions */}
                {selectedService.popularSizes && (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Available Standard Sizes &amp; Formats
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.popularSizes.map((size, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-slate-800 border border-slate-200 shadow-xs"
                        >
                          {size}
                        </span>
                      ))}
                      <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-sky-50 text-sky-700 border border-sky-100">
                        Custom Dimensions Available
                      </span>
                    </div>
                  </div>
                )}

                {/* Turnaround Note */}
                {selectedService.turnaroundNote && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs">
                    <Info className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{selectedService.turnaroundNote}</span>
                  </div>
                )}

                {/* Contact CTA in Modal */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-500">
                    Questions or custom orders? Speak with our team.
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <a
                      href={`tel:${businessInfo.contact.phone}`}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Lab</span>
                    </a>
                    <a
                      href={getWhatsAppUrl(`Hello DN Digital Colour Lab, I would like to inquire about "${selectedService.title}".`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

