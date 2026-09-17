import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { applications, applicationsIntro } from "@/lib/content";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "ESTEIO systems on Portuguese sites: high-rise Lisboa, Sines energy, heritage Belém, data halls, healthcare, wind.",
};

export default function ApplicationsPage() {
  if (applications.length === 0) {
    return (
      <PageHero
        kicker="Applications"
        title="Project list in preparation."
        lead="Case notes will appear here. Request a quotation and we will match a comparable site."
      />
    );
  }

  return (
    <>
      <PageHero kicker="Applications" title="Sites that look like yours." lead={applicationsIntro} />
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
        {applications.map((item) => (
          <article key={item.id} className="steel-panel flex flex-col gap-4 p-6">
            <p className="font-mono text-[11px] tracking-[0.2em] text-safety uppercase">
              {item.sector} · {item.location}
            </p>
            <h2 className="font-display text-3xl tracking-[0.06em] uppercase">{item.title}</h2>
            <p className="text-sm text-muted-foreground">{item.summary}</p>
            <p className="font-mono text-xs text-galvanized uppercase">{item.system}</p>
            <dl className="mt-2 grid grid-cols-3 gap-3 border-t border-border pt-4">
              {item.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[11px] tracking-wide text-muted-foreground uppercase">
                    {stat.label}
                  </dt>
                  <dd className="font-mono text-sm">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <Button asChild className="min-h-11 rounded-sm uppercase">
          <Link href="/quote">Brief a comparable site</Link>
        </Button>
      </div>
    </>
  );
}
