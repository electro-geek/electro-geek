"use client";

import Image from "next/image";
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

/* Framed preview screenshot with a faux browser chrome bar */
function ProjectPreview({
  image,
  name,
  sizes,
}: {
  image: NonNullable<(typeof projects)[number]["image"]>;
  name: string;
  sizes: string;
}) {
  return (
    <div className="project-preview">
      <div className="project-preview__bar">
        <span className="project-preview__dot" style={{ background: "#e06c5b" }} />
        <span className="project-preview__dot" style={{ background: "#d9a441" }} />
        <span className="project-preview__dot" style={{ background: "#9bbf5e" }} />
      </div>
      <div className="project-preview__shot">
        <Image
          src={image}
          alt={`${name} interface preview`}
          fill
          sizes={sizes}
          placeholder="blur"
          className="project-preview__img"
        />
      </div>
    </div>
  );
}

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

        {/* Featured — preview-led cards */}
        <motion.div variants={stagger} initial={initial} whileInView="visible" viewport={vp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {featuredProjects.map((project, idx) => {
            const lead = idx === 0;
            return (
              <motion.div key={project.name} variants={revealUp}
                className={`card overflow-hidden flex ${lead ? "lg:col-span-2 flex-col lg:flex-row" : "flex-col"}`}>
                {/* Preview */}
                {project.image && (
                  <div className={lead ? "lg:w-1/2 p-4 sm:p-5 lg:pr-0" : "p-4 sm:p-5 pb-0"}>
                    <ProjectPreview
                      image={project.image}
                      name={project.name}
                      sizes={lead ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
                    />
                  </div>
                )}

                {/* Content */}
                <div className={`flex flex-col p-6 sm:p-8 ${lead ? "lg:w-1/2 lg:py-8" : "pt-5"}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
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
                    <div className={`gap-3 mb-5 ${lead ? "flex flex-col sm:flex-row" : "flex flex-col"}`}>
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
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Grid — text-led cards (no preview available) */}
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
