"use client";

import { useState } from "react";

export default function ProjectCard({ title, description, tech, github, demo, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: "1px solid #1a1a1a",
        padding: "2.5rem 0",
        display: "grid",
        gridTemplateColumns: "5rem 1fr auto",
        gap: "2rem",
        alignItems: "start",
        transition: "opacity 0.2s",
      }}
    >
      <div style={{ paddingTop: "0.1rem" }}>
        <span style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "2.5rem",
          color: hovered ? "#2dd4bf" : "#222",
          fontWeight: 800,
          lineHeight: 1,
          transition: "color 0.3s",
          display: "block",
        }}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div>
        <h3 style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "1.2rem",
          fontWeight: 700,
          color: hovered ? "#2dd4bf" : "#f0f0f0",
          letterSpacing: "-0.01em",
          lineHeight: 1.3,
          marginBottom: "0.75rem",
          transition: "color 0.3s",
        }}>
          {title}
        </h3>

        <p style={{
          color: "#a3a3a3",
          fontSize: "0.88rem",
          lineHeight: 1.8,
          fontWeight: 400,
          marginBottom: "1.25rem",
          maxWidth: "52rem",
        }}>
          {description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {tech.map((t) => (
            <span key={t} style={{
              fontSize: "0.68rem",
              letterSpacing: "0.06em",
              color: hovered ? "#2dd4bf" : "#555",
              border: hovered ? "1px solid rgba(45,212,191,0.3)" : "1px solid #222",
              padding: "0.2rem 0.6rem",
              transition: "all 0.3s",
              borderRadius: "2px",
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingTop: "0.3rem", flexShrink: 0 }}>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#555",
              textDecoration: "none",
              border: "1px solid #222",
              padding: "0.3rem 0.75rem",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "#2dd4bf";
              e.currentTarget.style.borderColor = "#2dd4bf";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "#555";
              e.currentTarget.style.borderColor = "#222";
            }}
          >
            GitHub ↗
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#555",
              textDecoration: "none",
              border: "1px solid #222",
              padding: "0.3rem 0.75rem",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "#2dd4bf";
              e.currentTarget.style.borderColor = "#2dd4bf";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "#555";
              e.currentTarget.style.borderColor = "#222";
            }}
          >
            Demo ↗
          </a>
        )}
      </div>
    </div>
  );
}