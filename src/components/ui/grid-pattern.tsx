"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface GridPatternProps {
  width?: number;
  height?: number;
  className?: string;
  strokeColor?: string;
  animated?: boolean;
  accentColor?: string;
}

const GridPattern = ({
  width = 32,
  height = 32,
  className,
  strokeColor = "rgba(0,0,0,0.07)",
  animated = false,
  accentColor = "#2563EB",
}: GridPatternProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!animated || !svgRef.current) return;
    const rects = svgRef.current.querySelectorAll(".grid-cell");
    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * rects.length);
      const rect = rects[idx] as SVGRectElement;
      rect.style.fill = accentColor;
      rect.style.opacity = "0.15";
      setTimeout(() => {
        rect.style.fill = "transparent";
        rect.style.opacity = "0";
      }, 1500);
    }, 300);
    return () => clearInterval(interval);
  }, [animated, accentColor]);

  const cols = 40;
  const rows = 20;

  return (
    <svg
      ref={svgRef}
      className={cn("absolute inset-0 w-full h-full", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width={width} height={height} patternUnits="userSpaceOnUse">
          <path
            d={`M ${width} 0 L 0 0 0 ${height}`}
            fill="none"
            stroke={strokeColor}
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      {animated &&
        Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => (
            <rect
              key={`${r}-${c}`}
              className="grid-cell"
              x={c * width}
              y={r * height}
              width={width}
              height={height}
              fill="transparent"
              opacity="0"
              style={{ transition: "fill 0.5s, opacity 0.8s" }}
            />
          ))
        )}
    </svg>
  );
};

export { GridPattern };
