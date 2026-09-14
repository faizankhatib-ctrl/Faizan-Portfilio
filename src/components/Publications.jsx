import Icon from './Icon';

export default function Publications() {
  return (
    <section className="publications" id="publications">
      <div className="section-wrapper">
        <div className="section-label reveal">
          <span className="section-label__number">05</span>
          <span className="section-label__line"></span>
          <span className="section-label__text">Publications</span>
        </div>

        <div className="publications__card reveal reveal-delay-1">
          <div className="publications__badge">
            <Icon name="bookOpen" size={18} />
            Published Research Paper
          </div>

          <h3 className="publications__title">
            Digital Minds, Troubled Hearts: A Survey on Technology and Mental Health Among Young Adults
          </h3>

          <div className="publications__meta">
            <span className="publications__journal">
              Journal of Academic Trends & Innovative Research (JATIR)
            </span>
            <span className="publications__issue">Vol. 2, Issue 6 — June 2026</span>
          </div>

          <p className="publications__description">
            Co-authored a peer-reviewed research paper examining how smartphone, social media,
            and AI usage affect the psychological well-being of young adults in India, based on
            a mixed-methods study of undergraduate students. Awarded a Certificate of Research
            Publication by the Editorial Board.
          </p>

          <div className="publications__authors">
            <span className="publications__authors-label">Co-authors:</span>
            <span>Fakir Mohammad Kasim Salim Shah, Shaikh Ammar Shaikh Vajid, Prof. Kalpesh Marathe</span>
          </div>

          <a
            href="https://jatir.org/article.php?paperid=140305"
            target="_blank"
            rel="noopener noreferrer"
            className="publications__link"
          >
            <Icon name="externalLink" size={16} />
            Read Paper on JATIR
          </a>
        </div>
      </div>
    </section>
  );
}
