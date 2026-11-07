"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";
import { zenAudio } from "@/lib/audio";

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING NEURAL TENSORS");
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const sealRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const hasTriggeredWipeRef = useRef(false);

  const triggerWipe = useCallback(() => {
    if (hasTriggeredWipeRef.current) return;
    hasTriggeredWipeRef.current = true;

    try {
      sessionStorage.setItem("portfolio_intro_seen", "true");
    } catch {
      // Ignore storage restrictions
    }

    try {
      zenAudio.playWoodblock(1.15);
    } catch {
      // Audio autoplay policy fallback
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsDone(true);
        onComplete?.();
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("portfolio:loaded"));
        }
      },
    });

    // 1. Seal pulse and text fade
    tl.to([sealRef.current, textRef.current], {
      scale: 1.05,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
    });

    // 2. Vermilion curtain wipe sweep
    if (curtainRef.current) {
      tl.to(
        curtainRef.current,
        {
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
          duration: 0.7,
          ease: "power4.inOut",
        },
        "-=0.1"
      );
    }

    // 3. Fade out master container
    if (containerRef.current) {
      tl.to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.25,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }
  }, [onComplete]);

  useEffect(() => {
    // Check reduced motion or previous session load
    const isReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let hasLoaded = false;
    try {
      hasLoaded = sessionStorage.getItem("portfolio_intro_seen") === "true";
    } catch {
      hasLoaded = false;
    }

    if (isReduced) {
      setIsDone(true);
      onComplete?.();
      return;
    }

    // Perfect theatrical duration: 2000ms (~2s) for fresh load, 1200ms for return visits
    const duration = hasLoaded ? 1200 : 2000;
    const intervalTime = 25;
    const totalTicks = duration / intervalTime;
    let currentTick = 0;

    const timer = setInterval(() => {
      currentTick++;
      const currentProgress = Math.min(100, Math.round((currentTick / totalTicks) * 100));
      setProgress(currentProgress);

      if (currentProgress < 30) {
        setStatusText("INITIALIZING NEURAL TENSORS");
      } else if (currentProgress < 65) {
        setStatusText("BOUNDING EDGE INFERENCE");
      } else if (currentProgress < 95) {
        setStatusText("HARMONIZING SUMI-E CANVAS");
      } else {
        setStatusText("HARMONY ACHIEVED");
      }

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          triggerWipe();
        }, 120);
      }
    }, intervalTime);

    // Escape key or click skips preloader immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        clearInterval(timer);
        setProgress(100);
        triggerWipe();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete, triggerWipe]);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      onClick={() => triggerWipe()}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#961a1a] select-none overflow-hidden cursor-pointer"
      aria-label="Portfolio Loading Sequence — Click or press Esc to enter"
      title="Click anywhere or press Esc to enter immediately"
    >
      {/* Vermilion Sumi-e Brush Curtain Background */}
      <div
        ref={curtainRef}
        className="absolute inset-0 bg-gradient-to-br from-[#8a1414] via-[#a81c1c] to-[#6e0f0f] z-20 pointer-events-none"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/5 via-black/25 to-black/60 pointer-events-none" />
        {/* Subtle Japanese Asanoha Lattice Texture */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #ffd700 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Atmospheric Central Seal & Identity */}
      <div className="relative z-30 flex flex-col items-center justify-center p-8 max-w-sm text-center">
        {/* Authentic Japanese Gilded Hanko Seal (晴) with High-Contrast Imperial Gold */}
        <div
          ref={sealRef}
          className="relative mb-6 w-20 h-20 rounded-xl border-2 border-[#ffd700] bg-black/40 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.45),inset_0_0_15px_rgba(255,215,0,0.2)] animate-pulse"
        >
          {/* Radiant Kanji: High Contrast Gold on Dark Obsidian */}
          <span className="font-japanese font-bold text-4xl text-[#ffd700] drop-shadow-[0_2px_10px_rgba(255,215,0,0.6)]">
            晴
          </span>
          {/* Corner Gilded Accents */}
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#ffd700]" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#ffd700]" />
        </div>

        {/* Center Typography & Counter */}
        <div ref={textRef} className="space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-[#ffd700]/60" />
            <span className="font-japanese text-sm font-semibold tracking-widest text-[#ffd700] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              「風林火山」
            </span>
            <span className="h-[1px] w-8 bg-[#ffd700]/60" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-widest text-[#fbf9f4] font-display drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            NIHAR HARDE
          </h2>

          <p className="text-xs font-mono text-[#ffd700]/90 tracking-[0.22em] uppercase font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            Agentic AI &amp; Edge Vision
          </p>

          {/* Organic Minimalist Progress Meter */}
          <div className="pt-4 w-52 mx-auto">
            <div className="w-full h-1.5 bg-black/50 border border-[#ffd700]/30 rounded-full overflow-hidden p-[1px]">
              <div
                className="h-full bg-gradient-to-r from-[#ffd700] via-[#ffffff] to-[#ffd700] transition-all duration-75 ease-out rounded-full shadow-[0_0_12px_rgba(255,215,0,0.9)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] font-mono">
              <span className="text-[#fbf9f4]/80 text-[10px] tracking-wider">
                {statusText}
              </span>
              <span className="text-[#ffd700] font-bold text-xs drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                {progress}%
              </span>
            </div>

            {/* Quick Skip Prompt */}
            <div className="mt-6 text-[10px] font-mono text-[#ffd700]/60 hover:text-[#ffd700] tracking-widest transition-colors">
              [ CLICK TO ENTER • ESC TO SKIP ]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
