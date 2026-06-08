import { ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/portfolio-data";
import {
  ExternalAction,
  ProjectVisual,
  SectionHeader,
  TagList,
} from "../portfolio-primitives";

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);
  const secondary = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="portfolio-section">
      <div className="flex flex-col gap-10">
        <SectionHeader
          title="Selected Works"
          description="Selected systems, tools, and product experiences that show how I build across platforms, workflows, AI, education, and developer infrastructure."
        />

        <div className="grid gap-5 xl:grid-cols-3">
          {featured.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden rounded-[1.7rem] border-slate-900/8 bg-white/64 shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_28px_90px_rgba(34,211,238,0.12)] dark:border-white/10 dark:bg-white/[0.045]"
            >
              <CardContent className="flex h-full flex-col gap-5 p-4">
                <ProjectVisual kind={project.visual} />
                <div className="flex flex-1 flex-col gap-4 p-2">
                  <div>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                  <TagList tags={project.tags} />
                  <div className="mt-auto pt-2">
                    {project.url ? (
                      <ExternalAction href={project.url} label="View Project" />
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        Case study available on request
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {secondary.map((project) => (
            <article
              key={project.title}
              className="rounded-[1.4rem] border border-slate-900/8 bg-white/58 p-5 transition hover:-translate-y-1 hover:border-cyan-300/28 hover:bg-white/80 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.06]"
            >
              <div className="flex min-h-44 flex-col gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <TagList tags={project.tags} />
                <div className="mt-auto">
                  {project.url ? (
                    <ExternalAction href={project.url} label="Open" />
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
