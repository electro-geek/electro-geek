"use client";

import { motion, useReducedMotion } from "framer-motion";
import { education, publications } from "@/lib/data";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Education() {
  const reduced = useReducedMotion();
  const initial = reduced ? "visible" : "hidden";

  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14">

          {/* Education */}
          <div>
            <motion.div variants={fadeUp} initial={initial} whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="mb-8">
              <div className="section-label"><span />05. EDUCATION</div>
              <h2 className="font-heading font-bold text-3xl text-white">Academic Background</h2>
            </motion.div>
            <motion.div variants={fadeUp} initial={initial} whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg aria-hidden="true" className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">{education.degree}</h3>
                  <div className="text-blue-400 font-medium text-sm mt-1">{education.university}</div>
                  <div className="flex items-center gap-3 mt-2 flex-wrap">
                    <span className="text-zinc-500 text-sm font-mono">{education.period}</span>
                    <span className="text-zinc-700">·</span>
                    <span className="text-zinc-400 text-sm">{education.cgpa}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Publications */}
          <div>
            <motion.div variants={fadeUp} initial={initial} whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="mb-8">
              <div className="section-label"><span />06. PUBLICATIONS</div>
              <h2 className="font-heading font-bold text-3xl text-white">Research Work</h2>
            </motion.div>
            <motion.div
              variants={stagger}
              initial={initial}
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-4"
            >
              {publications.map((pub, idx) => (
                <motion.div key={idx} variants={fadeUp} className="glass-card rounded-2xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg aria-hidden="true" className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-white text-sm leading-snug">{pub.title}</h3>
                      <div className="text-zinc-500 text-xs mt-1.5">{pub.venue}</div>
                      <div className="text-zinc-600 text-xs font-mono mt-1">{pub.date}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
