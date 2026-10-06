import React from 'react';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { DemoBookingForm } from '../components/forms/DemoBookingForm';
import { CheckCircle2, ShieldCheck, Sparkles, Users, Star } from 'lucide-react';

export const BookDemoPage = () => {
  return (
    <div className="py-12 sm:py-20">
      <SEO
        title="Book a Product Demo - 1-on-1 Walkthrough"
        description="Schedule a 1-on-1 personalized demo of SASIG Suite with our UK software specialists. Discover how we can streamline your business."
        canonical="/demo"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-violet-100 dark:bg-brand-violet-950 text-brand-violet-700 dark:text-brand-violet-300 text-xs font-heading font-extrabold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              1-on-1 Product Walkthrough
            </span>

            <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-brand-plum-900 dark:text-white leading-[1.1]">
              See SASIG in action, tailored for your business.
            </h1>

            <p className="text-base sm:text-lg text-brand-plum-600 dark:text-brand-plum-300 leading-relaxed">
              In this 20-minute tailored session, a senior UK software consultant will walk you through real workflows, answer technical questions, and show you how to cut 60% of your software spend.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-300">
                <CheckCircle2 className="w-5 h-5 text-brand-mint-500 shrink-0 mt-0.5" />
                <span>Custom demo configured around your team's current pain points.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-300">
                <CheckCircle2 className="w-5 h-5 text-brand-mint-500 shrink-0 mt-0.5" />
                <span>HMRC MTD tax & Open Banking live walkthrough.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-300">
                <CheckCircle2 className="w-5 h-5 text-brand-mint-500 shrink-0 mt-0.5" />
                <span>Data migration roadmap and ROI cost audit.</span>
              </div>
            </div>

            {/* Testimonial preview */}
            <div className="p-4 rounded-2xl bg-white dark:bg-brand-plum-900 border border-brand-violet-100 dark:border-brand-violet-800 shadow-sm">
              <div className="flex items-center gap-1 text-brand-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-brand-plum-700 dark:text-brand-plum-300 italic">
                "The demo was clear, friendly, and completely focused on our operational problems rather than pushy sales tactics."
              </p>
              <p className="text-[11px] font-bold text-brand-plum-900 dark:text-white mt-1">
                — Mark Henderson, Managing Director
              </p>
            </div>
          </div>

          {/* Right Form Column (Span 6) */}
          <div className="lg:col-span-6">
            <DemoBookingForm />
          </div>
        </div>
      </div>
    </div>
  );
};
