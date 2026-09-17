import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { QuoteForm } from "@/components/quote-form";
import { company, whatsappHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Request quotation",
  description:
    "Send a project brief to the ESTEIO Lisboa desk. WhatsApp, email, or the quotation form — mock mode works without a backend.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        kicker="Quotation"
        title="Send the loads. We send the fleet list."
        lead="One working day for a first reply. Live shutdowns: WhatsApp the yard. This demo stores nothing — the reference is generated in the browser session."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <QuoteForm />
        </div>
        <aside className="flex flex-col gap-5 lg:col-span-5">
          <div className="steel-panel p-6">
            <p className="font-mono text-[11px] tracking-[0.2em] text-safety uppercase">Desk</p>
            <a href={company.phoneHref} className="mt-3 block min-h-11 font-display text-3xl uppercase">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="block min-h-11 text-sm hover:text-safety">
              {company.email}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-11 items-center text-sm text-safety"
            >
              WhatsApp {company.whatsappDisplay}
            </a>
            <p className="mt-4 text-sm text-muted-foreground">{company.hours}</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Placeholder numbers for this demo. Production handoff can bind the form to email, HubSpot,
            or a WordPress plugin.
          </p>
        </aside>
      </div>
    </>
  );
}
