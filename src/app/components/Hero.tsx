"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Art", id: "art" },
  { label: "Beyond", id: "writing" },
  { label: "Contact", id: "contact" },
];

export default function Hero() {
  const containerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" }));
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    if (id === "home") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textOpacity   = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const textY         = useTransform(scrollYProgress, [0, 0.45], ["0vh", "-12vh"]);
  const textScale     = useTransform(scrollYProgress, [0, 0.45], [1, 0.92]);
  const aboutOpacity  = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const aboutY        = useTransform(scrollYProgress, [0.3, 0.6], ["14vh", "0vh"]);
  const imgX          = useTransform(scrollYProgress, [0, 0.5], ["22vw", "-22vw"]);
  const imgY          = useTransform(scrollYProgress, [0, 0.5], ["0vh", "8vh"]);
  const imgScale      = useTransform(scrollYProgress, [0, 0.5], [1.15, 0.88]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const lineVariants = {
    hidden:  { y: "110%", opacity: 0 },
    visible: { y: "0%",   opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      {/* ── FULLSCREEN MOBILE MENU ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
            style={{ background: "#080808" }}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-4 text-gray-500 hover:text-foreground transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col gap-6 text-center">
              {[{ label: "Home", id: "home" }, ...NAV_LINKS].map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
                  onClick={() => scrollTo(link.id)}
                  className="font-display text-5xl uppercase tracking-wider text-foreground hover:text-gold-dim transition-colors"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              href="/Aditya%20Sharma%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 font-mono text-xs uppercase tracking-widest border px-8 py-3 transition-colors"
              style={{ borderColor: "#C9A84C44", color: "#C9A84C" }}
            >
              Resume ↗
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MAIN HERO ── */}
      <section ref={containerRef} id="home" className="relative h-[260vh] text-foreground font-sans">
        <div className="sticky top-0 h-screen w-full flex justify-center items-center overflow-hidden px-6 md:px-12">

          {/* ── DESKTOP ── */}
          <div className="hidden md:block w-full h-full relative">

            {/* Navbar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-0 left-0 w-full flex justify-between items-center py-8 z-50"
            >
              <div className="flex gap-8 font-mono text-xs uppercase tracking-widest" style={{ color: "#5A5550" }}>
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="underline-draw hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-6">
                <span className="font-mono text-xs tracking-widest" style={{ color: "#C9A84C66" }}>
                  IST {time}
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#5A5550" }}>Addy</span>
                  <img src="/assests/avatar.png" alt="Aditya Sharma" className="w-9 h-9 rounded-full object-cover" style={{ border: "1px solid #C9A84C33" }} />
                </div>
              </div>
            </motion.div>

            {/* STATUS badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-10 left-0 flex items-center gap-3 font-mono text-xs uppercase tracking-widest z-20"
              style={{ color: "#5A5550" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for work · Delhi, India
            </motion.div>

            {/* Big name */}
            <motion.div
              style={{ opacity: textOpacity, y: textY, scale: textScale }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="absolute top-1/2 left-[33%] -translate-x-1/2 -translate-y-1/2 flex flex-col z-0 pointer-events-none select-none"
            >
              <div className="overflow-hidden">
                <motion.div
                  variants={lineVariants}
                  className="font-display text-[13.5vw] leading-[0.88] tracking-wider uppercase text-foreground"
                >
                  Hi,
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  variants={lineVariants}
                  className="font-display text-[13.5vw] leading-[0.88] tracking-wider uppercase pl-[8%]"
                  style={{
                    WebkitTextStroke: "1px rgba(201,168,76,0.4)",
                    color: "transparent",
                  }}
                >
                  I&apos;M
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  variants={lineVariants}
                  className="font-display text-[13.5vw] leading-[0.88] tracking-wider uppercase text-gold-shimmer"
                >
                  ADDY.
                </motion.div>
              </div>
            </motion.div>

            {/* Avatar */}
            <motion.img
              src="/assests/avatar.png"
              alt="Aditya Sharma"
              style={{ x: imgX, y: imgY, scale: imgScale }}
              className="absolute inset-0 m-auto z-20 w-68 h-68 rounded-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            />

            {/* About panel */}
            <motion.div
              style={{ opacity: aboutOpacity, y: aboutY }}
              className="absolute right-[10%] top-[38%] w-[38vw] max-w-xl z-30 flex flex-col gap-5 p-8"
              style2={{}}
            >
              {/* Decorative corner */}
              <svg className="absolute -top-px -left-px w-8 h-8" viewBox="0 0 32 32" fill="none">
                <path d="M1 31 L1 1 L31 1" stroke="#C9A84C" strokeWidth="1" opacity="0.5"/>
              </svg>
              <svg className="absolute -bottom-px -right-px w-8 h-8" viewBox="0 0 32 32" fill="none">
                <path d="M1 1 L31 1 L31 31" stroke="#C9A84C" strokeWidth="1" opacity="0.5" transform="rotate(180,16,16)"/>
              </svg>

              <div style={{ borderLeft: "2px solid #C9A84C66", paddingLeft: "1rem" }}>
                <h2 className="font-display text-4xl uppercase tracking-wider mb-1" style={{ color: "#C9A84C" }}>
                  About Me
                </h2>
                <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "#5A5550" }}>
                  B.Tech CSE · 2026 · Delhi
                </p>
              </div>

              <p className="font-sans text-base leading-relaxed" style={{ color: "#9A9590" }}>
                I&apos;m <strong style={{ color: "#F0EDE6" }}>Aditya Sharma</strong> — a full-stack developer and AI engineer building production-grade tools people actually use.
                <br /><br />
                From FlashSnap (live AI study platform) to SheetSnap and DevVault, I ship end-to-end — backend pipelines, databases, deployed frontends. When I&apos;m not writing code, I&apos;m filling sketchbooks.
              </p>

              <a
                href="/Aditya%20Sharma%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 w-fit px-6 py-3 font-mono text-xs uppercase tracking-widest flex items-center gap-3 transition-all duration-300 hover:gap-5"
                style={{ border: "1px solid #C9A84C44", color: "#C9A84C" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#C9A84C11"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                View Resume
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </a>
            </motion.div>
          </div>

          {/* ── MOBILE ── */}
          <div className="block md:hidden w-full h-full relative">
            <div className="absolute top-0 left-0 w-full flex justify-between items-center py-6 z-50">
              <div className="flex items-center gap-3">
                <img src="/assests/avatar.png" alt="Aditya Sharma" className="w-9 h-9 rounded-full object-cover" style={{ border: "1px solid #C9A84C33" }} />
                <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#5A5550" }}>Addy</span>
              </div>
              <button onClick={() => setIsMenuOpen(true)} className="flex flex-col gap-1.5 p-2 hover:opacity-70">
                <div className="w-5 h-px" style={{ background: "#C9A84C88" }} />
                <div className="w-5 h-px" style={{ background: "#C9A84C88" }} />
              </button>
            </div>

            <motion.div
              style={{ opacity: textOpacity, y: textY }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col z-0 pointer-events-none w-full text-center"
            >
              <div className="font-display text-[22vw] leading-[0.88] tracking-wider uppercase text-foreground">HI,</div>
              <div
                className="font-display text-[22vw] leading-[0.88] tracking-wider uppercase"
                style={{ WebkitTextStroke: "1px rgba(201,168,76,0.4)", color: "transparent" }}
              >
                I&apos;M
              </div>
              <div className="font-display text-[22vw] leading-[0.88] tracking-wider uppercase text-gold-shimmer">ADDY.</div>
            </motion.div>

            <motion.div
              style={{ opacity: aboutOpacity, y: aboutY }}
              className="absolute left-1/2 -translate-x-1/2 top-[32%] w-[88vw] z-10 flex flex-col gap-4 p-6"
              style2={{}}
            >
              <svg className="absolute -top-px -left-px w-6 h-6" viewBox="0 0 32 32" fill="none">
                <path d="M1 31 L1 1 L31 1" stroke="#C9A84C" strokeWidth="1" opacity="0.5"/>
              </svg>
              <div style={{ borderLeft: "2px solid #C9A84C66", paddingLeft: "0.75rem" }}>
                <h2 className="font-display text-3xl uppercase tracking-wider" style={{ color: "#C9A84C" }}>About Me</h2>
              </div>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "#9A9590", background: "#08080899", backdropFilter: "blur(8px)" }}>
                Full-stack developer & AI engineer from Delhi. I build production tools and fill sketchbooks in equal measure.
              </p>
              <a
                href="/Aditya%20Sharma%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 font-mono text-xs uppercase tracking-widest"
                style={{ border: "1px solid #C9A84C44", color: "#C9A84C" }}
              >
                View Resume ↗
              </a>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}
