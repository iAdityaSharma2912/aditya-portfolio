"use client";

import { useEffect, useState } from "react";

export default function Background() {
  // We store the meteors in state so they only generate on the client side
  const [meteors, setMeteors] = useState<
    Array<{ id: number; left: string; top: string; duration: string; delay: string }>
  >([]);

  useEffect(() => {
    // Generate 20 random shooting stars when the page loads
    const newMeteors = new Array(20).fill(true).map((_, idx) => ({
      id: idx,
      // Spawn them randomly across the top and right side of the screen
      left: Math.floor(Math.random() * 120) + "vw",
      top: Math.floor(Math.random() * 100) - 20 + "vh",
      // Randomize their speeds (between 3s and 8s)
      duration: Math.floor(Math.random() * (8 - 3) + 3) + "s",
      // Randomize when they start falling
      delay: (Math.random() * 3).toFixed(2) + "s",
    }));

    setMeteors(newMeteors);
  }, []);
return (
    <div className="fixed inset-0 z-0 bg-background overflow-hidden pointer-events-none">
      
      {/* 1. The Static Base Grid (Vibrant Electric Blue) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.15)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] blur-[0.5px]"></div>

      {/* 2. The Shooting Stars (Meteors) */}
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          // FIXED: Changed h-[2px] w-[2px] to h-0.5 w-0.5
          className="absolute h-0.5 w-0.5 rounded-full bg-slate-300 shadow-[0_0_0_1px_#ffffff10] animate-meteor"
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDuration: meteor.duration,
            animationDelay: meteor.delay,
          }}
        >
          {/* This div creates the glowing tail that trails behind the star */}
          {/* FIXED: h-[1px] w-[80px] to h-px w-20, and bg-gradient-to-r to bg-linear-to-r */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-20 -translate-y-1/2 bg-linear-to-r from-slate-400 to-transparent" />
        </span>
      ))}
      
    </div>
  );
}