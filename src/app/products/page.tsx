import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { ProductVisual } from "@/components/product-visual";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "ESTEIO product families: EN 12810 scaffolding, temporary structures, and ISO modular site buildings from Lisboa.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        kicker="Systems"
        title="Three families from one Sacavém yard."
        lead="Hire, sale, or mixed fleet. Every family ships with a specification table, a load class, and a drawing — not a mood board."
      >
        <Button asChild className="min-h-11 rounded-sm uppercase">
          <Link href="/quote">Specify a package</Link>
        </Button>
      </PageHero>
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
        {categories.map((category) => (
          <article
            key={category.slug}
            className="grid gap-8 border-b border-border pb-16 last:border-b-0 lg:grid-cols-2"
          >
            <ProductVisual kind={category.slug as "scaffolding" | "structural" | "modular"} />
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[11px] tracking-[0.2em] text-safety uppercase">
                {category.kicker}
              </p>
              <h2 className="font-display text-4xl tracking-[0.08em] uppercase">{category.name}</h2>
              <p className="text-muted-foreground">{category.lead}</p>
              <ul className="flex flex-col gap-2 text-sm">
                {category.products.map((product) => (
                  <li key={product.id} className="flex justify-between gap-4 border-b border-border py-2">
                    <span>{product.name}</span>
                    <span className="font-mono text-xs text-galvanized">{product.code}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-2 min-h-11 w-fit rounded-sm uppercase">
                <Link href={`/products/${category.slug}`}>Open specifications</Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
