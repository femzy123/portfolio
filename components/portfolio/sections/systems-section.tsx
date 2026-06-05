import { BrainCircuit, CheckCircle2, Network } from "lucide-react";

import { systemAreas, systemFlow } from "@/lib/portfolio-data";
import { SectionHeader } from "../portfolio-primitives";

export function SystemsSection() {
  return (
    <section id="systems" className="portfolio-section">
      <div className="flex flex-col gap-10">
        <SectionHeader
          title="How I Think About Systems"
          description="I enjoy working where product uncertainty meets technical complexity. My process is to reduce ambiguity, ship the smallest useful slice, observe real behavior, and strengthen the system through iteration."
        />

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.8rem] border border-slate-900/8 bg-white/62 p-6 shadow-[0_22px_75px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-white/[0.045]">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-cyan-300/16 text-cyan-700 dark:text-cyan-100">
                <Network aria-hidden="true" className="size-5" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold">Product to Platform Loop</h3>
                <p className="text-sm text-muted-foreground">
                  Spec-driven delivery with room for discovery.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {systemFlow.map((step, index) => (
                <div
                  key={step}
                  className="relative rounded-2xl border border-cyan-300/12 bg-cyan-300/7 p-4"
                >
                  <p className="font-mono text-xs text-cyan-700 dark:text-cyan-200">
                    0{index + 1}
                  </p>
                  <p className="mt-4 text-lg font-semibold">{step}</p>
                  {index < systemFlow.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border-r border-t border-cyan-300/35 md:block"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-slate-900/8 bg-slate-950 p-6 text-slate-100 shadow-[0_22px_85px_rgba(0,0,0,0.28)] dark:border-white/10">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-100">
                <BrainCircuit aria-hidden="true" className="size-5" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold">System Areas</h3>
                <p className="text-sm text-slate-400">Where I connect the layers.</p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3">
              {systemAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3"
                >
                  <CheckCircle2 aria-hidden="true" className="size-4 text-cyan-200" />
                  <span className="text-sm text-slate-200">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-cyan-300/16 bg-cyan-300/8 p-6">
          <p className="max-w-4xl text-lg leading-8 text-foreground">
            I use spec-driven development to turn fuzzy goals into clear system
            contracts, then AI-assisted engineering to move faster without
            skipping review, evaluation, and maintainability.
          </p>
        </div>
      </div>
    </section>
  );
}
