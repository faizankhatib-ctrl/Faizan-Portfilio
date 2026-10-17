import Icon from './Icon';
import { siteConfig } from '../data/siteConfig';

const coreTechnologies = [
  'Python',
  'React.js',
  'Node.js',
  'Express.js',
  'JavaScript',
  'SQL',
  'MongoDB',
];

const recruiterSnapshot = [
  {
    num: '01',
    value: '2 Internships',
    label: 'Vier Labs, Codveda',
  },
  {
    num: '02',
    value: '7 Projects',
    label: 'Full Stack & APIs',
  },
  {
    num: '03',
    value: 'JATIR 2026',
    label: 'Research Paper',
  },
  {
    num: '04',
    value: '2027 Cohort',
    label: 'B.Tech Comp Tech',
  },
];

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      {/* Subtle Ambient Background */}
      <div className="hero__ambient-glow" aria-hidden="true"></div>
      <div className="hero__grid-pattern" aria-hidden="true"></div>

      <div className="section-wrapper">
        <div className="hero__container">
          {/* Left Column: Information & Recruiter Story */}
          <div className="hero__content">
            {/* Status Pill Badge */}
            <div className="hero__status-badge reveal">
              <span className="hero__status-dot">
                <span className="hero__status-dot-ping"></span>
              </span>
              <span className="hero__status-text">✦ FULL STACK PYTHON DEVELOPER ✦</span>
            </div>

            {/* Heading & Role */}
            <div className="hero__heading-wrap reveal reveal-delay-1">
              <h1 className="hero__title">
                Faizan <span className="text-accent hero__title-accent">Khatib</span>
              </h1>
              <p className="hero__subhead">
                Building Practical Solutions Through <span className="text-highlight">Full Stack Development.</span>
              </p>
            </div>

            {/* Bio Description */}
            <p className="hero__bio reveal reveal-delay-2">
              I'm an aspiring Full Stack Python Developer and B.Tech Computer Technology student with hands-on experience building web applications and a published researcher exploring the intersection of technology and mental health.
            </p>

            {/* CTA Buttons */}
            <div className="hero__actions reveal reveal-delay-3">
              <a href="#projects" className="btn btn--primary hero__btn-primary">
                <span>View My Projects</span>
                <Icon name="arrowRight" size={16} />
              </a>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary hero__btn-secondary"
                aria-label={`Download ${siteConfig.name} Resume PDF`}
                title="Download Resume (PDF)"
              >
                <Icon name="download" size={16} />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                className="btn btn--ghost hero__btn-github"
                aria-label="Go to contact section"
                title="Let's Connect"
              >
                <Icon name="mail" size={16} />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="hero__social-links reveal reveal-delay-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label={`${siteConfig.name} GitHub profile`}
                title="View GitHub Profile"
              >
                <Icon name="github" size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label={`${siteConfig.name} LinkedIn profile`}
                title="View LinkedIn Profile"
              >
                <Icon name="linkedin" size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hero__social-link"
                aria-label={`Email ${siteConfig.name}`}
                title="Send Email"
              >
                <Icon name="mail" size={16} />
                <span>Email</span>
              </a>
            </div>

            {/* Technology Signals */}
            <div className="hero__tech-stack reveal reveal-delay-4" aria-label="Core Technology Stack">
              <span className="hero__tech-label">Core Stack:</span>
              <div className="hero__tech-list" role="list">
                {coreTechnologies.map((tech) => (
                  <span className="hero__tech-tag" key={tech} role="listitem">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Recruiter Snapshot Data */}
            <div className="hero__metrics reveal reveal-delay-5" aria-label="Profile Snapshot">
              {recruiterSnapshot.map((item, idx) => (
                <div className="hero__metric-card" key={idx}>
                  <div className="hero__metric-index">{item.num}</div>
                  <div className="hero__metric-info">
                    <span className="hero__metric-value">{item.value}</span>
                    <span className="hero__metric-label">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Circular Portrait with Glowing Orbit & Floating Badges */}
          <div className="hero__visual reveal reveal-delay-2">
            <div className="hero__stage">
              {/* Subtle Tech Dot Matrix Aura */}
              <div className="hero__dot-matrix" aria-hidden="true"></div>

              {/* Glowing Concentric Halo */}
              <div className="hero__halo-glow" aria-hidden="true"></div>

              {/* Orbital Ring Accent */}
              <div className="hero__orbital-ring" aria-hidden="true"></div>

              {/* Main Circular Portrait Container */}
              <div className="hero__portrait-container">
                <div className="hero__portrait-ring">
                  <img
                    src="/assets/faizan-profile.jpg?v=20261018"
                    alt="Faizan Khatib — Full Stack Python Developer"
                    className="hero__portrait-img"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width="400"
                    height="400"
                  />
                  <div className="hero__portrait-overlay" aria-hidden="true"></div>
                </div>
              </div>

              {/* Floating Technology Badges */}
              {/* Badge 1: Python Developer (Top Right) */}
              <div className="hero__floating-badge hero__floating-badge--python">
                <span className="hero__badge-icon">
                  <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden="true">
                    <path fill="url(#python-blue)" d="M63.7 2.1c-16.1 0-25.2 7-25.2 16.3v12h25.7v3.7H29.1c-9.3 0-17.5 5.6-20.1 16.1-3 12.1-3.1 19.6 0 32.2 2.3 9.4 7.8 16.1 17.1 16.1h9.8v-13.4c0-9.8 8.4-18.4 18.2-18.4h25.5c8.1 0 14.7-6.8 14.7-15V18.4c0-9.4-9.3-16.3-25.2-16.3H63.7zm-13.8 9.8c2.8 0 5 2.3 5 5s-2.2 5-5 5-5-2.2-5-5c0-2.7 2.2-5 5-5z" />
                    <path fill="url(#python-yellow)" d="M64.3 125.9c16.1 0 25.2-7 25.2-16.3v-12H63.8v-3.7h35.1c9.3 0 17.5-5.6 20.1-16.1 3-12.1 3.1-19.6 0-32.2-2.3-9.4-7.8-16.1-17.1-16.1H112v13.4c0 9.8-8.4 18.4-18.2 18.4H68.3c-8.1 0-14.7 6.8-14.7 15v31.6c0 9.4 9.3 16.3 25.2 16.3h-14.5zm13.8-9.8c-2.8 0-5-2.3-5-5s2.2-5 5-5 5 2.2 5 5c0 2.7-2.2 5-5 5z" />
                    <defs>
                      <linearGradient id="python-blue" x1="10%" y1="10%" x2="90%" y2="90%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#0284c7" />
                      </linearGradient>
                      <linearGradient id="python-yellow" x1="10%" y1="10%" x2="90%" y2="90%">
                        <stop offset="0%" stopColor="#fde047" />
                        <stop offset="100%" stopColor="#eab308" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="hero__badge-text">Python Developer</span>
              </div>

              {/* Badge 2: React (Left Center) */}
              <div className="hero__floating-badge hero__floating-badge--react">
                <span className="hero__badge-icon">
                  <svg viewBox="-11.5 -10.232 23 20.463" width="20" height="20" aria-hidden="true">
                    <circle cx="0" cy="0" r="2.05" fill="#38bdf8"/>
                    <g stroke="#38bdf8" strokeWidth="1" fill="none">
                      <ellipse rx="11" ry="4.2"/>
                      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                    </g>
                  </svg>
                </span>
                <span className="hero__badge-text">React</span>
              </div>

              {/* Badge 3: Node.js (Bottom Right) */}
              <div className="hero__floating-badge hero__floating-badge--node">
                <span className="hero__badge-icon">
                  <svg viewBox="0 0 128 128" width="20" height="20" aria-hidden="true">
                    <path fill="#22c55e" d="M64 4.5 9.8 35.8v62.6L64 129.8l54.2-31.3V35.8L64 4.5z"/>
                    <text x="64" y="80" fill="#ffffff" fontSize="46" fontWeight="bold" fontFamily="system-ui, sans-serif" textAnchor="middle">JS</text>
                  </svg>
                </span>
                <span className="hero__badge-text">Node.js</span>
              </div>

              {/* Badge 4: Next.js (Bottom Center) */}
              <div className="hero__floating-badge hero__floating-badge--next">
                <span className="hero__badge-icon">
                  <svg viewBox="0 0 128 128" width="18" height="18" aria-hidden="true">
                    <circle cx="64" cy="64" r="60" fill="#000000" stroke="rgba(255,255,255,0.25)" strokeWidth="4"/>
                    <path fill="#ffffff" d="M44 38h9l30 40V38h8v52h-8.5L52.5 49V90H44V38z"/>
                  </svg>
                </span>
                <span className="hero__badge-text">Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
