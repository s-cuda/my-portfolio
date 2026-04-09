import AnimatedSection from "@/components/AnimatedSection";

const experiences = [
  {
    role: "ML & AI Integration Engineer",
    company: "Syracuse University",
    location: "Syracuse, NY",
    period: "Jan 2026 — Present",
    bullets: [
      "Developing Python MCP server integrating Claude AI with building simulation platform using function calling for automated parameter configuration from natural language queries.",
      "Training neural networks on 1000+ parametric simulation runs to create surrogate models reducing simulation time from hours to seconds via ML inference.",
      "Building GUI components via Python and Rhino/Grasshopper API for configuring energy, airflow, and IAQ simulations.",
    ],
  },
  {
    role: "Computational Data Scientist",
    company: "Syracuse University",
    location: "Syracuse, NY",
    period: "Aug 2025 — Dec 2025",
    bullets: [
      "Developed Python bindings for OS-MOSIS, an open-source GPU solver built in C++ and CUDA, enabling seamless integration with Python.",
      "Implemented Fortran-style memory layout for MATLAB compatibility and C++ template dispatch for flexible precision, validated with less than 0.05% error.",
      "Packaged as a pip-installable library, expanding solver access from MATLAB to the broader Python scientific community.",
    ],
  },
  {
    role: "Business Analyst",
    company: "Freo",
    location: "Bangalore, India",
    period: "Jun 2023 — Jul 2024",
    bullets: [
      "Devised targeted marketing strategies by identifying specific customer cohorts within diverse gold loan segments, leveraging Python, SQL, and Superset for customer data analysis and segmentation, resulting in a 40% increase in monthly revenue from gold loan revenue.",
      "Designed dynamic dashboards in Superset across sales and customer success operations for Fit Credit and Freopay insurance products, improving sales efficiency 15% through real-time insights and reducing CS manual work 50% (40 to 20 hrs./week) via intelligent ticket prioritization.",
      "Pre-processed data and applied NLP techniques with Python, pandas, NLTK, and scikit-learn to construct a sentiment analysis model, helping the Customer Success team identify sentiments in support tickets.",
      "Optimized 7-8 critical business KPI reports by migrating from a legacy database to Amazon Redshift, rewriting queries, and creating new tables to improve performance.",
      "Optimized query run time for these reports by 50%, cutting execution time from 50 minutes to 20 minutes, boosting Airflow workflow efficiency and eliminating report bottlenecks.",
    ],
  },
  {
    role: "Product Analyst",
    company: "Simpl",
    location: "Bangalore, India",
    period: "Jul 2022 — May 2023",
    bullets: [
      "Designed a Customer Acquisition Cost framework achieving a 30% reduction in CAC using SQL and Statistical Modeling.",
      "Created 12 QlikSense dashboards reducing manual reporting by 85% through automated Airflow pipelines.",
      "Conducted A/B testing on product launches increasing user activation by 5% and network activation by 9%.",
      "Built and maintained bi-weekly WBR reports, data reconciliation, and identified potential product opportunities.",
    ],
  },
  {
    role: "Partnership Executive",
    company: "Airmeet",
    location: "Bangalore, India",
    period: "Jul 2021 — Dec 2021",
    bullets: [
      "Conducted market research and strategy for Airmeet's entry into the MEA region as a competitive virtual events product.",
      "Managed and nurtured relationships with existing channel partners to build a sustainable revenue pipeline.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Griffyn Robotech",
    location: "India",
    period: "Aug 2020 — Sep 2020",
    bullets: [
      "Used OpenCV for image preprocessing and collaborated with the team to classify surfaces according to industry roughness grades for the Deepsight machine.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "6rem 0", borderTop: "1px solid #1a1a1a" }}>
      <AnimatedSection>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
            Experience
          </h2>
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#555" }}>
            {experiences.length} Roles
          </span>
        </div>
      </AnimatedSection>

      <div>
        {experiences.map((exp, index) => (
          <AnimatedSection key={index} delay={index * 0.06}>
            <div className="two-col-grid" style={{ borderTop: "1px solid #1a1a1a", padding: "2.5rem 0" }}>
              <div>
                <p style={{ fontSize: "0.82rem", color: "#2dd4bf", fontWeight: 500, marginBottom: "0.4rem", lineHeight: 1.5 }}>{exp.period}</p>
                <p style={{ fontSize: "0.8rem", color: "#737373", fontWeight: 400 }}>{exp.location}</p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#f0f0f0", marginBottom: "0.25rem", letterSpacing: "-0.01em" }}>
                  {exp.role}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "#737373", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1.25rem", fontWeight: 500 }}>
                  {exp.company}
                </p>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.85rem", fontSize: "0.9rem", color: "#a3a3a3", lineHeight: 1.75, fontWeight: 400 }}>
                      <span style={{ color: "#2dd4bf", flexShrink: 0, marginTop: "0.55rem", fontSize: "0.35rem" }}>◆</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        ))}
        <div style={{ borderTop: "1px solid #1a1a1a" }} />
      </div>
    </section>
  );
}