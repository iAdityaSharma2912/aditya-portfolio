"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experienceData = [
  {
    id: "01",
    title: "Infotact Solutions",
    role: "Python Developer Intern",
    date: "Nov 2025 — Feb 2026",
    bullets: [
      "Engineered 4 Python automation scripts eliminating 15 hrs/week of manual QA; adopted across 2 internal projects.",
      "Standardised input normalisation and error-handling routines across the team's codebase.",
      "Resolved 5+ production defects in Python backend services; authored root-cause docs preventing recurrence across 3 modules.",
    ],
  },
  {
    id: "02",
    title: "HCL Technologies",
    role: "Software Engineering Trainee",
    date: "Dec 2024 — Mar 2025",
    bullets: [
      "Integrated ML recommendation APIs and ran A/B analysis achieving a measured 35% uplift in user engagement.",
      "Designed AI-driven smart forms; demonstrated a 50% reduction in form-completion time.",
      "Built scalable full-stack web apps using MVC architecture and Agile delivery practices.",
    ],
  },
  {
    id: "03",
    title: "Internship Studio",
    role: "SDE Intern",
    date: "Mar 2024 — Apr 2024",
    bullets: [
      "Developed a high-performance C++ application focused on algorithmic efficiency and cloud scalability.",
      "Gained hands-on experience across the SDLC deploying to AWS.",
      "Utilised Git, CI/CD, and Agile practices in a team environment.",
    ],
  },
];

const skillsData = [
  { category: "Data & Analytics", tech: "Python (Pandas, NumPy, OpenPyXL) · SQL · ETL · A/B Testing" },
  { category: "AI / ML Tools",    tech: "OpenAI API · OpenRouter · LangChain · RAG · Prompt Engineering" },
  { category: "Frontend",         tech: "React · Next.js · TypeScript · Tailwind · Framer Motion · Chart.js" },
  { category: "Backend & DBs",    tech: "Node.js · Express · PostgreSQL · MySQL · Prisma ORM · MongoDB" },
  { category: "Languages",        tech: "Python · JavaScript (ES2022+) · TypeScript · SQL · C/C++" },
  { category: "Infra & Tools",    tech: "Git · Vercel · Railway · Docker · GitHub Actions · Postman" },
];

const educationData = [
  { institution: "KCC Institute of Technology & Management", degree: "B.Tech — Computer Science Engineering", detail: "Greater Noida · AKTU", date: "2022 — 2026" },
  { institution: "Apeejay School, Saket", degree: "Higher Secondary (PCM + CS) · CBSE", detail: "New Delhi", date: "2019 — 2021" },
  { institution: "The Cambridge International School", degree: "Secondary Education", detail: "", date: "2018 — 2019" },
];

const achievements = [
  "Independently built and shipped 5+ LLM-powered applications during full-time B.Tech study — all live with CI/CD.",
  "HCL Technologies industry programme: enterprise full-stack engineering, ML APIs, Agile delivery (Mar 2025).",
  "FlashSnap (flashsnap.in) — live platform processing 50-page PDFs in under 12 seconds with SM-2 spaced repetition.",
  "SheetSnap — reduced analyst data-to-insight time from 2–4 hours to under 60 seconds on 10k+ row datasets.",
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="experience" className="w-full text-foreground flex flex-col font-sans">

      {/* ── EXPERIENCE ── */}
      <section className="py-24 px-6 md:px-12" style={{ borderTop: "1px solid #1E1C1A" }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-7xl uppercase tracking-wider mb-12"
            style={{ color: "#F0EDE6" }}
          >
            Experience
          </motion.h2>

          <div style={{ borderTop: "1px solid #1E1C1A" }}>
            {experienceData.map((item, index) => (
              <div key={item.id} style={{ borderBottom: "1px solid #1E1C1A" }}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0 group"
                >
                  <div className="flex items-start md:items-center gap-6 text-left">
                    <span className="font-mono text-lg w-8 shrink-0 transition-colors" style={{ color: openIndex === index ? "#C9A84C" : "#3A3530" }}>
                      {openIndex === index ? "−" : "+"}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-2xl md:text-4xl uppercase tracking-wider transition-colors" style={{ color: "#F0EDE6" }}>
                        {item.title}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#C9A84C66" }}>
                        {item.role}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 ml-14 md:ml-0 w-fit" style={{ border: "1px solid #1E1C1A", color: "#5A5550" }}>
                    {item.date}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-14 max-w-3xl">
                        <div className="flex flex-col gap-3">
                          {item.bullets.map((bullet, bi) => (
                            <motion.div
                              key={bi}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: bi * 0.08 }}
                              className="flex gap-4 items-start"
                            >
                              <div className="w-1 h-1 rounded-full shrink-0 mt-2.5" style={{ background: "#C9A84C" }} />
                              <p className="font-sans text-base leading-relaxed" style={{ color: "#7A7570" }}>{bullet}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="py-24 px-6 md:px-12" style={{ borderTop: "1px solid #1E1C1A", background: "#0D0B08" }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-7xl uppercase tracking-wider mb-12"
            style={{ color: "#F0EDE6" }}
          >
            Technical Arsenal
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.07 }}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center gap-3 pb-2" style={{ borderBottom: "1px solid #1E1C1A" }}>
                  <div className="w-1 h-3" style={{ background: "#C9A84C44" }} />
                  <h3 className="font-mono text-xs uppercase tracking-widest" style={{ color: "#C9A84C66" }}>
                    {skill.category}
                  </h3>
                </div>
                <p className="font-serif text-xl md:text-2xl leading-snug italic" style={{ color: "#9A9590" }}>
                  {skill.tech}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="py-24 px-6 md:px-12" style={{ borderTop: "1px solid #1E1C1A" }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-7xl uppercase tracking-wider mb-12"
            style={{ color: "#F0EDE6" }}
          >
            Education
          </motion.h2>
          <div style={{ borderTop: "1px solid #1E1C1A" }}>
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="py-8 flex flex-col md:flex-row justify-between gap-4"
                style={{ borderBottom: "1px solid #1E1C1A" }}
              >
                <div className="flex flex-col gap-1.5 max-w-2xl">
                  <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wider" style={{ color: "#F0EDE6" }}>{edu.institution}</h3>
                  <p className="font-sans text-base" style={{ color: "#7A7570" }}>{edu.degree}</p>
                  {edu.detail && <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#3A3530" }}>{edu.detail}</span>}
                </div>
                <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 h-fit shrink-0" style={{ border: "1px solid #1E1C1A", color: "#5A5550" }}>
                  {edu.date}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="py-24 px-6 md:px-12" style={{ borderTop: "1px solid #1E1C1A", background: "#0D0B08" }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-7xl uppercase tracking-wider mb-12"
            style={{ color: "#F0EDE6" }}
          >
            Achievements
          </motion.h2>
          <div style={{ borderTop: "1px solid #1E1C1A" }}>
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="py-6 flex gap-6 items-start group"
                style={{ borderBottom: "1px solid #1E1C1A" }}
              >
                <span className="font-mono text-xs shrink-0 mt-1" style={{ color: "#C9A84C44" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-sans text-base leading-relaxed transition-colors duration-300 group-hover:text-foreground" style={{ color: "#7A7570" }}>
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
