import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-24">
      <p className="font-mono text-xs tracking-[0.2em] text-safety uppercase">404</p>
      <h1 className="font-display text-6xl uppercase">Bay not found.</h1>
      <p className="text-muted-foreground">
        That route is not in the ESTEIO drawing. Return to the yard or open the product families.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild className="min-h-11 rounded-sm uppercase">
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="outline" className="min-h-11 rounded-sm uppercase">
          <Link href="/products">Products</Link>
        </Button>
      </div>
    </div>
  );
}
