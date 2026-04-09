import AnimatedSection from "@/components/AnimatedSection";

const education = [
  {
    degree: "M.S. Applied Data Science",
    school: "Syracuse University",
    location: "Syracuse, NY",
    period: "Aug 2024 — May 2026",
    gpa: "3.92 / 4.00",
    coursework: [
      "Quantitative Reasoning for Data Science",
      "Introduction to Data Science",
      "Financial Analytics",
      "Applied Machine Learning",
      "Business Analytics",
      "Cloud Management",
      "Human Centered AI",
      "Deep Learning in Practice",
      "Natural Language Processing",
      "Applied Data Science Portfolio",
    ],
  },
  {
    degree: "B.E. (Hons.) Mechanical Engineering",
    school: "Birla Institute of Technology and Sciences Pilani",
    location: "Goa, India",
    period: "Aug 2018 — Jul 2022",
    gpa: "3.12 / 4.00",
    coursework: [
      "Deep Learning",
      "Derivatives & Risk Management",
      "Numerical Techniques in Fluid Flow & Heat Transfer",
      "Probability & Statistics",
      "Engineering Optimization",
      "Computer Programming",
      "Business Analysis & Valuation",
      "Principles of Economics",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" style={{ padding: "6rem 0", borderTop: "1px solid #1a1a1a" }}>
      <AnimatedSection>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
            Education
          </h2>
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#555" }}>
            {education.length} Degrees
          </span>
        </div>
      </AnimatedSection>

      <div>
        {education.map((edu, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <div className="two-col-grid" style={{ borderTop: "1px solid #1a1a1a", padding: "2.5rem 0" }}>
              <div>
                <p style={{ fontSize: "0.82rem", color: "#2dd4bf", fontWeight: 500, marginBottom: "0.4rem", lineHeight: 1.5 }}>{edu.period}</p>
                <p style={{ fontSize: "0.8rem", color: "#737373" }}>{edu.location}</p>
                <p style={{ fontSize: "0.8rem", color: "#555", marginTop: "0.4rem" }}>GPA {edu.gpa}</p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f0f0f0", marginBottom: "0.25rem", letterSpacing: "-0.01em" }}>
                  {edu.degree}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "#737373", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1.25rem", fontWeight: 500 }}>
                  {edu.school}
                </p>
                <div>
                  <p style={{ fontSize: "0.7rem", color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem", fontWeight: 600 }}>
                    Coursework
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {edu.coursework.map((course) => (
                      <span key={course} style={{ fontSize: "0.78rem", color: "#a3a3a3", border: "1px solid #222", padding: "0.25rem 0.7rem", borderRadius: "2px" }}>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
        <div style={{ borderTop: "1px solid #1a1a1a" }} />
      </div>
    </section>
  );
}