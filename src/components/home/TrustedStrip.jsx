import React from 'react';

export const TrustedStrip = () => {
  const logos = [
    { name: "Yorkshire Logistics", location: "Hull, UK" },
    { name: "Humber Precision", location: "Grimsby, UK" },
    { name: "Artisan Living Ltd", location: "Leeds, UK" },
    { name: "North Sea Marine", location: "Newcastle, UK" },
    { name: "Apex Retail Group", location: "Manchester, UK" },
    { name: "Sterling & Ward", location: "London, UK" },
  ];

  return (
    <section className="py-10 border-y border-brand-emerald-100 dark:border-brand-emerald-900/40 bg-white/60 dark:bg-brand-obsidian-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest font-heading font-extrabold text-brand-obsidian-500 dark:text-brand-obsidian-400 mb-6">
          Trusted by 25,000+ British founders, growing SMEs, and agile teams
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-brand-pearl/80 dark:bg-brand-obsidian-950/40 border border-brand-emerald-100/60 dark:border-brand-emerald-900/40 text-center hover:border-brand-emerald-400 transition-colors"
            >
              <span className="font-heading font-black text-sm text-brand-obsidian-800 dark:text-brand-obsidian-200 block truncate">
                {logo.name}
              </span>
              <span className="text-[10px] text-brand-emerald-600 dark:text-brand-emerald-400 font-medium">
                {logo.location}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
