"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// --- PROJECT DATA ---
const projects = [
  {
    title: "KIRO",
    tag: "AI Assistant",
    description: "Built an AI assistant chatbot system, developing the backend using Python with RESTful API integrations.",
    github: "https://github.com/iAdityaSharma2912/KIRO",
    live: null,
    // Abstract Neural Network / Brain vibe
    bgImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2560&auto=format&fit=crop",
  },
  {
    title: "KRAZY NOTESY",
    tag: "Social Media Automater",
    description: "Python automation script to upload media to Instagram, integrating AI-generated captions and hashtags.",
    github: "https://github.com/iAdityaSharma2912/krazy-notesy",
    live: "https://krazynotesy.vercel.app",
    // Dynamic, connected network vibe
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2574&auto=format&fit=crop",
  },
  {
    title: "SheetSnap",
    tag: "Data Analysis",
    description: "AI-powered Excel analyzer that dissects spreadsheets, extracts insights, and automates data understanding.",
    github: "https://github.com/iAdityaSharma2912/sheetsnap",
    live: "https://sheetsnap-ai.vercel.app/",
    // Structured geometric data vibe
    bgImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2664&auto=format&fit=crop",
  },
];

export default function Projects() {
  const targetRef = useRef(null);
  
  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform vertical scroll (0 to 1) into horizontal movement (0% to -66.66%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section id="projects" ref={targetRef} className="relative h-[300vh] bg-transparent">
      {/* The sticky container that holds the horizontal track */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Section Header */}
        <div className="absolute top-12 left-6 md:left-12 z-10 text-foreground font-black uppercase tracking-tighter text-4xl md:text-6xl">
          Featured Work
        </div>
{/* The moving track */}
        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 w-[300vw]">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="w-screen md:w-[80vw] lg:w-[60vw] h-[60vh] shrink-0 flex flex-col justify-end border border-muted p-8 md:p-12 group relative overflow-hidden"
              // REMOVED: The inline style block is gone!
            >
              
              {/* =========================================
                  THE BACKGROUND IMAGE (Replaces inline style)
              ========================================= */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={project.bgImage} 
                alt={`${project.title} background`}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* =========================================
                  THE DARK OVERLAY
              ========================================= */}
              {/* Bumped to z-10 so it sits on top of the image */}
              <div className="absolute inset-0 bg-background/85 group-hover:bg-background/60 transition-all duration-500 z-10"></div>


              {/* =========================================
                  THE LINKS (Top Right Corner)
              ========================================= */}
              {/* Bumped to z-20 so it sits on top of the overlay */}
              <div className="absolute top-8 right-8 md:top-12 md:right-12 flex gap-4 z-20">
                {/* GitHub Icon */}
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
                
                {/* Live Site Icon */}
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

              {/* =========================================
                  PROJECT CARD CONTENT
              ========================================= */}
              {/* Bumped to z-20 so it sits on top of the overlay */}
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
        </motion.div>      </div>
    </section>
  );
}