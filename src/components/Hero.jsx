"use client";

import { motion } from "framer-motion";

const line1 = "Sohail".split("");
const line2 = "Mulla".split("");

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055, delayChildren: 0.1 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay },
});

const links = [
  { label: "GitHub",   href: "https://github.com/s-cuda"                    },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sohailmulla1099/" },
  { label: "Resume",   href: "/resume.pdf"                                   },
];

export default function Hero() {
  const totalLetters = line1.length + line2.length;
  const nameDuration = 0.1 + totalLetters * 0.055 + 0.4;

  return (
    <section style={{ minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "5rem 0 4rem", borderBottom: "1px solid #1a1a1a" }}>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2dd4bf", marginBottom: "2rem" }}
      >
        Data Scientist &amp; ML Engineer &nbsp;·&nbsp; OPT Eligible STEM &nbsp;·&nbsp; Syracuse, NY
      </motion.p>

      <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(4rem, 12vw, 9rem)", fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.03em", color: "#fff", marginBottom: "2.5rem" }}>
        <motion.span
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: "block" }}
          aria-label="Sohail"
        >
          {line1.map((letter, i) => (
            <motion.span key={i} variants={letterVariants} style={{ display: "inline-block" }}>
              {letter}
            </motion.span>
          ))}
        </motion.span>

        <motion.span
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: line1.length * 0.055 + 0.1 }}
          style={{ display: "block" }}
          aria-label="Mulla"
        >
          {line2.map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              custom={line1.length + i}
              style={{ display: "inline-block" }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </h1>

      <motion.p
        {...fadeUp(nameDuration)}
        style={{ color: "#a3a3a3", fontSize: "1.05rem", lineHeight: 1.9, maxWidth: "34rem", fontWeight: 400, marginBottom: "2.5rem" }}
      >
        I specialize in building and shipping AI agents and ML systems —
        currently integrating Claude into architectural simulation workflows via MCP.
        My background spans FinTech analytics, open-source GPU computing, and applied deep learning.
        I gravitate toward problems where the model is only half the solution.
      </motion.p>

      <motion.div
        {...fadeUp(nameDuration + 0.1)}
        style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              color: "#a3a3a3",
              textDecoration: "none",
              paddingBottom: "2px",
              borderBottom: "1px solid #444",
              transition: "color 0.2s, border-color 0.2s",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "#2dd4bf";
              e.currentTarget.style.borderColor = "#2dd4bf";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "#a3a3a3";
              e.currentTarget.style.borderColor = "#444";
            }}
          >
            {link.label}
            <span style={{ fontSize: "0.7rem" }}>↗</span>
          </a>
        ))}
      </motion.div>

    </section>
  );
}