"use client";

import * as React from "react";
import { MapPin } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { SectionHeader, TagList } from "../portfolio-primitives";

const SCROLL_MARKER_RATIO = 0.42;

type TimelineState = {
  top: number;
  total: number;
  progress: number;
  activeIndex: number;
  ready: boolean;
};

type ExperienceEntry = (typeof experience)[number];

const initialTimelineState: TimelineState = {
  top: 0,
  total: 0,
  progress: 0,
  activeIndex: -1,
  ready: false,
};

export function ExperienceSection() {
  const timelineRef = React.useRef<HTMLDivElement | null>(null);
  const dotRefs = React.useRef<Array<HTMLSpanElement | null>>([]);
  const [timeline, setTimeline] =
    React.useState<TimelineState>(initialTimelineState);

  React.useEffect(() => {
    const timelineElement = timelineRef.current;
    if (!timelineElement) return;

    let frame = 0;
    const scrollContainer = timelineElement.closest(
      "[data-portfolio-scroll-container]",
    ) as HTMLElement | null;

    const updateTimeline = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const dotElements = dotRefs.current.filter(
          (dot): dot is HTMLSpanElement => dot !== null,
        );
        if (dotElements.length === 0) return;

        const timelineRect = timelineElement.getBoundingClientRect();
        const centers = dotElements.map((dot) => {
          const rect = dot.getBoundingClientRect();
          return rect.top + rect.height / 2 - timelineRect.top;
        });

        const first = centers[0];
        const last = centers[centers.length - 1];
        const total = Math.max(last - first, 0);

        const viewportRect = scrollContainer?.getBoundingClientRect();
        const viewportTop = viewportRect?.top ?? 0;
        const viewportHeight = viewportRect?.height ?? window.innerHeight;
        const marker =
          viewportTop + viewportHeight * SCROLL_MARKER_RATIO - timelineRect.top;
        const progress = Math.min(Math.max(marker - first, 0), total);
        const activeIndex = centers.reduce(
          (latest, center, index) => (marker >= center - 1 ? index : latest),
          -1,
        );

        setTimeline((current) => {
          const next = {
            top: first,
            total,
            progress,
            activeIndex,
            ready: true,
          };

          if (
            current.ready === next.ready &&
            Math.abs(current.top - next.top) < 0.5 &&
            Math.abs(current.total - next.total) < 0.5 &&
            Math.abs(current.progress - next.progress) < 0.5 &&
            current.activeIndex === next.activeIndex
          ) {
            return current;
          }

          return next;
        });
      });
    };

    updateTimeline();

    const scrollTarget: HTMLElement | Window = scrollContainer ?? window;
    scrollTarget.addEventListener("scroll", updateTimeline, { passive: true });
    window.addEventListener("resize", updateTimeline);

    const observer = new ResizeObserver(updateTimeline);
    observer.observe(timelineElement);
    if (scrollContainer) observer.observe(scrollContainer);
    dotRefs.current.forEach((dot) => {
      if (dot) observer.observe(dot);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      scrollTarget.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="experience" className="portfolio-section">
      <div className="flex flex-col gap-12">
        <SectionHeader
          title="Experience"
          description="A narrative of product engineering, technical leadership, and architectural care across SDKs, AI tooling, education, logistics, and consulting."
        />

        <div ref={timelineRef} className="relative mx-auto w-full max-w-5xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 top-0 left-[1.125rem] md:left-1/2"
          >
            <span
              data-experience-base-rail
              className={cn(
                "absolute w-px -translate-x-1/2 rounded-full bg-cyan-100/12 transition-opacity duration-200 dark:bg-cyan-100/10",
                timeline.ready ? "opacity-100" : "opacity-0",
              )}
              style={{ top: timeline.top, height: timeline.total }}
            />
            <span
              data-experience-active-rail
              className={cn(
                "absolute w-px -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.62)] transition-opacity duration-200",
                timeline.ready ? "opacity-100" : "opacity-0",
              )}
              style={{ top: timeline.top, height: timeline.progress }}
            />
          </div>

          <div className="flex flex-col gap-14 md:gap-24">
            {experience.map((entry, index) => {
              const isMetaLeft = index % 2 === 0;
              const isActive = index <= timeline.activeIndex;

              return (
                <article
                  key={`${entry.company}-${entry.dates}`}
                  className="relative grid gap-5 pl-12 md:min-h-60 md:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)] md:items-start md:pl-0"
                >
                  <span
                    data-experience-dot
                    ref={(node) => {
                      dotRefs.current[index] = node;
                    }}
                    aria-hidden="true"
                    className={cn(
                      "absolute top-2 left-[1.125rem] z-20 size-3.5 -translate-x-1/2 rounded-full border transition duration-300 md:top-3 md:left-1/2",
                      isActive
                        ? "border-cyan-100 bg-cyan-200 shadow-[0_0_22px_rgba(103,232,249,0.82)]"
                        : "border-white/12 bg-slate-500 shadow-[0_0_0_5px_rgba(148,163,184,0.08)] dark:bg-slate-500",
                    )}
                  />

                  <TimelineMeta
                    entry={entry}
                    align={isMetaLeft ? "right" : "left"}
                    className={cn(
                      "md:row-start-1",
                      isMetaLeft
                        ? "md:col-start-1 md:justify-self-end"
                        : "md:col-start-3 md:justify-self-start",
                    )}
                  />

                  <div aria-hidden="true" className="hidden md:block" />

                  <ExperienceCard
                    entry={entry}
                    className={cn(
                      "md:row-start-1",
                      isMetaLeft ? "md:col-start-3" : "md:col-start-1",
                    )}
                  />
                </article>
              );
            })}
          </div>
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

function TimelineMeta({
  entry,
  align,
  className,
}: {
  entry: ExperienceEntry;
  align: "left" | "right";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col md:max-w-xs",
        align === "right" ? "md:items-end md:text-right" : "md:items-start",
        className,
      )}
    >
      <p className="w-fit rounded-full border border-cyan-300/18 bg-cyan-300/8 px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-100">
        {entry.dates}
      </p>
      <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground">
        {entry.company}
      </h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
        {entry.role}
      </p>
      <p
        className={cn(
          "mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground",
          align === "right" && "md:flex-row-reverse",
        )}
      >
        <MapPin aria-hidden="true" className="size-4" />
        {entry.location}
      </p>
    </div>
  );
}

function ExperienceCard({
  entry,
  className,
}: {
  entry: ExperienceEntry;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "rounded-[1.35rem] border-slate-900/8 bg-white/62 py-0 shadow-[0_18px_65px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045]",
        className,
      )}
    >
      <CardContent className="flex flex-col gap-5 p-5 md:p-6">
        <p className="text-sm leading-7 text-muted-foreground">
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
  );
}
