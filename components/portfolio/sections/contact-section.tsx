"use client";

import Link from "next/link";
import { Check, Mail, MessageCircle, Send } from "lucide-react";
import * as React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { availability, profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { SectionHeader } from "../portfolio-primitives";

const contactLinks = [
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: LinkedInMark,
    className:
      "border-sky-300/25 bg-sky-300/9 text-sky-100 hover:border-sky-200/55 hover:bg-sky-300/16 hover:shadow-[0_0_28px_rgba(125,211,252,0.14)]",
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: GitHubMark,
    className:
      "border-violet-300/25 bg-violet-300/9 text-violet-100 hover:border-violet-200/55 hover:bg-violet-300/16 hover:shadow-[0_0_28px_rgba(196,181,253,0.14)]",
  },
  {
    label: "Discord",
    href: profile.discord,
    icon: MessageCircle,
    className:
      "border-indigo-300/25 bg-indigo-300/9 text-indigo-100 hover:border-indigo-200/55 hover:bg-indigo-300/16 hover:shadow-[0_0_28px_rgba(165,180,252,0.14)]",
  },
  {
    label: "Telegram",
    href: profile.telegram,
    icon: Send,
    className:
      "border-cyan-300/25 bg-cyan-300/9 text-cyan-100 hover:border-cyan-200/55 hover:bg-cyan-300/16 hover:shadow-[0_0_28px_rgba(103,232,249,0.14)]",
  },
];

function GitHubMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.86 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.27 9.27 0 0 1 12 6.99c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.75-4.57 5.05.36.32.68.95.68 1.92v2.84c0 .27.18.59.69.49A10.12 10.12 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5.38 8.65H2.62V21h2.76V8.65ZM5.6 4.82A1.6 1.6 0 1 0 3.99 6.4 1.58 1.58 0 0 0 5.6 4.82ZM21 13.92c0-3.31-1.77-4.86-4.13-4.86a3.57 3.57 0 0 0-3.22 1.77h-.04V8.65H11V21h2.74v-6.11c0-1.61.31-3.17 2.3-3.17 1.96 0 1.99 1.84 1.99 3.27V21H21v-7.08Z" />
    </svg>
  );
}

export function ContactSection() {
  const [copied, setCopied] = React.useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id="contact" className="portfolio-section">
      <div className="flex min-h-[62vh] items-center justify-center">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-9 text-center">
          <SectionHeader
            eyebrow={availability.label}
            title="Have an ambitious idea?"
            description="Need someone who can navigate ambiguity, design reliable systems, and turn product ideas into working software?"
            align="center"
          />

          <p className="max-w-2xl text-2xl font-semibold text-foreground">
            {availability.cta}
          </p>

          <div className="flex max-w-3xl flex-wrap items-center justify-center gap-3">
            <Tooltip>
              <TooltipTrigger
                type="button"
                onClick={copyEmail}
                className="inline-flex h-12 items-center gap-2.5 rounded-full border border-emerald-300/25 bg-emerald-300/9 px-5 font-mono text-sm font-semibold text-emerald-100 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-200/55 hover:bg-emerald-300/16 hover:shadow-[0_0_28px_rgba(110,231,183,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {copied ? (
                  <Check aria-hidden="true" className="size-4" />
                ) : (
                  <Mail aria-hidden="true" className="size-4" />
                )}
                <span>{profile.email}</span>
              </TooltipTrigger>
              <TooltipContent side="top">
                {copied ? "Copied" : "Copy email"}
              </TooltipContent>
            </Tooltip>

            {contactLinks.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "inline-flex h-12 items-center gap-2.5 rounded-full border px-5 font-mono text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
                    action.className,
                  )}
                >
                  <Icon aria-hidden="true" className="size-4" />
                  <span>{action.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
