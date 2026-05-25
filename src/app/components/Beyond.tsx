"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stories = [
  {
    title: "The 7 of You (The First Bloom)",
    excerpt: "If you start seeing love around you, you end up being loved.",
    date: "2025",
    link: "/assests/write/the 7 of you (the first bloom).pdf",
    tag: "Novel"
  },
  {
    title: "Do Saheliyaan",
    excerpt: "Two brave friends cleverly outsmart a cruel landlord to save their family's land and restore justice.",
    date: "2024",
    link: "/assests/write/Do saheli.pdf",
    tag: "Fiction",
  },
];

const photos = Array.from({ length: 29 }, (_, i) => `/assests/clicks/${i + 1}.jpg`);

export default function Beyond() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 0.3], ["40px", "0px"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      id="writing"
      ref={sectionRef}
      className="w-full text-foreground py-24 overflow-hidden relative"
      style={{ borderTop: "1px solid #1E1C1A" }}
    >
      {/* Large ghost text */}
      <div
        className="absolute top-8 left-6 md:left-12 font-display text-[18vw] uppercase tracking-widest leading-none pointer-events-none select-none z-0"
        style={{ color: "transparent", WebkitTextStroke: "1px rgba(201,168,76,0.04)" }}
      >
        Beyond
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-20 px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div style={{ y: headerY, opacity: headerOpacity }}>
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-wider mb-3" style={{ color: "#F0EDE6" }}>
            Beyond the Code
          </h2>
          <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "#5A5550" }}>
            Storytelling · Photography
          </p>
        </motion.div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── WRITINGS ── */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8 pb-4" style={{ borderBottom: "1px solid #1E1C1A" }}>
              <div className="w-1 h-4" style={{ background: "#C9A84C" }} />
              <h3 className="font-mono text-xs uppercase tracking-widest" style={{ color: "#C9A84C66" }}>
                Selected Writings
              </h3>
            </div>

            <div style={{ borderTop: "1px solid #1E1C1A" }}>
              {stories.map((story, index) => (
                <motion.a
                  key={index}
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group py-8 flex flex-col gap-3 block transition-all duration-300"
                  style={{ borderBottom: "1px solid #1E1C1A" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.paddingLeft = "12px"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.paddingLeft = "0px"; }}
                >
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="font-serif text-2xl md:text-3xl italic transition-colors" style={{ color: "#9A9590" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#F0EDE6"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#9A9590"; }}
                    >
                      {story.title}
                    </h4>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#3A3530" }}>
                        {story.date}
                      </span>
                      <span
                        className="font-mono text-xs px-2 py-0.5 uppercase tracking-widest"
                        style={{ border: "1px solid #1E1C1A", color: "#5A5550" }}
                      >
                        {story.tag}
                      </span>
                    </div>
                  </div>
                  <p className="font-sans text-sm leading-relaxed transition-colors" style={{ color: "#5A5550" }}>
                    {story.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-px w-4" style={{ background: "#C9A84C" }} />
                    <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#C9A84C" }}>
                      Read PDF ↗
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 p-6 relative"
              style={{ border: "1px solid #1E1C1A" }}
            >
              <svg className="absolute -top-px -left-px w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M1 19 L1 1 L19 1" stroke="#C9A84C" strokeWidth="0.75" opacity="0.4"/>
              </svg>
              <p className="font-serif text-xl md:text-2xl italic leading-relaxed" style={{ color: "#5A5550" }}>
                &ldquo;Code and art are the same act — turning nothing into something with your hands.&rdquo;
              </p>
              <span className="font-mono text-xs uppercase tracking-widest mt-3 block" style={{ color: "#3A3530" }}>
                — Addy
              </span>
            </motion.div>
          </div>

          {/* ── PHOTOGRAPHY ── */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-8 pb-4" style={{ borderBottom: "1px solid #1E1C1A" }}>
              <div className="w-1 h-4" style={{ background: "#C9A84C44" }} />
              <h3 className="font-mono text-xs uppercase tracking-widest" style={{ color: "#C9A84C66" }}>
                Lens Work
              </h3>
              <span className="font-mono text-xs ml-auto" style={{ color: "#3A3530" }}>
                {photos.length} frames
              </span>
            </div>

            <div className="relative w-full overflow-hidden" style={{ cursor: "ew-resize" }}>
              {/* Fade edges */}
              <div
                className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #080808, transparent)" }}
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #080808, transparent)" }}
              />

              <div className="flex gap-3 w-max animate-marquee">
                {[...photos, ...photos].map((src, index) => (
                  <div
                    key={index}
                    className="h-56 md:h-72 relative shrink-0 overflow-hidden group"
                    style={{ border: "1px solid #1E1C1A" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`Photography ${(index % photos.length) + 1}`}
                      className="w-auto h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    />
                    {/* Gold tint on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: "rgba(201,168,76,0.06)" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Second row scrolling opposite direction */}
            <div className="relative w-full overflow-hidden mt-3" style={{ cursor: "ew-resize" }}>
              <div
                className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #080808, transparent)" }}
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #080808, transparent)" }}
              />

              <div
                className="flex gap-3 w-max"
                style={{ animation: "marquee 38s linear infinite reverse" }}
              >
                {[...photos.slice(Math.floor(photos.length / 2)), ...photos.slice(0, Math.floor(photos.length / 2)), ...photos].map((src, index) => (
                  <div
                    key={index}
                    className="h-44 md:h-56 relative shrink-0 overflow-hidden group"
                    style={{ border: "1px solid #1E1C1A" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`Photography ${(index % photos.length) + 1}`}
                      className="w-auto h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: "rgba(201,168,76,0.06)" }}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
