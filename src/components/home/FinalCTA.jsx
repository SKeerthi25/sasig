import React from 'react';
import { Play, MessageSquare, CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';
import { Button } from '../common/Button';

export const FinalCTA = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-16 rounded-4xl gradient-emerald-champagne text-white text-center shadow-2xl relative overflow-hidden">
          {/* Decorative ambient background sparkles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-champagne-400/15 rounded-full blur-3xl -z-0"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 text-white font-heading font-extrabold text-xs uppercase tracking-wider backdrop-blur-md">
              <Building2 className="w-3.5 h-3.5 text-brand-champagne-300" />
              UK Enterprise Cloud Software
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight leading-tight">
              Ready to simplify your UK software stack?
            </h2>

            <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed">
              Connect with our Hull solutions team to discover how SASIG's integrated platform streamlines your sales, accounting, and operations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                to="/demo"
                variant="white"
                size="xl"
                className="w-full sm:w-auto font-black"
                icon={Play}
              >
                Schedule Live Demo
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="xl"
                className="w-full sm:w-auto border-white text-white hover:bg-white/20"
                icon={MessageSquare}
              >
                Contact Our Team
              </Button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-champagne-300" /> Dedicated UK onboarding
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-champagne-300" /> HMRC MTD compliant
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-champagne-300" /> UK hosted & GDPR protected
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FinalCTA;
