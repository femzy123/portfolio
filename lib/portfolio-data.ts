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
  { id: "skills", label: "Skills", icon: Zap },
  { id: "projects", label: "Projects", icon: Layers3 },
  { id: "services", label: "Services", icon: Workflow },
  { id: "systems", label: "Systems", icon: Network },
  { id: "writing", label: "Writing", icon: PenLine },
  { id: "contact", label: "Contact", icon: Mail },
];

export const profile = {
  name: "Obafemi Ogunmokun",
  brand: "Obafemi.dev",
  title: "Software Engineer",
  location: "Lagos, Nigeria",
  email: "obafemiogunmokun@gmail.com",
  linkedin: "https://www.linkedin.com/in/obafemiogunmokun/",
  linkedinLabel: "linkedin.com/in/obafemiogunmokun",
  github: "https://github.com/femzy123",
  githubLabel: "github.com/femzy123",
  resume: "/Obafemi-Ogunmokun-Resume.pdf",
  summary:
    "Software engineer with 6+ years of experience building full-stack products and developer platforms across finance, education, project management, logistics, AI tooling, and consulting.",
  intro:
    "I build reliable full-stack products, developer platforms, and AI-powered tools from unclear ideas, evolving requirements, and real-world constraints.",
  support:
    "6+ years across SDKs, SaaS platforms, cloud infrastructure, APIs, AI integrations, and product engineering.",
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
      "Contributing to SDK engine, tooling, and core product workflows for complex form and document technology.",
    bullets: [
      "Improved SDK user experience by shipping feature enhancements and reducing friction in core workflows.",
      "Diagnosed and fixed performance issues by profiling bottlenecks, reproducing edge cases, and validating fixes.",
      "Contributed to SDK engine and tooling with a focus on clean abstractions, stability, and maintainability.",
      "Collaborated with product and engineering stakeholders to turn ambiguous requirements into scoped deliverables.",
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
      "Led engineering for SprintZero in a fast-changing product environment, taking the product live temporarily before funding ended.",
    bullets: [
      "Owned architecture direction, execution planning, and product delivery tradeoffs.",
      "Broke unclear goals into milestones and shipped smallest testable slices to validate assumptions early.",
      "Built maintainable patterns and clear interfaces so the product could evolve quickly.",
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
      "Contributed to the core learning platform with focus on architecture, maintainability, and performance.",
    bullets: [
      "Improved developer velocity by simplifying high-friction areas and strengthening documentation.",
      "Partnered with stakeholders to balance engineering rigor with product delivery timelines.",
    ],
  },
  {
    company: "Lopworks Limited",
    role: "Software Developer",
    location: "Nigeria",
    dates: "Sept 2018 to Feb 2020",
    tech: ["JavaScript", "React", "Vue", "Node.js", "Elixir", "REST", "PHP", "Laravel"],
    summary:
      "Built scalable client applications across frontend, backend, and API integration work.",
    bullets: [
      "Improved API communication using IBM API Connect and Tyk.",
      "Led planning, implementation, and technical training for client-facing solutions.",
    ],
  },
  {
    company: "Enovait",
    role: "Web Developer",
    location: "Lagos, Nigeria",
    dates: "Jun 2017 to Apr 2018",
    tech: ["JavaScript", "PHP", "Laravel", "HTML/CSS", "jQuery"],
    summary:
      "Built dynamic web experiences and custom PC applications focused on usability and stability.",
    bullets: [
      "Supported software setup and reliable system operations for client environments.",
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
      "Developer-friendly SDK for adding Pay with USDC to products. Non-custodial payment flow where funds go directly to merchant wallets.",
    tags: ["Next.js", "TypeScript", "Node.js", "AWS", "PostgreSQL", "Web3", "SDK"],
    visual: "payments",
  },
  {
    title: "Joyfill",
    featured: true,
    description:
      "Complex data collection form and document technology. Work includes SDK improvements, performance debugging, and core tooling contributions.",
    url: "https://joyfill.io/",
    tags: ["React", "TypeScript", "SDK", "Node.js", "AWS", "MongoDB"],
    visual: "forms",
  },
  {
    title: "NativShark",
    featured: true,
    description:
      "E-learning platform that helps people learn languages through structured content and platform-driven learning experiences.",
    url: "https://www.nativshark.com/",
    tags: ["Next.js", "React", "Node.js", "Elixir", "AWS", "GraphQL"],
    visual: "learning",
  },
  {
    title: "MyQuizzy",
    description: "AI-powered quiz app that turns notes into adaptive practice questions.",
    url: "https://myquizzy.vercel.app/",
    tags: ["Next.js", "AI", "Education", "TypeScript"],
  },
  {
    title: "InterviewSim",
    description:
      "Mock interview practice app for preparing with role-specific interview questions.",
    url: "https://interviewsim.vercel.app/",
    tags: ["Next.js", "AI", "Interview Prep", "TypeScript"],
  },
  {
    title: "Splendid Packaging",
    description: "Logistics management application.",
    url: "https://app.splendidpackaging.com",
    tags: ["React", "Logistics", "Product Engineering"],
  },
  {
    title: "AI Image Generator",
    description: "Image generation app built with Next.js and OpenAI API.",
    url: "https://fem-ai-image-gen.vercel.app/",
    tags: ["Next.js", "OpenAI", "AI"],
  },
  {
    title: "CryptoWorld",
    description: "Crypto information app built with React, Ant Design, and Redux Toolkit.",
    url: "https://femzy-cryptoworld.netlify.app/",
    tags: ["React", "Redux Toolkit", "Ant Design"],
  },
  {
    title: "Covid Tracker",
    description: "COVID-19 tracking app that displays global COVID-related data.",
    url: "https://covid-19-tracker-2257e.web.app/",
    tags: ["React", "API", "Data Visualization"],
  },
  {
    title: "Femgram",
    description: "Simple photo gallery built using React, Firebase, and Framer Motion.",
    url: "https://femgram-37983.web.app/",
    tags: ["React", "Firebase", "Framer Motion"],
  },
];

export const services = [
  {
    title: "Full-stack product builds",
    description:
      "Turn unclear product ideas into scoped, working software with reliable frontend, API, and data foundations.",
  },
  {
    title: "AI product integration",
    description:
      "Design practical AI features, workflows, and developer tools using OpenAI, Gemini, Codex, and evaluation loops.",
  },
  {
    title: "SDK and developer platforms",
    description:
      "Improve developer experience through clean APIs, stable abstractions, integration examples, and durable tooling.",
  },
  {
    title: "Performance debugging",
    description:
      "Profile regressions, reproduce edge cases, isolate bottlenecks, and validate fixes in production-like scenarios.",
  },
  {
    title: "Architecture and delivery support",
    description:
      "Break ambiguous goals into milestones, define tradeoffs, and ship the smallest useful slice without losing maintainability.",
  },
  {
    title: "Technical leadership",
    description:
      "Support teams with planning, implementation standards, technical training, and hands-on delivery.",
  },
];

export const systemFlow = ["Problem", "Scope", "Prototype", "Ship", "Observe", "Improve"];

export const systemAreas = [
  "Client Applications",
  "API Layer",
  "Data Layer",
  "Cloud Infrastructure",
  "AI Services",
  "Developer Tooling",
];

export const writing = [
  "Spec-Driven Development",
  "AI-Assisted Software Engineering",
  "Building Reliable Developer Tools",
  "Lessons From Shipping 5 Apps in 5 Days",
  "Debugging Performance Regressions",
  "Building Products From Ambiguous Requirements",
];

export const socialActions = [
  { label: "GitHub", href: profile.github, value: "@femzy123", icon: FileCode2 },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    value: "/in/obafemiogunmokun",
    icon: Users,
  },
  { label: "Email", href: `mailto:${profile.email}`, value: profile.email, icon: Mail },
  { label: "Resume", href: profile.resume, value: "Download PDF", icon: FileText },
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

export const sectionIcons: Record<SectionId, LucideIcon> = Object.fromEntries(
  navItems.map((item) => [item.id, item.icon])
) as Record<SectionId, LucideIcon>;

export const availability = {
  label: "Available for work",
  status: "Scaling Systems",
  cta: "Let's build something meaningful.",
};
