import { MapPin } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/lib/portfolio-data";
import { SectionHeader, TagList } from "../portfolio-primitives";

export function ExperienceSection() {
  return (
    <section id="experience" className="portfolio-section">
      <div className="flex flex-col gap-12">
        <SectionHeader
          title="Experience"
          description="A narrative of product engineering, technical leadership, and architectural care across SDKs, AI tooling, education, logistics, and consulting."
        />

        <div className="relative flex flex-col gap-10">
          <div className="absolute bottom-10 left-3 top-3 hidden w-px bg-gradient-to-b from-cyan-300 via-cyan-300/30 to-transparent md:block" />
          {experience.map((entry) => (
            <article
              key={`${entry.company}-${entry.dates}`}
              className="relative grid gap-5 md:grid-cols-[14rem_1fr]"
            >
              <div className="relative pl-9 md:pl-12">
                <span className="absolute left-0 top-2 hidden size-3 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.75)] md:block" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
                  {entry.dates}
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground">
                  {entry.company}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {entry.role}
                </p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin aria-hidden="true" className="size-4" />
                  {entry.location}
                </p>
              </div>

              <Card className="rounded-[1.6rem] border-slate-900/8 bg-white/62 shadow-[0_18px_65px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045]">
                <CardContent className="flex flex-col gap-5 p-6">
                  <p className="text-sm leading-7 text-muted-foreground md:text-base">
                    {entry.summary}
                  </p>
                  <ul className="flex flex-col gap-3 text-sm leading-6 text-muted-foreground">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <TagList tags={entry.tech} />
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_12rem]">
          <div className="rounded-[1.6rem] border border-slate-900/8 bg-white/60 p-6 dark:border-white/10 dark:bg-white/[0.045]">
            <h3 className="text-2xl font-semibold">Engineering Philosophy</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Code is the medium, but experience is the message. I build systems
              that do not just work, but feel dependable to the people who use
              and maintain them.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-[1.6rem] border border-cyan-300/18 bg-cyan-300/8 p-6 text-center">
            <div>
              <p className="text-5xl font-semibold text-cyan-700 dark:text-cyan-100">
                6+
              </p>
              <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
