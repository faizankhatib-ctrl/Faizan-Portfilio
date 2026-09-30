import { useState } from 'react';
import Icon from './Icon';

const skillCategories = [
  { id: 'all', label: 'All Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'languages', label: 'Languages' },
  { id: 'database', label: 'Database & Cloud' },
  { id: 'tools', label: 'Tools' },
];

const skillsData = [
  // Languages
  { name: 'Java', category: 'languages', icon: 'code', focus: 'Enterprise & OOP' },
  { name: 'Python', category: 'languages', icon: 'code', focus: 'Scripting & APIs' },
  { name: 'JavaScript', category: 'languages', icon: 'code', focus: 'ES6+ & Modern Web' },
  { name: 'C', category: 'languages', icon: 'code', focus: 'System Fundamentals' },
  { name: 'C++', category: 'languages', icon: 'code', focus: 'Data Structures & Algorithms' },

  // Frontend
  { name: 'React.js', category: 'frontend', icon: 'monitor', focus: 'Component Architecture & Hooks' },
  { name: 'JavaScript (Frontend)', category: 'frontend', icon: 'code', focus: 'DOM & State Management' },
  { name: 'HTML5', category: 'frontend', icon: 'monitor', focus: 'Semantic & Accessible Markup' },
  { name: 'CSS3', category: 'frontend', icon: 'monitor', focus: 'Flexbox, Grid & Animations' },

  // Backend
  { name: 'Node.js', category: 'backend', icon: 'server', focus: 'Asynchronous Event Runtime' },
  { name: 'Express.js', category: 'backend', icon: 'server', focus: 'RESTful API Routing & Middleware' },
  { name: 'MERN Stack', category: 'backend', icon: 'layers', focus: 'End-to-End Web Architecture' },
  { name: 'Java Full Stack', category: 'backend', icon: 'server', focus: 'Backend Business Logic' },
  { name: 'REST APIs', category: 'backend', icon: 'server', focus: 'JSON API Design & Auth' },

  // Database & Cloud
  { name: 'MongoDB', category: 'database', icon: 'database', focus: 'Document Storage & Aggregation' },
  { name: 'Firebase', category: 'database', icon: 'database', focus: 'Cloud Auth & Realtime Sync' },
  { name: 'Firestore', category: 'database', icon: 'database', focus: 'NoSQL Cloud Collections' },
  { name: 'SQL / PostgreSQL', category: 'database', icon: 'database', focus: 'Relational Schemas & Queries' },

  // Tools
  { name: 'Git', category: 'tools', icon: 'wrench', focus: 'Version Control & Branching' },
  { name: 'GitHub', category: 'tools', icon: 'github', focus: 'CI/CD & Repository Management' },
  { name: 'VS Code', category: 'tools', icon: 'wrench', focus: 'Primary Development IDE' },
  { name: 'IntelliJ IDEA', category: 'tools', icon: 'wrench', focus: 'Java & Enterprise Workflows' },
  { name: 'PyCharm', category: 'tools', icon: 'wrench', focus: 'Python Environment' },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeTab);

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
            Technologies & tools in my <span className="text-accent">toolkit</span>.
          </h2>
          <p className="section-subtitle">
            Curated technical skills built through real internships, software coursework, and practical development.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills__tabs reveal reveal-delay-1" role="tablist" aria-label="Skills Category Filters">
          {skillCategories.map((cat) => {
            const count = cat.id === 'all'
              ? skillsData.length
              : skillsData.filter((s) => s.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeTab === cat.id}
                className={`skills__tab-btn ${activeTab === cat.id ? 'skills__tab-btn--active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="skills__tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Compact Skills Grid */}
        <div className="skills__grid" role="tabpanel">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="skills__item reveal"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <div className="skills__item-icon-wrap">
                <Icon name={skill.icon} size={18} />
              </div>
              <div className="skills__item-content">
                <h3 className="skills__item-name">{skill.name}</h3>
                <span className="skills__item-focus">{skill.focus}</span>
              </div>
              <span className="skills__item-category-tag">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
