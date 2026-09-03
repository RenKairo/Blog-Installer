import React from 'react';

export const ToriiLogo: React.FC<{ size?: 'sm' | 'md' | 'lg'; showBlogBadge?: boolean }> = ({ 
  size = 'md',
  showBlogBadge = true 
}) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7',
    lg: 'w-9 h-9'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  return (
    <div className="flex items-center gap-2.5 group cursor-pointer select-none">
      {/* Torii Gate SVG */}
      <svg 
        className={`${iconSizes[size]} text-red-600 transform group-hover:scale-105 transition-transform duration-300`} 
        viewBox="0 0 100 100" 
        fill="currentColor"
      >
        {/* Top Kasagi bar */}
        <path d="M 10 22 C 30 16, 70 16, 90 22 L 87 28 C 70 24, 30 24, 13 28 Z" fill="#dc2626" />
        {/* Shimaki secondary bar */}
        <rect x="18" y="32" width="64" height="6" rx="1.5" fill="#b91c1c" />
        {/* Main Pillars (Hashira) */}
        <rect x="26" y="38" width="9" height="52" rx="2" fill="#dc2626" />
        <rect x="65" y="38" width="9" height="52" rx="2" fill="#dc2626" />
        {/* Tie bar (Nuki) */}
        <rect x="16" y="52" width="68" height="5" rx="1" fill="#991b1b" />
        {/* Center Plaque (Gakuzuka) */}
        <rect x="46" y="32" width="8" height="20" rx="1" fill="#7f1d1d" />
        {/* Pillar base stones (Kamebara) */}
        <rect x="23" y="86" width="15" height="6" rx="2" fill="#450a0a" />
        <rect x="62" y="86" width="15" height="6" rx="2" fill="#450a0a" />
      </svg>

      {/* Brand Text */}
      <div className="flex items-center gap-2 font-mono">
        <span className={`font-extrabold tracking-tight text-slate-900 dark:text-white ${textSizes[size]}`}>
          RenKairo
        </span>
        {showBlogBadge && (
          <span className="text-red-600 font-medium text-xs tracking-wide">
            Blog
          </span>
        )}
      </div>
    </div>
  );
};
