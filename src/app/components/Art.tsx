"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const artworks = [
  {
    id: "01",
    src: "/assests/art/jinx.jpg",
    title: "Jinx",
    medium: "Colour Pencil",
    year: "2023",
    description: "Fan art of Jinx from Arcane — captured her cold stare and iconic blue hair using coloured pencils. One of my most detailed pieces.",
  },
  {
    id: "02",
    src: "/assests/art/greed.jpg",
    title: "Greed",
    medium: "Ballpoint Pen",
    year: "2023",
    description: "Part of a 7 Deadly Sins series. A skeletal creature hoarding money and gems — drawn entirely in blue ballpoint pen on ruled paper.",
  },
  {
    id: "03",
    src: "/assests/art/lust.jpg",
    title: "Lust",
    medium: "Ballpoint Pen",
    year: "2023",
    description: "Another entry from the Sins series — raw, expressive figure work with chaotic energy. Ballpoint on lined paper.",
  },
  {
    id: "04",
    src: "/assests/art/wolf.jpg",
    title: "Wolf Crest",
    medium: "Pencil & Ink",
    year: "2023",
    description: "A stylised wolf crest logo design — bold geometric letters above a snarling wolf face, shaded in pencil with inked outlines.",
  },
  {
    id: "05",
    src: "/assests/art/portrait1.jpg",
    title: "Portrait Study I",
    medium: "Pencil",
    year: "2023",
    description: "A shaded pencil portrait — studying facial structure, hair texture, and depth using graphite on drawing paper. Signed 'Addy'.",
  },
  {
    id: "06",
    src: "/assests/art/portraits2.jpg",
    title: "Portrait Studies II",
    medium: "Pencil",
    year: "2023",
    description: "Two versions of the same subject — a detailed pencil study alongside a loose contour line drawing. Exploring style contrast.",
  },
  {
    id: "07",
    src: "/assests/art/character.jpg",
    title: "Danger / You",
    medium: "Ballpoint Pen",
    year: "2023",
    description: "An anime-inspired character sketch with expressive blue-inked hair, surrounded by raw emotion and text fragments. Early sketchbook work.",
  },
];

export default function Art() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], ["40px", "0px"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section
      id="art"
      ref={sectionRef}
      className="w-full text-foreground py-24 px-6 md:px-12 border-t border-muted overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <motion.div style={{ y: headerY, opacity: headerOpacity }}>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-4">
            Sketchbook
          </h2>
          <p className="font-mono text-gray-500 uppercase tracking-widest text-sm">
            Drawings & Illustrations — Pen · Pencil · Colour
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {artworks.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="break-inside-avoid relative group cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative overflow-hidden border border-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={art.src}
                  alt={art.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/70 transition-all duration-500 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
                  <span className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-1">
                    {art.medium} · {art.year}
                  </span>
                  <h3 className="font-display text-2xl font-black uppercase tracking-tight text-foreground">
                    {art.title}
                  </h3>
                  <span className="font-mono text-xs text-gray-500 mt-3 uppercase tracking-widest">
                    Click to view →
                  </span>
                </div>

                {/* Index badge */}
                <div className="absolute top-4 left-4 font-mono text-xs text-gray-600 bg-background/80 px-2 py-1 border border-muted">
                  {art.id}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-md flex items-center justify-center p-6 md:p-12"
            onClick={() => setActiveIndex(null)}
          >
            <div
              className="relative max-w-5xl w-full flex flex-col md:flex-row gap-0 border border-muted"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image panel */}
              <div className="flex-1 bg-muted/10 flex items-center justify-center min-h-64 max-h-[80vh] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={artworks[activeIndex].src}
                  alt={artworks[activeIndex].title}
                  className="w-full h-full object-contain max-h-[80vh]"
                />
              </div>

              {/* Info panel */}
              <div className="w-full md:w-72 shrink-0 flex flex-col justify-between p-8 border-t md:border-t-0 md:border-l border-muted bg-background">
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                    {artworks[activeIndex].id} / {String(artworks.length).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tighter text-foreground">
                    {artworks[activeIndex].title}
                  </h3>
                  <div className="flex gap-3 flex-wrap">
                    <span className="font-mono text-xs border border-muted px-3 py-1 text-gray-400 uppercase tracking-widest">
                      {artworks[activeIndex].medium}
                    </span>
                    <span className="font-mono text-xs border border-muted px-3 py-1 text-gray-400 uppercase tracking-widest">
                      {artworks[activeIndex].year}
                    </span>
                  </div>
                  <p className="font-sans text-gray-400 text-base leading-relaxed mt-2">
                    {artworks[activeIndex].description}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setActiveIndex((activeIndex - 1 + artworks.length) % artworks.length)}
                    className="flex-1 py-3 border border-muted font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-foreground hover:border-foreground transition-all duration-300"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={() => setActiveIndex((activeIndex + 1) % artworks.length)}
                    className="flex-1 py-3 border border-muted font-mono text-xs uppercase tracking-widest text-gray-400 hover:text-foreground hover:border-foreground transition-all duration-300"
                  >
                    Next →
                  </button>
                </div>

                <button
                  onClick={() => setActiveIndex(null)}
                  className="mt-4 py-3 border border-muted/50 font-mono text-xs uppercase tracking-widest text-gray-600 hover:text-gray-400 transition-colors"
                >
                  Close ✕
                </button>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
