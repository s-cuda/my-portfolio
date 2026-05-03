import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";

const projects = [
  {
    title: "FraudShield: Real-Time Fraud Detection",
    description: "Production ML pipeline that scores financial transactions for fraud in real time using behavioral feature engineering. Maintains a rolling transaction history per card via a Redis feature store — scoring each charge in context of that card's history, not in isolation. Deployed as a containerized FastAPI service with a live monitoring dashboard, SHAP explainability on every prediction, and Evidently AI drift monitoring.",
    tech: ["Python", "LightGBM", "SHAP", "FastAPI", "Redis", "Docker", "MLflow", "Evidently AI", "Chart.js"],
    github: "https://github.com/s-cuda/fraud-detection",
    demo: "https://www.loom.com/share/d8c9246296864c50bde071662e9886c1",
  },
  {
    title: "GitHub Repository Assistant",
    description: "AI-powered GitHub repository analysis system using LangChain agents with ReAct framework. Answers natural language queries about repository history, pull requests, and codebase evolution. Indexes 100+ commits in under 2 minutes using semantic search.",
    tech: ["LangChain", "OpenAI", "ChromaDB", "RAG", "Python"],
    github: "https://github.com/s-cuda",
  },
  {
    title: "Smart Gym Cloud Platform",
    description: "Full-stack application on Azure with FastAPI backend, React frontend, and serverless billing automation managing 300 members and 500+ registrations. AI recommendation engine with OpenAI function calling generating personalized workout plans.",
    tech: ["Azure", "FastAPI", "React", "OpenAI", "Python", "SQL"],
    github: "https://github.com/s-cuda/smart-gym-membership-cloud",
  },
  {
    title: "OS-MOSIS: OmniPython",
    description: "Open-source contribution merged upstream — added Python bindings to a GPU solver for pressure-from-PIV computation, expanding access from MATLAB-only to the Python scientific community. Validated via Taylor vortex simulations with less than 0.05% error. Packaged as pip-installable.",
    tech: ["CUDA", "C++", "PyBind11", "HPC", "Scientific Computing", "Open Source"],
    github: "https://github.com/3dfernando/pressure-osmosis/pull/1",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 0" }}>
      <AnimatedSection>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
            Projects
          </h2>
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#555" }}>
            {projects.length} Projects
          </span>
        </div>
      </AnimatedSection>

      <div>
        {projects.map((project, index) => (
          <AnimatedSection key={project.title} delay={index * 0.08}>
            <ProjectCard {...project} index={index} />
          </AnimatedSection>
        ))}
        <div style={{ borderTop: "1px solid #1a1a1a" }} />
      </div>
    </section>
  );
}