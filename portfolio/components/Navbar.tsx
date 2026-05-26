"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { identity } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 60);

    const sections = document.querySelectorAll("section[id]");
    let current = "";
    sections.forEach((s) => {
      if (window.scrollY >= (s as HTMLElement).offsetTop - 130) {
        current = s.getAttribute("id") ?? "";
      }
    });
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 z-50 rounded-2xl px-5 py-3 transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : ""
      }`}
      style={{
        background: "rgba(9,9,11,0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(63,63,70,0.4)",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="group flex flex-col cursor-pointer leading-none" style={{ transition: "opacity 200ms cubic-bezier(0.32,0.72,0,1)" }}>
          <span className="font-heading font-bold text-base sm:text-lg tracking-tight gradient-text" style={{ transition: "letter-spacing 300ms cubic-bezier(0.32,0.72,0,1)" }}>
            {identity.name}
          </span>
          <span className="text-zinc-500 text-[11px] font-mono tracking-widest uppercase hidden sm:block" style={{ transition: "color 200ms cubic-bezier(0.32,0.72,0,1)" }}>
            {identity.role}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-200 cursor-pointer after:absolute after:bottom-[-3px] after:left-0 after:h-px after:bg-blue-600 after:transition-all after:duration-300 ${
                activeSection === link.href.slice(1)
                  ? "text-white after:w-full"
                  : "text-zinc-400 hover:text-white after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${identity.email}`}
            className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors duration-200 cursor-pointer"
          >
            <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            Hire Me
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="md:hidden p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            {menuOpen ? (
              <svg aria-hidden="true" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? "400px" : "0", opacity: menuOpen ? 1 : 0 }}
      >
        <div className="mt-3 pt-3 border-t border-zinc-800 flex flex-col gap-1 pb-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-zinc-300 hover:text-white px-3 py-2 rounded-xl hover:bg-zinc-800 text-sm font-medium transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${identity.email}`}
            className="mt-2 flex justify-center bg-blue-600 text-white text-sm font-medium px-4 py-2.5 rounded-xl cursor-pointer"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
