import { useState } from 'react';
import Icon from './Icon';

const categories = [
  { id: 'all', label: 'All Technologies', icon: 'grid' },
  { id: 'frontend', label: 'Frontend', icon: 'monitor' },
  { id: 'backend', label: 'Backend', icon: 'server' },
  { id: 'database', label: 'Database & Cloud', icon: 'database' },
  { id: 'programming', label: 'Programming', icon: 'code' },
  { id: 'tools', label: 'Tools & IDEs', icon: 'wrench' },
];

const skillsData = [
  // Programming Languages
  { name: 'Java', category: 'programming', icon: 'code', description: 'Enterprise backend & OOP' },
  { name: 'Python', category: 'programming', icon: 'code', description: 'Scripting, Data & ML' },
  { name: 'JavaScript', category: 'programming', icon: 'code', description: 'Modern ES6+ development' },
  { name: 'C', category: 'programming', icon: 'code', description: 'System fundamentals' },
  { name: 'C++', category: 'programming', icon: 'code', description: 'Data structures & algorithms' },

  // Frontend
  { name: 'React.js', category: 'frontend', icon: 'monitor', description: 'Component-driven UI' },
  { name: 'JavaScript (Frontend)', category: 'frontend', icon: 'code', description: 'Interactive DOM & state' },
  { name: 'HTML5', category: 'frontend', icon: 'monitor', description: 'Semantic structure' },
  { name: 'CSS3', category: 'frontend', icon: 'monitor', description: 'Responsive layouts & styling' },

  // Backend
  { name: 'Node.js', category: 'backend', icon: 'server', description: 'Event-driven server runtime' },
  { name: 'Express.js', category: 'backend', icon: 'server', description: 'RESTful API architecture' },
  { name: 'MERN Stack', category: 'backend', icon: 'layers', description: 'Full-stack application stack' },
  { name: 'Java Full Stack', category: 'backend', icon: 'server', description: 'Server-side application logic' },

  // Database & Cloud
  { name: 'MongoDB', category: 'database', icon: 'database', description: 'NoSQL document database' },
  { name: 'Firebase', category: 'database', icon: 'database', description: 'Real-time database & auth' },
  { name: 'Firestore', category: 'database', icon: 'database', description: 'Cloud document storage' },

  // Tools & IDEs
  { name: 'Git', category: 'tools', icon: 'wrench', description: 'Version control system' },
  { name: 'GitHub', category: 'tools', icon: 'github', description: 'Collaboration & workflows' },
  { name: 'VS Code', category: 'tools', icon: 'wrench', description: 'Primary development IDE' },
  { name: 'IntelliJ IDEA', category: 'tools', icon: 'wrench', description: 'Java IDE' },
  { name: 'PyCharm', category: 'tools', icon: 'wrench', description: 'Python IDE' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section className="skills section-spacing" id="skills">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="section-tag__num">02</span>
            <span className="section-tag__label">Skills & Stack</span>
          </div>
          <h2 className="section-title">
            Technologies & Tools in my <span className="text-accent">toolkit</span>.
          </h2>
          <p className="section-subtitle">
            Curated stack developed through real internship projects, coursework, and practical development.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills__tabs reveal reveal-delay-1" role="tablist" aria-label="Technology Categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`skills__tab-btn ${activeCategory === cat.id ? 'skills__tab-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <Icon name={cat.icon} size={16} />
              <span>{cat.label}</span>
              <span className="skills__tab-count">
                {cat.id === 'all'
                  ? skillsData.length
                  : skillsData.filter((s) => s.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills__grid" role="tabpanel">
          {filteredSkills.map((skill, idx) => (
            <div
              key={skill.name}
              className="skills__card reveal"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <div className="skills__card-icon-wrap">
                <Icon name={skill.icon} size={22} />
              </div>
              <div className="skills__card-content">
                <h3 className="skills__card-name">{skill.name}</h3>
                <p className="skills__card-desc">{skill.description}</p>
              </div>
              <div className="skills__card-badge">
                {skill.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
