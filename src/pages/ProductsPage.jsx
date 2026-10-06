import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/productsData';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import {
  Users2, Receipt, LifeBuoy, FolderKanban, HeartHandshake,
  MessageSquareText, BarChart3, Cpu, ArrowRight, CheckCircle2, Sparkles
} from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';

const iconMap = {
  Users2, Receipt, LifeBuoy, FolderKanban, HeartHandshake,
  MessageSquareText, BarChart3, Cpu
};

export const ProductsPage = () => {
  return (
    <div className="py-12 sm:py-20">
      <SEO
        title="Products Suite - 8 Integrated Cloud Apps"
        description="Explore SASIG's 8 native cloud business applications: CRM, Books, Desk, Projects, HR, Connect, Analytics, and Forms & Automation."
        canonical="/products"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Product Ecosystem"
          badgeVariant="gradient"
          title="Eight Powerful Applications."
          highlightText="One Unified Engine."
          subtitle="Designed from the ground up to eliminate duplicate data entry, simplify team handoffs, and scale smoothly with your UK business."
        />

        {/* 8 Product Cards in 2-column or 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {products.map((p) => {
            const Icon = iconMap[p.icon] || Sparkles;
            return (
              <Card
                key={p.id}
                color={p.themeClass.replace('brand-', '')}
                className="flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-3 rounded-2xl text-white shadow-md group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: p.color }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-wider font-bold text-brand-plum-500 dark:text-brand-plum-400">
                          {p.category}
                        </span>
                        <h3 className="font-heading font-black text-2xl text-brand-plum-900 dark:text-white">
                          {p.name}
                        </h3>
                      </div>
                    </div>

                    {p.badge && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-violet-100 text-brand-violet-800 dark:bg-brand-violet-950 dark:text-brand-violet-300">
                        {p.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-heading font-semibold text-brand-violet-600 dark:text-brand-violet-300 mb-2">
                    {p.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-brand-plum-600 dark:text-brand-plum-300 leading-relaxed mb-6">
                    {p.heroDesc}
                  </p>

                  {/* 4 Feature bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-brand-plum-700 dark:text-brand-plum-300">
                    {p.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-mint-500 shrink-0 mt-0.5" />
                        <span className="font-medium">{feat.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-violet-100 dark:border-brand-violet-800 flex items-center justify-between">
                  <Link
                    to={`/products/${p.slug}`}
                    className="inline-flex items-center gap-1.5 font-heading font-bold text-xs sm:text-sm text-brand-violet-600 dark:text-brand-violet-300 hover:text-brand-pink-500 group/btn"
                  >
                    <span>Explore Features & Mockups</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <Button to="/demo" variant="outline" size="sm">
                    Book Demo
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <FinalCTA />
    </div>
  );
};
