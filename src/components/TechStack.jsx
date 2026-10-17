import Icon from './Icon';

const technologies = [
  { name: 'Python', category: 'Language', icon: 'code' },
  { name: 'React.js', category: 'Frontend', icon: 'monitor' },
  { name: 'JavaScript', category: 'Language', icon: 'code' },
  { name: 'Node.js', category: 'Runtime', icon: 'server' },
  { name: 'Express.js', category: 'Backend', icon: 'server' },
  { name: 'MongoDB', category: 'NoSQL', icon: 'database' },
  { name: 'Supabase', category: 'BaaS', icon: 'database' },
  { name: 'PostgreSQL', category: 'Relational', icon: 'database' },
  { name: 'Firebase', category: 'Cloud', icon: 'database' },
  { name: 'SQL', category: 'Database', icon: 'database' },
  { name: 'Git', category: 'VCS', icon: 'wrench' },
  { name: 'GitHub', category: 'Platform', icon: 'github' },
];

export default function TechStack() {
  return (
    <section className="tech-strip" aria-label="Technologies and Tools">
      <div className="section-wrapper">
        <div className="tech-strip__header reveal">
          <span className="tech-strip__tag">TECH I BUILD WITH</span>
          <p className="tech-strip__subtitle">
            Tools and technologies I use to build modern applications.
          </p>
        </div>
      </div>

      {/* Marquee Track Container */}
      <div className="tech-strip__marquee-wrapper">
        <div className="tech-strip__fade tech-strip__fade--left" aria-hidden="true"></div>
        <div className="tech-strip__fade tech-strip__fade--right" aria-hidden="true"></div>

        <div className="tech-strip__track">
          {/* Primary Set */}
          <div className="tech-strip__group" role="list">
            {technologies.map((tech, idx) => (
              <div className="tech-strip__item" key={`primary-${tech.name}-${idx}`} role="listitem">
                <div className="tech-strip__icon-wrap" aria-hidden="true">
                  <Icon name={tech.icon} size={15} />
                </div>
                <div className="tech-strip__info">
                  <span className="tech-strip__name">{tech.name}</span>
                  <span className="tech-strip__cat">{tech.category}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate Set for Seamless Infinite Loop */}
          <div className="tech-strip__group" aria-hidden="true">
            {technologies.map((tech, idx) => (
              <div className="tech-strip__item" key={`duplicate-${tech.name}-${idx}`}>
                <div className="tech-strip__icon-wrap">
                  <Icon name={tech.icon} size={15} />
                </div>
                <div className="tech-strip__info">
                  <span className="tech-strip__name">{tech.name}</span>
                  <span className="tech-strip__cat">{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
