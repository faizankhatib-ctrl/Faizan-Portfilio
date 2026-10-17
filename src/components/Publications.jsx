import Icon from './Icon';

export default function Publications() {
  return (
    <section className="publications section-spacing" id="publications" aria-label="Research and Publications">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="publications__header-top">
            <div className="section-tag">
              <span className="section-tag__num">05</span>
              <span className="section-tag__label">RESEARCH & PUBLICATIONS</span>
            </div>
            <div className="publications__header-badge font-mono">
              <span className="publications__header-dot" aria-hidden="true"></span>
              <span>JATIR 2026</span>
            </div>
          </div>
          <h2 className="section-title">
            Research beyond <span className="text-accent">the code</span>.
          </h2>
          <p className="section-subtitle">
            Exploring the intersection of technology, digital behavior, and real-world impact.
          </p>
        </div>

        {/* Editorial Research Paper Feature Card */}
        <article className="publications__card reveal reveal-delay-1">
          {/* Left Column: Technical Document Marker */}
          <div className="publications__doc-col">
            <div className="publications__doc-badge font-mono">
              <span className="publications__doc-tag">R-01</span>
              <span className="publications__doc-type">SURVEY STUDY</span>
            </div>

            <div className="publications__doc-icon-frame" aria-hidden="true">
              <Icon name="fileText" size={24} className="text-accent" />
              <span className="publications__doc-accent-line"></span>
            </div>

            <div className="publications__doc-meta font-mono">
              <div className="publications__doc-meta-item">
                <span className="publications__doc-meta-label">JOURNAL</span>
                <span className="publications__doc-meta-value">JATIR</span>
              </div>
              <div className="publications__doc-meta-item">
                <span className="publications__doc-meta-label">EDITION</span>
                <span className="publications__doc-meta-value">Vol. 2, Iss. 6</span>
              </div>
              <div className="publications__doc-meta-item">
                <span className="publications__doc-meta-label">YEAR</span>
                <span className="publications__doc-meta-value">June 2026</span>
              </div>
              <div className="publications__doc-meta-item">
                <span className="publications__doc-meta-label">STATUS</span>
                <span className="publications__doc-meta-value">Certificate of Research Publication</span>
              </div>
            </div>
          </div>

          {/* Right Column: Paper Details & Abstract */}
          <div className="publications__content-col">
            <div className="publications__top-row">
              <div className="publications__kicker-group">
                <span className="publications__kicker font-mono">PEER-REVIEWED RESEARCH PAPER</span>
                <span className="publications__journal-label font-mono">JATIR • JUNE 2026</span>
              </div>
            </div>

            <h3 className="publications__title">
              Digital Minds, Troubled Hearts: A Survey on Technology and Mental Health Among Young Adults
            </h3>

            {/* Structured Metadata Grid */}
            <div className="publications__meta-grid font-mono">
              <div className="publications__meta-cell">
                <span className="publications__meta-cell-label">RESEARCH AREA</span>
                <span className="publications__meta-cell-val">Technology & Digital Well-being</span>
              </div>
              <div className="publications__meta-cell">
                <span className="publications__meta-cell-label">PUBLICATION</span>
                <span className="publications__meta-cell-val">Journal of Academic Trends & Innovative Research</span>
              </div>
              <div className="publications__meta-cell publications__meta-cell--full">
                <span className="publications__meta-cell-label">CO-AUTHORS</span>
                <span className="publications__meta-cell-val">
                  Fakir Mohammad Kasim Salim Shah, Shaikh Ammar Shaikh Vajid, Prof. Kalpesh Marathe
                </span>
              </div>
            </div>

            {/* Abstract / Focus */}
            <div className="publications__abstract-box">
              <span className="publications__focus-label font-mono">FOCUS & METHODOLOGY</span>
              <p className="publications__abstract-text">
                Co-authored a comprehensive survey study investigating how smartphone, social media, and AI use affect young adults' well-being in India. The research explores the relationship between technology and mental health among young adults through a structured mixed-methods survey across undergraduate students.
              </p>
            </div>

            {/* Footer Row */}
            <div className="publications__card-footer">
              <div className="publications__footer-tagline font-mono">
                <span>Research</span>
                <span className="publications__dot-sep" aria-hidden="true">•</span>
                <span>Technology</span>
                <span className="publications__dot-sep" aria-hidden="true">•</span>
                <span>Human Impact</span>
              </div>

              <a
                href="https://jatir.org/article.php?paperid=140305"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary publications__cta"
                aria-label="View official publication of Digital Minds, Troubled Hearts on JATIR"
              >
                <span>READ PUBLICATION</span>
                <Icon name="externalLink" size={14} />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
