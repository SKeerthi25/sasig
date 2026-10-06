import React from 'react';
import { Landmark, ArrowDownLeft, ArrowUpRight, CheckCircle, ShieldCheck } from 'lucide-react';

export const BooksMockup = () => {
  return (
    <div className="w-full rounded-3xl bg-white dark:bg-brand-plum-900 shadow-plum-card border border-brand-mint-200 dark:border-brand-mint-800 p-4 sm:p-6 overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-brand-mint-100 dark:border-brand-mint-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-brand-mint-100 dark:bg-brand-mint-950 text-brand-mint-700 dark:text-brand-mint-300">
            <Landmark className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-brand-plum-900 dark:text-white">
              UK Business Current Account Feed (Barclays / Open Banking)
            </h4>
            <p className="text-xs text-brand-plum-500 dark:text-brand-plum-400">
              Live automated feed • Last synced 3 minutes ago
            </p>
          </div>
        </div>
        <span className="flex items-center gap-1 text-xs font-bold text-brand-mint-700 dark:text-brand-mint-300 bg-brand-mint-50 dark:bg-brand-mint-950 px-3 py-1 rounded-full border border-brand-mint-300">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-mint-500" />
          HMRC MTD Ready
        </span>
      </div>

      {/* Transaction reconciliation items */}
      <div className="mt-4 space-y-2 text-xs">
        <div className="p-3 rounded-2xl bg-brand-cream/60 dark:bg-brand-plum-950/40 border border-brand-mint-100 dark:border-brand-mint-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-brand-mint-100 dark:bg-brand-mint-950 text-brand-mint-700 dark:text-brand-mint-300">
              <ArrowDownLeft className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-brand-plum-900 dark:text-white">Client Payment — Invoice #SAS-1084</p>
              <p className="text-[10px] text-brand-plum-400">From Yorkshire Health Group Ltd • BACS Direct</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-brand-mint-600 dark:text-brand-mint-400 font-mono">+£4,850.00</span>
            <p className="text-[10px] text-brand-mint-600 font-bold flex items-center justify-end gap-1">
              <CheckCircle className="w-3 h-3" /> Auto-Matched (20% VAT)
            </p>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-brand-cream/60 dark:bg-brand-plum-950/40 border border-brand-mint-100 dark:border-brand-mint-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-brand-violet-100 dark:bg-brand-violet-950 text-brand-violet-700 dark:text-brand-violet-300">
              <ArrowDownLeft className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-brand-plum-900 dark:text-white">Stripe Payout — Card Sales Q1</p>
              <p className="text-[10px] text-brand-plum-400">Online Store Checkout • 14 Orders</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-brand-mint-600 dark:text-brand-mint-400 font-mono">+£12,340.00</span>
            <p className="text-[10px] text-brand-mint-600 font-bold flex items-center justify-end gap-1">
              <CheckCircle className="w-3 h-3" /> Reconciled
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
