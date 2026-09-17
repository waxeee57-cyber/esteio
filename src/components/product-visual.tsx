import { cn } from "@/lib/utils";

type VisualKind = "scaffolding" | "structural" | "modular";

const titles: Record<VisualKind, string> = {
  scaffolding: "Façade bay elevation",
  structural: "Heavy tower load path",
  modular: "ISO module stack",
};

export function ProductVisual({
  kind,
  className,
}: {
  kind: VisualKind;
  className?: string;
}) {
  return (
    <figure className={cn("steel-panel relative overflow-hidden", className)}>
      <svg viewBox="0 0 640 400" className="h-full w-full" role="img" aria-label={titles[kind]}>
        <rect width="640" height="400" fill="#0A0D10" />
        <g stroke="#2A323C" strokeWidth="1">
          {Array.from({ length: 17 }, (_, i) => (
            <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="400" />
          ))}
          {Array.from({ length: 11 }, (_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 40} x2="640" y2={i * 40} />
          ))}
        </g>
        {kind === "scaffolding" ? <ScaffoldingDrawing /> : null}
        {kind === "structural" ? <StructuralDrawing /> : null}
        {kind === "modular" ? <ModularDrawing /> : null}
        <text x="24" y="36" fill="#8B9288" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2">
          ESTEIO · DWG {kind.toUpperCase()} · 1:50
        </text>
      </svg>
    </figure>
  );
}

function ScaffoldingDrawing() {
  return (
    <g fill="none" stroke="#E6E1D6" strokeWidth="2">
      <rect x="120" y="48" width="16" height="320" />
      <rect x="504" y="48" width="16" height="320" />
      <rect x="120" y="80" width="400" height="8" />
      <rect x="120" y="160" width="400" height="8" />
      <rect x="120" y="240" width="400" height="8" />
      <rect x="120" y="320" width="400" height="8" />
      <line x1="136" y1="80" x2="504" y2="160" stroke="#E85A17" strokeWidth="1.5" />
      <line x1="136" y1="160" x2="504" y2="240" stroke="#E85A17" strokeWidth="1.5" />
      <line x1="136" y1="240" x2="504" y2="320" stroke="#E85A17" strokeWidth="1.5" />
      <rect x="160" y="88" width="320" height="64" fill="#161B22" stroke="#8B9288" />
      <rect x="160" y="168" width="320" height="64" fill="#161B22" stroke="#8B9288" />
      <rect x="160" y="248" width="320" height="64" fill="#161B22" stroke="#8B9288" />
      <circle cx="128" cy="84" r="5" fill="#E85A17" stroke="none" />
      <circle cx="512" cy="84" r="5" fill="#E85A17" stroke="none" />
    </g>
  );
}

function StructuralDrawing() {
  return (
    <g fill="none" stroke="#E6E1D6" strokeWidth="2">
      <polygon points="180,340 320,70 460,340" />
      <line x1="180" y1="340" x2="460" y2="340" />
      <line x1="230" y1="250" x2="410" y2="250" />
      <line x1="255" y1="190" x2="385" y2="190" />
      <line x1="280" y1="130" x2="360" y2="130" />
      <line x1="180" y1="340" x2="255" y2="190" stroke="#E85A17" />
      <line x1="460" y1="340" x2="385" y2="190" stroke="#E85A17" />
      <rect x="300" y="48" width="40" height="22" fill="#E85A17" stroke="none" />
      <text x="308" y="64" fill="#0A0D10" fontFamily="IBM Plex Mono, monospace" fontSize="10">
        P
      </text>
    </g>
  );
}

function ModularDrawing() {
  return (
    <g fill="none" stroke="#E6E1D6" strokeWidth="2">
      <rect x="170" y="210" width="300" height="110" />
      <rect x="190" y="130" width="260" height="80" />
      <rect x="210" y="60" width="220" height="70" />
      <rect x="200" y="236" width="48" height="64" />
      <rect x="270" y="248" width="70" height="40" fill="#161B22" />
      <rect x="370" y="248" width="70" height="40" fill="#161B22" />
      <line x1="170" y1="210" x2="190" y2="130" />
      <line x1="470" y1="210" x2="450" y2="130" />
      <line x1="190" y1="130" x2="210" y2="60" />
      <line x1="450" y1="130" x2="430" y2="60" />
      <rect x="210" y="60" width="220" height="6" fill="#E85A17" stroke="none" />
    </g>
  );
}
