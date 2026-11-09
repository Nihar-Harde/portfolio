"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Copy, Check, Printer, ShieldCheck } from "lucide-react";
import { DOSSIER } from "@/data/dossier";
import { zenAudio } from "@/lib/audio";

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const { personal, education, researchPaper, patent, flagshipProjects } = DOSSIER;

  useEffect(() => {
    setMounted(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      window.dispatchEvent(new CustomEvent("lenis:stop"));
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.dispatchEvent(new CustomEvent("lenis:start"));
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const handleCopySummary = () => {
    zenAudio.playWoodblock();
    const summaryText = `
CANDIDATE DOSSIER: NIHAR ATUL HARDE
Professional Identity: Agentic AI & Edge Vision Engineer
Location: Nagpur, Maharashtra, India
Email: ${personal.personalEmail} | ${personal.institutionalEmail}
Education: B.Tech CSE (Data Science), Ramdeobaba University (2023-2027) | CGPA: 8.33/10.00
Research: First-Author Accepted Paper in IEEE Xplore (OCIT 2026, Paper ID: 196) - Legal RAG System
Patent: Lead Inventor, TNARE - Dynamic Logit Damping (IPO Mumbai, Form IPR-PAT-01 v1.1)
Certifications: TiHAN IIT Hyderabad (Aerial Edge AI), JLPT N4 Japanese Certified
Flagship Projects: Brief2Reel, LexMind, AutoATC, UBIPr Iris Recognition, FMCG Lakehouse
GitHub: ${personal.github} | LinkedIn: ${personal.linkedin}
    `.trim();

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    zenAudio.playWoodblock();
    window.print();
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-modal-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-[#181614]/75 dark:bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={() => {
        zenAudio.playWoodblock();
        onClose();
      }}
    >
      <div
        data-lenis-prevent="true"
        className="washi-modal-container modal-ink-wash relative w-full max-w-4xl max-h-[92dvh] sm:max-h-[86vh] my-auto p-4 sm:p-7 md:p-10 bg-[#fbf9f4] dark:bg-[#181614] border border-[#181614]/15 dark:border-white/15 text-[#181614] dark:text-[#f5f2eb] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            zenAudio.playWoodblock();
            onClose();
          }}
          className="sticky top-0 float-right p-2 rounded-md bg-[#ede8de] dark:bg-[#25221e] hover:bg-[#c82b2b] text-[#524d47] dark:text-[#b8b2a7] hover:text-white border border-[#181614]/10 dark:border-white/10 transition-colors z-20 shadow-md"
          aria-label="Close dossier modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-[#181614]/10 dark:border-white/10 pb-4 sm:pb-6 mb-6 sm:mb-8">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="hanko-stamp px-2 py-0.5 text-xs font-semibold whitespace-nowrap flex-shrink-0">「履歴書・調書」</span>
              <span className="text-[10px] font-mono tracking-widest text-[#827b73] dark:text-[#9e978c] uppercase">
                Verified Candidate Dossier
              </span>
            </div>
            <h2 id="dossier-modal-title" className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-[#181614] dark:text-[#f5f2eb] font-display">
              {personal.fullName}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#c82b2b] dark:text-[#e03e3e] mt-1">
              {personal.identity} • {personal.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-md bg-[#ede8de] dark:bg-[#23201c] hover:bg-[#ede8de]/80 border border-[#181614]/10 dark:border-white/10 text-xs font-mono text-[#181614] dark:text-[#f5f2eb] transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-[#2e7d32]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Copied" : "Copy Dossier"}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-md bg-[#c82b2b] hover:bg-[#a81c1c] text-white text-xs font-mono transition-colors shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>

        {/* Candidate Dossier Grid */}
        <div className="space-y-8 text-sm">
          {/* Section: Academic Foundation */}
          <div>
            <h3 className="text-xs font-mono text-[#c82b2b] dark:text-[#e03e3e] uppercase tracking-wider mb-3 font-semibold">
              01. Academic Education &amp; Standing
            </h3>
            <div className="p-4 rounded-lg bg-[#ede8de]/60 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                <span className="font-semibold text-[#181614] dark:text-[#f5f2eb] font-display">
                  {education.institution}
                </span>
                <span className="text-xs font-mono text-[#8a681c] dark:text-[#dfb15b]">
                  {education.period}
                </span>
              </div>
              <div className="text-xs text-[#524d47] dark:text-[#b8b2a7] mb-2">
                {education.degree} in {education.specialization}
              </div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#f6f3eb] dark:bg-[#161513] border border-[#181614]/10 dark:border-white/10 text-xs font-mono text-[#181614] dark:text-[#f5f2eb]">
                <span>Cumulative Grade Point Average:</span>
                <span className="text-[#c82b2b] dark:text-[#e03e3e] font-semibold">{education.gpa} / {education.gpaScale}</span>
              </div>
            </div>
          </div>

          {/* Section: Intellectual Property */}
          <div>
            <h3 className="text-xs font-mono text-[#c82b2b] dark:text-[#e03e3e] uppercase tracking-wider mb-3 font-semibold">
              02. Intellectual Property &amp; Publications
            </h3>
            <div className="space-y-4">
              {/* Paper */}
              <div className="p-4 rounded-lg bg-[#ede8de]/60 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-[#8a681c] dark:text-[#dfb15b] mb-1">
                  <span>ACCEPTED RESEARCH PAPER (FIRST AUTHOR)</span>
                  <span>Paper ID: {researchPaper.paperId}</span>
                </div>
                <div className="text-sm font-semibold text-[#181614] dark:text-[#f5f2eb] mb-1 font-display">
                  {researchPaper.title}
                </div>
                <div className="text-xs text-[#827b73] dark:text-[#9e978c] mb-2 font-mono">
                  {researchPaper.venue} • {researchPaper.indexing}
                </div>
                <p className="text-xs text-[#524d47] dark:text-[#d4cec3] leading-relaxed mb-3">
                  {researchPaper.abstract}
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-[#c82b2b] dark:text-[#e03e3e]">
                  <span>Faithfulness: 0.875</span>
                  <span>Context Precision: 0.892</span>
                  <span>Legal Fidelity: 1.000</span>
                </div>
              </div>

              {/* Patent */}
              <div className="p-4 rounded-lg bg-[#ede8de]/60 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10">
                <div className="flex items-center justify-between text-xs font-mono text-[#c82b2b] dark:text-[#e03e3e] mb-1">
                  <span>LEAD PATENT INVENTOR</span>
                  <span>{patent.form}</span>
                </div>
                <div className="text-sm font-semibold text-[#181614] dark:text-[#f5f2eb] mb-1 font-display">
                  {patent.acronym}: {patent.title}
                </div>
                <div className="text-xs text-[#827b73] dark:text-[#9e978c] mb-2 font-mono">
                  {patent.jurisdiction} • {patent.stage}
                </div>
                <p className="text-xs text-[#524d47] dark:text-[#d4cec3] leading-relaxed mb-3">
                  {patent.noveltySummary}
                </p>
                <div className="flex flex-wrap gap-3 text-xs font-mono text-[#524d47] dark:text-[#d4cec3]">
                  <span>+23.4% Diversity</span>
                  <span>-38.2% Repetition</span>
                  <span>&lt; 110ms Latency</span>
                  <span>&lt; 600MB Overhead</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Flagship Projects */}
          <div>
            <h3 className="text-xs font-mono text-[#181614] dark:text-[#f5f2eb] uppercase tracking-wider mb-3 font-semibold">
              03. Curated Engineering Deployments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {flagshipProjects.map((p) => (
                <div key={p.id} className="p-3.5 rounded-lg bg-[#ede8de]/60 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10">
                  <div className="flex items-center justify-between text-xs font-mono text-[#c82b2b] dark:text-[#e03e3e] mb-1">
                    <span className="font-semibold text-[#181614] dark:text-[#f5f2eb] font-display">{p.title}</span>
                    <span>{p.category}</span>
                  </div>
                  <p className="text-xs text-[#524d47] dark:text-[#d4cec3] mb-2 leading-relaxed">
                    {p.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {p.stack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded bg-[#f6f3eb] dark:bg-[#161513] text-[10px] font-mono text-[#524d47] dark:text-[#d4cec3]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Credentials and Languages */}
          <div>
            <h3 className="text-xs font-mono text-[#8a681c] dark:text-[#dfb15b] uppercase tracking-wider mb-3 font-semibold">
              04. Certifications &amp; Linguistic Profile
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg bg-[#ede8de]/60 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10">
                <span className="text-xs font-mono text-[#c82b2b] dark:text-[#e03e3e] block mb-1">IIT HYDERABAD TIHAN</span>
                <span className="text-sm font-semibold text-[#181614] dark:text-[#f5f2eb] block font-display">Autonomous Drone AI &amp; Edge Vision</span>
                <span className="text-xs text-[#524d47] dark:text-[#b8b2a7] mt-1 block">June 2026</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#ede8de]/60 dark:bg-[#201d1a] border border-[#181614]/10 dark:border-white/10">
                <span className="text-xs font-mono text-[#8a681c] dark:text-[#dfb15b] block mb-1">THE JAPAN FOUNDATION</span>
                <span className="text-sm font-semibold text-[#181614] dark:text-[#f5f2eb] block font-display">JLPT N4 Certified (日本語能力試験)</span>
                <span className="text-xs text-[#524d47] dark:text-[#b8b2a7] mt-1 block">Certified 2026 • ~300 Kanji</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-[#181614]/10 dark:border-white/10 flex items-center justify-between text-xs font-mono text-[#827b73] dark:text-[#9e978c]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#2e7d32]" />
            <span>AUTHENTICATED DOSSIER • RAMDEOBABA UNIVERSITY</span>
          </div>
          <button
            onClick={() => {
              zenAudio.playWoodblock();
              onClose();
            }}
            className="px-4 py-2 rounded-md bg-[#ede8de] dark:bg-[#23201c] hover:bg-[#ede8de]/80 text-[#181614] dark:text-[#f5f2eb] transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
