import React from 'react';
import { ShieldCheck, HeartHandshake, Zap, Landmark, Lock, Sparkles, Smile } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Card } from '../common/Card';

export const WhySasigSection = () => {
  const reasons = [
    {
      icon: HeartHandshake,
      title: "Friendly Northern UK Support",
      desc: "Speak to real human software specialists based in Hull, UK. Fast resolution via phone, email, and live video huddles.",
      color: "emerald",
      badge: "Hull Office"
    },
    {
      icon: Landmark,
      title: "Built for UK Regulatory Rules",
      desc: "Pre-configured for HMRC Making Tax Digital (MTD), UK VAT rules, Open Banking, and UK GDPR data residency.",
      color: "champagne",
      badge: "HMRC Ready"
    },
    {
      icon: Zap,
      title: "Lightning Fast Velocity",
      desc: "Zero bloated menus or slow load times. Built on modern React & edge cloud infrastructure for instant response.",
      color: "rose",
      badge: "Sub-50ms"
    },
    {
      icon: Lock,
      title: "Enterprise-Grade Security",
      desc: "256-bit AES encryption, multi-factor authentication, granular role permissions, and full audit logging.",
      color: "emerald",
      badge: "ISO & GDPR"
    },
    {
      icon: Sparkles,
      title: "All-in-One Cost Savings",
      desc: "Replace up to 8 separate software subscriptions with a single predictable UK plan, saving up to 65% monthly.",
      color: "champagne",
      badge: "Save 65%"
    },
    {
      icon: Smile,
      title: "Software People Love Using",
      desc: "Clean, intuitive architectural interfaces designed to boost team morale instead of causing software fatigue.",
      color: "emerald",
      badge: "Intuitive UI"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-sage/50 dark:bg-brand-obsidian-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose SASIG"
          badgeVariant="emerald"
          title="Designed for British Business."
          highlightText="Engineered for Clarity."
          subtitle="We believe business software should be energizing, accessible, and completely hassle-free."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((r, idx) => {
            const IconComponent = r.icon;
            return (
              <Card key={idx} color={r.color} glow={true} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl gradient-emerald-champagne text-white shadow-emerald-glow">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-emerald-100 text-brand-emerald-800 dark:bg-brand-emerald-950 dark:text-brand-emerald-300">
                      {r.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-lg text-brand-obsidian-900 dark:text-white mb-2">
                    {r.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-obsidian-600 dark:text-brand-obsidian-300 leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
