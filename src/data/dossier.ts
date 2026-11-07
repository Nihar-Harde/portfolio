/**
 * Candidate Dossier Data Store
 * Single source of truth for Nihar Atul Harde's engineering & research portfolio.
 * Strictly adheres to PORTFOLIO_REQUIREMENTS.md.
 */

export interface CandidateDossier {
  personal: {
    fullName: string;
    preferredName: string;
    identity: string;
    kanjiTitle: string;
    tagline: string;
    location: string;
    institutionalEmail: string;
    personalEmail: string;
    phone: string;
    status: string;
    github: string;
    linkedin: string;
    languages: {
      name: string;
      level: string;
      badge?: string;
    }[];
  };
  education: {
    institution: string;
    institutionShort: string;
    degree: string;
    specialization: string;
    period: string;
    gpa: string;
    gpaScale: string;
    location: string;
  };
  researchPaper: {
    paperId: string;
    title: string;
    authorship: string;
    venue: string;
    indexing: string;
    status: string;
    abstract: string;
    metrics: {
      label: string;
      value: string | number;
      benchmark: string;
    }[];
    contributions: string[];
    supportedLanguages: string[];
  };
  patent: {
    title: string;
    acronym: string;
    stage: string;
    jurisdiction: string;
    form: string;
    applicant: string;
    leadInventor: string;
    latexFormula: string;
    noveltySummary: string;
    benchmarks: {
      metric: string;
      value: string;
      direction: "positive" | "negative" | "neutral";
    }[];
    pipelineStages: {
      step: number;
      title: string;
      description: string;
      latency: string;
    }[];
  };
  flagshipProjects: {
    id: string;
    title: string;
    category: "Agentic AI" | "Legal RAG" | "Computer Vision & Edge AI" | "Data Engineering" | "Deep Learning";
    categoryKanji: string;
    tagline: string;
    featured: boolean;
    bentoSpan: "large" | "medium" | "compact";
    stack: string[];
    metrics: { label: string; value: string }[];
    highlights: string[];
    problemStatement: string;
    architectureNotes: string;
    githubUrl: string;
  }[];
  skillsMatrix: {
    domainKanji: string;
    domainTitle: string;
    description: string;
    skills: {
      name: string;
      level: "Core" | "Advanced" | "Proficient" | "Exploring" | "Familiar";
      highlight?: boolean;
    }[];
  }[];
  certifications: {
    id: string;
    title: string;
    issuer: string;
    date: string;
    credentialDetails: string;
    badgeText: string;
  }[];
  honors: {
    title: string;
    organization: string;
    date: string;
    description: string;
  }[];
}

export const DOSSIER: CandidateDossier = {
  personal: {
    fullName: "Nihar Atul Harde",
    preferredName: "Nihar Harde",
    identity: "Agentic AI & Edge Vision Engineer",
    kanjiTitle: "「人工知能・先端視覚工学」",
    tagline: "Autonomous Agentic Pipelines • Real-Time Edge Vision • Generative AI Logit Optimization",
    location: "Nagpur, Maharashtra, India",
    institutionalEmail: "hardena@rknec.edu",
    personalEmail: "niharharde@gmail.com",
    phone: "+91-7888043666",
    status: "Open for High-Impact Engineering Roles",
    github: "https://github.com/Nihar-Harde",
    linkedin: "https://www.linkedin.com/in/nihar-harde-41480228a",
    languages: [
      { name: "English", level: "Fluent" },
      { name: "Hindi", level: "Native" },
      { name: "Marathi", level: "Native" },
      { name: "Japanese", level: "JLPT N4 Certified", badge: "日本語能力試験 N4" },
    ],
  },
  education: {
    institution: "Ramdeobaba University, Nagpur (RBU / RCOEM)",
    institutionShort: "Ramdeobaba University",
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Data Science",
    period: "2023 – 2027",
    gpa: "8.33",
    gpaScale: "10.00",
    location: "Nagpur, Maharashtra, India",
  },
  researchPaper: {
    paperId: "196",
    title: "Design and Implementation of a Legal Information Retrieval and Decision Support System Using Retrieval-Augmented Generation",
    authorship: "First Author",
    venue: "24th OITS International Conference on Information Technology (OCIT 2026)",
    indexing: "Indexed in IEEE Xplore",
    status: "Accepted for Publication",
    abstract: "A production-grade trilingual retrieval-augmented generation architecture engineered for the Indian legal domain across Central and State Acts. Incorporates Reciprocal Rank Fusion (RRF) across BM25 lexical sparse retrieval and dense ChromaDB vector embeddings with section-aware statute chunking to bound hallucination rates and eliminate citation drift.",
    metrics: [
      { label: "Faithfulness", value: "0.875", benchmark: "RAGAS Benchmark" },
      { label: "Context Precision", value: "0.892", benchmark: "RAGAS Benchmark" },
      { label: "Legal Verification", value: "1.000", benchmark: "Statute Fidelity" },
    ],
    contributions: [
      "Hybrid BM25 + ChromaDB Reciprocal Rank Fusion (RRF) combining sparse keyword precision with dense semantic understanding.",
      "Section-aware statute chunking preserving legislative sub-clauses, provisos, and legal hierarchy.",
      "Multilingual query alignment across trilingual Indian jurisdictions (English, Hindi, Marathi).",
      "Role-adaptive synthesis engine toggling formal legal counsel briefs versus plain citizen explainability.",
    ],
    supportedLanguages: ["English", "हिन्दी (Hindi)", "मराठी (Marathi)"],
  },
  patent: {
    title: "A System and Method for In-Flight Tensor Logit Regulation and Temporal Anti-Repetition in Autoregressive Sequence Generation",
    acronym: "TNARE",
    stage: "Pre-Filing Requisites Draft v1.1 / Form IPR-PAT-01",
    jurisdiction: "Indian Patent Office (IPO), Mumbai Branch",
    form: "Form IPR-PAT-01",
    applicant: "Ramdeobaba University, Nagpur",
    leadInventor: "Nihar Harde",
    latexFormula: "\\Delta(t, v) = \\alpha \\cdot S_{CE} \\cdot \\exp\\left(-\\frac{H(P_t)}{\\tau}\\right) \\cdot \\Omega(v, C_i)",
    noveltySummary: "Closed-loop Entropy-scaled Dynamic Logit Damping (EDLD) with in-flight GPU accelerator memory register interception to suppress autoregressive degenerations without degrading semantic perplexity.",
    benchmarks: [
      { metric: "Lexical Diversity (Distinct-2)", value: "+23.4%", direction: "positive" },
      { metric: "Repetition Reduction (Self-BLEU-4)", value: "-38.2%", direction: "positive" },
      { metric: "Interception Latency", value: "< 110ms", direction: "neutral" },
      { metric: "GPU HBM Overhead", value: "< 600MB", direction: "neutral" },
    ],
    pipelineStages: [
      {
        step: 1,
        title: "In-Flight Register Interception",
        description: "Zero-copy tensor hook taps into the GPU accelerator register before softmax normalization.",
        latency: "12ms",
      },
      {
        step: 2,
        title: "Dynamic Logit Damping (EDLD)",
        description: "Computes instantaneous Shannon entropy H(Pt) and applies temporal contextual penalty matrix.",
        latency: "48ms",
      },
      {
        step: 3,
        title: "Reprojected Sampling Distribution",
        description: "Outputs high-entropy, diversity-boosted autoregressive logits bounded under strict latency caps.",
        latency: "35ms",
      },
    ],
  },
  flagshipProjects: [
    {
      id: "brief2reel",
      title: "Brief2Reel",
      category: "Agentic AI",
      categoryKanji: "「自律型AI」",
      tagline: "Autonomous Agentic AI Marketing & Short-Video Engine (9:16 vertical video production).",
      featured: true,
      bentoSpan: "large",
      stack: ["FastAPI", "React 18", "ChromaDB", "Groq LLaMA 3.3", "Gemini Imagen 3.0", "MoviePy", "PostgreSQL"],
      metrics: [
        { label: "Pipeline Success", value: "100%" },
        { label: "Critic Score", value: "88/100" },
        { label: "Repetition Score", value: "0.057" },
      ],
      highlights: [
        "Multi-agent loop: Copywriter → Visual Generator (Imagen 3) → Audio Synthesizer → Video Assembly (MoviePy) → Critic Agent.",
        "Deterministic orchestrator with automated self-correction feedback loop on low critic evaluation.",
        "Production 9:16 vertical video generation with automated animated subtitles and audio normalization.",
      ],
      problemStatement: "Short-form video creation requires complex multi-tool choreography (scriptwriting, asset generation, voiceover sync, timing alignment, and rendering). Brief2Reel automates this into an end-to-end autonomous agent loop.",
      architectureNotes: "FastAPI handles asynchronous task queues with Redis. ChromaDB stores style embeddings and reference prompts. Groq LLaMA 3.3 acts as the fast creative director and critic agent, while Gemini Imagen 3.0 renders visual keyframes.",
      githubUrl: "https://github.com/Nihar-Harde/Brief2Reel",
    },
    {
      id: "lexmind",
      title: "LexMind",
      category: "Legal RAG",
      categoryKanji: "「法務AI」",
      tagline: "Trilingual Legal Decision Engine powering the accepted IEEE OCIT 2026 research paper.",
      featured: true,
      bentoSpan: "medium",
      stack: ["Python", "FastAPI", "ChromaDB", "LangChain", "RAGAS", "PyMuPDF", "Streamlit"],
      metrics: [
        { label: "Faithfulness", value: "0.875" },
        { label: "Context Precision", value: "0.892" },
        { label: "Legal Fidelity", value: "1.00" },
      ],
      highlights: [
        "Hybrid BM25 + ChromaDB Reciprocal Rank Fusion (RRF) for sub-clause precision.",
        "Section-aware statute chunking preserving legislative sub-clauses and statutory hierarchy.",
        "Trilingual query synthesis across English, Hindi, and Marathi.",
      ],
      problemStatement: "Standard LLMs suffer severe hallucination and statutory drift when querying Indian legal statutes. LexMind enforces grounded citation mapping with section-level fidelity.",
      architectureNotes: "Statute corpus parsed via PyMuPDF with section boundary heuristics. RRF synthesizes sparse lexical and dense embeddings before passing retrieved chunks to a role-adaptive prompt template.",
      githubUrl: "https://github.com/Nihar-Harde/LexMind",
    },
    {
      id: "autoatc",
      title: "AutoATC",
      category: "Computer Vision & Edge AI",
      categoryKanji: "「視覚工学」",
      tagline: "Automated Bovine Body Condition Scoring (BCS) & Breed Classification for Dairy Husbandry.",
      featured: true,
      bentoSpan: "medium",
      stack: ["PyTorch", "Ultralytics YOLOv8n", "OpenCV", "LightGBM", "ONNX Runtime INT8", "FastAPI"],
      metrics: [
        { label: "Keypoints", value: "17 Points" },
        { label: "PCK@0.05", value: "≥ 88%" },
        { label: "CPU Latency", value: "< 1.5s" },
      ],
      highlights: [
        "Smart India Hackathon (SIH) 2025 Official Solution under Ministry of Fisheries, Animal Husbandry & Dairying (DAHD) / NDDB (PS 25005).",
        "17 anatomical keypoint pose regression combined with LightGBM BCS score estimator.",
        "Quantized ONNX INT8 deployment running entirely on low-power edge CPU hardware.",
      ],
      problemStatement: "Manual dairy cattle health scoring requires veterinary expertise that is inaccessible for rural dairy farmers. AutoATC provides instant, objective body condition scoring via standard mobile cameras.",
      architectureNotes: "Custom-trained YOLOv8n-pose extracts skeletal coordinates (hooks, pins, tailhead, spine). Morphological angles feed into a calibrated LightGBM regressor predicting BCS on a 1-5 scale with MAE <= 0.25.",
      githubUrl: "https://github.com/Nihar-Harde/AutoATC",
    },
    {
      id: "iris-recognition",
      title: "Dual-Eye Iris Biometric Recognition System",
      category: "Computer Vision & Edge AI",
      categoryKanji: "「画像・生体認証」",
      tagline: "Research-grade dual-eye ocular biometric pipeline with Daugman polar rubber-sheet unrolling and multi-modal ensemble matching.",
      featured: true,
      bentoSpan: "large",
      stack: ["Python 3.10+", "OpenCV", "Scikit-Learn", "Flask", "Gabor Wavelets", "Daugman Polar", "Spatial LBP", "SVM"],
      metrics: [
        { label: "Rank-1 Accuracy", value: "95.4%" },
        { label: "Equal Error Rate", value: "2.0% EER" },
        { label: "Matching Latency", value: "0.10 ms" },
      ],
      highlights: [
        "Dual Daugman polar rubber-sheet normalization unrolling annular Cartesian ocular regions into standardized 64x512 normalized templates.",
        "Four distinct biometric matching architectures: Gabor Wavelets (1024-bit IrisCode with cyclic rotation compensation), Spatial Block LBP (4096-dim histogram with cosine metric), Multi-Filter Gabor Energy with Linear SVM, and score-level weighted ensemble fusion.",
        "Benchmarked on official UBIPr visible wavelength dual-eye periocular dataset across 5,509 images and 261 subjects with leakage-safe cross-session evaluation protocols.",
        "Completely decoupled biometric processing core with versioned REST API endpoints for identification and 1:1 verification.",
      ],
      problemStatement: "Unconstrained visible-wavelength ocular biometrics suffer from non-uniform lighting, pupil dilation, ocular roll, and eyelash occlusions. This research prototype provides robust dual-eye normalization and multi-modal feature fusion to achieve high cross-session identification accuracy.",
      architectureNotes: "Processes paired periocular images through a multi-stage pipeline: automated focus/contrast/clipping quality checks, dual iris segmentation, polar rubber-sheet unrolling into 64x512 pixel strips, Gabor wavelet phase quantization and spatial block LBP extraction, matched via cyclic rotation-compensated Hamming distance and calibrated LinearSVC decision margins.",
      githubUrl: "https://github.com/Nihar-Harde/iris-recogintion-main",
    },
    {
      id: "customer-segmentation",
      title: "Customer Segmentation & Analytics",
      category: "Data Engineering",
      categoryKanji: "「顧客分析」",
      tagline: "Unsupervised RFM cohort modeling using K-Means with Silhouette & Elbow optimization.",
      featured: false,
      bentoSpan: "compact",
      stack: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Streamlit"],
      metrics: [
        { label: "Cohorts", value: "5 Clusters" },
        { label: "Metric", value: "RFM Matrix" },
        { label: "Delivery", value: "Streamlit" },
      ],
      highlights: [
        "Dynamic Recency, Frequency, and Monetary value transformation with Yeo-Johnson power scaling.",
        "Automated silhouette scoring to validate cluster separation across multi-dimensional customer behavioral data.",
        "Actionable persona profiles for targeted retention and churn mitigation campaigns.",
      ],
      problemStatement: "Generic marketing campaigns suffered low conversion rates due to uniform treatment of diverse customer segments.",
      architectureNotes: "Raw purchase histories aggregated into RFM metrics, normalized with RobustScaler, clustered via K-Means, and served via an interactive Streamlit exploration suite.",
      githubUrl: "https://github.com/Nihar-Harde/Customer-Segmentation-Analytics",
    },
    {
      id: "fmcg-lakehouse",
      title: "FMCG Supply Chain Lakehouse",
      category: "Data Engineering",
      categoryKanji: "「基盤工学」",
      tagline: "Medallion enterprise data architecture (Bronze → Silver → Gold) on Databricks with PySpark.",
      featured: false,
      bentoSpan: "large",
      stack: ["Databricks", "PySpark", "Delta Lake", "Python", "SQL", "PowerBI"],
      metrics: [
        { label: "Architecture", value: "Medallion" },
        { label: "Storage", value: "Delta Lake" },
        { label: "Optimization", value: "Z-Order" },
      ],
      highlights: [
        "Multi-hop ingestion stream enforcing ACID transactions on high-frequency FMCG inventory records.",
        "Automated data quality quarantine checks at Silver tier to eliminate schema drift.",
        "Gold aggregated dimensional models optimized for sub-second executive KPI reporting.",
      ],
      problemStatement: "Fragmented inventory data across regional distribution hubs caused inventory stockouts and delivery delays. This lakehouse unifies real-time transaction ingestion.",
      architectureNotes: "PySpark structured streaming ingests raw JSON/CSV into Bronze Delta tables. Schema enforcement and deduplication produce clean Silver tables, aggregated into Gold dimensional star schemas.",
      githubUrl: "https://github.com/Nihar-Harde/FMCG-SupplyChain-Lakehouse",
    },
  ],
  skillsMatrix: [
    {
      domainKanji: "「言語」",
      domainTitle: "Languages & Core",
      description: "Low-level performance, typed systems, and enterprise data querying",
      skills: [
        { name: "Python 3.12", level: "Core", highlight: true },
        { name: "SQL (PostgreSQL / Spark SQL)", level: "Core", highlight: true },
        { name: "TypeScript", level: "Proficient" },
        { name: "Java 21", level: "Exploring" },
      ],
    },
    {
      domainKanji: "「自律型AI」",
      domainTitle: "Agentic AI & GenAI",
      description: "Autonomous reasoning loops, tensor damping, and RAG architectures",
      skills: [
        { name: "Multi-Agent Pipelines", level: "Core", highlight: true },
        { name: "RAGAS Benchmark", level: "Core", highlight: true },
        { name: "ChromaDB & Vector RRF", level: "Core", highlight: true },
        { name: "Groq LLaMA 3.3", level: "Advanced" },
        { name: "Gemini APIs (1.5/2.0)", level: "Advanced" },
        { name: "LangChain & LangGraph", level: "Advanced" },
      ],
    },
    {
      domainKanji: "「画像・深層学習」",
      domainTitle: "Computer Vision & Edge AI",
      description: "Real-time keypoint estimation, INT8 quantization, and edge deployment",
      skills: [
        { name: "PyTorch", level: "Core", highlight: true },
        { name: "Ultralytics YOLOv8 Pose", level: "Core", highlight: true },
        { name: "OpenCV", level: "Core" },
        { name: "ONNX Runtime INT8", level: "Core", highlight: true },
        { name: "LightGBM", level: "Advanced" },
        { name: "Edge CPU Optimization", level: "Advanced" },
      ],
    },
    {
      domainKanji: "「基盤工学」",
      domainTitle: "Systems & Data Infrastructure",
      description: "High-throughput asynchronous backends and distributed lakehouses",
      skills: [
        { name: "FastAPI", level: "Core", highlight: true },
        { name: "Databricks & Delta Lake", level: "Advanced", highlight: true },
        { name: "PySpark", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "Docker & Containerization", level: "Proficient" },
        { name: "Git & CI/CD", level: "Advanced" },
      ],
    },
  ],
  certifications: [
    {
      id: "tihan-iith",
      title: "AI & Machine Learning with Drone Technology",
      issuer: "TiHAN, IIT Hyderabad",
      date: "June 2026",
      credentialDetails: "Autonomous aerial navigation, real-time edge vision processing, and aerial computer vision algorithms.",
      badgeText: "IIT Hyderabad TiHAN",
    },
    {
      id: "jlpt-n4",
      title: "Japanese Language Proficiency Certification (JLPT N4)",
      issuer: "The Japan Foundation & JEES (JALTAP)",
      date: "2026",
      credentialDetails: "Certified comprehension of basic Japanese grammar, conversational fluency, and ~300 Kanji characters.",
      badgeText: "JLPT N4 Certified (日本語能力試験)",
    },
    {
      id: "ibm-sql",
      title: "Databases and SQL for Data Science with Python",
      issuer: "IBM / Coursera",
      date: "January 2025",
      credentialDetails: "Advanced relational database management, subqueries, ACID compliance, and Python DB-API integration.",
      badgeText: "IBM Professional Credential",
    },
  ],
  honors: [
    {
      title: "Smart India Hackathon (SIH) 2025 — Official Ministry Solution",
      organization: "Ministry of Fisheries, Animal Husbandry & Dairying (DAHD) / NDDB",
      date: "2025",
      description: "Selected solution under Problem Statement 25005 for Automated Bovine Body Condition Scoring (AutoATC).",
    },
    {
      title: "Adobe University Hackathon 2026 — Finalist Track",
      organization: "Adobe Systems",
      date: "August 2026",
      description: "Finalist in the generative automation pipeline category for real-time asset synthesis workflows.",
    },
    {
      title: "Accepted First-Author Paper (Paper ID: 196)",
      organization: "24th OITS International Conference on Information Technology (OCIT 2026)",
      date: "2026",
      description: "First-author research on trilingual legal RAG systems indexed in IEEE Xplore.",
    },
  ],
};
