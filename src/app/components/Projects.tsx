"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "FlashSnap",
    tag: "AI Learning Platform",
    description: "AI-powered flashcard platform with PDF ingestion, SM-2 spaced repetition, streak tracking, and Google OAuth. Processes 50-page PDFs in under 12 seconds.",
    github: "https://github.com/iAdityaSharma2912/flashsnap",
    live: "https://www.flashsnap.in/",
    accent: "#4A9EFF",
    bgImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2573&auto=format&fit=crop",
  },
  {
    title: "DevVault",
    tag: "Code Snippet Manager",
    description: "Full-stack developer tool for organising code snippets with CodeMirror 6, tagging, full-text search, and REST API. Docker Compose deployed.",
    github: "https://github.com/iAdityaSharma2912/devvault",
    live: "https://taskky-the-manager.vercel.app/",
    accent: "#A78BFA",
    bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "SheetSnap",
    tag: "Data Analysis",
    description: "AI-powered Excel/CSV analytics engine. GPT-4o insight extraction cuts analyst time from 2–4 hrs to under 60 seconds on 10,000+ row datasets.",
    github: "https://github.com/iAdityaSharma2912/sheetsnap",
    live: "https://serene-rust.vercel.app/",
    accent: "#34D399",
    bgImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2664&auto=format&fit=crop",
  },
  {
    title: "Company Enricher",
    tag: "AI Intelligence Tool",
    description: "AI-powered company intelligence frontend enriching raw company names into structured profiles — industry, funding, size, tech stack, and key contacts.",
    github: null,
    live: "https://company-enricher-chi.vercel.app/",
    accent: "#F59E0B",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Lemy",
    tag: "Web Application",
    description: "Production-grade web application showcasing full-stack engineering fundamentals — clean architecture, responsive design, and Vercel deployment.",
    github: "https://github.com/iAdityaSharma2912/lemy",
    live: "https://lemy.vercel.app/",
    accent: "#F472B6",
    bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Krazy Notesy",
    tag: "Social Media Automation",
    description: "Python automation platform for Instagram posts with AI-generated captions. A/B tested GPT-generated vs manual content — 3× higher predicted engagement.",
    github: "https://github.com/iAdityaSharma2912/krazy-notesy",
    live: null,
    accent: "#C9A84C",
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2574&auto=format&fit=crop",
  },
  {
    title: "KIRO",
    tag: "AI Assistant",
    description: "AI assistant chatbot with Python backend, RESTful API integrations, and a conversational interface for natural language task handling.",
    github: "https://github.com/iAdityaSharma2912/KIRO",
    live: null,
    accent: "#FB923C",
    bgImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2560&auto=format&fit=crop",
  },
];

const CARD_COUNT = projects.length;

export default function Projects() {
  const targetRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((CARD_COUNT - 1) / CARD_COUNT) * 100}%`]
  );

  return (
    <section
      id="projects"
      ref={targetRef}
      className="relative"
      style={{ height: `${CARD_COUNT * 100}vh`, background: "transparent" }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">

        {/* Section header */}
        <div className="absolute top-10 left-6 md:left-12 z-10 flex flex-col gap-1">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl uppercase tracking-wider"
            style={{ color: "#F0EDE6" }}
          >
            Featured Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-widest"
            style={{ color: "#C9A84C66" }}
          >
            {CARD_COUNT} projects · scroll to explore →
          </motion.p>
        </div>

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-px z-20"
          style={{
            width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
            background: "linear-gradient(to right, #C9A84C, transparent)",
          }}
        />

        {/* Moving track */}
        <motion.div
          style={{ x, width: `${CARD_COUNT * 100}vw` }}
          className="flex gap-6 px-6 md:px-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="w-screen md:w-[78vw] lg:w-[58vw] h-[62vh] shrink-0 flex flex-col justify-end p-8 md:p-12 group relative overflow-hidden cursor-pointer"
              style={{ border: `1px solid ${hoveredIndex === index ? project.accent + "44" : "#1E1C1A"}` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              transition={{ duration: 0.4 }}
            >
              {/* bg image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.bgImage}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay — changes tint on hover */}
              <div
                className="absolute inset-0 z-10 transition-all duration-500"
                style={{
                  background: hoveredIndex === index
                    ? `linear-gradient(to top, ${project.accent}22, #08080899)`
                    : "linear-gradient(to top, #080808ee, #08080877)",
                }}
              />

              {/* Accent line top */}
              <motion.div
                className="absolute top-0 left-0 h-px z-20"
                style={{ background: project.accent }}
                initial={{ width: "0%" }}
                animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Index + Links */}
              <div className="absolute top-8 left-8 md:top-10 md:left-10 z-20 flex items-center gap-4">
                <span className="font-mono text-xs tracking-widest" style={{ color: project.accent + "88" }}>
                  {String(index + 1).padStart(2, "0")} / {String(CARD_COUNT).padStart(2, "0")}
                </span>
              </div>

              <div className="absolute top-8 right-8 md:top-10 md:right-10 flex gap-4 z-20">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:scale-110"
                    style={{ color: "#5A5550" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = project.accent; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#5A5550"; }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2c.14-.36.6-1.54-.14-3.2 0 0-1.14-.36-3.4 1.17a11.8 11.8 0 0 0-6 0C7.14 1.17 6 1.53 6 1.53c-.74 1.66-.28 2.84-.14 3.2A4.6 4.6 0 0 0 4.5 8c0 5.58 3.35 6.64 6.49 7a4.8 4.8 0 0 0-1 3.02v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="transition-colors duration-300"
                    style={{ color: "#5A5550" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = project.accent; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#5A5550"; }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                )}
              </div>

              {/* Card content */}
              <div className="flex flex-col gap-3 max-w-2xl z-20 relative">
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: project.accent }}>
                  {project.tag}
                </span>
                <h3 className="font-display text-5xl md:text-8xl uppercase tracking-wider" style={{ color: "#F0EDE6" }}>
                  {project.title}
                </h3>
                <p className="font-sans text-base md:text-lg max-w-lg leading-relaxed" style={{ color: "#7A7570" }}>
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
