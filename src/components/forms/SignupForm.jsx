import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, User, Building, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';

export const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    password: '',
    agreeTerms: true,
  });

  const [passwordStrength, setPasswordStrength] = useState(0);

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setFormData({ ...formData, password: val });
    let score = 0;
    if (val.length >= 8) score += 1;
    if (/[A-Z]/.test(val)) score += 1;
    if (/[0-9]/.test(val)) score += 1;
    if (/[^A-Za-z0-9]/.test(val)) score += 1;
    setPasswordStrength(score);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thank-you?type=signup');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-obsidian-900 border border-brand-emerald-200 dark:border-brand-emerald-800 shadow-2xl space-y-4">
      <div>
        <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200 mb-1">
          Full Name
        </label>
        <div className="relative">
          <User className="w-4 h-4 text-brand-obsidian-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={e => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Alex Morgan"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 text-xs sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200 mb-1">
          Work Email
        </label>
        <div className="relative">
          <Mail className="w-4 h-4 text-brand-obsidian-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="email"
            required
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            placeholder="alex@yourcompany.co.uk"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 text-xs sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200 mb-1">
          Company / Workspace Name
        </label>
        <div className="relative">
          <Building className="w-4 h-4 text-brand-obsidian-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            required
            value={formData.company}
            onChange={e => setFormData({ ...formData, company: e.target.value })}
            placeholder="Acme UK Holdings"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 text-xs sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200 mb-1">
          Create Secure Password
        </label>
        <div className="relative">
          <Lock className="w-4 h-4 text-brand-obsidian-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="password"
            required
            value={formData.password}
            onChange={handlePasswordChange}
            placeholder="••••••••••••"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 text-xs sm:text-sm"
          />
        </div>
        {/* Password Strength Indicator */}
        {formData.password && (
          <div className="mt-2 flex items-center gap-1.5">
            <div className={`h-1.5 flex-1 rounded-full ${passwordStrength >= 1 ? 'bg-brand-rose-500' : 'bg-brand-obsidian-200 dark:bg-brand-obsidian-800'}`}></div>
            <div className={`h-1.5 flex-1 rounded-full ${passwordStrength >= 2 ? 'bg-brand-champagne-400' : 'bg-brand-obsidian-200 dark:bg-brand-obsidian-800'}`}></div>
            <div className={`h-1.5 flex-1 rounded-full ${passwordStrength >= 3 ? 'bg-brand-emerald-400' : 'bg-brand-obsidian-200 dark:bg-brand-obsidian-800'}`}></div>
            <div className={`h-1.5 flex-1 rounded-full ${passwordStrength >= 4 ? 'bg-brand-emerald-600' : 'bg-brand-obsidian-200 dark:bg-brand-obsidian-800'}`}></div>
          </div>
        )}
      </div>

      <div className="flex items-start gap-2 pt-2 text-xs text-brand-obsidian-600 dark:text-brand-obsidian-300">
        <input
          type="checkbox"
          id="terms-check"
          required
          checked={formData.agreeTerms}
          onChange={e => setFormData({ ...formData, agreeTerms: e.target.checked })}
          className="mt-0.5 w-4 h-4 rounded text-brand-emerald-600 focus:ring-brand-emerald-400"
        />
        <label htmlFor="terms-check">
          I agree to SASIG's Terms of Service and UK GDPR Privacy Policy. No credit card required.
        </label>
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" iconRight={Sparkles}>
        Start 14-Day Free Trial
      </Button>
    </form>
  );
};
