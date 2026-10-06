import React from 'react';
import { Link } from 'react-router-dom';

export const LogoIcon = ({ size = 40, animated = false, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${animated ? "animate-pulse-glow" : ""} ${className}`}
    >
      <defs>
        <linearGradient id="sasigEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="50%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="sasigMintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CCFBF1" />
          <stop offset="100%" stopColor="#6EE7B7" />
        </linearGradient>
        <linearGradient id="sasigChampagneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="100%" stopColor="#FEF08A" />
        </linearGradient>
        <filter id="emeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#10B981" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Dark Slate Container Plate */}
      <rect width="64" height="64" rx="16" fill="#0B131E" className="dark:fill-[#060D15]" />

      {/* Minimalist Architectural "S" Monogram in Vibrant Emerald & Mint */}
      {/* Top horizontal beam */}
      <rect x="14" y="14" width="30" height="7" rx="3.5" fill="url(#sasigEmeraldGrad)" />
      
      {/* Top left vertical pillar */}
      <rect x="14" y="14" width="7" height="20" rx="3.5" fill="url(#sasigEmeraldGrad)" />

      {/* Central horizontal bridge */}
      <path
        d="M14 30.5 C14 28.5 16 27 18 27 L46 27 C48 27 50 28.5 50 30.5 C50 32.5 48 34 46 34 L18 34 C16 34 14 32.5 14 30.5 Z"
        fill="url(#sasigEmeraldGrad)"
        filter="url(#emeraldGlow)"
      />

      {/* Bottom right vertical pillar */}
      <rect x="43" y="30" width="7" height="20" rx="3.5" fill="url(#sasigEmeraldGrad)" />

      {/* Bottom horizontal base beam */}
      <rect x="20" y="43" width="30" height="7" rx="3.5" fill="url(#sasigEmeraldGrad)" />

      {/* Floating Accent Geometric Nodes in Champagne Gold & Mint */}
      <circle cx="49" cy="17.5" r="4.5" fill="url(#sasigChampagneGrad)" />
      <circle cx="15" cy="46.5" r="3.5" fill="url(#sasigMintGrad)" />
    </svg>
  );
};

export const Logo = ({
  variant = 'full', // 'full' | 'icon' | 'white'
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  isWhite = false,
  showTagline = false,
  linkTo = "/",
  onClick,
  className = ""
}) => {
  const sizeMap = {
    sm: { icon: 32, text: "text-lg", tag: "text-[10px]" },
    md: { icon: 42, text: "text-2xl", tag: "text-xs" },
    lg: { icon: 52, text: "text-3xl", tag: "text-sm" },
    xl: { icon: 64, text: "text-4xl", tag: "text-base" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  const content = (
    <div
      onClick={!linkTo ? onClick : undefined}
      className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}
    >
      <LogoIcon size={currentSize.icon} className="transition-transform duration-300 group-hover:scale-105" />
      
      {variant !== 'icon' && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5 font-heading font-black tracking-tight">
            <span className={isWhite ? "text-white" : "text-brand-obsidian-900 dark:text-white"}>
              SASIG
            </span>
            <span className="px-1.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-brand-emerald-100 text-brand-emerald-900 dark:bg-brand-emerald-950 dark:text-brand-emerald-300 border border-brand-emerald-300 dark:border-brand-emerald-700">
              LTD
            </span>
          </div>
          {showTagline && (
            <span className={`font-medium tracking-normal ${currentSize.tag} ${
              isWhite ? "text-brand-emerald-200" : "text-brand-obsidian-500 dark:text-brand-obsidian-300"
            }`}>
              Smart Software. Simple Growth.
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (linkTo) {
    return (
      <Link
        to={linkTo}
        onClick={onClick}
        aria-label="SASIG LTD - Return to homepage"
        className="inline-flex"
      >
        {content}
      </Link>
    );
  }

  return content;
};
export default Logo;
