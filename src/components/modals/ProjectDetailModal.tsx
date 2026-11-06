"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { DOSSIER } from "@/data/dossier";
import { zenAudio } from "@/lib/audio";

interface ProjectDetailModalProps {
  projectId: string;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  projectId,
  onClose,
}) => {
  const project = DOSSIER.flagshipProjects.find((p) => p.id === projectId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.dispatchEvent(new CustomEvent("lenis:stop"));
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.dispatchEvent(new CustomEvent("lenis:start"));
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#181614]/60 backdrop-blur-md animate-fade-in"
      onClick={() => {
        zenAudio.playWoodblock();
        onClose();
      }}
    >
      <div
        data-lenis-prevent="true"
        className="washi-modal-container relative w-full max-w-3xl max-h-[86vh] p-6 sm:p-8 text-[#181614]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            zenAudio.playWoodblock();
            onClose();
          }}
          className="sticky top-0 float-right p-2 rounded-md bg-[#ede8de] hover:bg-[#c82b2b] text-[#524d47] hover:text-white border border-[#181614]/10 transition-colors z-20 shadow-md"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Kanji */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-japanese text-sm text-[#c82b2b] font-semibold">
            {project.categoryKanji}
          </span>
          <span className="text-xs font-mono text-[#827b73]">/</span>
          <span className="text-xs font-mono text-[#524d47] uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h2 id="modal-title" className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#181614] mb-2 font-display">
          {project.title}
        </h2>
        <p className="text-base text-[#524d47] mb-6 leading-relaxed">
          {project.tagline}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-lg bg-[#ede8de]/60 border border-[#181614]/10">
          {project.metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-lg sm:text-xl font-mono font-semibold text-[#c82b2b]">
                {m.value}
              </div>
              <div className="text-xs text-[#524d47] mt-0.5 font-mono">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Problem Statement */}
        <div className="mb-6">
          <h3 className="text-xs font-mono text-[#c82b2b] uppercase tracking-wider mb-2 font-semibold">
            Problem Statement &amp; Challenge
          </h3>
          <p className="text-sm text-[#524d47] leading-relaxed bg-[#ede8de]/50 p-4 rounded-lg border border-[#181614]/10">
            {project.problemStatement}
          </p>
        </div>

        {/* Architecture Notes */}
        <div className="mb-6">
          <h3 className="text-xs font-mono text-[#181614] uppercase tracking-wider mb-2 font-semibold">
            System Architecture &amp; Pipeline Implementation
          </h3>
          <p className="text-sm text-[#524d47] leading-relaxed bg-[#ede8de]/50 p-4 rounded-lg border border-[#181614]/10">
            {project.architectureNotes}
          </p>
        </div>

        {/* Technical Highlights */}
        <div className="mb-6">
          <h3 className="text-xs font-mono text-[#181614] uppercase tracking-wider mb-2 font-semibold">
            Key Engineering Highlights
          </h3>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#524d47]">
                <CheckCircle2 className="w-4 h-4 text-[#c82b2b] mt-0.5 flex-shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h3 className="text-xs font-mono text-[#827b73] uppercase tracking-wider mb-2 font-semibold">
            Technologies &amp; Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-md bg-[#ede8de] border border-[#181614]/10 text-xs font-mono text-[#181614]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-6 border-t border-[#181614]/10 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => zenAudio.playHoverTick()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#c82b2b] hover:bg-[#a81c1c] text-white text-xs sm:text-sm font-medium transition-all shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>View Source on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => {
              zenAudio.playWoodblock();
              onClose();
            }}
            className="px-4 py-2 rounded-md text-xs font-mono text-[#524d47] hover:text-[#181614] transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
