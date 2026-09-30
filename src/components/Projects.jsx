import { useState, useEffect } from 'react';
import Icon from './Icon';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'aidata', label: 'AI / Data' },
  { id: 'other', label: 'Other' },
];

const projectsData = [
  {
    id: 'wanderlist',
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
    colorScheme: 'amber',
  },
  {
    id: 'hairdrama-tech',
    title: 'Hairdrama Tech — Task System',
    subtitle: 'Next.js & Python Flask enterprise workflow platform',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
    iconName: 'briefcase',
    image: '/assets/projects/hairdrama-tech.svg',
    shortDescription:
      'A full-stack task management application with Google OAuth 2.0, custom JWT authentication decorator, Supabase PostgreSQL, and automated Gmail SMTP notification workers.',
    fullDescription:
      'Hairdrama Tech is a production task management application engineered with a Next.js App Router frontend and a Python Flask REST API backend. It features robust user directory management, priority/status triage, relational database triggers on Supabase PostgreSQL, and asynchronous email notification dispatching.',
    keyFeatures: [
      'Comprehensive task lifecycle management with priority, status, and assignee filters.',
      'Google OAuth 2.0 authentication with custom JWT token validation decorator.',
      'Asynchronous Gmail SMTP worker for instant task assignment and status update notifications.',
      'Automated schema migrations and relational indexing on Supabase PostgreSQL.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Python', 'Flask', 'SQLAlchemy', 'Supabase PostgreSQL', 'Google OAuth', 'SMTP'],
    github: 'https://github.com/faizankhatib-ctrl/HairdramaTech',
    live: 'https://haridrama-tech.vercel.app',
    colorScheme: 'cyan',
  },
  {
    id: 'lld-practice-platform',
    title: 'LLD Practice Platform',
    subtitle: 'Low-level design studio with automated Gemini AI evaluation',
    category: 'aidata',
    categoryLabel: 'AI / Data',
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
    colorScheme: 'indigo',
  },
  {
    id: 'event-booking-api',
    title: 'Event Booking & Ticketing API',
    subtitle: 'High-performance FastAPI & React event platform',
    category: 'fullstack',
    categoryLabel: 'Full Stack',
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
    colorScheme: 'cyan',
  },
  {
    id: 'mindmap-ai',
    title: 'MindMap AI — Visual Workspace',
    subtitle: 'AI-assisted idea mapping & hierarchical canvas',
    category: 'aidata',
    categoryLabel: 'AI / Data',
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
    colorScheme: 'indigo',
  },
  {
    id: 'support-crm',
    title: 'SupportCRM — Ticketing System',
    subtitle: 'Customer support workflow & issue management CRM',
    category: 'backend',
    categoryLabel: 'Backend',
    iconName: 'fileText',
    image: '/assets/projects/support-crm.svg',
    shortDescription:
      'A full-stack customer support CRM system for managing, tracking, and resolving customer inquiries with auto-generated ticket IDs and analytics.',
    fullDescription:
      'SupportCRM is a centralized web platform for customer support operations. Built on Node.js, Express, and Supabase PostgreSQL, it provides complete ticket lifecycle management (Open, In Progress, Closed), note thread collaboration, urgency triage, and a performance analytics dashboard.',
    keyFeatures: [
      'Ticket lifecycle management with auto-generated TKT-XXX sequence and urgency triage.',
      'Internal note thread history for agent collaboration and client follow-ups.',
      'Analytics dashboard featuring resolution metrics and status distribution charts.',
      'Relational PostgreSQL schema with secure environment parameterization.',
    ],
    technologies: ['Node.js', 'Express.js', 'Supabase PostgreSQL', 'React.js', 'Vite', 'REST API'],
    github: 'https://github.com/faizankhatib-ctrl/Ticketing-CRM-System',
    live: null,
    colorScheme: 'amber',
  },
  {
    id: 'moneta-finance',
    title: 'Moneta — Finance Tracker',
    subtitle: 'Full-stack ledger with PBKDF2 authentication & alerts',
    category: 'backend',
    categoryLabel: 'Backend',
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
    colorScheme: 'emerald',
  },
  {
    id: 'prescription-manager',
    title: 'Prescription Manager — Health Portal',
    subtitle: 'Real-time patient prescription sync with Firestore',
    category: 'frontend',
    categoryLabel: 'Frontend',
    iconName: 'monitor',
    image: '/assets/projects/prescription-manager.svg',
    shortDescription:
      'A real-time digital healthcare prescription recording application integrated with Firebase and Firestore for instant cloud synchronization and patient record management.',
    fullDescription:
      'Prescription Manager enables doctors and clinicians to digitize and manage patient prescription logs. It connects directly with Firestore to ensure instant real-time synchronization, dosage timing categorization, and immediate search across patient medical histories.',
    keyFeatures: [
      'Real-time document persistence and patient prescription tracking with Firebase Firestore.',
      'Medicine lookup, dosage scheduling, and doctor recommendation categorization.',
      'Fast client-side search and filtering across historical patient medical records.',
      'Clean, accessible responsive interface optimized for clinical workflows.',
    ],
    technologies: ['JavaScript', 'Firebase', 'Firestore', 'HTML5', 'CSS3', 'Real-Time Sync'],
    github: 'https://github.com/faizankhatib-ctrl/Prescription-Manager',
    live: null,
    colorScheme: 'pink',
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape
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
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="projects section-spacing" id="projects">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="section-tag__num">04</span>
            <span className="section-tag__label">Featured Work</span>
          </div>
          <h2 className="section-title">
            Engineered with <span className="text-accent">precision</span> & depth.
          </h2>
          <p className="section-subtitle">
            A showcase of real production-ready web applications, distributed APIs, AI evaluation studios, and full-stack systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="projects__filter-row reveal reveal-delay-1">
          <div className="projects__filters" role="tablist" aria-label="Project Categories">
            {categories.map((cat) => {
              const count = cat.id === 'all'
                ? projectsData.length
                : projectsData.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === cat.id}
                  className={`projects__filter-btn ${activeFilter === cat.id ? 'projects__filter-btn--active' : ''}`}
                  onClick={() => setActiveFilter(cat.id)}
                >
                  <span>{cat.label}</span>
                  {count > 0 && <span className="projects__filter-count">{count}</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects__grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`projects__card projects__card--${project.colorScheme} reveal`}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {/* Card Image Banner */}
              <div className={`projects__card-banner projects__card-banner--${project.colorScheme}`}>
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className="projects__card-img"
                  loading="lazy"
                />
                <div className="projects__card-category-pill">
                  {project.categoryLabel}
                </div>
                {project.live && (
                  <div className="projects__card-live-badge" title="Live Deployment Active">
                    <span className="projects__live-dot"></span>
                    <span>Live Demo</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="projects__card-body">
                <div className="projects__card-meta">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-subtitle">{project.subtitle}</p>
                </div>

                <p className="projects__card-desc">{project.shortDescription}</p>

                {/* Tech Tags */}
                <div className="projects__card-tags">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span className="projects__card-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="projects__card-tag projects__card-tag--more">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Card Actions */}
                <div className="projects__card-actions">
                  <button
                    type="button"
                    className="btn-card-action btn-card-action--details"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`View full details for ${project.title}`}
                  >
                    <Icon name="eye" size={15} />
                    <span>View Details</span>
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-card-action btn-card-action--github"
                    aria-label={`View ${project.title} repository on GitHub`}
                    title="View GitHub Repository"
                  >
                    <Icon name="github" size={15} />
                    <span>GitHub</span>
                    <Icon name="arrowUpRight" size={12} />
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-card-action btn-card-action--demo"
                      aria-label={`Open live deployment for ${project.title}`}
                      title="Launch Live Demo"
                    >
                      <Icon name="externalLink" size={15} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
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
            {/* Modal Image Header Banner */}
            <div className={`modal__banner modal__banner--${selectedProject.colorScheme}`}>
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} Large Preview`}
                className="modal__banner-img"
              />
              <div className="modal__banner-overlay"></div>
              
              <div className="modal__banner-content">
                <div className="modal__badge-row">
                  <span className="modal__category-badge">{selectedProject.categoryLabel}</span>
                  {selectedProject.live && (
                    <span className="modal__live-badge">
                      <span className="projects__live-dot"></span>
                      Live Deployment Active
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
                aria-label="Close project modal dialog"
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="modal__body">
              {/* Overview */}
              <div className="modal__section">
                <h4 className="modal__section-heading">Project Overview</h4>
                <p className="modal__description" id="modal-project-desc">{selectedProject.fullDescription}</p>
              </div>

              {/* Key Features */}
              <div className="modal__section">
                <h4 className="modal__section-heading">Key Features & Engineering Highlights</h4>
                <ul className="modal__features-list">
                  {selectedProject.keyFeatures.map((feature, i) => (
                    <li key={i} className="modal__feature-item">
                      <span className="modal__feature-check">
                        <Icon name="check" size={13} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="modal__section">
                <h4 className="modal__section-heading">Technology Stack</h4>
                <div className="modal__tech-tags">
                  {selectedProject.technologies.map((tech) => (
                    <span className="modal__tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="modal__footer">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                aria-label={`Open ${selectedProject.title} on GitHub`}
              >
                <Icon name="github" size={18} />
                <span>View on GitHub</span>
                <Icon name="arrowUpRight" size={14} />
              </a>

              {selectedProject.live ? (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                  aria-label={`Launch live demo for ${selectedProject.title}`}
                >
                  <Icon name="externalLink" size={18} />
                  <span>Launch Live Demo</span>
                </a>
              ) : (
                <button
                  type="button"
                  className="btn btn--ghost"
                  onClick={() => setSelectedProject(null)}
                >
                  <span>Close</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
