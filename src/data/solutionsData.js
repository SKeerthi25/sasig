export const solutions = {
  industries: [
    {
      id: "startups",
      slug: "startups",
      name: "Startups & Scaleups",
      title: "Scale From Seed to Series B Without Software Sprawl",
      tagline: "Move fast, keep your burn rate low, and scale operations smoothly with an all-in-one suite.",
      icon: "Rocket",
      color: "brand-violet",
      gradient: "from-brand-violet-500 to-brand-pink-500",
      description: "Startups need velocity without astronomical SaaS bills. SASIG replaces 8 disconnected tool subscriptions with a single unified workspace.",
      keyBenefits: [
        "Consolidated single billing saves over 65% on software costs",
        "Automated investor reporting and runway analytics",
        "Rapid onboarding for new remote & hybrid hires",
        "Frictionless client acquisition pipelines"
      ],
      recommendedProducts: ["crm", "projects", "books", "connect"],
      testimonial: {
        quote: "Switching our 22-person tech team to SASIG saved us £1,800 a month in disjointed SaaS subscriptions while making our sprint planning 2x faster.",
        author: "Oliver Davies",
        role: "Founder & CEO, HyperScale Labs UK",
        avatarBg: "bg-brand-violet-500"
      }
    },
    {
      id: "retail",
      slug: "retail",
      name: "Retail & eCommerce",
      title: "Unify Online Stores, Physical Stock, and Happy Shoppers",
      tagline: "Synchronize inventory, automate supplier orders, and deliver omnichannel support.",
      icon: "ShoppingBag",
      color: "brand-mint",
      gradient: "from-brand-mint-500 to-brand-yellow-500",
      description: "Keep stock levels accurate across Shopify, WooCommerce, and physical outlets while handling customer queries with lightning speed.",
      keyBenefits: [
        "Live stock reconciliation with automated reorder alerts",
        "Omnichannel customer support ticketing across chat, email, and social",
        "MTD-compliant VAT tracking across multi-channel sales",
        "Automated customer feedback and VIP loyalty flows"
      ],
      recommendedProducts: ["desk", "books", "analytics", "forms"],
      testimonial: {
        quote: "SASIG Desk cut our peak season response times from 4 hours to 7 minutes across our UK web stores.",
        author: "Emma Watson-Clarke",
        role: "Head of eCommerce, Artisan Living Ltd",
        avatarBg: "bg-brand-mint-500"
      }
    },
    {
      id: "healthcare",
      slug: "healthcare",
      name: "Healthcare & Clinics",
      title: "Patient-First Care with Secure, Compliant Operations",
      tagline: "Streamline clinic appointments, practitioner schedules, and secure record management.",
      icon: "ActivitySquare",
      color: "brand-pink",
      gradient: "from-brand-pink-500 to-brand-violet-500",
      description: "UK healthcare providers, private dental clinics, and wellness practices rely on SASIG's secure infrastructure for patient scheduling and compliance.",
      keyBenefits: [
        "UK GDPR & Data Protection Act 2018 certified architecture",
        "Automated SMS and email appointment reminders reducing no-shows",
        "Digital intake forms with encrypted document uploads",
        "Staff shift scheduling and statutory compliance tracking"
      ],
      recommendedProducts: ["forms", "crm", "hr", "desk"],
      testimonial: {
        quote: "Our private clinic reduced patient no-shows by 40% in our first month using SASIG automated reminders.",
        author: "Dr. Alistair Finch",
        role: "Clinical Director, Yorkshire Health Partners",
        avatarBg: "bg-brand-pink-500"
      }
    },
    {
      id: "education",
      slug: "education",
      name: "Education & Academies",
      title: "Connect Students, Faculty, and Operations Effortlessly",
      tagline: "Empower UK schools, academies, and training providers with intuitive digital tools.",
      icon: "GraduationCap",
      color: "brand-yellow",
      gradient: "from-brand-yellow-500 to-brand-mint-500",
      description: "Manage student applications, course schedules, staff CPD records, and parent communications under a modern, joyful platform.",
      keyBenefits: [
        "Centralised student enquiry and admissions workflow",
        "Staff training, absence, and certification management",
        "Event booking and automated consent forms",
        "Departmental budget tracking and purchase approvals"
      ],
      recommendedProducts: ["forms", "projects", "hr", "books"],
      testimonial: {
        quote: "Admissions workflow used to take three staff members two weeks. With SASIG Forms & CRM, it is completed in hours.",
        author: "Helen Turner",
        role: "Director of Operations, Northern Academy Trust",
        avatarBg: "bg-brand-yellow-500"
      }
    },
    {
      id: "finance",
      slug: "finance",
      name: "Finance & Legal",
      title: "Bulletproof Accuracy and Regulatory Precision",
      tagline: "Built for UK accounting firms, legal practices, and wealth consultancies.",
      icon: "ShieldAlert",
      color: "brand-violet",
      gradient: "from-brand-violet-500 to-brand-mint-500",
      description: "Bank-grade encryption, time-based billing, client portals, and audit trails tailored for UK regulatory standards.",
      keyBenefits: [
        "Granular role-based permissions and complete audit logs",
        "Automated client KYC onboarding and document requests",
        "Detailed billable time tracking and automated trust accounting",
        "Custom branded client communication portals"
      ],
      recommendedProducts: ["books", "projects", "crm", "analytics"],
      testimonial: {
        quote: "SASIG's compliance features give our financial consulting clients complete assurance, and the time-tracking is flawless.",
        author: "Marcus Sterling",
        role: "Managing Partner, Sterling & Ward Advisory",
        avatarBg: "bg-brand-violet-500"
      }
    },
    {
      id: "manufacturing",
      slug: "manufacturing",
      name: "Manufacturing & Logistics",
      title: "Bridge Shop-Floor Execution with Back-Office Agility",
      tagline: "Track supplier procurement, production timelines, and workforce safety.",
      icon: "Boxes",
      color: "brand-mint",
      gradient: "from-brand-mint-500 to-brand-pink-500",
      description: "Eliminate paper job cards, track maintenance schedules, and monitor supplier lead times with real-time operational visibility.",
      keyBenefits: [
        "Visual production scheduling and supplier delivery tracking",
        "Equipment maintenance logs with automated service reminders",
        "Digital health & safety incident logging on shop-floor tablets",
        "Real-time cost tracking against production batches"
      ],
      recommendedProducts: ["projects", "forms", "analytics", "books"],
      testimonial: {
        quote: "We replaced our paper-heavy dispatch process with SASIG. Batch turnaround time decreased by 28%.",
        author: "David Bradley",
        role: "Operations Director, Humber Precision Engineering",
        avatarBg: "bg-brand-mint-500"
      }
    }
  ],
  teams: [
    {
      id: "sales",
      slug: "sales",
      name: "Sales & Commercial",
      title: "Close More Deals with Less Admin Overhead",
      icon: "Target",
      color: "brand-violet",
      gradient: "from-brand-violet-500 to-brand-pink-500",
      description: "Equip your sales team with automated pipelines, smart email cadences, and instant quote generation.",
      products: ["crm", "analytics", "connect"]
    },
    {
      id: "marketing",
      slug: "marketing",
      name: "Marketing & Growth",
      title: "Capture High-Intent Leads and Measure Attribution",
      icon: "Megaphone",
      color: "brand-pink",
      gradient: "from-brand-pink-500 to-brand-yellow-500",
      description: "Build landing forms, automate nurture emails, and track conversion metrics across every marketing campaign.",
      products: ["forms", "analytics", "crm"]
    },
    {
      id: "support",
      slug: "support",
      name: "Customer Support",
      title: "Deliver World-Class Customer Experiences 24/7",
      icon: "Headphones",
      color: "brand-mint",
      gradient: "from-brand-mint-500 to-brand-violet-500",
      description: "Manage tickets, live chat, and customer knowledge bases with AI-powered deflection and smart routing.",
      products: ["desk", "connect", "analytics"]
    },
    {
      id: "hr",
      slug: "hr",
      name: "Human Resources",
      title: "Put People First with Frictionless People Ops",
      icon: "HeartHandshake",
      color: "brand-yellow",
      gradient: "from-brand-yellow-500 to-brand-pink-500",
      description: "Manage statutory UK leave, onboarding workflows, appraisals, and employee records in a modern hub.",
      products: ["hr", "forms", "connect"]
    },
    {
      id: "finance",
      slug: "finance",
      name: "Finance & Leadership",
      title: "Real-Time Financial Clarity and MTD Compliance",
      icon: "Coins",
      color: "brand-violet",
      gradient: "from-brand-violet-500 to-brand-mint-500",
      description: "Streamline VAT submissions, bank reconciliation, team expenses, and executive financial forecasts.",
      products: ["books", "analytics", "projects"]
    }
  ]
};
