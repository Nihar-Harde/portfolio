"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Monitor, FileText } from "lucide-react";
import { zenAudio } from "@/lib/audio";
import { cn } from "@/lib/utils";

interface FloatingDockProps {
  onOpenDossier: () => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ onOpenDossier }) => {
  // Sound and CRT enabled by default per user request
  const [isMuted, setIsMuted] = useState(false);
  const [isCrtActive, setIsCrtActive] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Sync sound state
    setIsMuted(zenAudio.getMuted());

    // Sync CRT state (Default ON unless explicitly set to false)
    const savedCrt = localStorage.getItem("neo_edo_crt_mode");
    if (savedCrt === null || savedCrt === "true") {
      setIsCrtActive(true);
      document.documentElement.classList.add("crt-mode");
    } else {
      setIsCrtActive(false);
      document.documentElement.classList.remove("crt-mode");
    }

    // Scroll spy for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = ["hero", "research-patent", "flagship-projects", "skills-matrix", "credentials", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleAudioToggle = () => {
    const nextMuted = zenAudio.toggleMute();
    setIsMuted(nextMuted);
  };

  const handleCrtToggle = () => {
    zenAudio.playWoodblock();
    const nextCrt = !isCrtActive;
    setIsCrtActive(nextCrt);
    if (nextCrt) {
      document.documentElement.classList.add("crt-mode");
      localStorage.setItem("neo_edo_crt_mode", "true");
    } else {
      document.documentElement.classList.remove("crt-mode");
      localStorage.setItem("neo_edo_crt_mode", "false");
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    zenAudio.playWoodblock();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", label: "Overview", kanji: "概要" },
    { id: "research-patent", label: "Research", kanji: "研究" },
    { id: "flagship-projects", label: "Projects", kanji: "作品" },
    { id: "skills-matrix", label: "Craft", kanji: "技術" },
    { id: "credentials", label: "Credentials", kanji: "経歴" },
    { id: "contact", label: "Contact", kanji: "結び" },
  ];

  return (
    <nav
      aria-label="Primary Navigation"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#1b1535]/90 backdrop-blur-2xl border border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.55)] max-w-[96vw] transition-all duration-300"
    >
      {/* Navigation Items: strictly on one single line, compact and refined */}
      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={cn(
                "whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                isActive
                  ? "bg-gradient-to-r from-magenta/25 to-cyan/25 text-white border border-cyan/40 shadow-[0_0_12px_rgba(0,240,255,0.25)]"
                  : "text-[#cdc4f0] hover:text-white hover:bg-white/8 border border-transparent"
              )}
            >
              <span className="font-japanese text-[10px] text-magenta font-semibold tracking-wider">
                {item.kanji}
              </span>
              <span className="font-mono text-[11px] tracking-wide">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>

      <div className="w-[1px] h-4 bg-white/15 mx-0.5 flex-shrink-0" />

      {/* Control Actions: Dossier, Audio Mute, CRT Mode */}
      <div className="flex items-center gap-1 flex-shrink-0">
        <button
          onClick={() => {
            zenAudio.playWoodblock();
            onOpenDossier();
          }}
          title="Candidate Dossier & Resume"
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-mono bg-white/5 hover:bg-magenta/20 text-[#ffffff] hover:text-magenta border border-white/10 hover:border-magenta/40 transition-all duration-200"
          aria-label="Open Candidate Dossier Modal"
        >
          <FileText className="w-3.5 h-3.5 text-magenta" />
          <span className="hidden sm:inline text-[11px]">Dossier</span>
        </button>

        <button
          onClick={handleAudioToggle}
          title={isMuted ? "Enable Zen Procedural Audio" : "Zen Audio Active (Click to mute)"}
          className={cn(
            "p-1.5 rounded-full border transition-all duration-200",
            isMuted
              ? "text-[#9185bd] border-white/10 hover:text-white hover:border-white/25"
              : "text-cyan bg-cyan/15 border-cyan/40 shadow-[0_0_12px_rgba(0,240,255,0.35)]"
          )}
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={handleCrtToggle}
          title={isCrtActive ? "CRT Scanlines Active (Click to disable)" : "Enable CRT Scanlines"}
          className={cn(
            "p-1.5 rounded-full border transition-all duration-200",
            isCrtActive
              ? "text-magenta bg-magenta/15 border-magenta/40 shadow-[0_0_12px_rgba(255,42,133,0.35)]"
              : "text-[#9185bd] border-white/10 hover:text-white hover:border-white/25"
          )}
          aria-label="Toggle CRT Scanline mode"
        >
          <Monitor className="w-3.5 h-3.5" />
        </button>
      </div>
    </nav>
  );
};
