import { useState, useEffect, useRef } from 'react';
import Icon from './Icon';
import { siteConfig } from '../data/siteConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [navToast, setNavToast] = useState('');
  const toastTimeoutRef = useRef(null);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('fk-theme');
    if (saved) return saved;
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('fk-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'midnight' : 'dark'));
  };

  const handleShare = async () => {
    const shareData = {
      title: `${siteConfig.name} — ${siteConfig.role}`,
      text: `Check out the developer portfolio of ${siteConfig.name}, ${siteConfig.role}.`,
      url: window.location.href,
    };

    if (navigator.share && window.isSecureContext) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyUrlToClipboard();
        }
      }
    } else {
      copyUrlToClipboard();
    }
  };

  const copyUrlToClipboard = () => {
    const url = window.location.href;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(url)
        .then(() => triggerNavToast('Portfolio link copied!'))
        .catch(() => fallbackCopy(url));
    } else {
      fallbackCopy(url);
    }
  };

  const fallbackCopy = (text) => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      triggerNavToast('Portfolio link copied!');
    } catch {
      triggerNavToast('Unable to copy link.');
    }
  };

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const triggerNavToast = (msg) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setNavToast(msg);
    toastTimeoutRef.current = setTimeout(() => setNavToast(''), 2500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = ['top', 'about', 'skills', 'experience', 'projects', 'publications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = siteConfig.navLinks;

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="nav">
      <nav className="navbar__inner" aria-label="Main Navigation">
        {/* Brand */}
        <a className="navbar__logo" href="#top" onClick={handleLinkClick} aria-label={`${siteConfig.name} - Back to top`}>
          <span className="navbar__logo-icon">
            <span className="navbar__logo-bracket">&lt;</span>
            <span className="navbar__logo-initials">FK</span>
            <span className="navbar__logo-bracket"> /&gt;</span>
          </span>
          <span className="navbar__logo-name">{siteConfig.name}</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="navbar__links" role="list">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="navbar__link-indicator" aria-hidden="true"></span>}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Action Controls */}
        <div className="navbar__actions">
          {/* Social Links */}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__action-icon"
            aria-label={`${siteConfig.name} GitHub profile`}
            title="GitHub Profile"
          >
            <Icon name="github" size={16} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__action-icon"
            aria-label={`${siteConfig.name} LinkedIn profile`}
            title="LinkedIn Profile"
          >
            <Icon name="linkedin" size={16} />
          </a>

          {/* Share Action */}
          <button
            type="button"
            className="navbar__action-icon navbar__share-btn"
            onClick={handleShare}
            aria-label="Share portfolio or copy link"
            title="Share Portfolio"
          >
            <Icon name="share" size={15} />
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            className="navbar__action-icon navbar__theme-btn"
            onClick={toggleTheme}
            aria-label={`Switch theme to ${theme === 'dark' ? 'midnight' : 'dark'}`}
            title={theme === 'dark' ? 'Switch to Midnight Theme' : 'Switch to Obsidian Theme'}
          >
            <Icon name={theme === 'dark' ? 'moon' : 'sparkles'} size={15} />
          </button>

          {/* Resume CTA */}
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__resume-cta"
            aria-label="Download Resume PDF"
          >
            <Icon name="download" size={14} />
            <span>Resume</span>
          </a>

          {/* Toast */}
          {navToast && (
            <div className="navbar__toast" role="status" aria-live="polite">
              <Icon name="check" size={12} />
              <span>{navToast}</span>
            </div>
          )}

          {/* Hamburger Menu Toggle Button */}
          <button
            type="button"
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
          >
            <span className="navbar__hamburger-bar"></span>
            <span className="navbar__hamburger-bar"></span>
            <span className="navbar__hamburger-bar"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`navbar__drawer-overlay ${menuOpen ? 'navbar__drawer-overlay--visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-nav-drawer"
        className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}
        aria-label="Mobile Navigation"
        role="dialog"
        aria-modal={menuOpen}
      >
        <div className="navbar__drawer-header">
          <div className="navbar__drawer-brand">
            <span className="navbar__logo-bracket">&lt;</span>
            <span className="navbar__logo-initials">FK</span>
            <span className="navbar__logo-bracket"> /&gt;</span>
            <span className="navbar__drawer-title">Navigation</span>
          </div>
          <button
            type="button"
            className="navbar__drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
          >
            <Icon name="close" size={17} />
          </button>
        </div>

        <ul className="navbar__drawer-list" role="list">
          {navLinks.map((link, idx) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__drawer-link ${activeSection === link.id ? 'navbar__drawer-link--active' : ''}`}
                onClick={handleLinkClick}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                <span className="navbar__drawer-num">0{idx + 1}</span>
                <span>{link.label}</span>
                <Icon name="arrowRight" size={14} className="navbar__drawer-arrow" />
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__drawer-footer">
          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__drawer-btn"
            onClick={handleLinkClick}
          >
            <Icon name="download" size={15} />
            <span>Download Resume</span>
          </a>

          <div className="navbar__drawer-socials">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__drawer-social"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Icon name="github" size={17} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__drawer-social"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Icon name="linkedin" size={17} />
            </a>
            <button
              type="button"
              className="navbar__drawer-social"
              onClick={handleShare}
              aria-label="Share Portfolio Link"
              title="Share Portfolio"
            >
              <Icon name="share" size={16} />
            </button>
            <button
              type="button"
              className="navbar__drawer-social"
              onClick={toggleTheme}
              aria-label="Toggle theme mode"
              title="Toggle theme"
            >
              <Icon name={theme === 'dark' ? 'moon' : 'sparkles'} size={15} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

