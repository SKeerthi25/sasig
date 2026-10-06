import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Play, Users, Landmark, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { Button } from '../common/Button';
import { DashboardMockup } from '../mockups/DashboardMockup';

export const HeroSection = () => {
  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Decorative Blob Gradients */}
      <div className="absolute top-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-brand-emerald-400/20 dark:bg-brand-emerald-600/20 blur-3xl -z-10 animate-blob"></div>
      <div className="absolute top-28 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-brand-mint-400/20 dark:bg-brand-mint-600/20 blur-3xl -z-10 animate-blob [animation-delay:3s]"></div>
      <div className="absolute top-52 left-1/3 w-64 h-64 rounded-full bg-brand-champagne-400/15 dark:bg-brand-champagne-600/15 blur-3xl -z-10 animate-blob [animation-delay:6s]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Area */}
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Top Pill / Badge */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 p-1.5 pr-4 rounded-full bg-white dark:bg-brand-slate-900 border border-brand-emerald-200 dark:border-brand-emerald-800 shadow-sm hover:scale-105 transition-transform cursor-pointer"
          >
            <span className="px-3 py-1 rounded-full gradient-emerald-mint text-white text-xs font-heading font-black">
              2026 SUITE
            </span>
            <span className="text-xs font-semibold text-brand-slate-800 dark:text-brand-slate-200 flex items-center gap-1">
              <span>HMRC MTD & AI Pipeline Sync is live</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-emerald-600" />
            </span>
          </Link>

          {/* Big, Friendly, Clean Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight text-brand-slate-900 dark:text-white leading-[1.08]">
            Smart Software.{" "}
            <span className="text-gradient-emerald-mint block sm:inline">
              Simple Growth.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-brand-slate-700 dark:text-brand-slate-200 font-normal max-w-3xl mx-auto leading-relaxed">
            Run your entire UK business on SASIG's intuitive, all-in-one cloud software suite. CRM, Books, Projects, Support Desk, HR & AI automations in one place.
          </p>

          {/* Two Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              to="/demo"
              variant="primary"
              size="xl"
              icon={Play}
              className="w-full sm:w-auto"
            >
              Book a Live Demo
            </Button>
            <Button
              to="/products"
              variant="outline"
              size="xl"
              iconRight={ArrowRight}
              className="w-full sm:w-auto"
            >
              Explore All 8 Products
            </Button>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 text-xs font-medium text-brand-slate-600 dark:text-brand-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-emerald-500" />
              <span>Dedicated UK Onboarding</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-emerald-500" />
              <span>HMRC MTD Compliant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-emerald-500" />
              <span>100% UK Hosted & Hull Based</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-brand-emerald-500" />
              <span>UK GDPR Protected</span>
            </div>
          </div>
        </div>

        {/* Floating SaaS Dashboard Preview Section */}
        <div className="mt-12 sm:mt-16 relative">
          {/* Floating Product Badge Left */}
          <div className="hidden lg:flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-brand-slate-900 border border-brand-emerald-200 dark:border-brand-emerald-700 shadow-2xl absolute -left-6 top-1/4 z-20 animate-float-slow">
            <div className="p-2.5 rounded-xl gradient-emerald-mint text-white">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-brand-slate-500 dark:text-brand-slate-400">Deal Closed</p>
              <p className="font-heading font-black text-sm text-brand-slate-900 dark:text-white">+£18,500 GBP</p>
            </div>
          </div>

          {/* Floating Product Badge Right */}
          <div className="hidden lg:flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-brand-slate-900 border border-brand-champagne-200 dark:border-brand-champagne-700 shadow-2xl absolute -right-6 bottom-1/4 z-20 animate-float-slow [animation-delay:2s]">
            <div className="p-2.5 rounded-xl bg-brand-champagne-500 text-brand-slate-950 font-bold">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-brand-champagne-600 dark:text-brand-champagne-400">VAT Return</p>
              <p className="font-heading font-black text-sm text-brand-slate-900 dark:text-white">Filed with HMRC ✓</p>
            </div>
          </div>

          {/* High Fidelity Dashboard Mockup */}
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
