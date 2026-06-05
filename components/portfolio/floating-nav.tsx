"use client";

import type { SectionId } from "@/lib/portfolio-data";
import { navItems } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type FloatingNavProps = {
  activeSection: SectionId;
  onSectionChange: (section: SectionId) => void;
};

export function FloatingNav({
  activeSection,
  onSectionChange,
}: FloatingNavProps) {
  return (
    <nav
      aria-label="Portfolio sections"
      className="fixed left-[clamp(1rem,4vw,5rem)] top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <div className="flex flex-col items-center gap-3 rounded-full border border-white/10 bg-slate-700/45 p-3 text-slate-300 shadow-[0_28px_90px_rgba(3,10,21,0.58),0_12px_34px_rgba(15,23,42,0.28),0_0_42px_rgba(103,232,249,0.13)] backdrop-blur-xl dark:bg-slate-700/45">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === activeSection;

          return (
            <Tooltip key={item.id}>
              <TooltipTrigger
                type="button"
                aria-label={`Show ${item.label}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "flex size-11 items-center justify-center rounded-full border border-transparent text-slate-300 transition duration-200 hover:border-cyan-200/20 hover:bg-white/8 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                  isActive &&
                    "border-cyan-200/40 bg-cyan-200 text-slate-950 shadow-[0_0_24px_rgba(103,232,249,0.75)] hover:bg-cyan-200 hover:text-slate-950",
                )}
              >
                <Icon aria-hidden="true" className="size-4" />
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={12}>
                {item.label}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </nav>
  );
}

export function MobileNav({ activeSection }: { activeSection: SectionId }) {
  return (
    <nav
      aria-label="Portfolio sections"
      className="fixed inset-x-3 bottom-3 z-50 rounded-full border border-slate-900/10 bg-white/86 p-2 shadow-[0_18px_55px_rgba(15,23,42,0.22)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/86 lg:hidden"
    >
      <div className="flex items-center justify-between gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === activeSection;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-label={`Go to ${item.label}`}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex size-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-950/6 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:text-slate-400 dark:hover:bg-white/8 dark:hover:text-cyan-100",
                isActive &&
                  "bg-cyan-300 text-slate-950 shadow-[0_0_22px_rgba(103,232,249,0.55)]",
              )}
            >
              <Icon aria-hidden="true" className="size-4" />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
