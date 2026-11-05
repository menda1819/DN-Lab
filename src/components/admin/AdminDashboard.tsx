import React, { useState } from 'react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { useContent } from '../../context/ContentContext';
import { ImageUploader } from './ImageUploader';
import { ProductItem, productCategories } from '../../data/products';

type Tab = 'products' | 'media' | 'texts' | 'services' | 'contact' | 'settings';

export const AdminDashboard: React.FC = () => {
  const { isAdminPanelOpen, closeAdminPanel, changePassword, logout } = useAdminAuth();
  const {
    content,
    updateBusiness,
    updateHero,
    updateAbout,
    updateWhyUs,
    updateProductsMeta,
    updateProductItem,
    addProductItem,
    deleteProductItem,
    updateServiceItem,
    resetToDefaults,
    exportJson,
    importJson
  } = useContent();

  const [activeTab, setActiveTab] = useState<Tab>('products');
  const [productSearch, setProductSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  // New product form state
  const [newProduct, setNewProduct] = useState<Partial<ProductItem>>({
    name: '',
    category: 'photo-prints',
    categoryLabel: 'Photo Prints',
    description: '',
    sizes: ['Standard Size'],
    priceLKR: null,
    priceNote: 'Contact us for pricing',
    image: '/images/wedding-prints-showcase.jpg',
    popular: false
  });

  // Password change state
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordFeedback, setPasswordFeedback] = useState<{ success?: boolean; message?: string }>({});

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  if (!isAdminPanelOpen) return null;

  const filteredProducts = content.products.items.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
                          p.description.toLowerCase().includes(productSearch.toLowerCase());
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleSaveNewProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name?.trim()) return;

    const id = `custom-product-${Date.now()}`;
    const categoryObj = productCategories.find(c => c.id === newProduct.category);
    const categoryLabel = categoryObj ? categoryObj.label : 'General';

    const fullProduct: ProductItem = {
      id,
      name: newProduct.name.trim(),
      category: (newProduct.category as any) || 'photo-prints',
      categoryLabel,
      description: newProduct.description || '',
      sizes: typeof newProduct.sizes === 'string' ? (newProduct.sizes as string).split(',').map(s => s.trim()) : (newProduct.sizes || ['Standard']),
      priceLKR: newProduct.priceLKR ?? null,
      priceNote: newProduct.priceNote || 'Contact for pricing',
      image: newProduct.image || '/images/wedding-prints-showcase.jpg',
      badge: newProduct.badge,
      popular: !!newProduct.popular
    };

    addProductItem(fullProduct);
    setIsAddingProduct(false);
    setNewProduct({
      name: '',
      category: 'photo-prints',
      categoryLabel: 'Photo Prints',
      description: '',
      sizes: ['Standard Size'],
      priceLKR: null,
      priceNote: 'Contact us for pricing',
      image: '/images/wedding-prints-showcase.jpg',
      popular: false
    });
    showToast('Product added successfully!');
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = changePassword(oldPassword, newPassword);
    setPasswordFeedback(res);
    if (res.success) {
      setOldPassword('');
      setNewPassword('');
      showToast('Admin password changed!');
    }
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(exportJson());
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `dn-digital-backup-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Configuration exported as JSON!');
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const res = importJson(content);
      if (res.success) {
        showToast('Configuration imported successfully!');
      } else {
        alert(res.error || 'Failed to import JSON configuration.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-6xl h-[92vh] bg-surface-container-lowest rounded-3xl shadow-2xl border border-outline-variant/60 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-surface border-b border-outline-variant/30 px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary text-on-secondary flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-xl">tune</span>
            </div>
            <div>
              <h2 className="text-lg font-bold font-display text-on-surface flex items-center gap-2">
                <span>DN Digital Lab Customizer</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed">
                  Admin Panel
                </span>
              </h2>
              <p className="text-xs text-on-surface-variant">
                Live edit prices, backgrounds, section copy, and media across the website
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                showToast('Changes saved and applied live!');
                closeAdminPanel();
              }}
              className="px-4 py-2 rounded-xl bg-secondary text-on-secondary text-xs font-semibold hover:brightness-110 active:scale-95 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">visibility</span>
              <span>Preview Live Site</span>
            </button>
            <button
              onClick={closeAdminPanel}
              className="w-9 h-9 rounded-full flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container transition-colors"
              title="Close panel"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-outline-variant/30 bg-surface-container-low px-6 gap-2 overflow-x-auto flex-shrink-0">
          <button
            onClick={() => setActiveTab('products')}
            className={`py-3 px-3.5 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'products'
                ? 'border-secondary text-secondary bg-surface'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-sm">payments</span>
            <span>Prices &amp; Products ({content.products.items.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('media')}
            className={`py-3 px-3.5 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'media'
                ? 'border-secondary text-secondary bg-surface'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-sm">image</span>
            <span>Backgrounds &amp; Media</span>
          </button>

          <button
            onClick={() => setActiveTab('texts')}
            className={`py-3 px-3.5 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'texts'
                ? 'border-secondary text-secondary bg-surface'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-sm">edit_document</span>
            <span>Headlines &amp; Descriptions</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`py-3 px-3.5 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'services'
                ? 'border-secondary text-secondary bg-surface'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
            <span>Services ({content.services.items.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`py-3 px-3.5 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'contact'
                ? 'border-secondary text-secondary bg-surface'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-sm">contact_phone</span>
            <span>Contact &amp; Hours</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`py-3 px-3.5 text-xs font-semibold border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'settings'
                ? 'border-secondary text-secondary bg-surface'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-sm">settings</span>
            <span>Password &amp; Backup</span>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface-container-lowest/50">
          
          {/* TAB 1: PRODUCTS & PRICES */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              {/* Product Header Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-surface p-4 rounded-2xl border border-outline-variant/30">
                <div className="flex flex-wrap items-center gap-2 flex-1">
                  <div className="relative flex-1 min-w-[200px]">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-base">
                      search
                    </span>
                    <input
                      type="text"
                      placeholder="Search products by name or size..."
                      value={productSearch}
                      onChange={(e) => setProductSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-1 focus:ring-secondary"
                    />
                  </div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="text-xs py-2 px-3 rounded-xl border border-outline-variant bg-surface-container-lowest text-on-surface focus:outline-none"
                  >
                    <option value="all">All Categories</option>
                    {productCategories.filter(c => c.id !== 'all').map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.label}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => setIsAddingProduct(true)}
                  className="px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-semibold hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span className="material-symbols-outlined text-sm">add_circle</span>
                  <span>Add New Product</span>
                </button>
              </div>

              {/* Add Product Modal / Panel */}
              {isAddingProduct && (
                <div className="p-5 rounded-2xl border-2 border-primary/40 bg-surface-container-low space-y-4 animate-scale-in">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-lg">add_box</span>
                      <span>Create New Product Entry</span>
                    </h4>
                    <button
                      type="button"
                      onClick={() => setIsAddingProduct(false)}
                      className="text-xs text-outline hover:text-on-surface"
                    >
                      Cancel
                    </button>
                  </div>

                  <form onSubmit={handleSaveNewProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-on-surface mb-1">Product Title</label>
                      <input
                        type="text"
                        required
                        value={newProduct.name || ''}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        placeholder="e.g. 12x18 Metallic Luster Enlargement"
                        className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-on-surface mb-1">Category</label>
                      <select
                        value={newProduct.category || 'photo-prints'}
                        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value as any })}
                        className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                      >
                        {productCategories.filter(c => c.id !== 'all').map(cat => (
                          <option key={cat.id} value={cat.id}>{cat.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-on-surface mb-1">
                        Price in LKR (Leave empty for 'Contact for pricing')
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-outline font-semibold">LKR</span>
                        <input
                          type="number"
                          value={newProduct.priceLKR ?? ''}
                          onChange={(e) => {
                            const val = e.target.value === '' ? null : Number(e.target.value);
                            setNewProduct({ ...newProduct, priceLKR: val });
                          }}
                          placeholder="e.g. 250 (Optional)"
                          className="w-full pl-12 pr-3 py-2 text-xs rounded-lg border border-outline-variant bg-surface-container-lowest"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-on-surface mb-1">Price Note / Sizing Hint</label>
                      <input
                        type="text"
                        value={newProduct.priceNote || ''}
                        onChange={(e) => setNewProduct({ ...newProduct, priceNote: e.target.value })}
                        placeholder="e.g. Available in Glossy or Matte finish"
                        className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-on-surface mb-1">Available Sizes (Comma separated)</label>
                      <input
                        type="text"
                        value={Array.isArray(newProduct.sizes) ? newProduct.sizes.join(', ') : (newProduct.sizes || '')}
                        onChange={(e) => setNewProduct({ ...newProduct, sizes: e.target.value.split(',').map(s => s.trim()) })}
                        placeholder="e.g. 4R (4x6 in), 5R (5x7 in), 8R (8x10 in)"
                        className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-on-surface mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={newProduct.description || ''}
                        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                        placeholder="Product quality, paper stock, and finish details..."
                        className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <ImageUploader
                        label="Product Thumbnail Photo"
                        currentImage={newProduct.image || '/images/wedding-prints-showcase.jpg'}
                        onImageChange={(url) => setNewProduct({ ...newProduct, image: url })}
                      />
                    </div>

                    <div className="md:col-span-2 flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setIsAddingProduct(false)}
                        className="px-4 py-2 rounded-lg border border-outline-variant text-xs text-on-surface"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-lg bg-primary text-on-primary text-xs font-semibold hover:brightness-110"
                      >
                        Save Product
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Products List & Direct Price Editor */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProducts.map((product) => {
                  const isEditing = editingProductId === product.id;

                  return (
                    <div
                      key={product.id}
                      className="bg-surface rounded-2xl border border-outline-variant/30 p-4 shadow-sm hover:border-secondary/40 transition-all flex flex-col justify-between gap-3"
                    >
                      <div className="flex gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 rounded-xl object-cover border border-outline-variant/40 flex-shrink-0"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/wedding-prints-showcase.jpg';
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-sm font-bold text-on-surface truncate">{product.name}</h4>
                            <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-surface-container text-on-surface-variant flex-shrink-0">
                              {product.categoryLabel}
                            </span>
                          </div>
                          <p className="text-xs text-on-surface-variant line-clamp-2 mt-1">
                            {product.description}
                          </p>
                          <div className="text-[11px] text-outline mt-1 font-medium">
                            Sizes: {product.sizes.join(' • ')}
                          </div>
                        </div>
                      </div>

                      {/* Price Control Section */}
                      <div className="bg-surface-container-low p-3 rounded-xl border border-outline-variant/30 flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-on-surface">Price:</span>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs text-secondary font-bold">LKR</span>
                            <input
                              type="number"
                              placeholder="No price (inquiry)"
                              value={product.priceLKR ?? ''}
                              onChange={(e) => {
                                const val = e.target.value === '' ? null : Number(e.target.value);
                                updateProductItem(product.id, { priceLKR: val });
                              }}
                              className="w-24 text-xs font-semibold px-2.5 py-1 rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary"
                            />
                            {product.priceLKR !== null && (
                              <button
                                type="button"
                                onClick={() => updateProductItem(product.id, { priceLKR: null })}
                                className="text-[10px] text-tertiary hover:underline"
                                title="Remove price and display 'Contact for pricing'"
                              >
                                Clear
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setEditingProductId(isEditing ? null : product.id)}
                            className="px-2.5 py-1 text-xs rounded-lg border border-outline-variant/60 bg-surface-container-lowest hover:bg-surface-container text-on-surface flex items-center gap-1"
                          >
                            <span className="material-symbols-outlined text-xs">edit</span>
                            <span>{isEditing ? 'Close' : 'Edit Details'}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              if (confirm(`Delete "${product.name}"?`)) {
                                deleteProductItem(product.id);
                                showToast('Product deleted.');
                              }
                            }}
                            className="p-1 text-outline hover:text-tertiary rounded transition-colors"
                            title="Delete product"
                          >
                            <span className="material-symbols-outlined text-sm">delete</span>
                          </button>
                        </div>
                      </div>

                      {/* Detailed Editor (when expanded) */}
                      {isEditing && (
                        <div className="mt-2 pt-3 border-t border-outline-variant/30 space-y-3 text-xs">
                          <div>
                            <label className="font-semibold block mb-1">Product Name</label>
                            <input
                              type="text"
                              value={product.name}
                              onChange={(e) => updateProductItem(product.id, { name: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-lg border border-outline-variant bg-surface-container-lowest"
                            />
                          </div>

                          <div>
                            <label className="font-semibold block mb-1">Sizes (Comma separated)</label>
                            <input
                              type="text"
                              value={product.sizes.join(', ')}
                              onChange={(e) => updateProductItem(product.id, { sizes: e.target.value.split(',').map(s => s.trim()) })}
                              className="w-full px-2.5 py-1.5 rounded-lg border border-outline-variant bg-surface-container-lowest"
                            />
                          </div>

                          <div>
                            <label className="font-semibold block mb-1">Price Note</label>
                            <input
                              type="text"
                              value={product.priceNote}
                              onChange={(e) => updateProductItem(product.id, { priceNote: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-lg border border-outline-variant bg-surface-container-lowest"
                            />
                          </div>

                          <div>
                            <label className="font-semibold block mb-1">Description</label>
                            <textarea
                              rows={2}
                              value={product.description}
                              onChange={(e) => updateProductItem(product.id, { description: e.target.value })}
                              className="w-full px-2.5 py-1.5 rounded-lg border border-outline-variant bg-surface-container-lowest"
                            />
                          </div>

                          <ImageUploader
                            label="Product Image"
                            currentImage={product.image}
                            onImageChange={(url) => updateProductItem(product.id, { image: url })}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: BACKGROUNDS & MEDIA */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              <div className="bg-surface p-5 rounded-2xl border border-outline-variant/30 space-y-1">
                <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">wallpaper</span>
                  <span>Section Background Imagery</span>
                </h3>
                <p className="text-xs text-on-surface-variant">
                  Change the main hero background photo, About section background, and Why Us photo. Changes reflect live with the calibrated blur treatments.
                </p>
              </div>

              {/* 1. Hero Background */}
              <div className="bg-surface p-5 rounded-2xl border border-outline-variant/30 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">
                  1. First Page / Hero Section Background
                </h4>
                <ImageUploader
                  label="Hero Section Background Photo"
                  currentImage={content.hero.backgroundImage}
                  onImageChange={(url) => updateHero({ backgroundImage: url })}
                  aspectHint="Recommended: Wide 1920x1080 landscape with soft contrast"
                />

                <ImageUploader
                  label="Hero Right Production Banner Card"
                  currentImage={content.hero.bannerImage}
                  onImageChange={(url) => updateHero({ bannerImage: url })}
                  aspectHint="Equipped Xerox digital press banner"
                />
              </div>

              {/* 2. About Section Background & Cards */}
              <div className="bg-surface p-5 rounded-2xl border border-outline-variant/30 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">
                  2. About Section Media
                </h4>
                <ImageUploader
                  label="About Section Watermark/Background Image"
                  currentImage={content.about.backgroundImage}
                  onImageChange={(url) => updateAbout({ backgroundImage: url })}
                  aspectHint="Xerox Digital Production Press"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {content.about.cards.map((card, idx) => (
                    <div key={idx} className="p-3 rounded-xl border border-outline-variant/40 bg-surface-container-low space-y-2">
                      <div className="text-xs font-bold text-on-surface">Card {idx + 1}: {card.title}</div>
                      <ImageUploader
                        label="Card Photo"
                        currentImage={card.image}
                        onImageChange={(url) => {
                          const updated = [...content.about.cards];
                          updated[idx] = { ...card, image: url };
                          updateAbout({ cards: updated });
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Why Choose Us Section Media */}
              <div className="bg-surface p-5 rounded-2xl border border-outline-variant/30 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">
                  3. Why Choose Us Section Media
                </h4>
                <ImageUploader
                  label="Why Choose Us Background Image"
                  currentImage={content.whyUs.backgroundImage}
                  onImageChange={(url) => updateWhyUs({ backgroundImage: url })}
                  aspectHint="Soft blur background overlay"
                />

                <ImageUploader
                  label="Team Showcase Photo"
                  currentImage={content.whyUs.teamImage}
                  onImageChange={(url) => updateWhyUs({ teamImage: url })}
                  aspectHint="12+ Specialist Panadura Team Photo"
                />
              </div>

              {/* 4. Products Banner Media */}
              <div className="bg-surface p-5 rounded-2xl border border-outline-variant/30 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">
                  4. Commercial Offset Catalogue Flyer Banner
                </h4>
                <ImageUploader
                  label="Offset Services Flyer Banner"
                  currentImage={content.products.bannerImage}
                  onImageChange={(url) => updateProductsMeta({ bannerImage: url })}
                  aspectHint="Commercial Offset Services Flyer"
                />
              </div>
            </div>
          )}

          {/* TAB 3: TEXTS & DESCRIPTIONS */}
          {activeTab === 'texts' && (
            <div className="space-y-6">
              {/* Hero Section Copy */}
              <div className="bg-surface p-5 rounded-2xl border border-outline-variant/30 space-y-4">
                <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">title</span>
                  <span>Hero (First Page) Headlines &amp; Copy</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1">Headline Prefix</label>
                    <input
                      type="text"
                      value={content.hero.headlinePrefix}
                      onChange={(e) => updateHero({ headlinePrefix: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Highlighted Word</label>
                    <input
                      type="text"
                      value={content.hero.headlineHighlight}
                      onChange={(e) => updateHero({ headlineHighlight: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest text-secondary font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Headline Suffix</label>
                    <input
                      type="text"
                      value={content.hero.headlineSuffix}
                      onChange={(e) => updateHero({ headlineSuffix: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Hero Subtitle / Category Label</label>
                  <input
                    type="text"
                    value={content.hero.category}
                    onChange={(e) => updateHero({ category: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Hero Description Paragraph</label>
                  <textarea
                    rows={3}
                    value={content.hero.description}
                    onChange={(e) => updateHero({ description: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {content.hero.badges.map((badge, idx) => (
                    <div key={idx}>
                      <label className="block text-xs font-semibold mb-1">Badge {idx + 1}</label>
                      <input
                        type="text"
                        value={badge}
                        onChange={(e) => {
                          const updated = [...content.hero.badges];
                          updated[idx] = e.target.value;
                          updateHero({ badges: updated });
                        }}
                        className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* About Section Copy */}
              <div className="bg-surface p-5 rounded-2xl border border-outline-variant/30 space-y-4">
                <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">info</span>
                  <span>About Us Section Copy</span>
                </h3>

                <div>
                  <label className="block text-xs font-semibold mb-1">Section Tagline</label>
                  <input
                    type="text"
                    value={content.about.tagline}
                    onChange={(e) => updateAbout({ tagline: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Main Heading</label>
                  <input
                    type="text"
                    value={content.about.title}
                    onChange={(e) => updateAbout({ title: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">About Story Paragraph</label>
                  <textarea
                    rows={3}
                    value={content.about.description}
                    onChange={(e) => updateAbout({ description: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                  />
                </div>
              </div>

              {/* Why Choose Us & Team Copy */}
              <div className="bg-surface p-5 rounded-2xl border border-outline-variant/30 space-y-4">
                <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">groups</span>
                  <span>Why Choose Us &amp; Team Copy</span>
                </h3>

                <div>
                  <label className="block text-xs font-semibold mb-1">Section Heading</label>
                  <input
                    type="text"
                    value={content.whyUs.title}
                    onChange={(e) => updateWhyUs({ title: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Team Headline</label>
                  <input
                    type="text"
                    value={content.whyUs.teamTitle}
                    onChange={(e) => updateWhyUs({ teamTitle: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Team Description</label>
                  <textarea
                    rows={3}
                    value={content.whyUs.teamDescription}
                    onChange={(e) => updateWhyUs({ teamDescription: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="bg-surface p-4 rounded-2xl border border-outline-variant/30">
                <h3 className="text-sm font-bold text-on-surface">Manage Printing &amp; Framing Services</h3>
                <p className="text-xs text-on-surface-variant">Update service descriptions, bullet points, and photos.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.services.items.map((service) => (
                  <div key={service.id} className="bg-surface p-4 rounded-2xl border border-outline-variant/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-on-surface">{service.title}</h4>
                      <span className="text-[10px] text-outline font-mono">ID: {service.id}</span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1">Service Title</label>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => updateServiceItem(service.id, { title: e.target.value })}
                        className="w-full text-xs px-3 py-1.5 rounded-lg border border-outline-variant bg-surface-container-lowest"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1">Short Summary</label>
                      <textarea
                        rows={2}
                        value={service.shortDescription}
                        onChange={(e) => updateServiceItem(service.id, { shortDescription: e.target.value })}
                        className="w-full text-xs px-3 py-1.5 rounded-lg border border-outline-variant bg-surface-container-lowest"
                      />
                    </div>

                    <ImageUploader
                      label="Service Feature Photo"
                      currentImage={service.image}
                      onImageChange={(url) => updateServiceItem(service.id, { image: url })}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: CONTACT & LAB HOURS */}
          {activeTab === 'contact' && (
            <div className="space-y-6 max-w-2xl">
              <div className="bg-surface p-5 rounded-2xl border border-outline-variant/30 space-y-4">
                <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">store</span>
                  <span>DN Digital Lab Panadura Contact Details</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1">Phone Number (Calling)</label>
                    <input
                      type="text"
                      value={content.business.phone}
                      onChange={(e) => updateBusiness({ phone: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">Phone Display Format</label>
                    <input
                      type="text"
                      value={content.business.phoneDisplay}
                      onChange={(e) => updateBusiness({ phoneDisplay: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">WhatsApp Direct Number</label>
                    <input
                      type="text"
                      value={content.business.whatsapp}
                      onChange={(e) => updateBusiness({ whatsapp: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">WhatsApp Display Format</label>
                    <input
                      type="text"
                      value={content.business.whatsappDisplay}
                      onChange={(e) => updateBusiness({ whatsappDisplay: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Official Email Address</label>
                  <input
                    type="email"
                    value={content.business.email}
                    onChange={(e) => updateBusiness({ email: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Full Postal / Lab Address</label>
                  <input
                    type="text"
                    value={content.business.formattedAddress}
                    onChange={(e) => updateBusiness({ formattedAddress: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1">Operating Hours (Weekdays &amp; Sat)</label>
                    <input
                      type="text"
                      value={content.business.openingHours}
                      onChange={(e) => updateBusiness({ openingHours: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Sunday Status</label>
                    <input
                      type="text"
                      value={content.business.sundayHours}
                      onChange={(e) => updateBusiness({ sundayHours: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: SETTINGS & BACKUP */}
          {activeTab === 'settings' && (
            <div className="space-y-6 max-w-2xl">
              {/* Security & Password */}
              <div className="bg-surface p-5 rounded-2xl border border-outline-variant/30 space-y-4">
                <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">security</span>
                  <span>Admin Security &amp; Password</span>
                </h3>

                {passwordFeedback.message && (
                  <div className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                    passwordFeedback.success ? 'bg-primary/10 text-primary border border-primary/30' : 'bg-error/10 text-error border border-error/30'
                  }`}>
                    <span className="material-symbols-outlined text-sm">
                      {passwordFeedback.success ? 'check_circle' : 'warning'}
                    </span>
                    <span>{passwordFeedback.message}</span>
                  </div>
                )}

                <form onSubmit={handlePasswordSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1">Current Password</label>
                    <input
                      type="password"
                      required
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      placeholder="Enter current password"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">New Password (Min 6 characters)</label>
                    <input
                      type="password"
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new admin password"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-secondary text-on-secondary text-xs font-semibold hover:brightness-110 active:scale-95 transition-all shadow-sm"
                  >
                    Update Password
                  </button>
                </form>
              </div>

              {/* Backup & Restore */}
              <div className="bg-surface p-5 rounded-2xl border border-outline-variant/30 space-y-4">
                <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">cloud_sync</span>
                  <span>Backup &amp; Export Configuration</span>
                </h3>
                <p className="text-xs text-on-surface-variant">
                  Export all your customized prices, images, and texts as a single JSON file or import a previous backup.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    onClick={handleExport}
                    className="px-4 py-2 rounded-xl bg-surface-container text-on-surface border border-outline-variant hover:bg-surface-container-high text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">download</span>
                    <span>Download JSON Backup</span>
                  </button>

                  <label className="px-4 py-2 rounded-xl bg-surface-container text-on-surface border border-outline-variant hover:bg-surface-container-high text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors">
                    <span className="material-symbols-outlined text-sm">upload_file</span>
                    <span>Restore from JSON</span>
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportFile}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Danger Zone: Factory Reset */}
              <div className="bg-error/5 p-5 rounded-2xl border border-error/20 space-y-3">
                <h3 className="text-sm font-bold text-error flex items-center gap-2">
                  <span className="material-symbols-outlined text-error">dangerous</span>
                  <span>Factory Reset</span>
                </h3>
                <p className="text-xs text-on-surface-variant">
                  Revert all customized prices, background pictures, and text copy back to default official DN Digital Colour Lab defaults.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    if (confirm('Are you sure you want to revert all customizations back to factory defaults? This cannot be undone.')) {
                      resetToDefaults();
                      showToast('Factory defaults restored.');
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-error text-on-error text-xs font-semibold hover:brightness-110 active:scale-95 transition-all shadow-sm flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">restart_alt</span>
                  <span>Reset Everything to Default</span>
                </button>
              </div>

              {/* Logout */}
              <div className="pt-2">
                <button
                  onClick={logout}
                  className="px-4 py-2 rounded-xl bg-surface-container-highest text-on-surface text-xs font-semibold hover:bg-error/10 hover:text-error transition-colors flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">logout</span>
                  <span>Log Out of Admin Session</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Floating Toast Notification */}
        {toastMessage && (
          <div className="absolute bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-inverse-surface text-inverse-on-surface text-xs font-semibold shadow-2xl flex items-center gap-2 animate-bounce">
            <span className="material-symbols-outlined text-sm text-[#93C90E]">check_circle</span>
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};
