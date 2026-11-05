import React, { useState } from 'react';

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Items' },
    { id: 'prints', label: 'Photo Prints' },
    { id: 'enlargements', label: 'Enlargements' },
    { id: 'frames', label: 'Photo Frames' },
    { id: 'stickers', label: 'Custom Stickers' },
    { id: 'commercial', label: 'Other Printing' },
  ];

  return (
<section className="py-16 md:py-24 bg-surface border-b border-outline-variant/20" id="products">
<div className="max-w-7xl mx-auto px-margin md:px-margin-lg">
<div className="max-w-3xl mb-8">
<span className="text-label-md font-label-md uppercase tracking-wider text-primary font-semibold block mb-2">Catalog &amp; Pricing</span>
<h2 className="text-headline-md md:text-headline-lg font-headline-md md:font-headline-lg text-on-surface font-bold tracking-tight">
            Product Catalogue &amp; Price Guide
          </h2>
<p className="text-body-lg font-body-lg text-on-surface-variant mt-2">
            Clear, transparent pricing on standard formats. For custom dimensions or bulk inquiries, please contact us.
          </p>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                onClick={() => setSelectedCategory(tab.id)}
                className={`catalog-tab px-4 py-2 rounded-full text-label-md font-label-md transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-secondary text-on-secondary"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="catalog-grid">

<div className={`catalog-card bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between ${selectedCategory === "all" || selectedCategory === "prints" ? "" : "hidden"}`} data-category="prints">
<div>
<div className="flex items-center justify-between mb-3">
<span className="text-label-sm font-label-sm text-secondary bg-secondary-fixed/50 px-2 py-0.5 rounded">Standard Print</span>
<span className="material-symbols-outlined text-outline text-lg">photo_size_select_actual</span>
</div>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface">4R (4x6) Studio Glossy Print</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                High-gloss premium paper with vivid color saturation. Ideal for family albums and portfolio sets.
              </p>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20">
<div className="text-headline-sm font-headline-sm font-bold text-primary">LKR 65 <span className="text-body-sm font-body-sm text-outline font-normal">/ print</span></div>
<a className="mt-3 block text-center w-full py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-label-sm font-label-sm font-semibold transition-colors" href="https://wa.me/94777312167?text=Hi%2C%20I%20would%20like%20to%20order%204R%20photo%20prints" target="_blank">
                Order via WhatsApp
              </a>
</div>
</div>

<div className={`catalog-card bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between ${selectedCategory === "all" || selectedCategory === "prints" ? "" : "hidden"}`} data-category="prints">
<div>
<div className="flex items-center justify-between mb-3">
<span className="text-label-sm font-label-sm text-secondary bg-secondary-fixed/50 px-2 py-0.5 rounded">Portrait Spec</span>
<span className="material-symbols-outlined text-outline text-lg">portrait</span>
</div>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface">5R (5x7) Premium Portrait Print</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Crisp skin tones and shadow gradation on heavy photo stock. Popular for school and desk portraits.
              </p>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20">
<div className="text-headline-sm font-headline-sm font-bold text-primary">LKR 140 <span className="text-body-sm font-body-sm text-outline font-normal">/ print</span></div>
<a className="mt-3 block text-center w-full py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-label-sm font-label-sm font-semibold transition-colors" href="https://wa.me/94777312167?text=Hi%2C%20I%20would%20like%20to%20order%205R%20photo%20prints" target="_blank">
                Order via WhatsApp
              </a>
</div>
</div>

<div className={`catalog-card bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between ${selectedCategory === "all" || selectedCategory === "enlargements" ? "" : "hidden"}`} data-category="enlargements">
<div>
<div className="flex items-center justify-between mb-3">
<span className="text-label-sm font-label-sm text-primary bg-primary-fixed/50 px-2 py-0.5 rounded">Enlargement</span>
<span className="material-symbols-outlined text-outline text-lg">aspect_ratio</span>
</div>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface">8R (8x10) Enlargement</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Detailed studio enlargement, calibrated for graduation, studio headshots, and event keepsakes.
              </p>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20">
<div className="text-headline-sm font-headline-sm font-bold text-primary">LKR 380 <span className="text-body-sm font-body-sm text-outline font-normal">/ print</span></div>
<a className="mt-3 block text-center w-full py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-label-sm font-label-sm font-semibold transition-colors" href="https://wa.me/94777312167?text=Hi%2C%20I%20would%20like%20to%20order%208R%20enlargement" target="_blank">
                Order via WhatsApp
              </a>
</div>
</div>

<div className={`catalog-card bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between ${selectedCategory === "all" || selectedCategory === "enlargements" ? "" : "hidden"}`} data-category="enlargements">
<div>
<div className="flex items-center justify-between mb-3">
<span className="text-label-sm font-label-sm text-primary bg-primary-fixed/50 px-2 py-0.5 rounded">Gallery Poster</span>
<span className="material-symbols-outlined text-outline text-lg">panorama</span>
</div>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface">10R / 12x18 Studio Enlargement</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                High-density digital press output designed for prominent wall displays and celebration banners.
              </p>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20">
<div className="text-headline-sm font-headline-sm font-bold text-primary">LKR 750 <span className="text-body-sm font-body-sm text-outline font-normal">/ print</span></div>
<a className="mt-3 block text-center w-full py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-label-sm font-label-sm font-semibold transition-colors" href="https://wa.me/94777312167?text=Hi%2C%20I%20would%20like%20to%20order%2012x18%20enlargement" target="_blank">
                Order via WhatsApp
              </a>
</div>
</div>

<div className={`catalog-card bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between ${selectedCategory === "all" || selectedCategory === "frames" ? "" : "hidden"}`} data-category="frames">
<div>
<div className="flex items-center justify-between mb-3">
<span className="text-label-sm font-label-sm text-tertiary bg-tertiary-fixed/50 px-2 py-0.5 rounded">Frame Package</span>
<span className="material-symbols-outlined text-outline text-lg">frame_inspect</span>
</div>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface">12x18 Custom Wooden Framed Photo</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Full package including high-res print, glass protection, backed board, and ready-to-hang wooden border.
              </p>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20">
<div className="text-headline-sm font-headline-sm font-bold text-primary">LKR 2,400 <span className="text-body-sm font-body-sm text-outline font-normal">/ package</span></div>
<a className="mt-3 block text-center w-full py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-label-sm font-label-sm font-semibold transition-colors" href="https://wa.me/94777312167?text=Hi%2C%20I%20would%20like%20to%20order%2012x18%20framed%20package" target="_blank">
                Order via WhatsApp
              </a>
</div>
</div>

<div className={`catalog-card bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between ${selectedCategory === "all" || selectedCategory === "frames" ? "" : "hidden"}`} data-category="frames">
<div>
<div className="flex items-center justify-between mb-3">
<span className="text-label-sm font-label-sm text-tertiary bg-tertiary-fixed/50 px-2 py-0.5 rounded">Luxury Showcase</span>
<span className="material-symbols-outlined text-outline text-lg">wallpaper</span>
</div>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface">16x24 Luxury Wall Frame &amp; Print</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Prestigious presentation with wider synthetic or timber moulding, UV non-reflective glass option, and hanging wire.
              </p>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20">
<div className="text-headline-sm font-headline-sm font-bold text-primary">LKR 4,800 <span className="text-body-sm font-body-sm text-outline font-normal">/ package</span></div>
<a className="mt-3 block text-center w-full py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-label-sm font-label-sm font-semibold transition-colors" href="https://wa.me/94777312167?text=Hi%2C%20I%20would%20like%20to%20order%2016x24%20luxury%20frame" target="_blank">
                Order via WhatsApp
              </a>
</div>
</div>

<div className={`catalog-card bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between ${selectedCategory === "all" || selectedCategory === "stickers" ? "" : "hidden"}`} data-category="stickers">
<div>
<div className="flex items-center justify-between mb-3">
<span className="text-label-sm font-label-sm text-secondary bg-secondary-fixed/50 px-2 py-0.5 rounded">Vinyl Decal</span>
<span className="material-symbols-outlined text-outline text-lg">cloud_download</span>
</div>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface">Custom Die-Cut Vinyl Stickers (A4 Sheet)</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Water-resistant, peel-and-stick labels with sharp contour cutting. Multiple logos per sheet accepted.
              </p>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20">
<div className="text-headline-sm font-headline-sm font-bold text-primary">LKR 350 <span className="text-body-sm font-body-sm text-outline font-normal">/ sheet</span></div>
<a className="mt-3 block text-center w-full py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-label-sm font-label-sm font-semibold transition-colors" href="https://wa.me/94777312167?text=Hi%2C%20I%20would%20like%20to%20order%20A4%20custom%20stickers" target="_blank">
                Order via WhatsApp
              </a>
</div>
</div>

<div className={`catalog-card bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between ${selectedCategory === "all" || selectedCategory === "commercial" ? "" : "hidden"}`} data-category="commercial">
<div>
<div className="flex items-center justify-between mb-3">
<span className="text-label-sm font-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">Custom Quotes</span>
<span className="material-symbols-outlined text-outline text-lg">tune</span>
</div>
<h3 className="text-title-lg font-title-lg font-bold text-on-surface">Custom Sizes &amp; Bulk Orders</h3>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Have specific album specifications, non-standard dimensions, or commercial volume quantities?
              </p>
</div>
<div className="mt-6 pt-4 border-t border-outline-variant/20">
<div className="text-headline-sm font-headline-sm font-bold text-secondary">Contact Us <span className="text-body-sm font-body-sm text-outline font-normal">for pricing</span></div>
<a className="mt-3 block text-center w-full py-2 bg-secondary text-on-secondary rounded-lg text-label-sm font-label-sm font-semibold hover:brightness-110 transition-all" href="tel:+94777312167">
                Call for Quote
              </a>
</div>
</div>
</div>

{/* Commercial Offset Flyer Banner */}
<div className="mt-10 rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface-container-lowest shadow-sm grid grid-cols-1 md:grid-cols-12 items-center">
  <div className="md:col-span-4 h-52 sm:h-60 overflow-hidden bg-surface-container">
    <img 
      src="/images/offset-services-flyer.jpg" 
      alt="DN Digital Offset Print Catalog" 
      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
    />
  </div>
  <div className="md:col-span-8 p-6 sm:p-8 space-y-2">
    <span className="text-label-sm font-label-sm text-secondary font-semibold uppercase tracking-wider">Commercial &amp; Corporate Orders</span>
    <h4 className="text-title-lg font-title-lg font-bold text-on-surface">Need Custom Wedding Stationery, Leaflets, or Corporate Essentials?</h4>
    <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
      We design and print suppliers essentials, corporate stationeries, calendar printing, leaflets, wedding stationery, mugs, wire-bound documents, posters, and certificates with Panadura roadside pickup.
    </p>
    <div className="pt-2 flex flex-wrap items-center gap-3">
      <a className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-on-secondary rounded-lg text-label-sm font-label-sm font-semibold hover:brightness-110 transition-all" href="https://wa.me/94777312167?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20commercial%20offset%20printing" target="_blank" rel="noopener noreferrer">
        <span className="material-symbols-outlined text-sm">chat</span> WhatsApp for Catalog
      </a>
      <a className="inline-flex items-center gap-1.5 text-label-sm font-label-sm font-semibold text-primary hover:underline" href="tel:+94777312167">
        <span className="material-symbols-outlined text-sm">call</span> Call 077 731 2167
      </a>
    </div>
  </div>
</div>

<div className="mt-8 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center gap-3">
<span className="material-symbols-outlined text-secondary">info</span>
<p className="text-body-sm font-body-sm text-on-surface-variant">
<strong>Note:</strong> Prices subject to paper stock, glass finishes, and volume discounts. Contact our Panadura lab for instant custom quotations.
          </p>
</div>
</div>
</section>


  );
};
