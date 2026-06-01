import { cn } from "@/lib/utils";

interface FarGridProps {
  className?: string;
  gridSize?: string;
  lineThickness?: string;
  lineColor?: string;
  maskImage?: string;
}

export function FarGrid({
  className,
  gridSize = "4rem",
  lineThickness = "2px",
  lineColor = "var(--color-border)",
  maskImage = "radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)",
}: FarGridProps) {
  return (
    <div
      className={cn("absolute inset-0", className)}
      style={{
        backgroundImage: `linear-gradient(to right, ${lineColor} ${lineThickness}, transparent ${lineThickness}), linear-gradient(to bottom, ${lineColor} ${lineThickness}, transparent ${lineThickness})`,
        backgroundSize: `${gridSize} ${gridSize}`,
        maskImage: maskImage,
        WebkitMaskImage: maskImage,
      }}
    />
  );
}
