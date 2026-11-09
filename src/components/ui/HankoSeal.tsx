import React from "react";

interface HankoSealProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

const FONT_BASE64 = `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`;

/**
 * Authentic Japanese Hanko Seal Component (Option A - Hakubun Square)
 * Embedded vector artwork with embedded Tsukiji Mincho calligraphy,
 * weathered stone wabi-sabi borders, and mineral cinnabar vermilion ink.
 */
export const HankoSeal: React.FC<HankoSealProps> = ({
  className = "w-9 h-9 sm:w-10 sm:h-10",
  size,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      aria-label="Nihar Harde Hanko Seal (晴)"
      {...props}
    >
      <defs>
        <style>{`
          @font-face {
            font-family: 'HankoSealFont';
            src: url('data:font/truetype;charset=utf-8;base64,${FONT_BASE64}') format('truetype');
            font-weight: 800;
            font-style: normal;
          }
        `}</style>
        <radialGradient id="vermilionSealGrad" cx="42%" cy="38%" r="68%">
          <stop offset="0%" stopColor="#d63030" />
          <stop offset="55%" stopColor="#b81e1e" />
          <stop offset="100%" stopColor="#8d1212" />
        </radialGradient>
        <filter id="wabiSabiSeal" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.045"
            numOctaves={3}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={3}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>

      <g filter="url(#wabiSabiSeal)">
        {/* Solid Vermilion Stone Block with Hand-Chipped Wabi-Sabi Corners */}
        <rect
          x="15"
          y="15"
          width="170"
          height="170"
          rx="16"
          fill="url(#vermilionSealGrad)"
        />

        {/* Authentic Stone Carving Micro-Chips */}
        <path d="M 15 42 Q 20 38 15 34 Z" fill="#faf7f2" />
        <path d="M 185 68 Q 180 72 185 76 Z" fill="#faf7f2" />
        <path d="M 94 185 Q 98 180 102 185 Z" fill="#faf7f2" />
        <path d="M 15 142 Q 19 146 15 150 Z" fill="#faf7f2" />
        <path d="M 148 15 Q 152 20 156 15 Z" fill="#faf7f2" />

        {/* Pure Calligraphy: 晴 (Hakubun Intaglio / White Relief) */}
        <text
          x="100"
          y="145"
          fontFamily="'HankoSealFont', 'Shippori Mincho', serif"
          fontSize="124"
          fontWeight="800"
          fill="#faf7f2"
          textAnchor="middle"
        >
          晴
        </text>
      </g>

      {/* Authentic Cinnabar Shuniku Micro-Spatter Particles */}
      <circle cx="28" cy="168" r="1.5" fill="#faf7f2" opacity="0.6" />
      <circle cx="172" cy="35" r="1.3" fill="#faf7f2" opacity="0.5" />
      <circle cx="166" cy="162" r="1.8" fill="#faf7f2" opacity="0.7" />
    </svg>
  );
};
