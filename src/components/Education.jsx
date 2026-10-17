import Icon from './Icon';

const educationData = [
  {
    index: '01',
    degree: 'B.Tech in Computer Technology',
    institution: 'Ahinsa Institute of Technology, Dondaicha, Maharashtra',
    period: '2023 — 2027',
    cohort: '2027 COHORT',
    status: 'In Progress',
    statusLabel: 'CURRENT',
    highlight: 'Software Engineering, Data Structures, Web Systems & Computing',
    primary: true,
  },
  {
    index: '02',
    degree: 'Higher Secondary Certificate (12th HSC)',
    institution: 'Maharashtra State Board',
    period: '2021 — 2023',
    status: 'Completed',
    statusLabel: 'COMPLETED',
    highlight: 'Final Score: 72.00%',
    primary: false,
  },
  {
    index: '03',
    degree: 'Secondary School Certificate (10th SSC)',
    institution: 'Maharashtra State Board',
    period: '2020 — 2021',
    status: 'Completed',
    statusLabel: 'COMPLETED',
    highlight: 'Final Score: 70.40%',
    primary: false,
  },
];

const certificationsData = [
  {
    title: 'Full Stack Python Training',
    issuer: 'ITVIEW Inspired Learning',
    year: 'Feb — Aug 2026',
    category: 'Full Stack',
  },
  {
    title: 'Web Development Course',
    issuer: 'Internshala Trainings, Scholiverse Educare Pvt. Ltd.',
    year: '2025',
    category: 'Web Dev',
  },
  {
    title: 'Machine Learning Course — Grade A',
    issuer: 'Scholiverse Educare Pvt. Ltd.',
    year: '2025',
    category: 'AI / ML',
  },
];

export default function Education() {
  return (
    <section className="education section-spacing" id="education" aria-label="Education and Certifications">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="section-tag__num">06</span>
            <span className="section-tag__label">EDUCATION & CREDENTIALS</span>
          </div>
          <h2 className="section-title">
            Building the <span className="text-accent">foundation</span>.
          </h2>
          <p className="section-subtitle">
            Academic foundations backed by practical software engineering experience.
          </p>
        </div>

        {/* 2-Column Academic & Certifications Layout */}
        <div className="education__layout">
          {/* Left Column: Academic Timeline */}
          <div className="education__timeline-col reveal">
            <div className="education__column-header">
              <div className="education__column-tag">
                <span className="education__column-kicker font-mono">ACADEMIC JOURNEY</span>
              </div>
              <h3 className="education__column-title">Degree & Schooling</h3>
            </div>

            <div className="education__timeline">
              <div className="education__timeline-line" aria-hidden="true"></div>

              {educationData.map((item) => (
                <article
                  key={item.index}
                  className={`education__timeline-item ${
                    item.primary ? 'education__timeline-item--primary' : ''
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="education__node-col">
                    <span className="education__node-num font-mono">{item.index}</span>
                    <div className="education__node-dot-wrapper">
                      <span
                        className={`education__node-dot ${
                          item.primary ? 'education__node-dot--active' : ''
                        }`}
                      >
                        {item.primary && (
                          <span className="education__node-ping" aria-hidden="true"></span>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Academic Card */}
                  <div
                    className={`education__card ${
                      item.primary ? 'education__card--primary' : ''
                    }`}
                  >
                    <div className="education__card-top">
                      <div className="education__period-wrap font-mono">
                        <Icon name="calendar" size={12} className="text-accent" />
                        <span>{item.period}</span>
                      </div>

                      <div className="education__badges-row">
                        {item.cohort && (
                          <span className="education__cohort-badge font-mono">
                            {item.cohort}
                          </span>
                        )}
                        <span
                          className={`education__status-badge font-mono ${
                            item.primary ? 'education__status-badge--active' : ''
                          }`}
                        >
                          {item.statusLabel}
                        </span>
                      </div>
                    </div>

                    <h4 className="education__degree-title">{item.degree}</h4>
                    <p className="education__institution-name">{item.institution}</p>

                    {item.highlight && (
                      <div className="education__highlight-box">
                        <span className="education__highlight-arrow" aria-hidden="true">▹</span>
                        <span className="education__highlight-text">{item.highlight}</span>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="education__certs-col reveal reveal-delay-2">
            <div className="education__column-header">
              <div className="education__column-tag">
                <span className="education__column-kicker font-mono">CONTINUOUS LEARNING</span>
              </div>
              <div className="education__certs-header-row">
                <h3 className="education__column-title">Certifications</h3>
                <span className="education__certs-count font-mono">03 CREDENTIALS</span>
              </div>
            </div>

            <div className="education__certs-list" role="list" aria-label="Professional Certifications">
              {certificationsData.map((cert, idx) => (
                <article className="education__cert-card" key={idx} role="listitem">
                  <div className="education__cert-top-row">
                    <span className="education__cert-badge font-mono">{cert.category}</span>
                    <span className="education__cert-year font-mono">{cert.year}</span>
                  </div>

                  <h4 className="education__cert-title">{cert.title}</h4>
                  <p className="education__cert-issuer font-mono">{cert.issuer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
