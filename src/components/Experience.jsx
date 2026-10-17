import Icon from './Icon';

const experiences = [
  {
    index: '01',
    role: 'Frontend Developer Intern',
    company: 'Vier Labs',
    companyUrl: 'https://www.vierlabs.com',
    period: 'Oct 2025 — Jan 2026',
    status: 'Completed',
    statusLabel: 'COMPLETED',
    location: 'Agency Client Project',
    description: [
      'Developed frontend components for a live client project.',
      'Built UI components using MongoDB, Express.js, React.js, and Node.js (MERN Stack).',
      'Integrated Firebase and Firestore for real-time data functionality.',
    ],
    tags: ['React.js', 'Node.js', 'MERN', 'Firebase', 'Firestore'],
  },
  {
    index: '02',
    role: 'Web Development Intern',
    company: 'Codveda Technologies',
    companyUrl: 'https://www.codveda.com',
    period: 'Aug 2025 — Sep 2025',
    status: 'Completed',
    statusLabel: 'COMPLETED',
    location: 'Remote',
    description: [
      'Worked on frontend and backend components for web-based projects.',
      'Improved practical skills in HTML, CSS, JavaScript, and Python.',
      'Contributed to live project modules.',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Python'],
  },
];

const training = {
  index: '03',
  role: 'Full Stack Python Training',
  company: 'ITVIEW Inspired Learning',
  period: 'Feb 2026 — Aug 2026',
  status: 'Completed',
  statusLabel: 'TRAINING',
  location: 'Structured Program',
  description: [
    'Completed intensive full stack Python training program.',
    'Covered Python backend development, web frameworks, and project-based learning.',
  ],
  tags: ['Python', 'Full Stack', 'Web Development'],
};

export default function Experience() {
  return (
    <section className="experience section-spacing" id="experience" aria-label="Work Experience">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="section-tag__num">03</span>
            <span className="section-tag__label">WHERE I HAVE BUILT</span>
          </div>
          <h2 className="section-title">
            Experience
          </h2>
          <p className="section-subtitle">
            Hands-on development experience across frontend architectures, web systems, and full-stack training.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="experience__timeline">
          <div className="experience__timeline-line" aria-hidden="true"></div>

          {experiences.map((exp, index) => {
            const isOngoing = exp.status === 'Ongoing';
            return (
              <div
                className={`experience__item reveal reveal-delay-${index + 1} ${isOngoing ? 'experience__item--ongoing' : ''}`}
                key={exp.company}
              >
                {/* Timeline Node Column */}
                <div className="experience__node-col">
                  <span className="experience__node-index" aria-hidden="true">{exp.index}</span>
                  <div className="experience__node">
                    <span className={`experience__node-dot ${isOngoing ? 'experience__node-dot--active' : ''}`}>
                      {isOngoing && <span className="experience__node-ping" aria-hidden="true"></span>}
                    </span>
                  </div>
                </div>

                {/* Experience Card */}
                <article className={`experience__card ${isOngoing ? 'experience__card--ongoing' : ''}`}>
                  {/* Card Top Header */}
                  <div className="experience__card-top">
                    <div className="experience__card-heading-group">
                      <div className="experience__company-row">
                        <span className="experience__company-kicker">COMPANY</span>
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="experience__company-link"
                            aria-label={`Visit ${exp.company} website`}
                          >
                            <span className="experience__company-name">{exp.company}</span>
                            <Icon name="externalLink" size={12} className="experience__company-icon" />
                          </a>
                        ) : (
                          <span className="experience__company-name">{exp.company}</span>
                        )}
                      </div>
                      <h3 className="experience__role">{exp.role}</h3>
                    </div>

                    <div className="experience__status-wrapper">
                      <span className={`experience__status-pill ${isOngoing ? 'experience__status-pill--active' : 'experience__status-pill--completed'}`}>
                        {isOngoing && <span className="experience__status-dot" aria-hidden="true"></span>}
                        {exp.statusLabel}
                      </span>
                    </div>
                  </div>

                  {/* Metadata Row: Period & Location */}
                  <div className="experience__meta-row">
                    <div className="experience__meta-chip">
                      <Icon name="calendar" size={13} className="experience__meta-icon text-accent" />
                      <span className="experience__meta-val font-mono">{exp.period}</span>
                    </div>
                    <div className="experience__meta-chip">
                      <Icon name="mapPin" size={13} className="experience__meta-icon text-muted" />
                      <span className="experience__meta-val">{exp.location}</span>
                    </div>
                  </div>

                  {/* Description Bullet Points */}
                  <ul className="experience__list" role="list">
                    {exp.description.map((item, i) => (
                      <li key={i} className="experience__list-item">
                        <span className="experience__arrow" aria-hidden="true">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Tags */}
                  <div className="experience__tags" aria-label={`Technologies used at ${exp.company}`}>
                    {exp.tags.map((tag) => (
                      <span className="experience__tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            );
          })}

          {/* Training Entry */}
          <div className="experience__item reveal reveal-delay-3">
            <div className="experience__node-col">
              <span className="experience__node-index" aria-hidden="true">{training.index}</span>
              <div className="experience__node">
                <span className="experience__node-dot"></span>
              </div>
            </div>

            <article className="experience__card">
              <div className="experience__card-top">
                <div className="experience__card-heading-group">
                  <div className="experience__company-row">
                    <span className="experience__company-kicker">TRAINING</span>
                    <span className="experience__company-name">{training.company}</span>
                  </div>
                  <h3 className="experience__role">{training.role}</h3>
                </div>

                <div className="experience__status-wrapper">
                  <span className="experience__status-pill experience__status-pill--completed">
                    {training.statusLabel}
                  </span>
                </div>
              </div>

              <div className="experience__meta-row">
                <div className="experience__meta-chip">
                  <Icon name="calendar" size={13} className="experience__meta-icon text-accent" />
                  <span className="experience__meta-val font-mono">{training.period}</span>
                </div>
                <div className="experience__meta-chip">
                  <Icon name="mapPin" size={13} className="experience__meta-icon text-muted" />
                  <span className="experience__meta-val">{training.location}</span>
                </div>
              </div>

              <ul className="experience__list" role="list">
                {training.description.map((item, i) => (
                  <li key={i} className="experience__list-item">
                    <span className="experience__arrow" aria-hidden="true">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="experience__tags" aria-label="Technologies from training">
                {training.tags.map((tag) => (
                  <span className="experience__tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
