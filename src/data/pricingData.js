export const pricingPlans = [
  {
    id: "free",
    name: "Free Forever",
    tagline: "Essential tools for solo founders & micro startups.",
    priceMonthly: 0,
    priceYearly: 0,
    billingPeriod: "forever free",
    popular: false,
    badge: "No Card Needed",
    buttonText: "Start For Free",
    buttonVariant: "outline",
    features: [
      "Up to 3 team members",
      "SASIG CRM (up to 250 contacts)",
      "SASIG Books (5 invoices/month)",
      "SASIG Projects (2 active projects)",
      "Standard community support",
      "1 GB secure cloud storage"
    ],
    highlightFeatures: ["3 users", "Core features", "Community support"]
  },
  {
    id: "starter",
    name: "Starter Growth",
    tagline: "Ideal for agile small teams gearing up to scale.",
    priceMonthly: 19,
    priceYearly: 15,
    billingPeriod: "per user / month",
    popular: false,
    badge: "Great for SMBs",
    buttonText: "Start 14-Day Free Trial",
    buttonVariant: "secondary",
    features: [
      "Up to 15 team members",
      "Unlimited CRM contacts & pipelines",
      "Unlimited MTD VAT invoicing & bank feeds",
      "Unlimited active projects & Gantt charts",
      "SASIG Desk (email ticketing)",
      "Email & in-app chat support",
      "25 GB secure cloud storage"
    ],
    highlightFeatures: ["15 users", "Unlimited invoices", "UK bank feeds"]
  },
  {
    id: "business",
    name: "Business Suite",
    tagline: "The complete all-in-one power suite for growing companies.",
    priceMonthly: 49,
    priceYearly: 39,
    billingPeriod: "per user / month",
    popular: true,
    badge: "Most Popular",
    buttonText: "Claim 14-Day Free Trial",
    buttonVariant: "primary",
    features: [
      "Unlimited team members",
      "All 8 SASIG Suite applications included",
      "Advanced workflow automations & webhooks",
      "Custom analytics & AI executive dashboards",
      "SASIG HR & Statutory UK leave tracking",
      "Custom role permissions & audit trails",
      "Priority UK phone & live chat support",
      "250 GB secure cloud storage"
    ],
    highlightFeatures: ["All 8 apps included", "AI Analytics", "Priority UK Support"]
  },
  {
    id: "enterprise",
    name: "Enterprise Custom",
    tagline: "Custom security, dedicated account manager, and SLA guarantees.",
    priceMonthly: 99,
    priceYearly: 79,
    billingPeriod: "per user / month",
    popular: false,
    badge: "Dedicated Infrastructure",
    buttonText: "Contact Enterprise Sales",
    buttonVariant: "outline",
    features: [
      "Dedicated UK cloud cluster & data residency",
      "99.99% SLA uptime guarantee",
      "Custom ERP & legacy database integrations",
      "SAML / SSO & Okta / Azure AD sync",
      "Dedicated Customer Success Manager",
      "Bespoke employee training & onboarding",
      "Unlimited storage & custom API limits"
    ],
    highlightFeatures: ["Dedicated cluster", "SSO/SAML", "Custom SLA"]
  }
];

export const featureComparison = [
  {
    category: "General & Platform",
    features: [
      { name: "Team Members", free: "3", starter: "Up to 15", business: "Unlimited", enterprise: "Unlimited" },
      { name: "Mobile App (iOS & Android)", free: true, starter: true, business: true, enterprise: true },
      { name: "Light & Dark Mode Interface", free: true, starter: true, business: true, enterprise: true },
      { name: "UK Data Residency", free: true, starter: true, business: true, enterprise: "Dedicated UK Cluster" },
      { name: "Two-Factor Authentication (2FA)", free: true, starter: true, business: true, enterprise: "Enforced 2FA / SSO" },
      { name: "Cloud Storage", free: "1 GB", starter: "25 GB", business: "250 GB", enterprise: "Unlimited" }
    ]
  },
  {
    category: "SASIG CRM & Sales",
    features: [
      { name: "Contact Capacity", free: "250", starter: "Unlimited", business: "Unlimited", enterprise: "Unlimited" },
      { name: "Visual Kanban Deal Pipelines", free: "1 Pipeline", starter: "5 Pipelines", business: "Unlimited", enterprise: "Unlimited" },
      { name: "Email Sync (Outlook & Gmail)", free: false, starter: true, business: true, enterprise: true },
      { name: "In-App UK VoIP Calling", free: false, starter: "Add-on", business: true, enterprise: true }
    ]
  },
  {
    category: "SASIG Books & Finance",
    features: [
      { name: "Monthly Invoices", free: "5", starter: "Unlimited", business: "Unlimited", enterprise: "Unlimited" },
      { name: "HMRC Making Tax Digital (MTD)", free: false, starter: true, business: true, enterprise: true },
      { name: "Direct UK Bank Feeds (Open Banking)", free: false, starter: true, business: true, enterprise: true },
      { name: "Multi-Currency Transactions", free: false, starter: false, business: true, enterprise: true },
      { name: "Free Accountant Guest Access", free: true, starter: true, business: true, enterprise: true }
    ]
  },
  {
    category: "Desk, Projects & HR",
    features: [
      { name: "Ticket Inboxes", free: "1", starter: "3", business: "Unlimited", enterprise: "Unlimited" },
      { name: "Gantt Charts & Time Tracking", free: false, starter: true, business: true, enterprise: true },
      { name: "UK Statutory Leave & Bradford Factor", free: false, starter: false, business: true, enterprise: true },
      { name: "Automated Cross-App Workflows", free: "50 runs/mo", starter: "1,000 runs/mo", business: "50,000 runs/mo", enterprise: "Unlimited" }
    ]
  },
  {
    category: "Support & Security",
    features: [
      { name: "Support Channels", free: "Community", starter: "Email & Chat", business: "Priority UK Phone & Chat", enterprise: "24/7 Dedicated Manager" },
      { name: "Uptime SLA", free: "99.9%", starter: "99.9%", business: "99.95%", enterprise: "99.99% Guaranteed" },
      { name: "Custom API & Webhooks", free: false, starter: "Standard", business: "High Volume", enterprise: "Bespoke" }
    ]
  }
];

export const pricingFaqs = [
  {
    q: "Can I change or cancel my plan at any time?",
    a: "Yes! There are no lock-in contracts on monthly plans. You can upgrade, downgrade, or cancel directly from your billing dashboard with one click."
  },
  {
    q: "How does the 14-day free trial work?",
    a: "You get full, unrestricted access to the Business Suite for 14 days. No credit card is required to begin. At the end of the trial, choose a paid plan or continue with the Free Forever tier."
  },
  {
    q: "Are all prices in GBP (£) and what about UK VAT?",
    a: "All displayed prices are in British Pounds (GBP). For UK businesses, standard UK VAT is calculated and displayed clearly at checkout with automated VAT receipts."
  },
  {
    q: "Do you offer discounts for UK charities, educational institutions or non-profits?",
    a: "Yes! We offer a 30% lifetime discount on all annual plans for registered UK charities, schools, and non-profit organisations. Contact our team to apply."
  }
];
