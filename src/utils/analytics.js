/**
 * UK GDPR compliant Analytics & Marketing script loader.
 * This module is executed ONLY when explicit consent is granted via CookieConsentContext.
 */

export const initAnalytics = () => {
  if (typeof window === 'undefined') return;

  window.addEventListener('sasig:analytics-consent-granted', () => {
    // Placeholder for Google Analytics 4 / Plausible Analytics
    // [EDIT]: Replace with your Google Analytics Measurement ID if required (e.g. G-XXXXXXXXXX)
    /*
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER';
    document.head.appendChild(gaScript);
    */
    console.log('[SASIG Privacy] Analytics tracking consent granted and active.');
  });

  window.addEventListener('sasig:marketing-consent-granted', () => {
    // [EDIT]: Replace with Marketing / Meta Pixel if required
    console.log('[SASIG Privacy] Marketing tracking consent granted and active.');
  });
};
