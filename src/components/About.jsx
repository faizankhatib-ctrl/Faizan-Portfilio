import Icon from './Icon';
import { siteConfig } from '../data/siteConfig';

const snapshotFields = [
  { label: 'Role', value: 'Full Stack Python Developer', icon: 'code', highlight: true },
  { label: 'Degree Track', value: 'B.Tech in Computer Technology', icon: 'graduationCap' },
  { label: 'Institution', value: 'Ahinsa Institute of Technology', icon: 'mapPin' },
  { label: 'Graduation', value: '2027 Cohort', icon: 'calendar' },
  { label: 'Location', value: siteConfig.location, icon: 'mapPin' },
  { label: 'Internships', value: 'Vier Labs, Codveda Technologies', icon: 'briefcase', highlight: true },
  { label: 'Academic Research', value: 'Published in JATIR (2026)', icon: 'award' },
];

const specializations = [
  {
    num: '01',
    category: 'FRONTEND',
    icon: 'monitor',
    stack: 'React.js / JavaScript / HTML5 / CSS3',
  },
  {
    num: '02',
    category: 'BACKEND',
    icon: 'server',
    stack: 'Node.js / Express.js / Python / REST APIs',
  },
  {
    num: '03',
    category: 'DATABASE & CLOUD',
    icon: 'database',
    stack: 'MongoDB / Supabase / Firebase / SQL',
  },
  {
    num: '04',
    category: 'TOOLS & DEPLOYMENT',
    icon: 'wrench',
    stack: 'Git / GitHub / VS Code / Vercel / Render',
  },
];

export default function About() {
  return (
    <section className="about section-spacing" id="about" aria-label="About Faizan Khatib">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="section-tag__num">01</span>
            <span className="section-tag__label">About Me</span>
          </div>
          <h2 className="section-title">
            Building practical solutions with <span className="text-accent">purpose</span> & code.
          </h2>
          <p className="section-subtitle">
            A blend of full-stack development, practical internship experience, and academic research.
          </p>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="about__layout">
          {/* Left Column: Professional Narrative */}
          <div className="about__narrative-col reveal">
            <div className="about__story-card">
              <div className="about__card-header-row">
                <div className="about__card-kicker-group">
                  <Icon name="code" size={16} className="text-accent" />
                  <span className="about__card-kicker">ABOUT ME</span>
                </div>
                <span className="about__tech-id">&lt;developer_profile /&gt;</span>
              </div>

              <h3 className="about__story-title">
                From frontend interfaces to full stack applications.
              </h3>

              <div className="about__story-body">
                <p className="about__story-text">
                  I'm an aspiring Full Stack Python Developer and B.Tech Computer Technology student with hands-on experience building full-stack web applications through internships and independent projects. I work with Python, JavaScript, React, Node.js, REST APIs, SQL, and modern backend services to build practical, user-focused solutions.
                </p>
                <p className="about__story-text">
                  My experience includes developing frontend components for a live client project at <strong className="text-highlight">Vier Labs</strong> using the MERN stack with Firebase integration, and building web modules at <strong className="text-highlight">Codveda Technologies</strong> to improve practical skills in HTML, CSS, JavaScript, and Python.
                </p>
                <p className="about__story-text">
                  I have also co-authored a published research paper exploring the relationship between technology and mental health among young adults. I'm passionate about solving real-world problems, writing maintainable code, and continuously improving my software development skills.
                </p>
              </div>

              {/* Story Highlights */}
              <div className="about__story-highlights" aria-label="Key Milestones">
                <div className="about__highlight-item">
                  <span className="about__highlight-dot" aria-hidden="true"></span>
                  <span>Frontend Developer Intern @ Vier Labs</span>
                </div>
                <div className="about__highlight-item">
                  <span className="about__highlight-dot" aria-hidden="true"></span>
                  <span>Published Researcher (JATIR 2026)</span>
                </div>
                <div className="about__highlight-item">
                  <span className="about__highlight-dot" aria-hidden="true"></span>
                  <span>Full Stack Python Training @ ITVIEW</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Developer Snapshot & Specializations */}
          <div className="about__sidebar-col reveal reveal-delay-2">
            {/* Developer Snapshot Profile Card */}
            <div className="about__snapshot-card">
              <div className="about__card-header-row">
                <div className="about__card-kicker-group">
                  <Icon name="terminal" size={16} className="text-accent" />
                  <span className="about__card-kicker">DEVELOPER SNAPSHOT</span>
                </div>
                <span className="about__status-pill">
                  <span className="about__status-dot" aria-hidden="true"></span>
                  Active 2026
                </span>
              </div>

              <div className="about__snapshot-grid">
                {snapshotFields.map((field, idx) => (
                  <div className="about__snapshot-item" key={idx}>
                    <span className="about__snapshot-label">{field.label}</span>
                    <span className={`about__snapshot-val ${field.highlight ? 'about__snapshot-val--accent' : ''}`}>
                      {field.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialization Focus Cards */}
            <div className="about__specializations" aria-label="Technical Specializations">
              <h4 className="about__specializations-title">Core Engineering Focus</h4>
              <div className="about__specializations-grid">
                {specializations.map((spec) => (
                  <div className="about__spec-card" key={spec.num}>
                    <div className="about__spec-top">
                      <span className="about__spec-num">{spec.num}</span>
                      <Icon name={spec.icon} size={15} className="about__spec-icon" />
                    </div>
                    <h5 className="about__spec-title">{spec.category}</h5>
                    <p className="about__spec-stack">{spec.stack}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

