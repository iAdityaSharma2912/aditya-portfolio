import Background from "./components/Background";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Art from "./components/Art";
import Beyond from "./components/Beyond";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground relative">
      <Background />
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Art />
        <Beyond />
        <Contact />
      </div>
    </main>
  );
}
