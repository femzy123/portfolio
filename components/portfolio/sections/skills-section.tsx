import { BrainCircuit } from "lucide-react";

import { skills } from "@/lib/portfolio-data";
import { SectionHeader, TagList } from "../portfolio-primitives";

export function SkillsSection() {
  return (
    <section id="skills" className="portfolio-section">
      <div className="flex min-h-[62vh] flex-col gap-10">
        <SectionHeader
          title="Technical Ecosystem"
          description="Designing and deploying reliable products with type safety, architectural integrity, AI fluency, and practical delivery instincts."
          align="center"
        />

        <div className="relative mx-auto grid w-full max-w-5xl gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.slice(0, 3).map((category, index) => {
            const Icon = category.icon;
            return (
              <article
                key={category.title}
                className="relative rounded-[1.6rem] border border-slate-900/8 bg-white/68 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/28 hover:shadow-[0_22px_70px_rgba(34,211,238,0.12)] dark:border-white/10 dark:bg-white/[0.045]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-cyan-300/14 text-cyan-700 dark:text-cyan-100">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="mt-5">
                  <TagList tags={category.items} />
                </div>
                <span
                  className="absolute right-4 top-4 font-mono text-xs text-muted-foreground/40"
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>
              </article>
            );
          })}

          <SkillCard categoryIndex={3} />

          <div className="relative flex min-h-44 items-center justify-center overflow-hidden rounded-[1.6rem] border border-cyan-300/14 bg-cyan-300/7">
            <span className="skill-line left-0 top-1/2 -translate-y-1/2" />
            <span className="skill-line right-0 top-1/2 -translate-y-1/2 rotate-180" />
            <div className="systems-core">
              <BrainCircuit aria-hidden="true" className="size-8" />
              <span>Systems</span>
              <small>Thinking</small>
            </div>
          </div>

          <SkillCard categoryIndex={4} />
          <SkillCard categoryIndex={5} className="xl:col-start-2" />
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  categoryIndex,
  className,
}: {
  categoryIndex: number;
  className?: string;
}) {
  const category = skills[categoryIndex];
  const Icon = category.icon;

  return (
    <article
      className={[
        "relative rounded-[1.6rem] border border-slate-900/8 bg-white/68 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/28 hover:shadow-[0_22px_70px_rgba(34,211,238,0.12)] dark:border-white/10 dark:bg-white/[0.045]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-2xl bg-cyan-300/14 text-cyan-700 dark:text-cyan-100">
          <Icon aria-hidden="true" className="size-5" />
        </span>
        <h3 className="text-xl font-semibold">{category.title}</h3>
      </div>
      <div className="mt-5">
        <TagList tags={category.items} />
      </div>
      <span
        className="absolute right-4 top-4 font-mono text-xs text-muted-foreground/40"
        aria-hidden="true"
      >
        0{categoryIndex + 1}
      </span>
    </article>
  );
}
