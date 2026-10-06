import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const TestimonialsSlider = () => {
  const testimonials = [
    {
      quote: "Migrating from Salesforce and QuickBooks to SASIG was the best decision our leadership team made in 2026. Our sales team closes deals faster and our accountants have direct HMRC MTD submission right inside Books.",
      author: "Marcus Sterling",
      role: "Managing Director",
      company: "Sterling & Ward Advisory Ltd (London & Leeds)",
      rating: 5,
      avatarBg: "gradient-emerald-champagne"
    },
    {
      quote: "The customer support from the Hull office is exceptional. When we had a complex Open Banking feed query, we were speaking directly with a senior UK engineer in under 3 minutes. That level of care doesn't exist with US mega-corporations.",
      author: "Hannah Croft",
      role: "Head of Operations",
      company: "Artisan Living UK Ltd (Yorkshire)",
      rating: 5,
      avatarBg: "bg-brand-champagne-500 text-brand-obsidian-950"
    },
    {
      quote: "SASIG Desk and Projects saved our medical clinic practice over 20 hours of administrative work each week. Having patient bookings, staff leave, and invoices under one login is transformative.",
      author: "Dr. Alistair Finch",
      role: "Clinical Lead",
      company: "Yorkshire Health Partners",
      rating: 5,
      avatarBg: "gradient-emerald-champagne"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 sm:py-24 bg-brand-sage/40 dark:bg-brand-obsidian-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Customer Stories"
          badgeVariant="rose"
          title="Loved by UK Teams."
          highlightText="Validated by Results."
          subtitle="Discover how British businesses across the UK are growing faster with SASIG."
        />

        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-brand-obsidian-900 border border-brand-emerald-200 dark:border-brand-emerald-800 shadow-2xl relative">
            <Quote className="w-12 h-12 text-brand-emerald-200 dark:text-brand-obsidian-800 absolute top-6 right-6 -z-0" />

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-6 text-brand-champagne-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-base sm:text-xl font-heading font-semibold text-brand-obsidian-900 dark:text-white leading-relaxed mb-8 relative z-10">
              "{current.quote}"
            </blockquote>

            {/* Author details & Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-brand-emerald-100 dark:border-brand-emerald-800">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl ${current.avatarBg} flex items-center justify-center font-bold text-white shadow-sm`}>
                  {current.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-brand-obsidian-900 dark:text-white">
                    {current.author}
                  </h4>
                  <p className="text-xs text-brand-obsidian-500 dark:text-brand-obsidian-400">
                    {current.role} • {current.company}
                  </p>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="p-3 rounded-2xl bg-brand-emerald-50 dark:bg-brand-obsidian-800 text-brand-obsidian-700 dark:text-brand-obsidian-200 hover:bg-brand-emerald-100 hover:scale-105 active:scale-95 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="p-3 rounded-2xl gradient-emerald-champagne text-white shadow-emerald-glow hover:scale-105 active:scale-95 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
