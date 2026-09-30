import Icon from './Icon';

export default function Publications() {
  return (
    <section className="publications section-spacing" id="publications">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="section-tag__num">05</span>
            <span className="section-tag__label">Academic Research</span>
          </div>
          <h2 className="section-title">
            Peer-reviewed <span className="text-accent">research</span> & publications.
          </h2>
          <p className="section-subtitle">
            Exploring the psychological and behavioral intersections of digital technology and human well-being.
          </p>
        </div>

        {/* Featured Publication Showcase Card */}
        <div className="publications__showcase reveal reveal-delay-1">
          <div className="publications__header-row">
            <div className="publications__badges">
              <span className="publications__badge publications__badge--gold">
                <Icon name="award" size={16} />
                <span>Peer-Reviewed Paper</span>
              </span>
              <span className="publications__badge publications__badge--cyan">
                <Icon name="calendar" size={15} />
                <span>June 2026</span>
              </span>
            </div>

            <div className="publications__journal-tag">
              JATIR • Vol. 2, Issue 6
            </div>
          </div>

          <h3 className="publications__title">
            Digital Minds, Troubled Hearts: A Survey on Technology and Mental Health Among Young Adults
          </h3>

          <div className="publications__meta-info">
            <div className="publications__meta-item">
              <span className="publications__meta-label">Journal:</span>
              <span className="publications__meta-val">
                Journal of Academic Trends & Innovative Research (JATIR)
              </span>
            </div>
            <div className="publications__meta-item">
              <span className="publications__meta-label">Recognition:</span>
              <span className="publications__meta-val">
                Awarded Certificate of Research Publication by the Editorial Board
              </span>
            </div>
          </div>

          <p className="publications__abstract">
            Co-authored a comprehensive peer-reviewed survey study exploring how prolonged smartphone usage, social media
            algorithms, and emerging AI technologies influence the psychological well-being and daily mental health of young
            adults. The study utilizes a mixed-methods methodology surveying undergraduate students in India to analyze digital
            consumption patterns and cognitive impact.
          </p>

          {/* Co-Authors & Impact */}
          <div className="publications__authors-box">
            <span className="publications__authors-label">Co-Authors:</span>
            <span className="publications__authors-names">
              Fakir Mohammad Kasim Salim Shah, Shaikh Ammar Shaikh Vajid, Prof. Kalpesh Marathe
            </span>
          </div>

          {/* Research Tags & CTA */}
          <div className="publications__footer-row">
            <div className="publications__tags">
              <span className="publications__tag">Mental Health & Technology</span>
              <span className="publications__tag">AI & Social Impact</span>
              <span className="publications__tag">Mixed-Methods Survey</span>
              <span className="publications__tag">Peer-Reviewed</span>
            </div>

            <a
              href="https://jatir.org/article.php?paperid=140305"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary publications__read-btn"
              aria-label="Read full research paper on JATIR"
            >
              <Icon name="externalLink" size={18} />
              <span>Read Paper on JATIR</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
