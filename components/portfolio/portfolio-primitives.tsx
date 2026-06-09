import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeader({
  title,
  eyebrow,
  description,
  align = "left",
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <header
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center"
      )}
    >
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-200">
          {eyebrow}
        </p>
      ) : null}
      <div className="flex flex-col gap-3">
        <h2 className="text-balance text-4xl font-semibold leading-[1.05] text-foreground md:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant="secondary"
          className="rounded-full border border-cyan-400/15 bg-cyan-300/8 px-3 py-1 font-mono text-[0.68rem] font-medium text-cyan-800 dark:bg-cyan-200/8 dark:text-cyan-100"
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}

export function ExternalAction({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:text-cyan-100 dark:hover:text-cyan-200",
        className
      )}
    >
      {label}
      <ArrowUpRight aria-hidden="true" className="size-4" />
    </Link>
  );
}

export function IconPanel({
  icon: Icon,
  title,
  children,
  className,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-[1.6rem] border border-slate-900/8 bg-white/62 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/4.5 dark:shadow-[0_18px_70px_rgba(0,0,0,0.18)]",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-2xl bg-cyan-300/15 text-cyan-700 dark:text-cyan-100">
          <Icon aria-hidden="true" className="size-5" />
        </span>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      {children}
    </article>
  );
}

export function ProjectVisual({
  image,
  kind,
  title,
}: {
  image?: string;
  kind?: string;
  title?: string;
}) {
  if (image) {
    return (
      <div className="relative min-h-48 overflow-hidden rounded-[1.4rem] border border-cyan-300/10 bg-slate-950 shadow-inner">
        <Image
          src={image}
          alt={title ? `${title} project preview` : "Project preview"}
          fill
          sizes="(min-width: 1280px) 24rem, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.035]"
          loading="lazy"
          unoptimized
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,13,0.04),rgba(2,8,13,0.34)),radial-gradient(circle_at_28%_0%,rgba(34,211,238,0.16),transparent_34%)]" />
        {kind ? (
          <span className="absolute bottom-4 left-4 rounded-full border border-cyan-200/20 bg-slate-950/68 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-cyan-100/80 backdrop-blur-md">
            {kind}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div className="relative min-h-48 overflow-hidden rounded-[1.4rem] border border-cyan-300/10 bg-slate-950 shadow-inner">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(34,211,238,0.24),transparent_32%),linear-gradient(135deg,rgba(8,13,24,0.96),rgba(15,23,42,0.88))]" />
      <div className="absolute inset-x-8 top-8 h-px bg-cyan-200/30" />
      <div className="absolute inset-x-10 top-12 grid grid-cols-5 gap-2">
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className={cn(
              "h-1 rounded-full bg-cyan-200/18",
              index % 4 === 0 && "bg-cyan-200/45",
              index % 7 === 0 && "col-span-2"
            )}
          />
        ))}
      </div>
      <div className="absolute bottom-8 left-8 right-8">
        <div className="mb-4 flex items-end gap-2">
          {Array.from({ length: 9 }).map((_, index) => (
            <span
              key={index}
              className="w-full rounded-t bg-cyan-300/45 shadow-[0_0_16px_rgba(103,232,249,0.25)]"
              style={{ height: `${24 + ((index * 13) % 74)}px` }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-cyan-100/70">
            {kind ?? "system"}
          </span>
          <span className="h-2 w-24 rounded-full bg-cyan-200/40" />
        </div>
      </div>
    </div>
  );
}
