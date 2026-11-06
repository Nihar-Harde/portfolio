"use client";

import React, { useEffect, useRef, useState } from "react";
import { zenAudio } from "@/lib/audio";

export const TaglineReveal: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = sectionRef.current?.getBoundingClientRect();
          if (rect) {
            const windowHeight = window.innerHeight;
            const start = windowHeight * 0.85;
            const end = windowHeight * 0.2;
            const current = rect.top;
            const progress = Math.min(1, Math.max(0, (start - current) / (start - end)));
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-20 bg-[#fbf9f4] border-y border-[#181614]/10 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background Zen Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035]">
        <span className="font-japanese text-[18vw] text-[#181614] leading-none select-none">
          道
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Japanese Header Marker */}
        <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1 rounded-md bg-[#c82b2b]/5 border border-[#c82b2b]/20">
          <span className="text-xs font-japanese text-[#c82b2b] font-semibold">「理念」</span>
          <span className="text-[11px] font-mono tracking-widest text-[#524d47]">
            CORE PHILOSOPHY
          </span>
        </div>

        {/* Word-by-Word Reveal Statement */}
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.3] text-balance font-display">
          {words.map((word, idx) => {
            const wordThreshold = (idx + 1) / words.length;
            const isActive = scrollProgress >= wordThreshold * 0.85;
            const isHighlight =
              word === "autonomous" ||
              word === "edge" ||
              word === "grounded" ||
              word === "mathematically";

            return (
              <span
                key={idx}
                onMouseEnter={() => zenAudio.playHoverTick()}
                className={`inline-block mr-2.5 transition-all duration-300 ${
                  isActive
                    ? isHighlight
                      ? "text-[#c82b2b] font-bold opacity-100 scale-100"
                      : "text-[#181614] opacity-100 scale-100"
                    : "text-[#b0a99f] opacity-40 scale-[0.98]"
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>

        {/* Footnote Metadata */}
        <div className="mt-10 flex items-center justify-center gap-6 text-xs font-mono text-[#827b73]">
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
