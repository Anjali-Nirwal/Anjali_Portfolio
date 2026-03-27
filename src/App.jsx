import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const data = {
  name: "Anjali Nirwal",
  title: "Full Stack Developer",
  tagline:
    "Full Stack Developer passionate about building and shipping real products. Skilled in React, Node.js, Express, MongoDB, and integrating Generative AI into applications to create smarter user experiences. From frontend UI to backend APIs to AI-powered features — I build complete solutions that are clean, scalable, and practical.",
  email: "anjalinirwal02@gmail.com",
  phone: "+91 9149007255",
  location: "Ghaziabad, India",
  linkedin: "https://www.linkedin.com/in/anjali-nirwal-9074a1305",
  github: "https://github.com/anjali-nirwal",
  twitter: "https://x.com/anjalinirwal02",
  skills: {
    Languages: ["Java", "JavaScript"],
    Frameworks: ["React.js", "Redux", "Node.js", "Express.js", "Bootstrap"],
    "Generative AI": ["Gemini API", "OpenAI API", "LLM Integration"],
    "Tools & Databases": ["Git", "GitHub", "MongoDB", "MySQL", "Cloudinary", "VS Code"],
    Competencies: ["RESTful APIs", "JWT Authentication", "Middleware", "API Integration"],
    "Soft Skills": ["Problem Solving", "Communication", "Team Collaboration", "Active Listening"],
  },
  projects: [
    {
      title: "Full-Stack Stock Trading Web App",
      description:
        "Zerodha-inspired portfolio dashboard for real-time stock holdings, positions, and investment summaries. Integrated Chart.js to visualize stock price trends for data-driven decision-making.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Chart.js"],
      live: "https://investo-9kb8.onrender.com/",
      github: "https://github.com/Anjali-Nirwal/Stock-trading",
    },
    {
      title: "Full-Stack Room Booking Platform",
      description:
        "Scalable room rental platform with listing management, Cloudinary image uploads, and JWT role-based authentication. Designed responsive UIs for mobile and desktop.",
      tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap", "Cloudinary"],
      live: "https://stayeasy-quwp.onrender.com/",
      github: "https://github.com/Anjali-Nirwal/rooms-for-all",
    },
    {
      title: "EchoMeet— Live Chat, Video Call & Screen Share",
      description:
        "Real-time collaboration platform with one-to-one and group chat using Socket.IO for low-latency messaging. Integrated WebRTC for peer-to-peer video calling and screen sharing.",
      tech: ["React.js", "Socket.IO", "WebRTC", "Node.js", "MongoDB", "Cloudinary"],
      live: "https://zoom-clone-zyzw.onrender.com/",
      github: "https://github.com/Anjali-Nirwal/echo_app",
    },
    {
      title: "AI Code Reviewer — GenAI Powered",
      description:
        "AI-powered code review tool using Google Gemini API to analyze code quality and suggest improvements in real time.",
      tech: ["React.js", "Node.js", "Express.js", "Gemini API"],
      live: null,
      github: null,
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Abes Institute of Technology",
      location: "Ghaziabad, India",
      period: "Nov 2022 – Jun 2026",
      grade: "SGPA: 8.0",
    },
    {
      degree: "Senior Secondary Education",
      institution: "Sai Millennium Sr. Sec. School",
      location: "Bijnor, India",
      period: "Apr 2018 – Apr 2022",
      grade: "10th: 89% | 12th: 86%",
    },
  ],
  certifications: [
    { name: "Full Stack Web Development", org: "Apna College" },
    { name: "Core Java", org: "SoftPro ICT (2023)" },
    { name: "React", org: "Abesit CRC (2024)" },
  ],
};

// ─── TECH TAG COLORS ─────────────────────────────────────────────────────────
const techColors = {
  "React.js": "#61DAFB",
  "Node.js": "#68A063",
  "MongoDB": "#47A248",
  "Express.js": "#aaaaaa",
  "JWT Auth": "#D63AFF",
  "Chart.js": "#FF6384",
  "Socket.IO": "#aaaaaa",
  "WebRTC": "#4F46E5",
  "Gemini API": "#4285F4",
  "EJS": "#A91E50",
  "Bootstrap": "#7952B3",
  "Cloudinary": "#3448C5",
  "MySQL": "#4479A1",
  "Redux": "#764ABC",
  "JavaScript": "#F7DF1E",
  "Java": "#ED8B00",
  "OpenAI API": "#10A37F",
  "Git": "#F05032",
  "GitHub": "#aaaaaa",
  "LLM Integration": "#4285F4",
  "RESTful APIs": "#c9a96e",
  "JWT Authentication": "#D63AFF",
  "Middleware": "#aaaaaa",
  "API Integration": "#c9a96e",
};

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Tag({ label }) {
  const color = techColors[label] || "#aaaaaa";
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 11px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 500,
        background: color + "1a",
        color: color,
        border: `1px solid ${color}44`,
        letterSpacing: "0.02em",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function SectionTitle({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 18,
        marginBottom: 40,
      }}
    >
      <h2
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          whiteSpace: "nowrap",
          color: "inherit",
        }}
      >
        {children}
      </h2>
      <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
    </div>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: "26px 26px 22px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? "var(--shadow-hover)" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12,
        }}
      >
        <h3
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 18,
            fontWeight: 700,
            lineHeight: 1.3,
            color: "inherit",
          }}
        >
          {project.title}
        </h3>
        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent)",
                fontSize: 12,
                textDecoration: "none",
                border: "1px solid var(--accent)",
                borderRadius: 8,
                padding: "3px 10px",
                fontWeight: 500,
                transition: "background 0.2s",
              }}
            >
              Live ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--muted)",
                fontSize: 12,
                textDecoration: "none",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "3px 10px",
                fontWeight: 500,
              }}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
      <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>
        {project.description}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
        {project.tech.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </div>
  );
}

// ─── ICONS ───────────────────────────────────────────────────────────────────
function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.74a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconMapPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconLink() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}
function IconMoon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}
function IconSun() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
const NAV_ITEMS = ["About", "Skills", "Projects", "Education", "Contact"];

export default function App() {
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const observerRef = useRef(null);

  // Scroll observer to highlight active nav
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(
              entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1)
            );
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_ITEMS.forEach((n) => {
      const el = document.getElementById(n.toLowerCase());
      if (el) observerRef.current.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // ─── THEME VARS ─────────────────────────────────────────────────────────────
  const theme = dark
    ? {
        "--bg": "#0c0e12",
        "--bg2": "#111318",
        "--card": "#13171e",
        "--fg": "#ede9e0",
        "--muted": "#8a8fa8",
        "--accent": "#c9a96e",
        "--accent-dim": "#c9a96e22",
        "--border": "#ffffff14",
        "--border-hover": "#ffffff28",
        "--shadow-hover": "0 16px 48px rgba(0,0,0,0.4)",
        "--nav-bg": scrolled ? "#0c0e12ee" : "transparent",
      }
    : {
        "--bg": "#f8f6f1",
        "--bg2": "#f0ede6",
        "--card": "#ffffff",
        "--fg": "#111111",
        "--muted": "#666666",
        "--accent": "#9c6f28",
        "--accent-dim": "#9c6f2815",
        "--border": "#e2ddd4",
        "--border-hover": "#c8c3b8",
        "--shadow-hover": "0 16px 48px rgba(0,0,0,0.10)",
        "--nav-bg": scrolled ? "#f8f6f1ee" : "transparent",
      };

  return (
    <div
      style={{
        ...theme,
        background: "var(--bg)",
        color: "var(--fg)",
        fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif",
        minHeight: "100vh",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: 64,
          background: "var(--nav-bg)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          padding: "0 max(24px, calc((100vw - 900px)/2 + 40px))",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 22,
            fontWeight: 700,
            color: "var(--accent)",
            letterSpacing: "-0.01em",
          }}
        >
          AN
        </span>

        {/* Desktop nav */}
        <div
          style={{
            display: "flex",
            gap: 28,
            alignItems: "center",
          }}
        >
          {NAV_ITEMS.map((n) => (
            <button
              key={n}
              onClick={() => scrollTo(n)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: activeSection === n ? 500 : 400,
                color: activeSection === n ? "var(--accent)" : "var(--muted)",
                transition: "color 0.2s",
                padding: "4px 0",
                fontFamily: "inherit",
              }}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setDark((d) => !d)}
            style={{
              background: "none",
              border: "1px solid var(--border)",
              borderRadius: 8,
              cursor: "pointer",
              padding: "6px 10px",
              color: "var(--muted)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "border-color 0.2s",
            }}
            aria-label="Toggle theme"
          >
            {dark ? <IconSun /> : <IconMoon />}
          </button>
        </div>
      </nav>

      {/* ── PAGE CONTENT ── */}
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* ── HERO ── */}
        <section
          id="about"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: 64,
          }}
        >
          <div style={{ maxWidth: 660 }}>
            {/* <p
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "var(--accent)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              📍 {data.location}
            </p> */}

            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(52px, 8vw, 84px)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                margin: "0 0 24px",
              }}
            >
              {data.name.split(" ")[0]}
              <br />
              <span style={{ color: "var(--accent)" }}>
                {data.name.split(" ")[1]}
              </span>
            </h1>

            <p
              style={{
                fontSize: 16,
                fontWeight: 300,
                color: "var(--muted)",
                lineHeight: 1.8,
                maxWidth: 520,
                marginBottom: 36,
              }}
            >
              {data.tagline}
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                onClick={() => scrollTo("Projects")}
                style={{
                  background: "var(--accent)",
                  color: dark ? "#0c0e12" : "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "13px 30px",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                View Projects
              </button>
              <a
                href={`mailto:${data.email}`}
                style={{
                  background: "none",
                  color: "var(--fg)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: "13px 30px",
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                  display: "inline-block",
                }}
              >
                Get in Touch
              </a>
            </div>

            {/* Social row */}
            <div style={{ display: "flex", gap: 16, marginTop: 48 }}>
              {[
                { label: "GitHub", href: data.github },
                { label: "LinkedIn", href: data.linkedin },
                { label: "Twitter", href: data.twitter },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 13,
                    color: "var(--muted)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: 2,
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--muted)";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" style={{ padding: "80px 0 40px" }}>
          <SectionTitle>Skills</SectionTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {Object.entries(data.skills).map(([cat, items]) => (
              <div
                key={cat}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "20px 22px",
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: "var(--accent)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  {cat}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {items.map((s) => (
                    <Tag key={s} label={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" style={{ padding: "80px 0 40px" }}>
          <SectionTitle>Projects</SectionTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
              gap: 20,
            }}
          >
            {data.projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" style={{ padding: "80px 0 40px" }}>
          <SectionTitle>Education</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
            {data.education.map((e, i) => (
              <div
                key={i}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "24px 28px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 17,
                      fontWeight: 700,
                      marginBottom: 5,
                    }}
                  >
                    {e.institution}
                  </p>
                  <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 5 }}>
                    {e.degree}
                  </p>
                  <p style={{ fontSize: 13, color: "var(--accent)" }}>{e.location}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 4 }}>
                    {e.period}
                  </p>
                  <p style={{ fontSize: 14, fontWeight: 500 }}>{e.grade}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <p
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Certifications
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {data.certifications.map((c, i) => (
              <div
                key={i}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: "14px 20px",
                }}
              >
                <p style={{ fontSize: 14, fontWeight: 500, marginBottom: 3 }}>{c.name}</p>
                <p style={{ fontSize: 12, color: "var(--accent)" }}>{c.org}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding: "80px 0 40px" }}>
          <SectionTitle>Contact</SectionTitle>
          <p
            style={{
              fontSize: 16,
              color: "var(--muted)",
              lineHeight: 1.7,
              maxWidth: 480,
              marginBottom: 36,
              fontWeight: 300,
            }}
          >
            I'm currently open to full-time opportunities and freelance projects. Feel free to reach out!
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
              gap: 14,
              maxWidth: 600,
            }}
          >
            {[
              { label: "Email", val: data.email, href: `mailto:${data.email}`, icon: <IconMail /> },
              { label: "Phone", val: data.phone, href: `tel:${data.phone}`, icon: <IconPhone /> },
              { label: "LinkedIn", val: "linkedin.com/in/anjali", href: data.linkedin, icon: <IconLink /> },
              { label: "GitHub", val: "github.com/anjali", href: data.github, icon: <IconLink /> },
              { label: "Location", val: data.location, href: null, icon: <IconMapPin /> },
            ].map((c) => (
              <div
                key={c.label}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                }}
              >
                <span
                  style={{
                    color: "var(--accent)",
                    marginTop: 1,
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </span>
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: 4,
                    }}
                  >
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 13,
                        color: "var(--fg)",
                        textDecoration: "none",
                        fontWeight: 500,
                        wordBreak: "break-all",
                      }}
                    >
                      {c.val}
                    </a>
                  ) : (
                    <p style={{ fontSize: 13, fontWeight: 500 }}>{c.val}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer
          style={{
            textAlign: "center",
            padding: "40px 0 64px",
            color: "var(--muted)",
            fontSize: 13,
            borderTop: "1px solid var(--border)",
            marginTop: 40,
          }}
        >
          <p>
            Designed & built with care ·{" "}
            <span style={{ color: "var(--accent)" }}>Anjali Nirwal</span> © 2025
          </p>
        </footer>
      </div>
    </div>
  );
}
