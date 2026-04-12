import { cn } from "@/lib/utils";

interface ShineBorderProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
}

const ShineBorder = ({ children, className, borderColor = "#2563EB" }: ShineBorderProps) => {
  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl p-[1px]", className)}
      style={{
        background: `linear-gradient(90deg, transparent, ${borderColor}, transparent)`,
        backgroundSize: "200% 100%",
        animation: "shine-border 3s ease-in-out infinite",
      }}
    >
      <div className="relative rounded-2xl bg-white h-full">{children}</div>
    </div>
  );
};

export { ShineBorder };
