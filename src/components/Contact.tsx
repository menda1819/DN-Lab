import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { businessInfo, getStoreStatus, getWhatsAppUrl } from '../data/business';

export const Contact: React.FC = () => {
  const storeStatus = getStoreStatus();
  const [inquiryTopic, setInquiryTopic] = useState('Digital Photo Printing');
  const [customNote, setCustomNote] = useState('');

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello DN Digital Colour Lab, I would like to inquire regarding ${inquiryTopic}.${customNote.trim() ? ` Details: ${customNote.trim()}` : ''}`;
    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100">
            Reach Out to Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Visit Our Lab or Contact Us Directly
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Conveniently located on Galle Road, Panadura. Call or message us on WhatsApp for fast answers and quotes.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Hours Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Information Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                    Official Business Details
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white mt-1">
                    {businessInfo.legalName}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Digital Photo Printing &bull; Photo Lab &bull; Digital Printing Services
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-slate-800 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-sky-400 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Lab Address</p>
                      <p className="text-white font-medium leading-relaxed mt-0.5">
                        {businessInfo.address.formatted}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-sky-400 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Telephone &amp; Hotline</p>
                      <a
                        href={`tel:${businessInfo.contact.phone}`}
                        className="text-white hover:text-sky-400 font-semibold text-base mt-0.5 inline-block transition-colors"
                      >
                        {businessInfo.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-amber-400 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-slate-400 font-medium">Opening Hours</p>
                        {/* Live Status Pill */}
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 border border-slate-700">
                          <span className={`w-1.5 h-1.5 rounded-full ${storeStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
                          <span className={storeStatus.isOpen ? 'text-emerald-300' : 'text-rose-300'}>
                            {storeStatus.statusText}
                          </span>
                        </span>
                      </div>
                      <p className="text-white font-medium text-xs mt-1">
                        {businessInfo.hours.days}
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">
                        {businessInfo.hours.sunday}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${businessInfo.contact.phone}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-md shadow-sky-900/30"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={getWhatsAppUrl("Hello DN Digital Colour Lab, I would like to get a quote.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-950/40"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={businessInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-span-1 sm:col-span-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-sky-400" />
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>

              </div>
            </div>

            {/* Quick WhatsApp Topic Inquiry Box (Strictly opens WhatsApp, no backend form) */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <h4 className="text-sm font-bold text-slate-900 font-heading">
                  Quick WhatsApp Inquiry
                </h4>
              </div>
              <p className="text-xs text-slate-600 mb-4">
                Select your service topic and click to open a direct WhatsApp chat with prefilled details.
              </p>

              <form onSubmit={handleLaunchWhatsApp} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Topic of Inquiry
                  </label>
                  <select
                    value={inquiryTopic}
                    onChange={(e) => setInquiryTopic(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg text-xs bg-white border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="Digital Photo Printing">Digital Photo Printing</option>
                    <option value="Photo Enlargement">Photo Enlargement</option>
                    <option value="Photo Framing">Photo Framing</option>
                    <option value="Print & Frame Package">Print &amp; Frame Package</option>
                    <option value="Custom Sticker Printing">Custom Sticker Printing</option>
                    <option value="Digital Document Printing">Digital Document Printing</option>
                    <option value="General Pricing & Turnaround">General Pricing &amp; Turnaround</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Optional Details (e.g. size, quantity)
                  </label>
                  <input
                    type="text"
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="e.g., 20 prints of 4R, or 12x18 with frame..."
                    className="w-full px-3 py-2 rounded-lg text-xs bg-white border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat Now</span>
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: Google Maps Location & Visual Guide */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50 rounded-2xl p-2 sm:p-3 border border-slate-200 overflow-hidden shadow-card">
              {/* Map Title Bar */}
              <div className="p-3 flex items-center justify-between text-xs border-b border-slate-200/80 bg-white rounded-t-xl mb-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-600" />
                  <span className="font-bold text-slate-800">Panadura Galle Road Location</span>
                </div>
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sky-600 hover:text-sky-700 inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="relative w-full h-80 sm:h-96 md:h-[420px] rounded-xl overflow-hidden bg-slate-200">
                <iframe
                  title="DN Digital Colour Lab Location Map"
                  src={businessInfo.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Landmark and Directions note */}
              <div className="p-3 text-xs text-slate-600 bg-white rounded-b-xl mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Located directly on <strong>Galle Road (437/B2)</strong>, Panadura.</span>
                </span>
                <span className="text-slate-400">Postal Code: 12500</span>
              </div>
            </div>

            {/* Visit Preparation Tips */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-sky-600" />
                  Best Times to Visit
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Monday to Saturday between 8:30 AM and 6:00 PM. Morning hours typically offer fastest processing for urgent jobs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-500" />
                  Bring Your Files
                </span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Bring photos on a USB drive, smartphone, memory card, or share high-resolution files directly via WhatsApp before arriving.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
