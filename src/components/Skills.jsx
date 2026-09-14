import Icon from './Icon';

const skillCategories = [
  {
    title: 'Languages',
    iconName: 'code',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Web & Frameworks',
    iconName: 'monitor',
    skills: ['React.js', 'Node.js', 'Express.js', 'MERN Stack'],
  },
  {
    title: 'Databases & Cloud',
    iconName: 'database',
    skills: ['MongoDB', 'Firebase', 'Firestore'],
  },
  {
    title: 'Tools',
    iconName: 'wrench',
    skills: ['VS Code', 'PyCharm', 'IntelliJ IDEA', 'Git', 'GitHub'],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-wrapper">
        <div className="section-label reveal">
          <span className="section-label__number">02</span>
          <span className="section-label__line"></span>
          <span className="section-label__text">Skills & Technologies</span>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <div
              className={`skills__card reveal reveal-delay-${i + 1}`}
              key={cat.title}
            >
              <div className="skills__card-header">
                <span className="skills__card-icon">
                  <Icon name={cat.iconName} size={22} />
                </span>
                <h3 className="skills__card-title">{cat.title}</h3>
              </div>
              <div className="skills__tags">
                {cat.skills.map((skill) => (
                  <span className="skills__tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
