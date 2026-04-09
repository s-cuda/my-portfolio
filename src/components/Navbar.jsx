"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Education",  href: "#education"  },
  { label: "Skills",     href: "#skills"     },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      borderBottom: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
      backgroundColor: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.4s ease",
    }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 2rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        <a href="#about" style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 700, color: "#fff", textDecoration: "none", letterSpacing: "-0.01em", flexShrink: 0 }}>
          SM
        </a>

        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }} className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}
                style={{ color: "#737373", fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "#737373"}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", display: "none", flexDirection: "column", gap: "5px" }}
        >
          <span style={{ width: "20px", height: "1px", background: "#fff", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
          <span style={{ width: "20px", height: "1px", background: "#fff", display: "block", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ width: "20px", height: "1px", background: "#fff", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }} />
        </button>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: "rgba(8,8,8,0.98)", padding: "1.5rem 2rem", borderTop: "1px solid #1a1a1a" }}>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ color: "#a3a3a3", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}