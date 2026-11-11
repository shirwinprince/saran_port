import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check,
  ChevronRight, Code2, Download, ExternalLink, Mail, MapPin, Menu,
  MessageCircle, Phone, ShieldCheck, Sparkles, Target, Users, X,
  ClipboardCheck, Handshake, Wrench
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Saran Murugan",
  role: "Sales & Service Supervisor",
  location: "Coimbatore, Tamil Nadu",
  email: "saranmurugan9272@gmail.com",
  phone: "8610689272",
};

const strengths = [
  { icon: Users, title: "Customer relationships", text: "Building trust through clear communication, consultation and consistent follow-up." },
  { icon: Target, title: "Sales & business growth", text: "Handling lead generation, customer requirements, presentations and project closure." },
  { icon: ClipboardCheck, title: "End-to-end coordination", text: "Connecting customers, service teams and internal stakeholders to keep work moving." },
  { icon: Code2, title: "Frontend development", text: "Hands-on experience developing responsive mobile interfaces using Flutter." },
];

const skills = [
  "B2B & B2C Sales", "Lead Generation & Conversion", "Customer Relationship Management",
  "Cold Calling", "Customer Consultation", "Site Evaluation",
  "Project Coordination", "Product Presentation", "Service Team Coordination",
  "Payment Follow-up", "Complaint Handling", "Conflict Resolution",
  "Problem Solving", "Team Coordination & Training", "Flutter",
  "Frontend Development", "MS Office", "Communication"
];

const experience = [
  {
    date: "JUL 2024 — JUL 2026",
    role: "Sales & Service Supervisor – CCA",
    company: "Asian Paints Limited",
    place: "Coimbatore",
    type: "Sales & Service",
    points: [
      "Managed B2B and B2C sales and service operations, guiding customers from lead generation through project closure.",
      "Followed up on company-generated leads, understood requirements and scheduled site meetings.",
      "Conducted site visits, evaluated project needs and recommended suitable products and service solutions.",
      "Delivered product presentations covering features, benefits, pricing, service costs and payment terms.",
      "Coordinated service teams, assigned projects and monitored site execution, quality and progress.",
      "Managed payment follow-up, customer concerns and communication with internal stakeholders.",
      "Assisted with team training by sharing process knowledge and customer-handling practices."
    ]
  },
  {
    date: "FEB 2023 — MAY 2024",
    role: "Flutter Developer",
    company: "Viswa Technology Solutions",
    place: "Coimbatore",
    type: "Technology",
    points: [
      "Built and maintained responsive mobile application interfaces using Flutter.",
      "Developed UI screens and implemented frontend functionality based on project requirements.",
      "Collaborated with the development team to understand requirements and implement interface updates.",
      "Participated in testing and debugging frontend features to improve usability and performance."
    ]
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Saran Murugan home">
          <span className="brand-mark">SM</span>
          <span>SARAN<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#highlights" onClick={closeMenu}>Highlights</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> PROFESSIONAL PORTFOLIO <span className="eyebrow-year">2026</span></div>
            <p className="hello">Hello, I'm</p>
            <h1>Saran<br /><span>Murugan.</span></h1>
            <div className="hero-role">
              <span className="role-line" />
              <p>Sales, service & customer experience<br className="desktop-break" /> professional with a technology background.</p>
            </div>
            <p className="hero-intro">
              I bring people, projects and teams together — combining hands-on sales and service operations experience with a foundation in Flutter frontend development.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
              <a className="btn btn-quiet" href="#experience">Explore experience <ArrowDown size={16} /></a>
            </div>
            <div className="hero-location"><MapPin size={15} /> {profile.location} <span className="location-divider">•</span> Open to opportunities</div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="photo-frame">
              <img src="/images/saran-murugan.jpg" alt="Portrait of Saran Murugan" />
              <div className="photo-caption"><span className="caption-dot" /> PROFESSIONAL PROFILE</div>
            </div>
            <div className="floating-card card-top"><span className="float-icon"><ShieldCheck size={18} /></span><span><b>Customer-first</b><small>Service mindset</small></span></div>
            <div className="floating-card card-bottom"><span className="float-icon coral"><BriefcaseBusiness size={18} /></span><span><b>100+ sites</b><small>Independently handled</small></span></div>
            <div className="visual-stamp">BUILD<br />TRUST.<br /><em>DELIVER.</em></div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO DISCOVER</a>
        </section>

        <section className="metrics-band" id="highlights">
          <div className="metrics-inner">
            <div className="metrics-heading"><span>PROVEN IN THE FIELD</span><p>Experience measured<br />in real project work.</p></div>
            <div className="metric"><strong>100<span>+</span></strong><small>Customer sites handled</small></div>
            <div className="metric"><strong>15<span>+</span></strong><small>Architects & builders coordinated</small></div>
            <div className="metric"><strong>5<span>+</span></strong><small>Commercial project sites</small></div>
          </div>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>
          <div className="about-grid">
            <div><h2>People first.<br /><span>Projects delivered.</span></h2></div>
            <div className="about-content">
              <p className="lead">I am a BBA graduate with professional experience across sales, customer service, business development and frontend development.</p>
              <p>At Asian Paints, I managed customer journeys from the first conversation to project closure, coordinated site execution and worked closely with customers, architects, builders and service teams. Earlier, I worked as a Flutter Developer, building and maintaining mobile application interfaces.</p>
              <p>I value ownership, practical problem-solving and dependable communication — the habits that help create a positive customer experience and keep projects on track.</p>
              <div className="about-tags"><span><Check size={14} /> Customer-focused</span><span><Check size={14} /> Ownership mindset</span><span><Check size={14} /> Cross-functional coordination</span></div>
            </div>
          </div>
          <div className="strength-grid">
            {strengths.map((item, i) => {
              const Icon = item.icon;
              return <article className="strength-card" key={item.title}><div className="strength-icon"><Icon size={21} /></div><span className="strength-number">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>;
            })}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-wrap">
            <div className="section-kicker light-kicker">02 / CAREER JOURNEY</div>
            <div className="experience-heading"><h2>Experience that<br /><span>moves work forward.</span></h2><p>A combination of customer-facing operations and hands-on technology experience.</p></div>
            <div className="timeline">
              {experience.map((job, i) => <article className="timeline-item" key={job.role}>
                <div className="timeline-marker"><span>0{i + 1}</span></div>
                <div className="timeline-card">
                  <div className="timeline-meta"><span>{job.date}</span><span className="job-type">{job.type}</span></div>
                  <h3>{job.role}</h3><h4>{job.company} <span>· {job.place}</span></h4>
                  <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
                </div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-kicker">03 / SKILLS & EXPERTISE</div>
          <div className="skills-layout">
            <div><h2>A practical mix<br /><span>of skills.</span></h2><p className="skills-intro">From customer conversations and sales coordination to building mobile interfaces, I enjoy work that needs both people skills and structured execution.</p>
              <div className="skills-note"><Wrench size={18} /><span><b>How I work</b><br />Listen carefully. Understand the requirement. Coordinate clearly. Follow through.</span></div>
            </div>
            <div className="skill-cloud">{skills.map(skill => <span className="skill-pill" key={skill}>{skill}</span>)}</div>
          </div>
        </section>

        <section className="education-section">
          <div className="section-wrap education-inner">
            <div><div className="section-kicker light-kicker">04 / EDUCATION & LANGUAGES</div><h2>Grounded in<br /><span>business fundamentals.</span></h2></div>
            <div className="education-card">
              <span className="education-label">2018 — 2021</span>
              <h3>Bachelor of Business Administration (BBA)</h3>
              <p>Sri Vidya Mandir College of Arts & Science</p>
              <div className="education-divider" />
              <span className="education-label">LANGUAGES</span>
              <div className="language-list"><span>English</span><span>Tamil</span></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-kicker light-kicker">05 / LET'S CONNECT</div>
            <div className="contact-main">
              <div><p className="contact-overline">Have a role or project in mind?</p><h2>Let's make<br /><em>good work</em> happen.</h2><p className="contact-copy">If you're looking for someone who values customer relationships, takes ownership and coordinates work through to completion, I'd be glad to connect.</p></div>
              <div className="contact-panel">
                <a href={`mailto:${profile.email}`}><span className="contact-icon"><Mail size={18} /></span><span><small>EMAIL ME</small><b>{profile.email}</b></span><ArrowUpRight size={18} /></a>
                <a href={`tel:+91${profile.phone}`}><span className="contact-icon"><Phone size={18} /></span><span><small>CALL ME</small><b>+91 {profile.phone}</b></span><ArrowUpRight size={18} /></a>
                <a href={`https://wa.me/91${profile.phone}`} target="_blank" rel="noreferrer"><span className="contact-icon"><MessageCircle size={18} /></span><span><small>WHATSAPP</small><b>Start a conversation</b></span><ArrowUpRight size={18} /></a>
                <div className="contact-location"><MapPin size={15} /> Based in Coimbatore, Tamil Nadu</div>
              </div>
            </div>
            <div className="footer-line"><a className="brand footer-brand" href="#home"><span className="brand-mark">SM</span><span>SARAN<span className="brand-dot">.</span></span></a><span>Designed to communicate clarity, ownership & trust.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></div>
          </div>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
