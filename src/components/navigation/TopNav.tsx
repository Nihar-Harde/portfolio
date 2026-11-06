"use client";

import React, { useState, useEffect } from "react";
import { zenAudio } from "@/lib/audio";
import { cn } from "@/lib/utils";

interface TopNavProps {
  onOpenDossier: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ onOpenDossier }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMuted, setIsMuted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMuted(zenAudio.getMuted());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleAudioToggle = () => {
    const nextMuted = zenAudio.toggleMute();
    setIsMuted(nextMuted);
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
    { id: "research-patent", label: "Research & IP", kanji: "研究" },
    { id: "flagship-projects", label: "Projects", kanji: "作品" },
    { id: "skills-matrix", label: "Craft", kanji: "技術" },
    { id: "credentials", label: "Credentials", kanji: "経歴" },
    { id: "contact", label: "Contact", kanji: "結び" },
  ];

  return (
    <nav
      aria-label="Primary Navigation"
      className="fixed top-0 right-0 z-50 flex items-center justify-end px-6 sm:px-10 py-5 sm:py-6 bg-transparent pointer-events-auto transition-all duration-300"
    >
      <div className="flex items-center gap-5 sm:gap-7 text-xs sm:text-sm font-medium tracking-wide">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={cn(
                "group relative py-1 transition-colors duration-200 flex items-center gap-1",
                isActive
                  ? "text-[#c82b2b] font-semibold"
                  : "text-[#524d47] hover:text-[#181614]"
              )}
            >
              <span>{item.label}</span>
              {/* Minimalist Vermilion Active / Hover Underline */}
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-[1.5px] bg-[#c82b2b] transition-all duration-300",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </a>
          );
        })}

        <div className="w-[1px] h-3.5 bg-[#181614]/15 mx-1" />

        {/* Plain Text Dossier Action */}
        <button
          onClick={() => {
            zenAudio.playWoodblock();
            onOpenDossier();
          }}
          className="group relative py-1 text-xs sm:text-sm text-[#181614] hover:text-[#c82b2b] transition-colors font-medium flex items-center gap-1"
        >
          <span className="text-[10px] text-[#c82b2b] font-japanese font-bold">印</span>
          <span>Dossier</span>
          <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1.5px] bg-[#c82b2b] transition-all duration-300" />
        </button>

        {/* Plain Text Zen Audio Toggle */}
        <button
          onClick={handleAudioToggle}
          title={isMuted ? "Unmute Zen Sound" : "Mute Zen Sound"}
          className="py-1 text-xs font-mono text-[#827b73] hover:text-[#c82b2b] transition-colors"
        >
          {isMuted ? "[ 音 Off ]" : "[ 音 On ]"}
        </button>
      </div>
    </nav>
  );
};
