"use client";

import { motion, useReducedMotion } from "framer-motion";
import { identity } from "@/lib/data";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const socials = [
  {
    label: "GitHub",
    href: identity.github,
    icon: (
      <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: identity.linkedin,
    icon: (
      <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: identity.leetcode,
    icon: (
      <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const reduced = useReducedMotion();
  const initial = reduced ? "visible" : "hidden";

  return (
    <section id="contact" className="py-24 px-4" style={{ background: "rgba(24,24,27,0.4)" }}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div variants={fadeUp} initial={initial} whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
          <div className="section-label justify-center"><span />07. CONTACT<span /></div>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-5">
            Let&apos;s Build Something
            <br />
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-12">
            Open to full-time roles, freelance projects, and interesting engineering challenges.
            Drop a message and let&apos;s talk.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={stagger}
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
          <motion.a
            variants={fadeUp}
            href={`mailto:${identity.email}`}
            className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-blue-600/40 transition-all duration-200 cursor-pointer text-left group"
            whileHover={reduced ? {} : { borderColor: "rgba(37,99,235,0.4)" }}
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/30 transition-colors">
              <svg aria-hidden="true" className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider">Email</div>
              <div className="text-white text-sm font-medium mt-0.5 truncate">{identity.email}</div>
            </div>
          </motion.a>

          <motion.a
            variants={fadeUp}
            href={`tel:${identity.phone.replace(/\s/g, "")}`}
            className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-blue-600/40 transition-all duration-200 cursor-pointer text-left group"
            whileHover={reduced ? {} : { borderColor: "rgba(37,99,235,0.4)" }}
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/30 transition-colors">
              <svg aria-hidden="true" className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <div>
              <div className="text-zinc-500 text-xs font-mono uppercase tracking-wider">Phone</div>
              <div className="text-white text-sm font-medium mt-0.5">{identity.phone}</div>
            </div>
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={stagger}
          initial={initial}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-wrap justify-center gap-3"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              variants={fadeUp}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 glass-card hover:border-zinc-600 text-zinc-400 hover:text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer"
            >
              {s.icon}
              {s.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
