import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { pricingPlans } from '../../data/pricingData';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { Card } from '../common/Card';

export const PricingTeaser = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Simple, Transparent Pricing"
          badgeVariant="champagne"
          title="Predictable UK Plans."
          highlightText="Zero Hidden Surprises."
          subtitle="Get access to the entire SASIG cloud suite. No complicated add-on tiers or surprise billing."
        />

        {/* Annual / Monthly Billing Switch */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-heading font-bold ${!isAnnual ? 'text-brand-emerald-600 dark:text-brand-emerald-300' : 'text-brand-obsidian-500'}`}>
            Billed Monthly
          </span>
          <button
            type="button"
            onClick={() => setIsAnnual(prev => !prev)}
            className="w-14 h-8 rounded-full bg-brand-obsidian-200 dark:bg-brand-obsidian-800 p-1 transition-colors relative"
          >
            <div
              className={`w-6 h-6 rounded-full gradient-emerald-champagne shadow-md transform transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></div>
          </button>
          <span className={`text-sm font-heading font-bold flex items-center gap-2 ${isAnnual ? 'text-brand-emerald-600 dark:text-brand-emerald-300' : 'text-brand-obsidian-500'}`}>
            <span>Billed Annually</span>
            <span className="px-2.5 py-0.5 rounded-full bg-brand-champagne-400 text-brand-obsidian-950 text-xs font-black">
              Save 20%
            </span>
          </span>
        </div>

        {/* 4 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => {
            const price = isAnnual ? plan.priceYearly : plan.priceMonthly;
            return (
              <Card
                key={plan.id}
                color={plan.popular ? 'emerald' : 'obsidian'}
                className={`flex flex-col justify-between ${
                  plan.popular
                    ? 'border-2 border-brand-emerald-500 shadow-emerald-glow scale-105 relative'
                    : ''
                }`}
              >
                <div>
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-emerald-champagne text-white font-heading font-black text-xs uppercase tracking-wider shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-black text-xl text-brand-obsidian-900 dark:text-white">
                      {plan.name}
                    </h3>
                    {plan.badge && !plan.popular && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-emerald-100 text-brand-emerald-800 dark:bg-brand-emerald-950 dark:text-brand-emerald-300">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-brand-obsidian-500 dark:text-brand-obsidian-400 mb-6 min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-brand-emerald-100 dark:border-brand-emerald-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-heading font-black text-brand-obsidian-900 dark:text-white">
                        £{price}
                      </span>
                      <span className="text-xs font-semibold text-brand-obsidian-500 dark:text-brand-obsidian-400">
                        {plan.priceMonthly === 0 ? 'forever' : '/ user / mo'}
                      </span>
                    </div>
                    {isAnnual && plan.priceMonthly > 0 && (
                      <p className="text-[11px] text-brand-emerald-600 dark:text-brand-emerald-400 font-bold mt-1">
                        Billed annually (save £{ (plan.priceMonthly - plan.priceYearly) * 12 }/yr per user)
                      </p>
                    )}
                  </div>

                  {/* Features list */}
                  <ul className="space-y-2.5 mb-8 text-xs text-brand-obsidian-700 dark:text-brand-obsidian-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-brand-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  to={plan.id === 'enterprise' ? '/contact' : '/signup'}
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="md"
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* View Full Comparison Link */}
        <div className="text-center mt-12">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 font-heading font-bold text-sm text-brand-emerald-600 dark:text-brand-emerald-300 hover:text-brand-champagne-600 group"
          >
            <span>View Full Feature Comparison Matrix</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
