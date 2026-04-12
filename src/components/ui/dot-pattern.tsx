import { cn } from "@/lib/utils";

interface DotPatternProps {
  className?: string;
  dotColor?: string;
  dotSize?: number;
  gap?: number;
}

const DotPattern = ({ className, dotColor = "rgba(0,0,0,0.08)", dotSize = 1.5, gap = 24 }: DotPatternProps) => {
  return (
    <svg className={cn("absolute inset-0 w-full h-full", className)} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" width={gap} height={gap} patternUnits="userSpaceOnUse">
          <circle cx={gap / 2} cy={gap / 2} r={dotSize} fill={dotColor} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
};

export { DotPattern };
