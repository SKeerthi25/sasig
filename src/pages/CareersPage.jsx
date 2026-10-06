import React, { useState } from 'react';
import { careersData } from '../data/careersData';
import { SEO } from '../components/common/SEO';
import { SectionHeader } from '../components/common/SectionHeader';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { JobApplicationModal } from '../components/forms/JobApplicationModal';
import {
  Home, Palmtree, GraduationCap, Laptop, Heart, PiggyBank,
  MapPin, Clock, ArrowRight, Sparkles, Briefcase
} from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';

const iconMap = {
  Home, Palmtree, GraduationCap, Laptop, Heart, PiggyBank
};

export const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="py-12 sm:py-20">
      <SEO
        title="Careers & Culture - Join the SASIG Team"
        description="Explore open engineering, design, and customer success positions at SASIG LTD in Hull, UK and hybrid/remote."
        canonical="/careers"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="We're Hiring Across the UK"
          badgeVariant="mint"
          title="Build the Future of UK SaaS."
          highlightText="Do Work That Truly Matters."
          subtitle="Join an ambitious, friendly team building software that empowers thousands of British businesses every day."
        />

        {/* 1. PERKS & CULTURE */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-brand-plum-900 dark:text-white">
              Why You'll Love Working at SASIG
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careersData.perks.map((perk, idx) => {
              const Icon = iconMap[perk.icon] || Heart;
              return (
                <Card key={idx} color="mint" className="p-6">
                  <div className="p-3 rounded-2xl bg-brand-mint-100 dark:bg-brand-mint-950 text-brand-mint-700 dark:text-brand-mint-300 inline-block mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-brand-plum-900 dark:text-white mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-plum-600 dark:text-brand-plum-300 leading-relaxed">
                    {perk.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 2. OPEN ROLES */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-brand-violet-100 dark:border-brand-violet-900">
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-brand-plum-900 dark:text-white">
                Current Open Positions
              </h2>
              <p className="text-xs sm:text-sm text-brand-plum-500 dark:text-brand-plum-400 mt-1">
                All roles include competitive UK market salaries, equity options, and private healthcare.
              </p>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full gradient-mint-yellow text-brand-plum-900 text-xs font-black">
              4 Roles Active
            </span>
          </div>

          <div className="space-y-4">
            {careersData.openings.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-3xl bg-white dark:bg-brand-plum-900 border border-brand-violet-100 dark:border-brand-violet-800 shadow-plum-card hover:border-brand-violet-400 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-brand-violet-100 text-brand-violet-800 dark:bg-brand-violet-950 dark:text-brand-violet-300">
                      {job.department}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-brand-mint-100 text-brand-mint-800 dark:bg-brand-mint-950 dark:text-brand-mint-300">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-xl text-brand-plum-900 dark:text-white">
                    {job.title}
                  </h3>

                  <p className="text-xs text-brand-plum-600 dark:text-brand-plum-300 max-w-2xl leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-brand-plum-500 dark:text-brand-plum-400 pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-pink-500" />
                      {job.location}
                    </span>
                    <span className="font-bold text-brand-violet-600 dark:text-brand-violet-300">
                      {job.salary}
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setSelectedJob(job)}
                    iconRight={ArrowRight}
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <JobApplicationModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}

      <FinalCTA />
    </div>
  );
};
