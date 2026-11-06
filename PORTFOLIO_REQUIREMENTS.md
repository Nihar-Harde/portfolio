# Technical & Design Requirements Specification
## Project: Wabi-Sabi + Ukiyo-e Interactive Portfolio
**Candidate:** Nihar Atul Harde (Agentic AI & Edge Vision Engineer)  
**Style Direction:** Wabi-Sabi + Ukiyo-e Graphic with Traces of Japanese Minimalism  
**Inspiration Palette:** Organic Washi Parchment, Sumi Calligraphy Ink, Lacquer Vermilion, and Gilded Kintsugi  
**Target Standard:** Awwwards Site of the Day / FWA caliber  

---

## 1. Executive Summary & Candidate Dossier

This document is the single source of truth for the end-to-end design and engineering of Nihar Atul Harde's personal engineering and research portfolio.

### 1.1 Candidate Metadata
* **Full Name:** Nihar Atul Harde (Preferred: Nihar Harde)
* **Professional Identity:** Agentic AI & Edge Vision Engineer
* **Tagline:** Autonomous Agentic Pipelines • Real-Time Edge Vision • Generative AI Logit Optimization
* **Education:** B.Tech in Computer Science and Engineering (Data Science), Ramdeobaba University, Nagpur (RBU / RCOEM), 2023 – 2027
* **Cumulative GPA:** 8.33 / 10.00
* **Location:** Nagpur, Maharashtra, India
* **Institutional Contact:** hardena@rknec.edu
* **Personal Contact:** niharharde@gmail.com | +91-7888043666
* **Online Footprint:** [GitHub](https://github.com/Nihar-Harde) | [LinkedIn](https://www.linkedin.com/in/nihar-harde-41480228a)
* **Spoken & Written Languages:** English (Fluent), Hindi (Native), Marathi (Native), Japanese (JLPT N4 Certified)

### 1.2 Intellectual Property & Research Distinction
1. **Accepted Research Paper (First Author):**
   * **Title:** *Design and Implementation of a Legal Information Retrieval and Decision Support System Using Retrieval-Augmented Generation*
   * **Venue:** 24th OITS International Conference on Information Technology (OCIT 2026), Indexed in IEEE Xplore.
   * **Paper ID:** 196
   * **Verified Metrics (RAGAS Benchmark):** Faithfulness = 0.875, Context Precision = 0.892, Faithfulness Verified Legal = 1.0, Trilingual test set across English, Hindi, and Marathi.
   * **Core Contributions:** Hybrid BM25 + ChromaDB Reciprocal Rank Fusion (RRF), section-aware statute chunking, multilingual query alignment, role-adaptive synthesis (formal legal vs plain citizen).
2. **Lead Patent Invention (Pre-Filing Stage):**
   * **Title:** *A System and Method for In-Flight Tensor Logit Regulation and Temporal Anti-Repetition in Autoregressive Sequence Generation*
   * **Acronym:** TNARE
   * **Jurisdiction / Stage:** Indian Patent Office (IPO), Mumbai Branch | Pre-Filing Requisites Draft v1.1 / Form IPR-PAT-01.
   * **Applicant:** Ramdeobaba University, Nagpur
   * **Lead Inventor:** Nihar Harde
   * **Core Novelty:** Closed-loop Entropy-scaled Dynamic Logit Damping (EDLD) with in-flight GPU accelerator memory register interception:
     $$\Delta(t, v) = \alpha \cdot S_{CE} \cdot \exp\left(-\frac{H(P_t)}{\tau}\right) \cdot \Omega(v, C_i)$$
   * **Performance Benchmarks:** +23.4% Distinct-2 lexical diversity, -38.2% Self-BLEU-4 repetition reduction, latency bounded < 110ms, memory overhead < 600MB in GPU HBM.

### 1.3 Flagship Engineering Projects
1. **Brief2Reel (Featured - Agentic AI):**
   * Autonomous Agentic AI Marketing & Short-Video Engine (9:16 vertical video production).
   * Stack: FastAPI, React 18, ChromaDB, Groq LLaMA 3.3, Gemini Imagen 3.0, MoviePy, PostgreSQL.
   * Highlights: Multi-agent loop (Copywriter → Visuals → Audio TTS → Video Assembly → Critic Agent); 100% pipeline success rate; 88/100 Critic Score; 0.057 repetition score.
2. **LexMind (Featured - Legal RAG System):**
   * Trilingual Legal Decision Engine powering the accepted IEEE OCIT 2026 research paper.
   * Stack: Python, FastAPI, ChromaDB, LangChain, RAGAS, PyMuPDF, Streamlit.
3. **AutoATC (Featured - Computer Vision & Edge AI):**
   * Automated Bovine Body Condition Scoring (BCS) & Breed Classification for Dairy Husbandry.
   * Stack: PyTorch, Ultralytics YOLOv8n, OpenCV, LightGBM, ONNX Runtime INT8, FastAPI.
   * Recognition: Smart India Hackathon (SIH) 2025 Official Solution under Ministry of Fisheries, Animal Husbandry & Dairying (DAHD) / NDDB (PS 25005).
   * Highlights: 17 anatomical keypoints, PCK@0.05 >= 88%, BCS MAE <= 0.25, < 1.5s CPU latency.
4. **Transaction-Level FMCG Supply Chain Lakehouse (Data Engineering):**
   * Medallion enterprise data architecture (Bronze → Silver → Gold) on Databricks with PySpark and Delta Lake.
5. **Customer Segmentation & Market Analytics System (Data Engineering):**
   * Unsupervised RFM cohort modeling using K-Means with Silhouette & Elbow optimization.
6. **Probabilistic Deep Learning for Anomaly Detection (Deep Learning):**
   * Comparative generative architectures: Deterministic Autoencoder vs Variational Autoencoder (ELBO/KL) vs Restricted Boltzmann Machine (Contrastive Divergence).

### 1.4 Academic Credentials & Certifications
* **TiHAN, IIT Hyderabad (June 2026):** Artificial Intelligence & Machine Learning with Drone Technology (Autonomous navigation, aerial edge AI, computer vision).
* **IBM / Coursera (January 2025):** Databases and SQL for Data Science with Python.
* **Japan Foundation / JALTAP (2026):** JLPT N4 Japanese Language Proficiency Certification.
* **Adobe University Hackathon Finalist Track (August 2026):** Creative generative automation pipeline.

---

## 2. Creative Art Direction: "Wabi-Sabi + Ukiyo-e Graphic with Traces of Japanese Minimalism"

### 2.1 Aesthetic Triad
1. **Wabi-Sabi Organic Foundation:**
   * Natural textured handmade Washi paper (`#f6f3eb`) with tactile fiber noise grain, weathered organic warmth, and tranquil serenity.
   * Kintsugi gold accents (`#c59b48`), aged sumi ink wash gradients, and authentic imperfection.
2. **Ukiyo-e Graphic Artistry:**
   * Bold Edo woodblock print linework and dramatic Japanese nature scenery: snow-capped Mount Fuji, traditional multi-tiered pagodas, minka houses, Shinto shrine Torii gates, pine trees (*matsu*), and cherry blossoms (*sakura*).
   * Deep lacquer vermilion red (*Shu-iro* 朱色 `#c82b2b`) and dramatic rising sun (*Ensō* / *Hinomaru*).
   * Strictly **zero human figures**—focus entirely on architecture, botanical stillness, and algorithmic flow.
3. **Japanese Minimalism (Ma / 間 & Kanso / 簡素):**
   * Immense negative space (*Ma*), quiet elegance, and deliberate restraint.
   * **Top-Right Plain Text Navigation:** Zero oval or pill containers; clean typography with subtle Kanji superscripts and vermilion dot indicators.
   * Authentic red seal stamps (*Hanko* / *Inkan* 印鑑) for status pills and verification badges.
   * Vertical Japanese kanji section tags (`「研究」` Research, `「特許」` Patent, `「作品」` Works, `「技術」` Craft).

### 2.2 Color Palette & Semantic Tokens
```css
:root {
  /* Surface & Canvas: Authentic Washi Paper & Natural Stone */
  --bg-void: #f6f3eb;                /* Authentic warm Washi paper ground */
  --bg-surface: #ede8de;             /* Subtle elevated mist surface */
  --bg-card: rgba(251, 249, 244, 0.88); /* Washi paper card with blur */
  --bg-card-hover: rgba(255, 255, 255, 0.98);

  /* Ukiyo-e & Wabi-Sabi Accents */
  --ukiyo-vermilion: #c82b2b;        /* Edo lacquer vermilion / Hanko stamp / Hinomaru */
  --ukiyo-crimson: #a81c1c;          /* Deep temple timber crimson */
  --ukiyo-gold: #c59b48;             /* Kintsugi repair gold / Gilded screen */
  --ukiyo-pine: #2e3d2f;             /* Matsu pine needle deep green */

  /* Sumi-e Calligraphy Typography */
  --text-primary: #181614;           /* Deepest Sumi charcoal calligraphy black */
  --text-secondary: #524d47;         /* Soft ink wash secondary text */
  --text-muted: #827b73;             /* Metadata, statute numbers, fine borders */

  /* Borders & Hairlines */
  --border-subtle: rgba(24, 22, 20, 0.12); /* Delicate ink hair-line */
  --border-active: rgba(200, 43, 43, 0.4);  /* Vermilion lacquer touch */
  --shadow-washi: 0 10px 30px -10px rgba(24, 22, 20, 0.08);
}
```

### 2.3 Typography Matrix
* **Primary Display (Latin Headers):** `Shippori Mincho` or `Cinzel` — majestic, literary, traditional Japanese woodblock book serif.
* **Secondary / Japanese Accents:** `Shippori Mincho` & `Zen Kaku Gothic New` — authentic Japanese kanji & kana balance.
* **Body Text:** `Geist Sans` or `Plus Jakarta Sans` — ultra-legible editorial clarity with balanced line heights.
* **Technical Monospace:** `Geist Mono` or `Courier Prime` — for metrics, latencies, formulas, and code badges.

---

## 3. Navigation & Interactive Layout Specifications

### 3.1 Top-Right Plain Text Navigation
* **Placement:** Fixed at the top-right corner of the viewport (`fixed top-0 right-0 z-50 px-8 py-6`).
* **Visual Form:** **Zero oval or pill container.** Transparent, minimalist plain text links with generous letter-spacing.
* **Items:** `Overview`, `Research & IP`, `Projects`, `Craft`, `Credentials`, `Contact`, `Dossier`.
* **Micro-interactions:** Delicate vermilion underline on hover, active section indicator, and a procedural Zen woodblock click sound on navigation.

### 3.2 Hero Section: The Wabi-Sabi Scenery
* **Visual Anchor:** High-definition panoramic graphic featuring snow-capped Mount Fuji, a traditional Japanese minka house with warm illuminated shoji screens, a Shinto shrine Torii gate standing serenely at the water's edge, weeping cherry blossoms, and aged pine trees bathed in a tranquil rising sun.
* **Living Layer:** Gentle mouse inertia parallax and drifting cherry blossom petals / sumi ink flecks.
* **Branding:** Vermilion red Hanko seal stamp (`「晴」`) with Nihar Harde's identity in crisp typography.

---

## 4. Modal Scrolling & Performance Guarantees
* When any modal (Dossier or Project Architecture) is opened, virtual scroll engines are decoupled (`lenis.stop()`), wheel propagation is stopped, and `data-lenis-prevent="true"` ensures uninterrupted native internal scrolling.
