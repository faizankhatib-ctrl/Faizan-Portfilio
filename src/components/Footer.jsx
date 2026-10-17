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
    <footer className="footer" aria-label="Site Footer">
      <div className="section-wrapper">
        <div className="footer__container">
          {/* Brand & Description */}
          <div className="footer__brand-col">
            <a href="#top" className="footer__logo" onClick={scrollToTop} aria-label="Faizan Khatib — Back to Top">
              <span className="footer__logo-bracket">&lt;</span>
              <span className="footer__logo-name">FK</span>
              <span className="footer__logo-bracket"> /&gt;</span>
            </a>
            <div className="footer__brand-identity">
              <span className="footer__name">{siteConfig.name}</span>
              <span className="footer__role-tag font-mono">{siteConfig.role}</span>
            </div>
            <p className="footer__desc">
              Building practical full-stack web applications, REST APIs, and user-focused solutions with Python & JavaScript.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="footer__nav-col">
            <h4 className="footer__col-title font-mono">NAVIGATION</h4>
            <ul className="footer__links" role="list">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Social Channels */}
          <div className="footer__social-col">
            <h4 className="footer__col-title font-mono">CONNECT</h4>
            <div className="footer__social-list">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-item"
                aria-label={`${siteConfig.name} on GitHub`}
              >
                <Icon name="github" size={15} />
                <span>GitHub</span>
                <Icon name="arrowUpRight" size={11} className="footer__social-arrow" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-item"
                aria-label={`${siteConfig.name} on LinkedIn`}
              >
                <Icon name="linkedin" size={15} />
                <span>LinkedIn</span>
                <Icon name="arrowUpRight" size={11} className="footer__social-arrow" />
              </a>
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('Portfolio Contact — Faizan Khatib')}&body=${encodeURIComponent('Hello Faizan,\n\nI visited your portfolio and would like to get in touch with you.\n\nRegards,')}`}
                className="footer__social-item"
                aria-label={`Email ${siteConfig.name}`}
              >
                <Icon name="mail" size={15} />
                <span>Email</span>
                <Icon name="arrowUpRight" size={11} className="footer__social-arrow" />
              </a>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-item"
                aria-label={`Download ${siteConfig.name} Resume PDF`}
              >
                <Icon name="download" size={15} />
                <span>Resume (PDF)</span>
                <Icon name="arrowUpRight" size={11} className="footer__social-arrow" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright font-mono">
            © {currentYear} <strong className="text-white">{siteConfig.name}</strong> • Built with React + Vite
          </p>

          <button
            type="button"
            className="footer__back-to-top font-mono"
            onClick={scrollToTop}
            aria-label="Scroll to top of the page"
          >
            <span>BACK TO TOP</span>
            <Icon name="arrowUp" size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
