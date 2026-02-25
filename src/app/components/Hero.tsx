"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  
  // State to control the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track the scroll progress of the 250vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // ==========================================
  // SHARED ANIMATIONS
  // ==========================================
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.05]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0vh", "-10vh"]);
  const aboutOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  // ==========================================
  // DESKTOP ANIMATIONS
  // ==========================================
  const desktopImageX = useTransform(scrollYProgress, [0, 0.5], ["25vw", "-25vw"]);
  const desktopImageY = useTransform(scrollYProgress, [0, 0.5], ["0vh", "10vh"]);
  const desktopImageScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 0.9]);
  const desktopAboutY = useTransform(scrollYProgress, [0.3, 0.6], ["10vh", "0vh"]);

  // ==========================================
  // MOBILE ANIMATIONS
  // ==========================================
  const mobileAboutY = useTransform(scrollYProgress, [0.3, 0.6], ["10vh", "0vh"]);

  return (
    <>
      {/* =========================================================
          FULLSCREEN MOBILE MENU (Overlay)
      ========================================================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center border-b border-muted"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-4 text-gray-400 hover:text-foreground transition-colors"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Menu Links */}
            <div className="flex flex-col gap-8 text-center font-display text-4xl uppercase font-black tracking-tighter">
              <button onClick={() => scrollTo('home')} className="hover:text-gray-400 transition-colors">Home</button>
              <button onClick={() => scrollTo('projects')} className="hover:text-gray-400 transition-colors">Projects</button>
              <button onClick={() => scrollTo('experience')} className="hover:text-gray-400 transition-colors">Experience</button>
              <button onClick={() => scrollTo('writing')} className="hover:text-gray-400 transition-colors">Beyond</button>
              <button onClick={() => scrollTo('contact')} className="hover:text-gray-400 transition-colors">Contact</button>
              
              {/* Resume Link */}
              <a 
                href="/Aditya%20Sharma%20Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-white transition-colors text-2xl mt-4 border-t border-muted pt-8"
              >
                Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Section */}
      <section ref={containerRef} id="home" className="relative h-[250vh] text-foreground font-sans bg-transparent">
        
        {/* Sticky container locks to screen while scrolling */}
        <div className="sticky top-0 h-screen w-full flex justify-center items-center overflow-hidden px-6 md:px-12">

          {/* =========================================================
              DESKTOP LAYOUT (Hidden on mobile, visible on md+)
          ========================================================= */}
          <div className="hidden md:block w-full h-full relative">
            
            {/* Desktop Navbar */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 left-0 w-full flex justify-between items-center py-8 z-50"
            >
              {/* Left Side: ACTIVE Navigation Links */}
              <div className="flex gap-8 font-mono text-xs uppercase tracking-widest text-gray-400">
                <button onClick={() => scrollTo('home')} className="hover:text-white transition-colors duration-300">Home</button>
                <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors duration-300">Projects</button>
                <button onClick={() => scrollTo('experience')} className="hover:text-white transition-colors duration-300">Experience</button>
                <button onClick={() => scrollTo('writing')} className="hover:text-white transition-colors duration-300">Beyond</button>
                <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors duration-300">Contact</button>
              </div>

              {/* Right Side: Avatar & Name */}
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-gray-300">Addy</span>
                <img 
                  src="/assests/avatar.png" 
                  alt="Aditya Sharma" 
                  className="w-10 h-10 rounded-full object-cover border border-muted/50 shadow-md"
                />
              </div>
            </motion.div>

            {/* Background Text (Desktop) */}
            <motion.div
              style={{ opacity: textOpacity, y: textY }}
              className="absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 flex flex-col z-0 pointer-events-none"
            >
              {/* Changed font-display to font-sans (optional), and kept text-foreground (white) */}
              <div className="font-sans text-[14vw] font-black uppercase leading-[0.85] tracking-tighter text-left text-foreground">
                Hi, I&apos;M
              </div>
              {/* Added a beautiful linear gradient to your name */}
              <div className="font-sans text-[14vw] font-black uppercase leading-[0.85] tracking-tighter text-left pl-[10%] bg-linear-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                ADDY.
              </div>
            </motion.div>

            {/* Avatar Image */}
            <motion.img
              src="/assests/avatar.png" 
              alt="Aditya Sharma"
              style={{ x: desktopImageX, y: desktopImageY, scale: desktopImageScale }}
              className="absolute inset-0 m-auto z-20 w-72 h-72 "
            />

            {/* About Me Bio */}
            <motion.div
              style={{ opacity: aboutOpacity, y: desktopAboutY }}
              className="absolute right-[15%] top-[40%] w-[40vw] max-w-2xl z-10 flex flex-col gap-6 backdrop-blur-sm p-8 border-l-4 border-foreground rounded-r-lg bg-background/50"
            >
              <h2 className="text-5xl font-display font-black uppercase tracking-tight">About Me</h2>
              <p className="text-gray-400 text-xl leading-relaxed font-sans">
                I’m <strong className="text-gray-200">Aditya Sharma</strong>, an AI-focused developer and Computer Science Engineer building intelligent systems that transform raw data into actionable intelligence.
                <br /><br />
                From AI chat systems like KIRO to automation engines like Krazy Notesy and data intelligence platforms like SheetSnap, I focus on scalable and deployable digital products.
              </p>
              
              {/* Resume Button for Desktop */}
              <a 
                href="/Aditya%20Sharma%20Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 w-fit px-6 py-3 border border-gray-500 text-gray-300 font-mono text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors flex items-center gap-3"
              >
                View Resume
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </a>

            </motion.div>
          </div>


          {/* =========================================================
              MOBILE LAYOUT (Visible on mobile, hidden on md+)
          ========================================================= */}
          <div className="block md:hidden w-full h-full relative">
            
            {/* Mobile Navbar */}
            <div className="absolute top-0 left-0 w-full flex justify-between items-center py-6 z-50">
              <div className="flex items-center gap-3">
                <img 
                  src="/assests/avatar.png" 
                  alt="Aditya Sharma" 
                  className="w-10 h-10 rounded-full object-cover border border-muted/50 shadow-lg"
                />
                <span className="font-mono text-xs uppercase tracking-widest text-gray-300">Addy</span>
              </div>
              
              {/* Hamburger Menu Button */}
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="flex flex-col gap-1.5 p-2 hover:opacity-70 transition-opacity"
                aria-label="Open menu"
              >
                <div className="w-6 h-px bg-gray-300"></div>
                <div className="w-6 h-px bg-gray-300"></div>
              </button>
            </div>

            {/* Background Text */}
            <motion.div
              style={{ opacity: textOpacity, y: textY }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col z-0 pointer-events-none w-full text-center"
            >
              <div className="font-display text-[22vw] font-black uppercase leading-[0.85] tracking-tighter text-foreground">
                HI, I&apos;M
              </div>
              <div className="font-display text-[22vw] font-black uppercase leading-[0.85] tracking-tighter text-gray-300">
                ADDY.
              </div>
            </motion.div>

            {/* About Me Bio */}
            <motion.div
              style={{ opacity: aboutOpacity, y: mobileAboutY }}
              className="absolute left-1/2 -translate-x-1/2 top-[35%] w-[85vw] z-10 flex flex-col gap-5 backdrop-blur-md p-6 border-l-4 border-foreground rounded-r-lg bg-background/80"
            >
              <h2 className="text-3xl font-display font-black uppercase tracking-tight">About Me</h2>
              <p className="text-gray-400 text-sm leading-relaxed font-sans">
                I’m <strong className="text-gray-200">Aditya Sharma</strong>, an AI-focused developer and Computer Science Engineer building intelligent systems that transform raw data into actionable intelligence.
                <br /><br />
                From AI chat systems to automation engines and data platforms, I focus on scalable digital products.
              </p>

              {/* Resume Button for Mobile */}
              <a 
                href="/Aditya%20Sharma%20Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 w-full justify-center px-4 py-3 border border-gray-500 text-gray-300 font-mono text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors flex items-center gap-3"
              >
                View Resume
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </a>

            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}