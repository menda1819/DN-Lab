import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleInquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSubmitted(false);
      form.reset();
    }, 5000);
  };

  return (
<section className="py-16 md:py-24 bg-surface-container-lowest relative overflow-hidden" id="contact">
  {/* Clearly Visible Equipment Background */}
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    <img 
      src="/images/xerox-production-press.jpg" 
      alt="DN Lab equipment background" 
      className="absolute right-0 bottom-0 w-full lg:w-1/2 h-full object-cover object-right opacity-65"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50" />
    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
  </div>

<div className="relative z-10 max-w-7xl mx-auto px-margin md:px-margin-lg">
<div className="max-w-3xl mb-12">
<span className="text-label-md font-label-md uppercase tracking-wider text-secondary font-semibold block mb-2">Visit &amp; Connect</span>
<h2 className="text-headline-md md:text-headline-lg font-headline-md md:font-headline-lg text-on-surface font-bold tracking-tight">
            Contact &amp; Lab Location
          </h2>
<p className="text-body-lg font-body-lg text-on-surface-variant mt-2">
            We are ready to assist with your printing requirements. Visit our Panadura storefront or connect directly via phone or WhatsApp.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-7 space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="bg-surface p-6 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4">
<span className="material-symbols-outlined">location_on</span>
</div>
<h3 className="text-title-md font-title-md font-bold text-on-surface mb-1">Physical Address</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    DN Digital Colour Lab (Pvt) Ltd<br/>
                    437/B2, Galle Road,<br/>
                    Panadura 12500, Sri Lanka
                  </p>
</div>
<a className="mt-4 inline-flex items-center gap-1.5 text-label-sm font-label-sm text-secondary font-semibold hover:underline" href="https://maps.google.com/?q=437/B2+Galle+Road+Panadura+Sri+Lanka" rel="noopener noreferrer" target="_blank">
<span>Get Directions</span>
<span className="material-symbols-outlined text-sm">open_in_new</span>
</a>
</div>

<div className="bg-surface p-6 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
<span className="material-symbols-outlined">storefront</span>
</div>
<h3 className="text-title-md font-title-md font-bold text-on-surface mb-1">Opening Hours</h3>
<div className="space-y-1 text-body-sm font-body-sm text-on-surface-variant">
<div className="flex justify-between">
<span className="font-medium text-on-surface">Mon – Sat:</span>
<span>8:30 AM – 6:00 PM</span>
</div>
<div className="flex justify-between">
<span className="font-medium text-tertiary">Sunday:</span>
<span className="text-tertiary font-semibold">Closed</span>
</div>
</div>
</div>
<div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center gap-2 text-label-sm font-label-sm text-outline">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span>Open for walk-in consultation</span>
</div>
</div>

<div className="bg-surface p-6 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center mb-4">
<span className="material-symbols-outlined">call</span>
</div>
<h3 className="text-title-md font-title-md font-bold text-on-surface mb-1">Direct Telephone</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant">
                    Immediate studio assistance and order status checks.
                  </p>
<p className="text-headline-sm font-headline-sm font-bold text-on-surface mt-2">+94 77 731 2167</p>
</div>
<a className="mt-4 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-tertiary text-on-tertiary text-label-sm font-label-sm font-semibold hover:opacity-95 transition-opacity" href="tel:+94777312167">
<span className="material-symbols-outlined text-sm">call</span>
<span>Call Now</span>
</a>
</div>

<div className="bg-surface p-6 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-primary-container/20 text-on-primary-container flex items-center justify-center mb-4">
<span className="material-symbols-outlined">chat</span>
</div>
<h3 className="text-title-md font-title-md font-bold text-on-surface mb-1">WhatsApp Direct</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant">
                    Send digital files, photo samples, and custom requests.
                  </p>
<p className="text-headline-sm font-headline-sm font-bold text-on-surface mt-2">+94 77 731 2167</p>
</div>
<a className="mt-4 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-primary-container text-on-primary-container text-label-sm font-label-sm font-semibold hover:opacity-95 transition-opacity" href="https://wa.me/94777312167" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-sm">send</span>
<span>Chat on WhatsApp</span>
</a>
</div>
</div>

<div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/40">
<h3 className="text-title-lg font-title-lg font-bold text-on-surface mb-2">Send a Quick Message</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mb-4">
                Leave your inquiry details below. We reply directly via WhatsApp or telephone during operating hours.
              </p>
<form className="space-y-4" onSubmit={handleInquiry}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Your Name</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface-container-lowest text-body-sm font-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none" placeholder="Kamal Perera" required type="text"/>
</div>
<div>
<label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Phone / WhatsApp Number</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface-container-lowest text-body-sm font-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none" placeholder="077 XXXXXXX" required type="tel"/>
</div>
</div>
<div>
<label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Service Required</label>
<select className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface-container-lowest text-body-sm font-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none">
<option>Digital Photo Printing (4R, 5R, etc.)</option>
<option>Photo Enlargement (8R, 12x18, Poster)</option>
<option>Custom Photo Framing &amp; Mounting</option>
<option>Custom Sticker / Decal Printing</option>
<option>Digital Offset Commercial Printing</option>
<option>Other Custom Inquiry</option>
</select>
</div>
<div>
<label className="block text-label-sm font-label-sm text-on-surface-variant mb-1">Your Message or Dimensions</label>
<textarea className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface-container-lowest text-body-sm font-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none" placeholder="Please specify photo quantity, custom dimensions, or frame preferences..." rows={3}></textarea>
</div>
<button className="w-full py-3 bg-secondary text-on-secondary rounded-lg text-label-md font-label-md font-semibold hover:brightness-110 active:scale-[0.99] transition-all" type="submit">
                  Submit Inquiry to Lab
                </button>
{submitted && (
                <p className="text-label-sm font-label-sm text-primary font-semibold text-center" id="form-feedback">
                  Thank you! Your message has been prepared. We will reach out shortly.
                </p>
              )}
</form>
</div>
</div>

<div className="lg:col-span-5 bg-surface p-6 rounded-2xl border border-outline-variant/30 shadow-sm space-y-6">
<div>
<span className="text-label-sm font-label-sm text-primary uppercase font-semibold">Easy Navigation</span>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface mt-1">Galle Road Landmark Guide</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                Located directly on the prime Galle Road stretch in Panadura. Whether arriving by bus or private vehicle from Moratuwa or Wadduwa, our storefront is directly identifiable.
              </p>
</div>

<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center flex-shrink-0 text-label-sm font-label-sm font-bold">1</div>
<div>
<h4 className="text-title-md font-title-md text-on-surface font-semibold">From Panadura Town Clock Tower</h4>
<p className="text-body-sm font-body-sm text-on-surface-variant">Drive or walk approximately 800 meters along Galle Road toward South.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center flex-shrink-0 text-label-sm font-label-sm font-bold">2</div>
<div>
<h4 className="text-title-md font-title-md text-on-surface font-semibold">Address No: 437/B2</h4>
<p className="text-body-sm font-body-sm text-on-surface-variant">Look for the prominent <strong>DN Digital Offset</strong> storefront board with the CMYK pixel pattern.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center flex-shrink-0 text-label-sm font-label-sm font-bold">3</div>
<div>
<h4 className="text-title-md font-title-md text-on-surface font-semibold">Parking Availability</h4>
<p className="text-body-sm font-body-sm text-on-surface-variant">Roadside customer vehicle bay available for quick file drop-offs and finished frame pickups.</p>
</div>
</div>
</div>

<div className="rounded-xl overflow-hidden border border-outline-variant/40 bg-surface-container relative">
<div className="w-full h-48 bg-cover bg-center" data-alt="Stylized graphic street map representing Panadura coastal town with prominent Galle Road route marked clearly in high contrast design. The map indicates coastal proximity, town center landmarks, and clean graphic aesthetics." data-location="Panadura" style={{ backgroundImage: `url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuAfkfpyKMGgazR4qUFRntcJE7TAFC55GAiMYWQUZBN7tZ9bwhHDOuQ_rDqRZ-gjo9erxIpfJ0RXwZu-rhNm8nSJ01mukqtIapjg4CFo3e0sZZ_hTuHNS82-PAyDRc5ME8mtzSTTifHVghfWBP1XshS__uAEeehzxFwk1E8r8FyeFBlnr09PcFP23THK56brKWmepOSYdIpc91nxSgU60pbUbOWflIbX9hGwzumsvwI\")` }}></div>
<div className="p-4 bg-surface-container-lowest border-t border-outline-variant/30 flex items-center justify-between">
<div>
<div className="text-label-sm font-label-sm font-bold text-on-surface">Panadura 12500, Sri Lanka</div>
<div className="text-label-sm font-label-sm text-outline">Coordinates &amp; Route Navigation</div>
</div>
<a className="px-3 py-1.5 bg-secondary text-on-secondary text-label-sm font-label-sm rounded-lg hover:brightness-110 transition-all" href="https://maps.google.com/?q=437/B2+Galle+Road+Panadura+Sri+Lanka" rel="noopener noreferrer" target="_blank">
                  Open Map
                </a>
</div>
</div>
</div>
</div>
</div>
</section>


  );
};
