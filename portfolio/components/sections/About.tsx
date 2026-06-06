"use client";

import { motion, useReducedMotion } from "framer-motion";
import { identity, techStack } from "@/lib/data";
import { revealUp, stagger, vp } from "@/lib/motion";
import { Backpack } from "@/components/PixelArt";

export default function About() {
  const reduced = useReducedMotion();
  const initial = reduced ? "visible" : "hidden";

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Decorative sprite — asymmetric */}
      <div className="absolute top-16 right-6 sm:right-16 animate-float-slow opacity-80 pointer-events-none">
        <Backpack size={52} />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div variants={revealUp} initial={initial} whileInView="visible" viewport={vp} className="mb-14">
          <div className="section-label">01 · The Wanderer</div>
          <h2 className="heading">
            The <em>Adventurer</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div variants={stagger} initial={initial} whileInView="visible" viewport={vp}>
            <motion.p variants={revealUp} className="text-xl leading-relaxed mb-5" style={{ color: "var(--color-ink)" }}>
              Backend Engineer with over{" "}
              <span style={{ color: "var(--color-brand)" }}>3 years</span> spent building scalable
              distributed systems and high-performance real-time applications.
            </motion.p>
            <motion.p variants={revealUp} className="leading-relaxed mb-5 text-lg" style={{ color: "var(--color-ink-dim)" }}>
              My camp sits at the intersection of robust architecture and efficient data processing.
              I specialise in the Python ecosystem (FastAPI, Django), performance optimisation via
              Redis and Celery, and containerised deployments with Docker and Kubernetes.
            </motion.p>
            <motion.p variants={revealUp} className="leading-relaxed mb-8 text-lg" style={{ color: "var(--color-ink-dim)" }}>
              Currently building AI-powered products at{" "}
              <span style={{ color: "var(--color-ink)" }}>Neurabit Solution LLP</span>, integrating
              LLM capabilities into production microservices with real-time streaming.
            </motion.p>

            <motion.div variants={revealUp} className="flex flex-wrap gap-6">
              <a href={`mailto:${identity.email}`} className="font-tag text-sm flex items-center gap-2 transition-colors"
                style={{ color: "var(--color-ink-dim)" }}>
                <span style={{ color: "var(--color-brand)" }}>✉</span> {identity.email}
              </a>
              <a href={identity.linkedin} target="_blank" rel="noopener noreferrer"
                className="font-tag text-sm flex items-center gap-2 transition-colors" style={{ color: "var(--color-ink-dim)" }}>
                <span style={{ color: "var(--color-brand)" }}>in</span> LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Stack cards */}
          <motion.div variants={stagger} initial={initial} whileInView="visible" viewport={vp} className="flex flex-col gap-4">
            {techStack.map((item) => (
              <motion.div key={item.label} variants={revealUp} className="card p-5">
                <div className="contact-row__label">{item.label}</div>
                <div className="font-display text-lg" style={{ color: "var(--color-ink)" }}>{item.value}</div>
                <p className="text-sm mt-1" style={{ color: "var(--color-ink-faint)" }}>{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
