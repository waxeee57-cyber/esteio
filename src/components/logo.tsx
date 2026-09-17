import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  inverted?: boolean;
};

export function Logo({
  className,
  markClassName,
  showWordmark = true,
  inverted = false,
}: LogoProps) {
  const ink = inverted ? "#0A0D10" : "#E6E1D6";
  const plate = inverted ? "#E6E1D6" : "#161B22";
  const safety = "#E85A17";

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 48 48"
        className={cn("size-10 shrink-0", markClassName)}
        role="img"
        aria-labelledby="esteio-mark-title"
      >
        <title id="esteio-mark-title">ESTEIO mark</title>
        <rect width="48" height="48" fill={plate} />
        <rect x="0.75" y="0.75" width="46.5" height="46.5" fill="none" stroke={ink} strokeWidth="1.2" />
        <circle cx="8" cy="8" r="1.6" fill="none" stroke={ink} strokeWidth="1.1" />
        <circle cx="40" cy="8" r="1.6" fill="none" stroke={ink} strokeWidth="1.1" />
        <circle cx="8" cy="40" r="1.6" fill="none" stroke={ink} strokeWidth="1.1" />
        <circle cx="40" cy="40" r="1.6" fill="none" stroke={ink} strokeWidth="1.1" />
        <rect x="14" y="12" width="20" height="4.2" fill={ink} />
        <rect x="14" y="21.9" width="15" height="4.2" fill={safety} />
        <rect x="14" y="31.8" width="20" height="4.2" fill={ink} />
        <rect x="14" y="12" width="4.2" height="24" fill={ink} />
      </svg>
      {showWordmark ? (
        <span
          className="font-display text-[1.65rem] leading-none tracking-[0.22em] uppercase"
          style={{ color: ink }}
        >
          Esteio
        </span>
      ) : null}
    </span>
  );
}
