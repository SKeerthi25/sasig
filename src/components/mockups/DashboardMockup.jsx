import React, { useState } from 'react';
import {
  TrendingUp, Users, DollarSign, CheckCircle2, MoreVertical,
  Bell, Search, Plus, ArrowUpRight, ShieldCheck, Sparkles, Filter
} from 'lucide-react';

export const DashboardMockup = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="w-full rounded-3xl bg-brand-obsidian-900 dark:bg-brand-obsidian-950 p-2 sm:p-3 shadow-2xl border-2 border-brand-emerald-500/30 text-white relative">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-brand-obsidian-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-brand-rose-500"></div>
          <div className="w-3 h-3 rounded-full bg-brand-champagne-400"></div>
          <div className="w-3 h-3 rounded-full bg-brand-emerald-400"></div>
          <span className="ml-2 font-mono text-[11px] text-brand-obsidian-300 hidden sm:inline">
            app.sasigltd.co.uk/hub
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[11px] text-brand-emerald-300 font-semibold bg-brand-emerald-950/80 px-2 py-0.5 rounded-full border border-brand-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald-400 animate-pulse"></span>
            UK Cloud: Live
          </span>
          <Bell className="w-4 h-4 text-brand-obsidian-400 hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* Main Inner Dashboard */}
      <div className="bg-[#051C17] rounded-2xl p-4 sm:p-6 space-y-6">
        {/* Top Action Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-heading font-black text-lg sm:text-xl text-white">
                UK Commercial Overview
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full gradient-emerald-champagne text-white">
                Live Q1
              </span>
            </div>
            <p className="text-xs text-brand-obsidian-300 mt-0.5">
              Unified telemetry across CRM deals, MTD invoicing & active sprints.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-brand-obsidian-900 rounded-xl p-1 border border-brand-obsidian-800 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeTab === 'overview'
                    ? 'gradient-emerald-champagne text-white shadow-sm'
                    : 'text-brand-obsidian-300 hover:text-white'
                }`}
              >
                Overview UI
              </button>
              <button
                onClick={() => setActiveTab('pipeline')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeTab === 'pipeline'
                    ? 'gradient-emerald-champagne text-white shadow-sm'
                    : 'text-brand-obsidian-300 hover:text-white'
                }`}
              >
                Pipeline
              </button>
              <button
                onClick={() => setActiveTab('financials')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeTab === 'financials'
                    ? 'bg-brand-champagne-500 text-brand-obsidian-950 font-bold shadow-sm'
                    : 'text-brand-obsidian-300 hover:text-white'
                }`}
              >
                Cash Flow
              </button>
            </div>
          </div>
        </div>

        {/* 4 Top KPI Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1 */}
          <div className="p-3.5 rounded-2xl bg-brand-obsidian-900/90 border border-brand-emerald-500/30 relative overflow-hidden group hover:border-brand-emerald-400 transition-colors">
            <div className="flex items-center justify-between text-xs text-brand-obsidian-300 mb-1">
              <span>Quarterly Revenue</span>
              <span className="text-brand-emerald-400 font-bold flex items-center text-[10px]">
                +28.4% <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-heading font-black text-white">
              £148,920
            </div>
            <div className="w-full bg-brand-obsidian-950 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="h-full rounded-full gradient-emerald-champagne w-[78%]"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-3.5 rounded-2xl bg-brand-obsidian-900/90 border border-brand-champagne-500/30 relative overflow-hidden group hover:border-brand-champagne-400 transition-colors">
            <div className="flex items-center justify-between text-xs text-brand-obsidian-300 mb-1">
              <span>Active CRM Deals</span>
              <span className="text-brand-champagne-400 font-bold flex items-center text-[10px]">
                +14 New
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-heading font-black text-brand-champagne-300">
              64 Deals
            </div>
            <div className="w-full bg-brand-obsidian-950 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="h-full rounded-full bg-brand-champagne-500 w-[65%]"></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-3.5 rounded-2xl bg-brand-obsidian-900/90 border border-brand-rose-500/30 relative overflow-hidden group hover:border-brand-rose-400 transition-colors">
            <div className="flex items-center justify-between text-xs text-brand-obsidian-300 mb-1">
              <span>Desk Resolution</span>
              <span className="text-brand-rose-400 font-bold text-[10px]">
                1.8 min avg
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-heading font-black text-brand-rose-300">
              99.2% CSAT
            </div>
            <div className="w-full bg-brand-obsidian-950 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="h-full rounded-full bg-brand-rose-500 w-[94%]"></div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-3.5 rounded-2xl bg-brand-obsidian-900/90 border border-brand-emerald-500/30 relative overflow-hidden group hover:border-brand-emerald-400 transition-colors">
            <div className="flex items-center justify-between text-xs text-brand-obsidian-300 mb-1">
              <span>HMRC MTD Status</span>
              <span className="text-brand-champagne-400 font-bold text-[10px]">
                VAT Ready
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-heading font-black text-brand-emerald-300 flex items-center gap-1.5">
              <ShieldCheck className="w-5 h-5 text-brand-emerald-400" />
              Compliant
            </div>
            <div className="w-full bg-brand-obsidian-950 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="h-full rounded-full bg-brand-emerald-400 w-[100%]"></div>
            </div>
          </div>
        </div>

        {/* TAB 1: OVERVIEW SOFTWARE UI SCREENSHOT */}
        {activeTab === 'overview' && (
          <div className="relative overflow-hidden rounded-2xl border border-brand-emerald-500/30 group animate-fadeIn">
            <img
              src="/images/hero_dashboard.jpg"
              alt="SASIG Cloud Business Suite Dashboard Interface"
              className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.01] transition-transform duration-500 shadow-2xl"
              loading="lazy"
            />
            {/* Live Data Badge Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-brand-obsidian-950/80 backdrop-blur-md border border-brand-emerald-500/30 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-emerald-400 animate-pulse"></span>
                <span className="font-semibold text-white">Live UK Enterprise Telemetry Feed</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-brand-obsidian-300">
                <span>HMRC MTD Sync: <strong className="text-brand-emerald-400">Active</strong></span>
                <span>Open Banking: <strong className="text-brand-champagne-400">Connected</strong></span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Dynamic Kanban Pipeline Columns */}
        {activeTab === 'pipeline' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
            {/* Column 1: Qualified Leads */}
            <div className="p-3.5 rounded-2xl bg-brand-obsidian-900/60 border border-brand-obsidian-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-brand-obsidian-800 text-xs font-bold text-brand-emerald-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-emerald-400"></span>
                  Discovery & Demo (3)
                </span>
                <span className="text-brand-obsidian-400">£34,000</span>
              </div>

              <div className="p-3 rounded-xl bg-brand-obsidian-800/80 border border-brand-emerald-500/30 hover:border-brand-emerald-400 transition-all shadow-sm cursor-pointer">
                <div className="flex items-center justify-between text-[11px] font-bold text-white mb-1">
                  <span>Yorkshire Logistics Ltd</span>
                  <span className="text-brand-champagne-400 font-mono">£14,500</span>
                </div>
                <p className="text-[10px] text-brand-obsidian-300">SASIG CRM + Books Suite Implementation</p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-brand-obsidian-700/60 text-[9px] text-brand-obsidian-400">
                  <span>Hull, UK</span>
                  <span className="text-brand-emerald-400 font-bold">Demo Completed</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-brand-obsidian-800/80 border border-brand-obsidian-700 hover:border-brand-emerald-400 transition-all shadow-sm cursor-pointer">
                <div className="flex items-center justify-between text-[11px] font-bold text-white mb-1">
                  <span>Apex Retailers Group</span>
                  <span className="text-brand-champagne-400 font-mono">£19,500</span>
                </div>
                <p className="text-[10px] text-brand-obsidian-300">50-Seat Enterprise Multi-Store Sync</p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-brand-obsidian-700/60 text-[9px] text-brand-obsidian-400">
                  <span>Leeds, UK</span>
                  <span className="text-brand-emerald-300">Proposal Sent</span>
                </div>
              </div>
            </div>

            {/* Column 2: In Negotiation */}
            <div className="p-3.5 rounded-2xl bg-brand-obsidian-900/60 border border-brand-obsidian-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-brand-obsidian-800 text-xs font-bold text-brand-rose-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-rose-500"></span>
                  Legal & Contract Review (2)
                </span>
                <span className="text-brand-obsidian-400">£62,000</span>
              </div>

              <div className="p-3 rounded-xl bg-brand-obsidian-800/80 border border-brand-rose-500/30 hover:border-brand-rose-400 transition-all shadow-sm cursor-pointer">
                <div className="flex items-center justify-between text-[11px] font-bold text-white mb-1">
                  <span>North Sea Health Partners</span>
                  <span className="text-brand-champagne-400 font-mono">£38,000</span>
                </div>
                <p className="text-[10px] text-brand-obsidian-300">SASIG HR + Desk Clinic Rollout</p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-brand-obsidian-700/60 text-[9px] text-brand-obsidian-400">
                  <span>Newcastle, UK</span>
                  <span className="text-brand-rose-300 font-bold">DPA Signed</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-brand-obsidian-800/80 border border-brand-obsidian-700 hover:border-brand-rose-400 transition-all shadow-sm cursor-pointer">
                <div className="flex items-center justify-between text-[11px] font-bold text-white mb-1">
                  <span>Brighton Creative Co</span>
                  <span className="text-brand-champagne-400 font-mono">£24,000</span>
                </div>
                <p className="text-[10px] text-brand-obsidian-300">Projects + Time Tracking + Invoicing</p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-brand-obsidian-700/60 text-[9px] text-brand-obsidian-400">
                  <span>Brighton, UK</span>
                  <span className="text-brand-champagne-400">Final Sign-off</span>
                </div>
              </div>
            </div>

            {/* Column 3: Won & Onboarding */}
            <div className="p-3.5 rounded-2xl bg-brand-obsidian-900/60 border border-brand-obsidian-800 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-brand-obsidian-800 text-xs font-bold text-brand-emerald-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-emerald-400"></span>
                  Won & Active Onboarding (4)
                </span>
                <span className="text-brand-obsidian-400">£84,200</span>
              </div>

              <div className="p-3 rounded-xl bg-gradient-to-r from-brand-emerald-950 to-brand-obsidian-800 border border-brand-emerald-500/40 shadow-sm cursor-pointer">
                <div className="flex items-center justify-between text-[11px] font-bold text-white mb-1">
                  <span>Humber Digital Studio</span>
                  <span className="text-brand-emerald-400 font-mono">£18,200 / yr</span>
                </div>
                <p className="text-[10px] text-brand-obsidian-300">All-8 Applications Full Migration</p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-brand-emerald-800/60 text-[9px]">
                  <span className="text-brand-obsidian-400">Onboarding Stage 3 of 4</span>
                  <span className="text-brand-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Live
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-brand-obsidian-800/80 border border-brand-obsidian-700 shadow-sm">
                <div className="flex items-center justify-between text-[11px] font-bold text-white mb-1">
                  <span>Midlands Precision Eng.</span>
                  <span className="text-brand-emerald-400 font-mono">£22,000 / yr</span>
                </div>
                <p className="text-[10px] text-brand-obsidian-300">Gantt Projects & MTD VAT Setup</p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-brand-obsidian-700/60 text-[9px] text-brand-obsidian-400">
                  <span>Birmingham, UK</span>
                  <span className="text-brand-emerald-400 font-bold">Active</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Financials / Cash Flow View */}
        {activeTab === 'financials' && (
          <div className="relative overflow-hidden rounded-2xl border border-brand-champagne-500/30 group animate-fadeIn">
            <img
              src="/images/books_accounting.jpg"
              alt="SASIG Books & Financial Cashflow Interface"
              className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.01] transition-transform duration-500 shadow-2xl"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
};
