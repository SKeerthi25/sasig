import React from 'react';
import { SEO } from '../components/common/SEO';
import { HeroSection } from '../components/home/HeroSection';
import { TrustedStrip } from '../components/home/TrustedStrip';
import { ProductSuiteGrid } from '../components/home/ProductSuiteGrid';
import { WhySasigSection } from '../components/home/WhySasigSection';
import { StatsSection } from '../components/home/StatsSection';
import { IndustryShowcase } from '../components/home/IndustryShowcase';
import { TestimonialsSlider } from '../components/home/TestimonialsSlider';
import { FinalCTA } from '../components/home/FinalCTA';

export const HomePage = () => {
  return (
    <div>
      <SEO
        title="Smart Software. Simple Growth."
        description="Run your entire UK business on SASIG's cloud suite: CRM, Books, Projects, Desk, HR, Analytics & Automations. Hull-based UK software publishing."
        canonical="/"
      />

      <HeroSection />
      <TrustedStrip />
      <ProductSuiteGrid />
      <WhySasigSection />
      <StatsSection />
      <IndustryShowcase />
      <TestimonialsSlider />
      <FinalCTA />
    </div>
  );
};
export default HomePage;
