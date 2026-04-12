import { cn } from "@/lib/utils";

const Ripple = ({ className }: { className?: string }) => {
  return (
    <div className={cn("pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden", className)}>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-primary/20"
          style={{
            width: `${200 + i * 150}px`,
            height: `${200 + i * 150}px`,
            animation: `ripple 2s ease-out ${i * 0.5}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export { Ripple };
