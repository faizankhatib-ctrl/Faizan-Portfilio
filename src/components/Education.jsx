const education = [
  {
    degree: 'B.Tech in Computer Technology',
    institution: 'Ahinsa Institute of Technology, Dondaicha, Maharashtra',
    period: '2023 — 2027',
    icon: '🎓',
  },
  {
    degree: 'HSC (12th), Maharashtra State Board',
    institution: 'Percentage: 72.00%',
    period: '2023',
    icon: '📜',
  },
  {
    degree: 'SSC (10th), Maharashtra State Board',
    institution: 'Percentage: 70.40%',
    period: '2021',
    icon: '📜',
  },
];

const certifications = [
  {
    title: 'Web Development Course',
    issuer: 'Internshala Trainings, Scholiverse Educare Pvt. Ltd.',
    year: '2025',
  },
  {
    title: 'Machine Learning Course — Grade A',
    issuer: 'Scholiverse Educare Private Limited',
    year: '2025',
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Simplilearn SkillUp',
    year: '2026',
  },
  {
    title: 'Deep Learning for Beginners',
    issuer: 'Simplilearn SkillUp',
    year: '2026',
  },
  {
    title: 'Programming with Python 3.X',
    issuer: 'Simplilearn SkillUp',
    year: '2026',
  },
];

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="section-wrapper">
        <div className="section-label reveal">
          <span className="section-label__number">06</span>
          <span className="section-label__line"></span>
          <span className="section-label__text">Education & Certifications</span>
        </div>

        <div className="education__grid">
          <div className="education__col reveal">
            <h3 className="education__col-title">Education</h3>
            <div className="education__items">
              {education.map((edu) => (
                <div className="education__item" key={edu.degree}>
                  <span className="education__icon">{edu.icon}</span>
                  <div className="education__details">
                    <h4 className="education__degree">{edu.degree}</h4>
                    <p className="education__institution">{edu.institution}</p>
                    <span className="education__period">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education__col reveal reveal-delay-2">
            <h3 className="education__col-title">Certifications</h3>
            <div className="education__items">
              {certifications.map((cert) => (
                <div className="education__item education__item--cert" key={cert.title}>
                  <span className="education__cert-dot"></span>
                  <div className="education__details">
                    <h4 className="education__degree">{cert.title}</h4>
                    <p className="education__institution">{cert.issuer}</p>
                    <span className="education__period">{cert.year}</span>
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
