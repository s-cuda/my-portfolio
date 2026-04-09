"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const socialLinks = [
  { label: "Email",    href: "mailto:sohailmulla1099@gmail.com", icon: EmailIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sohailmulla1099/", icon: LinkedInIcon },
  { label: "GitHub",   href: "https://github.com/s-cuda", icon: GitHubIcon },
];

const inputStyle = {
  width: "100%",
  background: "#0d0d0d",
  border: "1px solid #1f1f1f",
  color: "#e5e5e5",
  padding: "0.85rem 1rem",
  fontSize: "0.9rem",
  fontFamily: "Inter, sans-serif",
  fontWeight: 400,
  outline: "none",
  transition: "border-color 0.2s",
  borderRadius: "2px",
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mnjoyvnz", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section id="contact" style={{ padding: "6rem 0 8rem", borderTop: "1px solid #1a1a1a" }}>
      <AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>

          <div>
            <p style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2dd4bf", marginBottom: "1rem" }}>
              Get in touch
            </p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Connect<br />With Me
            </h2>
            <p style={{ color: "#737373", fontSize: "0.95rem", lineHeight: 1.8, fontWeight: 400, marginBottom: "2.5rem", maxWidth: "22rem" }}>
              Actively looking for full-time Data Scientist and ML Engineer roles.
              Open to research collaborations and interesting ML projects.
            </p>

            <div style={{ display: "flex", gap: "1rem" }}>
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    title={link.label}
                    style={{ color: "#525252", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", border: "1px solid #1a1a1a", transition: "color 0.2s, border-color 0.2s, box-shadow 0.2s" }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "#2dd4bf";
                      e.currentTarget.style.borderColor = "#2dd4bf";
                      e.currentTarget.style.boxShadow = "0 0 16px rgba(45,212,191,0.15)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "#525252";
                      e.currentTarget.style.borderColor = "#1a1a1a";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            {submitted ? (
              <div style={{ border: "1px solid #2dd4bf", borderRadius: "4px", padding: "3rem 2rem", textAlign: "center" }}>
                <p style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", color: "#fff", marginBottom: "0.75rem" }}>
                  Message sent.
                </p>
                <p style={{ color: "#737373", fontSize: "0.9rem" }}>
                  I will get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                <div>
                  <label style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: "0.5rem" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "#2dd4bf"}
                    onBlur={e => e.target.style.borderColor = "#1f1f1f"}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: "0.5rem" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "#2dd4bf"}
                    onBlur={e => e.target.style.borderColor = "#1f1f1f"}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: "0.5rem" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Tell me about the opportunity or project..."
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
                    onFocus={e => e.target.style.borderColor = "#2dd4bf"}
                    onBlur={e => e.target.style.borderColor = "#1f1f1f"}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "#2dd4bf",
                    color: "#000",
                    border: "none",
                    padding: "0.9rem 2rem",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "background 0.2s",
                    borderRadius: "2px",
                    alignSelf: "flex-start",
                    fontFamily: "Inter, sans-serif",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "#5eead4"}
                  onMouseLeave={e => e.currentTarget.style.background = "#2dd4bf"}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </AnimatedSection>
    </section>
  );
}