import { useState } from 'react';
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

  const contactEmail = siteConfig.email;
  const contactPhone = siteConfig.phone;
  const contactLocation = siteConfig.location;

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

  const copyEmailToClipboard = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(contactEmail)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
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
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Graceful fallback
    }
  };

  const currentMailtoLink = buildMailtoLink();

  return (
    <section className="contact section-spacing" id="contact">
      <div className="section-wrapper">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-tag">
            <span className="section-tag__num">07</span>
            <span className="section-tag__label">Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's build something <span className="text-accent">meaningful</span> together.
          </h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, a project to collaborate on, or just want to connect.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact__grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact__info-col reveal">
            <div className="contact__direct-card">
              <h3 className="contact__direct-title">Direct Channels</h3>
              <p className="contact__direct-subtitle">
                Feel free to reach out directly via email, phone, or professional networks.
              </p>

              <div className="contact__cards-list">
                {/* Email Card */}
                <div className="contact__item-card">
                  <div className="contact__item-icon">
                    <Icon name="mail" size={18} />
                  </div>
                  <div className="contact__item-details">
                    <span className="contact__item-label">Email</span>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="contact__item-value contact__item-link"
                    >
                      {contactEmail}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="contact__copy-btn"
                    onClick={copyEmailToClipboard}
                    aria-label="Copy email address"
                    title={copied ? 'Copied!' : 'Copy to clipboard'}
                  >
                    <Icon name={copied ? 'check' : 'copy'} size={15} />
                  </button>
                  {copied && (
                    <span className="contact__copied-toast" aria-live="polite">
                      Copied!
                    </span>
                  )}
                </div>

                {/* Phone Card */}
                <div className="contact__item-card">
                  <div className="contact__item-icon">
                    <Icon name="phone" size={18} />
                  </div>
                  <div className="contact__item-details">
                    <span className="contact__item-label">Phone</span>
                    <a
                      href={`tel:${contactPhone.replace(/\s+/g, '')}`}
                      className="contact__item-value contact__item-link"
                    >
                      {contactPhone}
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="contact__item-card">
                  <div className="contact__item-icon">
                    <Icon name="mapPin" size={18} />
                  </div>
                  <div className="contact__item-details">
                    <span className="contact__item-label">Location</span>
                    <span className="contact__item-value">{contactLocation}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="contact__socials-section">
                <span className="contact__socials-title">Professional Profiles</span>
                <div className="contact__socials-row">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-button"
                    aria-label={`${siteConfig.name} GitHub Profile`}
                  >
                    <Icon name="github" size={16} />
                    <span>GitHub</span>
                    <Icon name="arrowUpRight" size={12} />
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-button"
                    aria-label={`${siteConfig.name} LinkedIn Profile`}
                  >
                    <Icon name="linkedin" size={16} />
                    <span>LinkedIn</span>
                    <Icon name="arrowUpRight" size={12} />
                  </a>
                  <a
                    href={siteConfig.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-button"
                    aria-label={`${siteConfig.name} Resume`}
                  >
                    <Icon name="download" size={16} />
                    <span>Resume</span>
                    <Icon name="arrowUpRight" size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact__form-col reveal reveal-delay-2">
            <div className="contact__form-card">
              <div className="contact__form-header">
                <h3 className="contact__form-title">Send a Message</h3>
                <p className="contact__form-subtitle">
                  Fill in the details below to open your default email client with a prefilled message.
                </p>
              </div>

              <form className="contact__form" onSubmit={handleSubmit} action={currentMailtoLink} method="post" encType="text/plain">
                {/* Name Field */}
                <div className="form__group">
                  <label htmlFor="contact-name" className="form__label">
                    Your Name
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
                  <label htmlFor="contact-email" className="form__label">
                    Your Email
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
                  <label htmlFor="contact-subject" className="form__label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Inquiry or Internship Opportunity"
                    className="form__input"
                  />
                </div>

                {/* Message Field */}
                <div className="form__group">
                  <label htmlFor="contact-message" className="form__label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Faizan, I would like to get in touch..."
                    className="form__textarea"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <a
                  href={currentMailtoLink}
                  className="btn btn--primary form__submit-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = currentMailtoLink;
                  }}
                >
                  <Icon name="mail" size={16} />
                  <span>Send Message</span>
                  <Icon name="arrowRight" size={15} />
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
