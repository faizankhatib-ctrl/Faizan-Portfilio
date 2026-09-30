import Icon from './Icon';
import { siteConfig } from '../data/siteConfig';

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* Ambient background glows */}
      <div className="hero__glow hero__glow--primary" aria-hidden="true"></div>
      <div className="hero__glow hero__glow--secondary" aria-hidden="true"></div>
      <div className="hero__grid-pattern" aria-hidden="true"></div>

      <div className="section-wrapper">
        <div className="hero__container">
          {/* Left Column: Introduction & CTAs */}
          <div className="hero__intro">
            {/* Status Pill */}
            <div className="hero__status-badge reveal">
              <span className="hero__status-dot">
                <span className="hero__status-dot-ping"></span>
              </span>
              <span className="hero__status-text">Available for Opportunities</span>
            </div>

            {/* Title & Salutation */}
            <div className="hero__heading-group reveal reveal-delay-1">
              <p className="hero__salutation">Hi, I'm</p>
              <h1 className="hero__name">
                Faizan <span className="hero__name-highlight">Khatib</span>
              </h1>
              <div className="hero__role-badge">
                <Icon name="code" size={18} className="hero__role-icon" />
                <span className="hero__role-title">Full Stack Developer</span>
              </div>
            </div>

            {/* Bio Description */}
            <p className="hero__bio reveal reveal-delay-2">
              Computer Technology student with hands-on engineering experience across multiple
              internships in full-stack web development (<strong className="text-highlight">MERN Stack</strong> &{' '}
              <strong className="text-highlight">Java</strong>), and a published researcher exploring technology
              and human behavior.
            </p>

            {/* Action Buttons */}
            <div className="hero__actions reveal reveal-delay-3">
              <a href="#projects" className="btn btn--primary">
                <Icon name="grid" size={18} />
                <span>View My Work</span>
              </a>
              <a href="#contact" className="btn btn--secondary">
                <Icon name="mail" size={18} />
                <span>Contact Me</span>
              </a>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
                title={`Download ${siteConfig.name} Resume (PDF)`}
              >
                <Icon name="download" size={18} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Quick Connect */}
            <div className="hero__socials-row reveal reveal-delay-4">
              <span className="hero__socials-label">Connect:</span>
              <div className="hero__socials-group">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-chip"
                  aria-label={`${siteConfig.name} GitHub Profile`}
                >
                  <Icon name="github" size={17} />
                  <span>GitHub</span>
                  <Icon name="arrowUpRight" size={13} className="hero__social-chip-arrow" />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-chip"
                  aria-label={`${siteConfig.name} LinkedIn Profile`}
                >
                  <Icon name="linkedin" size={17} />
                  <span>LinkedIn</span>
                  <Icon name="arrowUpRight" size={13} className="hero__social-chip-arrow" />
                </a>
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Inquiry from Developer Portfolio')}`}
                  className="hero__social-chip"
                  aria-label={`Email ${siteConfig.name}`}
                >
                  <Icon name="mail" size={17} />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics / Proven Milestones */}
            <div className="hero__metrics reveal reveal-delay-5">
              <div className="hero__metric-item">
                <span className="hero__metric-value">3+</span>
                <span className="hero__metric-label">Internships</span>
              </div>
              <div className="hero__metric-divider"></div>
              <div className="hero__metric-item">
                <span className="hero__metric-value">1</span>
                <span className="hero__metric-label">Published Paper</span>
              </div>
              <div className="hero__metric-divider"></div>
              <div className="hero__metric-item">
                <span className="hero__metric-value">5+</span>
                <span className="hero__metric-label">Core Projects</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Showcase & Interactive Bento Visual */}
          <div className="hero__visual reveal reveal-delay-2">
            <div className="hero__card-showcase">
              {/* Official Profile Photo Frame */}
              <div className="hero__profile-container">
                <div className="hero__profile-frame" id="hero-profile-area">
                  <img
                    src="/assets/faizan-profile.jpg"
                    alt="Faizan Khatib - Full Stack Developer"
                    className="hero__profile-img"
                    loading="eager"
                  />
                  <div className="hero__profile-overlay"></div>
                  <div className="hero__profile-corner-glow"></div>
                </div>

                {/* Floating Interactive Badge: Current Role */}
                <div className="hero__float-card hero__float-card--role">
                  <div className="hero__float-icon-wrap hero__float-icon-wrap--amber">
                    <Icon name="briefcase" size={18} />
                  </div>
                  <div className="hero__float-info">
                    <span className="hero__float-kicker">Current Role</span>
                    <span className="hero__float-main">Full Stack Intern @ ITView</span>
                  </div>
                </div>

                {/* Floating Interactive Badge: Research */}
                <div className="hero__float-card hero__float-card--research">
                  <div className="hero__float-icon-wrap hero__float-icon-wrap--cyan">
                    <Icon name="bookOpen" size={18} />
                  </div>
                  <div className="hero__float-info">
                    <span className="hero__float-kicker">Research Publication</span>
                    <span className="hero__float-main">JATIR (2026) Paper</span>
                  </div>
                </div>
              </div>

              {/* Developer Terminal / Snippet Widget */}
              <div className="hero__terminal-card">
                <div className="hero__terminal-header">
                  <div className="hero__terminal-dots">
                    <span className="hero__terminal-dot hero__terminal-dot--red"></span>
                    <span className="hero__terminal-dot hero__terminal-dot--yellow"></span>
                    <span className="hero__terminal-dot hero__terminal-dot--green"></span>
                  </div>
                  <span className="hero__terminal-title">faizan@dev: ~</span>
                  <span className="hero__terminal-lang">stack.json</span>
                </div>
                <div className="hero__terminal-body">
                  <p className="hero__code-line">
                    <span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}
                  </p>
                  <p className="hero__code-line hero__code-indent">
                    <span className="code-prop">name</span>: <span className="code-string">"Faizan Khatib"</span>,
                  </p>
                  <p className="hero__code-line hero__code-indent">
                    <span className="code-prop">focus</span>: <span className="code-string">["MERN Stack", "Java", "Web Systems"]</span>,
                  </p>
                  <p className="hero__code-line hero__code-indent">
                    <span className="code-prop">education</span>: <span className="code-string">"B.Tech Computer Technology"</span>,
                  </p>
                  <p className="hero__code-line hero__code-indent">
                    <span className="code-prop">status</span>: <span className="code-string">"Building & Innovating"</span>
                  </p>
                  <p className="hero__code-line">{'}'};</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
