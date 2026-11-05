import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';

export const Gallery: React.FC = () => {
  const { content } = useContent();
  const { gallery } = content;
  const [activeImage, setActiveImage] = useState<{ src: string; caption: string } | null>(null);

  const openLightbox = (src: string, caption: string) => {
    setActiveImage({ src, caption });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };

  const showcaseItems = [
    {
      src: "/images/wedding-prints-showcase.jpg",
      caption: "Wedding Thank You Cards & Album Prints",
      category: "Photo Prints & Albums"
    },
    {
      src: "/images/lab-operator-press.jpg",
      caption: "Real-Time Digital Press Calibration",
      category: "Lab Operation"
    },
    {
      src: "/images/offset-services-flyer.jpg",
      caption: "DN Digital Offset Commercial Products",
      category: "Commercial Offset"
    },
    {
      src: "/images/xerox-production-press.jpg",
      caption: "Xerox Digital Production Engine",
      category: "Digital Press"
    },
    {
      src: "/images/dn-lab-team.jpg",
      caption: "12+ Panadura Technicians & Artisans",
      category: "Our Team"
    },
    {
      src: "/images/wedding-prints-showcase.jpg",
      caption: "Studio Finished Portrait & Certificate Framing",
      category: "Custom Framing"
    }
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-surface-container-lowest border-b border-outline-variant/20" id="gallery">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-label-md font-label-md uppercase tracking-wider text-secondary font-semibold block mb-2">
                {gallery.tagline}
              </span>
              <h2 className="text-headline-md md:text-headline-lg font-headline-md md:font-headline-lg text-on-surface font-bold tracking-tight">
                {gallery.title}
              </h2>
            </div>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-md">
              {gallery.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface shadow-sm cursor-pointer"
                onClick={() => openLightbox(item.src, item.caption)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={item.caption}
                    src={item.src}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <div>
                    <span className="text-label-sm font-label-sm text-primary-fixed uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="text-title-md font-title-md text-inverse-on-surface font-semibold">
                      {item.caption}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={activeImage.src} 
              alt={activeImage.caption} 
              className="max-h-[80vh] max-w-full rounded-xl object-contain shadow-2xl border border-white/20"
            />
            <p className="mt-3 text-white text-body-md font-medium text-center">
              {activeImage.caption}
            </p>
            <button 
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/80 hover:text-white flex items-center gap-1 text-label-md bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm"
            >
              <span className="material-symbols-outlined text-sm">close</span>
              <span>Close</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
