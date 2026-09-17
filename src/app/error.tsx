"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    void error;
  }, [error]);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-24">
      <p className="font-mono text-xs tracking-[0.2em] text-safety uppercase">Fault</p>
      <h1 className="font-display text-5xl uppercase">The drawing failed to load.</h1>
      <p className="text-muted-foreground">
        Reload this page. If it persists, WhatsApp the desk or use the quotation form.
      </p>
      <Button onClick={reset} className="min-h-11 w-fit rounded-sm uppercase">
        Retry
      </Button>
    </div>
  );
}
