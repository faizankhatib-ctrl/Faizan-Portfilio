import Icon from './Icon';

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* Background neural network texture from uploaded image */}
      <div className="hero__bg-image-wrap">
        <img
          src="/pexels-tara-winstead-8386440.jpg"
          alt="Neural Network Backdrop"
          className="hero__bg-image"
        />
        <div className="hero__bg-gradient"></div>
      </div>

      {/* Ambient gradient orbs */}
      <div className="hero__orb hero__orb--1"></div>
      <div className="hero__orb hero__orb--2"></div>
      <div className="hero__orb hero__orb--3"></div>

      <div className="hero__content">
        <div className="hero__grid">
          {/* Left Column: Intro & Details */}
          <div className="hero__text">
            <div className="hero__badge">
              <span className="hero__badge-dot"></span>
              Available for Work
            </div>

            <h1 className="hero__title">
              Hi, I'm <span className="hero__name">Faizan Khatib</span>
            </h1>

            <p className="hero__subtitle">
              Full Stack Developer <span className="hero__ampersand">&</span> Researcher
            </p>

            <p className="hero__description">
              Computer Technology student with hands-on experience in full-stack web development
              (MERN stack, Java) across multiple internships, and a published researcher exploring
              the intersection of technology and mental health.
            </p>

            <div className="hero__cta">
              <a href="#projects" className="btn btn--primary">
                <Icon name="grid" size={18} />
                View Projects
              </a>
              <a
                href="/resume/Faizan_Khatib.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                <Icon name="download" size={18} />
                Download Resume
              </a>
            </div>

            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-number">3+</span>
                <span className="hero__stat-label">Internships</span>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat">
                <span className="hero__stat-number">1</span>
                <span className="hero__stat-label">Publication</span>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat">
                <span className="hero__stat-number">5+</span>
                <span className="hero__stat-label">Projects</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="hero__visual">
            <div className="hero__image-card">
              <div className="hero__image-wrapper">
                <img
                  src="/pexels-tara-winstead-8386440.jpg"
                  alt="AI & Human Interaction — Faizan Khatib"
                  className="hero__featured-img"
                />
                <div className="hero__image-glow"></div>
              </div>

              {/* Floating Badge: Publication */}
              <div className="hero__float-badge hero__float-badge--top">
                <span className="hero__float-icon">🧠</span>
                <div>
                  <div className="hero__float-title">AI & Mental Health</div>
                  <div className="hero__float-sub">Published in JATIR (2026)</div>
                </div>
              </div>

              {/* Floating Badge: Tech Stack */}
              <div className="hero__float-badge hero__float-badge--bottom">
                <span className="hero__float-icon">⚡</span>
                <div>
                  <div className="hero__float-title">Full Stack Systems</div>
                  <div className="hero__float-sub">MERN • Java • Cloud</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
