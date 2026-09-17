import type { Metadata } from "next";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { categories, company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Catalogue print",
  description: "Printable HTML export of the ESTEIO systems catalogue sample.",
};

export default function CataloguePrintPage() {
  return (
    <div className="bg-steel px-4 py-10 print:bg-white print:text-black">
      <div className="mx-auto flex max-w-3xl flex-col gap-12">
        <header className="flex flex-col gap-6 border-b border-border pb-10">
          <Logo />
          <p className="font-mono text-xs tracking-[0.2em] text-safety uppercase">
            Systems catalogue 2026 · 24 pages sample
          </p>
          <h1 className="font-display text-6xl uppercase">Structure that holds.</h1>
          <p className="text-muted-foreground">{company.description}</p>
        </header>
        {categories.map((category) => (
          <section key={category.slug} className="break-inside-avoid flex flex-col gap-4">
            <h2 className="font-display text-4xl uppercase">{category.name}</h2>
            <p className="text-sm text-muted-foreground">{category.lead}</p>
            {category.products.map((product) => (
              <div key={product.id} className="border border-border p-4">
                <p className="font-mono text-xs text-safety">{product.code}</p>
                <h3 className="font-display text-2xl uppercase">{product.name}</h3>
                <p className="mt-1 text-sm">{product.summary}</p>
                <dl className="mt-3 grid gap-1 text-sm">
                  {product.specs.slice(0, 6).map((spec) => (
                    <div key={spec.label} className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">{spec.label}</dt>
                      <dd className="font-mono">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </section>
        ))}
        <footer className="border-t border-border pt-6 text-sm">
          <p>
            {company.legalName} · {company.address.street}, {company.address.locality}
          </p>
          <p>
            {company.phone} · {company.email}
          </p>
          <Link href="/catalogue" className="mt-4 inline-flex min-h-11 items-center text-safety print:hidden">
            Back to catalogue
          </Link>
        </footer>
      </div>
    </div>
  );
}
