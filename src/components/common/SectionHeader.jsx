import React from 'react';
import { Badge } from './Badge';

export const SectionHeader = ({
  badge,
  badgeVariant = 'emerald',
  title,
  highlightText,
  subtitle,
  align = 'center', // 'center' | 'left'
  className = ""
}) => {
  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className="mb-4 inline-block">
          <Badge variant={badgeVariant} size="lg">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-brand-obsidian-900 dark:text-white leading-[1.15]">
        {title}{" "}
        {highlightText && (
          <span className="text-gradient-emerald-champagne block sm:inline">
            {highlightText}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-brand-obsidian-600 dark:text-brand-obsidian-300 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
