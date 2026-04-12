import { cn } from "@/lib/utils";

const RetroGrid = ({ className }: { className?: string }) => {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.3) 60%, transparent)",
        }}
      />
    </div>
  );
};

export { RetroGrid };
