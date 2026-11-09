"use client";

import React from "react";
import Image from "next/image";

/**
 * Ukiyo-e Kasumi Mist Ribbons, Mountain Summits, Torii Eaves & Drifting Mist Layers
 * For Research & Patent Section
 */
export const ResearchVectorBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Distant Misty Mountain Ink Wash Silhouette */}
      <svg
        className="absolute top-12 left-0 w-full h-[220px] sm:h-[380px] text-[#181614] opacity-[0.14] sm:opacity-[0.22]"
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
          opacity="0.28"
        />
      </svg>

      {/* Subtle Rising Sun Backdrop Arch */}
      <div className="absolute -top-24 right-1/4 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] rounded-full bg-gradient-to-b from-[#c82b2b]/14 via-[#c59b48]/06 to-transparent pointer-events-none" />

      {/* Drifting Kasumi Mist Layer — Top */}
      <svg
        className="absolute top-0 left-0 w-full h-[140px] sm:h-[200px] opacity-[0.12]"
        viewBox="0 0 1440 200"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="360" cy="90" rx="480" ry="60" fill="#181614" opacity="0.08" />
        <ellipse cx="1080" cy="120" rx="400" ry="50" fill="#181614" opacity="0.06" />
        <ellipse cx="720" cy="60" rx="320" ry="35" fill="#c82b2b" opacity="0.05" />
      </svg>

      {/* Vertical Japanese Calligraphy Scroll on Left Flank */}
      <div className="hidden lg:flex flex-col items-center gap-4 absolute top-24 left-6 opacity-[0.40] text-[#181614]">
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
        className="absolute top-10 left-1/4 sm:left-1/3 w-[360px] sm:w-[680px] h-[200px] sm:h-[360px] text-[#181614] opacity-[0.14] sm:opacity-[0.22]"
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
          opacity="0.60"
        />
      </svg>

      {/* Seigaiha Wave Band — Bottom Left */}
      <svg
        className="absolute bottom-16 left-0 w-[300px] sm:w-[500px] h-[120px] sm:h-[200px] text-[#181614] opacity-[0.10] sm:opacity-[0.14]"
        viewBox="0 0 400 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.4">
          <path d="M 0 80 A 40 40 0 0 1 80 80" />
          <path d="M 10 80 A 30 30 0 0 1 70 80" />
          <path d="M 20 80 A 20 20 0 0 1 60 80" />
          <path d="M 80 80 A 40 40 0 0 1 160 80" />
          <path d="M 90 80 A 30 30 0 0 1 150 80" />
          <path d="M 100 80 A 20 20 0 0 1 140 80" />
          <path d="M 160 80 A 40 40 0 0 1 240 80" />
          <path d="M 170 80 A 30 30 0 0 1 230 80" />
          <path d="M 180 80 A 20 20 0 0 1 220 80" />
          <path d="M 240 80 A 40 40 0 0 1 320 80" stroke="#c59b48" opacity="0.5" />
          <path d="M 250 80 A 30 30 0 0 1 310 80" stroke="#c59b48" opacity="0.5" />
          {/* Row 2 offset */}
          <path d="M 40 120 A 40 40 0 0 1 120 120" stroke="#c82b2b" opacity="0.35" />
          <path d="M 50 120 A 30 30 0 0 1 110 120" stroke="#c82b2b" opacity="0.35" />
          <path d="M 120 120 A 40 40 0 0 1 200 120" />
          <path d="M 130 120 A 30 30 0 0 1 190 120" />
        </g>
      </svg>

      {/* Right Shore Torii Gate & Circuit Trace Lattice */}
      <svg
        className="absolute bottom-4 right-4 w-[280px] sm:w-[420px] md:w-[520px] h-[320px] sm:h-[460px] md:h-[560px] text-[#181614] opacity-[0.14] sm:opacity-[0.20]"
        viewBox="0 0 420 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Torii Gate Structure */}
        <path d="M 60 120 L 360 120" stroke="currentColor" strokeWidth="3" />
        <path d="M 40 90 C 120 75, 300 75, 380 90" stroke="#c82b2b" strokeWidth="4" opacity="0.80" />
        <path d="M 120 90 L 120 400" stroke="currentColor" strokeWidth="3" />
        <path d="M 300 90 L 300 400" stroke="currentColor" strokeWidth="3" />
        <path d="M 80 160 L 340 160" stroke="#c59b48" strokeWidth="2.5" opacity="0.70" />
        <rect x="200" y="90" width="20" height="70" stroke="currentColor" strokeWidth="2" fill="none" />

        {/* Circuit Trace Nodes */}
        <circle cx="120" cy="220" r="5" fill="#c82b2b" />
        <circle cx="300" cy="220" r="5" fill="#c82b2b" />
        <circle cx="210" cy="280" r="6" fill="#181614" />
        <line x1="120" y1="220" x2="210" y2="280" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="300" y1="220" x2="210" y2="280" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="210" y1="280" x2="210" y2="400" stroke="#c82b2b" strokeWidth="1.5" />

        {/* Weathered Sumi-e Brush Stroke Texture (NEW) */}
        <path
          d="M 30 420 C 80 415, 140 430, 200 418 C 260 406, 330 425, 400 420"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d="M 50 440 C 120 435, 200 448, 280 438 C 340 430, 380 442, 410 440"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.20"
        />
      </svg>

      {/* Drifting Mist Layer — Mid-Height (NEW) */}
      <svg
        className="absolute top-1/2 left-0 w-full h-[120px] -translate-y-1/2 opacity-[0.08]"
        viewBox="0 0 1440 120"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="400" cy="60" rx="600" ry="40" fill="#181614" />
        <ellipse cx="1100" cy="50" rx="400" ry="30" fill="#c82b2b" opacity="0.4" />
      </svg>
    </div>
  );
};

/**
 * Traditional Cliff Pine (Matsu), Kumiko Asanoha Lattice, Pagoda Contours,
 * Shinto Shrine Torii Silhouettes & Weathered Brush Textures
 * For Projects Bento Section
 */
export const ProjectsVectorBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Solitary Cliff Pine Artwork Watermark on the Right */}
      <div className="absolute -top-6 right-0 w-[280px] sm:w-[480px] md:w-[620px] h-[480px] sm:h-[820px] opacity-[0.20] sm:opacity-[0.38] mix-blend-multiply dark:mix-blend-screen dark:opacity-[0.14] pointer-events-none">
        <picture className="block w-full h-full">
          <source srcSet="/wabi-sabi-pine.avif" type="image/avif" />
          <source srcSet="/wabi-sabi-pine.webp" type="image/webp" />
          <img
            src="/wabi-sabi-pine.jpg"
            alt="Traditional Japanese Solitary Cliff Pine (Matsu) Ink Painting"
            className="w-full h-full object-contain object-right-top"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      {/* Vertical Japanese Calligraphy Scroll on Left Flank */}
      <div className="hidden lg:flex flex-col items-center gap-4 absolute top-24 left-6 opacity-[0.40] text-[#181614]">
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
        className="absolute top-16 left-1/4 w-[300px] sm:w-[560px] h-[300px] sm:h-[560px] text-[#181614] opacity-[0.12] sm:opacity-[0.18]"
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

          {/* Tertiary Asanoha Cell (NEW) */}
          <polygon points="80,300 150,340 150,420 80,460 10,420 10,340" strokeWidth="1.2" opacity="0.45" />
          <line x1="80" y1="300" x2="80" y2="460" strokeWidth="1.0" opacity="0.35" />
          <line x1="150" y1="340" x2="10" y2="420" strokeWidth="1.0" opacity="0.35" />
          <line x1="10" y1="340" x2="150" y2="420" strokeWidth="1.0" opacity="0.35" />
        </g>
      </svg>

      {/* Shinto Shrine Torii Gate Silhouette — Right Side (NEW) */}
      <svg
        className="absolute top-1/3 right-8 w-[260px] h-[320px] text-[#181614] opacity-[0.12]"
        viewBox="0 0 200 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 20 50 C 60 38, 140 38, 180 50" stroke="#c82b2b" strokeWidth="4" strokeLinecap="round" opacity="0.65" />
        <path d="M 30 65 L 170 65" stroke="currentColor" strokeWidth="2.5" />
        <path d="M 60 65 L 60 240" stroke="currentColor" strokeWidth="2.5" />
        <path d="M 140 65 L 140 240" stroke="currentColor" strokeWidth="2.5" />
        <rect x="92" y="50" width="16" height="45" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M 45 95 L 155 95" stroke="#c59b48" strokeWidth="2" opacity="0.55" />
      </svg>

      {/* Kumiko Woodcraft Diamond Pattern — Bottom Center (NEW) */}
      <svg
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[600px] h-[180px] text-[#181614] opacity-[0.10]"
        viewBox="0 0 500 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.2">
          {/* Row of interlocking diamond cells */}
          <polygon points="50,70 100,20 150,70 100,120" />
          <polygon points="150,70 200,20 250,70 200,120" />
          <polygon points="250,70 300,20 350,70 300,120" />
          <polygon points="350,70 400,20 450,70 400,120" />
          {/* Inner cross-bars */}
          <line x1="100" y1="20" x2="100" y2="120" strokeWidth="0.8" opacity="0.5" />
          <line x1="50" y1="70" x2="150" y2="70" strokeWidth="0.8" opacity="0.5" />
          <line x1="200" y1="20" x2="200" y2="120" strokeWidth="0.8" opacity="0.5" />
          <line x1="150" y1="70" x2="250" y2="70" strokeWidth="0.8" opacity="0.5" />
          <line x1="300" y1="20" x2="300" y2="120" strokeWidth="0.8" opacity="0.5" />
          <line x1="250" y1="70" x2="350" y2="70" strokeWidth="0.8" opacity="0.5" />
          <line x1="400" y1="20" x2="400" y2="120" strokeWidth="0.8" opacity="0.5" />
          <line x1="350" y1="70" x2="450" y2="70" strokeWidth="0.8" opacity="0.5" />
        </g>
      </svg>

      {/* Left Bottom Pagoda Silhouette Outline — ENHANCED */}
      <svg
        className="absolute bottom-0 -left-6 w-[420px] h-[500px] text-[#181614] opacity-[0.20]"
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

        {/* Weathered Sumi-e Ground Texture Strokes (NEW) */}
        <path
          d="M 20 420 C 60 415, 130 425, 200 418 C 270 410, 330 422, 370 420"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.25"
        />
        <path
          d="M 40 438 C 100 432, 180 445, 260 436 C 310 430, 350 440, 375 438"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.15"
        />
      </svg>

      {/* Drifting Mist Layer — Lower Third (NEW) */}
      <svg
        className="absolute bottom-1/4 left-0 w-full h-[100px] opacity-[0.07]"
        viewBox="0 0 1440 100"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="500" cy="50" rx="500" ry="35" fill="#181614" />
        <ellipse cx="1000" cy="40" rx="350" ry="25" fill="#c82b2b" opacity="0.3" />
      </svg>
    </div>
  );
};

/**
 * Bamboo Grove Ink Wash Painting, Zen Ensō Roundels,
 * Asanoha Lattice Accents & Drifting Kumo Clouds
 * For Skills Matrix Section
 */
export const SkillsVectorBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Bamboo Grove Ink Painting Artwork Watermark on Left Flank */}
      <div className="absolute -top-6 -left-6 w-[280px] sm:w-[450px] md:w-[580px] h-[520px] sm:h-[880px] opacity-[0.20] sm:opacity-[0.42] mix-blend-multiply dark:mix-blend-screen dark:opacity-[0.14] pointer-events-none">
        <picture className="block w-full h-full">
          <source srcSet="/wabi-sabi-bamboo.avif" type="image/avif" />
          <source srcSet="/wabi-sabi-bamboo.webp" type="image/webp" />
          <img
            src="/wabi-sabi-bamboo.jpg"
            alt="Traditional Japanese Bamboo Grove Ink Painting"
            className="w-full h-full object-contain object-left-top"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      {/* Vertical Japanese Calligraphy Scroll on Right Flank */}
      <div className="hidden lg:flex flex-col items-center gap-4 absolute top-24 right-6 opacity-[0.40] text-[#181614]">
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] md:w-[700px] h-[340px] sm:h-[520px] md:h-[700px] text-[#181614] opacity-[0.10] sm:opacity-[0.13]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="14" strokeDasharray="380 40" strokeLinecap="round" />
        <circle cx="100" cy="100" r="68" stroke="#c82b2b" strokeWidth="2" strokeDasharray="4 4" opacity="0.65" />
      </svg>

      {/* Asanoha Lattice Pattern — Upper Right (NEW) */}
      <svg
        className="absolute top-20 right-16 w-[400px] h-[400px] text-[#181614] opacity-[0.10]"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.2">
          <polygon points="150,20 220,60 220,140 150,180 80,140 80,60" />
          <line x1="150" y1="20" x2="150" y2="180" />
          <line x1="220" y1="60" x2="80" y2="140" />
          <line x1="80" y1="60" x2="220" y2="140" />
          {/* Vermilion inner star lines */}
          <line x1="150" y1="100" x2="185" y2="40" stroke="#c82b2b" strokeWidth="1.0" opacity="0.55" />
          <line x1="150" y1="100" x2="220" y2="100" stroke="#c82b2b" strokeWidth="1.0" opacity="0.55" />
          <line x1="150" y1="100" x2="185" y2="160" stroke="#c82b2b" strokeWidth="1.0" opacity="0.55" />
          <line x1="150" y1="100" x2="115" y2="160" stroke="#c82b2b" strokeWidth="1.0" opacity="0.55" />
          <line x1="150" y1="100" x2="80" y2="100" stroke="#c82b2b" strokeWidth="1.0" opacity="0.55" />
          <line x1="150" y1="100" x2="115" y2="40" stroke="#c82b2b" strokeWidth="1.0" opacity="0.55" />
        </g>
      </svg>

      {/* Drifting Kumo Cloud Wisps — Bottom (NEW) */}
      <svg
        className="absolute bottom-8 left-0 w-full h-[160px] opacity-[0.09]"
        viewBox="0 0 1440 160"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="300" cy="80" rx="400" ry="45" fill="#181614" opacity="0.6" />
        <ellipse cx="900" cy="100" rx="350" ry="35" fill="#181614" opacity="0.4" />
        <ellipse cx="1200" cy="70" rx="280" ry="30" fill="#c82b2b" opacity="0.15" />
      </svg>

      {/* Weathered Sumi-e Brush Horizon — Mid Section (NEW) */}
      <svg
        className="absolute top-2/3 left-0 w-full h-[40px] opacity-[0.08]"
        viewBox="0 0 1440 40"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 20 C 200 12, 400 28, 600 18 C 800 8, 1000 30, 1200 16 C 1320 10, 1400 22, 1440 20"
          stroke="#181614"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 0 30 C 180 24, 360 34, 540 28 C 720 22, 900 36, 1080 26 C 1260 20, 1380 32, 1440 28"
          stroke="#181614"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

/**
 * Japanese Sand Wave Garden (Karesansui), Traditional Seal Crests,
 * Pagoda Contours, Torii Outline & Kumiko Patterns
 * For Credentials Section
 */
export const CredentialsVectorBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Vertical Japanese Calligraphy Scroll on Left Flank */}
      <div className="hidden lg:flex flex-col items-center gap-4 absolute top-24 left-6 opacity-[0.40] text-[#181614]">
        <div className="w-[1.5px] h-12 bg-[#c82b2b]" />
        <span className="vertical-kanji text-xl font-bold font-japanese tracking-[0.45em]">
          求道之証
        </span>
        <span className="text-[10px] font-mono tracking-widest text-[#524d47] [writing-mode:vertical-rl]">
          PATH OF SCHOLARSHIP
        </span>
        <div className="w-[1.5px] h-16 bg-[#181614]/30" />
      </div>

      {/* Traditional Pagoda Silhouette — Upper Right (NEW) */}
      <svg
        className="absolute top-12 right-12 w-[300px] h-[380px] text-[#181614] opacity-[0.12]"
        viewBox="0 0 240 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Five-story pagoda outline */}
        <path d="M 80 280 C 100 272, 140 268, 160 280 L 155 295 L 85 295 Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M 90 230 C 105 224, 135 220, 150 230 L 146 245 L 94 245 Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M 98 185 C 108 180, 132 178, 142 185 L 139 198 L 101 198 Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M 105 145 C 112 140, 128 138, 135 145 L 133 155 L 107 155 Z" stroke="#c82b2b" strokeWidth="1.8" opacity="0.55" />
        <line x1="120" y1="138" x2="120" y2="80" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="120" cy="90" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="120" cy="105" r="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Drifting Mist Layer — Top (NEW) */}
      <svg
        className="absolute top-0 left-0 w-full h-[150px] opacity-[0.08]"
        viewBox="0 0 1440 150"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="500" cy="70" rx="500" ry="50" fill="#181614" opacity="0.5" />
        <ellipse cx="1100" cy="90" rx="350" ry="35" fill="#181614" opacity="0.35" />
      </svg>

      {/* Concentric Seigaiha Waves on the Right Bottom */}
      <svg
        className="absolute bottom-4 right-0 w-[300px] sm:w-[450px] md:w-[600px] h-[220px] sm:h-[300px] md:h-[400px] text-[#181614] opacity-[0.12] sm:opacity-[0.20]"
        viewBox="0 0 450 300"
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

          {/* Row 1 continued (NEW) */}
          <path d="M 290 100 A 40 40 0 0 1 370 100" stroke="#c59b48" opacity="0.50" />
          <path d="M 300 100 A 30 30 0 0 1 360 100" stroke="#c59b48" opacity="0.50" />
          <path d="M 310 100 A 20 20 0 0 1 350 100" stroke="#c59b48" opacity="0.50" />

          {/* Row 2 Interlaced with Vermilion Accent */}
          <path d="M 90 150 A 40 40 0 0 1 170 150" stroke="#c82b2b" opacity="0.65" />
          <path d="M 100 150 A 30 30 0 0 1 160 150" stroke="#c82b2b" opacity="0.65" />
          <path d="M 110 150 A 20 20 0 0 1 150 150" stroke="#c82b2b" opacity="0.65" />

          <path d="M 170 150 A 40 40 0 0 1 250 150" />
          <path d="M 180 150 A 30 30 0 0 1 240 150" />
          <path d="M 190 150 A 20 20 0 0 1 230 150" />

          {/* Row 2 continued (NEW) */}
          <path d="M 250 150 A 40 40 0 0 1 330 150" />
          <path d="M 260 150 A 30 30 0 0 1 320 150" />
          <path d="M 270 150 A 20 20 0 0 1 310 150" />

          {/* Row 3 (NEW) */}
          <path d="M 50 200 A 40 40 0 0 1 130 200" opacity="0.5" />
          <path d="M 60 200 A 30 30 0 0 1 120 200" opacity="0.5" />
          <path d="M 130 200 A 40 40 0 0 1 210 200" stroke="#c82b2b" opacity="0.35" />
          <path d="M 140 200 A 30 30 0 0 1 200 200" stroke="#c82b2b" opacity="0.35" />
          <path d="M 210 200 A 40 40 0 0 1 290 200" opacity="0.4" />
          <path d="M 220 200 A 30 30 0 0 1 280 200" opacity="0.4" />
        </g>
      </svg>

      {/* Small Torii Gate Silhouette — Left Mid (NEW) */}
      <svg
        className="absolute top-1/3 left-12 w-[180px] h-[220px] text-[#181614] opacity-[0.10]"
        viewBox="0 0 140 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 15 35 C 40 25, 100 25, 125 35" stroke="#c82b2b" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
        <path d="M 22 48 L 118 48" stroke="currentColor" strokeWidth="2" />
        <path d="M 42 48 L 42 170" stroke="currentColor" strokeWidth="2" />
        <path d="M 98 48 L 98 170" stroke="currentColor" strokeWidth="2" />
        <path d="M 32 72 L 108 72" stroke="#c59b48" strokeWidth="1.5" opacity="0.45" />
      </svg>

      {/* Weathered Sumi-e Brush Texture — Bottom (NEW) */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[50px] opacity-[0.07]"
        viewBox="0 0 1440 50"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0 25 C 160 15, 320 35, 480 22 C 640 10, 800 38, 960 20 C 1120 8, 1280 32, 1440 25"
          stroke="#181614"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 0 38 C 200 30, 400 44, 600 35 C 800 28, 1000 42, 1200 33 C 1340 28, 1400 38, 1440 36"
          stroke="#181614"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};
