# Wabi-Sabi & Ukiyo-e Engineering & Research Portfolio
### Nihar Atul Harde — Agentic AI & Edge Vision Engineer

An award-winning caliber (Awwwards / FWA standard) personal engineering and research portfolio built with Next.js 15 (App Router), TypeScript, React 19, GSAP ScrollTrigger, Lenis Smooth Scroll, and Tailwind CSS.

---

## 1. Aesthetic Direction: "Wabi-Sabi + Ukiyo-e Graphic with Japanese Minimalism"

The portfolio synthesizes three aesthetic and philosophical pillars:
1. **Wabi-Sabi Materiality & Earth Ground**:
   - Natural handmade Washi paper ground (`#f6f3eb`) with tactile paper fiber noise texture (`.washi-overlay`).
   - Deep Sumi charcoal ink typography (`#181614` for headings, `#524d47` for body, `#827b73` for metadata).
   - Lacquer vermilion red (*Shu-iro* `#c82b2b`) for authentic Japanese Hanko seal stamps (`「晴」`), active states, and primary CTAs.
   - Gilded Kintsugi gold (*Kin-tsugi* `#c59b48`) for empirical benchmarks and honors.
2. **Ukiyo-e Graphic Landscape & Scenery**:
   - High-definition woodblock landscape featuring snow-capped **Mount Fuji**, radiant crimson **Hinomaru** sun, multi-tiered **Pagoda Shrine**, and vibrant autumn red **Momiji maples** (strictly devoid of human figures).
   - Traditional solitary cliff pine (*Matsu*) ink wash on mountain ridges.
   - Bamboo grove ink wash artwork (*Take*) and Kasumi mist ribbons.
   - Procedural drifting autumn maple leaf particles with gentle mouse-inertia parallax.
3. **Japanese Minimalism (Ma / 間) & Plain Text Navigation**:
   - Fixed top-right navigation completely free of box containers or borders, using pure plain text links with minimalist vermilion hover/active underlines.
   - Vertical Kanji section markers (`「研究と特許」`, `「旗艦プロジェクト」`, `「技術体系」`, `「経歴・資格」`, `「結び」`).
4. **Procedural Web Audio API Micro-Interactions**:
   - Real-time synthesis of Japanese Edo woodblock (*Mokugyo*) and resonant temple chime (*Rin*). Zero external audio asset dependencies.
   - Integrated top-nav mute toggle (`[ 音 On / Off ]`).

---

## 2. Single Source of Truth: Candidate Dossier

All content strictly mirrors `PORTFOLIO_REQUIREMENTS.md` and `src/data/dossier.ts`:

- **Identity**: Nihar Atul Harde (Preferred: Nihar Harde)
- **Tagline**: Autonomous Agentic Pipelines • Real-Time Edge Vision • Generative AI Logit Optimization
- **Academic Standing**: B.Tech CSE (Data Science), Ramdeobaba University, Nagpur (2023–2027), **CGPA: 8.33 / 10.00**
- **Accepted IEEE Research Paper (First Author)**:
  - *Title*: Design and Implementation of a Legal Information Retrieval and Decision Support System Using Retrieval-Augmented Generation
  - *Venue*: 24th OITS International Conference on Information Technology (OCIT 2026), Indexed in IEEE Xplore (Paper ID: 196)
  - *Metrics*: RAGAS Faithfulness: **0.875**, Context Precision: **0.892**, Legal Fidelity: **1.000**
  - *Languages*: English, हिन्दी (Hindi), मराठी (Marathi)
- **Lead Patent Invention (Pre-Filing Stage)**:
  - *Title*: A System and Method for In-Flight Tensor Logit Regulation and Temporal Anti-Repetition in Autoregressive Sequence Generation (**TNARE**)
  - *Jurisdiction*: Indian Patent Office (IPO), Mumbai Branch | Form IPR-PAT-01 v1.1
  - *Formula*: $\Delta(t, v) = \alpha \cdot S_{CE} \cdot \exp\left(-\frac{H(P_t)}{\tau}\right) \cdot \Omega(v, C_i)$
  - *Benchmarks*: **+23.4%** Distinct-2 diversity, **-38.2%** Self-BLEU-4 repetition, latency bounded **< 110ms**, memory overhead **< 600MB** in GPU HBM.
- **Flagship Engineering Deployments**:
  1. **Brief2Reel**: Multi-agent short-video orchestration loop (FastAPI, React 18, Groq LLaMA 3.3, Gemini Imagen 3, MoviePy).
  2. **LexMind**: Trilingual Legal Decision Engine with hybrid BM25 + ChromaDB Reciprocal Rank Fusion (RRF).
  3. **AutoATC**: Automated Bovine Body Condition Scoring (SIH 2025 Ministry Solution, DAHD/NDDB PS 25005, 17 pose keypoints, ONNX INT8 < 1.5s CPU latency).
  4. **FMCG Supply Chain Lakehouse**: Databricks Medallion (Bronze/Silver/Gold) streaming Delta Lake architecture.
  5. **Customer Segmentation & Analytics**: Unsupervised RFM cohort modeling with K-Means elbow optimization.
  6. **Probabilistic Deep Learning**: Comparative generative architectures (Deterministic AE vs VAE vs RBM).
- **Credentials & Japanese Distinction**:
  - TiHAN, IIT Hyderabad: Artificial Intelligence & Machine Learning with Drone Technology.
  - The Japan Foundation (JALTAP): **JLPT N4 Certified (日本語能力試験)**.

---

## 3. Technology Stack & Architecture

- **Framework**: Next.js 15 (App Router) + TypeScript + React 19
- **Motion & Smooth Scroll**: GSAP (ScrollTrigger) + Lenis Smooth Scroll (`lenis`)
- **Styling**: Tailwind CSS + CSS Custom Properties for tactile Wabi-Sabi surfaces (`.washi-card`, `.washi-modal-container`)
- **Math Rendering**: KaTeX LaTeX typesetting for the TNARE patent damping formula
- **Audio Engine**: Custom procedural Web Audio API synthesis (`src/lib/audio.ts`)
- **Interactive Primitives**: Spotlight radial gradient cards, word-by-word reveal on scroll, top-right plain text navigation, and accessible keyboard-navigable modals.

---

## 4. Getting Started

### Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

### Production Build & Verification
```bash
npm run build
npm run start
```
Compiles static and client chunks with zero TypeScript warnings or errors.
