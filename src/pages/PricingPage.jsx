import React, { useState } from 'react';
import { pricingPlans, featureComparison, pricingFaqs } from '../data/pricingData';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Check, X, ChevronDown, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';

export const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="py-12 sm:py-20">
      <SEO
        title="Transparent Pricing - Free, Starter, Business & Enterprise"
        description="Clear, predictable pricing for UK businesses. 14-day free trial on all plans. No credit card required. HMRC MTD compliant."
        canonical="/pricing"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Predictable UK Plans"
          badgeVariant="yellow"
          title="Simple, Transparent Pricing."
          highlightText="Zero Hidden Extras."
          subtitle="Everything you need to run your business with clarity. Switch or cancel monthly plans at any time."
        />

        {/* Monthly / Annual switch */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-heading font-bold ${!isAnnual ? 'text-brand-violet-600 dark:text-brand-violet-300' : 'text-brand-plum-500'}`}>
            Billed Monthly
          </span>
          <button
            type="button"
            onClick={() => setIsAnnual(prev => !prev)}
            className="w-14 h-8 rounded-full bg-brand-plum-200 dark:bg-brand-plum-800 p-1 transition-colors relative"
          >
            <div
              className={`w-6 h-6 rounded-full gradient-violet-pink shadow-md transform transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></div>
          </button>
          <span className={`text-sm font-heading font-bold flex items-center gap-2 ${isAnnual ? 'text-brand-violet-600 dark:text-brand-violet-300' : 'text-brand-plum-500'}`}>
            <span>Billed Annually</span>
            <span className="px-2.5 py-0.5 rounded-full gradient-mint-yellow text-brand-plum-900 text-xs font-black shadow-sm">
              Save 20%
            </span>
          </span>
        </div>

        {/* 4 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pricingPlans.map((plan) => {
            const price = isAnnual ? plan.priceYearly : plan.priceMonthly;
            return (
              <Card
                key={plan.id}
                color={plan.popular ? 'violet' : 'plum'}
                className={`flex flex-col justify-between ${
                  plan.popular
                    ? 'border-2 border-brand-violet-500 shadow-violet-glow scale-105 relative'
                    : ''
                }`}
              >
                <div>
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-violet-pink text-white font-heading font-black text-xs uppercase tracking-wider shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-black text-xl text-brand-plum-900 dark:text-white">
                      {plan.name}
                    </h3>
                    {plan.badge && !plan.popular && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-violet-100 text-brand-violet-800 dark:bg-brand-violet-950 dark:text-brand-violet-300">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-brand-plum-500 dark:text-brand-plum-400 mb-6 min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-brand-violet-100 dark:border-brand-violet-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-heading font-black text-brand-plum-900 dark:text-white">
                        £{price}
                      </span>
                      <span className="text-xs font-semibold text-brand-plum-500 dark:text-brand-plum-400">
                        {plan.priceMonthly === 0 ? 'forever free' : '/ user / mo'}
                      </span>
                    </div>
                    {isAnnual && plan.priceMonthly > 0 && (
                      <p className="text-[11px] text-brand-mint-600 dark:text-brand-mint-400 font-bold mt-1">
                        Billed annually (save £{ (plan.priceMonthly - plan.priceYearly) * 12 }/yr per seat)
                      </p>
                    )}
                  </div>

                  {/* Features list */}
                  <ul className="space-y-2.5 mb-8 text-xs text-brand-plum-700 dark:text-brand-plum-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-brand-mint-500 shrink-0 mt-0.5" />
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

        {/* 2. FULL FEATURE COMPARISON TABLE */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-heading font-black text-brand-plum-900 dark:text-white">
              Full Feature Comparison Matrix
            </h2>
            <p className="text-sm text-brand-plum-500 dark:text-brand-plum-400 mt-2">
              Compare features, storage capacities, and support channels across tiers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-brand-violet-200 dark:border-brand-violet-800 bg-white dark:bg-brand-plum-900 shadow-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-brand-violet-50 dark:bg-brand-plum-950/80 border-b border-brand-violet-200 dark:border-brand-violet-800 text-brand-plum-900 dark:text-white font-heading font-bold">
                  <th className="p-4 sm:p-5">Platform Features</th>
                  <th className="p-4 sm:p-5 text-center">Free Forever</th>
                  <th className="p-4 sm:p-5 text-center">Starter</th>
                  <th className="p-4 sm:p-5 text-center text-brand-violet-600 dark:text-brand-violet-300 bg-brand-violet-100/40 dark:bg-brand-violet-950/40">Business Suite</th>
                  <th className="p-4 sm:p-5 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-violet-100 dark:divide-brand-violet-900">
                {featureComparison.map((group, gIdx) => (
                  <React.Fragment key={gIdx}>
                    <tr className="bg-brand-cream/60 dark:bg-brand-plum-950/40 font-heading font-black text-xs uppercase tracking-wider text-brand-plum-700 dark:text-brand-plum-300">
                      <td colSpan="5" className="p-3.5 sm:px-5">
                        {group.category}
                      </td>
                    </tr>
                    {group.features.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-brand-violet-50/30 dark:hover:bg-brand-plum-800/40 transition-colors">
                        <td className="p-4 sm:p-5 font-medium text-brand-plum-900 dark:text-white">
                          {row.name}
                        </td>
                        <td className="p-4 sm:p-5 text-center text-brand-plum-600 dark:text-brand-plum-300">
                          {typeof row.free === 'boolean' ? (
                            row.free ? <Check className="w-4 h-4 text-brand-mint-500 mx-auto" /> : <X className="w-4 h-4 text-brand-plum-300 mx-auto" />
                          ) : row.free}
                        </td>
                        <td className="p-4 sm:p-5 text-center text-brand-plum-600 dark:text-brand-plum-300">
                          {typeof row.starter === 'boolean' ? (
                            row.starter ? <Check className="w-4 h-4 text-brand-mint-500 mx-auto" /> : <X className="w-4 h-4 text-brand-plum-300 mx-auto" />
                          ) : row.starter}
                        </td>
                        <td className="p-4 sm:p-5 text-center font-bold text-brand-violet-700 dark:text-brand-violet-300 bg-brand-violet-100/20 dark:bg-brand-violet-950/20">
                          {typeof row.business === 'boolean' ? (
                            row.business ? <Check className="w-4 h-4 text-brand-mint-500 mx-auto" /> : <X className="w-4 h-4 text-brand-plum-300 mx-auto" />
                          ) : row.business}
                        </td>
                        <td className="p-4 sm:p-5 text-center text-brand-plum-600 dark:text-brand-plum-300">
                          {typeof row.enterprise === 'boolean' ? (
                            row.enterprise ? <Check className="w-4 h-4 text-brand-mint-500 mx-auto" /> : <X className="w-4 h-4 text-brand-plum-300 mx-auto" />
                          ) : row.enterprise}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Charity & Non-profit banner */}
        <div className="mb-20 p-6 sm:p-8 rounded-3xl gradient-mint-yellow text-brand-plum-900 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-brand-plum-900 text-white">
              <Heart className="w-6 h-6 text-brand-pink-400" />
            </div>
            <div>
              <h3 className="font-heading font-black text-lg sm:text-xl">
                30% Lifetime Discount for UK Charities & Non-Profits
              </h3>
              <p className="text-xs sm:text-sm font-medium opacity-90">
                Registered UK charities, community interest companies (CICs), and state schools receive special non-profit rates.
              </p>
            </div>
          </div>
          <Button to="/contact" variant="outline" size="sm" className="border-brand-plum-900 text-brand-plum-900 hover:bg-brand-plum-900 hover:text-white shrink-0">
            Apply for Charity Plan
          </Button>
        </div>

        {/* 3. PRICING FAQS */}
        <div className="max-w-3xl mx-auto mb-20">
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-center text-brand-plum-900 dark:text-white mb-8">
            Pricing Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {pricingFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-brand-plum-900 border border-brand-violet-100 dark:border-brand-violet-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between font-heading font-bold text-sm text-brand-plum-900 dark:text-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-brand-violet-500 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-brand-plum-600 dark:text-brand-plum-300 leading-relaxed border-t border-brand-violet-50 dark:border-brand-violet-900 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <FinalCTA />
    </div>
  );
};
