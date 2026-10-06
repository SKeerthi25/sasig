import React, { useState, useRef } from 'react';

export const StatCounter = ({ value, label, suffix = "", prefix = "" }) => {
  const [displayValue] = useState(value);
  const ref = useRef(null);

  return (
    <div ref={ref} className="text-center p-4">
      <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight text-gradient-emerald-champagne mb-1">
        {prefix}{displayValue}{suffix}
      </div>
      <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-obsidian-600 dark:text-brand-obsidian-300">
        {label}
      </div>
    </div>
  );
};
