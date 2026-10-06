export const products = [
  {
    id: "crm",
    slug: "crm",
    name: "SASIG CRM",
    category: "Sales & Pipeline",
    tagline: "Turn warm conversations into recurring revenue without the friction.",
    badge: "Most Popular",
    heroDesc: "The intuitive customer relationship manager that sales teams actually love using. Track deals, automate follow-ups, and forecast pipeline with zero data clutter.",
    color: "#10B981",
    themeClass: "brand-emerald",
    accentColor: "text-brand-emerald-600 dark:text-brand-emerald-400",
    bgLight: "bg-brand-emerald-50 dark:bg-brand-emerald-950/40",
    borderLight: "border-brand-emerald-200 dark:border-brand-emerald-800",
    gradient: "from-brand-emerald-500 to-brand-mint-400",
    icon: "Users2",
    stats: [
      { label: "Deal Close Speed", value: "+38%" },
      { label: "Admin Time Saved", value: "8 hrs/wk" },
      { label: "Pipeline Visibility", value: "100%" }
    ],
    features: [
      {
        title: "Visual Kanban Pipelines",
        desc: "Drag-and-drop deals across bespoke stages. Spot bottlenecks instantly and prioritize high-value prospects.",
        icon: "LayoutDashboard"
      },
      {
        title: "AI-Powered Email Sync & Tracking",
        desc: "Connect Microsoft 365 or Google Workspace in one click. Receive instant notifications when prospects open quotes.",
        icon: "Mail"
      },
      {
        title: "Automated Meeting Scheduler",
        desc: "Eliminate back-and-forth scheduling. Share custom booking links synced directly with your UK calendar.",
        icon: "Calendar"
      },
      {
        title: "Built-in UK Calling & VoIP",
        desc: "Make and record local UK calls directly inside contact records with automated call logs and transcription.",
        icon: "PhoneCall"
      }
    ],
    faqs: [
      {
        q: "Can I import our existing data from Salesforce or HubSpot?",
        a: "Yes! SASIG CRM provides 1-click native CSV and direct API importers that effortlessly migrate contacts, companies, pipelines, and historical notes."
      },
      {
        q: "Does SASIG CRM support multi-currency sales?",
        a: "Absolutely. You can price and close deals in GBP (£), EUR (€), USD ($) and over 40 global currencies with live bank exchange updates."
      },
      {
        q: "Is GDPR compliance built-in for UK contacts?",
        a: "Yes, built-in consent tracking, right-to-be-forgotten requests, and automated audit trails ensure you remain 100% UK GDPR compliant."
      }
    ]
  },
  {
    id: "books",
    slug: "books",
    name: "SASIG Books",
    category: "Finance & Accounting",
    tagline: "HMRC Making Tax Digital compliant accounting made delightful.",
    badge: "MTD Compliant",
    heroDesc: "Effortless invoicing, automated UK bank reconciliation, VAT returns, and real-time cash flow intelligence for fast-moving businesses.",
    color: "#059669",
    themeClass: "brand-emerald",
    accentColor: "text-brand-emerald-700 dark:text-brand-emerald-300",
    bgLight: "bg-brand-emerald-50 dark:bg-brand-emerald-950/40",
    borderLight: "border-brand-emerald-200 dark:border-brand-emerald-800",
    gradient: "from-brand-emerald-600 to-brand-mint-500",
    icon: "Receipt",
    stats: [
      { label: "Bank Reconciliation", value: "90% Auto" },
      { label: "Faster Invoicing", value: "3x" },
      { label: "MTD Filing Success", value: "100%" }
    ],
    features: [
      {
        title: "Direct UK Bank Feeds",
        desc: "Connect seamlessly to Barclays, HSBC, Lloyds, NatWest, Monzo, Starling and over 40 UK financial institutions.",
        icon: "Landmark"
      },
      {
        title: "1-Click MTD VAT Submission",
        desc: "Generate accurate UK VAT returns and file directly with HMRC in seconds without manual spreadsheets.",
        icon: "ShieldCheck"
      },
      {
        title: "Smart Receipt OCR Scanning",
        desc: "Snap receipts on your phone. Our AI automatically extracts supplier, total, VAT amount, and category.",
        icon: "Camera"
      },
      {
        title: "Recurring Invoices & Auto-Chasing",
        desc: "Get paid faster with automated polite payment reminders and integrated Stripe/GoCardless payment buttons.",
        icon: "Send"
      }
    ],
    faqs: [
      {
        q: "Is SASIG Books officially recognised for HMRC Making Tax Digital?",
        a: "Yes, SASIG Books complies with HMRC's Making Tax Digital (MTD) requirements for VAT and Income Tax Self Assessment."
      },
      {
        q: "Can my UK accountant have free access?",
        a: "Yes! Every SASIG Books plan includes complimentary accountant and bookkeeper guest licenses with custom permissions."
      }
    ]
  },
  {
    id: "desk",
    slug: "desk",
    name: "SASIG Desk",
    category: "Customer Support",
    tagline: "Delight customers across every channel with lightning resolution times.",
    badge: "Omnichannel",
    heroDesc: "A shared inbox, ticketing system, live chat, and self-serve knowledge base that empowers your support team to deliver stellar experiences.",
    color: "#14B8A6",
    themeClass: "brand-mint",
    accentColor: "text-brand-mint-600 dark:text-brand-mint-400",
    bgLight: "bg-brand-mint-50 dark:bg-brand-mint-950/40",
    borderLight: "border-brand-mint-200 dark:border-brand-mint-800",
    gradient: "from-brand-mint-500 to-brand-emerald-400",
    icon: "LifeBuoy",
    stats: [
      { label: "First Response Time", value: "< 2 mins" },
      { label: "CSAT Score", value: "98.4%" },
      { label: "Deflected Tickets", value: "45%" }
    ],
    features: [
      {
        title: "Unified Shared Inbox",
        desc: "Manage customer emails, web chat, WhatsApp, and social messages in a single collaborative interface.",
        icon: "Inbox"
      },
      {
        title: "AI Help Centre & Deflection",
        desc: "Publish searchable knowledge bases that answer repetitive questions automatically before tickets are even created.",
        icon: "BookOpen"
      },
      {
        title: "SLA Timers & Smart Routing",
        desc: "Prioritize VIP accounts and auto-route complex tickets to specialist team members with custom escalation rules.",
        icon: "Clock"
      },
      {
        title: "Customer Satisfaction (CSAT) Surveys",
        desc: "Capture instant 1-click feedback on resolution to continuously monitor and elevate your service standards.",
        icon: "Smile"
      }
    ],
    faqs: [
      {
        q: "Can we embed the live chat widget on our existing website?",
        a: "Yes, you can drop our lightweight JavaScript snippet onto any HTML, WordPress, Shopify, or React website in 60 seconds."
      },
      {
        q: "Does SASIG Desk support multi-brand support teams?",
        a: "Yes, manage distinct email addresses, knowledge bases, and brand themes from a single unified admin panel."
      }
    ]
  },
  {
    id: "projects",
    slug: "projects",
    name: "SASIG Projects",
    category: "Project & Task Management",
    tagline: "Plan sprints, track time, and ship high-impact deliverables on schedule.",
    badge: "Agile & Gantt",
    heroDesc: "From simple to-do lists to complex enterprise Gantt roadmaps and resource allocation—keep every team aligned without meeting fatigue.",
    color: "#2DD4BF",
    themeClass: "brand-mint",
    accentColor: "text-brand-mint-500 dark:text-brand-mint-300",
    bgLight: "bg-brand-mint-50 dark:bg-brand-mint-950/40",
    borderLight: "border-brand-mint-200 dark:border-brand-mint-800",
    gradient: "from-brand-mint-400 to-brand-emerald-500",
    icon: "FolderKanban",
    stats: [
      { label: "On-Time Delivery", value: "96%" },
      { label: "Team Velocity", value: "+42%" },
      { label: "Meeting Reduction", value: "35%" }
    ],
    features: [
      {
        title: "Interactive Gantt & Timeline",
        desc: "Visualize task dependencies, critical paths, and project milestones with flexible drag-and-drop adjustments.",
        icon: "GitFork"
      },
      {
        title: "Built-in Time Tracking & Timesheets",
        desc: "Track billable hours per task or project, approve team timesheets, and export directly into SASIG Books.",
        icon: "Timer"
      },
      {
        title: "Workload & Resource Planning",
        desc: "Balance team capacity to avoid burnout and ensure no team member is over-allocated.",
        icon: "Users"
      },
      {
        title: "Client Portals with Custom Permissions",
        desc: "Give clients transparent, secure view-only or feedback access to specific milestones and deliverables.",
        icon: "ExternalLink"
      }
    ],
    faqs: [
      {
        q: "Can we switch views between Kanban, List, Calendar, and Gantt?",
        a: "Yes! Every project view can be toggled instantly with your customized filters and group-by settings."
      }
    ]
  },
  {
    id: "hr",
    slug: "hr",
    name: "SASIG HR",
    category: "People & Talent",
    tagline: "Cultivate happy teams with streamlined UK leave, onboarding, and payroll.",
    badge: "People First",
    heroDesc: "Modern human resources software tailored for UK employment standards. Manage holiday entitlement, appraisals, expenses, and employee records.",
    color: "#0F766E",
    themeClass: "brand-emerald",
    accentColor: "text-brand-emerald-800 dark:text-brand-emerald-300",
    bgLight: "bg-brand-emerald-50 dark:bg-brand-emerald-950/40",
    borderLight: "border-brand-emerald-200 dark:border-brand-emerald-800",
    gradient: "from-brand-emerald-900 to-brand-mint-500",
    icon: "HeartHandshake",
    stats: [
      { label: "Leave Request Turnaround", value: "< 1 hr" },
      { label: "Onboarding Completion", value: "99%" },
      { label: "Paperwork Reduced", value: "100%" }
    ],
    features: [
      {
        title: "UK Holiday & Bank Holiday Tracking",
        desc: "Automated statutory UK holiday allowances, Bradford Factor absence scoring, and instant manager approvals.",
        icon: "Palmtree"
      },
      {
        title: "Digital Onboarding & eSignatures",
        desc: "Send offer letters, employment contracts, and Right to Work checks digitally before day one.",
        icon: "FileCheck"
      },
      {
        title: "Performance Reviews & 360 Feedback",
        desc: "Run structured quarterly reviews, OKR tracking, and anonymous peer feedback to foster continuous development.",
        icon: "Award"
      },
      {
        title: "Secure Employee Self-Service Portal",
        desc: "Employees can update personal info, request time off, and access payslips securely from any device.",
        icon: "Smartphone"
      }
    ],
    faqs: [
      {
        q: "Does SASIG HR calculate UK statutory sick pay (SSP) and maternity pay?",
        a: "Yes, UK statutory leave rules and calculations are pre-configured in full compliance with UK employment legislation."
      }
    ]
  },
  {
    id: "connect",
    slug: "connect",
    name: "SASIG Connect",
    category: "Team Communication",
    tagline: "Smart team chat, video huddles, and asynchronous channel discussions.",
    badge: "Fast & Secure",
    heroDesc: "Keep your hybrid and distributed teams connected without the noise. Organized channels, crystal-clear 1-click video calls, and project sync.",
    color: "#10B981",
    themeClass: "brand-emerald",
    accentColor: "text-brand-emerald-600 dark:text-brand-emerald-400",
    bgLight: "bg-brand-emerald-50 dark:bg-brand-emerald-950/40",
    borderLight: "border-brand-emerald-200 dark:border-brand-emerald-800",
    gradient: "from-brand-emerald-500 to-brand-mint-600",
    icon: "MessageSquareText",
    stats: [
      { label: "Voice/Video Latency", value: "< 25ms" },
      { label: "Search Indexing", value: "Instant" },
      { label: "Encryption", value: "AES-256" }
    ],
    features: [
      {
        title: "Organised Channels & Threads",
        desc: "Create public, private, or external client channels with focused threaded discussions.",
        icon: "Hash"
      },
      {
        title: "Instant 1-Click Video Huddles",
        desc: "Jump into low-latency voice and screen-sharing huddles directly from any chat thread.",
        icon: "Video"
      },
      {
        title: "Deep SASIG Suite Integrations",
        desc: "Receive real-time notifications for CRM deals closed, Desk ticket escalations, and project milestone updates.",
        icon: "BellRing"
      },
      {
        title: "End-to-End Enterprise Encryption",
        desc: "Military-grade data protection with UK data residency options for maximum peace of mind.",
        icon: "Lock"
      }
    ],
    faqs: [
      {
        q: "Can we invite external guests or contractors into specific channels?",
        a: "Yes, single-channel and multi-channel guest guest passes allow tight collaboration without exposing your internal workspace."
      }
    ]
  },
  {
    id: "analytics",
    slug: "analytics",
    name: "SASIG Analytics",
    category: "Business Intelligence",
    tagline: "Turn complex business data into vibrant, actionable executive dashboards.",
    badge: "AI Insights",
    heroDesc: "Connect your databases, spreadsheets, and SASIG apps. Build custom KPI dashboards and uncover hidden growth opportunities with automated AI insights.",
    color: "#059669",
    themeClass: "brand-emerald",
    accentColor: "text-brand-emerald-600 dark:text-brand-emerald-400",
    bgLight: "bg-brand-emerald-50 dark:bg-brand-emerald-950/40",
    borderLight: "border-brand-emerald-200 dark:border-brand-emerald-800",
    gradient: "from-brand-emerald-700 to-brand-mint-400",
    icon: "BarChart3",
    stats: [
      { label: "Report Generation", value: "Instant" },
      { label: "Data Connectors", value: "100+" },
      { label: "Decision Velocity", value: "2.5x" }
    ],
    features: [
      {
        title: "Drag-and-Drop Visual Builder",
        desc: "Create bespoke charts, pivot tables, and KPI cards with zero SQL knowledge required.",
        icon: "PieChart"
      },
      {
        title: "Natural Language AI Queries",
        desc: "Simply ask: 'What was our highest-margin product in Yorkshire last quarter?' and get instant visual charts.",
        icon: "Sparkles"
      },
      {
        title: "Automated Scheduled PDF Reports",
        desc: "Deliver sleek executive summaries straight to stakeholders' inboxes every Monday morning.",
        icon: "FileText"
      },
      {
        title: "Real-time Live Alerting",
        desc: "Set threshold alerts for revenue dips, inventory lows, or support spikes to act proactively.",
        icon: "Zap"
      }
    ],
    faqs: [
      {
        q: "Can we connect external PostgreSQL, MySQL, or Snowflake databases?",
        a: "Yes! SASIG Analytics includes secure connectors for all major SQL/NoSQL databases and cloud data warehouses."
      }
    ]
  },
  {
    id: "forms",
    slug: "forms",
    name: "SASIG Forms & Automation",
    category: "No-Code Workflows",
    tagline: "Build dynamic forms, surveys, and multi-app automated workflows in minutes.",
    badge: "No-Code Power",
    heroDesc: "Collect data effortlessly with responsive branded forms and trigger sophisticated cross-app logic without writing a single line of code.",
    color: "#34D399",
    themeClass: "brand-mint",
    accentColor: "text-brand-mint-600 dark:text-brand-mint-400",
    bgLight: "bg-brand-mint-50 dark:bg-brand-mint-950/40",
    borderLight: "border-brand-mint-200 dark:border-brand-mint-800",
    gradient: "from-brand-mint-500 to-brand-champagne-400",
    icon: "Cpu",
    stats: [
      { label: "Form Completion Rate", value: "84%" },
      { label: "Manual Steps Saved", value: "15+" },
      { label: "Automation Speed", value: "< 100ms" }
    ],
    features: [
      {
        title: "Conditional Logic & Calculations",
        desc: "Create smart branching paths, calculate quote totals on the fly, and show personalized questions.",
        icon: "GitCommit"
      },
      {
        title: "Multi-Step Workflow Automator",
        desc: "When a form is submitted, instantly generate a CRM lead, create a Books invoice, and notify Slack.",
        icon: "Workflow"
      },
      {
        title: "Online Payments & File Uploads",
        desc: "Collect deposits via Stripe and securely accept attachments up to 2GB per submission.",
        icon: "UploadCloud"
      },
      {
        title: "Embed Anywhere or Host on Custom Domain",
        desc: "Publish standalone landing pages or embed seamlessly as full-page, popup, or inline elements.",
        icon: "Globe"
      }
    ],
    faqs: [
      {
        q: "Are submissions encrypted and compliant with UK data protection?",
        a: "Yes, all data in transit and at rest is secured with 256-bit SSL encryption, fully compliant with UK GDPR."
      }
    ]
  }
];
