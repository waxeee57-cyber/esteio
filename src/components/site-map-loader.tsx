"use client";

import dynamic from "next/dynamic";

const SiteMap = dynamic(() => import("@/components/site-map").then((mod) => mod.SiteMap), {
  ssr: false,
  loading: () => (
    <div className="flex h-[320px] items-center justify-center border border-border bg-plate text-sm text-muted-foreground">
      Loading Sacavém yard map…
    </div>
  ),
});

export function SiteMapLoader() {
  return <SiteMap />;
}
