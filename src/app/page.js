import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
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
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Skills />
      <Contact />
    </main>
  );
}