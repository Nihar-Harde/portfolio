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
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.05,
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
                start: "top 85%",
                end: "top 60%",
                scrub: 0.8,
              },
            }
          );
        }

        // 3. Dramatic Section Header Reveal
        const heading = sec.querySelector("h2");
        const badge = sec.querySelector("div.flex.items-center.gap-3.mb-3");
        if (heading) {
          gsap.fromTo(
            heading,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
        if (badge) {
          gsap.fromTo(
            badge,
            { x: -25, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: badge,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // 4. Staggered Elevation Reveal for Cards
        const cards = sec.querySelectorAll(".spotlight-card, .washi-card");
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { y: 45, opacity: 0, scale: 0.985 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.85,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("lenis:stop", handleStopLenis);
      window.removeEventListener("lenis:start", handleStartLenis);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Top Kinetic Wabi-Sabi Lacquer Vermilion & Kintsugi Gold Scroll Progress Bar */}
      <div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] pointer-events-none bg-gradient-to-r from-[#c82b2b] via-[#c59b48] to-[#181614] shadow-[0_1px_8px_rgba(200,43,43,0.5)] origin-left transition-transform duration-75"
        style={{ transform: `scaleX(${scrollPercent})` }}
      />
      {children}
    </>
  );
};
