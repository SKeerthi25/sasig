import React from 'react';
import { companyInfo } from '../data/companyInfo';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { ContactForm } from '../components/forms/ContactForm';
import { Card } from '../components/common/Card';
import {
  Mail, Phone, MapPin, Clock, ShieldCheck, Building2,
  CheckCircle2, MessageSquare, ExternalLink
} from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';

export const ContactPage = () => {
  return (
    <div className="py-12 sm:py-20">
      <SEO
        title="Contact Us - Hull UK Office & Support Desk"
        description="Get in touch with SASIG LTD. Call 07344 860889 or email company@sasigltd.com. Registered office: Paragon Street, Hull, UK."
        canonical="/contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Direct UK Support"
          badgeVariant="gradient"
          title="Get in Touch with SASIG."
          highlightText="We're Here in Hull."
          subtitle="Whether you have questions about the software suite or want technical advice, our UK team is ready to assist."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Left Contact Form (Span 7) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Direct Details & Office Card (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <Card color="emerald" className="space-y-6">
              <div>
                <h3 className="font-heading font-black text-xl text-brand-slate-900 dark:text-white mb-4">
                  Registered UK Office
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-brand-slate-700 dark:text-brand-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-brand-emerald-100 dark:bg-brand-emerald-950 text-brand-emerald-700 dark:text-brand-emerald-300 shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-brand-emerald-500" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-slate-900 dark:text-white">Registered Address:</p>
                      <p className="mt-0.5 leading-relaxed">{companyInfo.registeredOffice}</p>
                      <p className="text-[11px] text-brand-slate-400 mt-1">Company No: {companyInfo.number} • Registered in England & Wales</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-brand-emerald-100 dark:bg-brand-emerald-950 text-brand-emerald-700 dark:text-brand-emerald-300 shrink-0 mt-0.5">
                      <Phone className="w-5 h-5 text-brand-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-slate-900 dark:text-white">Telephone:</p>
                      <a href={`tel:${companyInfo.phone}`} className="text-brand-emerald-600 dark:text-brand-emerald-300 font-bold hover:underline">
                        {companyInfo.phone} ({companyInfo.intlPhone})
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-brand-champagne-100 dark:bg-brand-champagne-950 text-brand-champagne-700 dark:text-brand-champagne-300 shrink-0 mt-0.5">
                      <Mail className="w-5 h-5 text-brand-champagne-500" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-slate-900 dark:text-white">Email Enquiries:</p>
                      <a href={`mailto:${companyInfo.email}`} className="text-brand-emerald-600 dark:text-brand-emerald-300 font-bold hover:underline">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-brand-mint-100 dark:bg-brand-mint-950 text-brand-mint-800 dark:text-brand-mint-300 shrink-0 mt-0.5">
                      <Clock className="w-5 h-5 text-brand-mint-600" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-slate-900 dark:text-white">UK Operating Hours:</p>
                      <div className="mt-1 space-y-0.5 text-xs">
                        <p className="font-medium text-brand-emerald-700 dark:text-brand-emerald-300">
                          {companyInfo.weekdayHours}
                        </p>
                        <p className="font-medium text-brand-champagne-700 dark:text-brand-champagne-400">
                          {companyInfo.weekendHours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Interactive Hull Office Location Preview Map */}
            <div className="rounded-3xl bg-white dark:bg-brand-slate-900 border border-brand-emerald-200 dark:border-brand-emerald-800 p-4 shadow-obsidian-card overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-brand-emerald-100 dark:border-brand-emerald-800 text-xs font-bold text-brand-slate-900 dark:text-white">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-emerald-500" />
                  Paragon Street, Hull HU1 3PE
                </span>
                <span className="text-[10px] text-brand-emerald-600 font-bold">UK Hub</span>
              </div>

              {/* Styled Visual Map Graphic */}
              <div className="w-full h-44 rounded-2xl bg-gradient-to-br from-brand-emerald-50/50 via-brand-mint-50/30 to-brand-pearl dark:from-brand-slate-950 dark:to-brand-slate-800 relative flex items-center justify-center border border-brand-emerald-100 dark:border-brand-emerald-800">
                <div className="text-center p-4">
                  <div className="w-10 h-10 rounded-full gradient-emerald-mint text-white flex items-center justify-center mx-auto mb-2 shadow-emerald-glow animate-bounce-short">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="font-heading font-black text-xs text-brand-slate-900 dark:text-white">
                    SASIG LTD Headquarters
                  </p>
                  <p className="text-[10px] text-brand-slate-500 dark:text-brand-slate-400">
                    Apartment 1, 43-45 Paragon Street, Hull, HU1 3PE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FinalCTA />
    </div>
  );
};
export default ContactPage;
