"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// --- PROJECT DATA ---
const projects = [
  {
    title: "FlashSnap",
    tag: "AI Learning Platform",
    description: "AI-powered flashcard platform with PDF ingestion, SM-2 spaced repetition, streak tracking, and Google OAuth. Processes 50-page PDFs in under 12 seconds.",
    github: "https://github.com/iAdityaSharma2912/flashsnap",
    live: "https://www.flashsnap.in/",
    bgImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2573&auto=format&fit=crop",
  },
  {
    title: "DevVault",
    tag: "Code Snippet Manager",
    description: "Full-stack developer tool for organising and searching code snippets with CodeMirror 6 editor, tagging, full-text search, and REST API. Deployed with Docker Compose.",
    github: "https://github.com/iAdityaSharma2912/devvault",
    live: "https://taskky-the-manager.vercel.app/",
    bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "SheetSnap",
    tag: "Data Analysis",
    description: "AI-powered Excel/CSV analytics engine with GPT-4o insight extraction. Cuts analyst data-to-insight time from 2–4 hrs to under 60 seconds on 10,000+ row datasets.",
    github: "https://github.com/iAdityaSharma2912/sheetsnap",
    live: "https://serene-rust.vercel.app/",
    bgImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2664&auto=format&fit=crop",
  },
  {
    title: "Company Enricher",
    tag: "AI Intelligence Tool",
    description: "AI-powered company intelligence frontend that enriches raw company names into structured profiles — industry, funding, size, tech stack, and key contacts.",
    github: null,
    live: "https://company-enricher-chi.vercel.app/",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Lemy",
    tag: "Web Application",
    description: "A production-grade web application showcasing full-stack engineering fundamentals — clean architecture, responsive design, and real-world deployment on Vercel.",
    github: "https://github.com/iAdityaSharma2912/lemy",
    live: "https://lemy.vercel.app/",
    bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Krazy Notesy",
    tag: "Social Media Automation",
    description: "Python automation platform for scheduling Instagram posts with AI-generated captions and hashtags. A/B tested GPT-generated vs manual content — 3× higher predicted engagement.",
    github: "https://github.com/iAdityaSharma2912/krazy-notesy",
    live: null,
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2574&auto=format&fit=crop",
  },
  {
    title: "KIRO",
    tag: "AI Assistant",
    description: "AI assistant chatbot system with a Python backend, RESTful API integrations, and a conversational interface designed for natural language task handling.",
    github: "https://github.com/iAdityaSharma2912/KIRO",
    live: null,
    bgImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2560&auto=format&fit=crop",
  },
];

// Track width: 7 cards, each 80vw on md+, 100vw on mobile
// translateX goes from 0 to -(n-1)/n * 100% of total track
const CARD_COUNT = projects.length;
const TRANSLATE_END = `-${((CARD_COUNT - 1) / CARD_COUNT) * 100}%`;

export default function Projects() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Widen the scroll range proportionally for more cards
  const x = useTransform(scrollYProgress, [0, 1], ["0%", TRANSLATE_END]);

  return (
    <section id="projects" ref={targetRef} className="relative bg-transparent" style={{ height: `${CARD_COUNT * 100}vh` }}>
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">

        {/* Section Header */}
        <div className="absolute top-12 left-6 md:left-12 z-10 text-foreground font-black uppercase tracking-tighter text-4xl md:text-6xl">
          Featured Work
        </div>

        {/* Counter */}
        <motion.div
          className="absolute bottom-8 right-8 md:right-12 z-10 font-mono text-xs uppercase tracking-widest text-gray-500"
        >
          {CARD_COUNT} Projects
        </motion.div>

        {/* The moving track */}
        <motion.div
  style={{ x, width: `${CARD_COUNT * 100}vw` }}
  className="flex gap-8 px-6 md:px-12"
>
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-screen md:w-[80vw] lg:w-[60vw] h-[60vh] shrink-0 flex flex-col justify-end border border-muted p-8 md:p-12 group relative overflow-hidden"
            >
              {/* Background Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.bgImage}
                alt={`${project.title} background`}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-background/85 group-hover:bg-background/60 transition-all duration-500 z-10"></div>

              {/* Index Badge */}
              <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
                <span className="font-mono text-xs text-gray-600 tracking-widest">
                  {String(index + 1).padStart(2, "0")} / {String(CARD_COUNT).padStart(2, "0")}
                </span>
              </div>

              {/* Links */}
              <div className="absolute top-8 right-8 md:top-12 md:right-12 flex gap-4 z-20">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-foreground transition-colors duration-300"
                    aria-label="GitHub Repository"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2c.14-.36.6-1.54-.14-3.2 0 0-1.14-.36-3.4 1.17a11.8 11.8 0 0 0-6 0C7.14 1.17 6 1.53 6 1.53c-.74 1.66-.28 2.84-.14 3.2A4.6 4.6 0 0 0 4.5 8c0 5.58 3.35 6.64 6.49 7a4.8 4.8 0 0 0-1 3.02v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-foreground transition-colors duration-300"
                    aria-label="Live Website"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-4 max-w-2xl z-20 relative">
                <span className="font-mono text-sm tracking-widest uppercase text-gray-400">
                  {project.tag}
                </span>
                <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-foreground">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-lg md:text-xl font-sans max-w-md">
                  {project.description}
                </p>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
