import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  FileText,
  Home,
  Layers3,
  Mail,
  Network,
  PenLine,
  Sparkles,
  FileCode2,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

export type SectionId =
  | "home"
  | "experience"
  | "skills"
  | "projects"
  | "services"
  | "systems"
  | "writing"
  | "contact";

export type NavItem = {
  id: SectionId;
  label: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "projects", label: "Projects", icon: Layers3 },
  { id: "services", label: "Services", icon: Workflow },
  { id: "systems", label: "Systems", icon: Network },
  { id: "contact", label: "Contact", icon: Mail },
];

export const profile = {
  name: "Obafemi Ogunmokun",
  brand: "Obafemi.dev",
  title: "Software Engineer",
  experienceYears: "7+",
  experienceDetail: "7 years, 4 months across listed roles as of June 2026",
  location: "Lagos, Nigeria",
  email: "obafemiogunmokun@gmail.com",
  linkedin: "https://www.linkedin.com/in/obafemiogunmokun/",
  linkedinLabel: "linkedin.com/in/obafemiogunmokun",
  github: "https://github.com/femzy123",
  githubLabel: "github.com/femzy123",
  discord: "https://discord.com/users/femzy123",
  discordLabel: "Discord",
  telegram: "https://t.me/GeminiGeek",
  telegramLabel: "Telegram",
  resume: "/Obafemi-Ogunmokun-Resume.pdf",
  summary:
    "Software engineer with 7+ years of experience building full-stack products and developer platforms across finance, education, project management, logistics, AI tooling, and consulting.",
  intro:
    "I turn ambiguous product goals into reliable software systems that teams can ship, scale, and maintain.",
  support:
    "7+ years across SDKs, SaaS platforms, AI tools, cloud infrastructure, APIs, and product engineering, with a focus on architecture, delivery, and long-term system quality.",
};

export const transitionQuotes = [
  "The best systems evolve through iteration.",
  "Reliability is built, not assumed.",
  "Complexity grows naturally. Simplicity must be designed.",
  "Tools change. Thinking compounds.",
  "Clear thinking becomes better engineering.",
  "Good products start with honest conversations.",
];

export const experience = [
  {
    company: "Joyfill",
    role: "Software Engineer",
    location: "FL, USA",
    dates: "Nov 2024 to Present",
    tech: ["TypeScript", "React", "Node.js", "AWS", "REST API", "MongoDB"],
    summary:
      "Contributing to SDK architecture, product workflows, and developer-facing tooling for complex form and document technology.",
    bullets: [
      "Improved SDK workflows by reducing integration friction and making core developer tasks easier to complete.",
      "Diagnosed performance issues through profiling, reproduction, and careful validation of fixes.",
      "Strengthened SDK internals with cleaner abstractions, safer patterns, and more maintainable implementation paths.",
      "Translated product and engineering ambiguity into scoped, shippable work.",
    ],
  },
  {
    company: "Relentless Persistence Inc.",
    role: "Lead Engineer",
    location: "WA, USA",
    dates: "Oct 2021 to Nov 2024",
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Google Cloud",
      "Firebase",
      "REST API",
      "OpenAI",
    ],
    summary:
      "Led engineering for SprintZero through a fast-changing product phase, shaping architecture, execution plans, and delivery tradeoffs.",
    bullets: [
      "Owned technical direction across frontend, backend, cloud, and AI-assisted product workflows.",
      "Broke unclear goals into milestones, prototypes, and smallest useful releases.",
      "Created maintainable patterns and implementation boundaries so the product could evolve quickly without losing structure.",
    ],
  },
  {
    company: "NativShark",
    role: "Fullstack Engineer",
    location: "Fukuoka, Japan",
    dates: "Mar 2020 to Dec 2020",
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Elixir",
      "AWS",
      "GraphQL",
      "REST",
    ],
    summary:
      "Contributed to a language-learning platform with a focus on maintainability, performance, and developer velocity.",
    bullets: [
      "Simplified high-friction engineering areas and improved the team's ability to ship with confidence.",
      "Balanced product timelines with architecture decisions that kept the platform easier to extend.",
    ],
  },
  {
    company: "Lopworks Limited",
    role: "Software Developer",
    location: "Nigeria",
    dates: "Sept 2018 to Feb 2020",
    tech: [
      "JavaScript",
      "React",
      "Vue",
      "Node.js",
      "Elixir",
      "REST",
      "PHP",
      "Laravel",
    ],
    summary:
      "Built client applications and API integrations across frontend, backend, and delivery-focused consulting work.",
    bullets: [
      "Improved API communication and integration workflows using enterprise API tooling.",
      "Led implementation planning, technical training, and delivery support for client-facing solutions.",
    ],
  },
  {
    company: "Enovait",
    role: "Web Developer",
    location: "Lagos, Nigeria",
    dates: "Jun 2017 to Apr 2018",
    tech: ["JavaScript", "PHP", "Laravel", "HTML/CSS", "jQuery"],
    summary:
      "Built early web and desktop software experiences focused on usability, reliability, and practical delivery.",
    bullets: [
      "Developed dynamic web applications and supported stable software setup for client environments.",
    ],
  },
];

export const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS"],
  },
  {
    title: "Backend",
    icon: Layers3,
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "Elixir"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    items: ["AWS", "Google Cloud"],
  },
  {
    title: "AI",
    icon: Sparkles,
    items: ["OpenAI", "Gemini AI", "Codex", "Claude"],
  },
  {
    title: "Product Engineering",
    icon: BrainCircuit,
    items: [
      "Debugging",
      "Profiling",
      "Architecture",
      "Technical leadership",
      "Feature scoping",
      "Developer experience",
    ],
  },
];

export const projects = [
  {
    title: "KryptoPay",
    featured: true,
    description:
      "Developer-focused USDC payment SDK designed for direct merchant wallet settlement, clean integration paths, and practical Web3 payment flows.",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "AWS",
      "PostgreSQL",
      "Web3",
      "SDK",
    ],
    visual: "payments",
  },
  {
    title: "Joyfill",
    featured: true,
    description:
      "SDK and product workflow contributions for complex data collection, document technology, performance debugging, and developer tooling.",
    url: "https://joyfill.io/",
    tags: ["React", "TypeScript", "SDK", "Node.js", "AWS", "MongoDB"],
    visual: "forms",
  },
  {
    title: "NativShark",
    featured: true,
    description:
      "Language-learning platform work focused on scalable product experiences, maintainable architecture, and learner-facing performance.",
    url: "https://www.nativshark.com/",
    tags: ["Next.js", "React", "Node.js", "Elixir", "AWS", "GraphQL"],
    visual: "learning",
  },
  {
    title: "MyQuizzy",
    description:
      "AI study tool that turns notes into adaptive quiz practice and helps learners move from passive review to active recall.",
    url: "https://myquizzy.vercel.app/",
    tags: ["Next.js", "AI", "Education", "TypeScript"],
  },
  {
    title: "InterviewSim",
    description:
      "Role-based interview preparation tool for practicing technical questions, structured answers, and interview readiness.",
    url: "https://interviewsim.vercel.app/",
    tags: ["Next.js", "AI", "Interview Prep", "TypeScript"],
  },
  {
    title: "Splendid Packaging",
    description:
      "Logistics management application supporting operational workflows, product delivery, and internal business coordination.",
    url: "https://app.splendidpackaging.com",
    tags: ["React", "Logistics", "Product Engineering"],
  },
  {
    title: "AI Image Generator",
    description:
      "AI image generation interface built around prompt input, model integration, and fast visual iteration.",
    url: "https://fem-ai-image-gen.vercel.app/",
    tags: ["Next.js", "OpenAI", "AI"],
  },
  {
    title: "CryptoWorld",
    description:
      "Crypto information dashboard built with React, Redux Toolkit, and Ant Design for market data exploration.",
    url: "https://femzy-cryptoworld.netlify.app/",
    tags: ["React", "Redux Toolkit", "Ant Design"],
  },
  {
    title: "Covid Tracker",
    description:
      "Data-tracking interface for exploring global COVID-related metrics through a clear frontend experience.",
    url: "https://covid-19-tracker-2257e.web.app/",
    tags: ["React", "API", "Data Visualization"],
  },
  {
    title: "Femgram",
    description:
      "Photo gallery experience built with React, Firebase, and motion-enhanced interactions.",
    url: "https://femgram-37983.web.app/",
    tags: ["React", "Firebase", "Framer Motion"],
  },
];

export const services = [
  {
    title: "Full-stack product builds",
    description:
      "Turn unclear product ideas into scoped, working software across frontend, API, data, and deployment layers.",
  },
  {
    title: "AI product integration",
    description:
      "Design practical AI workflows that fit real product behavior, evaluation needs, and user-facing constraints.",
  },
  {
    title: "SDK and developer platforms",
    description:
      "Improve developer experience through clean APIs, stable abstractions, integration examples, and durable tooling.",
  },
  {
    title: "Performance debugging",
    description:
      "Profile regressions, reproduce edge cases, isolate bottlenecks, and validate fixes against real usage paths.",
  },
  {
    title: "Architecture and delivery support",
    description:
      "Translate ambiguity into technical plans, milestones, tradeoffs, and implementation paths that teams can execute.",
  },
  {
    title: "Technical leadership",
    description:
      "Support teams with architecture reviews, delivery planning, code quality standards, and hands-on implementation guidance.",
  },
];

export const systemFlow = [
  "Clarify",
  "Scope",
  "Prototype",
  "Ship",
  "Observe",
  "Strengthen",
];

export const systemAreas = [
  "Client Applications",
  "API Layer",
  "Data Layer",
  "Cloud Infrastructure",
  "AI Services",
  "Developer Tooling",
];

export const writing = [
  "Turning Ambiguous Requirements Into Shipped Software",
  "How I Think About Maintainable Product Systems",
  "AI-Assisted Engineering Without Skipping Judgment",
  "Debugging Performance Regressions Under Real Constraints",
  "Building Developer Tools That Engineers Trust",
  "Lessons From Shipping Product Slices Quickly",
];

export const socialActions = [
  {
    label: "GitHub",
    href: profile.github,
    value: "@femzy123",
    icon: FileCode2,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    value: "/in/obafemiogunmokun",
    icon: Users,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    value: profile.email,
    icon: Mail,
  },
  {
    label: "Resume",
    href: profile.resume,
    value: "Download PDF",
    icon: FileText,
  },
];

export const sectionTitles: Record<SectionId, string> = {
  home: "Home",
  experience: "Experience",
  skills: "Skills",
  projects: "Projects",
  services: "Services",
  systems: "Systems",
  writing: "Writing",
  contact: "Contact",
};

export const sectionIcons: Record<SectionId, LucideIcon> = {
  home: Home,
  experience: BriefcaseBusiness,
  skills: Zap,
  projects: Layers3,
  services: Workflow,
  systems: Network,
  writing: PenLine,
  contact: Mail,
};

export const availability = {
  label: "Available for focused engineering work",
  status: "Building Reliable Systems",
  cta: "Let's build something dependable.",
};
