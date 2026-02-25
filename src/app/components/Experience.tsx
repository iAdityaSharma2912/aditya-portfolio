"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA CONSTANTS ---
const experienceData = [
  {
    id: "01",
    title: "HCL TECH — TRAINEE",
    date: "Dec 2024 — Mar 2025",
    content: (
      <ul className="list-disc pl-5 flex flex-col gap-2 font-sans text-gray-400 leading-relaxed text-lg">
        <li>Completed an industry-focused program covering Java, Spring Boot, MySQL, HTML/CSS, and JavaScript.</li>
        <li>Integrated AI using machine learning APIs for hands-on experience.</li>
        <li>Developed scalable full-stack web applications using MVC architecture and Agile practices.</li>
        <li>Integrated intelligent features like recommendation systems and smart forms.</li>
      </ul>
    ),
  },
  {
    id: "02",
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
    category: "Languages & Databases",
    tech: "Python, C/C++, JavaScript, Java, SQL, MySQL",
  },
  {
    category: "Frameworks & Libraries",
    tech: "HTML, CSS, Django, React, Next.js",
  },
  {
    category: "Technologies",
    tech: "Git/GitHub, AWS, Linux, Windows, AI, Machine Learning",
  },
  {
    category: "Concepts",
    tech: "Object-Oriented Programming (OOP), Problem-Solving, Debugging",
  },
];

const educationData = [
  {
    institution: "KCC Institute of Technology & Management",
    degree: "Bachelor of Technology in Computer Science Engineering",
    location: "Greater Noida",
    date: "2022 — 2026",
  },
  {
    institution: "Apeejay School",
    degree: "Higher Secondary Education (Science, Maths, CS)",
    location: "Saket",
    date: "2019 — 2021",
  },
  {
    institution: "The Cambridge International School",
    degree: "Secondary Education",
    location: "",
    date: "2018 — 2019",
  },
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
                    <span className="font-display text-2xl md:text-4xl uppercase tracking-tight font-bold">
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
                <p className="font-display text-2xl md:text-3xl leading-tight text-gray-200">
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

    </div>
  );
}