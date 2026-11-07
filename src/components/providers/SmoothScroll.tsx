"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
        setScrollPercent(progress);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const lenis = new Lenis({
      duration: 0.95,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // Modal scroll control: Pause Lenis when modal is open, resume when closed
    const handleStopLenis = () => {
      lenis.stop();
    };
    const handleStartLenis = () => {
      lenis.start();
    };

    window.addEventListener("lenis:stop", handleStopLenis);
    window.addEventListener("lenis:start", handleStartLenis);

    // =========================================================================
    // COMPLEX GSAP SCROLLTRIGGER ORCHESTRATION ACROSS SECTIONS
    // =========================================================================
    const ctx = gsap.context(() => {
      // 1. Deep Parallax for Section Vector & Art Backdrops
      const sections = document.querySelectorAll<HTMLElement>("section, footer");
      sections.forEach((sec) => {
        const vectorBg = sec.querySelector(".vector-bg-decor");
        if (vectorBg) {
          gsap.fromTo(
            vectorBg,
            { y: -80, opacity: 0.6 },
            {
              y: 80,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: sec,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        }

        // 2. Animated Sumi Divider Seam Drawing on Entering Viewport
        const divider = sec.querySelector(".sumi-divider");
        if (divider) {
          gsap.fromTo(
            divider,
            { scaleX: 0, transformOrigin: "left center", opacity: 0.3 },
            {
              scaleX: 1,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 95%",
                end: "top 75%",
                scrub: 0.5,
              },
            }
          );
        }

        // 3. Crisp Section Header Reveal
        const heading = sec.querySelector("h2");
        const badge = sec.querySelector("div.flex.items-center.gap-3.mb-3");
        if (heading) {
          gsap.fromTo(
            heading,
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 92%",
                once: true,
              },
            }
          );
        }
        if (badge) {
          gsap.fromTo(
            badge,
            { x: -16, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.45,
              ease: "power2.out",
              scrollTrigger: {
                trigger: badge,
                start: "top 94%",
                once: true,
              },
            }
          );
        }

        // 4. Per-Card Crisp Elevation Reveal as each card enters the viewport
        const cards = sec.querySelectorAll<HTMLElement>(".spotlight-card, .washi-card");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 22, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                once: true,
              },
            }
          );
        });
      });

      // Synchronize trigger coordinates on initial load
      ScrollTrigger.refresh();
    });

    const handleThemeChange = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 60);
    };
    window.addEventListener("portfolio:theme-change", handleThemeChange);

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("lenis:stop", handleStopLenis);
      window.removeEventListener("lenis:start", handleStartLenis);
      window.removeEventListener("portfolio:theme-change", handleThemeChange);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Top Kinetic Wabi-Sabi Lacquer Vermilion & Kintsugi Gold Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none overflow-visible">
        {/* Track backdrop */}
        <div className="absolute inset-0 bg-[#181614]/5 dark:bg-white/5" />
        
        {/* Vermilion Ink-Brush Bar with Organic Gradient */}
        <div
          id="scroll-progress-bar"
          className="h-full bg-gradient-to-r from-[#8a1515] via-[#c82b2b] to-[#e07a3c] shadow-[0_1px_12px_rgba(200,43,43,0.6)] origin-left transition-transform duration-75 will-change-transform relative"
          style={{ transform: `scaleX(${scrollPercent})` }}
        />

        {/* Leading Calligraphy Brush Tip & Kintsugi Spark */}
        {scrollPercent > 0.005 && (
          <div
            className="absolute top-1/2 -translate-y-1/2 transition-transform duration-75 will-change-transform flex items-center justify-center pointer-events-none"
            style={{ left: `${scrollPercent * 100}%` }}
          >
            {/* Ink Bloom Halo */}
            <div className="absolute w-5 h-5 rounded-full bg-[#c82b2b]/30 blur-sm animate-pulse" />
            {/* Brush Tip Droplet */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#c82b2b] border border-[#ffd700] shadow-[0_0_8px_rgba(200,43,43,0.8)]" />
          </div>
        )}
      </div>
      {children}
    </>
  );
};
