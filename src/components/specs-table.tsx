import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { SpecRow } from "@/lib/content";

export function SpecsTable({ rows, caption }: { rows: SpecRow[]; caption?: string }) {
  if (rows.length === 0) {
    return (
      <p className="border border-dashed border-border px-4 py-8 text-sm text-muted-foreground">
        Specifications for this system are issued with the project calculation pack.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto border border-border">
      <Table>
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="font-mono text-[11px] tracking-[0.18em] text-safety uppercase">
              Property
            </TableHead>
            <TableHead className="font-mono text-[11px] tracking-[0.18em] text-safety uppercase">
              Value
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.label} className="hover:bg-muted/40">
              <TableCell className="text-muted-foreground">{row.label}</TableCell>
              <TableCell className="font-mono text-sm text-foreground">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
