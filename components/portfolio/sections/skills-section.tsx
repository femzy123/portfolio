import type { CSSProperties } from "react";
import { Brain } from "lucide-react";

import { skills } from "@/lib/portfolio-data";

const skillTheme: Record<string, string> = {
  JavaScript:
    "border-amber-400/25 bg-amber-400/10 text-amber-800 dark:text-amber-100",
  TypeScript:
    "border-blue-400/25 bg-blue-400/10 text-blue-800 dark:text-blue-100",
  React: "border-cyan-400/25 bg-cyan-300/10 text-cyan-800 dark:text-cyan-100",
  "Next.js":
    "border-slate-500/25 bg-slate-500/10 text-slate-800 dark:text-slate-100",
  TailwindCSS: "border-sky-400/25 bg-sky-400/10 text-sky-800 dark:text-sky-100",
  "Node.js":
    "border-emerald-400/25 bg-emerald-400/10 text-emerald-800 dark:text-emerald-100",
  Express: "border-zinc-500/25 bg-zinc-500/10 text-zinc-800 dark:text-zinc-100",
  "REST APIs":
    "border-teal-400/25 bg-teal-400/10 text-teal-800 dark:text-teal-100",
  GraphQL: "border-pink-400/25 bg-pink-400/10 text-pink-800 dark:text-pink-100",
  Elixir:
    "border-fuchsia-400/25 bg-fuchsia-400/10 text-fuchsia-800 dark:text-fuchsia-100",
  PostgreSQL:
    "border-indigo-400/25 bg-indigo-400/10 text-indigo-800 dark:text-indigo-100",
  MongoDB:
    "border-green-400/25 bg-green-400/10 text-green-800 dark:text-green-100",
  Firebase:
    "border-orange-400/25 bg-orange-400/10 text-orange-800 dark:text-orange-100",
  AWS: "border-yellow-400/30 bg-yellow-400/10 text-yellow-800 dark:text-yellow-100",
  "Google Cloud":
    "border-blue-400/25 bg-blue-400/10 text-blue-800 dark:text-blue-100",
  OpenAI:
    "border-emerald-400/25 bg-emerald-400/10 text-emerald-800 dark:text-emerald-100",
  "Gemini AI":
    "border-violet-400/25 bg-violet-400/10 text-violet-800 dark:text-violet-100",
  Codex: "border-cyan-400/25 bg-cyan-400/10 text-cyan-800 dark:text-cyan-100",
  Claude:
    "border-purple-400/25 bg-purple-400/10 text-purple-800 dark:text-purple-100",
};

const ecosystemCards = [
  {
    title: "Frontend",
    position: "ecosystem-card-front",
    mobileOrder: "order-1",
    delay: "0s",
  },
  {
    title: "Backend",
    position: "ecosystem-card-back",
    mobileOrder: "order-2",
    delay: "0.35s",
  },
  {
    title: "Cloud",
    position: "ecosystem-card-cloud",
    mobileOrder: "order-4",
    delay: "0.7s",
  },
  {
    title: "Databases",
    position: "ecosystem-card-data",
    mobileOrder: "order-3",
    delay: "1.05s",
  },
  {
    title: "AI",
    label: "AI & Intelligence",
    position: "ecosystem-card-ai",
    mobileOrder: "order-5",
    delay: "1.4s",
  },
];

const connectors = [
  { id: "front", x1: 42.2, y1: 36.4, x2: 33.1, y2: 30.8, delay: "0s" },
  { id: "back", x1: 57.8, y1: 36.4, x2: 66.9, y2: 30.8, delay: "0.3s" },
  { id: "cloud", x1: 42.1, y1: 49.1, x2: 31.8, y2: 59.9, delay: "0.6s" },
  { id: "data", x1: 57.9, y1: 49.1, x2: 68.2, y2: 61.9, delay: "0.9s" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="skills-ecosystem-section portfolio-section">
      <div className="skills-ecosystem-stage">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_58%,rgba(14,116,144,0.08),transparent_30%)]" />

        <svg
          className="ecosystem-lines"
          viewBox="0 0 100 100"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          {connectors.map((connector) => (
            <g key={connector.id}>
              <line
                className="ecosystem-line-glow"
                x1={connector.x1}
                y1={connector.y1}
                x2={connector.x2}
                y2={connector.y2}
              />
              <line
                className="ecosystem-line"
                x1={connector.x1}
                y1={connector.y1}
                x2={connector.x2}
                y2={connector.y2}
              />
              <circle className="ecosystem-data-packet" r="0.42" opacity="0">
                <animateMotion
                  dur="2.4s"
                  begin={connector.delay}
                  repeatCount="indefinite"
                  path={`M${connector.x1},${connector.y1} L${connector.x2},${connector.y2}`}
                />
                <animate
                  attributeName="opacity"
                  dur="2.4s"
                  begin={connector.delay}
                  repeatCount="indefinite"
                  values="0;1;1;0"
                  keyTimes="0;0.22;0.72;1"
                />
              </circle>
            </g>
          ))}
        </svg>

        <div className="ecosystem-map">
          <div
            className="ecosystem-brain-icon"
            aria-label="Core technical reasoning"
          >
            <Brain aria-hidden="true" className="size-full" />
          </div>

          {ecosystemCards.map((card) => {
            const category = skills.find((skill) => skill.title === card.title);
            if (!category) return null;

            return (
              <SkillNode
                key={card.title}
                category={category}
                label={card.label}
                position={card.position}
                mobileOrder={card.mobileOrder}
                delay={card.delay}
              />
            );
          })}
        </div>

        <div className="relative z-20 mx-auto mt-auto max-w-3xl pb-4 text-center lg:absolute lg:inset-x-0 lg:bottom-4 lg:pb-0">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Technical Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
            Designing and deploying high-scale distributed systems with a focus
            on type safety, architectural integrity, and intelligent automation.
          </p>
        </div>
      </div>
    </section>
  );
}

type SkillCategory = (typeof skills)[number];

function SkillNode({
  category,
  label,
  position,
  mobileOrder,
  delay,
}: {
  category: SkillCategory;
  label?: string;
  position: string;
  mobileOrder: string;
  delay: string;
}) {
  const Icon = category.icon;

  return (
    <article
      className={`ecosystem-card ${mobileOrder} ${position} lg:absolute`}
      style={
        {
          "--float-delay": delay,
        } as CSSProperties
      }
    >
      <div className="flex items-center gap-2.5">
        <Icon
          aria-hidden="true"
          className="size-4 text-cyan-700 dark:text-cyan-100"
        />
        <h3 className="text-sm font-semibold text-foreground md:text-base">
          {label ?? category.title}
        </h3>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {category.items.slice(0, 4).map((item) => (
          <span
            key={item}
            className={`rounded-full border px-2.5 py-1 font-mono text-[0.62rem] font-semibold tracking-[0.08em] ${
              skillTheme[item] ??
              "border-cyan-400/20 bg-cyan-300/10 text-cyan-800 dark:text-cyan-100"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
