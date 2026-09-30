import Icon from './Icon';
import { siteConfig } from '../data/siteConfig';

export default function About() {
  return (
    <section className="about section-spacing" id="about">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="section-tag__num">01</span>
            <span className="section-tag__label">About Me</span>
          </div>
          <h2 className="section-title">
            Engineering digital solutions with <span className="text-accent">purpose</span> & code.
          </h2>
          <p className="section-subtitle">
            A blend of full-stack engineering, practical internship experience, and academic research.
          </p>
        </div>

        {/* Editorial Layout */}
        <div className="about__layout">
          {/* Left: Journey Narrative */}
          <div className="about__narrative-col reveal">
            <div className="about__story-card">
              <div className="about__card-kicker-row">
                <Icon name="code" size={18} className="text-accent" />
                <span className="about__card-kicker">Developer Journey</span>
              </div>
              <h3 className="about__story-title">
                From frontend interfaces to distributed full stack systems.
              </h3>
              <p className="about__story-text">
                I am a B.Tech Computer Technology undergraduate at Ahinsa Institute of Technology, Dondaicha, Maharashtra, dedicated to building high-performance, maintainable software and user-centered web applications.
              </p>
              <p className="about__story-text">
                My engineering experience spans developing frontend features for live client projects at Vier Labs, building web modules at Codveda Technologies, and engineering full-stack applications with Java and modern JavaScript frameworks at ITView.
              </p>
              <p className="about__story-text">
                I combine rigorous computer science fundamentals with modern production patterns — focusing on clean architecture, API design, transactional database concurrency, and intuitive user experiences.
              </p>

              <div className="about__story-highlights">
                <div className="about__highlight-item">
                  <span className="about__highlight-dot"></span>
                  <span>Active Full Stack Intern @ ITView</span>
                </div>
                <div className="about__highlight-item">
                  <span className="about__highlight-dot"></span>
                  <span>Published Researcher (JATIR 2026)</span>
                </div>
                <div className="about__highlight-item">
                  <span className="about__highlight-dot"></span>
                  <span>Specialized in MERN & Java Ecosystems</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Overview & Architecture Focus Cards */}
          <div className="about__sidebar-col reveal reveal-delay-2">
            {/* Quick Facts */}
            <div className="about__card about__card--meta">
              <div className="about__card-kicker-row">
                <Icon name="mapPin" size={18} className="text-accent" />
                <span className="about__card-kicker">Quick Overview</span>
              </div>
              <div className="about__meta-list">
                <div className="about__meta-row">
                  <span className="about__meta-label">Location</span>
                  <span className="about__meta-value">{siteConfig.location}</span>
                </div>
                <div className="about__meta-row">
                  <span className="about__meta-label">Degree Track</span>
                  <span className="about__meta-value">B.Tech Computer Technology</span>
                </div>
                <div className="about__meta-row">
                  <span className="about__meta-label">College</span>
                  <span className="about__meta-value">Ahinsa Inst. of Tech (2023–2027)</span>
                </div>
                <div className="about__meta-row">
                  <span className="about__meta-label">Current Role</span>
                  <span className="about__meta-value text-accent">Full Stack Intern @ ITView</span>
                </div>
              </div>
            </div>

            {/* Architecture Focus */}
            <div className="about__card about__card--focus">
              <div className="about__card-kicker-row">
                <Icon name="layers" size={18} className="text-accent" />
                <span className="about__card-kicker">Technical Focus</span>
              </div>
              <p className="about__focus-desc">
                Architecting end-to-end applications across the MERN stack, Java full stack, and cloud datastores.
              </p>
              <div className="about__focus-tags">
                <span className="about__focus-tag">MERN Stack</span>
                <span className="about__focus-tag">Java Backend</span>
                <span className="about__focus-tag">REST APIs</span>
                <span className="about__focus-tag">Firebase & Firestore</span>
                <span className="about__focus-tag">PostgreSQL & MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
