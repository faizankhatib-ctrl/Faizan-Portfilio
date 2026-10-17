import { useState, useEffect, useRef } from 'react';
import Icon from './Icon';
import { siteConfig } from '../data/siteConfig';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef(null);

  const contactEmail = siteConfig.email;
  const contactPhone = siteConfig.phone;
  const contactLocation = siteConfig.location;

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildMailtoLink = () => {
    const subjectText = formData.subject.trim() || 'Portfolio Contact — Faizan Khatib';

    let bodyText = formData.message.trim();
    if (!bodyText) {
      bodyText = 'Hello Faizan,\n\nI visited your portfolio and would like to get in touch with you.\n\nRegards,';
    } else if (formData.name.trim() || formData.email.trim()) {
      bodyText += `\n\nRegards,\n${formData.name.trim()} ${formData.email.trim() ? `<${formData.email.trim()}>` : ''}`;
    }

    return `mailto:${contactEmail}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = buildMailtoLink();
    window.location.href = mailtoUrl;
  };

  const triggerCopySuccess = () => {
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }
    setCopied(true);
    copyTimeoutRef.current = setTimeout(() => setCopied(false), 2500);
  };

  const copyEmailToClipboard = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(contactEmail)
        .then(() => {
          triggerCopySuccess();
        })
        .catch(() => {
          fallbackCopy(contactEmail);
        });
    } else {
      fallbackCopy(contactEmail);
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
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful) {
        triggerCopySuccess();
      }
    } catch {
      // Graceful fallback
    }
  };

  const currentMailtoLink = buildMailtoLink();

  return (
    <section className="contact section-spacing" id="contact" aria-label="Contact and Inquiries">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="section-tag__num">07</span>
            <span className="section-tag__label">LET'S CONNECT</span>
          </div>
          <h2 className="section-title">
            Have a project or <span className="text-accent">opportunity</span>?
          </h2>
          <p className="section-subtitle">
            Open to software engineering, full-stack development, and internship opportunities.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact__grid">
          {/* Left Column: Direct Communication & Profiles */}
          <div className="contact__info-col reveal">
            <div className="contact__direct-card">
              <div className="contact__card-badge-row">
                <span className="contact__channel-kicker font-mono">DIRECT CHANNELS</span>
                <span className="contact__status-pill font-mono">
                  <span className="contact__status-dot" aria-hidden="true"></span>
                  REACH OUT DIRECTLY
                </span>
              </div>

              <h3 className="contact__direct-title">Let's start a conversation</h3>
              <p className="contact__direct-subtitle">
                Feel free to email me directly, connect on professional networks, or download my verified resume.
              </p>

              {/* Primary Actions */}
              <div className="contact__primary-actions">
                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent('Software Engineering Opportunity — Faizan Khatib')}&body=${encodeURIComponent('Hello Faizan,\n\nI came across your portfolio and would like to connect with you regarding an opportunity.\n\nRegards,')}`}
                  className="btn btn--primary contact__main-email-btn"
                  aria-label={`Send an email to ${contactEmail}`}
                >
                  <Icon name="mail" size={16} />
                  <span>EMAIL ME</span>
                  <Icon name="arrowRight" size={14} />
                </a>

                <button
                  type="button"
                  className="btn btn--secondary contact__copy-email-btn font-mono"
                  onClick={copyEmailToClipboard}
                  aria-label="Copy Faizan Khatib email address to clipboard"
                >
                  <Icon name={copied ? 'check' : 'copy'} size={15} />
                  <span>{copied ? 'EMAIL COPIED!' : 'COPY EMAIL'}</span>
                </button>
              </div>

              {/* Direct Info List */}
              <div className="contact__channels-list" role="list">
                {/* Email Item */}
                <div className="contact__channel-item" role="listitem">
                  <div className="contact__channel-icon" aria-hidden="true">
                    <Icon name="mail" size={16} />
                  </div>
                  <div className="contact__channel-details">
                    <span className="contact__channel-label font-mono">EMAIL</span>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="contact__channel-value contact__channel-link font-mono"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="contact__channel-item" role="listitem">
                  <div className="contact__channel-icon" aria-hidden="true">
                    <Icon name="phone" size={16} />
                  </div>
                  <div className="contact__channel-details">
                    <span className="contact__channel-label font-mono">PHONE</span>
                    <a
                      href={`tel:${contactPhone.replace(/\s+/g, '')}`}
                      className="contact__channel-value contact__channel-link font-mono"
                    >
                      {contactPhone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="contact__channel-item" role="listitem">
                  <div className="contact__channel-icon" aria-hidden="true">
                    <Icon name="mapPin" size={16} />
                  </div>
                  <div className="contact__channel-details">
                    <span className="contact__channel-label font-mono">LOCATION</span>
                    <span className="contact__channel-value font-mono">{contactLocation}</span>
                  </div>
                </div>
              </div>

              {/* Verified External Profiles */}
              <div className="contact__socials-section">
                <span className="contact__socials-title font-mono">PROFILES & CREDENTIALS</span>
                <div className="contact__socials-row">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-button font-mono"
                    aria-label={`${siteConfig.name} GitHub Profile`}
                  >
                    <Icon name="github" size={15} />
                    <span>GitHub</span>
                    <Icon name="arrowUpRight" size={11} />
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-button font-mono"
                    aria-label={`${siteConfig.name} LinkedIn Profile`}
                  >
                    <Icon name="linkedin" size={15} />
                    <span>LinkedIn</span>
                    <Icon name="arrowUpRight" size={11} />
                  </a>
                  <a
                    href={siteConfig.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-button font-mono"
                    aria-label={`Download ${siteConfig.name} Resume PDF`}
                  >
                    <Icon name="download" size={15} />
                    <span>Resume (PDF)</span>
                    <Icon name="arrowUpRight" size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="contact__form-col reveal reveal-delay-2">
            <div className="contact__form-card">
              <div className="contact__form-header">
                <div className="contact__form-kicker font-mono">DIRECT MESSAGE COMPOSER</div>
                <h3 className="contact__form-title">Send a prefilled message</h3>
                <p className="contact__form-subtitle">
                  Compose your note below to trigger your default email client with your message cleanly preformatted.
                </p>
              </div>

              <form className="contact__form" onSubmit={handleSubmit} action={currentMailtoLink} method="post" encType="text/plain">
                {/* Name Field */}
                <div className="form__group">
                  <label htmlFor="contact-name" className="form__label font-mono">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    className="form__input"
                  />
                </div>

                {/* Email Field */}
                <div className="form__group">
                  <label htmlFor="contact-email" className="form__label font-mono">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    className="form__input"
                  />
                </div>

                {/* Subject Field */}
                <div className="form__group">
                  <label htmlFor="contact-subject" className="form__label font-mono">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full Stack Opportunity or Project Inquiry"
                    className="form__input"
                  />
                </div>

                {/* Message Field */}
                <div className="form__group">
                  <label htmlFor="contact-message" className="form__label font-mono">
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Faizan, I came across your portfolio and would like to discuss..."
                    className="form__textarea"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn--primary form__submit-btn"
                  aria-label="Open email client with composed message"
                >
                  <Icon name="mail" size={16} />
                  <span>OPEN EMAIL CLIENT</span>
                  <Icon name="arrowRight" size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
