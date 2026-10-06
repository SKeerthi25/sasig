import React from 'react';
import { Helmet } from 'react-helmet-async';
import { companyInfo } from '../../data/companyInfo';

export const SEO = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = "https://www.sasigltd.co.uk/og-image.png",
  schema
}) => {
  const siteTitle = title ? `${title} | SASIG LTD` : `SASIG LTD | ${companyInfo.tagline}`;
  const metaDescription = description || `${companyInfo.heroHeadline} - ${companyInfo.heroSubheadline}`;
  const canonicalUrl = canonical ? `${companyInfo.fullDomain}${canonical}` : companyInfo.fullDomain;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={companyInfo.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
