import Icon from './Icon';

const educationData = [
  {
    degree: 'B.Tech in Computer Technology',
    institution: 'Ahinsa Institute of Technology, Dondaicha, Maharashtra',
    period: '2023 — 2027',
    status: 'In Progress',
    iconName: 'graduationCap',
    highlight: 'Software Engineering, Data Structures, Web Systems & Computing',
  },
  {
    degree: 'Higher Secondary Certificate (12th HSC)',
    institution: 'Maharashtra State Board',
    period: '2021 — 2023',
    status: 'Completed',
    iconName: 'bookOpen',
    highlight: 'Final Score: 72.00%',
  },
  {
    degree: 'Secondary School Certificate (10th SSC)',
    institution: 'Maharashtra State Board',
    period: '2020 — 2021',
    status: 'Completed',
    iconName: 'bookOpen',
    highlight: 'Final Score: 70.40%',
  },
];

const certificationsData = [
  {
    title: 'Web Development Course',
    issuer: 'Internshala Trainings, Scholiverse Educare',
    year: '2025',
    category: 'Web Dev',
  },
  {
    title: 'Machine Learning Course — Grade A',
    issuer: 'Scholiverse Educare Private Limited',
    year: '2025',
    category: 'AI / ML',
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Simplilearn SkillUp',
    year: '2026',
    category: 'Data Science',
  },
  {
    title: 'Deep Learning for Beginners',
    issuer: 'Simplilearn SkillUp',
    year: '2026',
    category: 'Deep Learning',
  },
  {
    title: 'Programming with Python 3.X',
    issuer: 'Simplilearn SkillUp',
    year: '2026',
    category: 'Python',
  },
];

export default function Education() {
  return (
    <section className="education section-spacing" id="education">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="section-tag__num">06</span>
            <span className="section-tag__label">Academic Foundation</span>
          </div>
          <h2 className="section-title">
            Education & <span className="text-accent">certifications</span>.
          </h2>
          <p className="section-subtitle">
            Formal computer technology education and continuous self-driven technical specializations.
          </p>
        </div>

        {/* Dual Column Layout */}
        <div className="education__grid">
          {/* Formal Degree & Schooling */}
          <div className="education__col reveal">
            <div className="education__col-header">
              <div className="education__col-icon">
                <Icon name="graduationCap" size={20} />
              </div>
              <h3 className="education__col-title">Degree & Schooling</h3>
            </div>

            <div className="education__cards-list">
              {educationData.map((item, idx) => (
                <div className="education__card" key={idx}>
                  <div className="education__card-header">
                    <div className="education__card-badge-row">
                      <span className="education__period-badge">{item.period}</span>
                      <span className={`education__status-badge ${item.status === 'In Progress' ? 'education__status-badge--active' : ''}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <h4 className="education__degree-title">{item.degree}</h4>
                  <p className="education__institution-name">{item.institution}</p>
                  <p className="education__highlight-text">{item.highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Certifications */}
          <div className="education__col reveal reveal-delay-2">
            <div className="education__col-header">
              <div className="education__col-icon">
                <Icon name="award" size={20} />
              </div>
              <h3 className="education__col-title">Professional Certifications</h3>
            </div>

            <div className="education__cert-list">
              {certificationsData.map((cert, idx) => (
                <div className="education__cert-item" key={idx}>
                  <div className="education__cert-dot-col">
                    <span className="education__cert-dot"></span>
                  </div>
                  <div className="education__cert-body">
                    <div className="education__cert-header">
                      <h4 className="education__cert-title">{cert.title}</h4>
                      <span className="education__cert-year">{cert.year}</span>
                    </div>
                    <p className="education__cert-issuer">{cert.issuer}</p>
                    <span className="education__cert-badge">{cert.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
