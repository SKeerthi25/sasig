import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'secondary' | 'mint' | 'champagne' | 'outline' | 'ghost' | 'white'
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  className = '',
  icon: Icon,
  iconRight: IconRight,
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-heading font-bold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-emerald-300/40 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2 shadow-sm",
    lg: "px-7 py-3.5 text-base gap-2.5 shadow-md",
    xl: "px-9 py-4 text-lg gap-3 shadow-lg hover:shadow-xl",
  };

  const variantClasses = {
    primary: "gradient-emerald-mint text-white font-black hover:brightness-110 shadow-emerald-glow hover:-translate-y-0.5",
    secondary: "bg-brand-slate-900 text-white dark:bg-brand-slate-800 dark:text-brand-emerald-300 font-extrabold hover:bg-brand-slate-800 dark:hover:bg-brand-slate-700 shadow-md hover:-translate-y-0.5 border border-brand-emerald-500/30",
    mint: "bg-brand-mint-500 text-brand-slate-950 font-black hover:bg-brand-mint-400 shadow-mint-glow hover:-translate-y-0.5",
    champagne: "bg-brand-champagne-400 text-brand-slate-950 font-black hover:bg-brand-champagne-300 shadow-champagne-glow hover:-translate-y-0.5",
    bronze: "bg-brand-emerald-800 text-white hover:bg-brand-emerald-700 shadow-md hover:-translate-y-0.5",
    outline: "border-2 border-brand-emerald-500/50 text-brand-emerald-700 dark:text-brand-emerald-300 bg-brand-emerald-50/60 dark:bg-brand-emerald-950/40 hover:border-brand-emerald-500 hover:bg-brand-emerald-100/60 dark:hover:bg-brand-emerald-900/40",
    outlineBronze: "border-2 border-brand-mint-500/50 text-brand-mint-700 dark:text-brand-mint-300 bg-brand-mint-50/50 dark:bg-brand-mint-950/30 hover:border-brand-mint-500 hover:bg-brand-mint-100/60",
    ghost: "text-brand-slate-700 dark:text-brand-slate-200 hover:bg-brand-emerald-100/60 dark:hover:bg-brand-slate-800",
    white: "bg-white text-brand-slate-950 hover:bg-brand-ivory shadow-md hover:-translate-y-0.5",
  };

  const classes = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {IconRight && <IconRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${classes}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`group ${classes}`} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a >
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={`group ${classes}`} {...props}>
      {content}
    </button>
  );
};
export default Button;
