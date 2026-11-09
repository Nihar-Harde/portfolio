"use client";

import React, { useState } from "react";
import { DOSSIER } from "@/data/dossier";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SkillsVectorBackdrop } from "@/components/ui/VectorBackdrops";
import { zenAudio } from "@/lib/audio";
import {
  Code2,
  Bot,
  ScanEye,
  Server,
  Workflow,
  Cpu,
  Database,
  Terminal,
  Layers,
  Sparkles,
  CheckCircle2,
  X,
  Compass,
} from "lucide-react";

export const SkillsMatrixSection: React.FC = () => {
  const { skillsMatrix } = DOSSIER;
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    level: string;
    domain: string;
    domainKanji: string;
  } | null>(null);

  // Map each skill to authentic real-world project deployments
  const getSkillDeployments = (skillName: string): string => {
    switch (skillName) {
      case "Python 3.12":
        return "Core runtime for Brief2Reel, LexMind, AutoATC, and UBIPr Iris Recognition.";
      case "SQL (PostgreSQL / Spark SQL)":
        return "FMCG Medallion Lakehouse queries and Brief2Reel PostgreSQL persistence.";
      case "TypeScript":
        return "Full-stack portfolio architecture and interactive UI state orchestration.";
      case "Java 21":
        return "Enterprise microservice gateway and backend data structures exploration.";
      case "Multi-Agent Pipelines":
        return "Brief2Reel LangGraph orchestration (Copywriter → Visuals → TTS → Video → Critic).";
      case "RAGAS Benchmark":
        return "Empirical evaluation of LexMind trilingual legal retrieval (0.875 Faithfulness).";
      case "ChromaDB & Vector RRF":
        return "LexMind Reciprocal Rank Fusion and Brief2Reel prompt template retrieval.";
      case "Groq LLaMA 3.3":
        return "Sub-second inference director for Brief2Reel scripts and critic evaluations.";
      case "Gemini APIs (1.5/2.0)":
        return "Multimodal vision-language synthesis and high-fidelity keyframe generation.";
      case "LangChain & LangGraph":
        return "Deterministic stateful loops and RAG chains across legal & media pipelines.";
      case "PyTorch":
        return "Deep learning modeling and AutoATC pose regression pipeline.";
      case "Ultralytics YOLOv8 Pose":
        return "17 anatomical keypoint tracking in AutoATC (SIH 2025 Ministry Solution).";
      case "OpenCV":
        return "UBIPr Daugman polar rubber-sheet unrolling and AutoATC preprocessing.";
      case "ONNX Runtime INT8":
        return "Quantized edge CPU inference under 1.5s for dairy body condition scoring.";
      case "LightGBM":
        return "Calibrated tabular regression on skeletal angles for cattle BCS scoring.";
      case "Edge CPU Optimization":
        return "Low-power runtime execution without dedicated GPU hardware constraints.";
      case "FastAPI":
        return "High-throughput asynchronous API tiers for Brief2Reel and AutoATC.";
      case "Databricks & Delta Lake":
        return "Multi-hop Medallion architecture (Bronze → Silver → Gold) for supply chain.";
      case "PySpark":
        return "Distributed structured streaming and ETL transformations at scale.";
      case "PostgreSQL":
        return "ACID relational persistence for user tasks and pipeline event streams.";
      case "Docker & Containerization":
        return "Isolated reproducible microservice environments and CI testing.";
      case "Git & CI/CD":
        return "Trunk-based development, automated quality gates, and GitHub Actions.";
      default:
        return "Integrated across core engineering and research deployments.";
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case "Core":
        return "bg-[#c82b2b]/10 dark:bg-[#c82b2b]/20 text-[#c82b2b] dark:text-[#ff6b6b] border-[#c82b2b]/30 dark:border-[#c82b2b]/40 font-semibold";
      case "Advanced":
        return "bg-[#c59b48]/15 dark:bg-[#c59b48]/25 text-[#8a681c] dark:text-[#e5be64] border-[#c59b48]/35 dark:border-[#c59b48]/45 font-medium";
      case "Proficient":
        return "bg-[#2e7d32]/10 dark:bg-[#2e7d32]/20 text-[#2e7d32] dark:text-[#4ade80] border-[#2e7d32]/30 dark:border-[#2e7d32]/40 font-medium";
      case "Exploring":
      case "Familiar":
        return "bg-[#827b73]/15 dark:bg-[#827b73]/25 text-[#524d47] dark:text-[#d4cec3] border-[#827b73]/30 dark:border-[#827b73]/40 font-medium";
      default:
        return "bg-[#181614]/5 dark:bg-white/5 text-[#524d47] dark:text-[#d4cec3] border-[#181614]/10 dark:border-white/10";
    }
  };

  const agenticDomain = skillsMatrix.find((d) => d.domainKanji === "「自律型AI」");
  const languagesDomain = skillsMatrix.find((d) => d.domainKanji === "「言語」");
  const cvDomain = skillsMatrix.find((d) => d.domainKanji === "「画像・深層学習」");
  const infraDomain = skillsMatrix.find((d) => d.domainKanji === "「基盤工学」");

  return (
    <section
      id="skills-matrix"
      className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#f6f3eb] dark:bg-[#121110] text-[#181614] dark:text-[#f5f2eb] overflow-hidden transition-colors duration-300"
    >
      {/* Sumi Divider Line */}
      <div className="sumi-divider absolute top-0 left-0" />

      {/* Vector Art Backdrop: Solitary Cliff Pine (Matsu) & Kamon Roundels */}
      <div className="vector-bg-decor absolute inset-0 pointer-events-none overflow-hidden z-0">
        <SkillsVectorBackdrop />
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto mb-10 sm:mb-14">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
          <span className="text-xs sm:text-sm font-japanese text-[#c82b2b] dark:text-[#e03e3e] tracking-wider font-semibold whitespace-nowrap">
            「技術体系」
          </span>
          <span className="h-[1px] w-8 bg-[#c82b2b]/40" />
          <span className="text-xs font-mono text-[#524d47] dark:text-[#b8b2a7] tracking-widest uppercase">
            Engineering Taxonomy &amp; Asymmetrical Bento Matrix
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#181614] dark:text-[#f5f2eb] font-display">
              Technical Competencies &amp; Craft
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#524d47] dark:text-[#b8b2a7] max-w-2xl leading-relaxed">
              Four specialized technical domains spanning foundational low-level systems to autonomous AI pipelines and hardware-accelerated computer vision.
            </p>
          </div>

          {/* Level Legend Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-mono p-1.5 sm:p-2 rounded-lg bg-[#ede8de]/60 dark:bg-[#1e1c19] border border-[#181614]/10 dark:border-white/10">
            <span className="text-[#827b73] dark:text-[#9e978c] mr-0.5 sm:mr-1">TIERS:</span>
            <span className="px-1.5 sm:px-2 py-0.5 rounded border border-[#c82b2b]/30 dark:border-[#c82b2b]/40 bg-[#c82b2b]/10 dark:bg-[#c82b2b]/20 text-[#c82b2b] dark:text-[#ff6b6b] font-medium">
              Core
            </span>
            <span className="px-1.5 sm:px-2 py-0.5 rounded border border-[#c59b48]/35 dark:border-[#c59b48]/45 bg-[#c59b48]/15 dark:bg-[#c59b48]/25 text-[#8a681c] dark:text-[#e5be64] font-medium">
              Advanced
            </span>
            <span className="px-1.5 sm:px-2 py-0.5 rounded border border-[#2e7d32]/30 dark:border-[#2e7d32]/40 bg-[#2e7d32]/10 dark:bg-[#2e7d32]/20 text-[#2e7d32] dark:text-[#4ade80] font-medium">
              Proficient
            </span>
            <span className="px-1.5 sm:px-2 py-0.5 rounded border border-[#827b73]/30 dark:border-[#827b73]/40 bg-[#827b73]/15 dark:bg-[#827b73]/25 text-[#524d47] dark:text-[#d4cec3] font-medium">
              Exploring
            </span>
          </div>
        </div>
      </div>

      {/* Asymmetrical Bento Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
        {/* ========================================================= */}
        {/* BENTO TILE 1: Agentic AI & GenAI (Large Hero Span: 7 cols) */}
        {/* ========================================================= */}
        {agenticDomain && (
          <SpotlightCard
            spotlightColor="rgba(200, 43, 43, 0.08)"
            className="lg:col-span-7 md:col-span-2 flex flex-col justify-between bg-[#fbf9f4]/95 dark:bg-[#181614]/95 border border-[#181614]/12 dark:border-white/10 shadow-sm washi-card"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-japanese text-sm text-[#c82b2b] dark:text-[#ff4d4d] font-semibold">
                    {agenticDomain.domainKanji}
                  </span>
                  <span className="text-xs font-mono text-[#827b73] dark:text-[#78736a]">/</span>
                  <span className="text-xs font-mono text-[#524d47] dark:text-[#b8b2a7] uppercase tracking-wider">
                    Core Specialization
                  </span>
                </div>
                <div className="p-2 rounded-md bg-[#ede8de]/60 dark:bg-[#25221e] border border-[#181614]/10 dark:border-white/10 text-[#c82b2b] dark:text-[#ff4d4d]">
                  <Bot className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-[#181614] dark:text-[#f5f2eb] tracking-tight mb-1 font-display">
                {agenticDomain.domainTitle}
              </h3>
              <p className="text-xs font-mono text-[#827b73] dark:text-[#a8a196] mb-5">
                {agenticDomain.description}
              </p>

              {/* Interactive Telemetry Flow Strip */}
              <div className="p-3.5 rounded-lg bg-[#ede8de]/50 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10 mb-6">
                <div className="flex items-center justify-between text-xs font-mono text-[#181614] dark:text-[#f5f2eb] mb-2.5">
                  <span className="flex items-center gap-1.5 font-semibold text-[#c82b2b] dark:text-[#ff4d4d]">
                    <Workflow className="w-3.5 h-3.5" />
                    <span>Autonomous Reasoning &amp; Damping Loop</span>
                  </span>
                  <span className="text-[10px] text-[#2e7d32] dark:text-[#4ade80] font-semibold">TNARE + LangGraph</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-center text-[10px] sm:text-[11px] font-mono">
                  <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                    <span className="block text-[8px] sm:text-[9px] text-[#827b73] dark:text-[#9e978c]">STEP 1</span>
                    <span className="text-[#181614] dark:text-[#f5f2eb] truncate block">Perception</span>
                  </div>
                  <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                    <span className="block text-[8px] sm:text-[9px] text-[#827b73] dark:text-[#9e978c]">STEP 2</span>
                    <span className="text-[#181614] dark:text-[#f5f2eb] truncate block">Hybrid RRF</span>
                  </div>
                  <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                    <span className="block text-[8px] sm:text-[9px] text-[#827b73] dark:text-[#9e978c]">STEP 3</span>
                    <span className="text-[#c82b2b] dark:text-[#ff6b6b] truncate block font-medium">Logit Damp</span>
                  </div>
                  <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                    <span className="block text-[8px] sm:text-[9px] text-[#827b73] dark:text-[#9e978c]">STEP 4</span>
                    <span className="text-[#2e7d32] dark:text-[#4ade80] truncate block font-medium">Critic Fix</span>
                  </div>
                </div>
              </div>

              {/* Skill Matrix Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {agenticDomain.skills.map((skill, sIdx) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  return (
                    <button
                      key={sIdx}
                      onClick={() => {
                        zenAudio.playWoodblock();
                        setSelectedSkill(
                          isSelected
                            ? null
                            : {
                                name: skill.name,
                                level: skill.level,
                                domain: agenticDomain.domainTitle,
                                domainKanji: agenticDomain.domainKanji,
                              }
                        );
                      }}
                      className={`text-left p-2.5 rounded-md text-xs font-mono transition-all duration-200 flex items-center justify-between border ${
                        isSelected
                          ? "bg-[#c82b2b]/15 dark:bg-[#e03e3e]/20 border-[#c82b2b] dark:border-[#e03e3e] shadow-sm text-[#181614] dark:text-[#f5f2eb] font-medium"
                          : "bg-[#ede8de]/40 dark:bg-[#201d1a]/80 border-[#181614]/8 dark:border-white/10 text-[#524d47] dark:text-[#d4cec3] hover:bg-[#ede8de] dark:hover:bg-[#282522] hover:text-[#181614] dark:hover:text-[#f5f2eb]"
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate">
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c82b2b] dark:bg-[#ff4d4d] flex-shrink-0" />
                        )}
                        <span className="truncate">{skill.name}</span>
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded border flex-shrink-0 ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer Footnote */}
            <div className="pt-4 border-t border-[#181614]/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-[#827b73] dark:text-[#9e978c]">
              <span>DEPLOYED: BRIEF2REEL • LEXMIND • TNARE PATENT</span>
              <span className="text-[#c82b2b] dark:text-[#ff4d4d] font-medium">LEAD ARCHITECT</span>
            </div>
          </SpotlightCard>
        )}

        {/* ========================================================= */}
        {/* BENTO TILE 2: Languages & Core (Compact Span: 5 cols)     */}
        {/* ========================================================= */}
        {languagesDomain && (
          <SpotlightCard
            spotlightColor="rgba(200, 43, 43, 0.06)"
            className="lg:col-span-5 md:col-span-2 flex flex-col justify-between bg-[#fbf9f4]/95 dark:bg-[#181614]/95 border border-[#181614]/12 dark:border-white/10 shadow-sm washi-card"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-japanese text-sm text-[#c82b2b] dark:text-[#ff4d4d] font-semibold">
                    {languagesDomain.domainKanji}
                  </span>
                  <span className="text-xs font-mono text-[#827b73] dark:text-[#78736a]">/</span>
                  <span className="text-xs font-mono text-[#524d47] dark:text-[#b8b2a7] uppercase tracking-wider">
                    Core Runtimes
                  </span>
                </div>
                <div className="p-2 rounded-md bg-[#ede8de]/60 dark:bg-[#25221e] border border-[#181614]/10 dark:border-white/10 text-[#c82b2b] dark:text-[#ff4d4d]">
                  <Code2 className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-[#181614] dark:text-[#f5f2eb] tracking-tight mb-1 font-display">
                {languagesDomain.domainTitle}
              </h3>
              <p className="text-xs font-mono text-[#827b73] dark:text-[#a8a196] mb-5">
                {languagesDomain.description}
              </p>

              {/* Execution Profile Callout */}
              <div className="p-3 rounded-lg bg-[#ede8de]/50 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10 mb-5 text-xs font-mono">
                <div className="flex items-center justify-between text-[#181614] dark:text-[#f5f2eb] mb-1 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#c82b2b] dark:text-[#ff4d4d]" />
                    <span>Runtime Execution Profile</span>
                  </span>
                  <span className="text-[#8a681c] dark:text-[#e5be64] text-[10px]">Python 3.12 Primary</span>
                </div>
                <p className="text-[11px] text-[#524d47] dark:text-[#d4cec3] leading-relaxed">
                  Heavy asynchronous workloads &amp; mathematical models in Python; complex analytical aggregations in SQL; responsive frontend UI in TypeScript.
                </p>
              </div>

              {/* Languages List */}
              <div className="space-y-2.5 mb-6">
                {languagesDomain.skills.map((skill, sIdx) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  return (
                    <button
                      key={sIdx}
                      onClick={() => {
                        zenAudio.playWoodblock();
                        setSelectedSkill(
                          isSelected
                            ? null
                            : {
                                name: skill.name,
                                level: skill.level,
                                domain: languagesDomain.domainTitle,
                                domainKanji: languagesDomain.domainKanji,
                              }
                        );
                      }}
                      className={`w-full text-left p-3 rounded-md text-xs font-mono transition-all duration-200 flex items-center justify-between border ${
                        isSelected
                          ? "bg-[#c82b2b]/15 dark:bg-[#e03e3e]/20 border-[#c82b2b] dark:border-[#e03e3e] shadow-sm text-[#181614] dark:text-[#f5f2eb] font-medium"
                          : "bg-[#ede8de]/40 dark:bg-[#201d1a]/80 border-[#181614]/8 dark:border-white/10 text-[#524d47] dark:text-[#d4cec3] hover:bg-[#ede8de] dark:hover:bg-[#282522] hover:text-[#181614] dark:hover:text-[#f5f2eb]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {skill.highlight ? (
                          <span className="w-2 h-2 rounded-full bg-[#c82b2b] dark:bg-[#ff4d4d]" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-[#827b73]/40 dark:bg-white/20" />
                        )}
                        <span className="font-medium text-[#181614] dark:text-[#f5f2eb]">{skill.name}</span>
                      </div>
                      <span
                        className={`text-[10px] px-2.5 py-0.5 rounded border ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer Footnote */}
            <div className="pt-4 border-t border-[#181614]/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-[#827b73] dark:text-[#9e978c]">
              <span>VERIFIED ENTERPRISE CODING</span>
              <span className="text-[#2e7d32] dark:text-[#4ade80]">TYPE SAFE</span>
            </div>
          </SpotlightCard>
        )}

        {/* ========================================================= */}
        {/* BENTO TILE 3: Computer Vision & Edge AI (Span: 6 cols)    */}
        {/* ========================================================= */}
        {cvDomain && (
          <SpotlightCard
            spotlightColor="rgba(200, 43, 43, 0.06)"
            className="lg:col-span-6 md:col-span-1 flex flex-col justify-between bg-[#fbf9f4]/95 dark:bg-[#181614]/95 border border-[#181614]/12 dark:border-white/10 shadow-sm washi-card"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-japanese text-sm text-[#c82b2b] dark:text-[#ff4d4d] font-semibold">
                    {cvDomain.domainKanji}
                  </span>
                  <span className="text-xs font-mono text-[#827b73] dark:text-[#78736a]">/</span>
                  <span className="text-xs font-mono text-[#524d47] dark:text-[#b8b2a7] uppercase tracking-wider">
                    Edge Inference
                  </span>
                </div>
                <div className="p-2 rounded-md bg-[#ede8de]/60 dark:bg-[#25221e] border border-[#181614]/10 dark:border-white/10 text-[#c82b2b] dark:text-[#ff4d4d]">
                  <ScanEye className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-[#181614] dark:text-[#f5f2eb] tracking-tight mb-1 font-display">
                {cvDomain.domainTitle}
              </h3>
              <p className="text-xs font-mono text-[#827b73] dark:text-[#a8a196] mb-5">
                {cvDomain.description}
              </p>

              {/* Edge Inference Feature Strip */}
              <div className="p-3.5 rounded-lg bg-[#ede8de]/50 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10 mb-6">
                <div className="flex items-center justify-between text-xs font-mono text-[#181614] dark:text-[#f5f2eb] mb-2">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Cpu className="w-3.5 h-3.5 text-[#c82b2b] dark:text-[#ff4d4d]" />
                    <span>Edge Acceleration Profile</span>
                  </span>
                  <span className="text-[#2e7d32] dark:text-[#4ade80] font-semibold">&lt; 1.5s CPU Latency</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                    <span className="block text-[10px] text-[#827b73] dark:text-[#9e978c]">YOLOv8 POSE</span>
                    <span className="text-[#181614] dark:text-[#f5f2eb]">17 Keypoints</span>
                  </div>
                  <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                    <span className="block text-[10px] text-[#827b73] dark:text-[#9e978c]">POLAR NORMAL</span>
                    <span className="text-[#181614] dark:text-[#f5f2eb]">64×512 Strip</span>
                  </div>
                  <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                    <span className="block text-[10px] text-[#827b73] dark:text-[#9e978c]">QUANTIZATION</span>
                    <span className="text-[#c82b2b] dark:text-[#ff6b6b] font-medium">ONNX INT8</span>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {cvDomain.skills.map((skill, sIdx) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  return (
                    <button
                      key={sIdx}
                      onClick={() => {
                        zenAudio.playWoodblock();
                        setSelectedSkill(
                          isSelected
                            ? null
                            : {
                                name: skill.name,
                                level: skill.level,
                                domain: cvDomain.domainTitle,
                                domainKanji: cvDomain.domainKanji,
                              }
                        );
                      }}
                      className={`text-left p-2.5 rounded-md text-xs font-mono transition-all duration-200 flex items-center justify-between border ${
                        isSelected
                          ? "bg-[#c82b2b]/15 dark:bg-[#e03e3e]/20 border-[#c82b2b] dark:border-[#e03e3e] shadow-sm text-[#181614] dark:text-[#f5f2eb] font-medium"
                          : "bg-[#ede8de]/40 dark:bg-[#201d1a]/80 border-[#181614]/8 dark:border-white/10 text-[#524d47] dark:text-[#d4cec3] hover:bg-[#ede8de] dark:hover:bg-[#282522] hover:text-[#181614] dark:hover:text-[#f5f2eb]"
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate">
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c82b2b] dark:bg-[#ff4d4d] flex-shrink-0" />
                        )}
                        <span className="truncate">{skill.name}</span>
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded border flex-shrink-0 ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer Footnote */}
            <div className="pt-4 border-t border-[#181614]/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-[#827b73] dark:text-[#9e978c]">
              <span>DEPLOYED: AUTOATC (SIH 2025) • UBIPR IRIS</span>
              <span className="text-[#c82b2b] dark:text-[#ff4d4d] font-medium">95.4% RANK-1</span>
            </div>
          </SpotlightCard>
        )}

        {/* ========================================================= */}
        {/* BENTO TILE 4: Systems & Data Infrastructure (Span: 6 cols)*/}
        {/* ========================================================= */}
        {infraDomain && (
          <SpotlightCard
            spotlightColor="rgba(200, 43, 43, 0.06)"
            className="lg:col-span-6 md:col-span-1 flex flex-col justify-between bg-[#fbf9f4]/95 dark:bg-[#181614]/95 border border-[#181614]/12 dark:border-white/10 shadow-sm washi-card"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-japanese text-sm text-[#c82b2b] dark:text-[#ff4d4d] font-semibold">
                    {infraDomain.domainKanji}
                  </span>
                  <span className="text-xs font-mono text-[#827b73] dark:text-[#78736a]">/</span>
                  <span className="text-xs font-mono text-[#524d47] dark:text-[#b8b2a7] uppercase tracking-wider">
                    Infrastructure &amp; ETL
                  </span>
                </div>
                <div className="p-2 rounded-md bg-[#ede8de]/60 dark:bg-[#25221e] border border-[#181614]/10 dark:border-white/10 text-[#2e7d32] dark:text-[#4ade80]">
                  <Server className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-[#181614] dark:text-[#f5f2eb] tracking-tight mb-1 font-display">
                {infraDomain.domainTitle}
              </h3>
              <p className="text-xs font-mono text-[#827b73] dark:text-[#a8a196] mb-5">
                {infraDomain.description}
              </p>

              {/* Medallion Lakehouse Feature Strip */}
              <div className="p-3.5 rounded-lg bg-[#ede8de]/50 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10 mb-6">
                <div className="flex items-center justify-between text-xs font-mono text-[#181614] dark:text-[#f5f2eb] mb-2">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Database className="w-3.5 h-3.5 text-[#8a681c] dark:text-[#e5be64]" />
                    <span>Medallion Lakehouse Architecture</span>
                  </span>
                  <span className="text-[#8a681c] dark:text-[#e5be64] font-semibold">ACID Delta Lake</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                    <span className="block text-[10px] text-[#827b73] dark:text-[#9e978c]">BRONZE</span>
                    <span className="text-[#181614] dark:text-[#f5f2eb]">Raw Stream</span>
                  </div>
                  <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                    <span className="block text-[10px] text-[#827b73] dark:text-[#9e978c]">SILVER</span>
                    <span className="text-[#181614] dark:text-[#f5f2eb]">Clean &amp; Quarantined</span>
                  </div>
                  <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                    <span className="block text-[10px] text-[#827b73] dark:text-[#9e978c]">GOLD</span>
                    <span className="text-[#c82b2b] dark:text-[#ff6b6b] font-medium">Aggregated Star</span>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {infraDomain.skills.map((skill, sIdx) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  return (
                    <button
                      key={sIdx}
                      onClick={() => {
                        zenAudio.playWoodblock();
                        setSelectedSkill(
                          isSelected
                            ? null
                            : {
                                name: skill.name,
                                level: skill.level,
                                domain: infraDomain.domainTitle,
                                domainKanji: infraDomain.domainKanji,
                              }
                        );
                      }}
                      className={`text-left p-2.5 rounded-md text-xs font-mono transition-all duration-200 flex items-center justify-between border ${
                        isSelected
                          ? "bg-[#c82b2b]/15 dark:bg-[#e03e3e]/20 border-[#c82b2b] dark:border-[#e03e3e] shadow-sm text-[#181614] dark:text-[#f5f2eb] font-medium"
                          : "bg-[#ede8de]/40 dark:bg-[#201d1a]/80 border-[#181614]/8 dark:border-white/10 text-[#524d47] dark:text-[#d4cec3] hover:bg-[#ede8de] dark:hover:bg-[#282522] hover:text-[#181614] dark:hover:text-[#f5f2eb]"
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate">
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c82b2b] dark:bg-[#ff4d4d] flex-shrink-0" />
                        )}
                        <span className="truncate">{skill.name}</span>
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded border flex-shrink-0 ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer Footnote */}
            <div className="pt-4 border-t border-[#181614]/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-[#827b73] dark:text-[#9e978c]">
              <span>DEPLOYED: FMCG LAKEHOUSE • FASTAPI MICROSERVICES</span>
              <span className="text-[#2e7d32] dark:text-[#4ade80]">DISTRIBUTED</span>
            </div>
          </SpotlightCard>
        )}
      </div>

      {/* Interactive Active Skill Telemetry Drawer */}
      {selectedSkill && (
        <div className="relative z-10 max-w-7xl mx-auto mt-6 p-3.5 sm:p-5 rounded-xl bg-[#fbf9f4] dark:bg-[#181614] border border-[#c82b2b]/40 dark:border-[#ff4d4d]/40 shadow-sm washi-card animate-fade-in flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="hanko-stamp px-2 py-0.5 text-xs font-semibold">特技</span>
              <span className="text-xs font-mono text-[#827b73] dark:text-[#9e978c]">
                {selectedSkill.domainKanji} {selectedSkill.domain}
              </span>
            </div>
            <span className="hidden sm:inline text-[#827b73] dark:text-[#9e978c]">•</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[#181614] dark:text-[#f5f2eb] font-display">
                {selectedSkill.name}
              </span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded border ${getLevelBadgeClass(
                  selectedSkill.level
                )}`}
              >
                {selectedSkill.level}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4">
            <p className="text-xs font-mono text-[#524d47] dark:text-[#d4cec3] max-w-xl">
              <strong className="text-[#181614] dark:text-[#f5f2eb]">Production Application:</strong>{" "}
              {getSkillDeployments(selectedSkill.name)}
            </p>
            <button
              onClick={() => {
                zenAudio.playWoodblock();
                setSelectedSkill(null);
              }}
              className="p-1.5 rounded-md hover:bg-[#ede8de] dark:hover:bg-[#282522] text-[#827b73] hover:text-[#181614] dark:hover:text-[#f5f2eb] transition-colors flex-shrink-0"
              aria-label="Clear selected skill"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
