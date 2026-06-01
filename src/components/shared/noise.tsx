interface NoiseProps {
  opacity?: number;
  baseFrequency?: number;
  numOctaves?: number;
}

export function Noise({
  opacity = 0.1,
  baseFrequency = 0.8,
  numOctaves = 2,
}: NoiseProps) {
  return (
    <div
      className="pointer-events-none fixed -top-[50%] -left-[50%] z-50 h-[200vh] w-[200%]"
      style={{
        opacity: opacity,
        animation: "bg-noise-anim 0.6s infinite",
      }}
    >
      <svg className="absolute inset-0 h-full w-full">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves={numOctaves}
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
