import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, ShieldCheck, X, Lock } from 'lucide-react';
import { useCookieConsent } from '../../context/CookieConsentContext';
import { Button } from './Button';

export const CookieBanner = () => {
  const {
    consent,
    isBannerOpen,
    isPreferencesModalOpen,
    acceptAll,
    rejectNonEssential,
    saveCustomPreferences,
    openPreferencesModal,
    closePreferencesModal,
  } = useCookieConsent();

  const [prefs, setPrefs] = useState({
    necessary: true,
    preferences: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    if (consent) {
      setPrefs(consent);
    }
  }, [consent]);

  const handleToggle = (key) => {
    if (key === 'necessary') return;
    setPrefs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSavePreferences = () => {
    saveCustomPreferences(prefs);
  };

  return (
    <>
      {/* 1. Bottom Cookie Consent Banner */}
      {isBannerOpen && (
        <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-xl z-50 animate-bounce-short">
          <div className="p-6 rounded-3xl bg-white dark:bg-brand-obsidian-900 border-2 border-brand-emerald-300 dark:border-brand-emerald-700 shadow-2xl backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-brand-emerald-100 dark:bg-brand-emerald-950/80 text-brand-emerald-700 dark:text-brand-emerald-300 shrink-0">
                <Cookie className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-heading font-black text-lg text-brand-obsidian-900 dark:text-white">
                  We respect your privacy 🍪
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-brand-obsidian-600 dark:text-brand-obsidian-300 leading-relaxed">
                  We use cookies to improve your experience, analyze UK traffic patterns, and deliver tailored software solutions in compliance with UK GDPR. Read our{" "}
                  <Link to="/cookie-policy" className="text-brand-emerald-600 dark:text-brand-emerald-300 underline font-semibold hover:text-brand-champagne-600">
                    Cookie Policy
                  </Link>.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  <Button size="sm" variant="primary" onClick={acceptAll}>
                    Accept All
                  </Button>
                  <Button size="sm" variant="outline" onClick={rejectNonEssential}>
                    Reject Non-Essential
                  </Button>
                  <button
                    onClick={openPreferencesModal}
                    type="button"
                    className="text-xs font-heading font-bold text-brand-obsidian-600 dark:text-brand-obsidian-300 hover:text-brand-emerald-600 dark:hover:text-brand-emerald-300 underline ml-2 transition-colors"
                  >
                    Manage Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Detailed Cookie Preferences Modal */}
      {isPreferencesModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-obsidian-950/75 backdrop-blur-sm">
          <div className="w-full max-w-xl bg-white dark:bg-brand-obsidian-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-brand-emerald-200 dark:border-brand-emerald-800 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-brand-emerald-100 dark:border-brand-emerald-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-brand-emerald-100 dark:bg-brand-emerald-950/80 text-brand-emerald-700 dark:text-brand-emerald-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl text-brand-obsidian-900 dark:text-white">
                    Cookie Preferences
                  </h3>
                  <p className="text-xs text-brand-obsidian-500 dark:text-brand-obsidian-400">
                    UK GDPR & PECR Compliant Consent
                  </p>
                </div>
              </div>
              <button
                onClick={closePreferencesModal}
                className="p-2 rounded-xl text-brand-obsidian-400 hover:bg-brand-emerald-100 dark:hover:bg-brand-obsidian-800 transition-colors"
                aria-label="Close preferences modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cookie Categories Toggles */}
            <div className="py-6 space-y-4">
              {/* Strictly Necessary */}
              <div className="p-4 rounded-2xl bg-brand-emerald-50/50 dark:bg-brand-obsidian-950/50 border border-brand-emerald-100 dark:border-brand-emerald-900 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-brand-emerald-600 dark:text-brand-emerald-400" />
                    <h5 className="font-heading font-bold text-sm text-brand-obsidian-900 dark:text-white">
                      Strictly Necessary Cookies
                    </h5>
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-brand-emerald-200 text-brand-emerald-800 dark:bg-brand-emerald-900 dark:text-brand-emerald-200">
                      Always Active
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-brand-obsidian-600 dark:text-brand-obsidian-300 leading-relaxed">
                    Essential for secure authentication, CSRF validation, page routing, and remembering cookie consent state.
                  </p>
                </div>
                <div className="pt-1">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled={true}
                    className="w-5 h-5 accent-brand-emerald-600 cursor-not-allowed opacity-75"
                  />
                </div>
              </div>

              {/* Preferences Cookies */}
              <div className="p-4 rounded-2xl bg-white dark:bg-brand-obsidian-800 border border-brand-emerald-100 dark:border-brand-emerald-900 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h5 className="font-heading font-bold text-sm text-brand-obsidian-900 dark:text-white">
                    Preferences & UI Customisation
                  </h5>
                  <p className="mt-1 text-xs text-brand-obsidian-600 dark:text-brand-obsidian-300 leading-relaxed">
                    Stores your chosen UI theme (dark/light mode), region formatting, and dashboard layout settings.
                  </p>
                </div>
                <div className="pt-1">
                  <input
                    type="checkbox"
                    id="pref-toggle"
                    checked={prefs.preferences}
                    onChange={() => handleToggle('preferences')}
                    className="w-5 h-5 accent-brand-emerald-600 cursor-pointer rounded"
                  />
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="p-4 rounded-2xl bg-white dark:bg-brand-obsidian-800 border border-brand-emerald-100 dark:border-brand-emerald-900 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h5 className="font-heading font-bold text-sm text-brand-obsidian-900 dark:text-white">
                    Analytics & Performance
                  </h5>
                  <p className="mt-1 text-xs text-brand-obsidian-600 dark:text-brand-obsidian-300 leading-relaxed">
                    Collects anonymised telemetry to help us measure site speed, feature popularity, and software performance.
                  </p>
                </div>
                <div className="pt-1">
                  <input
                    type="checkbox"
                    id="analytics-toggle"
                    checked={prefs.analytics}
                    onChange={() => handleToggle('analytics')}
                    className="w-5 h-5 accent-brand-champagne-500 cursor-pointer rounded"
                  />
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="p-4 rounded-2xl bg-white dark:bg-brand-obsidian-800 border border-brand-emerald-100 dark:border-brand-emerald-900 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h5 className="font-heading font-bold text-sm text-brand-obsidian-900 dark:text-white">
                    Marketing & Retargeting
                  </h5>
                  <p className="mt-1 text-xs text-brand-obsidian-600 dark:text-brand-obsidian-300 leading-relaxed">
                    Allows us to serve relevant software announcements on external platforms and evaluate campaign reach.
                  </p>
                </div>
                <div className="pt-1">
                  <input
                    type="checkbox"
                    id="marketing-toggle"
                    checked={prefs.marketing}
                    onChange={() => handleToggle('marketing')}
                    className="w-5 h-5 accent-brand-rose-500 cursor-pointer rounded"
                  />
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-brand-emerald-100 dark:border-brand-emerald-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-brand-obsidian-500 dark:text-brand-obsidian-400">
                Consent preserved for 6 months.
              </span>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" onClick={rejectNonEssential}>
                  Reject Optional
                </Button>
                <Button size="sm" variant="primary" onClick={handleSavePreferences}>
                  Save Preferences
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
