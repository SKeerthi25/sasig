import React from 'react';
import { companyInfo } from '../data/companyInfo';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import {
  Building2, Heart, ShieldCheck, Sparkles, MapPin,
  CheckCircle2, Users, Rocket, Award, Lightbulb
} from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';

export const AboutPage = () => {
  const values = [
    {
      title: "Human First, Always",
      desc: "Software shouldn't feel like a cold corporate spreadsheet. We build vibrant, playful interfaces that make daily work a genuine pleasure.",
      color: "violet",
      icon: Heart
    },
    {
      title: "Pragmatic Simplicity",
      desc: "We ruthlessly eliminate complexity and feature bloat so your team can focus on closing deals, shipping work, and growing.",
      color: "mint",
      icon: Lightbulb
    },
    {
      title: "Proudly British & Independent",
      desc: "Headquartered on Paragon Street in Hull, UK. We operate with transparent pricing, local customer care, and UK data residency.",
      color: "pink",
      icon: Building2
    },
    {
      title: "Uncompromising Reliability",
      desc: "99.99% uptime, bank-grade encryption, and seamless HMRC compliance. Your mission-critical data is always protected.",
      color: "yellow",
      icon: ShieldCheck
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "The Genesis in Hull",
      desc: "Founded on Paragon Street with a vision to build a joyful, affordable Zoho-alternative for modern UK businesses."
    },
    {
      year: "2025",
      title: "8-in-1 Suite Expansion",
      desc: "Launched SASIG Books with HMRC Making Tax Digital integration and crossed 10,000 active UK business users."
    },
    {
      year: "2026",
      title: "AI Workflows & National Scale",
      desc: "Over 25,000 UK businesses running their operations on SASIG, processing millions of automated workflows daily."
    }
  ];

  return (
    <div className="py-12 sm:py-20">
      <SEO
        title="About Us - Our Story, Mission & Hull UK Roots"
        description="Learn about SASIG LTD (Company No. 17479126). Building the friendliest, most powerful cloud business software suite from Hull, UK."
        canonical="/about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Story & Mission"
          badgeVariant="gradient"
          title="Building Better Software."
          highlightText="Right Here in the UK."
          subtitle="We founded SASIG with a simple mission: replace clunky, fragmented corporate software with a joyful, unified platform that British businesses actually love using."
        />

        {/* 1. THE STORY CARD */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-brand-plum-900 border border-brand-violet-200 dark:border-brand-violet-800 shadow-2xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-brand-plum-800 dark:text-brand-plum-200 text-sm sm:text-base leading-relaxed">
              <span className="text-xs uppercase tracking-widest font-heading font-extrabold text-brand-violet-600 dark:text-brand-violet-300">
                The SASIG Journey
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-brand-plum-900 dark:text-white">
                Why we started in Paragon Street, Hull
              </h2>
              <p>
                For too long, British companies had only two choices: expensive US enterprise software bloated with hidden costs, or a brittle patchwork of 10 disconnected micro-tools that don't speak to each other.
              </p>
              <p>
                We built <strong className="text-brand-violet-600 dark:text-brand-violet-300">SASIG LTD</strong> to prove there is a better way. By combining CRM, Books, Projects, Customer Support, HR, and custom automations under a single high-velocity platform, we help businesses save thousands of pounds in licensing fees while liberating their teams from administrative clutter.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-pink-500 shrink-0" />
                <span className="text-xs font-semibold text-brand-plum-600 dark:text-brand-plum-300">
                  Apartment 1, 43-45 Paragon Street, Hull, United Kingdom, HU1 3PE
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl gradient-violet-pink text-white shadow-2xl space-y-4">
                <h3 className="font-heading font-black text-2xl">Company Credentials</h3>
                <ul className="space-y-3 text-xs sm:text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow-300 shrink-0 mt-0.5" />
                    <span><strong>Company Name:</strong> SASIG LTD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow-300 shrink-0 mt-0.5" />
                    <span><strong>Company Number:</strong> 17479126</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow-300 shrink-0 mt-0.5" />
                    <span><strong>Registration:</strong> England & Wales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow-300 shrink-0 mt-0.5" />
                    <span><strong>Industry SIC:</strong> 58290 (Software publishing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow-300 shrink-0 mt-0.5" />
                    <span><strong>Direct Contact:</strong> company@sasigltd.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 2. CORE VALUES */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-black text-brand-plum-900 dark:text-white">
              The Principles That Drive Us
            </h2>
            <p className="text-sm text-brand-plum-500 dark:text-brand-plum-400 mt-2">
              Our cultural DNA in every line of code we ship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <Card key={idx} color={val.color} className="p-6">
                  <div className="p-3 rounded-2xl bg-brand-violet-100 dark:bg-brand-violet-950 text-brand-violet-700 dark:text-brand-violet-300 inline-block mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-black text-lg text-brand-plum-900 dark:text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-plum-600 dark:text-brand-plum-300 leading-relaxed">
                    {val.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 3. COMPANY TIMELINE */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-black text-brand-plum-900 dark:text-white">
              Our Evolution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-plum-900 border border-brand-violet-100 dark:border-brand-violet-800 shadow-plum-card relative"
              >
                <span className="text-2xl sm:text-3xl font-heading font-black text-gradient-violet-pink mb-2 block">
                  {m.year}
                </span>
                <h4 className="font-heading font-bold text-lg text-brand-plum-900 dark:text-white mb-2">
                  {m.title}
                </h4>
                <p className="text-xs sm:text-sm text-brand-plum-600 dark:text-brand-plum-300 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FinalCTA />
    </div>
  );
};
