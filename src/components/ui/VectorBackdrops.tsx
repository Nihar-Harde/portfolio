"use client";

import React from "react";
import Image from "next/image";

/**
 * Ukiyo-e Kasumi Mist Ribbons, Mountain Summits & Torii Eaves
 * For Research & Patent Section
 */
export const ResearchVectorBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Distant Misty Mountain Ink Wash Silhouette */}
      <svg
        className="absolute top-12 left-0 w-full h-[380px] text-[#181614] opacity-[0.16]"
        viewBox="0 0 1440 380"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,190 C200,110 360,250 560,130 C740,40 920,200 1100,100 C1260,30 1380,140 1440,110 L1440,380 L0,380 Z"
          fill="currentColor"
        />
        <path
          d="M0,240 C240,170 480,270 720,190 C960,130 1200,230 1440,170 L1440,380 L0,380 Z"
          fill="#c82b2b"
          opacity="0.22"
        />
      </svg>

      {/* Subtle Rising Sun Backdrop Arch */}
      <div className="absolute -top-24 right-1/4 w-[520px] h-[520px] rounded-full bg-gradient-to-b from-[#c82b2b]/10 to-transparent pointer-events-none" />

      {/* Vertical Japanese Calligraphy Scroll on Left Flank */}
      <div className="hidden lg:flex flex-col items-center gap-4 absolute top-24 left-6 opacity-[0.35] text-[#181614]">
        <div className="w-[1.5px] h-12 bg-[#c82b2b]" />
        <span className="vertical-kanji text-xl font-bold font-japanese tracking-[0.45em]">
          論理と創発
        </span>
        <span className="text-[10px] font-mono tracking-widest text-[#524d47] [writing-mode:vertical-rl]">
          LOGIC &amp; EMERGENCE
        </span>
        <div className="w-[1.5px] h-16 bg-[#181614]/30" />
      </div>

      {/* Floating Kasumi Mist Ribbon SVG */}
      <svg
        className="absolute top-10 left-1/3 w-[680px] h-[360px] text-[#181614] opacity-[0.16]"
        viewBox="0 0 600 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 50 150 C 100 100, 180 100, 240 140 C 290 90, 380 90, 440 130 C 500 80, 580 90, 600 150 C 560 210, 480 200, 430 170 C 370 210, 280 210, 230 170 C 180 210, 100 200, 50 150 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 4"
        />
        <path
          d="M 20 180 C 70 140, 150 140, 200 170 C 250 130, 330 130, 380 160 C 430 120, 510 130, 540 180"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M 80 120 C 120 80, 190 80, 240 110 C 280 70, 350 70, 400 100"
          stroke="#c82b2b"
          strokeWidth="1.6"
          opacity="0.55"
        />
      </svg>

      {/* Right Shore Torii Gate & Circuit Trace Lattice */}
      <svg
        className="absolute bottom-4 right-4 w-[480px] h-[520px] text-[#181614] opacity-[0.15]"
        viewBox="0 0 420 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 60 120 L 360 120" stroke="currentColor" strokeWidth="3" />
        <path d="M 40 90 C 120 75, 300 75, 380 90" stroke="#c82b2b" strokeWidth="4" opacity="0.75" />
        <path d="M 120 90 L 120 400" stroke="currentColor" strokeWidth="3" />
        <path d="M 300 90 L 300 400" stroke="currentColor" strokeWidth="3" />
        <path d="M 80 160 L 340 160" stroke="#c59b48" strokeWidth="2.5" opacity="0.65" />
        <rect x="200" y="90" width="20" height="70" stroke="currentColor" strokeWidth="2" fill="none" />

        <circle cx="120" cy="220" r="5" fill="#c82b2b" />
        <circle cx="300" cy="220" r="5" fill="#c82b2b" />
        <circle cx="210" cy="280" r="6" fill="#181614" />
        <line x1="120" y1="220" x2="210" y2="280" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="300" y1="220" x2="210" y2="280" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="210" y1="280" x2="210" y2="400" stroke="#c82b2b" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

/**
 * Traditional Cliff Pine (Matsu), Kumiko Asanoha Lattice & Pagoda Contours
 * For Projects Bento Section
 */
export const ProjectsVectorBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Solitary Cliff Pine Artwork Watermark on the Right */}
      <div className="absolute -top-6 right-0 w-[480px] sm:w-[620px] h-[820px] opacity-[0.25] sm:opacity-[0.32] mix-blend-multiply pointer-events-none">
        <Image
          src="/wabi-sabi-pine.jpg"
          alt="Traditional Japanese Solitary Cliff Pine (Matsu) Ink Painting"
          fill
          unoptimized
          className="object-contain object-right-top"
        />
      </div>

      {/* Vertical Japanese Calligraphy Scroll on Left Flank */}
      <div className="hidden lg:flex flex-col items-center gap-4 absolute top-24 left-6 opacity-[0.35] text-[#181614]">
        <div className="w-[1.5px] h-12 bg-[#c82b2b]" />
        <span className="vertical-kanji text-xl font-bold font-japanese tracking-[0.45em]">
          旗艦之譜
        </span>
        <span className="text-[10px] font-mono tracking-widest text-[#524d47] [writing-mode:vertical-rl]">
          CHRONICLE OF FLAGSHIPS
        </span>
        <div className="w-[1.5px] h-16 bg-[#181614]/30" />
      </div>

      {/* Traditional Asanoha Hemp Leaf Geometric Wireframe Pattern */}
      <svg
        className="absolute top-16 left-1/4 w-[560px] h-[560px] text-[#181614] opacity-[0.14]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.6">
          <polygon points="250,50 350,110 350,230 250,290 150,230 150,110" />
          <line x1="250" y1="50" x2="250" y2="290" />
          <line x1="350" y1="110" x2="150" y2="230" />
          <line x1="150" y1="110" x2="350" y2="230" />
          <line x1="250" y1="170" x2="300" y2="80" stroke="#c82b2b" strokeWidth="1.4" opacity="0.7" />
          <line x1="250" y1="170" x2="350" y2="170" stroke="#c82b2b" strokeWidth="1.4" opacity="0.7" />
          <line x1="250" y1="170" x2="300" y2="260" stroke="#c82b2b" strokeWidth="1.4" opacity="0.7" />
          <line x1="250" y1="170" x2="200" y2="260" stroke="#c82b2b" strokeWidth="1.4" opacity="0.7" />
          <line x1="250" y1="170" x2="150" y2="170" stroke="#c82b2b" strokeWidth="1.4" opacity="0.7" />
          <line x1="250" y1="170" x2="200" y2="80" stroke="#c82b2b" strokeWidth="1.4" opacity="0.7" />

          {/* Secondary Interlocking Hexagon */}
          <polygon points="420,150 490,190 490,270 420,310 350,270 350,190" stroke="#c59b48" strokeWidth="1.4" opacity="0.65" />
        </g>
      </svg>

      {/* Left Bottom Pagoda Silhouette Outline */}
      <svg
        className="absolute bottom-0 -left-6 w-[420px] h-[500px] text-[#181614] opacity-[0.15]"
        viewBox="0 0 380 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 60 380 C 110 370, 190 350, 320 380 L 300 400 L 80 400 Z" stroke="currentColor" strokeWidth="2" />
        <path d="M 90 300 C 130 290, 190 275, 290 300 L 275 320 L 105 320 Z" stroke="currentColor" strokeWidth="2" />
        <path d="M 120 220 C 150 210, 190 200, 260 220 L 250 240 L 130 240 Z" stroke="#c82b2b" strokeWidth="2" opacity="0.6" />
        <line x1="190" y1="200" x2="190" y2="100" stroke="currentColor" strokeWidth="3" />
        <circle cx="190" cy="115" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="190" cy="135" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="190" cy="155" r="12" stroke="currentColor" strokeWidth="2" />
        <circle cx="190" cy="175" r="14" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  );
};

/**
 * Bamboo Grove Ink Wash Painting & Zen Ensō Roundels
 * For Skills Matrix Section
 */
export const SkillsVectorBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Bamboo Grove Ink Painting Artwork Watermark on Left Flank */}
      <div className="absolute -top-6 -left-6 w-[450px] sm:w-[580px] h-[880px] opacity-[0.28] sm:opacity-[0.35] mix-blend-multiply pointer-events-none">
        <Image
          src="/wabi-sabi-bamboo.jpg"
          alt="Traditional Japanese Bamboo Grove Ink Painting"
          fill
          unoptimized
          className="object-contain object-left-top"
        />
      </div>

      {/* Vertical Japanese Calligraphy Scroll on Right Flank */}
      <div className="hidden lg:flex flex-col items-center gap-4 absolute top-24 right-6 opacity-[0.35] text-[#181614]">
        <div className="w-[1.5px] h-12 bg-[#c82b2b]" />
        <span className="vertical-kanji text-xl font-bold font-japanese tracking-[0.45em]">
          技芸無双
        </span>
        <span className="text-[10px] font-mono tracking-widest text-[#524d47] [writing-mode:vertical-rl]">
          UNRIVALED CRAFT
        </span>
        <div className="w-[1.5px] h-16 bg-[#181614]/30" />
      </div>

      {/* Large Zen Ensō Brush Circle in Center Background */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] text-[#181614] opacity-[0.09]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="14" strokeDasharray="380 40" strokeLinecap="round" />
        <circle cx="100" cy="100" r="68" stroke="#c82b2b" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
      </svg>
    </div>
  );
};

/**
 * Japanese Sand Wave Garden (Karesansui) & Traditional Seal Crests
 * For Credentials Section
 */
export const CredentialsVectorBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Vertical Japanese Calligraphy Scroll on Left Flank */}
      <div className="hidden lg:flex flex-col items-center gap-4 absolute top-24 left-6 opacity-[0.35] text-[#181614]">
        <div className="w-[1.5px] h-12 bg-[#c82b2b]" />
        <span className="vertical-kanji text-xl font-bold font-japanese tracking-[0.45em]">
          求道之証
        </span>
        <span className="text-[10px] font-mono tracking-widest text-[#524d47] [writing-mode:vertical-rl]">
          PATH OF SCHOLARSHIP
        </span>
        <div className="w-[1.5px] h-16 bg-[#181614]/30" />
      </div>

      {/* Concentric Seigaiha Waves on the Right Bottom */}
      <svg
        className="absolute bottom-4 right-0 w-[540px] h-[360px] text-[#181614] opacity-[0.16]"
        viewBox="0 0 400 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.8">
          {/* Row 1 */}
          <path d="M 50 100 A 40 40 0 0 1 130 100" />
          <path d="M 60 100 A 30 30 0 0 1 120 100" />
          <path d="M 70 100 A 20 20 0 0 1 110 100" />

          <path d="M 130 100 A 40 40 0 0 1 210 100" />
          <path d="M 140 100 A 30 30 0 0 1 200 100" />
          <path d="M 150 100 A 20 20 0 0 1 190 100" />

          <path d="M 210 100 A 40 40 0 0 1 290 100" />
          <path d="M 220 100 A 30 30 0 0 1 280 100" />
          <path d="M 230 100 A 20 20 0 0 1 270 100" />

          {/* Row 2 Interlaced with Vermilion Accent */}
          <path d="M 90 150 A 40 40 0 0 1 170 150" stroke="#c82b2b" opacity="0.65" />
          <path d="M 100 150 A 30 30 0 0 1 160 150" stroke="#c82b2b" opacity="0.65" />
          <path d="M 110 150 A 20 20 0 0 1 150 150" stroke="#c82b2b" opacity="0.65" />

          <path d="M 170 150 A 40 40 0 0 1 250 150" />
          <path d="M 180 150 A 30 30 0 0 1 240 150" />
          <path d="M 190 150 A 20 20 0 0 1 230 150" />
        </g>
      </svg>
    </div>
  );
};
