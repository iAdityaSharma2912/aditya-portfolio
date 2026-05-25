"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const artworks = [
  {
    id: "01",
    src: "/assests/art/jinx.jpg",
    title: "Jinx",
    medium: "Colour Pencil",
    year: "2023",
    description: "Fan art of Jinx from Arcane — captured her cold stare and iconic blue hair using coloured pencils. One of my most detailed pieces.",
    aspect: "landscape",
  },
  {
    id: "02",
    src: "/assests/art/greed.jpg",
    title: "Greed",
    medium: "Ballpoint Pen",
    year: "2023",
    description: "Part of a 7 Deadly Sins series. A skeletal creature hoarding money and gems — drawn entirely in blue ballpoint pen on ruled paper.",
    aspect: "landscape",
  },
  {
    id: "03",
    src: "/assests/art/lust.jpg",
    title: "Lust",
    medium: "Ballpoint Pen",
    year: "2023",
    description: "Another entry from the Sins series — raw, expressive figure work with chaotic energy. Ballpoint on lined paper.",
    aspect: "square",
  },
  {
    id: "04",
    src: "/assests/art/wolf.jpg",
    title: "Wolf Crest",
    medium: "Pencil & Ink",
    year: "2023",
    description: "A stylised wolf crest logo design — bold geometric letters above a snarling wolf face, shaded in pencil with inked outlines.",
    aspect: "landscape",
  },
  {
    id: "05",
    src: "/assests/art/portrait1.jpg",
    title: "Portrait Study I",
    medium: "Pencil",
    year: "2023",
    description: "A shaded pencil portrait — studying facial structure, hair texture, and depth using graphite on drawing paper. Signed 'Addy'.",
    aspect: "portrait",
  },
  {
    id: "06",
    src: "/assests/art/portraits2.jpg",
    title: "Portrait Studies II",
    medium: "Pencil",
    year: "2023",
    description: "Two versions of the same subject — a detailed pencil study alongside a loose contour line drawing. Exploring style contrast.",
    aspect: "landscape",
  },
  {
    id: "07",
    src: "/assests/art/character.jpg",
    title: "Danger / You",
    medium: "Ballpoint Pen",
    year: "2023",
    description: "An anime-inspired character sketch with expressive blue-inked hair, surrounded by raw emotion and text fragments. Early sketchbook work.",
    aspect: "landscape",
  },
];

// Decorative SVG pen nib
function PenNib({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 75 L8 20 L30 5 L52 20 Z" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.4"/>
      <path d="M30 75 L20 40 L30 35 L40 40 Z" fill="#C9A84C" opacity="0.15"/>
      <line x1="30" y1="35" x2="30" y2="5" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3"/>
      <circle cx="30" cy="75" r="1.5" fill="#C9A84C" opacity="0.5"/>
    </svg>
  );
}

// Decorative SVG pencil lines (sketch marks)
function SketchLines({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 120" fill="none">
      <line x1="0" y1="10" x2="60" y2="0" stroke="#C9A84C" strokeWidth="0.5" opacity="0.25"/>
      <line x1="0" y1="20" x2="50" y2="12" stroke="#C9A84C" strokeWidth="0.3" opacity="0.15"/>
      <line x1="0" y1="30" x2="70" y2="18" stroke="#C9A84C" strokeWidth="0.4" opacity="0.2"/>
      <line x1="140" y1="100" x2="200" y2="90" stroke="#C9A84C" strokeWidth="0.5" opacity="0.25"/>
      <line x1="150" y1="110" x2="200" y2="102" stroke="#C9A84C" strokeWidth="0.3" opacity="0.15"/>
      <path d="M 180 20 Q 190 30 185 40" stroke="#C9A84C" strokeWidth="0.4" opacity="0.2" fill="none"/>
      <circle cx="100" cy="60" r="30" stroke="#C9A84C" strokeWidth="0.3" opacity="0.08" strokeDasharray="4 6"/>
    </svg>
  );
}

export default function Art() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 0.25], ["50px", "0px"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const decorY = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);

  return (
    <section
      id="art"
      ref={sectionRef}
      className="relative w-full text-foreground py-24 px-6 md:px-12 overflow-hidden"
      style={{ borderTop: "1px solid #1E1C1A" }}
    >
      {/* Decorative background elements */}
      <motion.div style={{ y: decorY }} className="pointer-events-none">
        <PenNib className="absolute top-16 right-12 w-10 h-14 md:w-16 md:h-20 opacity-30" />
        <SketchLines className="absolute top-8 left-0 w-48 h-28 opacity-60" />
        <SketchLines className="absolute bottom-16 right-0 w-48 h-28 opacity-40" style={{ transform: "scaleX(-1)" }} />
      </motion.div>

      {/* Large background text */}
      <div
        className="absolute top-12 right-6 md:right-16 font-display text-[20vw] uppercase tracking-widest leading-none pointer-events-none select-none z-0"
        style={{ color: "transparent", WebkitTextStroke: "1px rgba(201,168,76,0.05)" }}
      >
        ART
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-16 relative z-10">

        {/* Header */}
        <motion.div style={{ y: headerY, opacity: headerOpacity }}>
          <div className="flex items-end gap-6 mb-3">
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-wider" style={{ color: "#F0EDE6" }}>
              Sketchbook
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest mb-2 pb-1" style={{ color: "#C9A84C", borderBottom: "1px solid #C9A84C44" }}>
              {artworks.length} works
            </span>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "#5A5550" }}>
            Drawings & Illustrations · Pen · Pencil · Colour
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {artworks.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="break-inside-avoid relative group cursor-pointer mb-4"
              onClick={() => setActiveIndex(index)}
            >
              <div
                className="relative overflow-hidden transition-all duration-500"
                style={{ border: "1px solid #1E1C1A" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#C9A84C44"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#1E1C1A"; }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={art.src}
                  alt={art.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* Film-frame corner marks */}
                <svg className="absolute top-2 left-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 16 16" fill="none">
                  <path d="M1 10 L1 1 L10 1" stroke="#C9A84C" strokeWidth="1"/>
                </svg>
                <svg className="absolute bottom-2 right-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 16 16" fill="none">
                  <path d="M15 6 L15 15 L6 15" stroke="#C9A84C" strokeWidth="1"/>
                </svg>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-400"
                  style={{ background: "linear-gradient(to top, rgba(8,8,8,0.92) 0%, transparent 60%)" }}
                >
                  <span className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: "#C9A84C88" }}>
                    {art.medium} · {art.year}
                  </span>
                  <h3 className="font-display text-3xl uppercase tracking-wider" style={{ color: "#F0EDE6" }}>
                    {art.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-px w-6" style={{ background: "#C9A84C" }} />
                    <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#C9A84C" }}>
                      View
                    </span>
                  </div>
                </div>

                {/* Index badge */}
                <div
                  className="absolute top-3 right-3 font-mono text-xs px-2 py-0.5 z-10"
                  style={{ background: "#08080888", color: "#C9A84C66", border: "1px solid #C9A84C22" }}
                >
                  {art.id}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Medium breakdown */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex gap-8 pt-6"
          style={{ borderTop: "1px solid #1E1C1A" }}
        >
          {["Ballpoint Pen", "Pencil", "Colour Pencil", "Ink"].map((medium) => (
            <div key={medium} className="flex flex-col gap-1">
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#C9A84C44" }}>
                {medium}
              </span>
              <span className="font-mono text-xs" style={{ color: "#3A3530" }}>
                {artworks.filter(a => a.medium.includes(medium.split(" ")[0])).length} work{artworks.filter(a => a.medium.includes(medium.split(" ")[0])).length !== 1 ? "s" : ""}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
            style={{ background: "rgba(8,8,8,0.96)", backdropFilter: "blur(12px)" }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full flex flex-col md:flex-row overflow-hidden"
              style={{ border: "1px solid #C9A84C22" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="flex-1 flex items-center justify-center overflow-hidden" style={{ background: "#0D0B08", maxHeight: "80vh" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={artworks[activeIndex].src}
                  alt={artworks[activeIndex].title}
                  className="w-full h-full object-contain"
                  style={{ maxHeight: "80vh" }}
                />
              </div>

              {/* Info panel */}
              <div
                className="w-full md:w-64 shrink-0 flex flex-col justify-between p-7"
                style={{ background: "#080808", borderLeft: "1px solid #1E1C1A" }}
              >
                {/* Corner decoration */}
                <svg className="absolute top-0 left-0 w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M1 23 L1 1 L23 1" stroke="#C9A84C" strokeWidth="0.75" opacity="0.4"/>
                </svg>

                <div className="flex flex-col gap-4">
                  <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#C9A84C44" }}>
                    {artworks[activeIndex].id} / {String(artworks.length).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-display text-4xl uppercase tracking-wider leading-none"
                    style={{ color: "#F0EDE6" }}
                  >
                    {artworks[activeIndex].title}
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    <span className="font-mono text-xs px-2 py-1 uppercase tracking-widest" style={{ border: "1px solid #C9A84C33", color: "#C9A84C88" }}>
                      {artworks[activeIndex].medium}
                    </span>
                    <span className="font-mono text-xs px-2 py-1 uppercase tracking-widest" style={{ border: "1px solid #1E1C1A", color: "#5A5550" }}>
                      {artworks[activeIndex].year}
                    </span>
                  </div>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "#7A7570" }}>
                    {artworks[activeIndex].description}
                  </p>
                </div>

                <div className="flex flex-col gap-3 mt-6">
                  <div className="flex gap-3">
                    <button
                      onClick={() => setActiveIndex((activeIndex - 1 + artworks.length) % artworks.length)}
                      className="flex-1 py-2.5 font-mono text-xs uppercase tracking-widest transition-all duration-300"
                      style={{ border: "1px solid #1E1C1A", color: "#5A5550" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#C9A84C44"; (e.currentTarget as HTMLElement).style.color = "#C9A84C"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#1E1C1A"; (e.currentTarget as HTMLElement).style.color = "#5A5550"; }}
                    >← Prev</button>
                    <button
                      onClick={() => setActiveIndex((activeIndex + 1) % artworks.length)}
                      className="flex-1 py-2.5 font-mono text-xs uppercase tracking-widest transition-all duration-300"
                      style={{ border: "1px solid #1E1C1A", color: "#5A5550" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#C9A84C44"; (e.currentTarget as HTMLElement).style.color = "#C9A84C"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#1E1C1A"; (e.currentTarget as HTMLElement).style.color = "#5A5550"; }}
                    >Next →</button>
                  </div>
                  <button
                    onClick={() => setActiveIndex(null)}
                    className="py-2 font-mono text-xs uppercase tracking-widest transition-colors"
                    style={{ color: "#3A3530" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#7A7570"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#3A3530"; }}
                  >Close ✕</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
