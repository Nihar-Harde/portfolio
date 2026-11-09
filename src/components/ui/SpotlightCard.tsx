"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { zenAudio } from "@/lib/audio";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  enableHoverSound?: boolean;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(200, 43, 43, 0.06)",
  enableHoverSound = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    // Only enable spotlight and hover sound for devices with fine pointer (mouse/trackpad)
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    setOpacity(1);
    if (enableHoverSound) {
      zenAudio.playHoverTick();
    }
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "spotlight-card group relative overflow-hidden rounded-xl p-4 sm:p-6 md:p-8 washi-card",
        className
      )}
      {...props}
    >
      {/* Subtle Warm Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />
      {/* Accent Edge Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl border border-transparent transition-opacity duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, rgba(200, 43, 43, 0.2), transparent 70%) border-box`,
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {/* Kintsugi Gold Border Tracing Effect */}
      <div className="kintsugi-trace" aria-hidden="true" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
