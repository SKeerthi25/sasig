import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { products } from '../data/productsData';
import { SEO } from '../components/common/SEO';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { CRMMockup } from '../components/mockups/CRMMockup';
import { BooksMockup } from '../components/mockups/BooksMockup';
import { FinalCTA } from '../components/home/FinalCTA';
import {
  Users2, Receipt, LifeBuoy, FolderKanban, HeartHandshake,
  MessageSquareText, BarChart3, Cpu, CheckCircle2, ChevronDown,
  Sparkles, ArrowRight, ShieldCheck, Play, ArrowLeft, Star
} from 'lucide-react';

const iconMap = {
  Users2, Receipt, LifeBuoy, FolderKanban, HeartHandshake,
  MessageSquareText, BarChart3, Cpu
};

export const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [openFaq, setOpenFaq] = useState(0);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const ProductIcon = iconMap[product.icon] || Sparkles;

  return (
    <div className="py-10 sm:py-16">
      <SEO
        title={`${product.name} - ${product.tagline}`}
        description={`${product.heroDesc} Learn how ${product.name} helps UK businesses grow faster.`}
        canonical={`/products/${product.slug}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation breadcrumb */}
        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-brand-plum-600 dark:text-brand-plum-400 hover:text-brand-violet-600 dark:hover:text-brand-violet-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* 1. PRODUCT HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-16">
          <div className="inline-flex items-center gap-2">
            <div
              className="p-3 rounded-2xl text-white shadow-md"
              style={{ backgroundColor: product.color }}
            >
              <ProductIcon className="w-7 h-7" />
            </div>
            <span className="text-sm font-heading font-bold uppercase tracking-wider text-brand-violet-600 dark:text-brand-violet-300">
              {product.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-brand-plum-900 dark:text-white leading-[1.1]">
            {product.name}
          </h1>

          <p className="text-lg sm:text-2xl font-heading font-bold text-gradient-violet-pink max-w-2xl mx-auto">
            {product.tagline}
          </p>

          <p className="text-base sm:text-lg text-brand-plum-600 dark:text-brand-plum-300 max-w-3xl mx-auto leading-relaxed">
            {product.heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              to="/demo"
              variant="primary"
              size="lg"
              icon={Play}
              className="w-full sm:w-auto"
            >
              Book a Live Demo
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Contact Sales & Support
            </Button>
          </div>

          {/* 3 Metric Pills */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-3xl bg-white dark:bg-brand-plum-900 border border-brand-violet-100 dark:border-brand-violet-800 shadow-plum-card max-w-xl mx-auto mt-6">
            {product.stats.map((st, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl sm:text-2xl font-heading font-black text-brand-violet-600 dark:text-brand-violet-300">
                  {st.value}
                </div>
                <div className="text-[11px] font-medium text-brand-plum-500 dark:text-brand-plum-400">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. PRODUCT SOFTWARE SCREENSHOT SPOTLIGHT */}
        <div className="mb-20 space-y-6">
          <div className="rounded-3xl bg-brand-obsidian-900 dark:bg-brand-obsidian-950 p-2 sm:p-3 shadow-2xl border-2 border-brand-emerald-500/30 overflow-hidden group">
            {/* Window title bar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-brand-obsidian-800 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-brand-champagne-400"></div>
                <div className="w-3 h-3 rounded-full bg-brand-emerald-400"></div>
                <span className="ml-2 font-mono text-[11px] text-brand-obsidian-300">
                  app.sasigltd.co.uk/{product.slug}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-emerald-950 text-brand-emerald-300 border border-brand-emerald-800 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald-400 animate-pulse"></span>
                  UK Cloud Active
                </span>
              </div>
            </div>

            {/* Software image */}
            <div className="relative overflow-hidden rounded-2xl bg-brand-obsidian-950">
              <img
                src={
                  product.id === 'crm' ? '/images/crm_pipeline.jpg' :
                  product.id === 'books' ? '/images/books_accounting.jpg' :
                  product.id === 'projects' ? '/images/projects_tasks.jpg' :
                  '/images/hero_dashboard.jpg'
                }
                alt={`${product.name} software interface screenshot`}
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.01] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Interactive contextual widget below image */}
          {product.id === 'crm' && <CRMMockup />}
          {product.id === 'books' && <BooksMockup />}
        </div>

        {/* 3. DETAILED ALTERNATING FEATURE SECTIONS */}
        <div className="space-y-16 mb-24">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-black text-brand-plum-900 dark:text-white">
              Core Capabilities & Features
            </h2>
            <p className="text-sm text-brand-plum-500 dark:text-brand-plum-400 mt-2">
              Everything your team needs to work faster with zero friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-plum-900 border border-brand-violet-100 dark:border-brand-violet-800 shadow-plum-card space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-brand-violet-100 dark:bg-brand-violet-950 text-brand-violet-700 dark:text-brand-violet-300 flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <h3 className="font-heading font-black text-xl text-brand-plum-900 dark:text-white">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-plum-600 dark:text-brand-plum-300 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. PRODUCT-SPECIFIC FAQS ACCORDION */}
        {product.faqs && product.faqs.length > 0 && (
          <div className="max-w-3xl mx-auto mb-24">
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-center text-brand-plum-900 dark:text-white mb-8">
              Frequently Asked Questions About {product.name}
            </h3>

            <div className="space-y-3">
              {product.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-brand-plum-900 border border-brand-violet-100 dark:border-brand-violet-800 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between font-heading font-bold text-sm text-brand-plum-900 dark:text-white"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-brand-violet-500 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-brand-plum-600 dark:text-brand-plum-300 leading-relaxed border-t border-brand-violet-50 dark:border-brand-violet-900 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <FinalCTA />
    </div>
  );
};
