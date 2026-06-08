import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { TooltipProvider } from "@/components/ui/tooltip";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Obafemi Ogunmokun | Software Engineer",
  description:
    "Premium portfolio for Obafemi Ogunmokun, a software engineer building full-stack products, SDKs, AI tools, and developer platforms.",
  metadataBase: new URL("https://obafemi.dev"),
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Obafemi Ogunmokun | Senior Software Engineer",
    description:
      "Reliable systems, SDKs, AI products, cloud infrastructure, and product engineering.",
    url: "https://obafemi-portfolio.vercel.app/",
    siteName: "Obafemi.dev",
    images: "https://asset.cloudinary.com/femzy123/5fa2cf320b76f4182a7cd419057b43d5",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obafemi Ogunmokun | Senior Software Engineer",
    description:
      "Reliable systems, SDKs, AI products, cloud infrastructure, and product engineering.",
    images: "https://asset.cloudinary.com/femzy123/5fa2cf320b76f4182a7cd419057b43d5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
