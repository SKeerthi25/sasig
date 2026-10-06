import React from 'react';
import { services } from '../data/servicesData';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import {
  Code2, Smartphone, Palette, CloudCog, Cpu, Briefcase,
  CheckCircle2, ArrowRight, Sparkles, Phone
} from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';
import { companyInfo } from '../data/companyInfo';

const iconMap = {
  Code2, Smartphone, Palette, CloudCog, Cpu, Briefcase
};

export const ServicesPage = () => {
  return (
    <div className="py-12 sm:py-20">
      <SEO
        title="Custom Software Engineering & IT Consulting"
        description="UK software development services by SASIG LTD: bespoke web & mobile applications, UI/UX design, cloud DevOps, AI automations, and IT strategy."
        canonical="/services"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Bespoke Engineering"
          badgeVariant="gradient"
          title="Custom Software Services."
          highlightText="Delivered from Hull, UK."
          subtitle="Beyond our off-the-shelf SaaS suite, our senior UK engineering team builds bespoke enterprise systems, custom AI integrations, and mobile applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((srv) => {
            const Icon = iconMap[srv.icon] || Code2;
            return (
              <Card key={srv.id} color="violet" className="flex flex-col justify-between">
                <div>
                  <div className="p-3.5 rounded-2xl bg-brand-violet-100 dark:bg-brand-violet-950 text-brand-violet-700 dark:text-brand-violet-300 inline-block mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-black text-xl text-brand-plum-900 dark:text-white mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-xs font-bold text-brand-violet-600 dark:text-brand-violet-300 mb-3">
                    {srv.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-brand-plum-600 dark:text-brand-plum-300 leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-plum-500 dark:text-brand-plum-400">
                      Typical Deliverables:
                    </h4>
                    {srv.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-brand-plum-700 dark:text-brand-plum-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-mint-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-violet-100 dark:border-brand-violet-800">
                  <Button to="/contact" variant="outline" size="sm" className="w-full">
                    Request Project Scoping
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
