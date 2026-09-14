import Icon from './Icon';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-wrapper">
        <div className="contact__inner reveal">
          <div className="contact__content">
            <h2 className="contact__heading">
              Let's build something <span className="text-amber">great</span> together.
            </h2>
            <p className="contact__text">
              I'm currently open to new opportunities and collaborations. Whether you have a project
              in mind, a question, or just want to connect — I'd love to hear from you.
            </p>
          </div>

          <div className="contact__links reveal reveal-delay-2">
            <a href="mailto:khatibfaizan141@gmail.com" className="contact__card">
              <div className="contact__card-icon">
                <Icon name="mail" size={24} />
              </div>
              <div>
                <span className="contact__card-label">Email</span>
                <span className="contact__card-value">khatibfaizan141@gmail.com</span>
              </div>
            </a>

            <a href="tel:+917972533832" className="contact__card">
              <div className="contact__card-icon">
                <Icon name="phone" size={24} />
              </div>
              <div>
                <span className="contact__card-label">Phone</span>
                <span className="contact__card-value">+91 79725 33832</span>
              </div>
            </a>

            <a href="https://linkedin.com/in/khatibfaizan" target="_blank" rel="noopener noreferrer" className="contact__card">
              <div className="contact__card-icon">
                <Icon name="linkedin" size={24} />
              </div>
              <div>
                <span className="contact__card-label">LinkedIn</span>
                <span className="contact__card-value">Connect with me</span>
              </div>
            </a>

            <a href="https://github.com/khatibfaizan" target="_blank" rel="noopener noreferrer" className="contact__card">
              <div className="contact__card-icon">
                <Icon name="github" size={24} />
              </div>
              <div>
                <span className="contact__card-label">GitHub</span>
                <span className="contact__card-value">View my repos</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
