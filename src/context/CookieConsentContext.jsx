import React, { createContext, useContext, useState, useEffect } from 'react';

const STORAGE_KEY = 'sasig_cookie_consent_v1';
const SIX_MONTHS_MS = 180 * 24 * 60 * 60 * 1000;

const defaultPreferences = {
  necessary: true, // Always true & required
  preferences: false,
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext({
  consent: null,
  isBannerOpen: false,
  isPreferencesModalOpen: false,
  acceptAll: () => {},
  rejectNonEssential: () => {},
  saveCustomPreferences: () => {},
  openPreferencesModal: () => {},
  closePreferencesModal: () => {},
});

export const CookieConsentProvider = ({ children }) => {
  const [consent, setConsent] = useState(null);
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [isPreferencesModalOpen, setIsPreferencesModalOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const now = Date.now();
        // Check if consent has expired (6 months)
        if (parsed.timestamp && now - parsed.timestamp < SIX_MONTHS_MS) {
          setConsent(parsed.preferences);
          setIsBannerOpen(false);
          triggerScripts(parsed.preferences);
          return;
        }
      }
      // No valid consent, open banner
      setIsBannerOpen(true);
    } catch (e) {
      setIsBannerOpen(true);
    }
  }, []);

  const triggerScripts = (prefs) => {
    if (prefs.analytics) {
      window.dispatchEvent(new CustomEvent('sasig:analytics-consent-granted'));
    }
    if (prefs.marketing) {
      window.dispatchEvent(new CustomEvent('sasig:marketing-consent-granted'));
    }
  };

  const saveConsent = (prefs) => {
    const payload = {
      preferences: prefs,
      timestamp: Date.now(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      console.warn('Could not save cookie consent to localStorage', e);
    }
    setConsent(prefs);
    setIsBannerOpen(false);
    setIsPreferencesModalOpen(false);
    triggerScripts(prefs);
  };

  const acceptAll = () => {
    const all = {
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(all);
  };

  const rejectNonEssential = () => {
    const minimal = {
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false,
    };
    saveConsent(minimal);
  };

  const saveCustomPreferences = (customPrefs) => {
    saveConsent({ ...customPrefs, necessary: true });
  };

  const openPreferencesModal = () => {
    setIsPreferencesModalOpen(true);
    setIsBannerOpen(false);
  };

  const closePreferencesModal = () => {
    setIsPreferencesModalOpen(false);
    if (!consent) {
      setIsBannerOpen(true);
    }
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consent: consent || defaultPreferences,
        hasAnswered: consent !== null,
        isBannerOpen,
        isPreferencesModalOpen,
        acceptAll,
        rejectNonEssential,
        saveCustomPreferences,
        openPreferencesModal,
        closePreferencesModal,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => useContext(CookieConsentContext);
