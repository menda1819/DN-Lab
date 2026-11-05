import React from 'react';
import { useContent } from '../context/ContentContext';

export const Services: React.FC = () => {
  const { content } = useContent();
  const { services, hero } = content;

  return (
    <section className="py-16 md:py-24 bg-surface-container-lowest border-b border-outline-variant/20 relative overflow-hidden" id="services">
      {/* Professional Ambient Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute -left-20 top-1/4 w-1/2 h-2/3 bg-cover bg-center opacity-[0.06] mix-blend-multiply"
          style={{ backgroundImage: `url('${hero.backgroundImage}')` }}
        />
        <div 
          className="absolute -right-20 bottom-10 w-1/2 h-1/2 bg-contain bg-no-repeat bg-right opacity-[0.07] mix-blend-multiply"
          style={{ backgroundImage: "url('/images/xerox-production-press.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest via-surface-container-lowest/95 to-surface-container-lowest" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-margin md:px-margin-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-label-md font-label-md uppercase tracking-wider text-secondary font-semibold block mb-2">
              {services.tagline}
            </span>
            <h2 className="text-headline-md md:text-headline-lg font-headline-md md:font-headline-lg text-on-surface font-bold tracking-tight">
              {services.title}
            </h2>
          </div>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-md">
            {services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service, idx) => {
            const isBlue = idx % 2 === 0;

            return (
              <div 
                key={service.id}
                className="group rounded-2xl border border-outline-variant/30 bg-surface overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden bg-surface-container">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    alt={service.title} 
                    src={service.image}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/wedding-prints-showcase.jpg';
                    }}
                  />
                  <div className={`absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-label-sm font-label-sm font-semibold ${
                    isBlue ? 'text-secondary' : 'text-primary'
                  }`}>
                    {service.turnaroundNote ? service.turnaroundNote.slice(0, 20) : 'Panadura Lab'}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">{service.title}</h3>
                    <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                    <span className="text-label-sm font-label-sm text-outline">
                      {service.popularSizes?.[0] || 'Custom Sizing'}
                    </span>
                    <a className="text-label-md font-label-md text-primary font-semibold hover:underline inline-flex items-center gap-1" href="#contact">
                      Inquire Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
