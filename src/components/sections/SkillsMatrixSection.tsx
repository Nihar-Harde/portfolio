"use client";

import React, { useState } from "react";
import { DOSSIER } from "@/data/dossier";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SkillsVectorBackdrop } from "@/components/ui/VectorBackdrops";
import { zenAudio } from "@/lib/audio";
import { Code2, Bot, ScanEye, Server, Check } from "lucide-react";

export const SkillsMatrixSection: React.FC = () => {
  const { skillsMatrix } = DOSSIER;
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const getDomainIcon = (kanji: string) => {
    switch (kanji) {
      case "「言語」":
        return <Code2 className="w-4 h-4 text-[#c82b2b]" />;
      case "「自律型AI」":
        return <Bot className="w-4 h-4 text-[#c59b48]" />;
      case "「画像・深層学習」":
        return <ScanEye className="w-4 h-4 text-[#c82b2b]" />;
      case "「基盤工学」":
        return <Server className="w-4 h-4 text-[#2e7d32]" />;
      default:
        return <Code2 className="w-4 h-4 text-[#181614]" />;
    }
  };

  return (
    <section
      id="skills-matrix"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-20 bg-[#f6f3eb] text-[#181614] overflow-hidden"
    >
      {/* Sumi Divider Line */}
      <div className="sumi-divider absolute top-0 left-0" />

      {/* Vector Art Backdrop: Solitary Cliff Pine (Matsu) & Kamon Roundels */}
      <div className="vector-bg-decor absolute inset-0 pointer-events-none overflow-hidden z-0">
        <SkillsVectorBackdrop />
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-japanese text-[#c82b2b] tracking-wider font-semibold">
            「技術体系」
          </span>
          <span className="h-[1px] w-8 bg-[#c82b2b]/40" />
          <span className="text-xs font-mono text-[#524d47] tracking-widest uppercase">
            Engineering Taxonomy &amp; Proficiencies
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#181614] font-display">
          Technical Competencies &amp; Craft
        </h2>
        <p className="mt-2 text-base text-[#524d47] max-w-2xl leading-relaxed">
          Four specialized technical domains spanning foundational low-level systems to autonomous AI pipelines and hardware-accelerated computer vision.
        </p>
      </div>

      {/* 4 Domain Cards Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsMatrix.map((domain, idx) => (
          <SpotlightCard
            key={idx}
            spotlightColor="rgba(200, 43, 43, 0.06)"
            className="flex flex-col justify-between bg-[#fbf9f4]/95 border border-[#181614]/12 shadow-sm"
          >
            <div>
              {/* Domain Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-japanese text-sm text-[#c82b2b] font-semibold">
                  {domain.domainKanji}
                </span>
                <div className="p-2 rounded-md bg-[#ede8de]/60 border border-[#181614]/10">
                  {getDomainIcon(domain.domainKanji)}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-[#181614] tracking-tight mb-1 font-display">
                {domain.domainTitle}
              </h3>
              <p className="text-xs font-mono text-[#827b73] mb-4">
                {domain.description}
              </p>

              {/* Skills List */}
              <div className="space-y-2 mb-6">
                {domain.skills.map((skill, sIdx) => {
                  const isSelected = activeSkill === skill.name;
                  return (
                    <button
                      key={sIdx}
                      onClick={() => {
                        zenAudio.playWoodblock();
                        setActiveSkill(isSelected ? null : skill.name);
                      }}
                      className={`w-full text-left p-2.5 rounded-md text-xs font-mono transition-all duration-200 flex items-center justify-between border ${
                        isSelected
                          ? "bg-[#c82b2b]/10 border-[#c82b2b]/40 text-[#c82b2b] font-medium"
                          : "bg-[#ede8de]/40 border-[#181614]/8 text-[#524d47] hover:bg-[#ede8de] hover:text-[#181614]"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c82b2b]" />
                        )}
                        <span>{skill.name}</span>
                      </span>
                      <span className="text-[10px] text-[#827b73]">{skill.level}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actuation Focus Footnote */}
            <div className="pt-4 border-t border-[#181614]/10 text-[11px] font-mono text-[#827b73]">
              <span>VERIFIED PRODUCTION LEVEL</span>
            </div>
          </SpotlightCard>
        ))}
      </div>

      {/* Interactive Active Skill Inspector Drawer */}
      {activeSkill && (
        <div className="relative z-10 max-w-7xl mx-auto mt-6 p-4 rounded-lg bg-[#ede8de]/70 border border-[#181614]/12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="hanko-stamp px-2 py-0.5 text-xs">特技</span>
            <span className="text-xs font-mono text-[#181614]">
              Active Skill Selected: <strong className="text-[#c82b2b]">{activeSkill}</strong>
            </span>
          </div>
          <button
            onClick={() => setActiveSkill(null)}
            className="text-xs font-mono text-[#827b73] hover:text-[#181614]"
          >
            Clear Selection
          </button>
        </div>
      )}
    </section>
  );
};
