"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA CONSTANTS ---
const experienceData = [
  {
    id: "01",
    title: "INFOTACT SOLUTIONS — PYTHON DEVELOPER INTERN",
    date: "Nov 2025 — Feb 2026",
    content: (
      <ul className="list-disc pl-5 flex flex-col gap-2 font-sans text-gray-400 leading-relaxed text-lg">
        <li>Engineered 4 Python automation scripts eliminating 15 hrs/week of manual QA; developed data-validation and transformation utilities adopted across 2 internal projects.</li>
        <li>Standardised input normalisation and error-handling routines across the team's codebase.</li>
        <li>Resolved 5+ production defects in Python backend services; authored root-cause documentation preventing recurrence across 3 modules.</li>
        <li>Accelerated team development velocity through systematic debugging and code review contributions.</li>
      </ul>
    ),
  },
  {
    id: "02",
    title: "HCL TECHNOLOGIES — SOFTWARE ENGINEERING TRAINEE",
    date: "Dec 2024 — Mar 2025",
    content: (
      <ul className="list-disc pl-5 flex flex-col gap-2 font-sans text-gray-400 leading-relaxed text-lg">
        <li>Integrated ML recommendation APIs and ran comparative A/B analysis to validate model performance, achieving a measured 35% uplift in user engagement.</li>
        <li>Designed AI-driven smart forms using ML inference APIs; analysed benchmark completion-time data and demonstrated a 50% reduction in form-completion time.</li>
        <li>Developed scalable full-stack web applications using MVC architecture and Agile delivery practices.</li>
        <li>Completed an industry-focused programme covering Java, Spring Boot, MySQL, HTML/CSS, and JavaScript.</li>
      </ul>
    ),
  },
  {
    id: "03",
    title: "INTERNSHIP STUDIO — SDE INTERN",
    date: "Mar 2024 — Apr 2024",
    content: (
      <ul className="list-disc pl-5 flex flex-col gap-2 font-sans text-gray-400 leading-relaxed text-lg">
        <li>Developed a high-performance C++ application focused on algorithmic efficiency and cloud scalability.</li>
        <li>Gained hands-on experience throughout the SDLC, deploying solutions on AWS.</li>
        <li>Utilised tools like Git, CI/CD, and Agile practices essential for modern software engineering.</li>
      </ul>
    ),
  },
];

const skillsData = [
  {
    category: "Data & Analytics",
    tech: "Python (Pandas, NumPy, OpenPyXL), SQL, Excel/CSV Pipelines, A/B Testing, ETL, Data Normalisation",
  },
  {
    category: "AI / ML Tools",
    tech: "OpenAI API (GPT-4o), OpenRouter, LangChain, RAG Pipelines, ML Inference APIs, Prompt Engineering",
  },
  {
    category: "Frontend",
    tech: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Chart.js, HTML/CSS",
  },
  {
    category: "Backend & Databases",
    tech: "Node.js, Express, Python, PostgreSQL, MySQL, Firebase Firestore, Prisma ORM, MongoDB, REST APIs",
  },
  {
    category: "Languages",
    tech: "Python, JavaScript (ES2022+), TypeScript, SQL, C/C++, Java",
  },
  {
    category: "Dev Tools & Infra",
    tech: "Git, GitHub, Vercel, Railway, Docker, Linux, GitHub Actions (CI/CD), Postman",
  },
];

const educationData = [
  {
    institution: "KCC Institute of Technology & Management",
    degree: "Bachelor of Technology in Computer Science Engineering",
    location: "Greater Noida, AKTU",
    date: "2022 — 2026",
  },
  {
    institution: "Apeejay School, Saket",
    degree: "Higher Secondary Education (PCM + CS), CBSE",
    location: "New Delhi",
    date: "2019 — 2021",
  },
  {
    institution: "The Cambridge International School",
    degree: "Secondary Education",
    location: "",
    date: "2018 — 2019",
  },
];

const achievementsData = [
  "Independently built and shipped 5+ LLM-powered applications during full-time B.Tech study — all live with CI/CD pipelines and public GitHub repositories.",
  "Completed HCL Technologies industry programme in enterprise full-stack engineering, ML API integration, and Agile delivery (Mar 2025).",
  "FlashSnap (flashsnap.in) — live production platform processing 50-page PDFs in under 12 seconds with custom SM-2 spaced repetition engine.",
  "SheetSnap — reduced analyst data-to-insight time from 2–4 hours to under 60 seconds on 10,000+ row datasets.",
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="experience" className="w-full text-foreground flex flex-col font-sans">

      {/* =========================================
          SECTION 1: EXPERIENCE (Accordion)
      ========================================= */}
      <section className="py-24 px-6 md:px-12 border-t border-muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-12">
            Experience
          </h2>

          <div className="border-t border-muted">
            {experienceData.map((item, index) => (
              <div key={item.id} className="border-b border-muted">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-8 flex flex-col md:flex-row md:items-center justify-between hover:text-gray-400 transition-colors duration-300 gap-4 md:gap-0"
                >
                  <div className="flex items-center gap-6 text-left">
                    <span className="font-mono text-2xl w-6 text-gray-500">
                      {openIndex === index ? "−" : "+"}
                    </span>
                    <span className="font-display text-xl md:text-3xl uppercase tracking-tight font-bold">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 pl-12 md:pl-0">
                    <span className="font-mono text-sm uppercase tracking-widest border border-muted px-3 py-1">
                      {item.date}
                    </span>
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-12 md:pl-18 max-w-3xl">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: SKILLS (Brutalist Grid)
      ========================================= */}
      <section className="py-24 px-6 md:px-12 border-t border-muted bg-muted/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-12">
            Technical Arsenal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {skillsData.map((skill, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="font-mono text-sm text-gray-500 uppercase tracking-widest border-b border-muted pb-2">
                  {skill.category}
                </h3>
                <p className="font-display text-xl md:text-2xl leading-tight text-gray-200">
                  {skill.tech}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: EDUCATION (Clean Timeline)
      ========================================= */}
      <section className="py-24 px-6 md:px-12 border-t border-muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-12">
            Education
          </h2>

          <div className="flex flex-col border-t border-muted">
            {educationData.map((edu, index) => (
              <div key={index} className="py-8 flex flex-col md:flex-row justify-between gap-4 border-b border-muted">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <h3 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight">
                    {edu.institution}
                  </h3>
                  <p className="font-sans text-gray-400 text-lg md:text-xl">
                    {edu.degree}
                  </p>
                  {edu.location && (
                    <span className="font-mono text-sm text-gray-500">
                      {edu.location}
                    </span>
                  )}
                </div>
                <div className="shrink-0 flex items-start">
                  <span className="font-mono text-sm uppercase tracking-widest border border-muted px-3 py-1">
                    {edu.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: ACHIEVEMENTS
      ========================================= */}
      <section className="py-24 px-6 md:px-12 border-t border-muted bg-muted/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-12">
            Achievements
          </h2>

          <div className="flex flex-col gap-0 border-t border-muted">
            {achievementsData.map((item, index) => (
              <div key={index} className="py-6 flex gap-6 items-start border-b border-muted group">
                <span className="font-mono text-xs text-gray-600 tracking-widest shrink-0 mt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-sans text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
