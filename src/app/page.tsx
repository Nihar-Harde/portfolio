"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TaglineReveal } from "@/components/sections/TaglineReveal";
import { ResearchPatentSection } from "@/components/sections/ResearchPatentSection";
import { ProjectsBentoSection } from "@/components/sections/ProjectsBentoSection";
import { SkillsMatrixSection } from "@/components/sections/SkillsMatrixSection";
import { CredentialsSection } from "@/components/sections/CredentialsSection";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { TopNav } from "@/components/navigation/TopNav";
import { DossierModal } from "@/components/modals/DossierModal";
import { Preloader } from "@/components/ui/Preloader";

export default function HomePage() {
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  return (
    <main className="relative min-h-screen w-full bg-[#f6f3eb] dark:bg-[#121110] text-[#181614] dark:text-[#f5f2eb] overflow-x-hidden transition-colors duration-300">
      {/* Branded Loading Choreography with Vermilion Brush Wipe */}
      <Preloader />

      {/* Top-Right Plain Text Navigation Bar (Zero container box, plain text links) */}
      <TopNav onOpenDossier={() => setIsDossierOpen(true)} />

      {/* 1. Hero Section: The Floating World Horizon (浮世) with Mt. Fuji Scenery */}
      <HeroSection onOpenDossier={() => setIsDossierOpen(true)} />

      {/* 2. Tagline Reveal Section (Core Philosophy 「理念」) with Integrated Multi-Directional Sumi-e Canvas */}
      <TaglineReveal />

      {/* 3. Research & Intellectual Property (研究と特許) */}
      <ResearchPatentSection />

      {/* 4. Flagship Projects Bento (旗艦プロジェクト) */}
      <ProjectsBentoSection />

      {/* 5. Technical Skills Matrix & Actuation (技術体系) */}
      <SkillsMatrixSection />

      {/* 6. Credentials, Education & Japanese Distinction (経歴・資格) */}
      <CredentialsSection />

      {/* 7. Contact & Terminal Footer (結び) */}
      <ContactFooter />

      {/* Candidate Dossier & Resume Inspection Modal */}
      <DossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />
    </main>
  );
}
