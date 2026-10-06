import React from 'react';
import { companyInfo } from '../../data/companyInfo';
import { StatCounter } from '../common/StatCounter';

export const StatsSection = () => {
  return (
    <section className="py-12 bg-white dark:bg-brand-plum-900 border-y border-brand-violet-100 dark:border-brand-violet-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-brand-violet-100 dark:divide-brand-violet-900/60">
          {companyInfo.stats.map((stat, idx) => (
            <StatCounter
              key={idx}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
