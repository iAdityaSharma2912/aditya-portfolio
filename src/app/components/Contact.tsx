"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full text-foreground pt-24 pb-12 px-6 md:px-12 border-t border-muted overflow-hidden flex flex-col justify-between min-h-screen">
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 z-10">
        
        {/* =========================================
            LEFT COLUMN: THE PITCH & SOCIALS
        ========================================= */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-6">
              Initiate <br /> Connection
            </h2>
            <p className="font-sans text-gray-400 text-lg md:text-xl max-w-md mb-12">
              Whether you are building the next generation of AI products, need a scalable engineering solution, or just want to talk code and coffee—drop a line.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-mono text-sm text-gray-500 uppercase tracking-widest border-b border-muted pb-4">
              Digital Coordinates
            </h3>
            <div className="grid grid-cols-2 gap-4 font-mono text-sm md:text-base uppercase tracking-wider">
              <a href="mailto:imaddy2912@gmail.com" className="hover:text-white text-gray-400 transition-colors">Email</a>
              <a href="https://github.com/iAdityaSharma2912" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/iaddy29/" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400 transition-colors">LinkedIn</a>
              <a href="https://www.x.com/iaddy29" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400 transition-colors">X (Twitter)</a>
              <a href="https://www.instagram.com/iaddy29" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400 transition-colors">Instagram</a>
            </div>
          </div>
        </div>

        {/* =========================================
            RIGHT COLUMN: THE BRUTALIST FORM
        ========================================= */}
        <div className="flex flex-col">
          <form 
            // Note: We will wire this up to a serverless email provider next
            action="https://formspree.io/f/xkovkaqo" 
            method="POST" 
            className="flex flex-col gap-8 w-full"
          >
            <div className="flex flex-col group">
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-foreground transition-colors">Name / Alias</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                required
                className="w-full bg-transparent border-b border-muted py-2 font-sans text-xl focus:outline-none focus:border-foreground transition-colors placeholder:text-gray-700" 
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col group">
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-foreground transition-colors">Return Address (Email)</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required
                className="w-full bg-transparent border-b border-muted py-2 font-sans text-xl focus:outline-none focus:border-foreground transition-colors placeholder:text-gray-700" 
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col group">
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-foreground transition-colors">Transmission Details</label>
              <textarea 
                name="message" 
                id="message" 
                rows={4}
                required
                className="w-full bg-transparent border-b border-muted py-2 font-sans text-xl focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-gray-700" 
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="mt-4 w-full md:w-auto self-start border border-muted px-10 py-4 font-mono uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              Send Transmission
            </button>
          </form>
        </div>
      </div>

      {/* =========================================
          BOTTOM: MASSIVE FOOTER TEXT
      ========================================= */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="w-full flex justify-center items-end mt-auto overflow-hidden pointer-events-none"
      >
        <h1 className="font-display font-black uppercase tracking-tighter text-[16vw] leading-[0.75] text-foreground text-center whitespace-nowrap">
          LET&apos;S BUILD.
        </h1>
      </motion.div>
      
      {/* Tiny Copyright line */}
      <div className="absolute bottom-4 left-6 md:left-12 font-mono text-[10px] text-gray-600 uppercase tracking-widest">
        © {new Date().getFullYear()} Aditya Sharma. All rights reserved.
      </div>
      
    </section>
  );
}