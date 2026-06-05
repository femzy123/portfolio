"use client";

import { Moon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const activeTheme = theme === "dark" ? "dark" : "light";

  function cycleTheme() {
    setTheme(activeTheme === "dark" ? "light" : "dark");
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={cycleTheme}
      className="size-11 rounded-full border border-slate-900/10 bg-slate-950/5 text-slate-700 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition hover:bg-slate-950/8 hover:text-slate-950 focus-visible:ring-cyan-500 dark:border-white/10 dark:bg-white/6 dark:text-cyan-100 dark:shadow-[0_0_28px_rgba(91,223,255,0.12)] dark:hover:bg-cyan-300/15 dark:hover:text-cyan-50 dark:focus-visible:ring-cyan-200"
    >
      <Moon aria-hidden="true" />
    </Button>
  );
}
