"use client";

import React, { useState } from "react";
import { DOSSIER } from "@/data/dossier";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { CredentialsVectorBackdrop } from "@/components/ui/VectorBackdrops";
import { zenAudio } from "@/lib/audio";
import { GraduationCap, Award, BookOpen, Trophy, Sparkles, CheckCircle2 } from "lucide-react";

export const CredentialsSection: React.FC = () => {
  const { education, certifications, honors } = DOSSIER;
  const [activeKanjiIndex, setActiveKanjiIndex] = useState(0);

  const kanjiCards = [
    { kanji: "知能", reading: "ちのう (Chinō)", meaning: "Intelligence / AI", context: "Applied to autonomous agent loops & deep neural networks." },
    { kanji: "視覚", reading: "しかく (Shikaku)", meaning: "Vision / Perception", context: "Real-time edge pose estimation & spatial keypoints." },
    { kanji: "特許", reading: "とっきょ (Tokkyo)", meaning: "Patent / Invention", context: "In-flight GPU tensor logit interception & EDLD damping." },
    { kanji: "創発", reading: "そうはつ (Sōhatsu)", meaning: "Emergence", context: "Complex multi-agent collaborative behavior & orchestration." },
  ];

  return (
    <section
      id="credentials"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-20 bg-[#f6f3eb] text-[#181614] overflow-hidden"
    >
      {/* Sumi Divider Line */}
      <div className="sumi-divider absolute top-0 left-0" />

      {/* Vector Art Backdrop: Bamboo Grove & Seigaiha Waves */}
      <div className="vector-bg-decor absolute inset-0 pointer-events-none overflow-hidden z-0">
        <CredentialsVectorBackdrop />
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-japanese text-[#c82b2b] tracking-wider font-semibold">
            「経歴・資格」
          </span>
          <span className="h-[1px] w-8 bg-[#c82b2b]/40" />
          <span className="text-xs font-mono text-[#524d47] tracking-widest uppercase">
            Academic Honors &amp; Linguistic Distinction
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#181614] font-display">
          Education, Credentials and Honors
        </h2>
        <p className="mt-2 text-base text-[#524d47] max-w-2xl leading-relaxed">
          Formal academic foundation at Ramdeobaba University, autonomous aerial AI research at IIT Hyderabad TiHAN, and certified Japanese language capability.
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column: Education & IIT Hyderabad Certification */}
        <div className="space-y-6 lg:col-span-1">
          {/* Degree Card */}
          <SpotlightCard
            spotlightColor="rgba(200, 43, 43, 0.06)"
            className="bg-[#fbf9f4]/95 border border-[#181614]/12 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-[#c82b2b]" />
              <span className="text-xs font-mono text-[#c82b2b] uppercase font-medium">
                Academic Degree
              </span>
            </div>
            <h3 className="text-lg font-semibold text-[#181614] tracking-tight mb-1 font-display">
              {education.institution}
            </h3>
            <p className="text-sm text-[#8a681c] font-mono mb-2">
              {education.degree} ({education.specialization})
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-[#524d47] mb-4">
              <span>{education.period}</span>
              <span>•</span>
              <span className="text-[#181614] font-semibold">
                CGPA: {education.gpa} / {education.gpaScale}
              </span>
            </div>
            <p className="text-xs text-[#827b73] leading-relaxed">
              {education.location} • Key coursework in Deep Learning, Tensor Algebra, Distributed Systems, and Advanced Computer Vision.
            </p>
          </SpotlightCard>

          {/* TiHAN IIT Hyderabad Card & Professional Credentials */}
          {certifications.map((cert) => (
            <SpotlightCard
              key={cert.id}
              spotlightColor="rgba(197, 155, 72, 0.08)"
              className="bg-[#fbf9f4]/95 border border-[#181614]/12 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-[#c59b48]" />
                <span className="text-xs font-mono text-[#8a681c] uppercase font-medium">
                  {cert.badgeText}
                </span>
              </div>
              <h3 className="text-base font-semibold text-[#181614] tracking-tight mb-1 font-display">
                {cert.title}
              </h3>
              <p className="text-xs font-mono text-[#524d47] mb-3">
                {cert.issuer} • {cert.date}
              </p>
              <p className="text-xs text-[#524d47] leading-relaxed mb-4">
                {cert.credentialDetails}
              </p>
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#827b73]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2e7d32]" />
                <span>Verified Credential</span>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Middle Column: Competitive Honors & Hackathons */}
        <div className="space-y-6 lg:col-span-1">
          <SpotlightCard
            spotlightColor="rgba(200, 43, 43, 0.06)"
            className="bg-[#fbf9f4]/95 border border-[#181614]/12 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-[#c82b2b]" />
              <span className="text-xs font-mono text-[#c82b2b] uppercase font-medium">
                National Honors &amp; Hackathons
              </span>
            </div>

            <div className="space-y-6">
              {honors.map((honor, idx) => (
                <div
                  key={idx}
                  className="pb-5 last:pb-0 border-b last:border-b-0 border-[#181614]/10"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-[#827b73] mb-1">
                    <span className="text-[#8a681c] font-medium">{honor.organization}</span>
                    <span>{honor.date}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#181614] mb-1 font-display">
                    {honor.title}
                  </h4>
                  <p className="text-xs text-[#524d47] leading-relaxed">
                    {honor.description}
                  </p>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>

        {/* Right Column: Japanese Distinction & Interactive Kanji Matrix */}
        <div className="space-y-6 lg:col-span-1">
          {/* JLPT N4 Distinction Card */}
          <SpotlightCard
            spotlightColor="rgba(200, 43, 43, 0.08)"
            className="bg-[#fbf9f4]/95 border border-[#c82b2b]/20 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#c82b2b]" />
                <span className="text-xs font-mono text-[#c82b2b] uppercase font-medium">
                  Language Certification
                </span>
              </div>
              <span className="hanko-stamp px-2 py-0.5 text-xs">合格</span>
            </div>

            <h3 className="text-lg font-semibold text-[#181614] tracking-tight mb-1 font-display">
              日本語能力試験 N4 (JLPT N4)
            </h3>
            <p className="text-xs font-mono text-[#827b73] mb-4">
              The Japan Foundation &amp; JEES • Certified
            </p>

            <p className="text-xs text-[#524d47] leading-relaxed mb-4">
              Competent in everyday conversational Japanese, technical software documentation parsing, and kanji vocabulary across engineering domains.
            </p>

            <div className="p-3 rounded-md bg-[#ede8de]/60 border border-[#181614]/10 text-center">
              <span className="text-xs font-mono text-[#524d47] block mb-1">
                JAPANESE WORKING PROFICIENCY
              </span>
              <span className="font-japanese font-semibold text-sm text-[#c82b2b]">
                技術文書理解・日常会話可能
              </span>
            </div>
          </SpotlightCard>

          {/* Interactive Kanji Concept Inspector */}
          <div className="p-6 rounded-xl bg-[#fbf9f4]/95 border border-[#181614]/12 shadow-sm washi-card">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#827b73] uppercase tracking-wider">
                Japanese Philosophy &amp; Concept Matrix
              </span>
              <Sparkles className="w-4 h-4 text-[#c59b48]" />
            </div>

            {/* Kanji Selector Tabs */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {kanjiCards.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    zenAudio.playWoodblock();
                    setActiveKanjiIndex(idx);
                  }}
                  className={`py-2 rounded-md font-japanese font-bold text-base transition-all duration-200 border ${
                    activeKanjiIndex === idx
                      ? "bg-[#c82b2b] text-white border-[#c82b2b] shadow-sm"
                      : "bg-[#ede8de]/50 text-[#181614] border-[#181614]/10 hover:border-[#c82b2b]/30"
                  }`}
                >
                  {item.kanji}
                </button>
              ))}
            </div>

            {/* Active Kanji Details */}
            <div className="p-4 rounded-lg bg-[#ede8de]/60 border border-[#181614]/10">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-japanese text-xl font-bold text-[#c82b2b]">
                  {kanjiCards[activeKanjiIndex].kanji}
                </span>
                <span className="text-xs font-mono text-[#524d47]">
                  {kanjiCards[activeKanjiIndex].reading}
                </span>
              </div>
              <div className="text-xs font-semibold text-[#181614] mb-2 font-display">
                {kanjiCards[activeKanjiIndex].meaning}
              </div>
              <p className="text-xs text-[#524d47] leading-relaxed">
                {kanjiCards[activeKanjiIndex].context}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
