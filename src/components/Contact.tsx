import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';

export const Contact: React.FC = () => {
  const { content } = useContent();
  const { business, about } = content;
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
          src={about.backgroundImage} 
          alt="DN Lab equipment background" 
          className="absolute right-0 bottom-0 w-full lg:w-1/2 h-full object-cover object-right opacity-65"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/xerox-production-press.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-margin md:px-margin-lg">
        <div className="max-w-3xl mb-12">
          <span className="text-label-md font-label-md uppercase tracking-wider text-secondary font-semibold block mb-2">
            Visit &amp; Connect
          </span>
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
                    {business.legalName}<br/>
                    {business.formattedAddress}
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
                      <span>{business.openingHours.replace('Monday – Saturday: ', '')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-tertiary">Sunday:</span>
                      <span className="text-tertiary font-semibold">{business.sundayHours.replace('Sunday: ', '')}</span>
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
                  <p className="text-headline-sm font-headline-sm font-bold text-on-surface mt-2">{business.phoneDisplay}</p>
                </div>
                <a className="mt-4 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-tertiary text-on-tertiary text-label-sm font-label-sm font-semibold hover:opacity-95 transition-opacity" href={`tel:${business.phone}`}>
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
                  <p className="text-headline-sm font-headline-sm font-bold text-on-surface mt-2">{business.whatsappDisplay}</p>
                </div>
                <a className="mt-4 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-primary-container text-on-primary-container text-label-sm font-label-sm font-semibold hover:opacity-95 transition-opacity" href={`https://wa.me/${business.whatsapp}`} rel="noopener noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-sm">send</span>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/40">
              <h3 className="text-title-lg font-title-lg font-bold text-on-surface mb-4">Send a Quick Message</h3>
              <form onSubmit={handleInquiry} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1" htmlFor="name">Your Name</label>
                    <input className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface text-body-sm font-body-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" id="name" placeholder="Kamal Perera" required type="text"/>
                  </div>
                  <div>
                    <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1" htmlFor="phone">Phone / WhatsApp Number</label>
                    <input className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface text-body-sm font-body-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" id="phone" placeholder="07X XXX XXXX" required type="tel"/>
                  </div>
                </div>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1" htmlFor="service-type">Service Required</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface text-body-sm font-body-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" id="service-type">
                    <option value="photo-printing">Digital Photo Prints (4R, 5R, 8R, etc.)</option>
                    <option value="enlargement">Photo Enlargement / Wall Art</option>
                    <option value="framing">Photo Framing / Mounts</option>
                    <option value="stickers">Custom Sticker Printing</option>
                    <option value="commercial">Commercial Offset Printing</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-label-sm font-label-sm text-on-surface-variant mb-1" htmlFor="message">Message &amp; Dimensions / Quantity</label>
                  <textarea className="w-full px-4 py-2.5 rounded-lg border border-outline-variant bg-surface text-body-sm font-body-sm focus:outline-none focus:ring-2 focus:ring-secondary/50" id="message" placeholder="Please describe sizes, frame types, quantity, or any urgent delivery requirements..." required rows={3}></textarea>
                </div>
                <button className="w-full py-3 px-6 rounded-lg bg-secondary text-on-secondary text-label-md font-label-md font-semibold hover:brightness-110 active:scale-[0.99] transition-all shadow-sm" type="submit">
                  Submit Contact Request
                </button>
                {submitted && (
                  <div className="p-3 bg-secondary-fixed text-on-secondary-fixed text-body-sm rounded-lg text-center animate-fade-in font-medium">
                    Thank you! Your inquiry has been noted. We will reach out promptly.
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface rounded-2xl border border-outline-variant/30 overflow-hidden shadow-sm">
              <div className="p-6 border-b border-outline-variant/20">
                <h3 className="text-title-lg font-title-lg font-bold text-on-surface">Galle Road Storefront Guide</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                  Located along the main Galle Road corridor in Panadura, easily accessible whether coming from Colombo or Moratuwa southbound.
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3 text-body-sm font-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-lg flex-shrink-0 mt-0.5">directions_car</span>
                    <span>Roadside parking options available directly fronting the lab.</span>
                  </div>
                  <div className="flex items-start gap-3 text-body-sm font-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-lg flex-shrink-0 mt-0.5">near_me</span>
                    <span>Walking distance from Panadura Clock Tower and Bus Terminal (approx. 500m).</span>
                  </div>
                  <div className="flex items-start gap-3 text-body-sm font-body-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-tertiary text-lg flex-shrink-0 mt-0.5">pin_drop</span>
                    <span>Opposite commercial establishments with prominent DN Digital Colour Lab signboard.</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-surface-container">
                <div className="relative w-full h-64 rounded-xl overflow-hidden border border-outline-variant/40 bg-surface-container-high">
                  <iframe
                    title="DN Digital Colour Lab Panadura Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.3394593815343!2d79.9048827!3d6.7130283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae247a3e7b12271%3A0x628043b2e591410!2sGalle%20Rd%2C%20Panadura%2012500!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute bottom-3 right-3">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=DN+Digital+Colour+Lab+437%2FB2+Galle+Road+Panadura+Sri+Lanka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-secondary text-label-sm font-semibold shadow-md hover:bg-white transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                      <span>Open in Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
