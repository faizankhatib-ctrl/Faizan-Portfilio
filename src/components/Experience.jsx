import Icon from './Icon';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'ITView',
    period: 'Feb 2026 — Sep 2026',
    status: 'Ongoing',
    location: 'Pune / Remote',
    type: 'Internship',
    description: [
      'Contributing to both frontend and backend modules for enterprise web applications using Java-based architectures.',
      'Gaining hands-on engineering experience in full-stack software development workflows, clean code principles, and REST API integration.',
      'Collaborating in an agile development setup to deliver tested, maintainable codebase features.',
    ],
    tags: ['Java', 'Full Stack', 'Software Engineering', 'REST APIs'],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Vier Labs',
    companyUrl: 'https://www.vierlabs.com',
    period: 'Oct 2025 — Jan 2026',
    status: 'Completed',
    location: 'Agency Client Project',
    type: 'Internship',
    description: [
      'Served as Frontend Developer on a live production client project at Vier Labs digital agency.',
      'Architected and implemented responsive UI components leveraging the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Integrated Firebase and Firestore for real-time data persistence, authentication, and state synchronization.',
      'Collaborated directly with senior engineers and agency stakeholders to meet milestone release schedules.',
    ],
    tags: ['React.js', 'MERN Stack', 'Firebase', 'Firestore', 'UI Architecture'],
  },
  {
    role: 'Web Development Intern',
    company: 'Codveda Technologies',
    companyUrl: 'https://www.codveda.com',
    period: 'Aug 2025 — Sep 2025',
    status: 'Completed',
    location: 'Remote',
    type: 'Internship',
    description: [
      'Engineered and maintained core frontend and backend components for client web projects.',
      'Applied modern web fundamentals across HTML5, CSS3, JavaScript ES6+, and Python scripting.',
      'Delivered modular code components and resolved cross-browser responsiveness challenges.',
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Web Dev'],
  },
];

export default function Experience() {
  return (
    <section className="experience section-spacing" id="experience">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="section-tag__num">03</span>
            <span className="section-tag__label">Work History</span>
          </div>
          <h2 className="section-title">
            Internships & <span className="text-accent">practical experience</span>.
          </h2>
          <p className="section-subtitle">
            Hands-on software development across agencies, startups, and full-stack engineering programs.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="experience__timeline">
          <div className="experience__timeline-line" aria-hidden="true"></div>

          {experiences.map((exp, index) => (
            <div
              className={`experience__item reveal reveal-delay-${index + 1}`}
              key={exp.company}
            >
              {/* Timeline Node */}
              <div className="experience__node">
                <span className={`experience__node-dot ${exp.status === 'Ongoing' ? 'experience__node-dot--active' : ''}`}>
                  {exp.status === 'Ongoing' && <span className="experience__node-ping"></span>}
                </span>
              </div>

              {/* Experience Card */}
              <div className="experience__card">
                <div className="experience__card-header">
                  <div className="experience__card-heading-group">
                    <div className="experience__badge-row">
                      <span className="experience__type-badge">{exp.type}</span>
                      {exp.status === 'Ongoing' ? (
                        <span className="experience__status-pill experience__status-pill--active">
                          <span className="experience__status-dot"></span>
                          Ongoing
                        </span>
                      ) : (
                        <span className="experience__status-pill">
                          Completed
                        </span>
                      )}
                    </div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <div className="experience__company-row">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience__company-link"
                          aria-label={`${exp.company} website`}
                        >
                          <span className="experience__company-name">{exp.company}</span>
                          <Icon name="externalLink" size={13} />
                        </a>
                      ) : (
                        <span className="experience__company-name">{exp.company}</span>
                      )}
                      <span className="experience__location-dot">•</span>
                      <span className="experience__location">{exp.location}</span>
                    </div>
                  </div>

                  <div className="experience__period-badge">
                    <Icon name="calendar" size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description List */}
                <ul className="experience__list">
                  {exp.description.map((item, i) => (
                    <li key={i} className="experience__list-item">
                      <span className="experience__arrow" aria-hidden="true">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="experience__tags">
                  {exp.tags.map((tag) => (
                    <span className="experience__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
