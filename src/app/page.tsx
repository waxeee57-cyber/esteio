import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Container, SectionLabel } from "@/components/page-hero";
import { ProductVisual } from "@/components/product-visual";
import { Button } from "@/components/ui/button";
import { categories, company } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(135deg,transparent_0%,rgb(232_90_23_/_0.08)_100%)]" />
        <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <p className="font-mono text-[11px] tracking-[0.24em] text-safety uppercase">
              {company.kicker}
            </p>
            <span className="draw-x h-0.5 w-20 bg-safety" />
            <h1 className="rise font-display text-6xl leading-[0.88] tracking-[0.03em] uppercase sm:text-8xl">
              Structure
              <br />
              that holds.
            </h1>
            <p className="rise max-w-xl text-lg leading-relaxed text-muted-foreground [animation-delay:100ms]">
              {company.description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="min-h-12 rounded-sm px-6 font-display text-base tracking-[0.16em] uppercase"
              >
                <Link href="/quote">
                  Request quotation
                  <ArrowRightIcon data-icon="inline-end" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="min-h-12 rounded-sm px-6 font-display text-base tracking-[0.16em] uppercase"
              >
                <Link href="/catalogue">Download catalogue</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <ProductVisual kind="scaffolding" className="h-full min-h-[280px]" />
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-plate">
        <Container className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {company.metrics.map((metric) => (
            <div key={metric.label} className="bg-plate px-4 py-8 sm:px-6">
              <p className="font-display text-5xl tracking-tight text-foreground">
                {metric.value}
                <span className="ml-1 font-mono text-sm tracking-normal text-safety">
                  {metric.unit}
                </span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col gap-10">
          <SectionLabel n="01">Three families. One yard.</SectionLabel>
          <h2 className="max-w-3xl font-display text-4xl tracking-[0.06em] uppercase sm:text-5xl">
            Specify the system. We load the truck.
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group steel-panel flex flex-col gap-5 p-6 transition-colors hover:border-safety"
              >
                <p className="font-mono text-[11px] tracking-[0.2em] text-safety uppercase">
                  {category.kicker}
                </p>
                <h3 className="font-display text-3xl tracking-[0.08em] uppercase">
                  {category.name}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {category.lead}
                </p>
                <p className="font-mono text-xs text-galvanized uppercase group-hover:text-safety">
                  {category.heroStat.value} {category.heroStat.unit} · {category.products.length}{" "}
                  systems
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border py-16">
        <Container className="flex flex-col gap-8">
          <SectionLabel n="02">Standards on the drawing, not in the footer</SectionLabel>
          <div className="flex flex-wrap gap-3">
            {company.certifications.map((item) => (
              <span
                key={item.code}
                className="border border-border px-4 py-3 font-mono text-xs tracking-[0.12em] text-concrete uppercase"
              >
                {item.code}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SectionLabel n="03">Projects</SectionLabel>
            <h2 className="font-display text-4xl tracking-[0.06em] uppercase sm:text-5xl">
              Wind, salt, heritage masonry, live halls.
            </h2>
            <p className="max-w-md text-muted-foreground">
              We keep a short applications list — enough for a buyer to recognise their site type,
              not a stock-photo gallery.
            </p>
            <Button asChild variant="outline" className="min-h-11 w-fit rounded-sm uppercase">
              <Link href="/applications">See applications</Link>
            </Button>
          </div>
          <div className="grid gap-4">
            <ProductVisual kind="structural" />
            <ProductVisual kind="modular" />
          </div>
        </Container>
      </section>
    </>
  );
}
