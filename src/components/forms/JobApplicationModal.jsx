import React, { useState } from 'react';
import { X, UploadCloud, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';

export const JobApplicationModal = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    coverNote: '',
  });
  const [fileName, setFileName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!job) return null;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-obsidian-950/75 backdrop-blur-sm">
      <div className="w-full max-w-xl bg-white dark:bg-brand-obsidian-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-brand-emerald-200 dark:border-brand-emerald-800 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between pb-4 border-b border-brand-emerald-100 dark:border-brand-emerald-800">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-emerald-600 dark:text-brand-emerald-400">
              Apply for Role
            </span>
            <h3 className="font-heading font-black text-xl text-brand-obsidian-900 dark:text-white">
              {job.title}
            </h3>
            <p className="text-xs text-brand-obsidian-500 dark:text-brand-obsidian-400 mt-0.5">
              {job.department} • {job.location} • {job.salary}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-brand-obsidian-400 hover:bg-brand-emerald-100 dark:hover:bg-brand-obsidian-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full gradient-emerald-champagne text-white flex items-center justify-center mx-auto shadow-emerald-glow">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-heading font-black text-xl text-brand-obsidian-900 dark:text-white">
              Application Submitted!
            </h4>
            <p className="text-xs sm:text-sm text-brand-obsidian-600 dark:text-brand-obsidian-300 max-w-md mx-auto">
              Thank you for applying, {formData.fullName}. Our hiring team in Hull will review your profile and get back to you within 3 working days.
            </p>
            <Button variant="primary" size="sm" onClick={onClose}>
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="py-4 space-y-4">
            <div>
              <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Alex Henderson"
                className="w-full px-3.5 py-2.5 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 text-xs sm:text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 text-xs sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="07344 000000"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 text-xs sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200 mb-1">
                LinkedIn / GitHub / Portfolio URL
              </label>
              <input
                type="url"
                value={formData.portfolio}
                onChange={e => setFormData({ ...formData, portfolio: e.target.value })}
                placeholder="https://linkedin.com/in/username"
                className="w-full px-3.5 py-2.5 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 text-xs sm:text-sm"
              />
            </div>

            {/* CV Upload */}
            <div>
              <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200 mb-1">
                Upload Resume / CV (PDF or DOCX) *
              </label>
              <div className="border-2 border-dashed border-brand-emerald-300 dark:border-brand-emerald-700 rounded-2xl p-4 text-center bg-brand-emerald-50/30 dark:bg-brand-obsidian-950/30">
                <UploadCloud className="w-8 h-8 text-brand-emerald-500 mx-auto mb-1" />
                <label className="cursor-pointer text-xs font-bold text-brand-emerald-600 dark:text-brand-emerald-300 hover:underline">
                  <span>Browse files</span>
                  <input type="file" required accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                </label>
                {fileName ? (
                  <p className="text-xs text-brand-emerald-600 font-bold mt-1">Selected: {fileName}</p>
                ) : (
                  <p className="text-[11px] text-brand-obsidian-400 mt-1">PDF, DOCX up to 10MB</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-heading font-bold text-brand-obsidian-700 dark:text-brand-obsidian-200 mb-1">
                Short Introduction / Why SASIG?
              </label>
              <textarea
                rows="3"
                value={formData.coverNote}
                onChange={e => setFormData({ ...formData, coverNote: e.target.value })}
                placeholder="Tell us a little bit about what drives you..."
                className="w-full p-3 rounded-xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/60 text-brand-obsidian-900 dark:text-white border border-brand-emerald-200 dark:border-brand-emerald-800 text-xs sm:text-sm"
              ></textarea>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <Button variant="ghost" size="sm" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="md">
                Submit Application
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
