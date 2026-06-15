import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, FileCode2, Users } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { availability, profile } from "@/lib/portfolio-data";

type HomeSectionProps = {
  onViewProjects?: () => void;
};

const skillPills = [
  {
    label: "TypeScript",
    className:
      "border-blue-400/25 bg-blue-400/10 text-blue-800 dark:text-blue-100",
  },
  {
    label: "React",
    className:
      "border-cyan-400/25 bg-cyan-300/10 text-cyan-800 dark:text-cyan-100",
  },
  {
    label: "Next.js",
    className:
      "border-slate-500/25 bg-slate-500/10 text-slate-800 dark:text-slate-100",
  },
  {
    label: "Node.js",
    className:
      "border-emerald-400/25 bg-emerald-400/10 text-emerald-800 dark:text-emerald-100",
  },
  {
    label: "AWS",
    className:
      "border-amber-400/30 bg-amber-400/10 text-amber-800 dark:text-amber-100",
  },
  {
    label: "PostgreSQL",
    className: "border-sky-400/25 bg-sky-400/10 text-sky-800 dark:text-sky-100",
  },
  {
    label: "MongoDB",
    className:
      "border-green-400/25 bg-green-400/10 text-green-800 dark:text-green-100",
  },
  {
    label: "OpenAI",
    className:
      "border-violet-400/25 bg-violet-400/10 text-violet-800 dark:text-violet-100",
  },
  {
    label: "SDKs",
    className:
      "border-rose-400/25 bg-rose-400/10 text-rose-800 dark:text-rose-100",
  },
  {
    label: "Architecture",
    className:
      "border-fuchsia-400/25 bg-fuchsia-400/10 text-fuchsia-800 dark:text-fuchsia-100",
  },
  {
    label: "Performance",
    className:
      "border-orange-400/25 bg-orange-400/10 text-orange-800 dark:text-orange-100",
  },
  {
    label: "Developer Experience",
    className:
      "border-teal-400/25 bg-teal-400/10 text-teal-800 dark:text-teal-100",
  },
];

export function HomeSection({ onViewProjects }: HomeSectionProps) {
  return (
    <section id="home" className="portfolio-section lg:h-full">
      <div className="relative flex min-h-[66vh] items-center justify-center overflow-hidden px-1 py-6 text-center lg:h-full lg:min-h-0 lg:py-0">
        <div className="pointer-events-none absolute left-1/2 top-[12%] h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/18 blur-3xl dark:bg-cyan-300/16" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
          <div className="relative mb-7">
            <div className="absolute -inset-5 rounded-full bg-cyan-300/22 blur-2xl dark:bg-cyan-300/18" />
            <div className="absolute -inset-3 rounded-full border border-cyan-300/20 shadow-[0_0_44px_rgba(34,211,238,0.28)]" />
            <div className="relative size-32 overflow-hidden rounded-full border border-cyan-200/30 bg-slate-950 p-1.5 shadow-[0_24px_80px_rgba(15,23,42,0.26),0_0_58px_rgba(34,211,238,0.22)] md:size-40">
              <Image
                src="/my_pic.jpeg"
                alt="Portrait of Obafemi Ogunmokun"
                width={1024}
                height={1024}
                priority
                className="size-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-cyan-200/20 bg-slate-950/92 px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.24)]">
              <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
              {availability.status}
            </div>
          </div>

          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-cyan-500/80" />
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">
              Senior {profile.title}
            </p>
            <span className="h-px w-10 bg-cyan-500/80" />
          </div>

          <div className="flex flex-col items-center gap-4">
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.95] text-foreground md:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-sky-400 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_26px_rgba(34,211,238,0.28)]">
                Obafemi
              </span>
            </h1>
            <p className="max-w-3xl text-balance text-xl font-medium leading-8 text-cyan-800 dark:text-cyan-100 md:text-2xl">
              {profile.intro}
            </p>
            <p className="max-w-2xl text-pretty text-sm leading-7 text-muted-foreground md:text-base">
              {profile.support}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button
              type="button"
              onClick={onViewProjects}
              className="h-12 rounded-full bg-cyan-300 px-7 text-sm font-semibold text-slate-950 shadow-[0_0_38px_rgba(34,211,238,0.48)] transition hover:bg-cyan-200"
            >
              View Projects
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Link
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                variant: "outline",
                className: "h-12 rounded-full px-5",
              })}
            >
              <Download data-icon="inline-start" />
              Download Resume
            </Link>
            <Link
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub profile"
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
                className: "size-12 rounded-full",
              })}
            >
              <FileCode2 aria-hidden="true" />
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn profile"
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
                className: "size-12 rounded-full",
              })}
            >
              <Users aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-6 flex max-w-3xl flex-wrap justify-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.12em]">
            {skillPills.map((skill) => (
              <span
                key={skill.label}
                className={`rounded-full border px-3 py-1.5 ${skill.className}`}
              >
                {skill.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
