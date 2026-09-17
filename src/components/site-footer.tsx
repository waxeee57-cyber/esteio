import Link from "next/link";

import { Logo } from "@/components/logo";
import { company } from "@/lib/content";

const columns = [
  {
    title: "Systems",
    links: [
      { href: "/products/scaffolding", label: "Scaffolding" },
      { href: "/products/structural", label: "Structural" },
      { href: "/products/modular", label: "Modular buildings" },
      { href: "/catalogue", label: "Catalogue PDF" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/applications", label: "Applications" },
      { href: "/brand", label: "Brand guidelines" },
      { href: "/quote", label: "Request quotation" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-steel print:hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="flex flex-col gap-4 lg:col-span-5">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {company.legalName}. {company.address.street}, {company.address.postalCode}{" "}
            {company.address.locality}, {company.address.region}.
          </p>
          <p className="font-mono text-xs tracking-wide text-galvanized uppercase">
            VAT {company.vat} · Est. {company.founded}
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-3 lg:col-span-2">
            <p className="font-mono text-[11px] tracking-[0.2em] text-safety uppercase">
              {column.title}
            </p>
            <ul className="flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm text-foreground/90 hover:text-safety"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-3 lg:col-span-3">
          <p className="font-mono text-[11px] tracking-[0.2em] text-safety uppercase">Desk</p>
          <a
            href={company.phoneHref}
            className="inline-flex min-h-11 items-center text-sm hover:text-safety"
          >
            {company.phone}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="inline-flex min-h-11 items-center text-sm hover:text-safety"
          >
            {company.email}
          </a>
          <p className="text-sm text-muted-foreground">{company.hours}</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <p>Demo site — WordPress handoff available for production CMS.</p>
        </div>
      </div>
    </footer>
  );
}
