"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { SectionId } from "@/lib/portfolio-data";
import { navItems, profile } from "@/lib/portfolio-data";
import { FlowFieldBackground } from "./flow-field-background";
import { FloatingNav, MobileNav } from "./floating-nav";
import { getRandomQuote, MainCanvas } from "./main-canvas";

const TRANSITION_DWELL_MS = 3000;
const TRANSITION_EXIT_MS = 3300;

function retainSectionHash(section: SectionId) {
  const url = `${window.location.pathname}${window.location.search}#${section}`;
  window.history.replaceState(null, "", url);
}

export function PortfolioShell() {
  const [activeSection, setActiveSection] = React.useState<SectionId>("home");
  const [pendingSection, setPendingSection] = React.useState<SectionId | null>(
    null,
  );
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [quote, setQuote] = React.useState(getRandomQuote);

  React.useEffect(() => {
    const applyHashSection = () => {
      const hash = window.location.hash.replace("#", "");
      const target = navItems.find((item) => item.id === hash)?.id;

      if (target) {
        setActiveSection(target);
      } else if (hash) {
        setActiveSection("home");
        retainSectionHash("home");
      }
    };

    applyHashSection();
    window.addEventListener("hashchange", applyHashSection);

    return () => window.removeEventListener("hashchange", applyHashSection);
  }, []);

  React.useEffect(() => {
    const mobile = window.matchMedia("(max-width: 1023px)");
    if (!mobile.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        const section = visible?.target.id as SectionId | undefined;

        if (section && navItems.some((item) => item.id === section)) {
          setActiveSection(section);
          retainSectionHash(section);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.18, 0.35, 0.55] },
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleSectionChange = React.useCallback(
    (section: SectionId) => {
      const mobile = window.matchMedia("(max-width: 1023px)").matches;

      if (mobile) {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(section);
        retainSectionHash(section);
        return;
      }

      if (section === activeSection || isTransitioning) return;

      setPendingSection(section);
      setQuote(getRandomQuote());
      setIsTransitioning(true);
      retainSectionHash(section);

      window.setTimeout(() => {
        setActiveSection(section);
      }, TRANSITION_DWELL_MS);

      window.setTimeout(() => {
        setPendingSection(null);
        setIsTransitioning(false);
      }, TRANSITION_EXIT_MS);
    },
    [activeSection, isTransitioning],
  );

  const showChrome = activeSection !== "home";

  return (
    <div
      className={`portfolio-stage relative isolate min-h-dvh overflow-x-hidden px-4 py-5 text-foreground md:px-8 lg:flex lg:h-dvh lg:flex-col lg:px-[clamp(2rem,7vw,7rem)] ${
        showChrome ? "lg:pb-5 lg:pt-4" : "lg:overflow-hidden lg:py-0"
      }`}
    >
      <FlowFieldBackground activeSection={activeSection} />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_75%_8%,rgba(103,232,249,0.1),transparent_29%),radial-gradient(circle_at_8%_82%,rgba(29,78,216,0.1),transparent_32%)]" />

      {showChrome ? (
        <header className="relative z-30 mx-auto hidden w-full max-w-7xl items-center justify-between py-1 lg:flex lg:shrink-0">
          <Link
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              handleSectionChange("home");
            }}
            className="font-mono text-sm font-semibold tracking-[0.08em] text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 dark:text-cyan-100"
          >
            {profile.brand}
          </Link>

          <Button
            type="button"
            onClick={() => handleSectionChange("contact")}
            className="hidden h-10 cursor-pointer rounded-full bg-cyan-300 px-5 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.35)] hover:bg-cyan-200 sm:inline-flex"
          >
            Hire Me
          </Button>
        </header>
      ) : null}

      <FloatingNav
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <div
        className={`mx-auto w-full max-w-7xl flex-1 lg:flex lg:min-h-0 lg:items-center lg:justify-center ${
          showChrome ? "lg:mt-3" : "lg:mt-0"
        }`}
      >
        <MainCanvas
          activeSection={activeSection}
          pendingSection={pendingSection}
          quote={quote}
          isTransitioning={isTransitioning}
          onSectionChange={handleSectionChange}
        />
      </div>

      {showChrome ? (
        <footer className="pointer-events-none fixed bottom-4 right-[clamp(2rem,7vw,7rem)] z-20 hidden font-mono text-xs text-muted-foreground/80 lg:block">
          <p>&copy; {profile.name}</p>
        </footer>
      ) : null}

      <MobileNav activeSection={activeSection} />
    </div>
  );
}
