import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { SignupForm } from '../components/forms/SignupForm';
import { Logo } from '../components/common/Logo';
import { CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export const SignUpPage = () => {
  return (
    <div className="py-12 sm:py-20">
      <SEO
        title="Start Your 14-Day Free Trial - SASIG Suite"
        description="Create your SASIG cloud account. Instant access to all 8 applications. No credit card required."
        canonical="/signup"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full gradient-mint-yellow text-brand-plum-900 text-xs font-heading font-black">
              <Sparkles className="w-3.5 h-3.5" />
              14-Day Free Access
            </span>

            <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-brand-plum-900 dark:text-white leading-[1.1]">
              Start growing faster with SASIG today.
            </h1>

            <p className="text-base sm:text-lg text-brand-plum-600 dark:text-brand-plum-300 leading-relaxed">
              Unify your pipeline, accounts, team projects, and customer tickets in under 3 minutes.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-300">
                <CheckCircle2 className="w-5 h-5 text-brand-mint-500 shrink-0" />
                <span>Full access to all 8 applications for 14 days.</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-300">
                <CheckCircle2 className="w-5 h-5 text-brand-mint-500 shrink-0" />
                <span>No credit card required to begin.</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-300">
                <CheckCircle2 className="w-5 h-5 text-brand-mint-500 shrink-0" />
                <span>UK GDPR & ISO 27001 secure cloud data residency.</span>
              </div>
            </div>

            <p className="text-xs text-brand-plum-500 dark:text-brand-plum-400 pt-4">
              Already have a SASIG account?{" "}
              <Link to="/login" className="text-brand-violet-600 dark:text-brand-violet-300 font-bold underline hover:text-brand-pink-500">
                Sign in to workspace →
              </Link>
            </p>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-6">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};
