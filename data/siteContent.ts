// Edit this file to update all portfolio content in one place.

export type SectionId = "home" | "experience" | "projects" | "personal";

export type NavItem = {
  id: SectionId;
  label: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  links?: LinkItem[];
};

export type ExperienceEntry = {
  role: string;
  organization: string;
  dates: string;
  summaryLines: string[];
};

export type PersonalPhotoSlot = {
  title: string;
  note: string;
};

// Legacy component compatibility types.
export type TimelineEntry = {
  role: string;
  organization: string;
  dates: string;
  bullets: string[];
};
export type ResearchEntry = {
  title: string;
  dates: string;
  bullets: string[];
};
export type LeadershipTimelineStep = {
  label: string;
  note: string;
};

export const siteContent = {
  // Personal info
  name: "Hi, I'm Sidarth!",
  headshotSrc: "/headshot.jpeg",
  intro:
    "Georgia Tech B.S./M.S. CS student focused on distributed systems, quantitative infrastructure, and machine learning.",
  summary:
    "I build fast backend systems, low-latency data pipelines, and research-driven ML tools.",

  // Social links
  links: [
    { label: "Email", href: "mailto:sidarth.krishna@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/sidarthkrishna" },
    { label: "GitHub", href: "https://github.com/SidarthK" },
    { label: "Resume", href: "/Sidarth_Krishna_Resume.pdf" }
  ] as LinkItem[],

  navItems: [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "personal", label: "Personal" }
  ] as NavItem[],

  projects: [
    {
      title: "BrainBridge",
      techStack: ["Python", "C++", "WebSockets", "FastAPI", "MySQL", "PyTorch", "Next.js", "Redis"],
      description:
        "Built a real-time transcript and retrieval system that blends fast C++ streaming with semantic search for technical conversations."
    },
    {
      title: "Scollab",
      techStack: ["Socket.IO", "TypeScript", "React.js", "Node.js", "Express.js", "MySQL"],
      description:
        "Built a low-latency collaboration messaging app with scalable schema design and an optimistic, responsive frontend."
    },
    {
      title: "Commodities Forecasting Ensemble",
      techStack: ["Python", "Pandas", "NumPy", "PyTorch", "XGBoost", "SARIMA", "VECM"],
      description:
        "Developed an ensemble forecasting pipeline for commodities and translated model outputs into backtest-ready trading signals."
    },
    {
      title: "β-VAE & Attention-VAE",
      techStack: ["Python", "PyTorch", "CUDA"],
      description:
        "Explored VAE variants focused on stronger latent representations and efficient GPU-based experimentation."
    }
  ] as Project[],

  experience: [
    {
      role: "Incoming Software Engineering Intern",
      organization: "MongoDB",
      dates: "Summer 2026",
      summaryLines: [
        "Joining MongoDB as an incoming software engineering intern in New York.",
        "Focused on production-grade backend systems and platform reliability."
      ]
    },
    {
      role: "Quantitative Developer Intern",
      organization: "Fidelity Investments",
      dates: "June–Aug 2025",
      summaryLines: [
        "Rebuilt market-data infrastructure for faster ingestion and backtesting throughput.",
        "Implemented shared caching and storage layers for large time-series workflows."
      ]
    },
    {
      role: "Teaching Assistant",
      organization: "Georgia Institute of Technology",
      dates: "Dec 2025–Present",
      summaryLines: [
        "TA for Georgia Tech's large database systems course.",
        "Support students on schema design, SQL correctness, and performance."
      ]
    },
    {
      role: "Undergraduate Research Assistant",
      organization: "Language, Intelligence & Thought Lab at Georgia Tech",
      dates: "Dec 2024–Present",
      summaryLines: [
        "Build machine learning pipelines for fMRI-based neural decoding research.",
        "Work on interpretable representations connecting brain signals and language models."
      ]
    },
    {
      role: "Head of Quantitative Development",
      organization: "Georgia Tech Student Foundation Investments Committee",
      dates: "Jan 2024–Present",
      summaryLines: [
        "Lead quantitative infrastructure for a student-managed fund and guide systematic strategy development.",
        "Built distributed backtesting and execution tooling across cloud systems."
      ]
    },
    {
      role: "Software Engineering Intern",
      organization: "Kyron Learning",
      dates: "May–Aug 2024",
      summaryLines: [
        "Shipped product analytics features and APIs used in production.",
        "Improved performance and responsiveness across large user and data workloads."
      ]
    }
  ] as ExperienceEntry[],

  personal: {
    text:
      "Outside of work, I enjoy soccer, pickleball, and exploring ideas at the intersection of systems, markets, and machine learning.",
    photoSlots: [
      { title: "Soccer", note: "Placeholder for a field / match photo" },
      { title: "Pickleball", note: "Placeholder for a court photo" },
      { title: "Exploring Ideas", note: "Placeholder for a candid / workspace photo" }
    ] as PersonalPhotoSlot[]
  },

  footerNote: "Built with Next.js, TypeScript, and Tailwind CSS."
};
