import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const isLight = variant === 'light';

  // Sizing styles
  const iconSizes = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 rounded-xl',
    lg: 'w-14 h-14 rounded-2xl',
  };

  const textSizes = {
    sm: {
      title: 'text-base font-extrabold tracking-tight',
      subtitle: 'text-[9px] tracking-wider font-semibold',
      tagline: 'text-[8px] font-medium tracking-wide',
    },
    md: {
      title: 'text-lg md:text-xl font-extrabold tracking-tight',
      subtitle: 'text-[10px] md:text-[11px] tracking-wider font-semibold',
      tagline: 'text-[9px] font-medium tracking-wide',
    },
    lg: {
      title: 'text-2xl md:text-3xl font-extrabold tracking-tight',
      subtitle: 'text-xs md:text-sm tracking-wider font-semibold',
      tagline: 'text-[11px] font-medium tracking-wide',
    },
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Visual Emblem Badge */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center shrink-0 shadow-sm border ${
          isLight
            ? 'bg-slate-900 border-sky-400/40 text-white shadow-sky-950/20'
            : 'bg-slate-900 border-sky-500/30 text-white shadow-slate-900/10'
        }`}
      >
        {/* Subtle camera aperture concentric ring */}
        <div className="absolute inset-1 rounded-[10px] border border-sky-400/30 border-dashed" />
        
        {/* Monogram */}
        <span className="font-heading font-black text-white leading-none tracking-tighter text-sm md:text-base z-10">
          DN
        </span>

        {/* 4 CMYK Colour dots */}
        <div className="absolute bottom-1 flex items-center gap-0.5 z-10">
          <span className="w-1 h-1 rounded-full bg-[#00AEEF]" title="Cyan" />
          <span className="w-1 h-1 rounded-full bg-[#EC008C]" title="Magenta" />
          <span className="w-1 h-1 rounded-full bg-[#FFF200]" title="Yellow" />
          <span className="w-1 h-1 rounded-full bg-slate-300 border border-slate-900" title="Key" />
        </div>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-baseline gap-1">
          <span className={`${textSizes[size].title} ${isLight ? 'text-white' : 'text-slate-900'}`}>
            DN
          </span>
          <span className={`${textSizes[size].title} text-sky-600 dark:text-sky-400 font-extrabold`}>
            DIGITAL
          </span>
        </div>
        <div className="flex items-center gap-1.5 -mt-0.5">
          <span
            className={`${textSizes[size].subtitle} uppercase ${
              isLight ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Colour Lab
          </span>
          <span
            className={`text-[9px] px-1 py-0.2 rounded font-semibold ${
              isLight ? 'bg-slate-800 text-sky-400' : 'bg-slate-100 text-slate-500'
            }`}
          >
            (PVT) LTD
          </span>
        </div>
        {showTagline && (
          <span className={`${textSizes[size].tagline} text-sky-500 font-medium tracking-wider uppercase mt-0.5 hidden sm:block`}>
            Panadura • Photo &amp; Print
          </span>
        )}
      </div>
    </div>
  );
};
