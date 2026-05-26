"use client";

import { motion, useReducedMotion } from "framer-motion";
import { identity, techStack } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function About() {
  const reduced = useReducedMotion();
  const initial = reduced ? "visible" : "hidden";

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial={initial} whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
          <div className="section-label"><span />01. ABOUT</div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-12">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text column */}
          <motion.div
            variants={stagger}
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <motion.p variants={fadeUp} className="text-zinc-300 text-lg leading-relaxed mb-5">
              Backend Engineer with over{" "}
              <span className="text-white font-semibold">3 years of experience</span> building
              scalable distributed systems and high-performance real-time applications.
            </motion.p>
            <motion.p variants={fadeUp} className="text-zinc-400 leading-relaxed mb-5">
              My focus sits at the intersection of robust architectural design and efficient data
              processing. I specialise in the Python ecosystem (FastAPI, Django), performance
              optimisation via Redis/Celery, and containerised deployments with Docker and
              Kubernetes.
            </motion.p>
            <motion.p variants={fadeUp} className="text-zinc-400 leading-relaxed mb-8">
              Currently building AI-powered products at{" "}
              <span className="text-white">Neurabit Solution LLP</span>, integrating LLM
              capabilities into production microservices with real-time streaming architectures.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href={`mailto:${identity.email}`}
                className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
              >
                <svg aria-hidden="true" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="text-sm">{identity.email}</span>
              </a>
              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
              >
                <svg aria-hidden="true" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-sm">LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Stack cards */}
          <motion.div
            variants={stagger}
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-col gap-4"
          >
            {techStack.map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="glass-card rounded-2xl p-5">
                <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-2">
                  {item.label}
                </div>
                <div className="font-heading font-semibold text-lg text-white">{item.value}</div>
                <p className="text-zinc-500 text-sm mt-1">{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
