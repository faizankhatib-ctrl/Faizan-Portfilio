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
          {/* Brand & Tagline */}
          <div className="footer__brand-col">
            <a href="#top" className="footer__logo" onClick={scrollToTop}>
              <span className="footer__logo-bracket">&lt;</span>
              <span className="footer__logo-name">{siteConfig.name.toUpperCase()}</span>
              <span className="footer__logo-bracket"> /&gt;</span>
            </a>
            <p className="footer__role-tag">{siteConfig.role}</p>
            <p className="footer__desc">
              Designing and engineering high-impact digital products, scalable web applications, and research-backed solutions.
            </p>
          </div>

          {/* Quick Navigation Links */}
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
                <Icon name="github" size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-item"
                aria-label={`${siteConfig.name} LinkedIn Profile`}
              >
                <Icon name="linkedin" size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Contact from Developer Portfolio')}`}
                className="footer__social-item"
                aria-label={`Email ${siteConfig.name}`}
              >
                <Icon name="mail" size={18} />
                <span>Email</span>
              </a>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-item"
                aria-label={`${siteConfig.name} Resume PDF`}
              >
                <Icon name="download" size={18} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} <strong className="text-white">Faizan Khatib</strong>. Designed & engineered with focus and precision.
          </p>

          <button
            type="button"
            className="footer__back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <Icon name="arrowUpRight" size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
