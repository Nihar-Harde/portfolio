"use client";

import React, { useState, useEffect, useRef } from "react";
import { zenAudio } from "@/lib/audio";
import { cn } from "@/lib/utils";
import { X, Moon, Sun, Volume2, VolumeX, FileText } from "lucide-react";

interface TopNavProps {
  onOpenDossier: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ onOpenDossier }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMuted, setIsMuted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    setIsMuted(zenAudio.getMuted());

    // Theme initialization and synchronization
    const updateThemeState = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    const savedTheme = localStorage.getItem("portfolio_theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }

    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent?.detail?.isDark !== undefined) {
        setIsDarkMode(customEvent.detail.isDark);
      } else {
        updateThemeState();
      }
    };

    window.addEventListener("portfolio:theme-change", handleThemeChange);

    const themeObserver = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        if (m.attributeName === "class") {
          updateThemeState();
        }
      });
    });
    themeObserver.observe(document.documentElement, { attributes: true });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    const sections = ["hero", "research-patent", "flagship-projects", "skills-matrix", "credentials", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("portfolio:theme-change", handleThemeChange);
      themeObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [isMobileMenuOpen]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const handleAudioToggle = () => {
    const nextMuted = zenAudio.toggleMute();
    setIsMuted(nextMuted);
  };

  const handleThemeToggle = () => {
    zenAudio.playWoodblock();
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio_theme", "light");
    }
    // Notify all scroll trigger orchestrators to recalculate coordinates cleanly
    window.dispatchEvent(new CustomEvent("portfolio:theme-change", { detail: { isDark: nextDark } }));
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    zenAudio.playWoodblock();
    setIsMobileMenuOpen(false);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", label: "Overview", kanji: "概要", num: "一" },
    { id: "research-patent", label: "Research & IP", kanji: "研究", num: "二" },
    { id: "flagship-projects", label: "Projects", kanji: "作品", num: "三" },
    { id: "skills-matrix", label: "Craft", kanji: "技術", num: "四" },
    { id: "credentials", label: "Credentials", kanji: "経歴", num: "五" },
    { id: "contact", label: "Contact", kanji: "結び", num: "六" },
  ];

  const isDarkCanvas = isDarkMode && isScrolled;

  return (
    <>
      <nav
        aria-label="Primary Navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-6 sm:px-12 md:px-20 transition-all duration-300 ease-in-out pointer-events-none",
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0",
          isScrolled ? "py-3 sm:py-4" : "py-5 sm:py-6"
        )}
      >
        {/* Zero-Box Seamless Top Fog / Vignette Fade (No border, no box shadow, perfectly dissolved bottom edge) */}
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 w-full pointer-events-none transition-opacity duration-300 -z-10",
            isScrolled ? "opacity-100 h-20 sm:h-24" : "opacity-0 h-16"
          )}
          style={{
            background: isDarkCanvas
              ? "linear-gradient(to bottom, rgba(18, 17, 16, 0.96) 0%, rgba(18, 17, 16, 0.78) 55%, rgba(18, 17, 16, 0) 100%)"
              : "linear-gradient(to bottom, rgba(246, 243, 235, 0.96) 0%, rgba(246, 243, 235, 0.8) 55%, rgba(246, 243, 235, 0) 100%)",
            backdropFilter: isScrolled ? "blur(8px)" : "none",
            WebkitBackdropFilter: isScrolled ? "blur(8px)" : "none",
            maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
          }}
        />

        {/* Desktop Navigation Links (High Contrast, Razor-Sharp Typography, Zero Box) */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7 text-xs sm:text-[13px] lg:text-sm font-semibold tracking-wider pointer-events-auto">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={cn(
                  "group relative py-1 transition-all duration-200 flex items-center gap-1.5",
                  isActive
                    ? isDarkCanvas
                      ? "text-[#ff4d4d] font-bold drop-shadow-[0_1px_8px_rgba(255,77,77,0.5)]"
                      : "text-[#c82b2b] font-bold drop-shadow-[0_1px_4px_rgba(200,43,43,0.3)]"
                    : isDarkCanvas
                      ? "text-[#f5f2eb]/90 hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]"
                      : "text-[#181614] hover:text-[#c82b2b] drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"
                )}
              >
                <span>{item.label}</span>
                {/* Minimalist Vermilion Active / Hover Underline */}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[2px] transition-all duration-300",
                    isDarkCanvas ? "bg-[#ff4d4d]" : "bg-[#c82b2b]",
                    isActive
                      ? isDarkCanvas
                        ? "w-full shadow-[0_0_8px_rgba(255,77,77,0.7)]"
                        : "w-full shadow-[0_0_6px_rgba(200,43,43,0.4)]"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </a>
            );
          })}

          <div
            className={cn(
              "w-[1.5px] h-4 mx-1.5 transition-colors",
              isDarkCanvas ? "bg-white/30" : "bg-[#181614]/25"
            )}
          />

          {/* Plain Text Dossier Action */}
          <button
            onClick={() => {
              zenAudio.playWoodblock();
              onOpenDossier();
            }}
            className={cn(
              "group relative py-1 text-xs sm:text-[13px] lg:text-sm transition-colors font-bold flex items-center gap-1.5",
              isDarkCanvas
                ? "text-[#f5f2eb] hover:text-[#ff4d4d] drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]"
                : "text-[#181614] hover:text-[#c82b2b] drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"
            )}
          >
            <span
              className={cn(
                "text-xs font-japanese font-bold",
                isDarkCanvas ? "text-[#ff4d4d]" : "text-[#c82b2b]"
              )}
            >
              印
            </span>
            <span>Dossier</span>
            <span
              className={cn(
                "absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] transition-all duration-300",
                isDarkCanvas ? "bg-[#ff4d4d]" : "bg-[#c82b2b]"
              )}
            />
          </button>

          {/* Dark / Light Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            title={isDarkMode ? "Switch to Washi Light Mode" : "Switch to Sumi-e Dark Mode"}
            className={cn(
              "py-1 px-1 text-xs font-mono font-bold transition-colors flex items-center gap-1.5",
              isDarkCanvas
                ? "text-[#f5f2eb]/90 hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]"
                : "text-[#181614] hover:text-[#c82b2b] drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"
            )}
          >
            {isDarkMode ? (
              <span className="flex items-center gap-1.5">
                <Sun className={cn("w-3.5 h-3.5", isDarkCanvas ? "text-[#ffd700] fill-[#ffd700]/30 animate-pulse" : "text-[#c59b48]")} />
                <span>[ 紙 Washi ]</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <Moon className="w-3.5 h-3.5 text-[#181614] fill-[#181614]/20" />
                <span>[ 墨 Sumi ]</span>
              </span>
            )}
          </button>

          {/* Plain Text Zen Audio Toggle */}
          <button
            onClick={handleAudioToggle}
            title={isMuted ? "Unmute Zen Sound" : "Mute Zen Sound"}
            className={cn(
              "py-1 text-xs font-mono font-bold transition-colors",
              isDarkCanvas
                ? "text-[#f5f2eb]/90 hover:text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]"
                : "text-[#181614] hover:text-[#c82b2b] drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"
            )}
          >
            {isMuted ? "[ 音 Off ]" : "[ 音 On ]"}
          </button>
        </div>

        {/* Mobile Navigation Bar (< md) */}
        <div className="flex md:hidden items-center gap-2 sm:gap-3 pointer-events-auto">
          {/* Quick Dossier Button */}
          <button
            onClick={() => {
              zenAudio.playWoodblock();
              onOpenDossier();
            }}
            className="px-2.5 py-1 text-xs rounded-md bg-[#ede8de] dark:bg-[#1e1c19] text-[#181614] dark:text-[#f5f2eb] border border-[#181614]/10 dark:border-white/10 flex items-center gap-1 font-mono"
            aria-label="Open Candidate Dossier"
          >
            <span className="text-[10px] text-[#c82b2b] dark:text-[#e03e3e] font-japanese font-bold">印</span>
            <span>Dossier</span>
          </button>

          {/* Theme Quick Toggle */}
          <button
            onClick={handleThemeToggle}
            className="p-1.5 rounded-md text-[#524d47] dark:text-[#b8b2a7] hover:text-[#c82b2b]"
            aria-label={isDarkMode ? "Switch to Washi Light Mode" : "Switch to Sumi Dark Mode"}
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-[#dfb15b]" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Audio Quick Toggle */}
          <button
            onClick={handleAudioToggle}
            className="p-1.5 rounded-md text-[#524d47] dark:text-[#b8b2a7] hover:text-[#c82b2b]"
            aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#c82b2b]" />}
          </button>

          {/* Stylized Japanese Hamburger Menu Button */}
          <button
            onClick={() => {
              zenAudio.playWoodblock();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="p-2 ml-1 rounded-md bg-[#ede8de] dark:bg-[#1e1c19] border border-[#181614]/10 dark:border-white/10 text-[#181614] dark:text-[#f5f2eb] focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between items-center relative">
              <span
                className={cn(
                  "w-5 h-[2px] bg-[#181614] dark:bg-[#f5f2eb] transition-all duration-300 origin-center",
                  isMobileMenuOpen ? "rotate-45 translate-y-[7px] bg-[#c82b2b]" : ""
                )}
              />
              <span
                className={cn(
                  "w-4 h-[2px] bg-[#c82b2b] dark:bg-[#e03e3e] transition-opacity duration-200 self-end",
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "w-5 h-[2px] bg-[#181614] dark:bg-[#f5f2eb] transition-all duration-300 origin-center",
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[7px] bg-[#c82b2b]" : ""
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Slide-in Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300 pointer-events-none",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#181614]/60 dark:bg-black/70 backdrop-blur-sm"
          onClick={() => {
            zenAudio.playWoodblock();
            setIsMobileMenuOpen(false);
          }}
        />

        {/* Sliding Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 w-[82vw] max-w-sm h-full bg-[#fbf9f4] dark:bg-[#161513] border-l border-[#181614]/12 dark:border-white/10 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out overflow-y-auto overscroll-contain",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#181614]/10 dark:border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded border border-[#c82b2b] bg-[#c82b2b]/5 flex items-center justify-center">
                  <span className="font-japanese font-bold text-sm text-[#c82b2b]">晴</span>
                </div>
                <div>
                  <div className="text-sm font-semibold tracking-wider font-display text-[#181614] dark:text-[#f5f2eb]">
                    NIHAR HARDE
                  </div>
                  <div className="text-[10px] font-mono text-[#827b73] dark:text-[#78736a]">
                    PORTFOLIO INDEX
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  zenAudio.playWoodblock();
                  setIsMobileMenuOpen(false);
                }}
                className="p-1.5 rounded-md text-[#524d47] dark:text-[#b8b2a7] hover:text-[#c82b2b]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links with Kanji Section Markers */}
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={cn(
                      "flex items-center justify-between p-3 rounded-lg transition-all duration-200 group",
                      isActive
                        ? "bg-[#c82b2b]/10 dark:bg-[#e03e3e]/15 text-[#c82b2b] dark:text-[#e03e3e] font-semibold"
                        : "text-[#181614] dark:text-[#f5f2eb] hover:bg-[#ede8de]/60 dark:hover:bg-[#201e1a]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#827b73] dark:text-[#78736a] w-5">
                        {item.num}
                      </span>
                      <span className="text-base font-display">{item.label}</span>
                    </div>
                    <span className="font-japanese text-sm text-[#c82b2b] dark:text-[#e03e3e] opacity-75 group-hover:opacity-100">
                      「{item.kanji}」
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-[#181614]/10 dark:border-white/10 space-y-3">
            <button
              onClick={() => {
                zenAudio.playWoodblock();
                setIsMobileMenuOpen(false);
                onOpenDossier();
              }}
              className="w-full py-2.5 px-4 rounded-md bg-[#c82b2b] hover:bg-[#a81c1c] text-white text-sm font-medium flex items-center justify-center gap-2 shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Inspect Candidate Dossier</span>
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <button
                onClick={handleThemeToggle}
                className="py-2 px-3 rounded-md bg-[#ede8de]/60 dark:bg-[#201e1a] text-[#524d47] dark:text-[#b8b2a7] border border-[#181614]/10 dark:border-white/10 flex items-center justify-center gap-1.5"
              >
                {isDarkMode ? <Sun className="w-3.5 h-3.5 text-[#dfb15b]" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{isDarkMode ? "紙 Washi" : "墨 Sumi"}</span>
              </button>

              <button
                onClick={handleAudioToggle}
                className="py-2 px-3 rounded-md bg-[#ede8de]/60 dark:bg-[#201e1a] text-[#524d47] dark:text-[#b8b2a7] border border-[#181614]/10 dark:border-white/10 flex items-center justify-center gap-1.5"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#c82b2b]" />}
                <span>{isMuted ? "Sound Off" : "Sound On"}</span>
              </button>
            </div>

            <div className="text-[10px] font-mono text-center text-[#827b73] dark:text-[#78736a] pt-1">
              NIHAR HARDE • WABI-SABI SYSTEM 2026
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
