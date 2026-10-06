import React, { useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { products } from '../../data/productsData';

export const DemoBookingForm = () => {
  const [selectedProduct, setSelectedProduct] = useState('crm');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    teamSize: '5-20',
    preferredDate: '',
    preferredTime: '10:00 GMT',
  });
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsBooked(true);
  };

  if (isBooked) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-brand-obsidian-900 border-2 border-brand-emerald-400 shadow-2xl text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 rounded-full gradient-emerald-champagne text-white flex items-center justify-center mx-auto shadow-emerald-glow">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading font-black text-2xl text-brand-obsidian-900 dark:text-white">
          Demo Confirmed!
        </h3>
        <p className="text-sm text-brand-obsidian-600 dark:text-brand-obsidian-300 max-w-md mx-auto leading-relaxed">
          We've reserved your 1-on-1 walkthrough with a UK software specialist. An invite and calendar link have been sent to <strong className="text-brand-obsidian-900 dark:text-white">{formData.email}</strong>.
        </p>
        <div className="p-4 rounded-2xl bg-brand-emerald-50 dark:bg-brand-obsidian-800 text-xs text-brand-obsidian-700 dark:text-brand-obsidian-200 inline-block text-left border border-brand-emerald-200 dark:border-brand-emerald-800">
          <p><strong>Selected Focus:</strong> {products.find(p => p.id === selectedProduct)?.name || 'SASIG All-in-One Suite'}</p>
          <p><strong>Team Size:</strong> {formData.teamSize} members</p>
          <p><strong>Location:</strong> Interactive Google Meet / Microsoft Teams</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-obsidian-900 border border-brand-emerald-200 dark:border-brand-emerald-800 shadow-obsidian-card space-y-6">
      <div>
        <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200 mb-2">
          1. Which product would you like to see first?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {products.map(p => (
            <button
              type="button"
              key={p.id}
              onClick={() => setSelectedProduct(p.id)}
              className={`p-3 rounded-2xl text-xs font-bold text-left transition-all border ${
                selectedProduct === p.id
                  ? 'border-brand-emerald-500 bg-brand-emerald-50 dark:bg-brand-emerald-950/60 text-brand-emerald-700 dark:text-brand-emerald-300 shadow-sm'
                  : 'border-brand-emerald-100 dark:border-brand-obsidian-800 text-brand-obsidian-700 dark:text-brand-obsidian-300 hover:border-brand-emerald-300'
              }`}
            >
              <span className="block truncate">{p.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Details Grid */}
      <div className="space-y-4 pt-2">
        <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200">
          2. Your Details
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-medium text-brand-obsidian-600 dark:text-brand-obsidian-400 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={e => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. David Miller"
              className="w-full px-3.5 py-2.5 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 text-xs sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-[11px] font-medium text-brand-obsidian-600 dark:text-brand-obsidian-400 mb-1">Work Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              placeholder="david@company.co.uk"
              className="w-full px-3.5 py-2.5 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 text-xs sm:text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-medium text-brand-obsidian-600 dark:text-brand-obsidian-400 mb-1">Company Name</label>
            <input
              type="text"
              required
              value={formData.company}
              onChange={e => setFormData({ ...formData, company: e.target.value })}
              placeholder="Your Business Name"
              className="w-full px-3.5 py-2.5 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 text-xs sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-[11px] font-medium text-brand-obsidian-600 dark:text-brand-obsidian-400 mb-1">Team Size</label>
            <select
              value={formData.teamSize}
              onChange={e => setFormData({ ...formData, teamSize: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 text-xs sm:text-sm"
            >
              <option value="1-5">1 – 5 team members</option>
              <option value="5-20">5 – 20 team members</option>
              <option value="20-50">20 – 50 team members</option>
              <option value="50+">50+ Enterprise members</option>
            </select>
          </div>
        </div>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" iconRight={Sparkles}>
        Schedule Custom Walkthrough
      </Button>
    </form>
  );
};
