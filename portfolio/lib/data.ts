import kompeteImg from "@/media/projects/kompete.png";
import prepstudioImg from "@/media/projects/prepstudio.png";
import uiwizImg from "@/media/projects/uiwiz.png";

export const identity = {
  name: "Mritunjay Sharma",
  role: "Backend Engineer",
  location: "Bengaluru, India",
  email: "mritunjaypandey0789@gmail.com",
  phone: "+91 6378768400",
  github: "https://github.com/electro-geek",
  linkedin: "https://linkedin.com/in/electro-geek",
  leetcode: "https://leetcode.com/electrogeek",
} as const;

export const roles = [
  "Backend Engineer",
  "Systems Architect",
  "AI Engineer",
  "Python Developer",
  "Distributed Systems",
];

export const stats = [
  { value: "3+", label: "Years Exp" },
  { value: "5+", label: "Projects" },
  { value: "2", label: "Companies" },
];

export const techStack = [
  {
    label: "Primary Stack",
    value: "Python / Go / JavaScript",
    detail: "Core languages for backend & system design",
  },
  {
    label: "Infrastructure",
    value: "AWS / Docker / Kubernetes",
    detail: "Cloud-native deployments & container orchestration",
  },
  {
    label: "Data Layer",
    value: "PostgreSQL / Redis / MongoDB",
    detail: "Relational, cache, and document stores",
  },
];

export const skillGroups = [
  {
    title: "Core Engineering",
    icon: "code" as const,
    items: ["Python", "Golang", "JavaScript", "C/C++", "System Design"],
  },
  {
    title: "Backend Frameworks",
    icon: "server" as const,
    items: ["FastAPI", "Django", "Flask", "Node.js", "WebSockets", "gRPC"],
  },
  {
    title: "Infrastructure & DevOps",
    icon: "cloud" as const,
    items: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD Pipelines"],
  },
  {
    title: "Database & Caching",
    icon: "database" as const,
    items: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "DynamoDB"],
  },
  {
    title: "AI & Async Processing",
    icon: "sparkles" as const,
    items: ["TensorFlow", "PyTorch", "Celery", "RabbitMQ", "Apache Kafka"],
  },
  {
    title: "LLM Integration",
    icon: "lightning" as const,
    items: ["Google Gemini", "Multi-Agent AI", "SSE Streaming", "RAG Pipelines", "LLM APIs"],
    accent: true,
  },
];

export type SkillIcon = (typeof skillGroups)[number]["icon"];

export const experience = [
  {
    role: "Backend & AI Engineer",
    company: "Neurabit Solution LLP",
    period: "May 2025 — Present",
    bullets: [
      "Built real-time communication layers with WebSockets for low-latency data streaming to dashboards and client apps",
      "Integrated AI/LLM-powered modules into production workflows — automated incident alerts and intelligent reporting",
      "Deployed backend microservices with FastAPI and Django, containerised with Docker, scaled on Kubernetes",
      "Executed automated CI/CD deployment pipelines for continuous delivery and production reliability",
    ],
  },
  {
    role: "Backend Engineer",
    company: "LivNSense Technologies Pvt Ltd",
    period: "Apr 2024 — Apr 2025",
    bullets: [
      "Designed robust Django backend systems ensuring scalable architecture for enterprise operations",
      "Implemented and optimised PostgreSQL schemas and queries, improving data integrity at enterprise scale",
      "Built and maintained RESTful APIs for seamless frontend-backend integration",
      "Enhanced database operations via complex stored procedures, triggers, and indexing strategies",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "IEEE YEEP",
    period: "May 2021 — Aug 2021",
    bullets: [
      "Developed IoT-based healthcare monitoring systems using Embedded C and Arduino",
    ],
  },
];

export const projects = [
  {
    name: "Kompete",
    subtitle: "AI Research Engine for Diligence",
    description:
      "AI research engine that produces institutional-grade diligence briefs on any company in minutes — covering market position, financial health, sentiment, and risk. Built for VCs, hedge funds, and private equity firms that need to screen targets and assess risk fast, without burning analyst hours.",
    tech: ["FastAPI", "Next.js", "Google Gemini", "SSE", "WeasyPrint", "Python"],
    url: "https://kompete.mritunjay.live",
    period: "May 2026 — Present",
    featured: true,
    image: kompeteImg,
    highlights: [
      {
        label: "Architecture",
        detail: "4 parallel async research agents, structured JSON synthesis layer",
      },
      {
        label: "Output",
        detail: "Server-side PDF generation via WeasyPrint for boardroom distribution",
      },
    ],
  },
  {
    name: "PrepStudio",
    subtitle: "AI Learning & Interview Platform",
    description:
      "Full-stack AI learning platform that transforms any topic into a structured study plan, generates rich educational content, conducts voice-based AI interviews, and helps users publish polished articles — all within a single personalised workspace.",
    tech: ["Next.js", "FastAPI", "Google Gemini", "PostgreSQL", "Firebase", "Web Speech API"],
    url: "https://prepstudio.mritunjay.live",
    period: "May 2026 — Present",
    featured: true,
    image: prepstudioImg,
    highlights: [
      {
        label: "Voice Engine",
        detail: "Browser-native Web Speech API for real-time STT + TTS question delivery",
      },
      {
        label: "Caching",
        detail: "Lazy generation + PostgreSQL permanent cache to eliminate redundant API calls",
      },
    ],
  },
  {
    name: "SolShield AI",
    subtitle: "Solana Smart Contract Security Copilot",
    description:
      "Smart contract security auditing platform for Solana. Tree-sitter AST parsing detects Anchor/Rust vulnerabilities; Gemini AI generates exploit scenarios and remediation guidance with Monaco-based code intelligence.",
    tech: ["Solana", "Tree-sitter", "FastAPI", "Monaco", "Gemini AI"],
    url: "https://solshield.mritunjay.live",
    period: "May 2026 — Present",
    featured: false,
  },
  {
    name: "UIWiz",
    subtitle: "AI Native UI Development Platform",
    description:
      "AI-native platform converting natural language and image prompts into production-ready React + Tailwind code. Reduces UI prototyping time by 80%. In-browser Sandpack execution with AES-256 key encryption.",
    tech: ["TypeScript", "Django", "Sandpack", "Gemini API", "Firebase"],
    url: "https://www.uiwiz.live",
    period: "Jan 2026 — Present",
    featured: true,
    image: uiwizImg,
  },
  {
    name: "PortfolioMaker",
    subtitle: "AI Portfolio Generator",
    description:
      "Converts PDF resumes into deployment-ready portfolio websites with 95%+ extraction accuracy. Three distinct templates (Terminal, Renaissance, Newspaper). Firebase Auth, ZIP export, automated PostgreSQL migrations.",
    tech: ["Django", "Gemini API", "PostgreSQL", "Firebase", "pypdf"],
    url: "https://portfolio-maker-git-main-electrogeeks-projects.vercel.app/",
    period: "Dec 2025 — Jan 2026",
    featured: false,
  },
];

export const education = {
  degree: "B.Tech in Electronics & Communication",
  university: "Visvesvaraya Technological University",
  period: "2018 — 2022",
  cgpa: "7.1 CGPA",
};

export const publications = [
  {
    title: "Remote Healthcare Monitoring System",
    venue: "Intl Journal of Advanced Scientific Innovation",
    date: "Jun 2022",
  },
  {
    title: "Healthcare Data Collection Systems",
    venue: "Book Publication · ISBN: 978-93-91535-00-1",
    date: "Nov 2021",
  },
];
