import Icon from './Icon';
import { siteConfig } from '../data/siteConfig';

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* Subtle Ambient Background */}
      <div className="hero__ambient-glow" aria-hidden="true"></div>
      <div className="hero__grid-pattern" aria-hidden="true"></div>

      <div className="section-wrapper">
        <div className="hero__container">
          {/* Left Column: Information & Storytelling */}
          <div className="hero__content">
            {/* Status Pill */}
            <div className="hero__status-badge reveal">
              <span className="hero__status-dot">
                <span className="hero__status-dot-ping"></span>
              </span>
              <span className="hero__status-text">Available for Opportunities</span>
            </div>

            {/* Title & Role */}
            <div className="hero__heading-wrap reveal reveal-delay-1">
              <p className="hero__kicker">Hello, I'm</p>
              <h1 className="hero__title">
                Faizan <span className="text-accent">Khatib</span>
              </h1>
              <p className="hero__role">
                Full Stack Developer <span className="hero__role-divider">•</span> Software Engineer
              </p>
            </div>

            {/* Bio Description */}
            <p className="hero__bio reveal reveal-delay-2">
              Computer Technology student building production-ready web applications, distributed APIs, and scalable architectures. Experienced across multiple internships in <strong className="text-highlight">MERN Stack</strong>, <strong className="text-highlight">Java</strong>, and <strong className="text-highlight">Python</strong>, with a published peer-reviewed research paper in <strong className="text-highlight">JATIR (2026)</strong>.
            </p>

            {/* CTAs */}
            <div className="hero__actions reveal reveal-delay-3">
              <a href="#projects" className="btn btn--primary">
                <span>View Projects</span>
                <Icon name="arrowRight" size={16} />
              </a>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
                title={`Download ${siteConfig.name} Resume`}
              >
                <Icon name="download" size={16} />
                <span>Download Resume</span>
              </a>
              <a href="#contact" className="btn btn--ghost">
                <Icon name="mail" size={16} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Social Connect */}
            <div className="hero__socials-row reveal reveal-delay-4">
              <span className="hero__socials-label">Connect:</span>
              <div className="hero__socials-list">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link"
                  aria-label={`${siteConfig.name} GitHub Profile`}
                >
                  <Icon name="github" size={16} />
                  <span>GitHub</span>
                  <Icon name="arrowUpRight" size={12} className="hero__social-arrow" />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link"
                  aria-label={`${siteConfig.name} LinkedIn Profile`}
                >
                  <Icon name="linkedin" size={16} />
                  <span>LinkedIn</span>
                  <Icon name="arrowUpRight" size={12} className="hero__social-arrow" />
                </a>
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Portfolio Contact — Faizan Khatib')}&body=${encodeURIComponent('Hello Faizan,\n\nI visited your portfolio and would like to get in touch with you.\n\nRegards,')}`}
                  className="hero__social-link"
                  aria-label={`Email ${siteConfig.name}`}
                >
                  <Icon name="mail" size={16} />
                  <span>Email</span>
                  <Icon name="arrowUpRight" size={12} className="hero__social-arrow" />
                </a>
              </div>
            </div>

            {/* Milestones / Metrics Bar */}
            <div className="hero__metrics reveal reveal-delay-5">
              <div className="hero__metric">
                <span className="hero__metric-number">3+</span>
                <span className="hero__metric-label">Internships</span>
              </div>
              <div className="hero__metric-separator"></div>
              <div className="hero__metric">
                <span className="hero__metric-number">1</span>
                <span className="hero__metric-label">JATIR Paper</span>
              </div>
              <div className="hero__metric-separator"></div>
              <div className="hero__metric">
                <span className="hero__metric-number">7</span>
                <span className="hero__metric-label">Core Projects</span>
              </div>
              <div className="hero__metric-separator"></div>
              <div className="hero__metric">
                <span className="hero__metric-number">2027</span>
                <span className="hero__metric-label">B.Tech Cohort</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image Composition */}
          <div className="hero__visual reveal reveal-delay-2">
            <div className="hero__photo-card">
              {/* Corner crosshairs / technical marks */}
              <span className="hero__corner hero__corner--tl">+</span>
              <span className="hero__corner hero__corner--tr">+</span>
              <span className="hero__corner hero__corner--bl">+</span>
              <span className="hero__corner hero__corner--br">+</span>

              <div className="hero__photo-wrapper">
                <img
                  src="/assets/faizan-profile.jpg"
                  alt="Faizan Khatib - Full Stack Developer"
                  className="hero__photo-img"
                  loading="eager"
                />
                <div className="hero__photo-gradient"></div>
              </div>

              {/* Photo Bottom Caption Bar */}
              <div className="hero__photo-caption">
                <div className="hero__caption-info">
                  <span className="hero__caption-name">{siteConfig.name}</span>
                  <span className="hero__caption-role">Full Stack Intern @ ITView</span>
                </div>
                <div className="hero__caption-status">
                  <span className="hero__caption-dot"></span>
                  <span>Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
