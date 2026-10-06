import React from 'react';
import { Link } from 'react-router-dom';
import { solutions } from '../../data/solutionsData';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';
import { ArrowRight, Rocket, ShoppingBag, ActivitySquare, GraduationCap, ShieldAlert, Boxes } from 'lucide-react';

const iconMap = {
  Rocket, ShoppingBag, ActivitySquare, GraduationCap, ShieldAlert, Boxes
};

export const IndustryShowcase = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tailored Solutions"
          badgeVariant="emerald"
          title="Engineered for Your Industry."
          highlightText="Configured for Growth."
          subtitle="Whether you run a fast-scaling tech startup, an eCommerce brand, or a precision engineering firm, SASIG adapts to your specific operational flows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.industries.map((ind) => {
            const Icon = iconMap[ind.icon] || Rocket;
            return (
              <Card key={ind.id} hoverEffect={true} className="flex flex-col justify-between group">
                <div>
                  <div className="p-3.5 rounded-2xl bg-brand-emerald-100 dark:bg-brand-emerald-950 text-brand-emerald-700 dark:text-brand-emerald-300 inline-block mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-black text-xl text-brand-obsidian-900 dark:text-white mb-2">
                    {ind.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-obsidian-600 dark:text-brand-obsidian-300 leading-relaxed mb-4">
                    {ind.description}
                  </p>

                  <div className="space-y-1.5 mb-6 text-xs text-brand-obsidian-700 dark:text-brand-obsidian-300">
                    {ind.keyBenefits.slice(0, 2).map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-brand-emerald-500 font-bold">•</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/solutions?tab=${ind.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-brand-emerald-600 dark:text-brand-emerald-300 hover:text-brand-champagne-600 group/link pt-2 border-t border-brand-emerald-100 dark:border-brand-emerald-900"
                >
                  <span>Explore {ind.name} Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
