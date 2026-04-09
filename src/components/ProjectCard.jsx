"use client";

import { useState } from "react";

export default function ProjectCard({ title, description, tech, github, demo, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        border: hovered ? "1px solid #2dd4bf" : "1px solid #222",
        borderRadius: "4px",
        padding: "2rem",
        backgroundColor: hovered ? "#0a1a18" : "#0d0d0d",
        transition: "all 0.3s ease",
        cursor: "default",
        boxShadow: hovered ? "0 0 30px rgba(45, 212, 191, 0.08), inset 0 0 30px rgba(45, 212, 191, 0.03)" : "none",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        minHeight: "260px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "0.85rem",
          color: hovered ? "#2dd4bf" : "#333",
          fontWeight: 700,
          transition: "color 0.3s",
        }}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          {github && (
            <a
              href={github}
              target="_blank"
              onClick={e => e.stopPropagation()}
              style={{
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: hovered ? "#2dd4bf" : "#444",
                textDecoration: "none",
                border: hovered ? "1px solid #2dd4bf" : "1px solid #222",
                padding: "0.3rem 0.75rem",
                transition: "all 0.3s",
              }}
            >
              GitHub ↗
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              onClick={e => e.stopPropagation()}
              style={{
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: hovered ? "#2dd4bf" : "#444",
                textDecoration: "none",
                border: hovered ? "1px solid #2dd4bf" : "1px solid #222",
                padding: "0.3rem 0.75rem",
                transition: "all 0.3s",
              }}
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      <h3 style={{
        fontFamily: "Playfair Display, serif",
        fontSize: "1.25rem",
        fontWeight: 700,
        color: hovered ? "#fff" : "#a3a3a3",
        letterSpacing: "-0.01em",
        lineHeight: 1.3,
        transition: "color 0.3s",
      }}>
        {title}
      </h3>

      <p style={{
        color: hovered ? "#9ca3af" : "#555",
        fontSize: "0.88rem",
        lineHeight: 1.8,
        fontWeight: 400,
        transition: "color 0.3s",
        flex: 1,
      }}>
        {description}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "auto" }}>
        {tech.map((t) => (
          <span key={t} style={{
            fontSize: "0.68rem",
            letterSpacing: "0.06em",
            color: hovered ? "#2dd4bf" : "#444",
            border: hovered ? "1px solid rgba(45,212,191,0.3)" : "1px solid #1f1f1f",
            padding: "0.2rem 0.6rem",
            transition: "all 0.3s",
            borderRadius: "2px",
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}