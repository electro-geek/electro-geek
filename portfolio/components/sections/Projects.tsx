"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/data";

const ExternalLinkIcon = () => (
  <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const featuredProjects = projects.filter((p) => p.featured);
const gridProjects = projects.filter((p) => !p.featured);

export default function Projects() {
  const reduced = useReducedMotion();
  const initial = reduced ? "visible" : "hidden";

  return (
    <section id="projects" className="py-24 px-4" style={{ background: "rgba(24,24,27,0.4)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial={initial} whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="mb-12">
          <div className="section-label"><span />04. PROJECTS</div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">Featured Work</h2>
          <p className="text-zinc-400 mt-3 max-w-lg">
            Production-grade applications built with a focus on performance, scalability, and AI integration.
          </p>
        </motion.div>

        {/* Featured cards */}
        <motion.div
          variants={stagger}
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-col gap-6 mb-6"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.name}
              variants={fadeUp}
              className="glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              style={{ "--hover-shadow": "0 0 32px rgba(37,99,235,0.12)" } as React.CSSProperties}
              whileHover={reduced ? {} : { y: -4, boxShadow: "0 0 32px rgba(37,99,235,0.12)", borderColor: "rgba(37,99,235,0.38)" }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-blue-300 bg-blue-600/10 border border-blue-600/20 px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">{project.period}</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-3">
                    {project.name} — {project.subtitle}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed mb-5 text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-badge">{t}</span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 cursor-pointer"
                  >
                    View Live
                    <ExternalLinkIcon />
                  </a>
                </div>

                {project.highlights && (
                  <div className="lg:w-60 flex flex-col gap-3 flex-shrink-0">
                    {project.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="rounded-xl p-4"
                        style={{ background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.15)" }}
                      >
                        <div className="text-zinc-500 text-xs font-mono mb-1.5">{h.label}</div>
                        <div className="text-white text-sm">{h.detail}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Grid projects */}
        <motion.div
          variants={stagger}
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {gridProjects.map((project) => (
            <motion.div
              key={project.name}
              variants={fadeUp}
              className="glass-card rounded-2xl p-6 flex flex-col cursor-pointer"
              whileHover={reduced ? {} : { y: -4, boxShadow: "0 0 32px rgba(37,99,235,0.12)", borderColor: "rgba(37,99,235,0.38)" }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs text-zinc-500 font-mono">{project.period}</span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name}`}
                  className="text-zinc-600 hover:text-blue-400 transition-colors cursor-pointer flex-shrink-0 ml-2"
                >
                  <ExternalLinkIcon />
                </a>
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">{project.name}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="skill-badge">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
