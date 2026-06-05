"use client";

import Link from "next/link";
import { Check, Copy, Mail } from "lucide-react";
import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { availability, profile, socialActions } from "@/lib/portfolio-data";
import { SectionHeader } from "../portfolio-primitives";

export function ContactSection() {
  const [copied, setCopied] = React.useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id="contact" className="portfolio-section">
      <div className="grid min-h-[62vh] items-center gap-10 xl:grid-cols-[1fr_0.8fr]">
        <div className="flex flex-col gap-9">
          <SectionHeader
            eyebrow={availability.label}
            title="Have an ambitious idea?"
            description="Need someone who can navigate ambiguity, design reliable systems, and turn product ideas into working software?"
          />

          <p className="text-2xl font-semibold text-foreground">
            {availability.cta}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`mailto:${profile.email}`}
              className={buttonVariants({
                className:
                  "h-12 rounded-full bg-cyan-300 px-6 text-slate-950 hover:bg-cyan-200",
              })}
            >
              <Mail data-icon="inline-start" />
              Email Me
            </Link>
            <Button
              type="button"
              variant="outline"
              onClick={copyEmail}
              className="h-12 rounded-full px-5"
            >
              {copied ? (
                <Check data-icon="inline-start" />
              ) : (
                <Copy data-icon="inline-start" />
              )}
              {copied ? "Copied" : "Copy Email"}
            </Button>
            <Link
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                variant: "ghost",
                className: "h-12 rounded-full px-5",
              })}
            >
              Download Resume
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {socialActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-[1.4rem] border border-slate-900/8 bg-white/60 p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 dark:border-white/10 dark:bg-white/[0.045]"
                >
                  <Icon aria-hidden="true" className="size-5 text-cyan-700 dark:text-cyan-100" />
                  <p className="mt-5 font-mono text-xs text-muted-foreground">
                    {action.label}
                  </p>
                  <p className="mt-2 break-words text-sm font-semibold">
                    {action.value}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="relative rounded-[2rem] border border-white/10 bg-slate-950 p-7 text-slate-100 shadow-[0_28px_100px_rgba(0,0,0,0.35)]">
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-cyan-300/12 blur-3xl" />
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">
              System.identity()
            </p>
            <p className="mt-6 text-2xl font-semibold">{profile.name}</p>
            <p className="mt-2 text-slate-400">{profile.title}</p>
            <div className="mt-8 h-28 rounded-2xl bg-[radial-gradient(circle_at_40%_45%,rgba(103,232,249,0.32),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
            <p className="mt-6 text-sm leading-7 text-slate-300">
              Currently open to high-impact systems, AI tooling, SDK work, and
              product engineering collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
