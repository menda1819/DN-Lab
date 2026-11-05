import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';

export const Products: React.FC = () => {
  const { content } = useContent();
  const { products, business } = content;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Items' },
    { id: 'photo-prints', label: 'Photo Prints' },
    { id: 'enlargements', label: 'Enlargements' },
    { id: 'photo-frames', label: 'Photo Frames' },
    { id: 'print-frame-combos', label: 'Combos' },
    { id: 'custom-stickers', label: 'Custom Stickers' },
    { id: 'other-printing', label: 'Other Printing' },
  ];

  const filteredItems = products.items.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section className="py-16 md:py-24 bg-surface border-b border-outline-variant/20" id="products">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-lg">
        <div className="max-w-3xl mb-8">
          <span className="text-label-md font-label-md uppercase tracking-wider text-primary font-semibold block mb-2">
            {products.tagline}
          </span>
          <h2 className="text-headline-md md:text-headline-lg font-headline-md md:font-headline-lg text-on-surface font-bold tracking-tight">
            {products.title}
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mt-2">
            {products.description}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-label-md font-label-md transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-secondary text-on-secondary shadow-sm"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="catalog-grid">
          {filteredItems.map((item) => {
            const hasPrice = item.priceLKR !== null && item.priceLKR !== undefined;
            const waText = encodeURIComponent(
              `Hi DN Digital Colour Lab, I would like to order "${item.name}"${hasPrice ? ` (LKR ${item.priceLKR})` : ''}. Please guide me on next steps.`
            );
            const waUrl = `https://wa.me/${business.whatsapp}?text=${waText}`;

            return (
              <div
                key={item.id}
                className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between hover:border-secondary/40 transition-all shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-label-sm font-label-sm text-secondary bg-secondary-fixed/50 px-2 py-0.5 rounded">
                      {item.badge || item.categoryLabel}
                    </span>
                    <span className="material-symbols-outlined text-outline text-lg">
                      {item.category === 'photo-frames' || item.category === 'print-frame-combos' ? 'photo_frame' : item.category === 'custom-stickers' ? 'auto_awesome_motion' : 'photo_size_select_actual'}
                    </span>
                  </div>
                  <h3 className="text-title-lg font-title-lg font-bold text-on-surface group-hover:text-secondary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 line-clamp-3">
                    {item.description}
                  </p>
                  {item.sizes && item.sizes.length > 0 && (
                    <div className="mt-3 text-[11px] text-outline font-medium">
                      {item.sizes.slice(0, 2).join(' • ')}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-outline-variant/20">
                  {hasPrice ? (
                    <div className="text-headline-sm font-headline-sm font-bold text-primary">
                      LKR {item.priceLKR!.toLocaleString()} <span className="text-body-sm font-body-sm text-outline font-normal">/ item</span>
                    </div>
                  ) : (
                    <div className="text-headline-sm font-headline-sm font-bold text-secondary">
                      Contact Us <span className="text-body-sm font-body-sm text-outline font-normal">for pricing</span>
                    </div>
                  )}
                  <p className="text-[11px] text-outline mt-0.5 truncate">{item.priceNote}</p>

                  <a
                    className="mt-3 block text-center w-full py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg text-label-sm font-label-sm font-semibold transition-colors"
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Offset Flyer Banner */}
        <div className="mt-10 rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface-container-lowest shadow-sm grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-4 h-52 sm:h-60 overflow-hidden bg-surface-container">
            <img 
              src={products.bannerImage} 
              alt="DN Digital Offset Print Catalog" 
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/offset-services-flyer.jpg';
              }}
            />
          </div>
          <div className="md:col-span-8 p-6 sm:p-8 space-y-2">
            <span className="text-label-sm font-label-sm text-secondary font-semibold uppercase tracking-wider">Commercial &amp; Corporate Orders</span>
            <h4 className="text-title-lg font-title-lg font-bold text-on-surface">Need Custom Wedding Stationery, Leaflets, or Corporate Essentials?</h4>
            <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
              We design and print suppliers essentials, corporate stationeries, calendar printing, leaflets, wedding stationery, mugs, wire-bound documents, posters, and certificates with Panadura roadside pickup.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a 
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-on-secondary rounded-lg text-label-sm font-label-sm font-semibold hover:brightness-110 transition-all" 
                href={`https://wa.me/${business.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20commercial%20offset%20printing`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-sm">chat</span> WhatsApp for Catalog
              </a>
              <a className="inline-flex items-center gap-1.5 text-label-sm font-label-sm font-semibold text-primary hover:underline" href={`tel:${business.phone}`}>
                <span className="material-symbols-outlined text-sm">call</span> Call {business.phoneDisplay}
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
