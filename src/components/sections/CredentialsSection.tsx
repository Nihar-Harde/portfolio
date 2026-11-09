"use client";

import React, { useState } from "react";
import { DOSSIER } from "@/data/dossier";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { CredentialsVectorBackdrop } from "@/components/ui/VectorBackdrops";
import { zenAudio } from "@/lib/audio";
import {
  GraduationCap,
  Award,
  BookOpen,
  Trophy,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Compass,
  FileCheck2,
  Layers,
} from "lucide-react";

export const CredentialsSection: React.FC = () => {
  const { education, certifications, honors } = DOSSIER;
  const [activeKanjiIndex, setActiveKanjiIndex] = useState(0);

  const kanjiCards = [
    {
      kanji: "知能",
      reading: "ちのう (Chinō)",
      meaning: "Intelligence / AI",
      context: "Applied to autonomous agent loops & deep neural networks in Brief2Reel.",
    },
    {
      kanji: "視覚",
      reading: "しかく (Shikaku)",
      meaning: "Vision / Perception",
      context: "Real-time edge pose estimation & Daugman polar iris biometrics.",
    },
    {
      kanji: "特許",
      reading: "とっきょ (Tokkyo)",
      meaning: "Patent / Invention",
      context: "In-flight GPU tensor logit interception & EDLD damping (TNARE).",
    },
    {
      kanji: "創発",
      reading: "そうはつ (Sōhatsu)",
      meaning: "Emergence",
      context: "Multi-agent orchestration and trilingual legal knowledge retrieval.",
    },
  ];

  const tihanCert = certifications.find((c) => c.id === "tihan-iith");
  const ibmCert = certifications.find((c) => c.id === "ibm-sql");

  const handleKanjiKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      nextIndex = (index + 1) % kanjiCards.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      nextIndex = (index - 1 + kanjiCards.length) % kanjiCards.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      nextIndex = kanjiCards.length - 1;
    } else {
      return;
    }
    setActiveKanjiIndex(nextIndex);
    zenAudio.playWoodblock();
    const targetBtn = document.getElementById(`kanji-tab-${nextIndex}`);
    if (targetBtn) {
      targetBtn.focus();
    }
  };

  return (
    <section
      id="credentials"
      className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#f6f3eb] dark:bg-[#121110] text-[#181614] dark:text-[#f5f2eb] overflow-hidden transition-colors duration-300"
    >
      {/* Sumi Divider Line */}
      <div className="sumi-divider absolute top-0 left-0" />

      {/* Vector Art Backdrop: Bamboo Grove & Seigaiha Waves */}
      <div className="vector-bg-decor absolute inset-0 pointer-events-none overflow-hidden z-0">
        <CredentialsVectorBackdrop />
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto mb-10 sm:mb-14">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
          <span className="text-xs sm:text-sm font-japanese text-[#c82b2b] dark:text-[#e03e3e] tracking-wider font-semibold whitespace-nowrap">
            「経歴・資格」
          </span>
          <span className="h-[1px] w-8 bg-[#c82b2b]/40" />
          <span className="text-xs font-mono text-[#524d47] dark:text-[#b8b2a7] tracking-widest uppercase">
            Academic Honors, Research Fellowships &amp; Linguistic Distinction
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#181614] dark:text-[#f5f2eb] font-display">
              Education, Credentials &amp; Honors
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#524d47] dark:text-[#b8b2a7] max-w-2xl leading-relaxed">
              Formal academic foundation at Ramdeobaba University, autonomous aerial AI research at IIT Hyderabad TiHAN, and certified Japanese language capability.
            </p>
          </div>

          {/* Verification Badge */}
          <div className="flex items-center gap-2 p-2 sm:p-2.5 rounded-lg bg-[#ede8de]/60 dark:bg-[#1e1c19] border border-[#181614]/10 dark:border-white/10 text-[11px] sm:text-xs font-mono text-[#524d47] dark:text-[#b8b2a7] flex-shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#2e7d32] dark:text-[#4ade80]" />
            <span>AUTHENTICATED DOSSIER RECORDS</span>
          </div>
        </div>
      </div>

      {/* Asymmetrical Bento Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
        {/* ========================================================= */}
        {/* BENTO TILE 1: Academic Degree & Focus (Hero Span: 7 cols)  */}
        {/* ========================================================= */}
        <SpotlightCard
          spotlightColor="rgba(200, 43, 43, 0.08)"
          className="lg:col-span-7 md:col-span-2 flex flex-col justify-between bg-[#fbf9f4]/95 dark:bg-[#181614]/95 border border-[#181614]/12 dark:border-white/10 shadow-sm washi-card"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <span className="font-japanese text-sm text-[#c82b2b] dark:text-[#ff4d4d] font-semibold">
                  「学歴」
                </span>
                <span className="text-xs font-mono text-[#827b73] dark:text-[#78736a]">/</span>
                <span className="text-xs font-mono text-[#524d47] dark:text-[#b8b2a7] uppercase tracking-wider">
                  Academic Foundation
                </span>
              </div>
              <div className="p-2 rounded-md bg-[#ede8de]/60 dark:bg-[#25221e] border border-[#181614]/10 dark:border-white/10 text-[#c82b2b] dark:text-[#ff4d4d]">
                <GraduationCap className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-[#181614] dark:text-[#f5f2eb] tracking-tight mb-1 font-display">
              {education.institution}
            </h3>
            <p className="text-sm text-[#8a681c] dark:text-[#e5be64] font-mono mb-4 font-medium">
              {education.degree} in {education.specialization}
            </p>

            {/* Academic Standing Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-lg bg-[#ede8de]/50 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10 mb-5">
              <div className="text-center sm:text-left">
                <span className="block text-[10px] text-[#827b73] dark:text-[#9e978c] font-mono">PERIOD</span>
                <span className="text-xs sm:text-sm font-semibold text-[#181614] dark:text-[#f5f2eb] font-mono">
                  {education.period}
                </span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-[10px] text-[#827b73] dark:text-[#9e978c] font-mono">CUMULATIVE GPA</span>
                <span className="text-xs sm:text-sm font-bold text-[#c82b2b] dark:text-[#ff4d4d] font-mono">
                  {education.gpa} / {education.gpaScale}
                </span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-[10px] text-[#827b73] dark:text-[#9e978c] font-mono">CAMPUS LOCATION</span>
                <span className="text-xs sm:text-sm font-semibold text-[#181614] dark:text-[#f5f2eb] font-mono truncate block">
                  {education.location}
                </span>
              </div>
            </div>

            {/* Core Coursework & Theoretical Foundations */}
            <div className="p-3.5 rounded-lg bg-[#ede8de]/30 dark:bg-[#201d1a]/60 border border-[#181614]/8 dark:border-white/10 mb-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#181614] dark:text-[#f5f2eb] mb-2.5">
                <span className="flex items-center gap-1.5 font-semibold text-[#524d47] dark:text-[#b8b2a7]">
                  <Layers className="w-3.5 h-3.5 text-[#c82b2b] dark:text-[#ff4d4d]" />
                  <span>Key Engineering Curriculum</span>
                </span>
                <span className="text-[10px] text-[#8a681c] dark:text-[#e5be64] font-mono">Data Science Specialization</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] font-mono">
                <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                  <span className="text-[#181614] dark:text-[#f5f2eb] truncate block">Deep Learning</span>
                </div>
                <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                  <span className="text-[#181614] dark:text-[#f5f2eb] truncate block">Computer Vision</span>
                </div>
                <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                  <span className="text-[#181614] dark:text-[#f5f2eb] truncate block">Tensor Algebra</span>
                </div>
                <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                  <span className="text-[#181614] dark:text-[#f5f2eb] truncate block">Distributed DBs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Footnote */}
          <div className="pt-4 border-t border-[#181614]/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-[#827b73] dark:text-[#9e978c]">
            <span>REGULAR ENROLLMENT • AUTONOMOUS ENGINEERING</span>
            <span className="text-[#2e7d32] dark:text-[#4ade80] font-semibold">VERIFIED STANDING</span>
          </div>
        </SpotlightCard>

        {/* ========================================================= */}
        {/* BENTO TILE 2: Linguistic Distinction (Span: 5 cols)       */}
        {/* ========================================================= */}
        <SpotlightCard
          spotlightColor="rgba(200, 43, 43, 0.08)"
          className="lg:col-span-5 md:col-span-2 flex flex-col justify-between bg-[#fbf9f4]/95 dark:bg-[#181614]/95 border border-[#c82b2b]/20 dark:border-[#c82b2b]/35 shadow-sm washi-card"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <span className="font-japanese text-sm text-[#c82b2b] dark:text-[#ff4d4d] font-semibold">
                  「語学」
                </span>
                <span className="text-xs font-mono text-[#827b73] dark:text-[#78736a]">/</span>
                <span className="text-xs font-mono text-[#524d47] dark:text-[#b8b2a7] uppercase tracking-wider">
                  Linguistic Distinction
                </span>
              </div>
              <span className="hanko-stamp px-2 py-0.5 text-xs font-semibold">合格</span>
            </div>

            <h3 className="text-xl font-semibold text-[#181614] dark:text-[#f5f2eb] tracking-tight mb-1 font-display">
              日本語能力試験 N4 (JLPT N4)
            </h3>
            <p className="text-xs font-mono text-[#827b73] dark:text-[#9e978c] mb-4">
              The Japan Foundation &amp; JEES (JALTAP) • Certified 2026
            </p>

            <p className="text-xs text-[#524d47] dark:text-[#b8b2a7] leading-relaxed mb-4">
              Comprehension of conversational Japanese, technical software documentation parsing, and ~300 Kanji characters across engineering contexts.
            </p>

            {/* Interactive Kanji Concept Matrix */}
            <div className="p-3.5 rounded-lg bg-[#ede8de]/60 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10 mb-4">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#827b73] dark:text-[#9e978c] mb-2.5">
                <span>INTERACTIVE KANJI TAXONOMY</span>
                <span className="text-[#c82b2b] dark:text-[#ff4d4d] font-medium">Click to Inspect</span>
              </div>

              {/* Kanji Selector Buttons */}
              <div
                className="grid grid-cols-4 gap-1.5 mb-3"
                role="tablist"
                aria-label="Interactive Kanji Taxonomy"
              >
                {kanjiCards.map((item, idx) => (
                  <button
                    key={idx}
                    role="tab"
                    id={`kanji-tab-${idx}`}
                    aria-selected={activeKanjiIndex === idx}
                    aria-controls={`kanji-panel-${idx}`}
                    tabIndex={activeKanjiIndex === idx ? 0 : -1}
                    onKeyDown={(e) => handleKanjiKeyDown(e, idx)}
                    onClick={() => {
                      zenAudio.playWoodblock();
                      setActiveKanjiIndex(idx);
                    }}
                    className={`py-1.5 rounded-md font-japanese font-bold text-sm transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-[#c82b2b]/40 ${
                      activeKanjiIndex === idx
                        ? "bg-[#c82b2b] text-white border-[#c82b2b] shadow-sm"
                        : "bg-[#f6f3eb] dark:bg-[#282522] text-[#181614] dark:text-[#f5f2eb] border-[#181614]/10 dark:border-white/10 hover:border-[#c82b2b]/30"
                    }`}
                  >
                    {item.kanji}
                  </button>
                ))}
              </div>

              {/* Active Kanji Details */}
              <div
                role="tabpanel"
                id={`kanji-panel-${activeKanjiIndex}`}
                aria-labelledby={`kanji-tab-${activeKanjiIndex}`}
                tabIndex={0}
                className="p-3 rounded-md bg-[#f6f3eb] dark:bg-[#24211e] border border-[#181614]/10 dark:border-white/10 focus:outline-none"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-japanese text-base font-bold text-[#c82b2b] dark:text-[#ff4d4d]">
                    {kanjiCards[activeKanjiIndex].kanji}
                  </span>
                  <span className="text-[10px] font-mono text-[#524d47] dark:text-[#b8b2a7]">
                    {kanjiCards[activeKanjiIndex].reading}
                  </span>
                </div>
                <div className="text-xs font-semibold text-[#181614] dark:text-[#f5f2eb] mb-1 font-display">
                  {kanjiCards[activeKanjiIndex].meaning}
                </div>
                <p className="text-[11px] text-[#524d47] dark:text-[#d4cec3] leading-relaxed">
                  {kanjiCards[activeKanjiIndex].context}
                </p>
              </div>
            </div>
          </div>

          {/* Footer Footnote */}
          <div className="pt-4 border-t border-[#181614]/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-[#827b73] dark:text-[#9e978c]">
            <span>WORKING CAPABILITY</span>
            <span className="font-japanese text-[#c82b2b] dark:text-[#ff4d4d] font-medium">技術文書理解・日常会話可能</span>
          </div>
        </SpotlightCard>

        {/* ========================================================= */}
        {/* BENTO TILE 3: Competitive Honors & Ministry (Span: 7 cols)*/}
        {/* ========================================================= */}
        <SpotlightCard
          spotlightColor="rgba(200, 43, 43, 0.06)"
          className="lg:col-span-7 md:col-span-1 flex flex-col justify-between bg-[#fbf9f4]/95 dark:bg-[#181614]/95 border border-[#181614]/12 dark:border-white/10 shadow-sm washi-card"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <span className="font-japanese text-sm text-[#c82b2b] dark:text-[#ff4d4d] font-semibold">
                  「栄誉」
                </span>
                <span className="text-xs font-mono text-[#827b73] dark:text-[#78736a]">/</span>
                <span className="text-xs font-mono text-[#524d47] dark:text-[#b8b2a7] uppercase tracking-wider">
                  Competitive Distinction
                </span>
              </div>
              <div className="p-2 rounded-md bg-[#ede8de]/60 dark:bg-[#25221e] border border-[#181614]/10 dark:border-white/10 text-[#c82b2b] dark:text-[#ff4d4d]">
                <Trophy className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-[#181614] dark:text-[#f5f2eb] tracking-tight mb-1 font-display">
              National Honors &amp; Hackathons
            </h3>
            <p className="text-xs font-mono text-[#827b73] dark:text-[#a8a196] mb-5">
              Recognized in national ministry hackathons, enterprise innovation tracks, and peer-reviewed research venues.
            </p>

            {/* Honors List */}
            <div className="space-y-3 mb-6">
              {honors.map((honor, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#ede8de]/50 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10 hover:border-[#c82b2b]/30 dark:hover:border-[#c82b2b]/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-[#827b73] dark:text-[#9e978c] mb-1">
                    <span className="text-[#8a681c] dark:text-[#e5be64] font-semibold">{honor.organization}</span>
                    <span>{honor.date}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#181614] dark:text-[#f5f2eb] mb-1 font-display">
                    {honor.title}
                  </h4>
                  <p className="text-xs text-[#524d47] dark:text-[#d4cec3] leading-relaxed">
                    {honor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Footnote */}
          <div className="pt-4 border-t border-[#181614]/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-[#827b73] dark:text-[#9e978c]">
            <span>SIH MINISTRY SELECTION • ADOBE FINALIST • IEEE FIRST AUTHOR</span>
            <span className="text-[#c82b2b] dark:text-[#ff4d4d] font-medium">AWARDED</span>
          </div>
        </SpotlightCard>

        {/* ========================================================= */}
        {/* BENTO TILE 4: Research Certifications (Span: 5 cols)      */}
        {/* ========================================================= */}
        <SpotlightCard
          spotlightColor="rgba(197, 155, 72, 0.08)"
          className="lg:col-span-5 md:col-span-1 flex flex-col justify-between bg-[#fbf9f4]/95 dark:bg-[#181614]/95 border border-[#181614]/12 dark:border-white/10 shadow-sm washi-card"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <span className="font-japanese text-sm text-[#8a681c] dark:text-[#e5be64] font-semibold">
                  「認定」
                </span>
                <span className="text-xs font-mono text-[#827b73] dark:text-[#78736a]">/</span>
                <span className="text-xs font-mono text-[#524d47] dark:text-[#b8b2a7] uppercase tracking-wider">
                  Specialized Credentials
                </span>
              </div>
              <div className="p-2 rounded-md bg-[#ede8de]/60 dark:bg-[#25221e] border border-[#181614]/10 dark:border-white/10 text-[#8a681c] dark:text-[#e5be64]">
                <Award className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-[#181614] dark:text-[#f5f2eb] tracking-tight mb-1 font-display">
              Research &amp; Data Fellowships
            </h3>
            <p className="text-xs font-mono text-[#827b73] dark:text-[#a8a196] mb-5">
              Verified certifications in drone AI, edge vision, and relational enterprise SQL architectures.
            </p>

            <div className="space-y-3.5 mb-6">
              {/* TiHAN IIT Hyderabad */}
              {tihanCert && (
                <div className="p-3.5 rounded-lg bg-[#ede8de]/50 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10">
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-[#c82b2b] dark:text-[#ff4d4d] font-semibold">{tihanCert.badgeText}</span>
                    <span className="text-[#827b73] dark:text-[#9e978c]">{tihanCert.date}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#181614] dark:text-[#f5f2eb] mb-1 font-display">
                    {tihanCert.title}
                  </h4>
                  <p className="text-xs text-[#524d47] dark:text-[#d4cec3] leading-relaxed mb-2.5">
                    {tihanCert.credentialDetails}
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#2e7d32] dark:text-[#4ade80]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Aerial Edge AI Credential</span>
                  </div>
                </div>
              )}

              {/* IBM Coursera */}
              {ibmCert && (
                <div className="p-3.5 rounded-lg bg-[#ede8de]/50 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10">
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-[#8a681c] dark:text-[#e5be64] font-semibold">{ibmCert.badgeText}</span>
                    <span className="text-[#827b73] dark:text-[#9e978c]">{ibmCert.date}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#181614] dark:text-[#f5f2eb] mb-1 font-display">
                    {ibmCert.title}
                  </h4>
                  <p className="text-xs text-[#524d47] dark:text-[#d4cec3] leading-relaxed mb-2.5">
                    {ibmCert.credentialDetails}
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#2e7d32] dark:text-[#4ade80]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Relational Database &amp; SQL Mastery</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Footnote */}
          <div className="pt-4 border-t border-[#181614]/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-[#827b73] dark:text-[#9e978c]">
            <span>IIT HYDERABAD TIHAN • IBM PROFESSIONAL</span>
            <span className="text-[#2e7d32] dark:text-[#4ade80] font-semibold">VERIFIED</span>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};
