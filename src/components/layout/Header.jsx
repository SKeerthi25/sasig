import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Play } from 'lucide-react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { ThemeToggle } from '../common/ThemeToggle';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';

export const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveMenu(null);
    setMobileNavOpen(false);
  }, [location.pathname]);

  const handleMenuHover = (menuKey) => {
    setActiveMenu(menuKey);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-brand-slate-950/90 backdrop-blur-xl shadow-md border-b border-brand-emerald-100 dark:border-brand-emerald-900/40 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* 1. Brand Logo */}
          <div className="shrink-0 flex items-center">
            <Logo size="md" showTagline={false} />
          </div>

          {/* 2. Desktop Mega Menu Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* 0. Home */}
            <Link
              to="/"
              onMouseEnter={handleMenuLeave}
              className={`px-3.5 py-2 rounded-xl text-sm font-heading font-bold transition-colors ${
                location.pathname === '/'
                  ? 'text-brand-emerald-600 dark:text-brand-emerald-300 bg-brand-emerald-50 dark:bg-brand-slate-900'
                  : 'text-brand-slate-800 dark:text-brand-slate-100 hover:text-brand-emerald-600 dark:hover:text-brand-emerald-300 hover:bg-brand-emerald-50/50 dark:hover:bg-brand-slate-900/50'
              }`}
            >
              Home
            </Link>

            {/* 1. About Us */}
            <Link
              to="/about"
              onMouseEnter={handleMenuLeave}
              className={`px-3.5 py-2 rounded-xl text-sm font-heading font-bold transition-colors ${
                location.pathname === '/about'
                  ? 'text-brand-emerald-600 dark:text-brand-emerald-300 bg-brand-emerald-50 dark:bg-brand-slate-900'
                  : 'text-brand-slate-800 dark:text-brand-slate-100 hover:text-brand-emerald-600 dark:hover:text-brand-emerald-300 hover:bg-brand-emerald-50/50 dark:hover:bg-brand-slate-900/50'
              }`}
            >
              About Us
            </Link>

            {/* 2. Products Tab */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuHover('products')}
            >
              <button
                type="button"
                className={`px-3.5 py-2 rounded-xl text-sm font-heading font-bold flex items-center gap-1 transition-colors ${
                  activeMenu === 'products' || location.pathname.startsWith('/products')
                    ? 'text-brand-emerald-600 dark:text-brand-emerald-300 bg-brand-emerald-50 dark:bg-brand-slate-900'
                    : 'text-brand-slate-800 dark:text-brand-slate-100 hover:text-brand-emerald-600 dark:hover:text-brand-emerald-300 hover:bg-brand-emerald-50/50 dark:hover:bg-brand-slate-900/50'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'products' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* 3. Solutions Tab */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuHover('solutions')}
            >
              <button
                type="button"
                className={`px-3.5 py-2 rounded-xl text-sm font-heading font-bold flex items-center gap-1 transition-colors ${
                  activeMenu === 'solutions' || location.pathname.startsWith('/solutions')
                    ? 'text-brand-emerald-600 dark:text-brand-emerald-300 bg-brand-emerald-50 dark:bg-brand-slate-900'
                    : 'text-brand-slate-800 dark:text-brand-slate-100 hover:text-brand-emerald-600 dark:hover:text-brand-emerald-300 hover:bg-brand-emerald-50/50 dark:hover:bg-brand-slate-900/50'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* 4. Services Tab */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuHover('services')}
            >
              <button
                type="button"
                className={`px-3.5 py-2 rounded-xl text-sm font-heading font-bold flex items-center gap-1 transition-colors ${
                  activeMenu === 'services' || location.pathname.startsWith('/services')
                    ? 'text-brand-emerald-600 dark:text-brand-emerald-300 bg-brand-emerald-50 dark:bg-brand-slate-900'
                    : 'text-brand-slate-800 dark:text-brand-slate-100 hover:text-brand-emerald-600 dark:hover:text-brand-emerald-300 hover:bg-brand-emerald-50/50 dark:hover:bg-brand-slate-900/50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* 5. Resources Tab */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuHover('resources')}
            >
              <button
                type="button"
                className={`px-3.5 py-2 rounded-xl text-sm font-heading font-bold flex items-center gap-1 transition-colors ${
                  activeMenu === 'resources' || location.pathname.startsWith('/resources') || location.pathname.startsWith('/blog')
                    ? 'text-brand-emerald-600 dark:text-brand-emerald-300 bg-brand-emerald-50 dark:bg-brand-slate-900'
                    : 'text-brand-slate-800 dark:text-brand-slate-100 hover:text-brand-emerald-600 dark:hover:text-brand-emerald-300 hover:bg-brand-emerald-50/50 dark:hover:bg-brand-slate-900/50'
                }`}
              >
                <span>Resources</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'resources' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* 6. Careers */}
            <Link
              to="/careers"
              onMouseEnter={handleMenuLeave}
              className={`px-3.5 py-2 rounded-xl text-sm font-heading font-bold transition-colors ${
                location.pathname === '/careers'
                  ? 'text-brand-emerald-600 dark:text-brand-emerald-300 bg-brand-emerald-50 dark:bg-brand-slate-900'
                  : 'text-brand-slate-800 dark:text-brand-slate-100 hover:text-brand-emerald-600 dark:hover:text-brand-emerald-300 hover:bg-brand-emerald-50/50 dark:hover:bg-brand-slate-900/50'
              }`}
            >
              Careers
            </Link>
          </nav>

          {/* 3. Right Action Area */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />

            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-heading font-bold text-brand-slate-800 dark:text-brand-slate-200 hover:text-brand-emerald-600 dark:hover:text-brand-emerald-300 transition-colors"
            >
              Contact Us
            </Link>

            <Button
              to="/demo"
              variant="primary"
              size="sm"
              icon={Play}
            >
              Book a Demo
            </Button>
          </div>

          {/* 4. Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileNavOpen(true)}
              className="p-2.5 rounded-2xl bg-brand-emerald-100 dark:bg-brand-slate-800 text-brand-slate-900 dark:text-white hover:bg-brand-emerald-200 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* MegaMenu Panel */}
      <MegaMenu activeMenu={activeMenu} onClose={handleMenuLeave} />

      {/* Mobile Drawer */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </header>
  );
};
export default Header;
