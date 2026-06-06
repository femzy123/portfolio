"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { SectionId } from "@/lib/portfolio-data";
import { navItems, profile } from "@/lib/portfolio-data";
import { FloatingNav, MobileNav } from "./floating-nav";
import { getRandomQuote, MainCanvas } from "./main-canvas";

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

        if (visible?.target.id) {
          setActiveSection(visible.target.id as SectionId);
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
        return;
      }

      if (section === activeSection || isTransitioning) return;

      setPendingSection(section);
      setQuote(getRandomQuote());
      setIsTransitioning(true);

      window.setTimeout(() => {
        setActiveSection(section);
      }, 260);

      window.setTimeout(() => {
        setPendingSection(null);
        setIsTransitioning(false);
      }, 680);
    },
    [activeSection, isTransitioning],
  );

  const showChrome = activeSection !== "home";

  return (
    <div
      className={`portfolio-stage min-h-dvh overflow-x-hidden px-4 py-5 text-foreground md:px-8 lg:flex lg:h-dvh lg:flex-col lg:px-[clamp(2rem,7vw,7rem)] ${
        showChrome ? "lg:pb-5 lg:pt-4" : "lg:overflow-hidden lg:py-0"
      }`}
    >
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_75%_8%,rgba(103,232,249,0.16),transparent_29%),radial-gradient(circle_at_8%_82%,rgba(29,78,216,0.14),transparent_32%)]" />

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
            className="hidden h-10 rounded-full bg-cyan-300 px-5 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.35)] hover:bg-cyan-200 sm:inline-flex"
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
          <p>©️{profile.name}</p>
        </footer>
      ) : null}

      <MobileNav activeSection={activeSection} />
    </div>
  );
}
