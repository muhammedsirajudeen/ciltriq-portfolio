import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: string;
}

const Marquee = ({ children, className, reverse = false, speed = "30s" }: MarqueeProps) => {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn("flex w-max gap-4", reverse ? "animate-marquee-reverse" : "animate-marquee")}
        style={{ animationDuration: speed }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export { Marquee };
