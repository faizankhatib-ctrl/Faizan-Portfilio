import Icon from './Icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <a className="footer__logo" href="#top">
            <span className="footer__logo-bracket">&lt;</span>
            FK
            <span className="footer__logo-bracket"> /&gt;</span>
          </a>
          <p className="footer__tagline">
            Designed & Built by Faizan Khatib
          </p>
        </div>

        <div className="footer__socials">
          <a href="https://github.com/khatibfaizan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer__social-link">
            <Icon name="github" size={20} />
          </a>
          <a href="https://linkedin.com/in/khatibfaizan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer__social-link">
            <Icon name="linkedin" size={20} />
          </a>
          <a href="mailto:khatibfaizan141@gmail.com" aria-label="Email" className="footer__social-link">
            <Icon name="mail" size={20} />
          </a>
        </div>

        <p className="footer__copy">
          © {currentYear} Faizan Khatib. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
