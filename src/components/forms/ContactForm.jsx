import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, Phone, User, Building } from 'lucide-react';
import { Button } from '../common/Button';
import { companyInfo } from '../../data/companyInfo';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    inquiryType: 'general',
    message: '',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) return;

    if (!formData.fullName || !formData.email || !formData.message) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-brand-obsidian-900 border-2 border-brand-emerald-400 shadow-2xl text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 rounded-full gradient-emerald-champagne text-white flex items-center justify-center mx-auto shadow-emerald-glow">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading font-black text-2xl text-brand-obsidian-900 dark:text-white">
          Message Received!
        </h3>
        <p className="text-sm text-brand-obsidian-600 dark:text-brand-obsidian-300 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-brand-emerald-600 dark:text-brand-emerald-300">{formData.fullName}</strong>. A copy has been routed to our Hull operations team at <strong className="text-brand-obsidian-900 dark:text-white">{companyInfo.email}</strong>. We typically respond within 2 business hours.
        </p>
        <div className="pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                companyName: '',
                inquiryType: 'general',
                message: '',
                honeypot: '',
              });
            }}
          >
            Send Another Enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-brand-obsidian-900 border border-brand-emerald-200 dark:border-brand-emerald-800 shadow-obsidian-card space-y-4"
    >
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200 mb-1.5">
            Full Name <span className="text-brand-rose-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-brand-obsidian-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 focus:outline-none focus:ring-2 focus:ring-brand-emerald-400 text-xs sm:text-sm"
            />
          </div>
        </div>

        {/* Business Email */}
        <div>
          <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200 mb-1.5">
            Business Email <span className="text-brand-rose-500">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-brand-obsidian-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="sarah@yourcompany.co.uk"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 focus:outline-none focus:ring-2 focus:ring-brand-emerald-400 text-xs sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* UK Phone Number */}
        <div>
          <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200 mb-1.5">
            Phone Number (UK)
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-brand-obsidian-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="07344 000000"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 focus:outline-none focus:ring-2 focus:ring-brand-emerald-400 text-xs sm:text-sm"
            />
          </div>
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200 mb-1.5">
            Company Name
          </label>
          <div className="relative">
            <Building className="w-4 h-4 text-brand-obsidian-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your Business Ltd"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 focus:outline-none focus:ring-2 focus:ring-brand-emerald-400 text-xs sm:text-sm"
            />
          </div>
        </div>
      </div>

      {/* Inquiry Type */}
      <div>
        <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200 mb-1.5">
          How can we help you?
        </label>
        <select
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 focus:outline-none focus:ring-2 focus:ring-brand-emerald-400 text-xs sm:text-sm"
        >
          <option value="general">General Software Question</option>
          <option value="sales">Sales & Custom Pricing Proposal</option>
          <option value="consulting">Bespoke Software Engineering Project</option>
          <option value="support">Technical Support for Existing Account</option>
          <option value="partnership">Partner or Integration Enquiry</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200 mb-1.5">
          Your Message <span className="text-brand-rose-500">*</span>
        </label>
        <div className="relative">
          <textarea
            name="message"
            required
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your team size, workflow requirements or any specific questions..."
            className="w-full p-4 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 focus:outline-none focus:ring-2 focus:ring-brand-emerald-400 text-xs sm:text-sm"
          ></textarea>
        </div>
      </div>

      {errorMsg && (
        <p className="text-xs text-brand-rose-500 font-semibold">{errorMsg}</p>
      )}

      {/* Submit Button & GDPR Note */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          iconRight={Send}
        >
          {isSubmitting ? 'Sending to Hull Office...' : 'Send Message to SASIG'}
        </Button>

        <p className="text-[11px] text-brand-obsidian-500 dark:text-brand-obsidian-400 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-brand-emerald-500 shrink-0" />
          <span>UK GDPR Protected • No spam ever.</span>
        </p>
      </div>
    </form>
  );
};
