import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { solutions } from '../data/solutionsData';
import { products } from '../data/productsData';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import {
  Rocket, ShoppingBag, ActivitySquare, GraduationCap, ShieldAlert,
  Boxes, Target, Megaphone, Headphones, HeartHandshake, Coins,
  CheckCircle2, ArrowRight, Sparkles, Quote
} from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';

const iconMap = {
  Rocket, ShoppingBag, ActivitySquare, GraduationCap, ShieldAlert,
  Boxes, Target, Megaphone, Headphones, HeartHandshake, Coins
};

export const SolutionsPage = () => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'startups';
  const [selectedIndustry, setSelectedIndustry] = useState(
    solutions.industries.find(i => i.slug === initialTab) || solutions.industries[0]
  );
  const [activeSection, setActiveSection] = useState('industry'); // 'industry' | 'team'

  const IndustryIcon = iconMap[selectedIndustry.icon] || Rocket;

  return (
    <div className="py-12 sm:py-20">
      <SEO
        title="Solutions by Industry & Business Team"
        description="Discover how SASIG powers Startups, Retail, Healthcare, Education, Finance, and Manufacturing businesses across the UK."
        canonical="/solutions"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tailored Solutions"
          badgeVariant="mint"
          title="Engineered for Your Workflow."
          highlightText="Configured for Growth."
          subtitle="Explore purpose-built solutions designed for your specific industry sector or department."
        />

        {/* Industry / Team Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-brand-plum-900 border border-brand-violet-200 dark:border-brand-violet-800 shadow-sm">
            <button
              onClick={() => setActiveSection('industry')}
              className={`px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all ${
                activeSection === 'industry'
                  ? 'gradient-violet-pink text-white shadow-sm'
                  : 'text-brand-plum-700 dark:text-brand-plum-300 hover:text-brand-violet-600'
              }`}
            >
              By Industry Sector
            </button>
            <button
              onClick={() => setActiveSection('team')}
              className={`px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all ${
                activeSection === 'team'
                  ? 'gradient-mint-yellow text-brand-plum-900 font-black shadow-sm'
                  : 'text-brand-plum-700 dark:text-brand-plum-300 hover:text-brand-mint-600'
              }`}
            >
              By Business Department
            </button>
          </div>
        </div>

        {/* 1. INDUSTRY BREAKDOWN */}
        {activeSection === 'industry' && (
          <div>
            {/* Industry Selector Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
              {solutions.industries.map(ind => {
                const Icon = iconMap[ind.icon] || Rocket;
                const isSelected = selectedIndustry.id === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`p-3.5 rounded-2xl flex flex-col items-center text-center transition-all border ${
                      isSelected
                        ? 'bg-white dark:bg-brand-plum-900 border-brand-mint-500 shadow-plum-card scale-105 -translate-y-0.5'
                        : 'bg-brand-cream/50 dark:bg-brand-plum-900/40 border-brand-violet-100 dark:border-brand-violet-900/50 hover:bg-white dark:hover:bg-brand-plum-800'
                    }`}
                  >
                    <div className="p-2.5 rounded-xl bg-brand-mint-100 dark:bg-brand-mint-950 text-brand-mint-700 dark:text-brand-mint-300 mb-2">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-heading font-bold text-xs text-brand-plum-900 dark:text-white truncate w-full">
                      {ind.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Industry Detail Card */}
            <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-brand-plum-900 border-2 border-brand-mint-300 dark:border-brand-mint-800 shadow-2xl mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-brand-mint-500 text-brand-plum-900 font-bold">
                      <IndustryIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-mint-600 dark:text-brand-mint-400">
                        Industry Blueprint
                      </span>
                      <h3 className="font-heading font-black text-2xl sm:text-3xl text-brand-plum-900 dark:text-white">
                        {selectedIndustry.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base text-brand-plum-700 dark:text-brand-plum-200 leading-relaxed">
                    {selectedIndustry.description}
                  </p>

                  <div className="space-y-2.5">
                    <h4 className="font-heading font-bold text-sm text-brand-plum-900 dark:text-white">
                      Key Operational Benefits:
                    </h4>
                    {selectedIndustry.keyBenefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-mint-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recommended Suite Apps */}
                  <div>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-plum-500 dark:text-brand-plum-400 mb-2">
                      Recommended SASIG Suite Modules:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedIndustry.recommendedProducts.map(pId => {
                        const prod = products.find(p => p.id === pId);
                        if (!prod) return null;
                        return (
                          <Link
                            key={pId}
                            to={`/products/${prod.slug}`}
                            className="px-3 py-1.5 rounded-xl bg-brand-violet-50 dark:bg-brand-plum-800 border border-brand-violet-200 dark:border-brand-violet-800 text-xs font-heading font-bold text-brand-violet-700 dark:text-brand-violet-300 hover:border-brand-violet-400 flex items-center gap-1.5"
                          >
                            <span>{prod.name}</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <Button to="/demo" variant="primary" size="md">
                      Book Custom Industry Demo
                    </Button>
                    <Button to="/contact" variant="outline" size="md">
                      Speak with a Specialist
                    </Button>
                  </div>
                </div>

                {/* Industry Testimonial Quote Card */}
                <div className="lg:col-span-5">
                  <div className="p-6 rounded-3xl bg-brand-cream/80 dark:bg-brand-plum-950/80 border border-brand-violet-100 dark:border-brand-violet-900 relative">
                    <Quote className="w-8 h-8 text-brand-mint-400 absolute top-4 right-4 opacity-50" />
                    <p className="text-sm font-heading font-semibold text-brand-plum-900 dark:text-white leading-relaxed mb-6">
                      "{selectedIndustry.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-brand-violet-200 dark:border-brand-violet-800">
                      <div className={`w-10 h-10 rounded-2xl ${selectedIndustry.testimonial.avatarBg} text-white flex items-center justify-center font-bold text-sm`}>
                        {selectedIndustry.testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-heading font-bold text-xs text-brand-plum-900 dark:text-white">
                          {selectedIndustry.testimonial.author}
                        </p>
                        <p className="text-[11px] text-brand-plum-500 dark:text-brand-plum-400">
                          {selectedIndustry.testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. TEAM DEPARTMENT BREAKDOWN */}
        {activeSection === 'team' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {solutions.teams.map(t => {
              const Icon = iconMap[t.icon] || Target;
              return (
                <Card key={t.id} color="pink" className="flex flex-col justify-between">
                  <div>
                    <div className="p-3.5 rounded-2xl bg-brand-pink-100 dark:bg-brand-pink-950 text-brand-pink-600 dark:text-brand-pink-300 inline-block mb-4">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-heading font-black text-xl text-brand-plum-900 dark:text-white mb-2">
                      {t.name}
                    </h3>

                    <p className="text-xs font-bold text-brand-pink-500 mb-2">
                      {t.title}
                    </p>

                    <p className="text-xs sm:text-sm text-brand-plum-600 dark:text-brand-plum-300 leading-relaxed mb-4">
                      {t.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-violet-100 dark:border-brand-violet-800 flex items-center justify-between">
                    <Button to="/demo" variant="outline" size="sm">
                      Book Team Demo
                    </Button>
                    <Link
                      to="/contact"
                      className="text-xs font-heading font-bold text-brand-violet-600 dark:text-brand-violet-300 hover:text-brand-pink-500 flex items-center gap-1"
                    >
                      <span>Get in Touch</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      <FinalCTA />
    </div>
  );
};
