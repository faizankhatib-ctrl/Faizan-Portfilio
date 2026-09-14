import Icon from './Icon';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'ITView',
    period: 'Feb 2026 — Sep 2026',
    status: 'Ongoing',
    description: [
      'Working as a Full Stack Developer Intern, contributing to both front-end and back-end development using Java-based technologies.',
      'Gaining hands-on experience in full-stack application development and software engineering practices as part of a structured internship program.',
    ],
    tags: ['Java', 'Full Stack', 'Software Engineering'],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Vier Labs',
    companyUrl: 'https://www.vierlabs.com',
    period: 'Oct 2025 — Jan 2026',
    description: [
      'Worked as a Frontend Developer on a live client project at Vier Labs, an agency, responsible for developing front-end components.',
      'Built and implemented UI components using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Integrated Firebase and Firestore for real-time database functionality and data management within the application.',
      'Collaborated with the agency\'s development team to deliver production-ready features on schedule.',
    ],
    tags: ['React.js', 'MERN Stack', 'Firebase', 'Firestore'],
  },
  {
    role: 'Web Development Intern',
    company: 'Codveda Technologies',
    companyUrl: 'https://www.codveda.com',
    period: 'Aug 2025 — Sep 2025',
    description: [
      'Completed a one-month internship in Web Development at Codveda Technologies.',
      'Worked on developing and maintaining front-end and back-end components for web-based projects.',
      'Enhanced skills in HTML, CSS, JavaScript, and Python while contributing to live project modules.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-wrapper">
        <div className="section-label reveal">
          <span className="section-label__number">03</span>
          <span className="section-label__line"></span>
          <span className="section-label__text">Experience</span>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, i) => (
            <div className={`experience__item reveal reveal-delay-${i + 1}`} key={exp.company}>
              <div className="experience__dot-line">
                <div className="experience__dot"></div>
                {i < experiences.length - 1 && <div className="experience__line"></div>}
              </div>

              <div className="experience__card">
                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <div className="experience__company-row">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience__company experience__company--link"
                        >
                          {exp.company}
                          <Icon name="externalLink" size={14} />
                        </a>
                      ) : (
                        <span className="experience__company">{exp.company}</span>
                      )}
                    </div>
                  </div>
                  <div className="experience__meta">
                    <span className="experience__period">{exp.period}</span>
                    {exp.status && (
                      <span className="experience__status">
                        <span className="experience__status-dot"></span>
                        {exp.status}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="experience__list">
                  {exp.description.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>

                <div className="experience__tags">
                  {exp.tags.map((tag) => (
                    <span className="experience__tag" key={tag}>{tag}</span>
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
