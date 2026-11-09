"use client";

import React, { useState } from "react";
import { DOSSIER } from "@/data/dossier";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { LatexRenderer } from "@/components/ui/LatexRenderer";
import { ResearchVectorBackdrop } from "@/components/ui/VectorBackdrops";
import { zenAudio } from "@/lib/audio";
import {
  Cpu,
  FileCheck2,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Languages,
} from "lucide-react";

export const ResearchPatentSection: React.FC = () => {
  const { patent, researchPaper } = DOSSIER;
  const [activeStage, setActiveStage] = useState(0);
  const [isAbstractExpanded, setIsAbstractExpanded] = useState(false);

  return (
    <section
      id="research-patent"
      className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#f6f3eb] dark:bg-[#121110] text-[#181614] dark:text-[#f5f2eb] overflow-hidden transition-colors duration-300"
    >
      {/* Sumi Divider Line */}
      <div className="sumi-divider absolute top-0 left-0" />

      {/* Vector Art Backdrop: Ukiyo-e Kumo Clouds & Torii Wireframe */}
      <div className="vector-bg-decor absolute inset-0 pointer-events-none overflow-hidden z-0">
        <ResearchVectorBackdrop />
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto mb-10 sm:mb-16">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
          <span className="text-xs sm:text-sm font-japanese text-[#c82b2b] dark:text-[#e03e3e] tracking-wider font-semibold whitespace-nowrap">
            「研究と特許」
          </span>
          <span className="h-[1px] w-8 bg-[#c82b2b]/40" />
          <span className="text-xs font-mono text-[#524d47] dark:text-[#b8b2a7] tracking-widest uppercase">
            Discipline &amp; Intellectual Property
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#181614] dark:text-[#f5f2eb] font-display">
          Patents and Peer-Reviewed Research
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#524d47] dark:text-[#b8b2a7] max-w-2xl leading-relaxed">
          Original algorithmic research spanning GPU tensor logit interception and grounded legal retrieval-augmented generation.
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* ======================================================== */}
        {/* PATENT CARD: TNARE */}
        {/* ======================================================== */}
        <SpotlightCard
          spotlightColor="rgba(200, 43, 43, 0.08)"
          className="bg-[#fbf9f4]/95 dark:bg-[#181614]/95 border border-[#181614]/12 dark:border-white/10 flex flex-col justify-between shadow-sm washi-card"
        >
          <div>
            {/* Header badges */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#c82b2b]/10 dark:bg-[#c82b2b]/20 border border-[#c82b2b]/25 dark:border-[#c82b2b]/40 text-xs font-mono text-[#c82b2b] dark:text-[#ff6b6b] font-medium">
                <Cpu className="w-3.5 h-3.5" />
                <span>LEAD PATENT INVENTOR</span>
              </div>
              <span className="text-xs font-mono text-[#827b73] dark:text-[#9e978c]">
                {patent.jurisdiction}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-[#181614] dark:text-[#f5f2eb] tracking-tight mb-2 font-display">
              {patent.acronym}: In-Flight Tensor Logit Regulation
            </h3>
            <p className="text-xs font-mono text-[#c82b2b] dark:text-[#ff4d4d] mb-4 font-medium">
              {patent.stage} • {patent.applicant}
            </p>
            <p className="text-sm text-[#524d47] dark:text-[#b8b2a7] leading-relaxed mb-6">
              {patent.noveltySummary}
            </p>

            {/* LaTeX Mathematical Formula Card */}
            <div className="rounded-lg bg-[#ede8de]/70 dark:bg-[#201d1a] p-3 sm:p-4 border border-[#181614]/10 dark:border-white/10 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-[11px] font-mono text-[#827b73] dark:text-[#9e978c] mb-2 pb-1 border-b border-[#181614]/10 dark:border-white/10">
                <span>GOVERNING DAMPING FORMULA (EDLD)</span>
                <span className="text-[#c82b2b] dark:text-[#ff6b6b] font-medium">SHANNON ENTROPY SCALED</span>
              </div>
              <div className="py-2 overflow-x-auto text-center max-w-full">
                <LatexRenderer
                  formula={patent.latexFormula}
                  className="text-[#181614] dark:text-[#f5f2eb] text-xs sm:text-sm md:text-base"
                />
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#524d47] dark:text-[#d4cec3] mt-2 font-mono">
                Where H(Pt) is instantaneous sequence entropy, &tau; is temperature scale, and &Omega;(v, Ci) is contextual penalty.
              </p>
            </div>

            {/* 3-Stage Interactive Architecture Stepper */}
            <div className="mb-6">
              <div className="text-xs font-mono text-[#524d47] dark:text-[#b8b2a7] mb-2.5 flex items-center justify-between">
                <span>THREE-STAGE REAL-TIME PIPELINE</span>
                <span className="text-[#c82b2b] dark:text-[#ff6b6b]">SELECT STAGE TO INSPECT</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3">
                {patent.pipelineStages.map((stage, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      zenAudio.playWoodblock();
                      setActiveStage(idx);
                    }}
                    className={`py-2 px-1 text-center rounded-md font-mono text-[10px] sm:text-xs transition-all duration-200 border ${
                      activeStage === idx
                        ? "bg-[#c82b2b] text-white border-[#c82b2b] shadow-sm font-medium"
                        : "bg-[#f6f3eb] dark:bg-[#282522] text-[#524d47] dark:text-[#d4cec3] border-[#181614]/10 dark:border-white/10 hover:border-[#c82b2b]/30"
                    }`}
                  >
                    <span className="block text-[9px] sm:text-[10px] opacity-75">S0{stage.step} ({stage.latency})</span>
                    <span className="truncate block font-sans">{stage.title.split(" ")[0]}</span>
                  </button>
                ))}
              </div>

              {/* Stage Description Box */}
              <div className="p-3.5 rounded-lg bg-[#ede8de]/60 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10 text-xs">
                <span className="font-semibold text-[#181614] dark:text-[#f5f2eb] block mb-1">
                  Stage {patent.pipelineStages[activeStage].step}: {patent.pipelineStages[activeStage].title}
                </span>
                <p className="text-[#524d47] dark:text-[#d4cec3] leading-relaxed">
                  {patent.pipelineStages[activeStage].description}
                </p>
              </div>
            </div>

            {/* Empirical Verification Benchmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-[#181614]/10 dark:border-white/10">
              {patent.benchmarks.map((m, idx) => (
                <div key={idx} className="p-2.5 rounded-md bg-[#ede8de]/50 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10 text-center">
                  <div className="text-sm sm:text-base font-mono font-semibold text-[#c82b2b] dark:text-[#ff6b6b]">
                    {m.value}
                  </div>
                  <div className="text-[10px] text-[#524d47] dark:text-[#b8b2a7] uppercase font-mono mt-0.5 truncate">
                    {m.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>

        {/* ======================================================== */}
        {/* RESEARCH PAPER CARD: IEEE OCIT 2026 */}
        {/* ======================================================== */}
        <SpotlightCard
          spotlightColor="rgba(197, 155, 72, 0.08)"
          className="bg-[#fbf9f4]/95 dark:bg-[#181614]/95 border border-[#181614]/12 dark:border-white/10 flex flex-col justify-between shadow-sm washi-card"
        >
          <div>
            {/* Header badges */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#c59b48]/15 dark:bg-[#c59b48]/25 border border-[#c59b48]/30 dark:border-[#c59b48]/40 text-xs font-mono text-[#8a681c] dark:text-[#e5be64] font-medium">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>FIRST AUTHOR • ACCEPTED</span>
              </div>
              <span className="text-xs font-mono text-[#827b73] dark:text-[#9e978c]">
                {researchPaper.status}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-[#181614] dark:text-[#f5f2eb] tracking-tight mb-2 font-display">
              {researchPaper.title}
            </h3>
            <p className="text-xs font-mono text-[#8a681c] dark:text-[#e5be64] mb-3 font-medium">
              {researchPaper.venue}
            </p>

            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#524d47] dark:text-[#b8b2a7]">
              <span className="px-2 py-0.5 rounded bg-[#ede8de] dark:bg-[#221f1c] border border-[#181614]/10 dark:border-white/10">
                {researchPaper.indexing}
              </span>
              <span>•</span>
              <span className="text-[#c82b2b] dark:text-[#ff6b6b]">{researchPaper.authorship}</span>
            </div>

            {/* Expandable Abstract Preview */}
            <div className="rounded-lg bg-[#ede8de]/60 dark:bg-[#201d1a] p-4 border border-[#181614]/10 dark:border-white/10 mb-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#181614] dark:text-[#f5f2eb] mb-2">
                <span className="font-semibold">PEER-REVIEWED ABSTRACT</span>
                <button
                  onClick={() => {
                    zenAudio.playWoodblock();
                    setIsAbstractExpanded(!isAbstractExpanded);
                  }}
                  className="flex items-center gap-1 text-[#c82b2b] dark:text-[#ff6b6b] hover:text-[#a81c1c] dark:hover:text-[#ff9999] text-xs font-sans"
                >
                  <span>{isAbstractExpanded ? "Read Less" : "Read Full Abstract"}</span>
                  {isAbstractExpanded ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <p
                className={`text-xs text-[#524d47] dark:text-[#d4cec3] leading-relaxed transition-all duration-300 ${
                  isAbstractExpanded ? "line-clamp-none" : "line-clamp-3"
                }`}
              >
                {researchPaper.abstract}
              </p>
            </div>

            {/* RAGAS Quantitative Evaluation Benchmarks */}
            <div className="mb-6">
              <div className="text-xs font-mono text-[#524d47] dark:text-[#b8b2a7] mb-2.5 flex items-center justify-between">
                <span>RAGAS BENCHMARK VERIFICATION</span>
                <span className="text-[#8a681c] dark:text-[#e5be64]">ZERO HALLUCINATION GOAL</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
                {researchPaper.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-2 sm:p-3 rounded-md bg-[#ede8de]/50 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10 text-center"
                  >
                    <div className="text-base sm:text-lg font-mono font-semibold text-[#181614] dark:text-[#f5f2eb]">
                      {metric.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-mono text-[#524d47] dark:text-[#b8b2a7] uppercase mt-0.5 truncate">
                      {metric.label}
                    </div>
                    <div className="text-[8px] sm:text-[9px] text-[#827b73] dark:text-[#9e978c] mt-1 font-mono truncate">
                      {metric.benchmark}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Highlights & Languages */}
            <div className="space-y-2 pt-4 border-t border-[#181614]/10 dark:border-white/10 text-xs">
              <div className="flex items-center gap-2 text-[#524d47] dark:text-[#d4cec3]">
                <Languages className="w-4 h-4 text-[#c82b2b] dark:text-[#ff6b6b]" />
                <span className="font-mono">
                  Supported Corpora: {researchPaper.supportedLanguages.join(" • ")}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#524d47] dark:text-[#d4cec3]">
                <ShieldCheck className="w-4 h-4 text-[#2e7d32] dark:text-[#4ade80]" />
                <span>
                  Section-level citation accountability preventing hallucinated legal advice.
                </span>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};
