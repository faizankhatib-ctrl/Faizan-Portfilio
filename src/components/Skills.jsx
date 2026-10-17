import Icon from './Icon';

const capabilityGroups = [
  {
    index: '01',
    kicker: '01 / PROGRAMMING & WEB',
    title: 'Programming & Web Languages',
    description: 'Core languages for building web applications and backend systems.',
    skills: [
      { name: 'Python', icon: 'code', focus: 'Backend & Scripting' },
      { name: 'JavaScript', icon: 'code', focus: 'ES6+ & Modern Web' },
      { name: 'HTML5', icon: 'monitor', focus: 'Semantic Markup' },
      { name: 'CSS3', icon: 'monitor', focus: 'Styling & Layouts' },
      { name: 'SQL', icon: 'database', focus: 'Relational Queries' },
    ],
  },
  {
    index: '02',
    kicker: '02 / FRONTEND',
    title: 'Frontend Development',
    description: 'Component architecture, responsive layouts, and modern web standards.',
    skills: [
      { name: 'React.js', icon: 'monitor', focus: 'Component Architecture & Hooks' },
      { name: 'Tailwind CSS', icon: 'monitor', focus: 'Utility-First Styling' },
      { name: 'Responsive Web Design', icon: 'monitor', focus: 'Mobile-First Layouts' },
      { name: 'Progressive Web Apps', icon: 'globe', focus: 'Offline & Performance' },
    ],
  },
  {
    index: '03',
    kicker: '03 / BACKEND',
    title: 'Backend & APIs',
    description: 'Server architectures, RESTful API routing, and full-stack runtime layers.',
    skills: [
      { name: 'Node.js', icon: 'server', focus: 'Asynchronous Event Runtime' },
      { name: 'Express.js', icon: 'server', focus: 'RESTful API Routing & Middleware' },
      { name: 'REST APIs', icon: 'server', focus: 'API Design & Integration' },
      { name: 'Python Backend', icon: 'code', focus: 'Flask & FastAPI' },
    ],
  },
  {
    index: '04',
    kicker: '04 / DATABASES',
    title: 'Databases & Backend Services',
    description: 'Document storage, relational schemas, and cloud backend services.',
    skills: [
      { name: 'MongoDB', icon: 'database', focus: 'Document Storage & Aggregation' },
      { name: 'Supabase', icon: 'database', focus: 'PostgreSQL & Auth Services' },
      { name: 'Firebase', icon: 'database', focus: 'Cloud Auth & Realtime Sync' },
      { name: 'Firestore', icon: 'database', focus: 'NoSQL Cloud Collections' },
      { name: 'SQL Databases', icon: 'database', focus: 'Relational Schemas & Queries' },
    ],
  },
  {
    index: '05',
    kicker: '05 / TOOLS & DEPLOYMENT',
    title: 'Tools & Deployment',
    description: 'Version control, development tools, and cloud deployment platforms.',
    skills: [
      { name: 'Git', icon: 'wrench', focus: 'Version Control & Branching' },
      { name: 'GitHub', icon: 'github', focus: 'Repository Management' },
      { name: 'Postman', icon: 'wrench', focus: 'API Testing & Documentation' },
      { name: 'VS Code', icon: 'wrench', focus: 'Primary Development IDE' },
      { name: 'Vercel', icon: 'globe', focus: 'Frontend Deployment' },
      { name: 'Render', icon: 'server', focus: 'Backend Deployment' },
      { name: 'Netlify', icon: 'globe', focus: 'Static Site Deployment' },
    ],
  },
  {
    index: '06',
    kicker: '06 / ADDITIONAL',
    title: 'Additional Skills',
    description: 'Problem-solving practices and development methodologies.',
    skills: [
      { name: 'API Validation & Error Handling', icon: 'code', focus: 'Robust Error Management' },
      { name: 'Authentication & Authorization', icon: 'server', focus: 'OAuth, JWT & Session Auth' },
      { name: 'Debugging', icon: 'wrench', focus: 'Systematic Issue Resolution' },
      { name: 'Problem-Solving', icon: 'cpu', focus: 'Analytical Thinking' },
      { name: 'AI-Assisted Development', icon: 'cpu', focus: 'Productivity Enhancement' },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills section-spacing" id="skills" aria-label="Technical Skills and Capabilities">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="section-tag__num">02</span>
            <span className="section-tag__label">TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="section-title">
            Tools I build <span className="text-accent">with</span>.
          </h2>
          <p className="section-subtitle">
            A practical stack spanning frontend, backend, databases, programming languages, and developer tooling.
          </p>
        </div>

        {/* Engineering Capability Map Grid */}
        <div className="skills__capability-grid">
          {capabilityGroups.map((group, gIdx) => {
            const isWide = group.index === '05' || group.index === '06';

            return (
              <article
                key={group.index}
                className={`skills__capability-card reveal reveal-delay-${(gIdx % 3) + 1} ${
                  isWide ? 'skills__capability-card--wide' : ''
                }`}
              >
                {/* Card Header */}
                <div className="skills__capability-header">
                  <div className="skills__capability-meta-top">
                    <span className="skills__capability-kicker font-mono">{group.kicker}</span>
                    <span className="skills__capability-count font-mono">
                      {group.skills.length} SKILLS
                    </span>
                  </div>
                  <h3 className="skills__capability-title">{group.title}</h3>
                  <p className="skills__capability-desc">{group.description}</p>
                </div>

                {/* Skill Chips */}
                <div
                  className={`skills__chips-container ${
                    isWide ? 'skills__chips-container--grid' : ''
                  }`}
                  role="list"
                  aria-label={`${group.title} Skills`}
                >
                  {group.skills.map((skill) => (
                    <div className="skills__chip" key={skill.name} role="listitem">
                      <div className="skills__chip-icon" aria-hidden="true">
                        <Icon name={skill.icon} size={15} />
                      </div>
                      <div className="skills__chip-text">
                        <span className="skills__chip-name">{skill.name}</span>
                        <span className="skills__chip-focus">{skill.focus}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Technical Footer Indicator */}
        <div className="skills__footer-indicator reveal reveal-delay-2">
          <span className="skills__footer-dot" aria-hidden="true"></span>
          <span className="font-mono">
            STACK EVOLVING THROUGH PROJECTS, INTERNSHIPS & RESEARCH
          </span>
        </div>
      </div>
    </section>
  );
}
