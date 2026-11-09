import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import "katex/dist/katex.min.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Nihar Harde | Agentic AI & Edge Vision Engineer",
  description:
    "Personal engineering and research portfolio of Nihar Atul Harde. Autonomous agentic pipelines, real-time edge computer vision, and generative AI tensor logit optimization.",
  keywords: [
    "Nihar Harde",
    "Agentic AI",
    "Edge Vision",
    "Computer Vision",
    "YOLOv8",
    "TNARE",
    "IEEE OCIT",
    "Legal RAG",
    "Ramdeobaba University",
    "FastAPI",
    "Three.js",
  ],
  authors: [{ name: "Nihar Atul Harde", url: "https://github.com/Nihar-Harde" }],
  creator: "Nihar Atul Harde",
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
      "Autonomous Agentic Pipelines • Real-Time Edge Vision • Generative AI Logit Optimization",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
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
