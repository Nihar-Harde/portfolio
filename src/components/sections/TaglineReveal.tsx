"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { zenAudio } from "@/lib/audio";

// RGB Color interpolation helper for smooth contrast transitions
function lerpColor(c1: [number, number, number], c2: [number, number, number], t: number): string {
  const clampedT = Math.min(1, Math.max(0, t));
  const r = Math.round(c1[0] + (c2[0] - c1[0]) * clampedT);
  const g = Math.round(c1[1] + (c2[1] - c1[1]) * clampedT);
  const b = Math.round(c1[2] + (c2[2] - c1[2]) * clampedT);
  return `rgb(${r}, ${g}, ${b})`;
}

// Sub-progress helper for staggered stroke animations
function getSubProgress(scrollProgress: number, start: number, end: number): number {
  if (scrollProgress <= start) return 0;
  if (scrollProgress >= end) return 1;
  return (scrollProgress - start) / (end - start);
}

export const TaglineReveal: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const words = [
    "Bridging",
    "autonomous",
    "agentic",
    "reasoning",
    "with",
    "real-time",
    "edge",
    "vision",
    "—",
    "eliminating",
    "hallucinations",
    "and",
    "bounding",
    "hardware",
    "latency",
    "to",
    "deliver",
    "mathematically",
    "grounded",
    "machine",
    "intelligence.",
  ];

  // Theme detection & reactive updates
  useEffect(() => {
    const updateTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    updateTheme();

    const handleThemeChange = () => {
      updateTheme();
      setTimeout(() => ScrollTrigger.refresh(), 60);
    };

    window.addEventListener("portfolio:theme-change", handleThemeChange);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        if (m.attributeName === "class") {
          updateTheme();
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      window.removeEventListener("portfolio:theme-change", handleThemeChange);
      observer.disconnect();
    };
  }, []);

  // GSAP ScrollTrigger for pinned reveal and synchronized paint transition
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setScrollProgress(1);
      return;
    }

    if (!sectionRef.current) return;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=75%",
      pin: true,
      scrub: 0.25,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  // Canvas darkness progress (active ONLY in Dark Mode)
  // Ramps from 0 (light washi #f6f3eb) to 1 (obsidian black #161513) during scroll 0.06 -> 0.78
  const canvasDarkness = isDarkMode ? getSubProgress(scrollProgress, 0.06, 0.78) : 0;

  // Decisive contrast curve: text flips to radiant porcelain white as soon as the ink spreads
  const textDarkness = Math.min(1, Math.pow(canvasDarkness, 0.7) * 1.25);

  // Staggered progress for the 6 distinct directional brush strokes
  const p1 = getSubProgress(scrollProgress, 0.05, 0.40); // Top-left diagonal slash
  const p2 = getSubProgress(scrollProgress, 0.14, 0.50); // Bottom-right ascending curve
  const p3 = getSubProgress(scrollProgress, 0.24, 0.60); // Horizontal center slash
  const p4 = getSubProgress(scrollProgress, 0.34, 0.68); // Top-right steep plunge
  const p5 = getSubProgress(scrollProgress, 0.42, 0.74); // Bottom-left sweep & hook
  const pSplatters = getSubProgress(scrollProgress, 0.10, 0.62); // Aerosolized sumi spray

  // Dynamic interpolated text colors with high contrast at all times
  const activeRegularColor = lerpColor([24, 22, 20], [245, 242, 235], textDarkness);
  const activeHighlightColor = lerpColor([200, 43, 43], [255, 77, 77], textDarkness);
  const inactiveWordColor = lerpColor([140, 133, 123], [168, 161, 150], textDarkness);
  const badgeLabelColor = lerpColor([82, 77, 71], [212, 206, 195], textDarkness);
  const badgeKanjiColor = lerpColor([200, 43, 43], [255, 77, 77], textDarkness);
  const footnoteColor = lerpColor([130, 123, 115], [168, 161, 150], textDarkness);
  const watermarkColor = lerpColor([24, 22, 20], [245, 242, 235], textDarkness);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative w-full min-h-screen py-24 sm:py-32 px-6 sm:px-12 md:px-20 flex flex-col items-center justify-center text-center overflow-hidden select-none"
      style={{
        backgroundColor: isDarkMode ? "#f6f3eb" : "#fbf9f4",
        borderBottom: `1px solid ${lerpColor([24, 22, 20], [255, 255, 255], canvasDarkness)}20`,
      }}
    >
      {/* ========================================================================= */}
      {/* MULTI-DIRECTIONAL JAPANESE SUMI-E BRUSH CANVAS (DARK MODE ACTIVE) */}
      {/* ========================================================================= */}
      {isDarkMode && (
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
        >
          {/* Ambient Diluted Ink Wash (Usuzumi 薄墨) */}
          <div
            className="absolute inset-0 w-full h-full transition-opacity duration-75"
            style={{ opacity: canvasDarkness * 0.92 }}
          >
            <svg
              viewBox="0 0 1440 900"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M-40,0 C300,120 600,180 900,140 C1200,100 1350,160 1480,80 L1480,900 L-40,900 Z"
                fill="#161513"
                opacity="0.45"
              />
              <path
                d="M-40,150 C240,250 580,300 920,260 C1240,220 1380,290 1480,220 L1480,900 L-40,900 Z"
                fill="#161513"
                opacity="0.65"
              />
              <path
                d="M-40,280 C320,380 680,420 1020,370 C1280,330 1410,400 1480,350 L1480,900 L-40,900 Z"
                fill="#161513"
                opacity="0.85"
              />
            </svg>
          </div>

          {/* Stroke 1: Top-Left Sweeping Slash */}
          <div
            className="absolute -top-[12%] -left-[8%] w-[68%] h-[60%] will-change-transform origin-top-left"
            style={{
              transform: `translate(${(-1 + p1) * 80}px, ${(-1 + p1) * 50}px) scale(${0.7 + p1 * 0.3})`,
              opacity: Math.min(1, p1 * 1.5),
            }}
          >
            <img
              src="/stroke-top-left.png"
              alt=""
              className="w-full h-full object-fill mix-blend-multiply"
              draggable={false}
            />
          </div>

          {/* Stroke 2: Bottom-Right Ascending Curve */}
          <div
            className="absolute -bottom-[10%] -right-[8%] w-[70%] h-[62%] will-change-transform origin-bottom-right"
            style={{
              transform: `translate(${(1 - p2) * 80}px, ${(1 - p2) * 60}px) scale(${0.7 + p2 * 0.3})`,
              opacity: Math.min(1, p2 * 1.5),
            }}
          >
            <img
              src="/stroke-bottom-right.png"
              alt=""
              className="w-full h-full object-fill mix-blend-multiply"
              draggable={false}
            />
          </div>

          {/* Stroke 3: Horizontal Center Slash */}
          <div
            className="absolute top-[22%] -left-[4%] w-[108%] h-[55%] will-change-transform origin-center"
            style={{
              transform: `scaleX(${0.5 + p3 * 0.5}) scaleY(${0.6 + p3 * 0.4})`,
              opacity: Math.min(0.96, p3 * 1.4),
            }}
          >
            <img
              src="/stroke-horizontal.png"
              alt=""
              className="w-full h-full object-fill mix-blend-multiply"
              draggable={false}
            />
          </div>

          {/* Stroke 4: Top-Right Steep Plunge */}
          <div
            className="absolute -top-[10%] right-[6%] w-[42%] h-[72%] will-change-transform origin-top-right"
            style={{
              transform: `translate(${(1 - p4) * 60}px, ${(-1 + p4) * 80}px) scale(${0.65 + p4 * 0.35})`,
              opacity: Math.min(1, p4 * 1.5),
            }}
          >
            <img
              src="/stroke-top-right.png"
              alt=""
              className="w-full h-full object-fill mix-blend-multiply"
              draggable={false}
            />
          </div>

          {/* Stroke 5: Bottom-Left Hook & Sweep */}
          <div
            className="absolute -bottom-[12%] -left-[6%] w-[55%] h-[68%] will-change-transform origin-bottom-left"
            style={{
              transform: `translate(${(-1 + p5) * 60}px, ${(1 - p5) * 60}px) scale(${0.7 + p5 * 0.3})`,
              opacity: Math.min(1, p5 * 1.5),
            }}
          >
            <img
              src="/stroke-bottom-left.png"
              alt=""
              className="w-full h-full object-fill mix-blend-multiply"
              draggable={false}
            />
          </div>

          {/* Stroke 6: Aerosolized Sumi Spray & Splatters */}
          <div
            className="absolute inset-0 w-full h-full will-change-transform"
            style={{
              transform: `scale(${0.85 + pSplatters * 0.15})`,
              opacity: pSplatters * 0.9,
            }}
          >
            <img
              src="/stroke-splatters.png"
              alt=""
              className="w-full h-full object-cover mix-blend-multiply"
              draggable={false}
            />
          </div>

          {/* Solid Obsidian Sealing Foundation (fades in as strokes complete, locking into #161513) */}
          <div
            className="absolute inset-0 w-full h-full bg-[#161513] pointer-events-none transition-opacity duration-75"
            style={{
              opacity: canvasDarkness >= 0.7 ? Math.min(1, (canvasDarkness - 0.7) / 0.3) : 0,
            }}
          />
        </div>
      )}

      {/* ========================================================================= */}
      {/* FOREGROUND CONTENT WITH CONTINUOUS CONTRAST INTERPOLATION */}
      {/* ========================================================================= */}
      {/* Background Zen Watermark 「道」 */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-100 z-1"
        style={{ opacity: 0.055 + canvasDarkness * 0.035 }}
      >
        <span
          className="font-japanese text-[18vw] leading-none select-none transition-colors duration-100"
          style={{ color: watermarkColor }}
        >
          道
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Japanese Header Marker */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-3.5 py-1 rounded-md border transition-colors duration-100"
          style={{
            backgroundColor: isDarkMode ? `rgba(200, 43, 43, ${0.05 + canvasDarkness * 0.15})` : "rgba(200, 43, 43, 0.05)",
            borderColor: isDarkMode ? `rgba(200, 43, 43, ${0.2 + canvasDarkness * 0.2})` : "rgba(200, 43, 43, 0.2)",
          }}
        >
          <span
            className="text-xs font-japanese font-semibold transition-colors duration-100"
            style={{ color: badgeKanjiColor }}
          >
            「理念」
          </span>
          <span
            className="text-[11px] font-mono tracking-widest transition-colors duration-100"
            style={{ color: badgeLabelColor }}
          >
            CORE PHILOSOPHY
          </span>
        </div>

        {/* Word-by-Word Reveal Statement */}
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.3] text-balance font-display">
          {words.map((word, idx) => {
            const wordThreshold = (idx / Math.max(1, words.length - 1)) * 0.88;
            const isActive = scrollProgress >= wordThreshold;
            const isHighlight =
              word === "autonomous" ||
              word === "edge" ||
              word === "grounded" ||
              word === "mathematically";

            let targetColor = inactiveWordColor;
            if (isActive) {
              targetColor = isHighlight ? activeHighlightColor : activeRegularColor;
            }

            return (
              <span
                key={idx}
                onMouseEnter={() => zenAudio.playHoverTick()}
                className={`inline-block mr-2.5 transition-all duration-200 ${
                  isActive
                    ? isHighlight
                      ? "font-bold opacity-100 scale-100"
                      : "opacity-100 scale-100"
                    : "opacity-65 scale-[0.98]"
                }`}
                style={{ color: targetColor }}
              >
                {word}
              </span>
            );
          })}
        </p>

        {/* Footnote Metadata */}
        <div
          className="mt-10 flex items-center justify-center gap-6 text-xs font-mono transition-colors duration-100"
          style={{ color: footnoteColor }}
        >
          <span>GPU TENSOR INTERCEPTION</span>
          <span>•</span>
          <span>MULTILINGUAL STATUTE RAG</span>
          <span>•</span>
          <span>EDGE INT8 QUANTIZATION</span>
        </div>
      </div>
    </section>
  );
};
