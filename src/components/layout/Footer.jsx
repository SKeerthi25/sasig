import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck,
  Cookie, ExternalLink, Sparkles, Building2
} from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';
import { products } from '../../data/productsData';
import { Logo } from '../common/Logo';
import { useCookieConsent } from '../../context/CookieConsentContext';

export const Footer = () => {
  const { openPreferencesModal } = useCookieConsent();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setIsSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setIsSubscribed(false), 6000);
  };

  return (
    <footer className="bg-brand-obsidian-900 text-brand-obsidian-100 dark:bg-brand-obsidian-950 border-t border-brand-emerald-900/40 relative overflow-hidden">
      {/* Top subtle decorative ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-brand-emerald-500 to-transparent opacity-40"></div>

      {/* 1. Pre-Footer Newsletter & Trust Banner */}
      <div className="border-b border-brand-obsidian-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-widest font-heading font-extrabold text-brand-champagne-400 mb-2 block">
                Stay Ahead of UK Business Tech
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">
                Get weekly SaaS efficiency & HMRC tax insights.
              </h3>
              <p className="mt-2 text-sm text-brand-obsidian-300">
                Join over 15,000 UK founders and business leaders receiving our no-nonsense Friday briefing.
              </p>
            </div>

            <div className="lg:col-span-6">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="w-5 h-5 text-brand-obsidian-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your business email..."
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-brand-obsidian-800 text-white placeholder-brand-obsidian-400 border border-brand-obsidian-700 focus:outline-none focus:ring-2 focus:ring-brand-emerald-400 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-2xl bg-brand-champagne-500 text-brand-obsidian-950 font-heading font-black text-sm hover:bg-brand-champagne-400 transition-all shrink-0 flex items-center justify-center gap-2 shadow-champagne-glow"
                >
                  <Send className="w-4 h-4" />
                  <span>Subscribe</span>
                </button>
              </form>
              {isSubscribed && (
                <p className="mt-2 text-xs text-brand-emerald-400 flex items-center gap-1.5 font-medium animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4" />
                  Thank you! You are subscribed to SASIG UK Business Insights.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main 5-Column Navigation Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand Info Column */}
          <div className="col-span-2 space-y-4">
            <Logo isWhite={true} size="md" showTagline={true} />
            
            <p className="text-xs text-brand-obsidian-300 leading-relaxed max-w-sm">
              The unified cloud software suite designed specifically for UK SMBs and scaleups. Smart CRM, Books, Projects, Support Desk, HR, and custom automations.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-2 pt-2 text-xs text-brand-obsidian-200">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2.5 hover:text-brand-emerald-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-emerald-400 shrink-0" />
                <span>UK Phone: {companyInfo.phone}</span>
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2.5 hover:text-brand-champagne-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-champagne-400 shrink-0" />
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-brand-obsidian-300">
                <MapPin className="w-4 h-4 text-brand-rose-400 shrink-0 mt-0.5" />
                <span>Apartment 1, 43-45 Paragon Street, Hull, HU1 3PE, UK</span>
              </div>
            </div>
          </div>

          {/* Column 1: Products */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-obsidian-300">
              {products.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="hover:text-brand-emerald-300 transition-colors block py-0.5"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="text-brand-emerald-400 font-semibold hover:text-brand-emerald-300 pt-1 block"
                >
                  All 8 Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions & Services */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-4">
              Solutions & Services
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-obsidian-300">
              <li>
                <Link to="/solutions?tab=startups" className="hover:text-brand-emerald-300 transition-colors">
                  For Startups & Scaleups
                </Link>
              </li>
              <li>
                <Link to="/solutions?tab=retail" className="hover:text-brand-emerald-300 transition-colors">
                  Retail & eCommerce
                </Link>
              </li>
              <li>
                <Link to="/solutions?tab=healthcare" className="hover:text-brand-emerald-300 transition-colors">
                  Healthcare & Clinics
                </Link>
              </li>
              <li>
                <Link to="/solutions?tab=finance" className="hover:text-brand-emerald-300 transition-colors">
                  Finance & Legal
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-emerald-300 transition-colors">
                  Custom Software Dev
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-emerald-300 transition-colors">
                  Web & Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-emerald-300 transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Company */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-4">
              Company & Hub
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-obsidian-300">
              <li>
                <Link to="/about" className="hover:text-brand-champagne-300 transition-colors">
                  About Us (Hull, UK)
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-brand-champagne-300 transition-colors flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-brand-emerald-400 text-brand-obsidian-950 font-bold">
                    Join Us
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-brand-champagne-300 transition-colors">
                  Business Blog
                </Link>
              </li>
              <li>
                <Link to="/resources?tab=case-studies" className="hover:text-brand-champagne-300 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-champagne-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Compliance */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-4">
              Trust & Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-obsidian-300">
              <li>
                <Link to="/privacy-policy" className="hover:text-brand-champagne-300 transition-colors">
                  Privacy Policy (UK GDPR)
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-brand-champagne-300 transition-colors">
                  Cookie Policy (PECR)
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-brand-champagne-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/acceptable-use" className="hover:text-brand-champagne-300 transition-colors">
                  Acceptable Use Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-brand-champagne-300 transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openPreferencesModal}
                  className="flex items-center gap-1.5 text-brand-champagne-400 hover:text-brand-champagne-300 text-xs font-semibold underline mt-2"
                >
                  <Cookie className="w-3.5 h-3.5" />
                  <span>Cookie Settings</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Statutory UK Registration Legal Details Bar */}
      <div className="bg-brand-obsidian-950 border-t border-brand-obsidian-800/80 py-8 text-xs text-brand-obsidian-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="space-y-1">
              <p className="font-medium text-brand-obsidian-300">
                <strong className="text-white">SASIG LTD</strong> is a private limited company registered in England & Wales (Company No. <strong>17479126</strong>).
              </p>
              <p className="text-[11px] text-brand-obsidian-400">
                Registered Office: {companyInfo.registeredOffice} • Industry SIC: {companyInfo.sic} • Phone: {companyInfo.phone} • Email: {companyInfo.email}
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <span className="text-[11px] text-brand-obsidian-400">
                © {new Date().getFullYear()} SASIG LTD. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
