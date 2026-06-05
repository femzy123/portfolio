"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import type { SectionId } from "@/lib/portfolio-data";
import { transitionQuotes } from "@/lib/portfolio-data";
import { ContactSection } from "./sections/contact-section";
import { ExperienceSection } from "./sections/experience-section";
import { HomeSection } from "./sections/home-section";
import { ProjectsSection } from "./sections/projects-section";
import { ServicesSection } from "./sections/services-section";
import { SkillsSection } from "./sections/skills-section";
import { SystemsSection } from "./sections/systems-section";
import { WritingSection } from "./sections/writing-section";
import { TransitionOverlay } from "./transition-overlay";

const orderedSections: SectionId[] = [
  "home",
  "experience",
  "skills",
  "projects",
  "services",
  "systems",
  "writing",
  "contact",
];

type MainCanvasProps = {
  activeSection: SectionId;
  pendingSection: SectionId | null;
  quote: string;
  isTransitioning: boolean;
  onSectionChange: (section: SectionId) => void;
};

function SectionContent({
  section,
  onSectionChange,
}: {
  section: SectionId;
  onSectionChange: (section: SectionId) => void;
}) {
  switch (section) {
    case "home":
      return <HomeSection onViewProjects={() => onSectionChange("projects")} />;
    case "experience":
      return <ExperienceSection />;
    case "skills":
      return <SkillsSection />;
    case "projects":
      return <ProjectsSection />;
    case "services":
      return <ServicesSection />;
    case "systems":
      return <SystemsSection />;
    case "writing":
      return <WritingSection />;
    case "contact":
      return <ContactSection />;
    default:
      return <HomeSection onViewProjects={() => onSectionChange("projects")} />;
  }
}

export function MainCanvas({
  activeSection,
  pendingSection,
  quote,
  isTransitioning,
  onSectionChange,
}: MainCanvasProps) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <main className="portfolio-canvas relative hidden overflow-hidden lg:block">
        <div className="relative h-full overflow-y-auto px-2 py-8 xl:px-6 xl:py-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={reduceMotion ? false : { opacity: 0, scale: 1.015 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={
                reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985 }
              }
              transition={{
                duration: reduceMotion ? 0.05 : 0.28,
                ease: "easeOut",
              }}
            >
              <SectionContent
                section={activeSection}
                onSectionChange={onSectionChange}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {isTransitioning && pendingSection ? (
            <TransitionOverlay section={pendingSection} quote={quote} />
          ) : null}
        </AnimatePresence>
      </main>

      <main className="flex flex-col gap-10 pb-24 lg:hidden">
        {orderedSections.map((section) => (
          <div key={section} className="px-1 py-8">
            <SectionContent
              section={section}
              onSectionChange={onSectionChange}
            />
          </div>
        ))}
      </main>
    </>
  );
}

export function getRandomQuote() {
  return transitionQuotes[Math.floor(Math.random() * transitionQuotes.length)];
}
