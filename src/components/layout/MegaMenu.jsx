import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/productsData';
import { solutions } from '../../data/solutionsData';
import { services } from '../../data/servicesData';
import {
  Users2, Receipt, LifeBuoy, FolderKanban, HeartHandshake,
  MessageSquareText, BarChart3, Cpu, ArrowRight, Sparkles,
  Rocket, ShoppingBag, ActivitySquare, GraduationCap, ShieldAlert,
  Boxes, Target, Megaphone, Headphones, Coins,
  Code2, Smartphone, Palette, CloudCog, Briefcase, BookOpen,
  FileText, Video, Download, HelpCircle
} from 'lucide-react';

const iconMap = {
  Users2, Receipt, LifeBuoy, FolderKanban, HeartHandshake,
  MessageSquareText, BarChart3, Cpu, Rocket, ShoppingBag,
  ActivitySquare, GraduationCap, ShieldAlert, Boxes, Target,
  Megaphone, Headphones, Coins, Code2, Smartphone,
  Palette, CloudCog, Briefcase, BookOpen, FileText, Video,
  Download, HelpCircle
};

export const MegaMenu = ({ activeMenu, onClose }) => {
  if (!activeMenu) return null;

  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-white/95 dark:bg-brand-obsidian-950/95 backdrop-blur-2xl shadow-2xl border-b border-brand-emerald-100 dark:border-brand-emerald-900/60 z-50 transition-all duration-300 animate-fadeIn"
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* 1. PRODUCTS MEGA MENU */}
        {activeMenu === 'products' && (
          <div>
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-brand-emerald-100 dark:border-brand-emerald-900">
              <div>
                <h3 className="font-heading font-black text-xl text-brand-obsidian-900 dark:text-white flex items-center gap-2">
                  <span>SASIG Cloud Software Suite</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full gradient-emerald-champagne text-white font-bold">
                    8 Native Apps
                  </span>
                </h3>
                <p className="text-xs text-brand-obsidian-500 dark:text-brand-obsidian-400 mt-0.5">
                  Integrated UK business apps designed to work seamlessly together.
                </p>
              </div>
              <Link
                to="/products"
                onClick={onClose}
                className="text-xs font-heading font-bold text-brand-emerald-600 dark:text-brand-emerald-300 hover:text-brand-champagne-600 flex items-center gap-1 group"
              >
                <span>View All Products Overview</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {products.map((p) => {
                const IconComponent = iconMap[p.icon] || Sparkles;
                return (
                  <Link
                    key={p.id}
                    to={`/products/${p.slug}`}
                    onClick={onClose}
                    className="group p-4 rounded-2xl border border-brand-emerald-100/80 dark:border-brand-emerald-900/40 bg-brand-emerald-50/20 dark:bg-brand-obsidian-900/40 hover:bg-white dark:hover:bg-brand-obsidian-800 hover:border-brand-emerald-400 hover:shadow-obsidian-card transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="p-2.5 rounded-xl text-white shrink-0 shadow-sm transition-transform group-hover:scale-110"
                        style={{ backgroundColor: p.color }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h4 className="font-heading font-bold text-sm text-brand-obsidian-900 dark:text-white group-hover:text-brand-emerald-600 dark:group-hover:text-brand-emerald-300 truncate">
                            {p.name}
                          </h4>
                          {p.badge && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-brand-emerald-100 text-brand-emerald-800 dark:bg-brand-emerald-950 dark:text-brand-emerald-300 shrink-0">
                              {p.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-brand-obsidian-500 dark:text-brand-obsidian-400 line-clamp-2 mt-1 leading-snug">
                          {p.tagline}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Bottom highlight bar */}
            <div className="mt-6 p-4 rounded-2xl gradient-emerald-mint text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/20">
                  <Sparkles className="w-5 h-5 text-brand-champagne-300" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm">Need a unified company-wide deployment?</h4>
                  <p className="text-xs text-white/90">Our UK team provides complete migration assistance and customized onboarding.</p>
                </div>
              </div>
              <Link
                to="/demo"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white text-brand-slate-950 font-heading font-bold text-xs hover:bg-brand-pearl transition-transform shrink-0 hover:scale-105"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        )}

        {/* 2. SOLUTIONS MEGA MENU */}
        {activeMenu === 'solutions' && (
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* By Industry */}
              <div className="lg:col-span-7">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-brand-emerald-100 dark:border-brand-emerald-900">
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-emerald-600 dark:text-brand-emerald-400">
                    By Industry
                  </h3>
                  <Link
                    to="/solutions"
                    onClick={onClose}
                    className="text-xs font-bold text-brand-obsidian-600 dark:text-brand-obsidian-300 hover:text-brand-champagne-600"
                  >
                    View All Industries →
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {solutions.industries.map((ind) => {
                    const IconComponent = iconMap[ind.icon] || Rocket;
                    return (
                      <Link
                        key={ind.id}
                        to={`/solutions?tab=${ind.slug}`}
                        onClick={onClose}
                        className="p-3.5 rounded-2xl bg-brand-pearl/60 dark:bg-brand-obsidian-900/50 hover:bg-white dark:hover:bg-brand-obsidian-800 border border-brand-emerald-100 dark:border-brand-emerald-900 hover:border-brand-champagne-400 hover:shadow-md transition-all group flex items-start gap-3"
                      >
                        <div className="p-2 rounded-xl bg-brand-emerald-100 dark:bg-brand-emerald-950 text-brand-emerald-700 dark:text-brand-emerald-300 group-hover:scale-110 transition-transform shrink-0">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-xs text-brand-obsidian-900 dark:text-white group-hover:text-brand-emerald-600 dark:group-hover:text-brand-emerald-300">
                            {ind.name}
                          </h4>
                          <p className="text-[11px] text-brand-obsidian-500 dark:text-brand-obsidian-400 line-clamp-1 mt-0.5">
                            {ind.tagline}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* By Team */}
              <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-brand-emerald-100 dark:border-brand-emerald-900 lg:pl-8">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-brand-emerald-100 dark:border-brand-emerald-900">
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-champagne-600">
                    By Business Team
                  </h3>
                </div>
                <div className="space-y-2">
                  {solutions.teams.map((t) => {
                    const IconComponent = iconMap[t.icon] || Target;
                    return (
                      <Link
                        key={t.id}
                        to={`/solutions?team=${t.slug}`}
                        onClick={onClose}
                        className="p-3 rounded-2xl hover:bg-brand-emerald-50/80 dark:hover:bg-brand-obsidian-900 border border-transparent hover:border-brand-champagne-300 transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-brand-champagne-100 dark:bg-brand-champagne-950 text-brand-champagne-700 dark:text-brand-champagne-300 group-hover:scale-110 transition-transform">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-heading font-bold text-xs text-brand-obsidian-900 dark:text-white group-hover:text-brand-champagne-600">
                              {t.name}
                            </h4>
                            <p className="text-[11px] text-brand-obsidian-500 dark:text-brand-obsidian-400">
                              {t.title}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-brand-obsidian-400 group-hover:text-brand-champagne-600 group-hover:translate-x-1 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. SERVICES MEGA MENU */}
        {activeMenu === 'services' && (
          <div>
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-brand-emerald-100 dark:border-brand-emerald-900">
              <div>
                <h3 className="font-heading font-black text-xl text-brand-obsidian-900 dark:text-white">
                  Bespoke Engineering & IT Consulting
                </h3>
                <p className="text-xs text-brand-obsidian-500 dark:text-brand-obsidian-400 mt-0.5">
                  UK software engineering, mobile development, and digital transformation.
                </p>
              </div>
              <Link
                to="/services"
                onClick={onClose}
                className="text-xs font-heading font-bold text-brand-emerald-600 dark:text-brand-emerald-300 hover:text-brand-champagne-600 flex items-center gap-1"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {services.map((srv) => {
                const IconComponent = iconMap[srv.icon] || Code2;
                return (
                  <Link
                    key={srv.id}
                    to="/services"
                    onClick={onClose}
                    className="p-5 rounded-2xl bg-brand-pearl/50 dark:bg-brand-obsidian-900/50 hover:bg-white dark:hover:bg-brand-obsidian-800 border border-brand-emerald-100 dark:border-brand-emerald-900 hover:border-brand-emerald-400 hover:shadow-obsidian-card transition-all group"
                  >
                    <div className="p-3 rounded-2xl bg-brand-emerald-100 dark:bg-brand-emerald-950 text-brand-emerald-700 dark:text-brand-emerald-300 inline-block mb-3 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-brand-obsidian-900 dark:text-white group-hover:text-brand-emerald-600 dark:group-hover:text-brand-emerald-300">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-brand-obsidian-500 dark:text-brand-obsidian-400 mt-1 line-clamp-2">
                      {srv.tagline}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. RESOURCES MEGA MENU */}
        {activeMenu === 'resources' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link
                to="/blog"
                onClick={onClose}
                className="p-5 rounded-2xl bg-brand-emerald-50/50 dark:bg-brand-obsidian-900/50 hover:bg-white dark:hover:bg-brand-obsidian-800 border border-brand-emerald-100 dark:border-brand-emerald-900 hover:border-brand-emerald-400 transition-all group"
              >
                <div className="p-3 rounded-2xl bg-brand-emerald-100 dark:bg-brand-emerald-950 text-brand-emerald-700 dark:text-brand-emerald-300 inline-block mb-3 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-sm text-brand-obsidian-900 dark:text-white group-hover:text-brand-emerald-600">
                  SASIG Blog
                </h4>
                <p className="text-xs text-brand-obsidian-500 dark:text-brand-obsidian-400 mt-1">
                  UK business insights, HMRC tax guides, and tech efficiency tips.
                </p>
              </Link>

              <Link
                to="/resources?tab=case-studies"
                onClick={onClose}
                className="p-5 rounded-2xl bg-brand-champagne-50/50 dark:bg-brand-obsidian-900/50 hover:bg-white dark:hover:bg-brand-obsidian-800 border border-brand-champagne-100 dark:border-brand-champagne-900 hover:border-brand-champagne-400 transition-all group"
              >
                <div className="p-3 rounded-2xl bg-brand-champagne-100 dark:bg-brand-champagne-950 text-brand-champagne-700 dark:text-brand-champagne-300 inline-block mb-3 group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-sm text-brand-obsidian-900 dark:text-white group-hover:text-brand-champagne-600">
                  Customer Case Studies
                </h4>
                <p className="text-xs text-brand-obsidian-500 dark:text-brand-obsidian-400 mt-1">
                  How UK companies cut software costs and accelerate pipeline.
                </p>
              </Link>

              <Link
                to="/resources?tab=webinars"
                onClick={onClose}
                className="p-5 rounded-2xl bg-brand-rose-50/50 dark:bg-brand-obsidian-900/50 hover:bg-white dark:hover:bg-brand-obsidian-800 border border-brand-rose-100 dark:border-brand-rose-900 hover:border-brand-rose-400 transition-all group"
              >
                <div className="p-3 rounded-2xl bg-brand-rose-100 dark:bg-brand-rose-950 text-brand-rose-700 dark:text-brand-rose-300 inline-block mb-3 group-hover:scale-110 transition-transform">
                  <Video className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-sm text-brand-obsidian-900 dark:text-white group-hover:text-brand-rose-600">
                  Webinars & Masterclasses
                </h4>
                <p className="text-xs text-brand-obsidian-500 dark:text-brand-obsidian-400 mt-1">
                  Live interactive masterclasses on MTD VAT, CRM, and automations.
                </p>
              </Link>

              <Link
                to="/faq"
                onClick={onClose}
                className="p-5 rounded-2xl bg-brand-emerald-50/50 dark:bg-brand-obsidian-900/50 hover:bg-white dark:hover:bg-brand-obsidian-800 border border-brand-emerald-100 dark:border-brand-emerald-900 hover:border-brand-emerald-400 transition-all group"
              >
                <div className="p-3 rounded-2xl bg-brand-emerald-100 dark:bg-brand-emerald-950 text-brand-emerald-800 dark:text-brand-emerald-300 inline-block mb-3 group-hover:scale-110 transition-transform">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-sm text-brand-obsidian-900 dark:text-white group-hover:text-brand-emerald-600">
                  Help Centre & FAQ
                </h4>
                <p className="text-xs text-brand-obsidian-500 dark:text-brand-obsidian-400 mt-1">
                  Step-by-step documentation, API references, and answers.
                </p>
              </Link>
            </div>
          </div>
        )}

        {/* 5. COMPANY MEGA MENU */}
        {activeMenu === 'company' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/about"
                onClick={onClose}
                className="p-5 rounded-2xl bg-brand-pearl/50 dark:bg-brand-obsidian-900/50 hover:bg-white dark:hover:bg-brand-obsidian-800 border border-brand-emerald-100 dark:border-brand-emerald-900 hover:border-brand-emerald-400 transition-all group"
              >
                <h4 className="font-heading font-bold text-sm text-brand-obsidian-900 dark:text-white group-hover:text-brand-emerald-600">
                  About SASIG LTD
                </h4>
                <p className="text-xs text-brand-obsidian-500 dark:text-brand-obsidian-400 mt-1">
                  Our Hull story, our mission for UK SaaS simplicity, and company values.
                </p>
              </Link>

              <Link
                to="/careers"
                onClick={onClose}
                className="p-5 rounded-2xl bg-brand-champagne-50/50 dark:bg-brand-obsidian-900/50 hover:bg-white dark:hover:bg-brand-obsidian-800 border border-brand-champagne-100 dark:border-brand-champagne-900 hover:border-brand-champagne-400 transition-all group relative"
              >
                <span className="absolute top-3 right-3 text-[9px] font-bold px-2 py-0.5 rounded-full gradient-emerald-champagne text-white">
                  We're Hiring!
                </span>
                <h4 className="font-heading font-bold text-sm text-brand-obsidian-900 dark:text-white group-hover:text-brand-champagne-600">
                  Careers & Culture
                </h4>
                <p className="text-xs text-brand-obsidian-500 dark:text-brand-obsidian-400 mt-1">
                  Explore open UK engineering, design, and customer success positions.
                </p>
              </Link>

              <Link
                to="/contact"
                onClick={onClose}
                className="p-5 rounded-2xl bg-brand-emerald-50/50 dark:bg-brand-obsidian-900/50 hover:bg-white dark:hover:bg-brand-obsidian-800 border border-brand-emerald-100 dark:border-brand-emerald-900 hover:border-brand-emerald-400 transition-all group"
              >
                <h4 className="font-heading font-bold text-sm text-brand-obsidian-900 dark:text-white group-hover:text-brand-emerald-600">
                  Contact & Office
                </h4>
                <p className="text-xs text-brand-obsidian-500 dark:text-brand-obsidian-400 mt-1">
                  Paragon Street Hull office details, direct UK phone and support desk.
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
