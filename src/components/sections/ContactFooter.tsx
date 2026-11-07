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
      className="relative w-full pt-28 pb-20 px-6 sm:px-12 md:px-20 bg-[#f6f3eb] text-[#181614] border-t border-[#181614]/10 overflow-hidden"
    >
      {/* Background Zen Watermark */}
      <div className="absolute inset-0 flex items-center justify-end pr-12 pointer-events-none opacity-[0.03]">
        <span className="font-japanese text-[22vw] text-[#181614] leading-none select-none">
          結
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Column: Heading and Ma / Negative Space */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-japanese text-sm text-[#c82b2b] font-semibold">「結び」</span>
              <span className="text-xs font-mono text-[#524d47] tracking-widest uppercase">
                Direct Invocation &amp; Contact
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#181614] mb-4 font-display">
              Initiate Technical Collaboration
            </h2>
            <p className="text-base text-[#524d47] max-w-lg leading-relaxed mb-6">
              Available for full-time engineering appointments, research fellowships, and agentic AI / edge computer vision architecture projects.
            </p>

            {/* Candidate Identity Strip */}
            <div className="p-4 rounded-lg bg-[#fbf9f4] border border-[#181614]/12 max-w-md shadow-sm washi-card">
              <div className="flex items-center justify-between text-xs font-mono text-[#827b73] mb-1">
                <span>IDENTITY</span>
                <span className="text-[#c82b2b] font-medium">NAGPUR, INDIA</span>
              </div>
              <div className="text-sm font-semibold text-[#181614] font-display">
                {personal.fullName}
              </div>
              <div className="text-xs text-[#524d47] font-mono mt-0.5">
                {personal.identity}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Copy Email Terminals */}
          <div className="space-y-4">
            {/* Personal Email Card */}
            <div className="p-5 rounded-xl bg-[#fbf9f4] border border-[#181614]/12 hover:border-[#c82b2b]/40 transition-colors shadow-sm washi-card">
              <div className="flex items-center justify-between text-xs font-mono text-[#827b73] mb-2">
                <span className="flex items-center gap-1.5 text-[#c82b2b] font-medium">
                  <Mail className="w-3.5 h-3.5" />
                  <span>PRIMARY / PERSONAL INBOX</span>
                </span>
                <span>DIRECT ACCESS</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-sm sm:text-base text-[#181614] font-medium break-all">
                  {personal.personalEmail}
                </span>
                <button
                  onClick={() => copyToClipboard(personal.personalEmail, "personal")}
                  className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#ede8de] hover:bg-[#c82b2b] text-[#181614] hover:text-white text-xs font-mono transition-colors"
                >
                  {copiedEmail === "personal" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2e7d32]" />
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
            <div className="p-5 rounded-xl bg-[#fbf9f4] border border-[#181614]/12 hover:border-[#c82b2b]/40 transition-colors shadow-sm washi-card">
              <div className="flex items-center justify-between text-xs font-mono text-[#827b73] mb-2">
                <span className="flex items-center gap-1.5 text-[#8a681c] font-medium">
                  <Mail className="w-3.5 h-3.5" />
                  <span>INSTITUTIONAL / RESEARCH DISPATCH</span>
                </span>
                <span>ACADEMIC</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-sm sm:text-base text-[#181614] font-medium break-all">
                  {personal.institutionalEmail}
                </span>
                <button
                  onClick={() => copyToClipboard(personal.institutionalEmail, "institutional")}
                  className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#ede8de] hover:bg-[#c82b2b] text-[#181614] hover:text-white text-xs font-mono transition-colors"
                >
                  {copiedEmail === "institutional" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2e7d32]" />
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
            <div className="p-5 rounded-xl bg-[#fbf9f4] border border-[#181614]/12 hover:border-[#c82b2b]/40 transition-colors shadow-sm washi-card">
              <div className="flex items-center justify-between text-xs font-mono text-[#827b73] mb-2">
                <span className="flex items-center gap-1.5 text-[#524d47] font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#c82b2b]" />
                  <span>TELEPHONE / VOICE DISPATCH</span>
                </span>
                <span>UTC+5:30</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-sm sm:text-base text-[#181614] font-medium">
                  {personal.phone}
                </span>
                <button
                  onClick={() => copyToClipboard(personal.phone, "phone")}
                  className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#ede8de] hover:bg-[#c82b2b] text-[#181614] hover:text-white text-xs font-mono transition-colors"
                >
                  {copiedEmail === "phone" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2e7d32]" />
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
        <div className="pt-8 border-t border-[#181614]/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[#827b73]">
          <div className="flex items-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => zenAudio.playHoverTick()}
              className="flex items-center gap-1.5 hover:text-[#c82b2b] transition-colors"
            >
              <Github className="w-4 h-4 text-[#181614]" />
              <span>github.com/Nihar-Harde</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => zenAudio.playHoverTick()}
              className="flex items-center gap-1.5 hover:text-[#c82b2b] transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#0077b5]" />
              <span>linkedin.com/in/nihar-harde</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span>© 2026 NIHAR ATUL HARDE • WABI-SABI ARCHITECTURE</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-[#ede8de] hover:bg-[#c82b2b] text-[#181614] hover:text-white transition-colors"
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
