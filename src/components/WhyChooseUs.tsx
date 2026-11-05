import React from 'react';
import { useContent } from '../context/ContentContext';

export const WhyChooseUs: React.FC = () => {
  const { content } = useContent();
  const { whyUs } = content;

  return (
    <section className="py-16 md:py-24 bg-surface border-b border-outline-variant/20 relative overflow-hidden" id="why-us">
      {/* Clearly Visible Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img 
          src={whyUs.backgroundImage} 
          alt="Wedding prints background" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-65"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/wedding-prints-showcase.jpg';
          }}
        />
        <div className="absolute inset-0 bg-surface/80 backdrop-blur-[1px]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-surface to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-margin md:px-margin-lg">
        <div className="max-w-3xl mb-12">
          <span className="text-label-md font-label-md uppercase tracking-wider text-primary font-semibold block mb-2">
            {whyUs.tagline}
          </span>
          <h2 className="text-headline-md md:text-headline-lg font-headline-md md:font-headline-lg text-on-surface font-bold tracking-tight">
            {whyUs.title}
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mt-3">
            {whyUs.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.cards.map((card, idx) => {
            const icons = ['palette', 'pin_drop', 'photo_frame', 'schedule', 'auto_awesome_motion'];
            const bgClasses = [
              'bg-secondary-fixed text-on-secondary-fixed',
              'bg-primary-fixed text-on-primary-fixed',
              'bg-tertiary-fixed text-on-tertiary-fixed',
              'bg-secondary-container/30 text-secondary',
              'bg-primary-container/20 text-primary'
            ];
            const isLast = idx === 4 && whyUs.cards.length === 5;

            return (
              <div 
                key={idx} 
                className={`bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex gap-4 ${
                  isLast ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  bgClasses[idx % bgClasses.length]
                }`}>
                  <span className="material-symbols-outlined text-2xl">{card.icon || icons[idx % icons.length]}</span>
                </div>
                <div>
                  <h3 className="text-title-lg font-title-lg font-bold text-on-surface mb-1">{card.title}</h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Real Team Showcase */}
        <div className="mt-10 rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface-container-lowest shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[320px] overflow-hidden bg-surface-container">
            <img 
              src={whyUs.teamImage} 
              alt="DN Digital Colour Lab professional team in Panadura" 
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/dn-lab-team.jpg';
              }}
            />
            <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1 rounded-full text-label-sm font-label-sm font-semibold text-primary flex items-center gap-1.5 shadow-sm">
              <span className="material-symbols-outlined text-sm">groups</span> {whyUs.teamTag}
            </div>
          </div>
          <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-center space-y-4">
            <span className="text-label-md font-label-md uppercase tracking-wider text-secondary font-semibold">
              {whyUs.teamSubtitle}
            </span>
            <h3 className="text-headline-sm sm:text-headline-md font-headline-sm font-bold text-on-surface tracking-tight">
              {whyUs.teamTitle}
            </h3>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
              {whyUs.teamDescription}
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              {whyUs.teamBadges.map((badge, bIdx) => (
                <span 
                  key={bIdx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface text-label-sm font-label-sm font-medium"
                >
                  <span className={`material-symbols-outlined text-base ${
                    bIdx === 0 ? 'text-primary' : bIdx === 1 ? 'text-secondary' : 'text-tertiary'
                  }`}>
                    {bIdx === 0 ? 'verified' : bIdx === 1 ? 'storefront' : 'thumb_up'}
                  </span>
                  <span>{badge}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
