"use client";

import React, { useState } from "react";
import { DOSSIER } from "@/data/dossier";
import { Copy, Check, Mail, Phone, Github, Linkedin, ArrowUp } from "lucide-react";
import { zenAudio } from "@/lib/audio";

export const ContactFooter: React.FC = () => {
  const { personal } = DOSSIER;
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    zenAudio.playWoodblock();
    navigator.clipboard.writeText(text);
    setCopiedEmail(type);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const scrollToTop = () => {
    zenAudio.playWoodblock();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative w-full pt-28 pb-20 px-6 sm:px-12 md:px-20 bg-[#f6f3eb] dark:bg-[#121110] text-[#181614] dark:text-[#f5f2eb] border-t border-[#181614]/10 dark:border-white/10 overflow-hidden transition-colors duration-300"
    >
      {/* Background Zen Watermark — Boosted */}
      <div className="absolute inset-0 flex items-center justify-end pr-12 pointer-events-none opacity-[0.05] dark:opacity-[0.08]">
        <span className="font-japanese text-[22vw] text-[#181614] dark:text-[#f5f2eb] leading-none select-none">
          結
        </span>
      </div>

      {/* Seigaiha Wave Accent — Bottom Left */}
      <svg className="absolute bottom-0 left-0 w-[400px] h-[160px] pointer-events-none opacity-[0.08] dark:opacity-[0.12]" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" className="text-[#181614] dark:text-[#f5f2eb]" strokeWidth="1.4">
          <path d="M 10 60 A 35 35 0 0 1 80 60" />
          <path d="M 18 60 A 27 27 0 0 1 72 60" />
          <path d="M 26 60 A 19 19 0 0 1 64 60" />
          <path d="M 80 60 A 35 35 0 0 1 150 60" stroke="#c82b2b" opacity="0.45" />
          <path d="M 88 60 A 27 27 0 0 1 142 60" stroke="#c82b2b" opacity="0.45" />
          <path d="M 150 60 A 35 35 0 0 1 220 60" />
          <path d="M 158 60 A 27 27 0 0 1 212 60" />
        </g>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Column: Heading and Ma / Negative Space */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-japanese text-sm text-[#c82b2b] dark:text-[#e03e3e] font-semibold">「結び」</span>
              <span className="text-xs font-mono text-[#524d47] dark:text-[#b8b2a7] tracking-widest uppercase">
                Direct Invocation &amp; Contact
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#181614] dark:text-[#f5f2eb] mb-4 font-display">
              Initiate Technical Collaboration
            </h2>
            <p className="text-base text-[#524d47] dark:text-[#b8b2a7] max-w-lg leading-relaxed mb-6">
              Available for full-time engineering appointments, research fellowships, and agentic AI / edge computer vision architecture projects.
            </p>

            {/* Candidate Identity Strip */}
            <div className="p-4 rounded-lg bg-[#fbf9f4] dark:bg-[#181614]/95 border border-[#181614]/12 dark:border-white/10 max-w-md shadow-sm washi-card">
              <div className="flex items-center justify-between text-xs font-mono text-[#827b73] dark:text-[#9e978c] mb-1">
                <span>IDENTITY</span>
                <span className="text-[#c82b2b] dark:text-[#ff4d4d] font-medium">NAGPUR, INDIA</span>
              </div>
              <div className="text-sm font-semibold text-[#181614] dark:text-[#f5f2eb] font-display">
                {personal.fullName}
              </div>
              <div className="text-xs text-[#524d47] dark:text-[#b8b2a7] font-mono mt-0.5">
                {personal.identity}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Copy Email Terminals */}
          <div className="space-y-4">
            {/* Personal Email Card */}
            <div className="p-5 rounded-xl bg-[#fbf9f4] dark:bg-[#181614]/95 border border-[#181614]/12 dark:border-white/10 hover:border-[#c82b2b]/40 dark:hover:border-[#c82b2b]/50 transition-colors shadow-sm washi-card">
              <div className="flex items-center justify-between text-xs font-mono text-[#827b73] dark:text-[#9e978c] mb-2">
                <span className="flex items-center gap-1.5 text-[#c82b2b] dark:text-[#ff4d4d] font-medium">
                  <Mail className="w-3.5 h-3.5" />
                  <span>PRIMARY / PERSONAL INBOX</span>
                </span>
                <span>DIRECT ACCESS</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-sm sm:text-base text-[#181614] dark:text-[#f5f2eb] font-medium break-all">
                  {personal.personalEmail}
                </span>
                <button
                  onClick={() => copyToClipboard(personal.personalEmail, "personal")}
                  className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#ede8de] dark:bg-[#25221e] hover:bg-[#c82b2b] text-[#181614] dark:text-[#f5f2eb] hover:text-white dark:hover:text-white text-xs font-mono transition-colors"
                >
                  {copiedEmail === "personal" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2e7d32] dark:text-[#4ade80]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Institutional Email Card */}
            <div className="p-5 rounded-xl bg-[#fbf9f4] dark:bg-[#181614]/95 border border-[#181614]/12 dark:border-white/10 hover:border-[#c82b2b]/40 dark:hover:border-[#c82b2b]/50 transition-colors shadow-sm washi-card">
              <div className="flex items-center justify-between text-xs font-mono text-[#827b73] dark:text-[#9e978c] mb-2">
                <span className="flex items-center gap-1.5 text-[#8a681c] dark:text-[#e5be64] font-medium">
                  <Mail className="w-3.5 h-3.5" />
                  <span>INSTITUTIONAL / RESEARCH DISPATCH</span>
                </span>
                <span>ACADEMIC</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-sm sm:text-base text-[#181614] dark:text-[#f5f2eb] font-medium break-all">
                  {personal.institutionalEmail}
                </span>
                <button
                  onClick={() => copyToClipboard(personal.institutionalEmail, "institutional")}
                  className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#ede8de] dark:bg-[#25221e] hover:bg-[#c82b2b] text-[#181614] dark:text-[#f5f2eb] hover:text-white dark:hover:text-white text-xs font-mono transition-colors"
                >
                  {copiedEmail === "institutional" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2e7d32] dark:text-[#4ade80]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Telephone Dispatch Card */}
            <div className="p-5 rounded-xl bg-[#fbf9f4] dark:bg-[#181614]/95 border border-[#181614]/12 dark:border-white/10 hover:border-[#c82b2b]/40 dark:hover:border-[#c82b2b]/50 transition-colors shadow-sm washi-card">
              <div className="flex items-center justify-between text-xs font-mono text-[#827b73] dark:text-[#9e978c] mb-2">
                <span className="flex items-center gap-1.5 text-[#524d47] dark:text-[#b8b2a7] font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#c82b2b] dark:text-[#ff4d4d]" />
                  <span>TELEPHONE / VOICE DISPATCH</span>
                </span>
                <span>UTC+5:30</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-sm sm:text-base text-[#181614] dark:text-[#f5f2eb] font-medium">
                  {personal.phone}
                </span>
                <button
                  onClick={() => copyToClipboard(personal.phone, "phone")}
                  className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#ede8de] dark:bg-[#25221e] hover:bg-[#c82b2b] text-[#181614] dark:text-[#f5f2eb] hover:text-white dark:hover:text-white text-xs font-mono transition-colors"
                >
                  {copiedEmail === "phone" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2e7d32] dark:text-[#4ade80]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Network Links & Back to Top */}
        <div className="pt-8 border-t border-[#181614]/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[#827b73] dark:text-[#9e978c]">
          <div className="flex items-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => zenAudio.playHoverTick()}
              className="flex items-center gap-1.5 hover:text-[#c82b2b] dark:hover:text-[#ff4d4d] transition-colors"
            >
              <Github className="w-4 h-4 text-[#181614] dark:text-[#f5f2eb]" />
              <span>github.com/Nihar-Harde</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => zenAudio.playHoverTick()}
              className="flex items-center gap-1.5 hover:text-[#c82b2b] dark:hover:text-[#ff4d4d] transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#0077b5]" />
              <span>linkedin.com/in/nihar-harde</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span>© 2026 NIHAR ATUL HARDE • WABI-SABI ARCHITECTURE</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-[#ede8de] dark:bg-[#25221e] hover:bg-[#c82b2b] text-[#181614] dark:text-[#f5f2eb] hover:text-white transition-colors"
              aria-label="Scroll to top of portfolio"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
