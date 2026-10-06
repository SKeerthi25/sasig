import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { BlogListingPage } from './pages/BlogListingPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { BookDemoPage } from './pages/BookDemoPage';
import { FAQPage } from './pages/FAQPage';
import { LegalPage } from './pages/LegalPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Core Pages */}
        <Route index element={<HomePage />} />
        
        {/* Product Ecosystem */}
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:slug" element={<ProductDetailPage />} />

        {/* Solutions */}
        <Route path="solutions" element={<SolutionsPage />} />

        {/* Services */}
        <Route path="services" element={<ServicesPage />} />

        {/* Resources & Editorial */}
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="blog" element={<BlogListingPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />

        {/* Company & Support */}
        <Route path="about" element={<AboutPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FAQPage />} />

        {/* Conversions */}
        <Route path="demo" element={<BookDemoPage />} />
        <Route path="thank-you" element={<ThankYouPage />} />

        {/* Legal Policies (UK GDPR & PECR) */}
        <Route path="privacy-policy" element={<LegalPage />} />
        <Route path="cookie-policy" element={<LegalPage />} />
        <Route path="terms" element={<LegalPage />} />
        <Route path="acceptable-use" element={<LegalPage />} />
        <Route path="refund-policy" element={<LegalPage />} />

        {/* Catch-all 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
