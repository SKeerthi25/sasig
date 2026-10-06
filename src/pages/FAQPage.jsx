import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { ChevronDown, HelpCircle, ShieldCheck, Mail, Phone } from 'lucide-react';
import { Button } from '../components/common/Button';
import { companyInfo } from '../data/companyInfo';
import { FinalCTA } from '../components/home/FinalCTA';

export const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What makes SASIG different from other business software suites?",
      a: "SASIG is built natively for UK businesses. All 8 applications (CRM, Books, Desk, Projects, HR, Connect, Analytics, Forms) share the exact same clean database, eliminating double-entry and fragmented spreadsheets. Plus, we offer UK VAT/MTD compliance, Open Banking, and real human support from our Hull office."
    },
    {
      q: "How does HMRC Making Tax Digital (MTD) work inside SASIG Books?",
      a: "SASIG Books is designed in full compliance with HMRC digital link rules. Connect your UK bank account via Open Banking to reconcile transactions automatically, calculate your VAT return in real time, and submit directly to HMRC with 1 click."
    },
    {
      q: "Can I migrate our existing data from other software platforms?",
      a: "Yes! SASIG offers 1-click native CSV and API import tools for HubSpot, Salesforce, Xero, QuickBooks, Zendesk, and Asana. Our UK customer onboarding team also provides free white-glove data migration assistance for Business and Enterprise tiers."
    },
    {
      q: "Where is our company data hosted?",
      a: "All customer data is encrypted using 256-bit AES at rest and TLS 1.3 in transit, hosted exclusively within ISO 27001-certified UK/EEA data centres in full compliance with the UK Data Protection Act 2018 and UK GDPR."
    },
    {
      q: "Can we add or remove user seat licenses as our team grows?",
      a: "Yes, you can adjust your seat count or upgrade/downgrade plans at any point from your billing dashboard. Changes are prorated automatically to the day."
    },
    {
      q: "Do you offer tailored custom software engineering or API integrations?",
      a: "Yes! Our Hull-based software engineering team builds custom workflows, bespoke mobile apps, and dedicated internal system bridges. Visit our Services page or contact company@sasigltd.com to discuss project requirements."
    }
  ];

  return (
    <div className="py-12 sm:py-20">
      <SEO
        title="Help Centre & Frequently Asked Questions"
        description="Find answers to common questions about SASIG Suite: HMRC MTD compliance, data migration, security, pricing, and UK support."
        canonical="/faq"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Help Centre"
          badgeVariant="yellow"
          title="Frequently Asked Questions."
          highlightText="Clear Answers."
          subtitle="Everything you need to know about SASIG's applications, billing, security, and UK support."
        />

        <div className="max-w-3xl mx-auto mb-20 space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white dark:bg-brand-plum-900 border border-brand-violet-100 dark:border-brand-violet-800 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between font-heading font-black text-base text-brand-plum-900 dark:text-white hover:text-brand-violet-600 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand-violet-500 shrink-0 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-brand-plum-600 dark:text-brand-plum-300 leading-relaxed border-t border-brand-violet-50 dark:border-brand-violet-900 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions card */}
        <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-brand-violet-50 dark:bg-brand-plum-900 border border-brand-violet-200 dark:border-brand-violet-800 text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl gradient-violet-pink text-white flex items-center justify-center mx-auto shadow-violet-glow">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-black text-xl text-brand-plum-900 dark:text-white">
            Have a specific question not listed here?
          </h3>
          <p className="text-xs sm:text-sm text-brand-plum-600 dark:text-brand-plum-300">
            Our UK support specialists are available Monday to Friday from 08:30 to 17:30 GMT.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Button to="/contact" variant="primary" size="md">
              Contact Hull Support
            </Button>
            <Button to="/demo" variant="outline" size="md">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <FinalCTA />
      </div>
    </div>
  );
};
