import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = ({ className = "" }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`p-2.5 rounded-2xl transition-all duration-300 bg-brand-emerald-100/60 dark:bg-brand-obsidian-800 text-brand-emerald-800 dark:text-brand-champagne-400 hover:bg-brand-emerald-200 dark:hover:bg-brand-obsidian-700 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-emerald-400 ${className}`}
    >
      {isDark ? (
        <Sun className="w-5 h-5 animate-spin-slow text-brand-champagne-400" />
      ) : (
        <Moon className="w-5 h-5 text-brand-emerald-800" />
      )}
    </button>
  );
};
