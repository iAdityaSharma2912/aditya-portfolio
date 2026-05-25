"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end end"] });
  const bigTextY = useTransform(scrollYProgress, [0.5, 1], ["6vh", "0vh"]);
  const bigTextOpacity = useTransform(scrollYProgress, [0.5, 0.85], [0, 1]);

  const links = [
    { label: "Email",     href: "mailto:imaddy2912@gmail.com",           sub: "imaddy2912@gmail.com" },
    { label: "GitHub",    href: "https://github.com/iAdityaSharma2912",  sub: "iAdityaSharma2912" },
    { label: "LinkedIn",  href: "https://www.linkedin.com/in/iaddy29/",  sub: "iaddy29" },
    { label: "Twitter/X", href: "https://www.x.com/iaddy29",             sub: "@iaddy29" },
    { label: "Instagram", href: "https://www.instagram.com/iaddy29",     sub: "@iaddy29" },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full text-foreground pt-24 pb-10 px-6 md:px-12 flex flex-col justify-between min-h-screen"
      style={{ borderTop: "1px solid #1E1C1A" }}
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 z-10 relative">

        {/* Left */}
        <div className="flex flex-col justify-between gap-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="font-display text-5xl md:text-7xl uppercase tracking-wider mb-4"
              style={{ color: "#F0EDE6" }}
            >
              Initiate<br />Connection
            </motion.h2>
            <p className="font-sans text-base leading-relaxed max-w-sm" style={{ color: "#7A7570" }}>
              Building the next generation of AI products, need a scalable engineering solution, or just want to talk code and coffee — drop a line.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest mb-6 pb-3" style={{ color: "#5A5550", borderBottom: "1px solid #1E1C1A" }}>
              Digital Coordinates
            </h3>
            <div className="flex flex-col gap-0" style={{ borderTop: "1px solid #1E1C1A" }}>
              {links.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex justify-between items-center py-4 group transition-all duration-300"
                  style={{ borderBottom: "1px solid #1E1C1A" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.paddingLeft = "8px"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.paddingLeft = "0px"; }}
                >
                  <span className="font-display text-2xl uppercase tracking-wider transition-colors group-hover:text-gold-shimmer" style={{ color: "#F0EDE6" }}>
                    {link.label}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest transition-colors" style={{ color: "#3A3530" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#C9A84C"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#3A3530"; }}
                  >
                    {link.sub} ↗
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="flex flex-col">
          <form
            action="https://formspree.io/f/xkovkaqo"
            method="POST"
            className="flex flex-col gap-8 w-full"
          >
            {[
              { label: "Name / Alias",              name: "name",    type: "text",  placeholder: "John Doe" },
              { label: "Return Address (Email)",    name: "email",   type: "email", placeholder: "john@example.com" },
            ].map((field) => (
              <div key={field.name} className="flex flex-col gap-2 group">
                <label htmlFor={field.name} className="font-mono text-xs uppercase tracking-widest transition-colors" style={{ color: "#3A3530" }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  required
                  placeholder={field.placeholder}
                  className="w-full bg-transparent py-2 font-sans text-lg focus:outline-none transition-colors"
                  style={{ color: "#F0EDE6", borderBottom: "1px solid #1E1C1A", caretColor: "#C9A84C" }}
                  onFocus={e => { e.currentTarget.style.borderBottomColor = "#C9A84C66"; }}
                  onBlur={e => { e.currentTarget.style.borderBottomColor = "#1E1C1A"; }}
                />
              </div>
            ))}

            <div className="flex flex-col gap-2 group">
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest" style={{ color: "#3A3530" }}>
                Transmission Details
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                placeholder="Tell me about your project..."
                className="w-full bg-transparent py-2 font-sans text-lg focus:outline-none resize-none transition-colors"
                style={{ color: "#F0EDE6", borderBottom: "1px solid #1E1C1A", caretColor: "#C9A84C" }}
                onFocus={e => { e.currentTarget.style.borderBottomColor = "#C9A84C66"; }}
                onBlur={e => { e.currentTarget.style.borderBottomColor = "#1E1C1A"; }}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="mt-2 w-fit flex items-center gap-4 px-8 py-4 font-mono text-xs uppercase tracking-widest transition-all duration-300"
              style={{ border: "1px solid #C9A84C44", color: "#C9A84C" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#C9A84C11"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              Send Transmission
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.button>
          </form>
        </div>
      </div>

      {/* Big footer text */}
      <motion.div
        style={{ y: bigTextY, opacity: bigTextOpacity }}
        className="w-full flex justify-center items-end mt-auto overflow-hidden pointer-events-none select-none"
      >
        <h1
          className="font-display uppercase tracking-wider text-center whitespace-nowrap"
          style={{
            fontSize: "clamp(3rem, 15vw, 14rem)",
            lineHeight: 0.8,
            WebkitTextStroke: "1px rgba(201,168,76,0.2)",
            color: "transparent",
          }}
        >
          LET&apos;S BUILD.
        </h1>
      </motion.div>

      <div className="absolute bottom-4 left-6 md:left-12 font-mono text-xs uppercase tracking-widest" style={{ color: "#2A2723" }}>
        © {new Date().getFullYear()} Aditya Sharma. All rights reserved.
      </div>
    </section>
  );
}
