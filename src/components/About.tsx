import React from 'react';
import { useContent } from '../context/ContentContext';

export const About: React.FC = () => {
  const { content } = useContent();
  const { about } = content;

  return (
    <section className="py-16 md:py-24 bg-surface border-b border-outline-variant/20 relative overflow-hidden" id="about">
      {/* Clearly Visible Xerox Equipment Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img 
          src={about.backgroundImage} 
          alt="Xerox digital production press at DN Digital Colour Lab" 
          className="absolute right-0 top-0 w-full lg:w-3/5 h-full object-cover object-right opacity-65"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/xerox-production-press.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-surface/40" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-surface to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-margin md:px-margin-lg">
        <div className="max-w-3xl mb-12">
          <span className="text-label-md font-label-md uppercase tracking-wider text-primary font-semibold block mb-2">
            {about.tagline}
          </span>
          <h2 className="text-headline-md md:text-headline-lg font-headline-md md:font-headline-lg text-on-surface font-bold tracking-tight">
            {about.title}
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mt-4 leading-relaxed">
            {about.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.cards.map((card, idx) => {
            const isBlue = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className={`bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col justify-between transition-colors group ${
                  isBlue ? 'hover:border-secondary' : 'hover:border-primary'
                }`}
              >
                <div className="relative h-44 overflow-hidden bg-surface-container">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/wedding-prints-showcase.jpg';
                    }}
                  />
                  <div className={`absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded text-label-sm font-label-sm font-semibold ${
                    isBlue ? 'text-secondary' : 'text-primary'
                  }`}>
                    {card.badge}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                      isBlue ? 'bg-secondary-fixed text-on-secondary-fixed' : 'bg-primary-fixed text-on-primary-fixed'
                    }`}>
                      <span className="material-symbols-outlined text-xl">{card.icon || 'photo'}</span>
                    </div>
                    <h3 className="text-title-lg font-title-lg font-bold text-on-surface mb-2">{card.title}</h3>
                    <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className={`mt-5 pt-3 border-t border-outline-variant/20 flex items-center text-label-sm font-label-sm font-semibold ${
                    isBlue ? 'text-secondary' : 'text-primary'
                  }`}>
                    <span>Verified Lab Quality</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Panadura Lab Direct Service Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <div>
              <div className="text-title-md font-title-md font-bold text-on-surface">Direct Galle Road Walk-In Counter</div>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">Bring your digital files on USB pen drive, memory card, or send via WhatsApp for immediate printing.</p>
            </div>
          </div>
          <a className="whitespace-nowrap px-6 py-3 rounded-xl bg-secondary text-on-secondary text-label-md font-label-md font-semibold hover:brightness-110 active:scale-95 transition-all shadow-sm" href="#contact">
            View Lab Location
          </a>
        </div>
      </div>
    </section>
  );
};
