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

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'
  const [copied, setCopied] = useState(false);

  const contactEmail = siteConfig.email;
  const contactPhone = siteConfig.phone;
  const contactLocation = siteConfig.location;

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');

    // Simulate packaging and generate prefilled mailto action
    setTimeout(() => {
      setStatus('success');
    }, 500);
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
      // Gracefully silent fallback
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setStatus('idle');
  };

  const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(
    formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim() || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Hello Faizan,\n\n${formData.message.trim()}\n\nFrom: ${formData.name.trim()} (${formData.email.trim()})`
  )}`;

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
            Let's build something <span className="text-accent">extraordinary</span> together.
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
                    <Icon name="mail" size={20} />
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
                    <Icon name={copied ? 'check' : 'copy'} size={16} />
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
                    <Icon name="phone" size={20} />
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
                    <Icon name="mapPin" size={20} />
                  </div>
                  <div className="contact__item-details">
                    <span className="contact__item-label">Location</span>
                    <span className="contact__item-value">{contactLocation}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="contact__socials-section">
                <span className="contact__socials-title">Social & Profiles</span>
                <div className="contact__socials-row">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-button"
                    aria-label={`${siteConfig.name} GitHub Profile`}
                  >
                    <Icon name="github" size={18} />
                    <span>GitHub</span>
                    <Icon name="arrowUpRight" size={13} />
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-button"
                    aria-label={`${siteConfig.name} LinkedIn Profile`}
                  >
                    <Icon name="linkedin" size={18} />
                    <span>LinkedIn</span>
                    <Icon name="arrowUpRight" size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact__form-col reveal reveal-delay-2">
            <div className="contact__form-card">
              <div className="contact__form-header">
                <h3 className="contact__form-title">Send a Message</h3>
                <p className="contact__form-subtitle">
                  Fill in the details below to prepare your message directly.
                </p>
              </div>

              {status === 'success' ? (
                <div className="contact__success-view">
                  <div className="contact__success-icon-wrap">
                    <Icon name="check" size={32} />
                  </div>
                  <h4 className="contact__success-title">Message Prepared!</h4>
                  <p className="contact__success-text">
                    Thank you, <strong>{formData.name}</strong>. Your message has been formatted.
                    Click below to open in your default email client, or send directly to{' '}
                    <strong className="text-accent">{contactEmail}</strong>.
                  </p>

                  <div className="contact__success-actions">
                    <a
                      href={mailtoLink}
                      className="btn btn--primary"
                    >
                      <Icon name="mail" size={18} />
                      <span>Open in Email App</span>
                    </a>
                    <button
                      type="button"
                      className="btn btn--ghost"
                      onClick={resetForm}
                    >
                      <span>Send Another Note</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form className="contact__form" onSubmit={handleSubmit} noValidate>
                  {/* Name Field */}
                  <div className="form__group">
                    <label htmlFor="contact-name" className="form__label">
                      Your Name <span className="form__required">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className={`form__input ${errors.name ? 'form__input--error' : ''}`}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <span className="form__error-msg">{errors.name}</span>}
                  </div>

                  {/* Email Field */}
                  <div className="form__group">
                    <label htmlFor="contact-email" className="form__label">
                      Your Email <span className="form__required">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className={`form__input ${errors.email ? 'form__input--error' : ''}`}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <span className="form__error-msg">{errors.email}</span>}
                  </div>

                  {/* Subject Field (Optional) */}
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
                      Message <span className="form__required">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Faizan, I'd like to discuss..."
                      className={`form__textarea ${errors.message ? 'form__input--error' : ''}`}
                      aria-invalid={!!errors.message}
                    ></textarea>
                    {errors.message && <span className="form__error-msg">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn--primary form__submit-btn"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="btn__spinner"></span>
                        <span>Preparing...</span>
                      </>
                    ) : (
                      <>
                        <Icon name="mail" size={18} />
                        <span>Send Message</span>
                        <Icon name="arrowRight" size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
