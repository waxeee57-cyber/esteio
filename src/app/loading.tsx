import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16">
      <Skeleton className="h-4 w-40 rounded-sm" />
      <Skeleton className="h-16 w-3/4 rounded-sm" />
      <Skeleton className="h-24 w-full rounded-sm" />
    </div>
  );
}
