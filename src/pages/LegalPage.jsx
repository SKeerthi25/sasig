import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { legalPages } from '../data/legalData';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { companyInfo } from '../data/companyInfo';
import { ShieldCheck, Lock, FileText, ArrowLeft, Cookie } from 'lucide-react';
import { useCookieConsent } from '../context/CookieConsentContext';

export const LegalPage = () => {
  const location = useLocation();
  const path = location.pathname.replace('/', '');
  const { openPreferencesModal } = useCookieConsent();

  let policyKey = 'privacy';
  if (path === 'cookie-policy') policyKey = 'cookie';
  if (path === 'terms') policyKey = 'terms';
  if (path === 'acceptable-use') policyKey = 'acceptable';
  if (path === 'refund-policy') policyKey = 'refund';

  const policy = legalPages[policyKey] || legalPages.privacy;

  return (
    <div className="py-12 sm:py-20">
      <SEO
        title={policy.title}
        description={policy.summary}
        canonical={`/${path}`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation tabs between policies */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-brand-violet-100 dark:border-brand-violet-900">
          <Link
            to="/privacy-policy"
            className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-bold transition-all ${
              policyKey === 'privacy'
                ? 'gradient-violet-pink text-white shadow-sm'
                : 'bg-white dark:bg-brand-plum-900 text-brand-plum-700 dark:text-brand-plum-300 hover:text-brand-violet-600'
            }`}
          >
            Privacy Policy (UK GDPR)
          </Link>
          <Link
            to="/cookie-policy"
            className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-bold transition-all ${
              policyKey === 'cookie'
                ? 'gradient-violet-pink text-white shadow-sm'
                : 'bg-white dark:bg-brand-plum-900 text-brand-plum-700 dark:text-brand-plum-300 hover:text-brand-violet-600'
            }`}
          >
            Cookie Policy
          </Link>
          <Link
            to="/terms"
            className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-bold transition-all ${
              policyKey === 'terms'
                ? 'gradient-violet-pink text-white shadow-sm'
                : 'bg-white dark:bg-brand-plum-900 text-brand-plum-700 dark:text-brand-plum-300 hover:text-brand-violet-600'
            }`}
          >
            Terms of Service
          </Link>
          <Link
            to="/acceptable-use"
            className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-bold transition-all ${
              policyKey === 'acceptable'
                ? 'gradient-violet-pink text-white shadow-sm'
                : 'bg-white dark:bg-brand-plum-900 text-brand-plum-700 dark:text-brand-plum-300 hover:text-brand-violet-600'
            }`}
          >
            Acceptable Use
          </Link>
          <Link
            to="/refund-policy"
            className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-bold transition-all ${
              policyKey === 'refund'
                ? 'gradient-violet-pink text-white shadow-sm'
                : 'bg-white dark:bg-brand-plum-900 text-brand-plum-700 dark:text-brand-plum-300 hover:text-brand-violet-600'
            }`}
          >
            Refund Policy
          </Link>
        </div>

        {/* Policy Header */}
        <div className="space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-mint-600 dark:text-brand-mint-400">
            Legal & Compliance • Last Updated: {policy.lastUpdated}
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-brand-plum-900 dark:text-white">
            {policy.title}
          </h1>
          <p className="text-sm sm:text-base text-brand-plum-600 dark:text-brand-plum-300 leading-relaxed">
            {policy.summary}
          </p>

          {policyKey === 'cookie' && (
            <div className="pt-2">
              <button
                type="button"
                onClick={openPreferencesModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl gradient-mint-yellow text-brand-plum-900 font-heading font-black text-xs shadow-sm hover:brightness-105"
              >
                <Cookie className="w-4 h-4" />
                <span>Open Cookie Preferences Manager</span>
              </button>
            </div>
          )}
        </div>

        {/* Policy Sections */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-brand-plum-900 border border-brand-violet-100 dark:border-brand-violet-800 shadow-plum-card space-y-8">
          {policy.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="font-heading font-black text-xl text-brand-plum-900 dark:text-white">
                {section.heading}
              </h2>
              <div
                className="text-xs sm:text-sm text-brand-plum-700 dark:text-brand-plum-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}

          {/* Statutory Registration Box */}
          <div className="mt-8 pt-6 border-t border-brand-violet-100 dark:border-brand-violet-800 text-xs text-brand-plum-500 dark:text-brand-plum-400 bg-brand-cream/60 dark:bg-brand-plum-950/60 p-4 rounded-2xl">
            <p><strong>SASIG LTD</strong> — Private limited company registered in England & Wales.</p>
            <p>Company Registration No: <strong>17479126</strong> • Industry SIC: <strong>58290</strong></p>
            <p>Registered Office: {companyInfo.registeredOffice}</p>
            <p>Official Enquiries: <a href={`mailto:${companyInfo.email}`} className="text-brand-violet-600 underline">{companyInfo.email}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};
