import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  lead,
  children,
}: {
  kicker: string;
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="font-mono text-[11px] tracking-[0.22em] text-safety uppercase">{kicker}</p>
        <span className="draw-x h-0.5 w-16 bg-safety" />
        <h1 className="rise max-w-4xl font-display text-5xl leading-[0.92] tracking-[0.04em] uppercase sm:text-7xl">
          {title}
        </h1>
        <p className="rise max-w-2xl text-lg leading-relaxed text-muted-foreground [animation-delay:120ms]">
          {lead}
        </p>
        {children ? <div className="pt-2">{children}</div> : null}
      </div>
    </section>
  );
}

export function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] tracking-[0.22em] text-safety uppercase">
      <span className="text-galvanized">{n}</span>
      <span className="mx-3 text-border">/</span>
      {children}
    </p>
  );
}

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
  );
}
