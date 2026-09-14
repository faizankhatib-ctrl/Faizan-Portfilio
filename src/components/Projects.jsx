import Icon from './Icon';

const projects = [
  {
    title: 'Travel Booking Website',
    description:
      'A travel booking web application enabling users to browse destinations and book trips with an intuitive interface.',
    tags: ['Full Stack', 'Web App'],
    github: 'https://github.com/khatibfaizan',
    iconName: 'globe',
  },
  {
    title: 'Ticketing CRM System',
    description:
      'A full-stack customer support ticketing CRM system for creating, tracking, and managing support tickets efficiently.',
    tags: ['MERN Stack', 'CRM'],
    github: 'https://github.com/khatibfaizan',
    iconName: 'fileText',
  },
  {
    title: 'Personalized Learning Roadmap',
    description:
      'A tool that generates personalized learning roadmaps based on user goals and skill level, guiding learners step by step.',
    tags: ['EdTech', 'AI/ML'],
    github: 'https://github.com/khatibfaizan',
    iconName: 'bookOpen',
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-wrapper">
        <div className="section-label reveal">
          <span className="section-label__number">04</span>
          <span className="section-label__line"></span>
          <span className="section-label__text">Projects</span>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`projects__card reveal reveal-delay-${i + 1}`}
              key={project.title}
            >
              <div className="projects__card-top">
                <span className="projects__card-icon">
                  <Icon name={project.iconName} size={28} strokeWidth={1.5} />
                </span>
                <Icon name="arrowUpRight" size={20} className="projects__card-arrow" />
              </div>

              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-desc">{project.description}</p>

              <div className="projects__card-tags">
                {project.tags.map((tag) => (
                  <span className="projects__card-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
