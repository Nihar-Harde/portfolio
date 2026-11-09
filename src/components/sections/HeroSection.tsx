"use client";

import React from "react";
import { ArrowDownRight, FileText, Github, Linkedin, Award, Compass } from "lucide-react";
import { DOSSIER } from "@/data/dossier";
import { HeroCanvas } from "@/components/canvas/HeroCanvas";
import { HankoSeal } from "@/components/ui/HankoSeal";
import { zenAudio } from "@/lib/audio";

interface HeroSectionProps {
  onOpenDossier: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDossier }) => {
  const { personal } = DOSSIER;

  const scrollToResearch = (e: React.MouseEvent) => {
    e.preventDefault();
    zenAudio.playWoodblock();
    const el = document.getElementById("research-patent");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] min-h-screen w-full flex flex-col justify-between pt-12 sm:pt-16 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden bg-[#f6f3eb] text-[#181614]"
    >
      {/* 3D WebGL / Canvas Artwork Layer (Mt. Fuji, Pagoda, Red Hinomaru Sun, Maples) */}
      <HeroCanvas />

      {/* Top Header Bar / Brand Stamp */}
      <header className="relative z-10 w-full flex items-center justify-between py-2 sm:py-3 pt-2 sm:pt-0">
        <div className="flex items-center gap-2.5 sm:gap-3 max-w-[calc(100%-145px)] xl:max-w-none">
          {/* Authentic Vermilion Hanko Seal Stamp (印鑑) */}
          <HankoSeal className="w-9 h-9 sm:w-10 sm:h-10 rounded-md shadow-[0_2px_8px_rgba(200,43,43,0.2)] flex-shrink-0 select-none pointer-events-none" />
          <div className="truncate">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#181614] font-display truncate">
                NIHAR HARDE
              </span>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#fbf9f4]/95 border border-[#181614]/10 shadow-xs backdrop-blur-sm flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2e7d32] shadow-[0_0_6px_rgba(46,125,50,0.6)] animate-pulse" />
                <span className="text-[10px] font-mono text-[#524d47] font-medium">
                  {personal.status}
                </span>
              </div>
            </div>
            <span className="block text-[10px] sm:text-[11px] font-mono text-[#524d47] truncate">
              Ramdeobaba University • 2023–2027
            </span>
          </div>
        </div>
      </header>

      {/* Main Center Content */}
      <div className="relative z-10 my-auto py-6 sm:py-10 max-w-4xl">
        {/* Japanese Accent Stamp */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
          <span className="hanko-stamp px-2 py-0.5 text-xs font-semibold whitespace-nowrap">
            {personal.kanjiTitle}
          </span>
          <span className="hidden sm:block h-[1px] w-12 bg-[#c82b2b]/40" />
          <span className="text-[11px] sm:text-xs font-mono text-[#524d47] tracking-widest uppercase">
            Architectural Engineering & Research
          </span>
        </div>

        {/* Main Headline with Fluid Clamp Scale */}
        <h1 className="text-[clamp(1.9rem,5.2vw,4.25rem)] font-semibold tracking-tight text-[#181614] leading-[1.1] sm:leading-[1.08] mb-4 sm:mb-6 text-balance max-w-3xl font-display">
          Nihar Harde
          <span className="block text-[clamp(1.1rem,2.6vw,2.25rem)] font-normal text-[#524d47] mt-2 sm:mt-3 font-sans">
            Agentic AI and Edge Vision Engineer
          </span>
        </h1>

        {/* Subtitle / Spec */}
        <p className="text-sm sm:text-base md:text-lg text-[#524d47] max-w-2xl leading-relaxed mb-6 sm:mb-8 text-pretty">
          {personal.tagline}
        </p>

        {/* Action CTAs with High-Craft Micro-Animations */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={scrollToResearch}
            className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-3 rounded-md bg-[#c82b2b] hover:bg-[#a81c1c] text-white font-medium text-xs sm:text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(200,43,43,0.3)] hover:shadow-[0_8px_30px_rgba(200,43,43,0.55)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto text-center"
          >
            {/* Ambient Vermilion Breathing Glow Pulse */}
            <span className="absolute -inset-1 rounded-md bg-[#c82b2b]/30 -z-10 blur-sm group-hover:blur-md transition-all duration-300 animate-pulse pointer-events-none" />

            {/* Sumi-e Lacquer Shimmer Sweep */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

            {/* Golden Kintsugi Underline Highlight */}
            <span className="absolute bottom-0 left-2 right-2 h-[1.5px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center pointer-events-none" />

            <Compass className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 relative z-10 flex-shrink-0" />
            <span className="relative z-10 font-semibold sm:font-medium">Explore Patent and Papers</span>
            <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 relative z-10 flex-shrink-0" />
          </button>

          <button
            onClick={() => {
              zenAudio.playWoodblock();
              onOpenDossier();
            }}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-3 rounded-md bg-[#fbf9f4] hover:bg-[#ede8de] text-[#181614] border border-[#181614]/15 hover:border-[#c82b2b]/40 font-mono text-xs sm:text-sm transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(24,22,20,0.08)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden w-full sm:w-auto text-center"
          >
            {/* Ink-Stroke Bottom Sweep */}
            <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1.5px] bg-[#c82b2b] transition-all duration-300 ease-out pointer-events-none" />

            <FileText className="w-4 h-4 text-[#c82b2b] transition-transform duration-300 group-hover:scale-110 relative z-10 flex-shrink-0" />
            <span className="relative z-10">View Dossier / Resume</span>
          </button>
        </div>

        {/* Quick Credentials & Language Strip */}
        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[#181614]/10 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-[#524d47]">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => zenAudio.playHoverTick()}
            className="flex items-center gap-1.5 hover:text-[#c82b2b] transition-colors py-1"
          >
            <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#181614] flex-shrink-0" />
            <span className="font-mono text-[11px] sm:text-xs">GitHub / Nihar-Harde</span>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => zenAudio.playHoverTick()}
            className="flex items-center gap-1.5 hover:text-[#c82b2b] transition-colors py-1"
          >
            <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0077b5] flex-shrink-0" />
            <span className="font-mono text-[11px] sm:text-xs">LinkedIn Profile</span>
          </a>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#fbf9f4] border border-[#181614]/10 shadow-sm text-[11px] sm:text-xs">
            <Award className="w-3.5 h-3.5 text-[#c59b48] flex-shrink-0" />
            <span className="font-japanese font-medium text-[#181614]">日本語能力試験 N4 Certified</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#fbf9f4] border border-[#181614]/10 text-[#c82b2b] font-mono shadow-sm text-[11px] sm:text-xs">
            <span className="font-semibold">IEEE OCIT 2026 Author</span>
          </div>
        </div>
      </div>

      {/* Floating Bottom Prompt */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-4 text-[10px] sm:text-[11px] font-mono text-[#827b73] pt-3 sm:pt-4 border-t border-[#181614]/5">
        <span>EST. 2026 • WABI-SABI &amp; UKIYO-E SPECIFICATION</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c82b2b] animate-ping flex-shrink-0" />
          SCROLL TO EXPLORE ARCHITECTURE
        </span>
      </div>
    </section>
  );
};
