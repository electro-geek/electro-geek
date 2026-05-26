"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { identity, roles, stats } from "@/lib/data";

function useTypewriter(words: string[]) {
  const [text, setText] = useState(words[0]);
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const word = words[wordIdx];
    const delay = deleting ? 55 : 85;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text.length < word.length) {
          setText(word.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 2400);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIdx, words, reduced]);

  return text;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Hero() {
  const typedText = useTypewriter(roles);
  const reduced = useReducedMotion();

  return (
    <section
      id="home"
      className="hero-grid relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-28 pb-20"
    >
      {/* Glow blobs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.09) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial={reduced ? "visible" : "hidden"}
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 text-sm text-zinc-400 mb-8">
          <span className="animate-pulse-dot w-2 h-2 rounded-full bg-green-500 inline-block flex-shrink-0" />
          Available for opportunities&nbsp;·&nbsp;Bengaluru, India
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] mb-6 tracking-tight"
        >
          <span className="gradient-text">Mritunjay</span>
          <br />
          <span className="text-white">Sharma</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div variants={itemVariants} className="font-mono text-blue-400 text-base sm:text-lg mb-6 h-7">
          <span className="text-zinc-600">$ role=</span>
          <span className="typing-cursor">{typedText}</span>
        </motion.div>

        {/* Tagline */}
        <motion.p variants={itemVariants} className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Building{" "}
          <span className="text-white font-medium">scalable distributed systems</span> and{" "}
          <span className="text-white font-medium">high-performance real-time applications</span>{" "}
          at the intersection of robust architecture and efficient data processing.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-14">
          <a
            href="#projects"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-7 py-3.5 rounded-xl transition-all duration-200 cursor-pointer shadow-lg shadow-blue-950/40"
          >
            <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 glass-card hover:border-zinc-500 text-white font-medium px-7 py-3.5 rounded-xl transition-all duration-200 cursor-pointer"
          >
            <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            Get in Touch
          </a>
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-zinc-400 hover:text-white font-medium px-6 py-3.5 rounded-xl transition-colors duration-200 cursor-pointer border border-transparent hover:border-zinc-700"
          >
            <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-2xl p-4 text-center">
              <div className="font-heading font-bold text-2xl text-white">{s.value}</div>
              <div className="text-zinc-500 text-xs mt-0.5 font-mono">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div variants={itemVariants} className="mt-14 animate-bounce-y">
          <a href="#about" className="inline-flex flex-col items-center gap-1.5 text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer">
            <span className="text-xs font-mono">scroll</span>
            <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
