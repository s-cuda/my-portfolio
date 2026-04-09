import AnimatedSection from "@/components/AnimatedSection";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "R", "SQL", "C++", "JavaScript"],
  },
  {
    category: "ML / AI Frameworks",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "BERT", "GPT-4", "Sentence Transformers", "OpenCV", "NLTK"],
  },
  {
    category: "AI Techniques",
    skills: ["RAG", "Deep Learning", "NLP", "A/B Testing", "Causal Inference", "Time Series Forecasting", "Feature Engineering", "Statistical Modeling"],
  },
  {
    category: "Tools & Platforms",
    skills: ["AWS", "Azure", "Docker", "Git", "Airflow", "FastAPI", "Flask", "Streamlit", "Jupyter", "Vector Databases", "Databricks"],
  },
  {
    category: "Data & Analytics",
    skills: ["Pandas", "NumPy", "Tableau", "Superset", "QlikSense", "Cohort Analysis", "Funnel Optimization", "EDA", "Advanced Excel"],
  },
  {
    category: "Marketing & CRM",
    skills: ["Clevertap", "MoEngage", "Mixpanel", "Product Analytics", "User Segmentation", "Go-to-Market Strategy"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 0", borderTop: "1px solid #1a1a1a" }}>
      <AnimatedSection>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
            Skills
          </h2>
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#555" }}>
            {skillGroups.reduce((acc, g) => acc + g.skills.length, 0)} Technologies
          </span>
        </div>
      </AnimatedSection>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {skillGroups.map((group, index) => (
          <AnimatedSection key={group.category} delay={index * 0.08}>
            <div style={{ display: "grid", gridTemplateColumns: "12rem 1fr", gap: "3rem", borderTop: "1px solid #1a1a1a", padding: "1.75rem 0", alignItems: "start" }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#737373", paddingTop: "0.3rem" }}>
                {group.category}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.skills.map((skill) => (
                  <span key={skill} style={{ fontSize: "0.82rem", color: "#c4c4c4", border: "1px solid #222", padding: "0.35rem 0.85rem", fontWeight: 400, letterSpacing: "0.01em", borderRadius: "2px" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
        <div style={{ borderTop: "1px solid #1a1a1a" }} />
      </div>
    </section>
  );
}