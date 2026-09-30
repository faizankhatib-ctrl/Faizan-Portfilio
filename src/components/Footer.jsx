import Icon from './Icon';
import { siteConfig } from '../data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="section-wrapper">
        <div className="footer__container">
          {/* Brand & Description */}
          <div className="footer__brand-col">
            <a href="#top" className="footer__logo" onClick={scrollToTop}>
              <span className="footer__logo-bracket">&lt;</span>
              <span className="footer__logo-name">{siteConfig.name.toUpperCase()}</span>
              <span className="footer__logo-bracket"> /&gt;</span>
            </a>
            <p className="footer__role-tag">{siteConfig.role}</p>
            <p className="footer__desc">
              Designing and engineering high-impact digital products, scalable web applications, and research-backed software.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="footer__nav-col">
            <h4 className="footer__col-title">Navigation</h4>
            <ul className="footer__links">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="footer__social-col">
            <h4 className="footer__col-title">Connect</h4>
            <div className="footer__social-list">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-item"
                aria-label={`${siteConfig.name} GitHub Profile`}
              >
                <Icon name="github" size={16} />
                <span>GitHub</span>
                <Icon name="arrowUpRight" size={12} className="footer__social-arrow" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-item"
                aria-label={`${siteConfig.name} LinkedIn Profile`}
              >
                <Icon name="linkedin" size={16} />
                <span>LinkedIn</span>
                <Icon name="arrowUpRight" size={12} className="footer__social-arrow" />
              </a>
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Portfolio Contact — Faizan Khatib')}&body=${encodeURIComponent('Hello Faizan,\n\nI visited your portfolio and would like to get in touch with you.\n\nRegards,')}`}
                className="footer__social-item"
                aria-label={`Email ${siteConfig.name}`}
              >
                <Icon name="mail" size={16} />
                <span>Email</span>
                <Icon name="arrowUpRight" size={12} className="footer__social-arrow" />
              </a>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-item"
                aria-label={`${siteConfig.name} Resume`}
              >
                <Icon name="download" size={16} />
                <span>Resume (PDF)</span>
                <Icon name="arrowUpRight" size={12} className="footer__social-arrow" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} <strong className="text-white">{siteConfig.name}</strong>. Designed & engineered with focus and precision.
          </p>

          <button
            type="button"
            className="footer__back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <Icon name="arrowUp" size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
