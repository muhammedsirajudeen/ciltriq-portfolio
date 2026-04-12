import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  color?: string;
  size?: number;
}

const BorderBeam = ({ className, color = "#2563EB", size = 100 }: BorderBeamProps) => {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden rounded-2xl", className)}>
      <div
        className="absolute animate-border-beam"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          offsetPath: "rect(0 100% 100% 0 round 16px)",
          offsetDistance: "0%",
          opacity: 0.6,
        }}
      />
    </div>
  );
};

export { BorderBeam };
