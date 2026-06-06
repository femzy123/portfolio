"use client";

import { motion } from "framer-motion";

import type { SectionId } from "@/lib/portfolio-data";
import { sectionIcons, sectionTitles } from "@/lib/portfolio-data";

type TransitionOverlayProps = {
  section: SectionId;
  quote: string;
};

export function TransitionOverlay({ section, quote }: TransitionOverlayProps) {
  const Icon = sectionIcons[section];

  return (
    <motion.div
      key="transition-overlay"
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.99 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute inset-0 z-20 flex items-center justify-center backdrop-blur-xl"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-5 text-center">
        <motion.div
          animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
          className="flex size-16 items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-200/12 text-cyan-100 shadow-[0_0_42px_rgba(103,232,249,0.32)]"
        >
          <Icon aria-hidden="true" className="size-6" />
        </motion.div>
        <div className="flex flex-col gap-2">
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-cyan-200">
            Loading {sectionTitles[section]}...
          </p>
          <p className="max-w-sm text-sm text-muted-foreground">{quote}</p>
        </div>
      </div>
    </motion.div>
  );
}
