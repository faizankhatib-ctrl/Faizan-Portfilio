import Icon from './Icon';

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

        {/* Bento Grid Layout */}
        <div className="about__bento">
          {/* Card 1: Core Narrative (Large Span) */}
          <div className="about__card about__card--story reveal">
            <div className="about__card-header">
              <div className="about__card-icon-pill">
                <Icon name="code" size={20} />
              </div>
              <span className="about__card-kicker">Developer Journey</span>
            </div>
            <h3 className="about__card-title">
              From Frontend Interfaces to Full Stack Systems
            </h3>
            <p className="about__card-text">
              I'm a B.Tech Computer Technology student at Ahinsa Institute of Technology, Dondaicha, Maharashtra,
              dedicated to creating performant, user-focused web applications.
            </p>
            <p className="about__card-text">
              My engineering trajectory spans building responsive frontend features for live client projects at agencies
              like Vier Labs, developing web modules at Codveda Technologies, and building full-stack applications with
              Java and modern JavaScript ecosystems at ITView.
            </p>
          </div>

          {/* Card 2: Quick Facts & Status */}
          <div className="about__card about__card--meta reveal reveal-delay-1">
            <div className="about__card-header">
              <div className="about__card-icon-pill">
                <Icon name="mapPin" size={20} />
              </div>
              <span className="about__card-kicker">Quick Overview</span>
            </div>

            <div className="about__meta-list">
              <div className="about__meta-row">
                <span className="about__meta-label">Location</span>
                <span className="about__meta-value">Maharashtra, India</span>
              </div>
              <div className="about__meta-row">
                <span className="about__meta-label">Academic Track</span>
                <span className="about__meta-value">B.Tech Computer Technology</span>
              </div>
              <div className="about__meta-row">
                <span className="about__meta-label">Institution</span>
                <span className="about__meta-value">Ahinsa Inst. of Tech (2023–2027)</span>
              </div>
              <div className="about__meta-row">
                <span className="about__meta-label">Active Internship</span>
                <span className="about__meta-value text-accent">Full Stack Intern @ ITView</span>
              </div>
            </div>
          </div>

          {/* Card 3: Technical Focus */}
          <div className="about__card about__card--focus reveal reveal-delay-2">
            <div className="about__card-header">
              <div className="about__card-icon-pill">
                <Icon name="layers" size={20} />
              </div>
              <span className="about__card-kicker">Architecture Focus</span>
            </div>
            <h3 className="about__card-title">Full Stack & Real-Time Data</h3>
            <p className="about__card-text">
              Specialized in building end-to-end applications using the MERN stack (MongoDB, Express.js, React.js, Node.js)
              and Java full-stack paradigms, with hands-on integration of Firebase and Firestore.
            </p>
            <div className="about__tags">
              <span className="about__tag">MERN Stack</span>
              <span className="about__tag">Java Full Stack</span>
              <span className="about__tag">REST APIs</span>
              <span className="about__tag">Firebase / Firestore</span>
            </div>
          </div>

          {/* Card 4: Research & Impact */}
          <div className="about__card about__card--research reveal reveal-delay-3">
            <div className="about__card-header">
              <div className="about__card-icon-pill">
                <Icon name="bookOpen" size={20} />
              </div>
              <span className="about__card-kicker">Published Research</span>
            </div>
            <h3 className="about__card-title">Tech & Psychological Impact</h3>
            <p className="about__card-text">
              Co-authored a peer-reviewed research paper in JATIR (June 2026) evaluating how smartphone, AI, and social
              media technologies affect psychological well-being among young adults in India.
            </p>
            <div className="about__research-badge">
              <Icon name="award" size={16} />
              <span>Certified JATIR Publication (Vol. 2, Issue 6)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
