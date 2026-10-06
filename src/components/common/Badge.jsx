import React from 'react';

export const Badge = ({
  children,
  variant = 'emerald', // 'emerald' | 'mint' | 'champagne' | 'slate' | 'gradient' | 'gold' | 'rose'
  size = 'md',
  className = '',
  icon: Icon
}) => {
  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-[11px] gap-1",
    md: "px-3.5 py-1 text-xs gap-1.5",
    lg: "px-4 py-1.5 text-sm gap-2",
  };

  const variantClasses = {
    emerald: "bg-brand-emerald-100 text-brand-emerald-900 dark:bg-brand-emerald-950/80 dark:text-brand-emerald-300 border border-brand-emerald-300 dark:border-brand-emerald-700",
    mint: "bg-brand-mint-100 text-brand-mint-900 dark:bg-brand-mint-950/80 dark:text-brand-mint-300 border border-brand-mint-300 dark:border-brand-mint-700",
    champagne: "bg-brand-champagne-100 text-brand-champagne-900 dark:bg-brand-champagne-950/70 dark:text-brand-champagne-300 border border-brand-champagne-200 dark:border-brand-champagne-800",
    gold: "bg-brand-emerald-100 text-brand-emerald-900 dark:bg-brand-emerald-950/80 dark:text-brand-emerald-300 border border-brand-emerald-300 dark:border-brand-emerald-700",
    slate: "bg-brand-slate-100 text-brand-slate-900 dark:bg-brand-slate-900 dark:text-brand-slate-200 border border-brand-slate-200 dark:border-brand-slate-700",
    rose: "bg-brand-emerald-100 text-brand-emerald-900 dark:bg-brand-emerald-950/80 dark:text-brand-emerald-300 border border-brand-emerald-300 dark:border-brand-emerald-700",
    gradient: "gradient-emerald-mint text-white font-bold shadow-sm",
    gradientRose: "gradient-mint-champagne text-brand-slate-950 font-bold shadow-sm",
  };

  return (
    <span
      className={`inline-flex items-center font-heading font-semibold rounded-full tracking-wide shrink-0 ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.emerald} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
};
export default Badge;
