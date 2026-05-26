"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/lib/data";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Experience() {
  const reduced = useReducedMotion();
  const initial = reduced ? "visible" : "hidden";

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div variants={fadeUp} initial={initial} whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="mb-12">
          <div className="section-label"><span />03. EXPERIENCE</div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">Work History</h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="space-y-12"
        >
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className={`tl-item${idx < experience.length - 1 ? " pb-12" : ""}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">{job.role}</h3>
                  <div className="text-blue-400 font-medium mt-1">{job.company}</div>
                </div>
                <span className="text-zinc-500 text-xs font-mono bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full self-start whitespace-nowrap">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-2.5">
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
