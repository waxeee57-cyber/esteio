import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { company } from "@/lib/content";
import { organizationJsonLd } from "@/lib/schema";

import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-src",
});

const sans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-src",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-mono-src",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "ESTEIO — Scaffolding, structural systems, modular buildings | Lisboa",
    template: "%s | ESTEIO",
  },
  description: company.description,
  keywords: [
    "scaffolding Portugal",
    "andaimes Lisboa",
    "modular buildings",
    "shoring",
    "EN 12810",
    "site cabins hire",
  ],
  authors: [{ name: company.legalName }],
  openGraph: {
    type: "website",
    locale: "en_PT",
    url: company.url,
    siteName: company.name,
    title: "ESTEIO — Structure that holds.",
    description: company.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "ESTEIO — Structure that holds.",
    description: company.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = organizationJsonLd();

  return (
    <html
      lang="en"
      className={`dark ${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col pb-20">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-safety focus:px-4 focus:py-2 focus:text-steel"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="flex flex-1 flex-col">
            {children}
          </main>
          <SiteFooter />
          <WhatsAppCta />
          <Toaster />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
