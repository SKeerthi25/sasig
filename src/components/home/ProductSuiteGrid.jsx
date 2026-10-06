import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/productsData';
import {
  Users2, Receipt, LifeBuoy, FolderKanban, HeartHandshake,
  MessageSquareText, BarChart3, Cpu, ArrowRight, CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';

const iconMap = {
  Users2, Receipt, LifeBuoy, FolderKanban, HeartHandshake,
  MessageSquareText, BarChart3, Cpu
};

export const ProductSuiteGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const CurrentIcon = iconMap[selectedProduct.icon] || Sparkles;

  return (
    <section className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="8 Applications, One Hub"
          badgeVariant="gradient"
          title="The Complete UK SaaS Suite."
          highlightText="Zero Disconnected Silos."
          subtitle="Stop switching between ten different logins. Every SASIG app shares data instantly, creating an effortless operating system for your business."
        />

        {/* Interactive App Selector Tabs (8 Apps) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 mb-10">
          {products.map((p) => {
            const Icon = iconMap[p.icon] || Sparkles;
            const isSelected = selectedProduct.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedProduct(p)}
                className={`p-3 sm:p-4 rounded-2xl flex flex-col items-center text-center transition-all duration-300 border ${
                  isSelected
                    ? 'bg-white dark:bg-brand-obsidian-900 border-brand-emerald-500 shadow-obsidian-card scale-105 -translate-y-1'
                    : 'bg-brand-pearl/60 dark:bg-brand-obsidian-900/40 border-brand-emerald-100 dark:border-brand-emerald-900/50 hover:bg-white dark:hover:bg-brand-obsidian-800'
                }`}
              >
                <div
                  className="p-2.5 rounded-xl text-white mb-2 shadow-sm transition-transform"
                  style={{ backgroundColor: p.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-heading font-bold text-brand-obsidian-900 dark:text-white truncate w-full">
                  {p.name.replace('SASIG ', '')}
                </span>
                <span className="text-[10px] text-brand-obsidian-500 dark:text-brand-obsidian-400 truncate w-full mt-0.5">
                  {p.category.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Product Feature Spotlight Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-brand-obsidian-900 border-2 border-brand-emerald-200 dark:border-brand-emerald-800 shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div
                  className="p-3 rounded-2xl text-white shadow-md"
                  style={{ backgroundColor: selectedProduct.color }}
                >
                  <CurrentIcon className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-emerald-600 dark:text-brand-emerald-300">
                    {selectedProduct.category}
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-brand-obsidian-900 dark:text-white">
                    {selectedProduct.name}
                  </h3>
                </div>
              </div>

              <p className="text-base sm:text-lg text-brand-obsidian-700 dark:text-brand-obsidian-200 leading-relaxed">
                {selectedProduct.heroDesc}
              </p>

              {/* 3 Key Stats */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 border border-brand-emerald-100 dark:border-brand-emerald-900">
                {selectedProduct.stats.map((st, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg sm:text-xl font-heading font-black text-brand-emerald-600 dark:text-brand-emerald-300">
                      {st.value}
                    </div>
                    <div className="text-[11px] font-medium text-brand-obsidian-500 dark:text-brand-obsidian-400">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Core Features List */}
              <div className="space-y-3">
                {selectedProduct.features.slice(0, 3).map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-sm text-brand-obsidian-900 dark:text-white">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-brand-obsidian-600 dark:text-brand-obsidian-300 mt-0.5">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  to={`/products/${selectedProduct.slug}`}
                  variant="primary"
                  size="md"
                  iconRight={ArrowRight}
                >
                  Explore {selectedProduct.name}
                </Button>
                <Button
                  to="/demo"
                  variant="outline"
                  size="md"
                >
                  Book a Demo
                </Button>
              </div>
            </div>

            {/* Right Mockup Column */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-3xl bg-brand-pearl/90 dark:bg-brand-obsidian-950/80 border border-brand-emerald-100 dark:border-brand-emerald-900 shadow-inner relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-brand-emerald-200 dark:border-brand-emerald-800 text-xs font-mono text-brand-obsidian-500 dark:text-brand-obsidian-400 mb-4">
                  <span>SASIG // {selectedProduct.name.toUpperCase()}</span>
                  <span className="px-2 py-0.5 rounded-full bg-brand-emerald-100 dark:bg-brand-emerald-950 text-brand-emerald-700 dark:text-brand-emerald-300 font-bold">
                    Active UK Module
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-white dark:bg-brand-obsidian-900 border border-brand-emerald-100 dark:border-brand-emerald-800 shadow-sm flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-brand-obsidian-900 dark:text-white">
                        {selectedProduct.features[0]?.title}
                      </p>
                      <p className="text-[11px] text-brand-obsidian-500 dark:text-brand-obsidian-400 mt-0.5">
                        Instant 2-way real-time data synchronization
                      </p>
                    </div>
                    <span className="p-2 rounded-xl bg-brand-champagne-500 text-brand-obsidian-950 font-bold text-xs">
                      100% Synced
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-brand-obsidian-900 border border-brand-emerald-100 dark:border-brand-emerald-800 shadow-sm">
                    <p className="text-xs font-bold text-brand-obsidian-900 dark:text-white mb-2">
                      Cross-Module Workflows
                    </p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-lg bg-brand-emerald-100 dark:bg-brand-emerald-950 text-brand-emerald-700 dark:text-brand-emerald-300 font-bold">
                        {selectedProduct.name}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-obsidian-400" />
                      <span className="px-2.5 py-1 rounded-lg bg-brand-champagne-100 dark:bg-brand-champagne-950 text-brand-champagne-700 dark:text-brand-champagne-300 font-bold">
                        SASIG Books
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-obsidian-400" />
                      <span className="px-2.5 py-1 rounded-lg bg-brand-rose-100 dark:bg-brand-rose-950 text-brand-rose-700 dark:text-brand-rose-300 font-bold">
                        SASIG Desk
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl gradient-emerald-champagne text-white shadow-emerald-glow flex items-center justify-between">
                    <div>
                      <p className="text-xs font-heading font-black">Ready to consolidate your business stack?</p>
                      <p className="text-[11px] text-brand-emerald-100">Setup takes under 15 minutes with our UK migration team.</p>
                    </div>
                    <Link
                      to="/demo"
                      className="px-3.5 py-1.5 rounded-xl bg-white text-brand-obsidian-950 font-heading font-black text-xs hover:bg-brand-pearl transition-transform shrink-0"
                    >
                      Book Walkthrough
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
