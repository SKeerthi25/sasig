import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieBanner } from '../common/CookieBanner';
import { ScrollToTop } from '../common/ScrollToTop';

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-pearl dark:bg-brand-slate-950 text-brand-slate-900 dark:text-brand-slate-100 transition-colors duration-300">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};
export default Layout;
