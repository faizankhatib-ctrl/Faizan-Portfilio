import { useState, useEffect, useRef } from 'react';
import Icon from './Icon';

const categories = [
  { id: 'all', label: 'All Projects', shortLabel: 'ALL' },
  { id: 'fullstack', label: 'Full Stack', shortLabel: 'FULL STACK' },
  { id: 'backend', label: 'Backend / API', shortLabel: 'BACKEND / API' },
  { id: 'aidata', label: 'AI / Tools', shortLabel: 'AI / TOOLS' },
  { id: 'frontend', label: 'Frontend', shortLabel: 'FRONTEND' },
];

const projectsData = [
  {
    id: 'hairdrama-tech',
    index: '01',
    title: 'Hairdrama Tech — Task Management',
    subtitle: 'Next.js & Python Flask enterprise workflow platform',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    iconName: 'briefcase',
    image: '/assets/projects/hairdrama-tech.svg',
    shortDescription:
      'A full-stack task management application featuring task creation and management, filtering, assignment, role-based access, dashboard statistics, and authentication.',
    fullDescription:
      'Hairdrama Tech is a production task management application engineered with a Next.js App Router frontend and a Python Flask REST API backend. It features robust user directory management, priority/status triage, relational database triggers on Supabase PostgreSQL, and asynchronous email notification dispatching.',
    keyFeatures: [
      'Google OAuth 2.0 and JWT authentication.',
      'Task CRUD operations, filtering, and assignment.',
      'Dashboard statistics and role-based access.',
      '56 automated tests for reliability.',
      'Gmail SMTP email notifications using a background thread.',
      'Frontend deployment on Vercel.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Python', 'Flask', 'Supabase PostgreSQL', 'Google OAuth', 'JWT', 'SMTP'],
    github: 'https://github.com/faizankhatib-ctrl/HairdramaTech',
    live: 'https://haridrama-tech.vercel.app',
    featured: true,
  },
  {
    id: 'support-crm',
    index: '02',
    title: 'SupportCRM — Ticketing System',
    subtitle: 'Customer support workflow & issue management CRM',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    iconName: 'fileText',
    image: '/assets/projects/support-crm.svg',
    shortDescription:
      'A full-stack customer support system designed to manage support tickets and improve visibility into ticket status and activity.',
    fullDescription:
      'SupportCRM is a centralized web platform for customer support operations. Built on React, Vite, Node.js, Express, and Supabase PostgreSQL, it provides complete ticket lifecycle management, note collaboration, and a performance analytics dashboard.',
    keyFeatures: [
      'Ticket creation with automatically generated IDs.',
      'Search, filtering, and ticket status updates.',
      'Per-ticket notes and activity tracking.',
      'Dashboard statistics, status charts, and activity feed.',
      'API validation and centralized error handling.',
    ],
    technologies: ['React', 'Vite', 'Node.js', 'Express.js', 'Supabase PostgreSQL', 'REST API'],
    github: 'https://github.com/faizankhatib-ctrl/Ticketing-CRM-System',
    live: null,
    featured: true,
  },
  {
    id: 'wanderlist',
    index: '03',
    title: 'Wanderlist — Travel Platform',
    subtitle: 'High-concurrency travel booking & payment engine',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    iconName: 'globe',
    image: '/assets/projects/wanderlist.svg',
    shortDescription:
      'A production-grade travel discovery and booking platform featuring strict database concurrency to eliminate double-bookings and an idempotent Razorpay checkout pipeline.',
    fullDescription:
      'Wanderlist is a full-stack web platform built for scalable trip discovery and ticket reservation. It addresses critical production challenges including transactional database concurrency via Prisma connection pooling, automated temporal sweeps for reservation expirations, and a seamless Framer Motion-driven frontend UI.',
    keyFeatures: [
      'Strict database concurrency control to guarantee zero double-bookings.',
      'Idempotent payment pipeline with Razorpay integration and automated refund sweeps.',
      'Serverless PostgreSQL database architecture with Prisma connection pooling.',
      'Responsive, animated interface with interactive search and itinerary previews.',
    ],
    technologies: ['React.js', 'Vite', 'Node.js', 'Express.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'Razorpay'],
    github: 'https://github.com/faizankhatib-ctrl/Travel-Booking-Website',
    live: 'https://travel-booking-ui-one.vercel.app/',
    featured: false,
  },
  {
    id: 'lld-practice-platform',
    index: '04',
    title: 'LLD Practice Platform',
    subtitle: 'Low-level design studio with automated Gemini AI evaluation',
    category: 'aidata',
    categoryLabel: 'AI / Tools',
    iconName: 'cpu',
    image: '/assets/projects/lld-practice.svg',
    shortDescription:
      'A full-stack deliberate practice platform for software engineers to solve Low-Level Object-Oriented Design problems and receive rubric-based feedback via Google Gemini AI.',
    fullDescription:
      'The LLD Practice Platform provides an interview-realistic studio for mastering object-oriented design and clean architecture. Built with a Clean Modular Monolith adhering to DDD, it guides learners through a 6-section design studio, debounced autosave, and automated 8-dimension rubric scoring powered by the Google Gemini SDK.',
    keyFeatures: [
      'Structured 6-section practice studio covering requirements, interfaces, trade-offs, and edge cases.',
      'Objective 8-dimension architectural rubric evaluation powered by Google Gemini SDK.',
      'Live debounced autosave pipeline persisting solution drafts directly to MongoDB.',
      'Sessionless learner identity with attempt versioning and iterative solution forking.',
    ],
    technologies: ['React 18', 'TypeScript', 'Node.js', 'Express.js', 'Mongoose', 'Google Gemini AI', 'Tailwind CSS', 'Zod'],
    github: 'https://github.com/faizankhatib-ctrl/lld-practice-platform',
    live: null,
    featured: false,
  },
  {
    id: 'event-booking-api',
    index: '05',
    title: 'Event Booking & Ticketing API',
    subtitle: 'High-performance FastAPI & React event platform',
    category: 'backend',
    categoryLabel: 'Backend / API',
    iconName: 'grid',
    image: '/assets/projects/event-booking.svg',
    shortDescription:
      'A full-stack event discovery and ticket booking application featuring a high-performance Python FastAPI backend, MongoDB Motor ODM, and a React TypeScript SPA.',
    fullDescription:
      'The Event Booking Platform is designed for rapid event creation, attendee discovery, and seamless ticket reservation. It features an asynchronous REST API backend built on Python FastAPI with Pydantic schema validation, JWT auth, and a modern React + TypeScript frontend styled with Tailwind CSS.',
    keyFeatures: [
      'Real-time event catalog with instant keyword search, date filtering, and organizer tools.',
      'Asynchronous FastAPI backend with OpenAPI/Swagger documentation and Motor ODM.',
      'Secure JWT authentication, bcrypt password hashing, and role-based access control.',
      'Docker Compose configuration with database seeding scripts and testing suites.',
    ],
    technologies: ['React.js', 'TypeScript', 'Python', 'FastAPI', 'MongoDB', 'Beanie ODM', 'Zustand', 'Docker'],
    github: 'https://github.com/faizankhatib-ctrl/eventbooking',
    live: null,
    featured: false,
  },
  {
    id: 'mindmap-ai',
    index: '06',
    title: 'MindMap AI — Visual Workspace',
    subtitle: 'AI-assisted idea mapping & hierarchical canvas',
    category: 'aidata',
    categoryLabel: 'AI / Tools',
    iconName: 'bookOpen',
    image: '/assets/projects/mindmap-ai.svg',
    shortDescription:
      'An interactive AI-powered mind mapping application built with React and Vite for organizing, structuring, and visually expanding complex concepts on an interactive canvas.',
    fullDescription:
      'MindMap AI is a visual ideation and brainstorming workspace. It enables developers and thinkers to construct hierarchical tree maps, trigger AI idea expansions for deeper conceptual branches, search across nodes, and export structures to JSON with persistent local state.',
    keyFeatures: [
      'Interactive canvas interface with dynamic node additions, pan/zoom, and branch linking.',
      'AI-driven concept expansion for instant sub-topic generation and idea structuring.',
      'Persistent local data management, full-text node search, and structured JSON export.',
      'Responsive design with clean shortcuts and smooth dark-mode interface.',
    ],
    technologies: ['React.js', 'Vite', 'TypeScript', 'Canvas API', 'AI Expansion', 'Tailwind CSS', 'JSON Export'],
    github: 'https://github.com/faizankhatib-ctrl/mindmap-ai',
    live: null,
    featured: false,
  },
  {
    id: 'moneta-finance',
    index: '07',
    title: 'Moneta — Finance Tracker',
    subtitle: 'Full-stack ledger with PBKDF2 authentication & alerts',
    category: 'backend',
    categoryLabel: 'Backend / API',
    iconName: 'server',
    image: '/assets/projects/moneta-finance.svg',
    shortDescription:
      'A full-stack personal finance tracker and transaction ledger built with Python Flask, SQLAlchemy, PBKDF2 security, and low-balance threshold alerts.',
    fullDescription:
      'Moneta is a secure financial tracking platform. It provides session-scoped account isolation with PBKDF2 password hashing, dynamic spending category calculations, full transaction CRUD operations, and configurable low-balance warning notifications.',
    keyFeatures: [
      'PBKDF2-SHA256 password hashing with Flask-Login session management and scoped queries.',
      'Dynamic balance dashboard with animated income/expense totals and category breakdown.',
      'Automated low-balance threshold detector with instant warning banners and modals.',
      'Complete transaction CRUD via JSON REST endpoints backed by SQLite & SQLAlchemy.',
    ],
    technologies: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'Flask-Login', 'Chart UI', 'Vanilla JS'],
    github: 'https://github.com/faizankhatib-ctrl/Personal-Finance-Tracke',
    live: null,
    featured: false,
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const triggerRef = useRef(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      if (triggerRef.current) {
        triggerRef.current.focus();
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  const openModal = (project, e) => {
    triggerRef.current = e?.currentTarget || null;
    setSelectedProject(project);
  };

  return (
    <section className="projects section-spacing" id="projects" aria-label="Projects Showcase">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="projects__header-top">
            <div className="section-tag">
              <span className="section-tag__num">04</span>
              <span className="section-tag__label">SELECTED WORK</span>
            </div>
            <div className="projects__counter-pill">
              <span className="projects__counter-dot" aria-hidden="true"></span>
              <span className="font-mono">07 PROJECTS</span>
            </div>
          </div>
          <h2 className="section-title">
            Projects that solve <span className="text-accent">real problems</span>.
          </h2>
          <p className="section-subtitle">
            Full-stack applications, developer tools, APIs, and AI-powered products built with modern engineering practices.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="projects__filter-wrapper reveal reveal-delay-1">
          <div
            className="projects__filters"
            role="tablist"
            aria-label="Filter projects by technical category"
          >
            {categories.map((cat) => {
              const count = cat.id === 'all'
                ? projectsData.length
                : projectsData.filter((p) => p.category === cat.id).length;
              const isActive = activeFilter === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  id={`filter-tab-${cat.id}`}
                  aria-controls="projects-grid"
                  aria-selected={isActive}
                  className={`projects__filter-btn ${isActive ? 'projects__filter-btn--active' : ''}`}
                  onClick={() => setActiveFilter(cat.id)}
                >
                  <span className="projects__filter-label">{cat.shortLabel || cat.label}</span>
                  <span className="projects__filter-count font-mono">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Bento / Grid */}
        <div
          id="projects-grid"
          role="tabpanel"
          aria-labelledby={`filter-tab-${activeFilter}`}
          className={`projects__bento-grid ${activeFilter === 'all' ? 'projects__bento-grid--all' : ''}`}
        >
          {filteredProjects.length === 0 ? (
            <div className="projects__empty-state reveal">
              <div className="projects__empty-icon" aria-hidden="true">
                <Icon name="info" size={24} />
              </div>
              <h3 className="projects__empty-title">No standalone frontend-only projects</h3>
              <p className="projects__empty-desc">
                All frontend interfaces in this portfolio are engineered end-to-end within the Full Stack, API, and AI systems listed above.
              </p>
              <button
                type="button"
                className="btn btn--primary projects__empty-btn"
                onClick={() => setActiveFilter('all')}
              >
                <span>View All 07 Projects</span>
                <Icon name="arrowRight" size={14} />
              </button>
            </div>
          ) : (
            filteredProjects.map((project, index) => {
              const isFirstFeatured = activeFilter === 'all' && index === 0;

              return (
                <article
                  key={project.id}
                  className={`projects__card reveal reveal-delay-${(index % 3) + 1} ${
                    isFirstFeatured ? 'projects__card--featured' : ''
                  }`}
                >
                  {/* Card Banner / Frame */}
                  <div className="projects__card-banner">
                    <img
                      src={project.image}
                      alt={`${project.title} Interface Preview`}
                      className="projects__card-img"
                      loading="lazy"
                      decoding="async"
                      width="480"
                      height="210"
                    />
                    <div className="projects__card-banner-overlay" aria-hidden="true"></div>

                    <div className="projects__card-badge-top">
                      <span className="projects__card-index-pill font-mono">{project.index}</span>
                      <span className="projects__card-cat-pill">{project.categoryLabel}</span>
                    </div>

                    {project.live && (
                      <div className="projects__card-live-pill" title="Live Deployment Active">
                        <span className="projects__live-dot" aria-hidden="true"></span>
                        <span className="font-mono">LIVE DEMO</span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="projects__card-body">
                    <div className="projects__card-heading-group">
                      <h3 className="projects__card-title">{project.title}</h3>
                      <p className="projects__card-subtitle">{project.subtitle}</p>
                    </div>

                    <p className="projects__card-desc">{project.shortDescription}</p>

                    {/* Engineering Highlights */}
                    <div className="projects__card-highlights">
                      <div className="projects__highlights-header">
                        <span className="projects__highlights-label font-mono">ENGINEERING HIGHLIGHTS</span>
                      </div>
                      <ul className="projects__highlights-list" role="list">
                        {project.keyFeatures.slice(0, 2).map((feature, fIdx) => (
                          <li key={fIdx} className="projects__highlight-item">
                            <span className="projects__highlight-arrow" aria-hidden="true">▹</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="projects__card-tech-group">
                      <span className="projects__tech-label font-mono">STACK</span>
                      <div className="projects__card-tags" aria-label={`Tech stack for ${project.title}`}>
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span className="projects__card-tag" key={tech}>
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="projects__card-tag projects__card-tag--more font-mono">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="projects__card-actions">
                      <button
                        type="button"
                        className="btn-card-action btn-card-action--details"
                        onClick={(e) => openModal(project, e)}
                        aria-label={`View Case Study and architecture details for ${project.title}`}
                      >
                        <Icon name="eye" size={13} />
                        <span>Case Study</span>
                      </button>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-card-action btn-card-action--github"
                        aria-label={`View ${project.title} repository on GitHub`}
                      >
                        <Icon name="github" size={13} />
                        <span>GitHub</span>
                        <Icon name="arrowUpRight" size={11} className="btn-card-action__arrow" />
                      </a>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-card-action btn-card-action--demo"
                          aria-label={`Launch ${project.title} live demo`}
                        >
                          <Icon name="externalLink" size={13} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>

      {/* Case Study / Project Details Modal */}
      {selectedProject && (
        <div
          className="modal__backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          aria-describedby="modal-project-desc"
        >
          <div
            className="modal__container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Banner */}
            <div className="modal__banner">
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} Interface Preview`}
                className="modal__banner-img"
                decoding="async"
                width="720"
                height="200"
              />
              <div className="modal__banner-overlay" aria-hidden="true"></div>

              <div className="modal__banner-content">
                <div className="modal__badge-row">
                  <span className="modal__index-badge font-mono">PROJECT {selectedProject.index}</span>
                  <span className="modal__category-badge">{selectedProject.categoryLabel}</span>
                  {selectedProject.live && (
                    <span className="modal__live-badge font-mono">
                      <span className="projects__live-dot" aria-hidden="true"></span>
                      LIVE DEPLOYMENT ACTIVE
                    </span>
                  )}
                </div>
                <h3 className="modal__title" id="modal-project-title">
                  {selectedProject.title}
                </h3>
                <p className="modal__subtitle">{selectedProject.subtitle}</p>
              </div>

              <button
                type="button"
                className="modal__close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close case study dialog"
              >
                <Icon name="close" size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal__body">
              {/* Overview */}
              <div className="modal__section">
                <div className="modal__section-header">
                  <Icon name="layers" size={14} className="text-accent" />
                  <h4 className="modal__section-heading font-mono">OVERVIEW & PROBLEM STATEMENT</h4>
                </div>
                <p className="modal__description" id="modal-project-desc">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Engineering Highlights */}
              <div className="modal__section">
                <div className="modal__section-header">
                  <Icon name="cpu" size={14} className="text-cyan" />
                  <h4 className="modal__section-heading font-mono">ENGINEERING HIGHLIGHTS & ARCHITECTURE</h4>
                </div>
                <ul className="modal__features-list" role="list">
                  {selectedProject.keyFeatures.map((feature, i) => (
                    <li key={i} className="modal__feature-item">
                      <span className="modal__feature-check" aria-hidden="true">
                        <Icon name="check" size={13} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="modal__section">
                <div className="modal__section-header">
                  <Icon name="code" size={14} className="text-emerald" />
                  <h4 className="modal__section-heading font-mono">TECH STACK</h4>
                </div>
                <div className="modal__tech-tags" aria-label={`Technologies in ${selectedProject.title}`}>
                  {selectedProject.technologies.map((tech) => (
                    <span className="modal__tech-tag font-mono" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal__footer">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                aria-label={`Open ${selectedProject.title} GitHub repository`}
              >
                <Icon name="github" size={15} />
                <span>GitHub Repository</span>
                <Icon name="arrowUpRight" size={13} />
              </a>

              {selectedProject.live ? (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                  aria-label={`Launch ${selectedProject.title} Live Demo`}
                >
                  <Icon name="externalLink" size={15} />
                  <span>Launch Live Demo</span>
                </a>
              ) : null}

              <button
                type="button"
                className="btn btn--ghost modal__footer-close"
                onClick={() => setSelectedProject(null)}
              >
                <span>Close Case Study</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
