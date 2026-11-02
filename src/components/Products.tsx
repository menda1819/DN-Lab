import React, { useState, useMemo } from 'react';
import { Search, MessageCircle, HelpCircle, Phone, Sparkles, Filter } from 'lucide-react';
import { productsData, productCategories, ProductItem } from '../data/products';
import { getWhatsAppUrl, businessInfo } from '../data/business';

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sizes.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100">
            Product Catalogue &amp; Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Explore Available Products &amp; Sizes
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Browse our standard catalogue options. For confirmed rates and custom sizes, reach out to our Panadura team via WhatsApp or telephone.
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="mb-10 space-y-4">
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product name or size (e.g. 4R, Frame, Sticker, A4)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none px-1">
            {productCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Transparency Banner */}
        <div className="mb-10 p-4 rounded-xl bg-sky-50/70 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sky-900">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
            <span>
              <strong>Verified Pricing Policy:</strong> Unconfirmed prices display <em>“Contact us for pricing”</em> rather than estimated amounts. Our team confirms exact costs tailored to your quantity and paper/moulding stock.
            </span>
          </div>
          <a
            href={getWhatsAppUrl("Hello DN Digital Colour Lab, could you please provide a price list for photo prints and frames?")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-semibold text-sky-700 hover:text-sky-900 underline underline-offset-2"
          >
            Request Official Price List →
          </a>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
            <Filter className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-700 font-semibold text-base">No matching products found</p>
            <p className="text-slate-500 text-xs mt-1">Try clearing your search query or selecting a different category.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-sky-600 text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Custom Order Callout Footer */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Need a Custom Size or Large Batch?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Have specific framing or printing dimensions?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We handle non-standard frame cuts, custom sticker contour cutting, and bulk album or corporate orders.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={`tel:${businessInfo.contact.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call Lab</span>
            </a>
            <a
              href={getWhatsAppUrl("Hello DN Digital Colour Lab, I have a custom printing / framing size inquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-900/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

interface ProductCardProps {
  product: ProductItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Product Image */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-60" />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide bg-sky-600 text-white shadow-sm">
              {product.badge}
            </span>
          )}

          {/* Category Tag */}
          <span className="absolute bottom-2.5 left-3 px-2 py-0.5 rounded text-[10px] font-medium bg-slate-900/80 backdrop-blur-md text-slate-200 border border-slate-700">
            {product.categoryLabel}
          </span>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-3">
          <div>
            <h3 className="text-base font-bold text-slate-900 font-heading group-hover:text-sky-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mt-1 line-clamp-2">
              {product.description}
            </p>
          </div>

          {/* Available Sizes Pills */}
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Available Formats / Sizes:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.map((size, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200/60"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing & Inquiry Footer */}
      <div className="px-5 pb-5 pt-3 border-t border-slate-100 space-y-3 bg-slate-50/50">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Price (LKR)
            </span>
            {product.priceLKR !== null ? (
              <span className="text-base font-extrabold text-slate-900 font-heading">
                Rs. {product.priceLKR.toLocaleString()}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 bg-sky-100/70 px-2.5 py-1 rounded-md border border-sky-200">
                <HelpCircle className="w-3 h-3 text-sky-600 shrink-0" />
                <span>Contact us for pricing</span>
              </span>
            )}
          </div>
        </div>

        {/* Price Note */}
        <p className="text-[11px] text-slate-500 italic leading-snug">
          {product.priceNote}
        </p>

        {/* Inquire on WhatsApp CTA */}
        <a
          href={getWhatsAppUrl(`Hello DN Digital Colour Lab, I would like to inquire about "${product.name}". Could you share the current pricing and availability?`)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>Inquire via WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

