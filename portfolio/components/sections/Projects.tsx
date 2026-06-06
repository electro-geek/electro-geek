"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/data";
import { revealUp, stagger, vp } from "@/lib/motion";
import { Compass } from "@/components/PixelArt";

const ExternalLinkIcon = () => (
  <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const featuredProjects = projects.filter((p) => p.featured);
const gridProjects = projects.filter((p) => !p.featured);

export default function Projects() {
  const reduced = useReducedMotion();
  const initial = reduced ? "visible" : "hidden";

  return (
    <section id="projects" className="section section-tinted relative overflow-hidden">
      <div className="absolute top-16 left-6 sm:left-16 animate-float opacity-80 pointer-events-none">
        <Compass size={54} />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div variants={revealUp} initial={initial} whileInView="visible" viewport={vp} className="mb-12">
          <div className="section-label">02 · The Evidence</div>
          <h2 className="heading">
            Build <em>Log</em>
          </h2>
          <p className="mt-4 max-w-xl text-lg" style={{ color: "var(--color-ink-dim)" }}>
            Production-grade expeditions — built for performance, scale, and AI integration.
          </p>
        </motion.div>

        {/* Featured */}
        <motion.div variants={stagger} initial={initial} whileInView="visible" viewport={vp}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {featuredProjects.map((project, idx) => (
            <motion.div key={project.name} variants={revealUp}
              className={`card p-6 sm:p-8 flex flex-col ${idx === 0 ? "lg:col-span-2" : "lg:col-span-1"}`}>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="tech-tag tech-tag-accent">★ Featured</span>
                <span className="font-tag text-xs" style={{ color: "var(--color-ink-faint)" }}>{project.period}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl mb-1" style={{ color: "var(--color-ink)" }}>
                {project.name}
              </h3>
              <p className="font-body italic text-lg mb-4" style={{ color: "var(--color-brand)" }}>{project.subtitle}</p>

              <p className="leading-relaxed mb-5 text-[15px]" style={{ color: "var(--color-ink-dim)" }}>
                {project.description}
              </p>

              {project.highlights && (
                <div className={`gap-3 mb-5 ${idx === 0 ? "flex flex-col sm:flex-row" : "flex flex-col"}`}>
                  {project.highlights.map((h) => (
                    <div key={h.label} className="flex-1 rounded-xl p-3.5"
                      style={{ background: "rgba(155,191,94,0.06)", border: "1px solid rgba(155,191,94,0.16)" }}>
                      <div className="contact-row__label">{h.label}</div>
                      <div className="text-sm" style={{ color: "var(--color-ink)" }}>{h.detail}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-4"
                style={{ borderTop: "1px solid var(--color-line)" }}>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 5).map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <a href={project.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-tag text-xs font-semibold transition-colors"
                  style={{ color: "var(--color-brand)" }}>
                  View Live <ExternalLinkIcon />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div variants={stagger} initial={initial} whileInView="visible" viewport={vp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gridProjects.map((project) => (
            <motion.div key={project.name} variants={revealUp} className="card p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <span className="font-tag text-xs" style={{ color: "var(--color-ink-faint)" }}>{project.period}</span>
                <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name}`}
                  className="transition-colors" style={{ color: "var(--color-ink-faint)" }}>
                  <ExternalLinkIcon />
                </a>
              </div>
              <h3 className="font-display text-xl mb-1" style={{ color: "var(--color-ink)" }}>{project.name}</h3>
              <p className="font-body italic text-sm mb-3" style={{ color: "var(--color-brand)" }}>{project.subtitle}</p>
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--color-ink-dim)" }}>{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid var(--color-line)" }}>
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
