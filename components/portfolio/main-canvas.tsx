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
  "projects",
  "services",
  "systems",
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
  const isHome = activeSection === "home";
  const isSkills = activeSection === "skills";
  const isFullHeightSection = isHome || isSkills;

  return (
    <>
      <main
        className={`relative hidden lg:block ${
          isHome
            ? "h-full w-full overflow-visible"
            : "portfolio-canvas overflow-hidden"
        }`}
      >
        <div
          data-portfolio-scroll-container={
            !isHome && !isSkills ? true : undefined
          }
          className={
            isHome
              ? "relative h-full"
              : isSkills
                ? "relative h-full px-2 xl:px-6"
                : "relative h-full overflow-y-auto px-2 py-8 xl:px-6 xl:py-10"
          }
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              className={isFullHeightSection ? "h-full" : undefined}
              initial={false}
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
