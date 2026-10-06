import React from 'react';
import { User, Phone, Mail, Calendar, DollarSign, Tag, Check, Clock } from 'lucide-react';

export const CRMMockup = () => {
  return (
    <div className="w-full rounded-3xl bg-white dark:bg-brand-plum-900 shadow-plum-card border border-brand-violet-200 dark:border-brand-violet-800 p-4 sm:p-6 overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-brand-violet-100 dark:border-brand-violet-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-brand-violet-100 dark:bg-brand-violet-950 text-brand-violet-600 dark:text-brand-violet-300 flex items-center justify-center font-bold">
            JD
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-brand-plum-900 dark:text-white">
              James Davies — Commercial Director
            </h4>
            <p className="text-xs text-brand-plum-500 dark:text-brand-plum-400">
              Apex Logistics Group UK • Lead Score: <span className="text-brand-mint-600 dark:text-brand-mint-400 font-bold">96/100 (Hot)</span>
            </p>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold gradient-violet-pink text-white">
          £45,000 Pipeline Value
        </span>
      </div>

      {/* Grid of contact details & timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs">
        {/* Left info box */}
        <div className="space-y-2.5 p-3 rounded-2xl bg-brand-violet-50/40 dark:bg-brand-plum-950/40 border border-brand-violet-100 dark:border-brand-violet-900">
          <div className="flex items-center justify-between text-brand-plum-700 dark:text-brand-plum-300">
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-brand-violet-500" /> Email:</span>
            <span className="font-medium">james@apexlogistics.co.uk</span>
          </div>
          <div className="flex items-center justify-between text-brand-plum-700 dark:text-brand-plum-300">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-brand-mint-500" /> UK Phone:</span>
            <span className="font-medium">01482 890123</span>
          </div>
          <div className="flex items-center justify-between text-brand-plum-700 dark:text-brand-plum-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-brand-pink-500" /> Next Action:</span>
            <span className="font-bold text-brand-violet-600 dark:text-brand-violet-300">Demo Scheduled (Tomorrow 11am)</span>
          </div>
        </div>

        {/* Right timeline feed */}
        <div className="space-y-2 p-3 rounded-2xl bg-brand-cream/60 dark:bg-brand-plum-950/40 border border-brand-violet-100 dark:border-brand-violet-900">
          <div className="flex items-start gap-2 text-[11px]">
            <div className="w-4 h-4 rounded-full bg-brand-mint-500 text-white flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-2.5 h-2.5" />
            </div>
            <div>
              <p className="font-semibold text-brand-plum-900 dark:text-white">Opened Proposal PDF (Viewed 4 times)</p>
              <p className="text-[10px] text-brand-plum-400">12 mins ago via Email Sync</p>
            </div>
          </div>
          <div className="flex items-start gap-2 text-[11px]">
            <div className="w-4 h-4 rounded-full bg-brand-violet-500 text-white flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-2.5 h-2.5" />
            </div>
            <div>
              <p className="font-semibold text-brand-plum-900 dark:text-white">Automated Cadence Email 2 Delivered</p>
              <p className="text-[10px] text-brand-plum-400">Yesterday at 14:32</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
