"use client";

import React, { useEffect, useState, useRef } from "react";

export const CustomCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Mouse coords & lerped ring coords
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only run on desktop with fine pointer & without reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || isReduced) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!visible) setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if target is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("a, button, [role='button'], [role='tab'], input, select, textarea, .spotlight-card, .interactive-hover")
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let animationFrameId: number;

    const lerpRing = () => {
      // Smooth inertia trailing for outer vermilion ring
      const factor = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * factor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * factor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(lerpRing);
    };

    animationFrameId = requestAnimationFrame(lerpRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  if (!mounted) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Primary Sumi-Ink Center Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#181614] dark:bg-[#f5f2eb] transition-[width,height,background-color] duration-150 will-change-transform ${
          isHovered ? "scale-75 bg-[#c82b2b]" : ""
        } ${isClicking ? "scale-50" : ""}`}
      />

      {/* Trailing Vermilion Aura Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 rounded-full border will-change-transform transition-[width,height,margin,border-color,background-color,transform] duration-200 ease-out ${
          isHovered
            ? "w-12 h-12 -ml-6 -mt-6 border-[#c82b2b] bg-[#c82b2b]/15 shadow-[0_0_16px_rgba(200,43,43,0.3)]"
            : "w-8 h-8 -ml-4 -mt-4 border-[#c82b2b]/50 dark:border-[#e03e3e]/60 bg-transparent"
        } ${isClicking ? "scale-90 bg-[#c82b2b]/30" : ""}`}
      />
    </div>
  );
};
