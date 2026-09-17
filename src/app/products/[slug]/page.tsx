import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { ProductVisual } from "@/components/product-visual";
import { SpecsTable } from "@/components/specs-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categories, getCategory } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) {
    return { title: "System" };
  }
  return {
    title: category.name,
    description: category.lead,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) {
    notFound();
  }

  const visualKind =
    category.slug === "structural" || category.slug === "modular" || category.slug === "scaffolding"
      ? category.slug
      : "scaffolding";

  return (
    <>
      <PageHero kicker={category.kicker} title={category.name} lead={category.lead}>
        <div className="flex flex-wrap gap-2">
          {category.standards.map((standard) => (
            <Badge key={standard} variant="secondary" className="rounded-sm font-mono uppercase">
              {standard}
            </Badge>
          ))}
        </div>
        <p className="mt-6 font-display text-5xl">
          {category.heroStat.value}
          <span className="ml-2 font-mono text-base text-safety">{category.heroStat.unit}</span>
        </p>
        <p className="text-sm text-muted-foreground">{category.heroStat.label}</p>
      </PageHero>
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <ProductVisual kind={visualKind} className="sticky top-24" />
        </div>
        <div className="flex flex-col gap-16 lg:col-span-7">
          {category.products.map((product) => (
            <article key={product.id} id={product.id} className="flex flex-col gap-4">
              <p className="font-mono text-[11px] tracking-[0.18em] text-safety uppercase">
                {product.code}
              </p>
              <h2 className="font-display text-3xl tracking-[0.08em] uppercase">{product.name}</h2>
              <p className="text-muted-foreground">{product.summary}</p>
              <div className="flex flex-wrap gap-2">
                {product.uses.map((use) => (
                  <Badge key={use} variant="outline" className="rounded-sm">
                    {use}
                  </Badge>
                ))}
              </div>
              <SpecsTable rows={product.specs} caption={`${product.name} specifications`} />
            </article>
          ))}
          <Button asChild className="min-h-11 w-fit rounded-sm uppercase">
            <Link href={`/quote?family=${category.slug}`}>Quote this family</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
