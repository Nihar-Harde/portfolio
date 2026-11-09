"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const HeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Subtle mouse inertia parallax for the Ukiyo-e scenery
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.matchMedia("(pointer: coarse)").matches)
    ) {
      return;
    }

    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * -18;
      targetY = (e.clientY / innerHeight - 0.5) * -10;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    const animateParallax = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      setMouseOffset({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animateParallax);
    };

    animateParallax();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Ambient Japanese Momiji (Autumn maple) & ink fleck particles drifting gently
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    interface LeafParticle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      color: string;
      rotation: number;
      rotSpeed: number;
      swayOffset: number;
      swaySpeed: number;
    }

    const particles: LeafParticle[] = [];
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const count = isMobile ? 14 : 30;
    const colors = [
      "#c82b2b", // Lacquer vermilion
      "#a81c1c", // Deep maple crimson
      "#c59b48", // Kintsugi gold
      "#524d47", // Charcoal sumi ink
      "#b83227", // Autumn red
    ];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 4 + 2,
        speedY: Math.random() * 0.5 + 0.25,
        speedX: Math.random() * 0.4 + 0.15,
        opacity: Math.random() * 0.65 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        swayOffset: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.01,
      });
    }

    let time = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(time + p.swayOffset) * 0.35;
        p.rotation += p.rotSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) {
          p.x = -20;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        // Draw delicate stylized Momiji petal/leaf
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 1.6, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* High-Definition 2K Master Artwork (Mt. Fuji, Hinomaru Sun, Pagoda, Crimson Maples) */}
      <div
        className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0) scale(1.02)`,
        }}
      >
        <picture className="block w-full h-full">
          <source srcSet="/wabi-sabi-hero.avif" type="image/avif" />
          <source srcSet="/wabi-sabi-hero.webp" type="image/webp" />
          <img
            src="/wabi-sabi-hero.jpg"
            alt="Traditional Japanese Ukiyo-e Scenery with Mount Fuji, Red Hinomaru Sun, Mountain Pagoda and Crimson Maples"
            className="w-full h-full object-cover object-right-top md:object-center opacity-95 select-none"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>

      {/* Atmospheric Seamless Washi Parchment Gradient Bridges */}
      {/* Top subtle vignette */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#f6f3eb]/75 via-[#f6f3eb]/30 to-transparent z-[2]" />
      
      {/* Bottom seamless transition into Washi paper flow */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#f6f3eb] via-[#f6f3eb]/65 to-transparent z-[2]" />

      {/* Left Edge Washi Tint for text clarity without obscuring the artwork */}
      <div className="absolute inset-y-0 left-0 w-full sm:w-8/12 lg:w-5/12 bg-gradient-to-r from-[#f6f3eb]/95 via-[#f6f3eb]/80 sm:via-[#f6f3eb]/75 to-[#f6f3eb]/35 sm:to-transparent z-[2]" />

      {/* Mobile/Tablet Portrait Ambient Diffuser so Mt. Fuji, sun, and pagoda remain visible while text has optimal contrast */}
      <div className="absolute inset-0 bg-[#f6f3eb]/45 sm:bg-[#f6f3eb]/20 md:hidden z-[2] pointer-events-none" />

      {/* Floating Autumn Maple & Ink Fleck Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
      />
    </div>
  );
};
