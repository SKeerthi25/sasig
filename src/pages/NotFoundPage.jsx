import React from 'react';
import { SEO } from '../components/common/SEO';
import { Button } from '../components/common/Button';
import { Home } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4">
      <SEO
        title="404 - Page Not Found"
        description="The page you were looking for doesn't exist on SASIG LTD."
        canonical="/404"
      />

      <div className="max-w-xl w-full text-center space-y-6">
        {/* Playful Vector / SVG 404 Illustration with Emerald, Champagne, Rose Gold */}
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full gradient-emerald-champagne opacity-20 blur-2xl animate-pulse"></div>
          <svg className="w-44 h-44 relative z-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="#0A2620" />
            <circle cx="70" cy="85" r="12" fill="#10B981" />
            <circle cx="130" cy="85" r="12" fill="#F59E0B" />
            <circle cx="72" cy="83" r="4" fill="#FFFFFF" />
            <circle cx="132" cy="83" r="4" fill="#FFFFFF" />
            {/* Playful curved mouth */}
            <path d="M75 130 C90 150 110 150 125 130" stroke="#F43F5E" strokeWidth="6" strokeLinecap="round" fill="none" />
            {/* Sparkles */}
            <polygon points="160,40 164,52 176,56 164,60 160,72 156,60 144,56 156,52" fill="#F59E0B" />
            <polygon points="35,140 38,148 46,151 38,154 35,162 32,154 24,151 32,148" fill="#10B981" />
          </svg>
        </div>

        <div className="space-y-2">
          <span className="text-sm font-heading font-black uppercase tracking-widest text-brand-rose-500">
            Error 404
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-black text-brand-obsidian-900 dark:text-white">
            Lost in the Cloud?
          </h1>
          <p className="text-sm sm:text-base text-brand-obsidian-600 dark:text-brand-obsidian-300 max-w-md mx-auto leading-relaxed">
            The page you're searching for might have moved, or the URL might have a typo. Don't worry, all your UK business data is safe!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button to="/" variant="primary" size="lg" icon={Home}>
            Return to Homepage
          </Button>
          <Button to="/products" variant="outline" size="lg">
            Explore All 8 Products
          </Button>
        </div>
      </div>
    </div>
  );
};
