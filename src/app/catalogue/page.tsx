import type { Metadata } from "next";
import Link from "next/link";
import { DownloadIcon } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "Download the 24-page ESTEIO systems catalogue — scaffolding, structural, modular — or browse the printable HTML export.",
};

const covers = [
  { n: "01", title: "Cover", note: "Steel plate + safety rail" },
  { n: "04", title: "Standards", note: "EN 12810 / 1090 / 1065" },
  { n: "08", title: "FX-250", note: "Façade frames" },
  { n: "14", title: "HT-200", note: "Heavy towers" },
  { n: "18", title: "SO-20", note: "Site offices" },
  { n: "24", title: "Desk", note: "Sacavém contacts" },
];

export default function CataloguePage() {
  return (
    <>
      <PageHero
        kicker="Catalogue 2026"
        title="Twenty-four pages. No stock photography."
        lead="A specification booklet generated in this repository: cover system, load tables, and the Sacavém desk. Print it or send the PDF with the quotation."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild className="min-h-11 rounded-sm uppercase">
            <a href="/catalogue/esteio-systems-catalogue-2026.pdf" download>
              <DownloadIcon data-icon="inline-start" />
              Download PDF sample
            </a>
          </Button>
          <Button asChild variant="outline" className="min-h-11 rounded-sm uppercase">
            <Link href="/catalogue/print">Open printable HTML</Link>
          </Button>
        </div>
      </PageHero>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto h-[420px] max-w-3xl">
          {covers.map((cover, index) => (
            <article
              key={cover.n}
              className="steel-panel absolute inset-x-0 top-0 flex h-[360px] flex-col justify-between p-6"
              style={{
                transform: `translate(${index * 18}px, ${index * 12}px)`,
                zIndex: covers.length - index,
                width: `calc(100% - ${covers.length * 18}px)`,
              }}
            >
              <div className="flex items-start justify-between">
                <p className="font-display text-6xl tracking-tight text-safety">{cover.n}</p>
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase">ESTEIO · 2026</p>
              </div>
              <div>
                <h2 className="font-display text-4xl uppercase">{cover.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{cover.note}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-28 grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <div key={category.slug} className="border border-border p-5">
              <p className="font-mono text-[11px] text-safety uppercase">{category.kicker}</p>
              <p className="mt-2 font-display text-2xl uppercase">{category.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {category.products.length} systems in the booklet
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
