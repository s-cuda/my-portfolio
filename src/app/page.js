import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 2rem" }}>
      <section id="about">
        <Hero />
      </section>
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Skills />
      <Contact />
    </main>
  );
}