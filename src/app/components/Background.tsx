"use client";

import { useEffect, useState, useRef } from "react";

export default function Background() {
  const [meteors, setMeteors] = useState<
    Array<{ id: number; left: string; top: string; duration: string; delay: string }>
  >([]);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newMeteors = new Array(14).fill(true).map((_, idx) => ({
      id: idx,
      left: Math.floor(Math.random() * 130) + "vw",
      top: Math.floor(Math.random() * 100) - 20 + "vh",
      duration: (Math.random() * 6 + 4).toFixed(1) + "s",
      delay: (Math.random() * 8).toFixed(2) + "s",
    }));
    setMeteors(newMeteors);

    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" style={{ background: "#080808" }}>

      {/* Cursor glow */}
      <div ref={glowRef} className="cursor-glow" />

      {/* Radial vignette — center is slightly lighter */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 10%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Fine dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 100% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 100% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Subtle horizontal scanlines */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(240,237,230,0.8) 2px, rgba(240,237,230,0.8) 3px)",
          backgroundSize: "100% 3px",
        }}
      />

      {/* Corner decorative marks — top left */}
      <svg className="absolute top-0 left-0 w-48 h-48 opacity-10" viewBox="0 0 200 200" fill="none">
        <line x1="20" y1="0" x2="20" y2="60" stroke="#C9A84C" strokeWidth="0.5"/>
        <line x1="0" y1="20" x2="60" y2="20" stroke="#C9A84C" strokeWidth="0.5"/>
        <circle cx="20" cy="20" r="2" fill="#C9A84C"/>
        <line x1="80" y1="0" x2="80" y2="30" stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="2 4"/>
        <line x1="0" y1="80" x2="30" y2="80" stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="2 4"/>
      </svg>

      {/* Corner decorative marks — bottom right */}
      <svg className="absolute bottom-0 right-0 w-48 h-48 opacity-10" viewBox="0 0 200 200" fill="none">
        <line x1="180" y1="200" x2="180" y2="140" stroke="#C9A84C" strokeWidth="0.5"/>
        <line x1="200" y1="180" x2="140" y2="180" stroke="#C9A84C" strokeWidth="0.5"/>
        <circle cx="180" cy="180" r="2" fill="#C9A84C"/>
        <line x1="120" y1="200" x2="120" y2="170" stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="2 4"/>
        <line x1="200" y1="120" x2="170" y2="120" stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="2 4"/>
      </svg>

      {/* Shooting stars */}
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="absolute h-px w-px rounded-full animate-meteor"
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDuration: meteor.duration,
            animationDelay: meteor.delay,
            background: "#C9A84C",
            boxShadow: "0 0 3px 1px rgba(201,168,76,0.3)",
          }}
        >
          <div
            className="pointer-events-none absolute top-1/2 -z-10 h-px w-24 -translate-y-1/2"
            style={{ background: "linear-gradient(to right, rgba(201,168,76,0.8), transparent)" }}
          />
        </span>
      ))}
    </div>
  );
}
