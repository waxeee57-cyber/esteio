import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SiteMapLoader } from "@/components/site-map-loader";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Esteio Sistemas Industriais, Lda. — Sacavém yard since 1998. Scaffolding, structures, and modular buildings for Portuguese worksites.",
};

const timeline = [
  {
    year: "1998",
    title: "Yard opens in Sacavém",
    text: "Tube-and-coupler hire for Lisboa housing. The name ESTEIO is taken from the props that held the first slab.",
  },
  {
    year: "2008",
    title: "Ring-lock and EN 1090",
    text: "Factory CE mark for fabricated steel. Fleet shifts from painted tube to HDG modular.",
  },
  {
    year: "2016",
    title: "Modular line",
    text: "ISO offices and welfare added so the same truck can leave with access and accommodation.",
  },
  {
    year: "2024",
    title: "Iberian hire desk",
    text: "Sines, Setúbal, and Alentejo energy work; Spanish border jobs on the same drawing office.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Company"
        title="A yard, a drawing office, a night phone."
        lead={`${company.legalName} has specified access and temporary works from Sacavém since ${company.founded}. We still answer the yard gate on the same number as WhatsApp.`}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <ol className="flex flex-col gap-8">
          {timeline.map((item) => (
            <li key={item.year} className="safety-rail pl-5">
              <p className="font-mono text-xs text-safety">{item.year}</p>
              <h2 className="mt-1 font-display text-2xl uppercase">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
        <div className="flex flex-col gap-4">
          <div className="border border-border">
            <SiteMapLoader />
          </div>
          <p className="text-sm text-muted-foreground">
            {company.address.street}, {company.address.postalCode} {company.address.locality}
            <br />
            {company.hours}
            <br />
            {company.yardNote}
          </p>
          <Button asChild className="min-h-11 w-fit rounded-sm uppercase">
            <Link href="/quote">Visit or send a brief</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
