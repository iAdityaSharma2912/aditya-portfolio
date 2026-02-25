import Background from "./components/Background";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Beyond from "./components/Beyond";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground relative">
      {/* Global Background Layer (Now sits at z-0) */}
      <Background />

      {/* FIXED: Added a wrapper with relative z-10 so all your content floats ON TOP of the background */}
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Beyond />
        <Contact />
      </div>
    </main>
  );
}