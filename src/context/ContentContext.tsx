import React, { createContext, useContext, useState, useEffect } from 'react';
import { WebsiteContent, HeroContent, AboutContent, WhyUsContent, BusinessContent, ProductsContent } from '../types/content';
import { defaultWebsiteContent } from '../data/defaultContent';
import { ProductItem } from '../data/products';
import { ServiceItem } from '../data/services';
import { GalleryItem } from '../data/gallery';

const STORAGE_KEY = 'dn_lab_website_content_v1';

interface ContentContextType {
  content: WebsiteContent;
  updateBusiness: (updates: Partial<BusinessContent>) => void;
  updateHero: (updates: Partial<HeroContent>) => void;
  updateAbout: (updates: Partial<AboutContent>) => void;
  updateWhyUs: (updates: Partial<WhyUsContent>) => void;
  updateServices: (items: ServiceItem[]) => void;
  updateServiceItem: (id: string, updates: Partial<ServiceItem>) => void;
  updateProducts: (items: ProductItem[]) => void;
  updateProductsMeta: (updates: Partial<Omit<ProductsContent, 'items'>>) => void;
  updateProductItem: (id: string, updates: Partial<ProductItem>) => void;
  addProductItem: (item: ProductItem) => void;
  deleteProductItem: (id: string) => void;
  updateGallery: (items: GalleryItem[]) => void;
  updateGalleryItem: (id: string, updates: Partial<GalleryItem>) => void;
  resetToDefaults: () => void;
  exportJson: () => string;
  importJson: (jsonStr: string) => { success: boolean; error?: string };
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<WebsiteContent>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Deep merge with default to ensure any missing fields exist
        return {
          ...defaultWebsiteContent,
          ...parsed,
          business: { ...defaultWebsiteContent.business, ...(parsed.business || {}) },
          hero: { ...defaultWebsiteContent.hero, ...(parsed.hero || {}) },
          about: { ...defaultWebsiteContent.about, ...(parsed.about || {}) },
          whyUs: { ...defaultWebsiteContent.whyUs, ...(parsed.whyUs || {}) },
          services: {
            ...defaultWebsiteContent.services,
            ...(parsed.services || {}),
            items: parsed.services?.items || defaultWebsiteContent.services.items
          },
          products: {
            ...defaultWebsiteContent.products,
            ...(parsed.products || {}),
            items: parsed.products?.items || defaultWebsiteContent.products.items
          },
          gallery: {
            ...defaultWebsiteContent.gallery,
            ...(parsed.gallery || {}),
            items: parsed.gallery?.items || defaultWebsiteContent.gallery.items
          }
        };
      }
    } catch (e) {
      console.error('Failed to load custom content from localStorage', e);
    }
    return defaultWebsiteContent;
  });

  // Save to localStorage whenever content changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch (e) {
      console.error('Failed to save content to localStorage', e);
    }
  }, [content]);

  const updateBusiness = (updates: Partial<BusinessContent>) => {
    setContent(prev => ({
      ...prev,
      business: { ...prev.business, ...updates },
      lastUpdated: new Date().toISOString()
    }));
  };

  const updateHero = (updates: Partial<HeroContent>) => {
    setContent(prev => ({
      ...prev,
      hero: { ...prev.hero, ...updates },
      lastUpdated: new Date().toISOString()
    }));
  };

  const updateAbout = (updates: Partial<AboutContent>) => {
    setContent(prev => ({
      ...prev,
      about: { ...prev.about, ...updates },
      lastUpdated: new Date().toISOString()
    }));
  };

  const updateWhyUs = (updates: Partial<WhyUsContent>) => {
    setContent(prev => ({
      ...prev,
      whyUs: { ...prev.whyUs, ...updates },
      lastUpdated: new Date().toISOString()
    }));
  };

  const updateServices = (items: ServiceItem[]) => {
    setContent(prev => ({
      ...prev,
      services: { ...prev.services, items },
      lastUpdated: new Date().toISOString()
    }));
  };

  const updateServiceItem = (id: string, updates: Partial<ServiceItem>) => {
    setContent(prev => ({
      ...prev,
      services: {
        ...prev.services,
        items: prev.services.items.map(item => item.id === id ? { ...item, ...updates } : item)
      },
      lastUpdated: new Date().toISOString()
    }));
  };

  const updateProducts = (items: ProductItem[]) => {
    setContent(prev => ({
      ...prev,
      products: { ...prev.products, items },
      lastUpdated: new Date().toISOString()
    }));
  };

  const updateProductsMeta = (updates: Partial<Omit<ProductsContent, 'items'>>) => {
    setContent(prev => ({
      ...prev,
      products: { ...prev.products, ...updates },
      lastUpdated: new Date().toISOString()
    }));
  };

  const updateProductItem = (id: string, updates: Partial<ProductItem>) => {
    setContent(prev => ({
      ...prev,
      products: {
        ...prev.products,
        items: prev.products.items.map(p => p.id === id ? { ...p, ...updates } : p)
      },
      lastUpdated: new Date().toISOString()
    }));
  };

  const addProductItem = (item: ProductItem) => {
    setContent(prev => ({
      ...prev,
      products: {
        ...prev.products,
        items: [item, ...prev.products.items]
      },
      lastUpdated: new Date().toISOString()
    }));
  };

  const deleteProductItem = (id: string) => {
    setContent(prev => ({
      ...prev,
      products: {
        ...prev.products,
        items: prev.products.items.filter(p => p.id !== id)
      },
      lastUpdated: new Date().toISOString()
    }));
  };

  const updateGallery = (items: GalleryItem[]) => {
    setContent(prev => ({
      ...prev,
      gallery: { ...prev.gallery, items },
      lastUpdated: new Date().toISOString()
    }));
  };

  const updateGalleryItem = (id: string, updates: Partial<GalleryItem>) => {
    setContent(prev => ({
      ...prev,
      gallery: {
        ...prev.gallery,
        items: prev.gallery.items.map(g => g.id === id ? { ...g, ...updates } : g)
      },
      lastUpdated: new Date().toISOString()
    }));
  };

  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setContent({ ...defaultWebsiteContent, lastUpdated: new Date().toISOString() });
  };

  const exportJson = () => {
    return JSON.stringify(content, null, 2);
  };

  const importJson = (jsonStr: string): { success: boolean; error?: string } => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (!parsed.hero || !parsed.business || !parsed.products) {
        return { success: false, error: 'Invalid configuration file format.' };
      }
      setContent({
        ...defaultWebsiteContent,
        ...parsed,
        lastUpdated: new Date().toISOString()
      });
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'JSON parsing error.' };
    }
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        updateBusiness,
        updateHero,
        updateAbout,
        updateWhyUs,
        updateServices,
        updateServiceItem,
        updateProducts,
        updateProductsMeta,
        updateProductItem,
        addProductItem,
        deleteProductItem,
        updateGallery,
        updateGalleryItem,
        resetToDefaults,
        exportJson,
        importJson
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
