"use client";

import React, { useState } from "react";
import { DOSSIER } from "@/data/dossier";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ProjectDetailModal } from "@/components/modals/ProjectDetailModal";
import { ProjectsVectorBackdrop } from "@/components/ui/VectorBackdrops";
import { zenAudio } from "@/lib/audio";
import {
  Sparkles,
  ArrowUpRight,
  Workflow,
  Cpu,
  Layers,
  Activity,
  Boxes,
  Database,
  Eye,
  ScanEye,
} from "lucide-react";

export const ProjectsBentoSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const categories = [
    "All",
    "Agentic AI",
    "Legal RAG",
    "Computer Vision & Edge AI",
    "Data Engineering",
  ];

  const filteredProjects = DOSSIER.flagshipProjects.filter((p) =>
    selectedCategory === "All" ? true : p.category === selectedCategory
  );

  return (
    <section
      id="flagship-projects"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-20 bg-[#f6f3eb] dark:bg-[#121110] text-[#181614] dark:text-[#f5f2eb] overflow-hidden transition-colors duration-300"
    >
      {/* Sumi Divider Line */}
      <div className="sumi-divider absolute top-0 left-0" />

      {/* Vector Art Backdrop: Kumiko Asanoha Lattice & Pagoda Contours */}
      <div className="vector-bg-decor absolute inset-0 pointer-events-none overflow-hidden z-0">
        <ProjectsVectorBackdrop />
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-japanese text-[#c82b2b] dark:text-[#e03e3e] tracking-wider font-semibold">
            「旗艦プロジェクト」
          </span>
          <span className="h-[1px] w-8 bg-[#c82b2b]/40" />
          <span className="text-xs font-mono text-[#524d47] dark:text-[#b8b2a7] tracking-widest uppercase">
            Engineering Workflows &amp; Systems
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#181614] dark:text-[#f5f2eb] font-display">
              Flagship Engineering Deployments
            </h2>
            <p className="mt-2 text-base text-[#524d47] dark:text-[#b8b2a7] max-w-2xl leading-relaxed">
              High-consequence pipelines engineered across autonomous agent loops, quantized edge vision, and distributed lakehouse architectures.
            </p>
          </div>

          {/* Category Filter Pills (Minimalist Japanese Design) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-md bg-[#ede8de]/60 dark:bg-[#1e1c19] border border-[#181614]/10 dark:border-white/10 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  zenAudio.playWoodblock();
                  setSelectedCategory(cat);
                }}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#c82b2b] text-white shadow-sm font-medium"
                    : "text-[#524d47] dark:text-[#b8b2a7] hover:text-[#181614] dark:hover:text-[#f5f2eb] hover:bg-[#ede8de] dark:hover:bg-[#282522]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bento Grid Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const isLarge = project.bentoSpan === "large";
          const isBrief2Reel = project.id === "brief2reel";
          const isLexMind = project.id === "lexmind";
          const isAutoATC = project.id === "autoatc";
          const isIrisRecognition = project.id === "iris-recognition";

          return (
            <SpotlightCard
              key={project.id}
              spotlightColor="rgba(200, 43, 43, 0.07)"
              className={`flex flex-col justify-between bg-[#fbf9f4]/95 dark:bg-[#181614]/95 border border-[#181614]/12 dark:border-white/10 shadow-sm washi-card ${
                isLarge ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                {/* Header Tag & Kanji */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-japanese text-xs text-[#c82b2b] dark:text-[#ff4d4d] font-semibold">
                      {project.categoryKanji}
                    </span>
                    <span className="text-xs font-mono text-[#827b73] dark:text-[#78736a]">/</span>
                    <span className="text-xs font-mono text-[#524d47] dark:text-[#b8b2a7] uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  {project.featured && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#c59b48]/15 dark:bg-[#c59b48]/25 border border-[#c59b48]/30 dark:border-[#c59b48]/40 text-[#8a681c] dark:text-[#e5be64] font-medium">
                      Flagship System
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-[#181614] dark:text-[#f5f2eb] tracking-tight mb-2 font-display">
                  {project.title}
                </h3>

                {/* Tagline / Summary */}
                <p className="text-sm text-[#524d47] dark:text-[#b8b2a7] leading-relaxed mb-6">
                  {project.tagline}
                </p>

                {/* Quantitative Metrics Bar */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-[#ede8de]/60 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10 mb-6">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-sm sm:text-base font-mono font-semibold text-[#c82b2b] dark:text-[#ff4d4d]">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-[#524d47] dark:text-[#b8b2a7] mt-0.5 font-mono truncate">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Specialized Interactive Mini-Visualizer inside large Bento cards */}
                {isBrief2Reel && (
                  <div className="p-3.5 rounded-lg bg-[#ede8de]/50 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between text-xs font-mono text-[#181614] dark:text-[#f5f2eb] mb-2">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <Workflow className="w-3.5 h-3.5 text-[#c82b2b] dark:text-[#ff4d4d]" />
                        <span>LangGraph Dual-State Actuation</span>
                      </span>
                      <span className="text-[#2e7d32] dark:text-[#4ade80]">Synchronized</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                      <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                        <span className="block text-[10px] text-[#827b73] dark:text-[#9e978c]">STAGE 1</span>
                        <span className="text-[#181614] dark:text-[#f5f2eb]">Scripting</span>
                      </div>
                      <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                        <span className="block text-[10px] text-[#827b73] dark:text-[#9e978c]">STAGE 2</span>
                        <span className="text-[#181614] dark:text-[#f5f2eb]">Audio Track</span>
                      </div>
                      <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                        <span className="block text-[10px] text-[#827b73] dark:text-[#9e978c]">STAGE 3</span>
                        <span className="text-[#c82b2b] dark:text-[#ff6b6b] font-medium">60fps Render</span>
                      </div>
                    </div>
                  </div>
                )}

                {isAutoATC && (
                  <div className="p-3.5 rounded-lg bg-[#ede8de]/50 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between text-xs font-mono text-[#181614] dark:text-[#f5f2eb] mb-2">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <Cpu className="w-3.5 h-3.5 text-[#c82b2b] dark:text-[#ff4d4d]" />
                        <span>Edge AI Quantization Profile</span>
                      </span>
                      <span className="text-[#c82b2b] dark:text-[#ff6b6b]">120 FPS Benchmark</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#524d47] dark:text-[#d4cec3]">
                      <span>Model: YOLOv8 INT8 Engine</span>
                      <span>Target: Jetson Nano</span>
                    </div>
                  </div>
                )}

                {isIrisRecognition && (
                  <div className="p-3.5 rounded-lg bg-[#ede8de]/50 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10 mb-6">
                    <div className="flex items-center justify-between text-xs font-mono text-[#181614] dark:text-[#f5f2eb] mb-2">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <ScanEye className="w-3.5 h-3.5 text-[#c82b2b] dark:text-[#ff4d4d]" />
                        <span>UBIPr Polar Normalization Engine</span>
                      </span>
                      <span className="text-[#2e7d32] dark:text-[#4ade80] font-semibold">95.4% Rank-1 Match</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                      <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                        <span className="block text-[10px] text-[#827b73] dark:text-[#9e978c]">DUAL-EYE</span>
                        <span className="text-[#181614] dark:text-[#f5f2eb]">64×512 Strip</span>
                      </div>
                      <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                        <span className="block text-[10px] text-[#827b73] dark:text-[#9e978c]">ENCODING</span>
                        <span className="text-[#181614] dark:text-[#f5f2eb]">1024b Gabor</span>
                      </div>
                      <div className="p-2 rounded bg-[#f6f3eb] dark:bg-[#282522] border border-[#181614]/10 dark:border-white/10">
                        <span className="block text-[10px] text-[#827b73] dark:text-[#9e978c]">LATENCY</span>
                        <span className="text-[#c82b2b] dark:text-[#ff6b6b] font-medium">0.10ms (LBP)</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#ede8de] dark:bg-[#221f1c] border border-[#181614]/10 dark:border-white/10 text-[#524d47] dark:text-[#d4cec3]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-[#181614]/10 dark:border-white/10">
                <button
                  onClick={() => {
                    zenAudio.playWoodblock();
                    setActiveModalId(project.id);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#c82b2b] dark:text-[#ff6b6b] hover:text-[#a81c1c] dark:hover:text-[#ff9999] transition-colors font-medium"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect System Architecture</span>
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => zenAudio.playHoverTick()}
                    className="p-2 rounded-md hover:bg-[#ede8de] dark:hover:bg-[#282522] text-[#524d47] dark:text-[#b8b2a7] hover:text-[#181614] dark:hover:text-[#f5f2eb] transition-colors"
                    aria-label={`View ${project.title} GitHub repo`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* Selected Project Full Architecture Deep-Dive Modal */}
      {activeModalId && (
        <ProjectDetailModal
          projectId={activeModalId}
          onClose={() => setActiveModalId(null)}
        />
      )}
    </section>
  );
};
