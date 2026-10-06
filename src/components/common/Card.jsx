import React from 'react';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  glass = false,
  color = 'emerald', // 'emerald' | 'mint' | 'champagne' | 'slate' | 'gold'
  ...props
}) => {
  const colorBorders = {
    emerald: "border-brand-emerald-100 dark:border-brand-emerald-900/40 hover:border-brand-emerald-400",
    mint: "border-brand-mint-100 dark:border-brand-mint-900/40 hover:border-brand-mint-400",
    champagne: "border-brand-champagne-100 dark:border-brand-champagne-900/40 hover:border-brand-champagne-400",
    gold: "border-brand-emerald-100 dark:border-brand-emerald-900/40 hover:border-brand-emerald-400",
    slate: "border-brand-slate-200 dark:border-brand-slate-700 hover:border-brand-emerald-400",
    obsidian: "border-brand-slate-200 dark:border-brand-slate-700 hover:border-brand-emerald-400",
  };

  const glows = {
    emerald: "hover:shadow-emerald-glow",
    mint: "hover:shadow-mint-glow",
    champagne: "hover:shadow-champagne-glow",
    gold: "hover:shadow-emerald-glow",
  };

  return (
    <div
      className={`
        rounded-3xl p-6 sm:p-8 transition-all duration-300 relative border
        ${glass ? "glassmorphism" : "bg-white dark:bg-brand-slate-900/90 shadow-obsidian-card"}
        ${colorBorders[color] || colorBorders.emerald}
        ${hoverEffect ? "hover:-translate-y-1.5" : ""}
        ${glow && glows[color] ? glows[color] : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
export default Card;
