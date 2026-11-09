import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import "katex/dist/katex.min.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nihar-harde.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nihar Harde | Agentic AI & Edge Vision Engineer",
  description:
    "Personal engineering and research portfolio of Nihar Atul Harde. Autonomous agentic pipelines, real-time edge computer vision (YOLOv8 INT8), and generative AI tensor logit optimization.",
  keywords: [
    "Nihar Harde",
    "Nihar Atul Harde",
    "Agentic AI Engineer",
    "Edge Computer Vision",
    "YOLOv8 INT8",
    "TNARE Patent",
    "IEEE OCIT 2026",
    "Legal RAG",
    "Brief2Reel",
    "Auto ATC",
    "Ramdeobaba University",
    "FastAPI",
    "PyTorch",
    "Databricks Lakehouse",
  ],
  authors: [{ name: "Nihar Atul Harde", url: "https://github.com/Nihar-Harde" }],
  creator: "Nihar Atul Harde",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=hanko", sizes: "any" },
      { url: "/icon.svg?v=hanko", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico?v=hanko",
    apple: "/icon.svg?v=hanko",
  },
  openGraph: {
    title: "Nihar Harde | Agentic AI & Edge Vision Engineer",
    description:
      "Autonomous Agentic Pipelines • Real-Time Edge Vision • Generative AI Logit Optimization • IEEE OCIT 2026 Author",
    url: siteUrl,
    siteName: "Nihar Harde Portfolio",
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "/icon.svg",
        width: 200,
        height: 200,
        alt: "Nihar Harde Hanko Seal Stamp (晴)",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Nihar Harde | Agentic AI & Edge Vision Engineer",
    description:
      "Autonomous Agentic Pipelines • Real-Time Edge Vision • Generative AI Logit Optimization",
    images: ["/icon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Nihar Atul Harde",
      alternateName: ["Nihar Harde", "ハード・ニハル"],
      jobTitle: "Agentic AI & Edge Vision Engineer",
      email: "niharharde@gmail.com",
      telephone: "+91-7888043666",
      url: siteUrl,
      image: `${siteUrl}/icon.svg`,
      sameAs: [
        "https://github.com/Nihar-Harde",
        "https://www.linkedin.com/in/nihar-harde-41480228a",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Ramdeobaba University",
        alternateName: "Shri Ramdeobaba College of Engineering and Management (RCOEM)",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nagpur",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      },
      knowsAbout: [
        "Agentic AI",
        "Multi-Agent Systems",
        "LangGraph",
        "Computer Vision",
        "YOLOv8",
        "ONNX Runtime INT8 Quantization",
        "Generative AI",
        "Large Language Models",
        "Retrieval-Augmented Generation (RAG)",
        "PyTorch",
        "FastAPI",
        "Databricks Lakehouse",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Japanese Language Proficiency Test (JLPT) N4 Certified",
          credentialCategory: "Language Certification",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "TiHAN Autonomous Aerial Drone AI Fellowship",
          recognizedBy: {
            "@type": "CollegeOrUniversity",
            name: "Indian Institute of Technology (IIT) Hyderabad",
          },
        },
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Nihar Harde | Agentic AI & Edge Vision Engineer",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Nihar Harde Engineering Portfolio",
      },
      about: { "@id": `${siteUrl}/#person` },
      mainEntity: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ScholarlyArticle",
      headline:
        "Design and Implementation of a Legal Information Retrieval and Decision Support System Using RAG",
      name: "Design and Implementation of a Legal Information Retrieval and Decision Support System Using RAG",
      author: [
        { "@type": "Person", name: "Uma Yadav" },
        { "@type": "Person", name: "Nihar Harde" },
        { "@type": "Person", name: "Piyush Patle" },
      ],
      publication: {
        "@type": "PublicationEvent",
        name: "2026 24th OITS International Conference on Information Technology (OCIT)",
        publisher: {
          "@type": "Organization",
          name: "IEEE",
        },
      },
      datePublished: "2026-11",
    },
    {
      "@type": "SoftwareSourceCode",
      name: "Brief2Reel",
      description:
        "Multi-agent content orchestration pipeline translating structured marketing briefs into brand-aligned short video reels with LLM-as-a-judge quality scoring.",
      codeRepository: "https://github.com/Nihar-Harde/Brief2Reel",
      programmingLanguage: ["Python", "FastAPI"],
      author: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "SoftwareSourceCode",
      name: "Auto ATC",
      description:
        "Automated livestock computer vision and Body Condition Scoring system benchmarked across 41 domestic breeds with INT8 ONNX CPU quantization.",
      codeRepository: "https://github.com/Nihar-Harde/AutoATC",
      programmingLanguage: ["Python", "OpenCV", "YOLOv8", "PyTorch"],
      author: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "SoftwareSourceCode",
      name: "LexMind",
      description:
        "Trilingual enterprise legal RAG system over Indian financial statutes (SEBI, RBI, PMLA) with hybrid dense-sparse retrieval.",
      codeRepository: "https://github.com/Nihar-Harde/LexMind",
      programmingLanguage: ["Python", "FastAPI", "ChromaDB", "LangChain"],
      author: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f3eb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=hanko" sizes="any" />
        <link rel="icon" href="/icon.svg?v=hanko" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg?v=hanko" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Geist+Mono:wght@300;400;500;600;700&family=Geist:wght@300;400;500;600;700&family=Shippori+Mincho:wght@400;500;600;700&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#f6f3eb] dark:bg-[#121110] text-[#181614] dark:text-[#f5f2eb] selection:bg-[#c82b2b]/20 selection:text-[#c82b2b] antialiased min-h-screen relative overflow-x-hidden font-sans transition-colors duration-300">
        {/* Custom Sumi-Ink & Vermilion Trail Cursor */}
        <CustomCursor />

        {/* Ambient Washi Paper Noise Overlay */}
        <div className="washi-overlay pointer-events-none" aria-hidden="true" />
        
        {/* Lenis Smooth Scroll Context */}
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
