import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import {
  ChevronDown, X, Sparkles, Users2, Receipt, LifeBuoy,
  FolderKanban, HeartHandshake, MessageSquareText, BarChart3,
  Cpu, ArrowRight, ShieldCheck, HelpCircle, Briefcase,
  Layers, Phone, Mail, Building2, Compass
} from 'lucide-react';
import { products } from '../../data/productsData';
import { solutions } from '../../data/solutionsData';
import { services } from '../../data/servicesData';
import { Button } from '../common/Button';
import { Logo } from '../common/Logo';
import { ThemeToggle } from '../common/ThemeToggle';

const productIcons = {
  crm: Users2,
  books: Receipt,
  desk: LifeBuoy,
  projects: FolderKanban,
  hr: HeartHandshake,
  connect: MessageSquareText,
  analytics: BarChart3,
  forms: Cpu,
};

export const MobileNav = ({ isOpen, onClose }) => {
  const [openSection, setOpenSection] = useState('products');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleSection = (section) => {
    setOpenSection(prev => prev === section ? null : section);
  };

  const navContent = (
    <div className="fixed inset-0 z-[9999] lg:hidden flex justify-end">
      {/* Dark overlay backdrop */}
      <div
        className="fixed inset-0 bg-brand-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <div className="relative w-full max-w-md h-full bg-white dark:bg-brand-slate-900 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-brand-emerald-200 dark:border-brand-emerald-800 z-10 animate-fadeIn">
        <div>
          {/* Top Bar Header */}
          <div className="sticky top-0 bg-white/95 dark:bg-brand-slate-900/95 backdrop-blur-md z-20 flex items-center justify-between p-5 border-b border-brand-emerald-100 dark:border-brand-emerald-800/80">
            <Logo size="sm" onClick={onClose} />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={onClose}
                className="p-2.5 rounded-2xl bg-brand-emerald-50 dark:bg-brand-slate-800 text-brand-slate-700 dark:text-brand-slate-200 hover:bg-brand-emerald-100 dark:hover:bg-brand-slate-700 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-brand-slate-900 dark:text-white" />
              </button>
            </div>
          </div>

          {/* Nav Items Container */}
          <div className="p-5 space-y-3">
            {/* 1. ABOUT US (FIRST IN ORDER) */}
            <Link
              to="/about"
              onClick={onClose}
              className="flex items-center justify-between p-4 rounded-2xl font-heading font-extrabold text-sm text-brand-slate-900 dark:text-white bg-brand-emerald-50/70 dark:bg-brand-emerald-950/50 border border-brand-emerald-200 dark:border-brand-emerald-800/60 hover:bg-brand-emerald-100 dark:hover:bg-brand-emerald-900/60 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-brand-emerald-600 dark:text-brand-emerald-400" />
                <span>About Us (Hull, UK)</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-emerald-200 dark:bg-brand-emerald-900 text-brand-emerald-900 dark:text-brand-emerald-200">
                Our Story
              </span>
            </Link>

            {/* 2. PRODUCTS ACCORDION (All 8 Modules) */}
            <div className="rounded-2xl border border-brand-emerald-200/60 dark:border-brand-emerald-900/40 bg-brand-emerald-50/30 dark:bg-brand-slate-950/40 overflow-hidden">
              <button
                onClick={() => toggleSection('products')}
                className="w-full flex items-center justify-between p-4 font-heading font-extrabold text-sm text-brand-slate-900 dark:text-white hover:bg-brand-emerald-50/80 dark:hover:bg-brand-slate-800/50 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-emerald-500 animate-pulse"></div>
                  <span>Products & Cloud Modules (8 Apps)</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-brand-emerald-600 dark:text-brand-emerald-400 transition-transform duration-200 ${openSection === 'products' ? 'rotate-180' : ''}`} />
              </button>

              {openSection === 'products' && (
                <div className="px-3 pb-3 space-y-1.5 pt-1 border-t border-brand-emerald-100 dark:border-brand-emerald-900/50">
                  <Link
                    to="/products"
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl text-xs font-heading font-bold text-brand-emerald-700 dark:text-brand-emerald-300 bg-brand-emerald-100/60 dark:bg-brand-emerald-950/60 hover:bg-brand-emerald-200/60 transition-colors"
                  >
                    <span>All Products Suite Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {products.map(p => {
                    const Icon = productIcons[p.id] || Sparkles;
                    return (
                      <Link
                        key={p.id}
                        to={`/products/${p.slug}`}
                        onClick={onClose}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-brand-slate-800/80 border border-brand-emerald-100/80 dark:border-brand-slate-700/60 hover:border-brand-emerald-400 transition-all group"
                      >
                        <div
                          className="p-2 rounded-lg text-white shrink-0 shadow-sm"
                          style={{ backgroundColor: p.color }}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <h4 className="font-heading font-bold text-xs text-brand-slate-900 dark:text-white group-hover:text-brand-emerald-600 dark:group-hover:text-brand-emerald-300 truncate">
                              {p.name}
                            </h4>
                            {p.badge && (
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-brand-emerald-100 text-brand-emerald-800 dark:bg-brand-emerald-950 dark:text-brand-emerald-300 shrink-0">
                                {p.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-brand-slate-500 dark:text-brand-slate-400 truncate mt-0.5">
                            {p.tagline}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 3. SOLUTIONS ACCORDION */}
            <div className="rounded-2xl border border-brand-slate-200/60 dark:border-brand-slate-800 overflow-hidden">
              <button
                onClick={() => toggleSection('solutions')}
                className="w-full flex items-center justify-between p-4 font-heading font-extrabold text-sm text-brand-slate-900 dark:text-white hover:bg-brand-emerald-50/50 dark:hover:bg-brand-slate-800/50 transition-colors"
              >
                <span>Solutions by Industry</span>
                <ChevronDown className={`w-4 h-4 text-brand-emerald-600 dark:text-brand-emerald-400 transition-transform duration-200 ${openSection === 'solutions' ? 'rotate-180' : ''}`} />
              </button>

              {openSection === 'solutions' && (
                <div className="px-3 pb-3 space-y-1 pt-1 border-t border-brand-slate-100 dark:border-brand-slate-800">
                  <Link
                    to="/solutions"
                    onClick={onClose}
                    className="block p-2 text-xs font-bold text-brand-emerald-600 dark:text-brand-emerald-300"
                  >
                    Solutions Hub →
                  </Link>
                  {solutions.industries.map(ind => (
                    <Link
                      key={ind.id}
                      to={`/solutions?tab=${ind.slug}`}
                      onClick={onClose}
                      className="block p-2 text-xs font-medium text-brand-slate-700 dark:text-brand-slate-300 hover:text-brand-emerald-600"
                    >
                      {ind.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 4. SERVICES ACCORDION */}
            <div className="rounded-2xl border border-brand-slate-200/60 dark:border-brand-slate-800 overflow-hidden">
              <button
                onClick={() => toggleSection('services')}
                className="w-full flex items-center justify-between p-4 font-heading font-extrabold text-sm text-brand-slate-900 dark:text-white hover:bg-brand-emerald-50/50 dark:hover:bg-brand-slate-800/50 transition-colors"
              >
                <span>Services & Engineering</span>
                <ChevronDown className={`w-4 h-4 text-brand-emerald-600 dark:text-brand-emerald-400 transition-transform duration-200 ${openSection === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {openSection === 'services' && (
                <div className="px-3 pb-3 space-y-1 pt-1 border-t border-brand-slate-100 dark:border-brand-slate-800">
                  <Link
                    to="/services"
                    onClick={onClose}
                    className="block p-2 text-xs font-bold text-brand-emerald-600 dark:text-brand-emerald-300"
                  >
                    All Services →
                  </Link>
                  {services.map(s => (
                    <Link
                      key={s.id}
                      to="/services"
                      onClick={onClose}
                      className="block p-2 text-xs font-medium text-brand-slate-700 dark:text-brand-slate-300 hover:text-brand-emerald-600"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 5. DIRECT LINKS */}
            <div className="pt-2 space-y-1">
              <Link
                to="/resources"
                onClick={onClose}
                className="block p-3 rounded-2xl font-heading font-bold text-sm text-brand-slate-900 dark:text-white hover:bg-brand-emerald-50 dark:hover:bg-brand-slate-800"
              >
                Resources & Blog
              </Link>
              <Link
                to="/careers"
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-2xl font-heading font-bold text-sm text-brand-slate-900 dark:text-white hover:bg-brand-emerald-50 dark:hover:bg-brand-slate-800"
              >
                <span>Careers</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full gradient-emerald-mint text-white font-bold">
                  Hiring
                </span>
              </Link>
              <Link
                to="/contact"
                onClick={onClose}
                className="block p-3 rounded-2xl font-heading font-bold text-sm text-brand-slate-900 dark:text-white hover:bg-brand-emerald-50 dark:hover:bg-brand-slate-800"
              >
                Contact & Support
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="p-5 border-t border-brand-emerald-100 dark:border-brand-slate-800 bg-brand-slate-50/80 dark:bg-brand-slate-950/80 space-y-2.5">
          <Button
            to="/demo"
            onClick={onClose}
            variant="primary"
            size="lg"
            className="w-full"
          >
            Book a Live Demo
          </Button>
          <Button
            to="/contact"
            onClick={onClose}
            variant="outline"
            size="md"
            className="w-full"
          >
            Contact UK Support
          </Button>
        </div>
      </div>
    </div>
  );

  return createPortal(navContent, document.body);
};
export default MobileNav;
