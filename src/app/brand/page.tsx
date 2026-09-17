import type { Metadata } from "next";

import { Logo } from "@/components/logo";
import { PageHero } from "@/components/page-hero";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Brand guidelines",
  description:
    "ESTEIO brand mark, colour, type, and voice. Safety orange is a load line — never a fill.",
};

export default function BrandPage() {
  return (
    <>
      <PageHero
        kicker="Brand"
        title={`${brand.name} — ${brand.pronunciation}`}
        lead={`${brand.meaning} The mark is a base plate with an E of three bars. The middle bar is the only place safety orange is allowed as a solid.`}
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-2">
          <div className="steel-panel flex items-center justify-center p-12">
            <Logo markClassName="size-20" />
          </div>
          <div className="flex items-center justify-center bg-concrete p-12">
            <Logo inverted markClassName="size-20" />
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="font-display text-3xl uppercase">Colour</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {brand.colors.map((color) => (
              <figure key={color.hex} className="border border-border">
                <div className="h-28" style={{ background: color.hex }} />
                <figcaption className="flex flex-col gap-1 p-3">
                  <p className="font-display text-xl uppercase">{color.name}</p>
                  <p className="font-mono text-xs">{color.hex}</p>
                  <p className="text-xs text-muted-foreground">{color.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section className="grid gap-8 lg:grid-cols-3">
          <div>
            <p className="font-mono text-xs text-safety uppercase">Display</p>
            <p className="mt-2 font-display text-5xl uppercase">{brand.type.display}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-safety uppercase">Body</p>
            <p className="mt-2 text-2xl">{brand.type.body}</p>
          </div>
          <div>
            <p className="font-mono text-xs text-safety uppercase">Specs</p>
            <p className="mt-2 font-mono text-2xl">{brand.type.mono}</p>
          </div>
        </section>
        <section className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl uppercase">Voice</h2>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              {brand.voice.map((line) => (
                <li key={line} className="safety-rail pl-4">
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl uppercase">Do not</h2>
            <p className="mt-2 text-sm text-muted-foreground">{brand.clearSpace}</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              {brand.donts.map((line) => (
                <li key={line}>— {line}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
