import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Button } from '../components/common/Button';
import { CheckCircle2, ArrowRight, Home } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ThankYouPage = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'general';

  useEffect(() => {
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#059669', '#10B981', '#F59E0B', '#F43F5E']
      });
    } catch (e) {
      // fallback
    }
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <SEO
        title="Thank You - SASIG LTD"
        description="Thank you for getting in touch with SASIG LTD."
        canonical="/thank-you"
      />

      <div className="max-w-xl w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-full gradient-emerald-champagne text-white flex items-center justify-center mx-auto shadow-emerald-glow animate-bounce-short">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-brand-emerald-600 dark:text-brand-emerald-400">
            {type === 'signup' ? 'Workspace Initialized' : 'Submission Received'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-brand-obsidian-900 dark:text-white">
            You're all set! 🎉
          </h1>
          <p className="text-sm sm:text-base text-brand-obsidian-600 dark:text-brand-obsidian-300 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to SASIG LTD. A member of our Hull team will be in touch shortly.
          </p>
        </div>

        {/* Quick next steps */}
        <div className="p-6 rounded-3xl bg-white dark:bg-brand-obsidian-900 border border-brand-emerald-100 dark:border-brand-emerald-800 shadow-obsidian-card text-left space-y-3 text-xs sm:text-sm">
          <h4 className="font-heading font-bold text-brand-obsidian-900 dark:text-white">
            What happens next?
          </h4>
          <div className="flex items-start gap-2.5 text-brand-obsidian-700 dark:text-brand-obsidian-300">
            <span className="w-5 h-5 rounded-full gradient-emerald-champagne text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
            <span>Check your inbox for a confirmation email from <strong>company@sasigltd.com</strong>.</span>
          </div>
          <div className="flex items-start gap-2.5 text-brand-obsidian-700 dark:text-brand-obsidian-300">
            <span className="w-5 h-5 rounded-full bg-brand-champagne-500 text-brand-obsidian-950 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
            <span>Explore our interactive guides or schedule a live screen-share demo at your convenience.</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button to="/" variant="primary" size="md" icon={Home}>
            Return to Home
          </Button>
          <Button to="/products" variant="outline" size="md" iconRight={ArrowRight}>
            Explore Product Suite
          </Button>
        </div>
      </div>
    </div>
  );
};
