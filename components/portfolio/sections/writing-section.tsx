import { FileText } from "lucide-react";

import { writing } from "@/lib/portfolio-data";
import { SectionHeader } from "../portfolio-primitives";

export function WritingSection() {
  return (
    <section id="writing" className="portfolio-section">
      <div className="flex flex-col gap-10">
        <SectionHeader
          title="Writing"
          description="I write to clarify how I think through software problems: architecture decisions, AI-assisted workflows, debugging, delivery tradeoffs, and lessons from building real products."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {writing.map((title, index) => (
            <article
              key={title}
              className="group flex min-h-52 flex-col justify-between rounded-[1.5rem] border border-slate-900/8 bg-white/60 p-6 transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/82 dark:border-white/10 dark:bg-white/[0.045] dark:hover:bg-white/[0.06]"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-cyan-300/14 text-cyan-700 dark:text-cyan-100">
                    <FileText aria-hidden="true" className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground/50">
                    Draft 0{index + 1}
                  </span>
                </div>
                <h3 className="text-balance text-2xl font-semibold leading-tight">
                  {title}
                </h3>
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 opacity-70 transition group-hover:opacity-100 dark:text-cyan-200">
                Thinking in public
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
