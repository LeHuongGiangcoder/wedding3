/**
 * Decorative gold filigree ornament — used as section dividers
 * throughout the invitation for visual consistency.
 *
 * Variants:
 *  - "star"     → star diamond with two lines
 *  - "diamond"  → single diamond with lines
 *  - "lines"    → three tiered lines
 */

type OrnamentVariant = "star" | "diamond" | "lines";

interface Props {
  variant?: OrnamentVariant;
  className?: string;
  light?: boolean; // true = gold on dark bg, false = dark on cream bg
}

export default function Ornament({ variant = "star", className = "", light = false }: Props) {
  const lineColor = light ? "bg-[#D4AF37]/25" : "bg-[#3E2723]/15";
  const iconColor = light ? "text-[#D4AF37]/50" : "text-[#3E2723]/25";

  if (variant === "lines") {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <div className={`h-px w-20 ${lineColor}`} />
        <div className={`h-px w-12 ${lineColor}`} />
        <div className={`h-px w-6 ${lineColor}`} />
      </div>
    );
  }

  if (variant === "diamond") {
    return (
      <div className={`flex items-center justify-center gap-4 ${className}`}>
        <div className={`h-px w-16 md:w-24 ${lineColor}`} />
        <svg width="10" height="10" viewBox="0 0 10 10" className={iconColor}>
          <rect x="5" y="0" width="7" height="7" rx="1" transform="rotate(45 5 0)" fill="currentColor" />
        </svg>
        <div className={`h-px w-16 md:w-24 ${lineColor}`} />
      </div>
    );
  }

  // Default: star
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className={`h-px w-16 md:w-24 ${lineColor}`} />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={iconColor}>
        <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z" fill="currentColor" />
      </svg>
      <div className={`h-px w-16 md:w-24 ${lineColor}`} />
    </div>
  );
}
