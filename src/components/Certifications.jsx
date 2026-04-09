import AnimatedSection from "@/components/AnimatedSection";

const certifications = [
  {
    title: "AI & ML Advanced Training",
    issuer: "Defence Institute of Advanced Technology (DIAT)",
    description: "Intensive program covering Probability Theory, Pattern Recognition, Big Data Analytics, Computer Vision, NLP, Augmented Reality, and Deep Learning.",
    tags: ["AI", "ML", "Computer Vision", "NLP", "Deep Learning"],
  },
  {
    title: "Machine Learning A-Z: Hands-On Python",
    issuer: "Udemy",
    description: "Applied ML algorithms including K-Means, SVM, and Naive Bayes across real datasets. Model evaluation and optimization techniques.",
    tags: ["Python", "scikit-learn", "SVM", "K-Means"],
  },
  {
    title: "Python Data Structures",
    issuer: "Coursera",
    description: "Fundamentals and advanced topics of data structures and their implementation in Python.",
    tags: ["Python", "Data Structures", "Algorithms"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "6rem 0", borderTop: "1px solid #1a1a1a" }}>
      <AnimatedSection>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
            Certifications
          </h2>
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#555" }}>
            {certifications.length} Courses
          </span>
        </div>
      </AnimatedSection>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {certifications.map((cert, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <div style={{ border: "1px solid #1a1a1a", borderRadius: "4px", padding: "1.75rem", backgroundColor: "#0d0d0d", display: "flex", flexDirection: "column", gap: "0.85rem", height: "100%" }}>
              <div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#f0f0f0", marginBottom: "0.3rem", lineHeight: 1.4 }}>
                  {cert.title}
                </h3>
                <p style={{ fontSize: "0.72rem", color: "#2dd4bf", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {cert.issuer}
                </p>
              </div>
              <p style={{ fontSize: "0.85rem", color: "#a3a3a3", lineHeight: 1.75, fontWeight: 400, flex: 1 }}>
                {cert.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {cert.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: "0.68rem", color: "#555", border: "1px solid #1f1f1f", padding: "0.2rem 0.6rem", borderRadius: "2px", letterSpacing: "0.04em" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}