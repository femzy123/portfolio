import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, FileCode2, Terminal, Users } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { availability, profile } from "@/lib/portfolio-data";

type HomeSectionProps = {
  onViewProjects?: () => void;
};

export function HomeSection({ onViewProjects }: HomeSectionProps) {
  return (
    <section id="home" className="portfolio-section">
      <div className="grid min-h-[62vh] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="h-px w-14 bg-cyan-500" />
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">
              {profile.title}
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[0.98] text-foreground md:text-7xl">
              Hi, I&apos;m Obafemi
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              {profile.intro}
            </p>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              {profile.support}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              type="button"
              onClick={onViewProjects}
              className="h-12 rounded-full bg-cyan-300 px-6 text-sm font-semibold text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.45)] transition hover:bg-cyan-200"
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

          <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs text-muted-foreground">
            <span className="rounded-full border border-cyan-400/15 bg-cyan-300/8 px-4 py-2 text-cyan-700 dark:text-cyan-100">
              React
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              TypeScript
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              AI Systems
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem]">
          <div className="absolute -inset-8 rounded-[3rem] bg-cyan-300/12 blur-3xl" />
          <div className="relative rounded-[2.4rem] border border-white/10 bg-slate-950/80 p-3 shadow-[0_35px_95px_rgba(0,0,0,0.35)]">
            <Image
              src="/assets/hero-abstract.png"
              alt="Abstract engineering portrait visual"
              width={1024}
              height={1024}
              priority
              className="aspect-square rounded-[2rem] object-cover"
            />
            <div className="absolute -bottom-5 right-6 rounded-2xl border border-cyan-200/20 bg-slate-950/90 px-5 py-3 font-mono text-xs uppercase tracking-[0.24em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.25)]">
              <span className="mr-2 inline-block size-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
              Status: {availability.status}
            </div>
          </div>

          <div className="absolute -left-4 top-10 hidden rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-cyan-100 shadow-2xl backdrop-blur md:block">
            <Terminal aria-hidden="true" className="mb-2 size-4" />
            <p className="font-mono text-xs">systems.identity()</p>
            <p className="mt-2 text-sm text-slate-300">{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
