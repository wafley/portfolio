interface NoiseProps {
  opacity?: number;
  baseFrequency?: number;
  numOctaves?: number;
}

export function Noise({
  opacity = 0.02,
  baseFrequency = 0.3,
  numOctaves = 3,
}: NoiseProps) {
  const svgNoise = `data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${baseFrequency}' numOctaves='${numOctaves}' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E`;

  return (
    <div
      className="pointer-events-none fixed top-[-50%] left-[-50%] z-50 h-[200vh] w-[200%]"
      style={{
        opacity: opacity,
        backgroundImage: `url("${svgNoise}")`,
        backgroundRepeat: "repeat",
        animation: "bg-noise-anim 0.6s infinite",
      }}
    />
  );
}
