# Mritunjay Sharma — Portfolio

> Building scalable backend architectures and high-performance systems.

---

## Identity

| Field       | Value                  |
|-------------|------------------------|
| Role        | Backend Engineer       |
| Experience  | 3+ Years               |
| Location    | Bengaluru, India       |
| Status      | Available              |

---

## Contact

- **Email:** [mritunjaypandey0789@gmail.com](mailto:mritunjaypandey0789@gmail.com)
- **Phone:** [+91 6378768400](tel:+916378768400)
- **GitHub:** [github.com/electro-geek](https://github.com/electro-geek)
- **LinkedIn:** [linkedin.com/in/electro-geek](https://linkedin.com/in/electro-geek)
- **LeetCode:** [leetcode.com/electrogeek](https://leetcode.com/electrogeek)

---

## Summary

Backend Engineer with over 3 years of experience specialized in building scalable distributed systems and high-performance real-time applications. Focus lies at the intersection of robust architectural design and efficient data processing.

Expertise in Python ecosystems (FastAPI, Django), performance optimization via Redis/Celery, and containerized deployments with Docker and Kubernetes.

| Dimension        | Stack                      |
|------------------|----------------------------|
| Primary Stack    | Python / Go / JavaScript   |
| Infrastructure   | AWS / Docker / Kubernetes  |
| Data             | PostgreSQL / Redis / MongoDB |

---

## Experience

### Backend & AI Engineer — Neurabit Solution LLP
**May 2025 — Present**

Developed and deployed backend microservices using Python frameworks including FastAPI for high-performance APIs and Django for data-driven applications, containerized with Docker and scaled on Kubernetes.

- Built real-time communication layers with WebSockets, enabling low-latency data streaming to dashboards and client apps
- Integrated AI/LLM-powered modules into production workflows, such as automated incident alerts and intelligent reporting
- Optimized microservices architecture for performance and scalability
- Executed automated deployment pipelines using Docker and Kubernetes

---

### Backend Engineer — LivNSense Technologies Pvt Ltd
**April 2024 — April 2025**

Designed and developed backend systems using Django and optimized PostgreSQL databases for enterprise-scale applications.

- Designed robust backend systems using Django, ensuring scalable architecture for enterprise operations
- Implemented and optimized database schemas and queries using PostgreSQL, improving data integrity
- Built and maintained RESTful APIs to support seamless integration between frontend and backend services
- Enhanced database operations by creating complex stored procedures, triggers, and indexing strategies

---

## Featured Projects

### 1. Kompete — AI-Powered Competitive Intelligence Agent
**May 2026 — Present** | [kompete.mritunjay.live](https://kompete.mritunjay.live)

Built an autonomous AI agent that researches any company and generates boardroom-ready competitive intelligence reports with SWOT analysis in under 60 seconds.

**Tech Stack:** FastAPI, Next.js, Google Gemini API, Python, WeasyPrint

- Engineered a multi-agent research pipeline using Google Gemini 2.0 Flash with built-in Google Search, running four parallel async agents across news, financials, reviews, and social signals simultaneously.
- Implemented Server-Sent Events (SSE) for real-time agent progress streaming, giving users live visibility into each research step as it completes.
- Designed a structured JSON synthesis layer where a final Gemini call aggregates all research outputs into a validated SWOT analysis, financial snapshot, sentiment score, and strategic recommendations.
- Built a decoupled architecture with a FastAPI async backend and a Next.js 14 frontend, communicating exclusively via REST API with full TypeScript type safety on the report schema.
- Integrated server-side PDF generation via WeasyPrint, enabling one-click download of print-ready reports suitable for boardroom distribution.

---

### 2. PrepStudio — AI-Powered Learning & Interview Platform
**May 2026 — Present** | [prepstudio.mritunjay.live](https://prepstudio.mritunjay.live)

Developed a full-stack AI learning platform that transforms any topic into a structured study plan, generates rich educational content, conducts voice-based AI interviews, and helps users publish polished articles — all within a single personalized workspace.

**Tech Stack:** Next.js, FastAPI, Google Gemini API, PostgreSQL, Firebase

- Engineered a conversational plan generation pipeline using Google Gemini that takes a topic and deadline as input and outputs a structured day-by-day study curriculum with balanced workloads.
- Built a lazy content generation system where full topic explanations are generated on first access via Gemini and permanently cached in PostgreSQL, eliminating redundant API calls on repeat visits.
- Designed a voice interview engine using the browser-native Web Speech API for real-time speech-to-text transcription and TTS question delivery, with Gemini evaluating each answer for accuracy, depth, and clarity to produce a scored performance report.
- Implemented an AI article refiner that converts a user's raw plain-text notes into publication-ready Markdown articles with proper structure, code blocks, and formatting — with a secondary Twitter thread export mode.
- Integrated Firebase Authentication with JWT verification middleware on the FastAPI backend, ensuring all generated plans, topic content, articles, and interview results persist securely per user account.

---

### 3. SolShield AI — AI-Powered Solana Smart Contract Security Copilot
**May 2026 — Present** | [solshield.mritunjay.live](https://solshield.mritunjay.live)

Developed an AI-powered smart contract security auditing platform for the Solana ecosystem that detects vulnerabilities in Anchor/Rust programs and generates intelligent remediation guidance using LLM-powered security analysis.

**Tech Stack:** Next.js, FastAPI, Solana, Tree-sitter, Gemini AI, PostgreSQL, Monaco Editor

- Engineered a static analysis pipeline using Tree-sitter AST parsing to detect Solana-specific vulnerabilities including missing signer validation, PDA misuse, unsafe CPI patterns, and unchecked account ownership.
- Built an AI-driven vulnerability explanation engine using Gemini AI to generate exploit scenarios, severity analysis, and secure remediation suggestions for insecure smart contract logic.
- Designed a production-grade cybersecurity dashboard with Monaco-based code intelligence, real-time vulnerability highlighting, security scoring, and interactive audit workflows.
- Implemented GitHub repository scanning and automated project ingestion pipelines for analyzing Anchor/Rust smart contract repositories directly from source control.
- Developed a modular scanning engine with rule-based vulnerability detection architecture supporting scalable addition of custom Solana security rules and audit patterns.
- Integrated PostgreSQL-backed persistence for scan history, vulnerability reports, AI-generated audit insights, and security analytics dashboards.
- Optimized developer experience through responsive UI workflows, animated scan pipelines, streaming AI responses, and low-latency audit report generation.

---

### 4. UIWiz — AI Native UI Development Platform
**January 2026 — Present** | [uiwiz.live](https://www.uiwiz.live/)

Architected an AI-native engine using Google Gemini API that converts natural language and image prompts into production-ready React + Tailwind code, reducing UI prototyping time by 80%.

**Tech Stack:** TypeScript, Django, PostgreSQL, Gemini API, Firebase, Sandpack

- Implemented Server-Sent Events (SSE) to stream code updates in real-time, providing an interactive "magic-typing" experience.
- Engineered a backend failover mechanism switching across Gemini 2.0 Flash/Pro models upon rate limits, ensuring 100% availability.
- Built a dynamic, in-browser execution environment using Sandpack for live multi-file project parsing and npm dependency resolution.
- Designed a secure "bring-your-own-key" architecture with AES-256 encryption at the database level to protect user privacy.
- Enabled image-to-code capabilities, reconciling design screenshots into responsive, accessible React components with high visual fidelity.
- Developed a conversational state engine for progressive UI refinement through iterative prompting, maintaining full code context.

---

### 5. PortfolioMaker — AI-Powered Portfolio Generator
**December 2025 — January 2026** | [portfoliomaker.vercel.app](https://portfolio-maker-git-main-electrogeeks-projects.vercel.app/)

Developed an AI-driven web application that converts PDF resumes into deployment-ready portfolio websites with 95%+ structured data extraction accuracy.

**Tech Stack:** Django, Google Gemini API, PostgreSQL, Firebase, pypdf

- Engineered an intelligent resume parsing pipeline using Google Gemini for contextual data extraction and field mapping.
- Integrated AI-generated content for missing sections such as bios and project descriptions to enhance profile completeness.
- Designed three responsive portfolio templates (Terminal, Renaissance, Newspaper) with distinct visual aesthetics.
- Built a full-stack workflow including PDF text extraction (pypdf), Django ORM persistence, and secure ZIP export.
- Integrated Firebase Authentication with secure user profiles and production-ready deployment with automated PostgreSQL migrations.

---

## Skills

### Core Engineering
Python, Golang, JavaScript, C/C++, System Design

### Backend Architectures
FastAPI, Django, Flask, Node.js, WebSockets, gRPC

### Infrastructure & DevOps
Docker, Kubernetes, AWS, Terraform, CI/CD Pipelines

### Database & Caching
PostgreSQL, Redis, MongoDB, Elasticsearch, DynamoDB

### AI & Data Processing
TensorFlow, PyTorch, Celery, RabbitMQ, Apache Kafka

---

## Education

### B.Tech in Electronics & Communication
**Visvesvaraya Technological University** | 2018 — 2022 | 7.1 CGPA

---

## Volunteer / Internship

### Software Developer Intern — IEEE YEEP
**May 2021 — Aug 2021**

Developed IoT-based healthcare monitoring systems using Embedded C and Arduino.

---

## Publications & Research

- **Remote Healthcare Monitoring System** — Published via Intl Journal of Advanced Scientific Innovation • Jun 2022
- **Healthcare Data Collection Systems** — Book Publication (ISBN: 978-93-91535-00-1) • Nov 2021

---

## Activity & Stats

- **GitHub Contributions:** [github.com/electro-geek](https://github.com/electro-geek)
- **LeetCode Profile:** [leetcode.com/electrogeek](https://leetcode.com/electrogeek)

