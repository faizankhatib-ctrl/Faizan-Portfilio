export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-wrapper">
        <div className="section-label reveal">
          <span className="section-label__number">01</span>
          <span className="section-label__line"></span>
          <span className="section-label__text">About Me</span>
        </div>

        <div className="about__grid">
          <div className="about__card about__card--main reveal">
            <h2 className="about__heading">
              Building digital experiences with <span className="text-amber">intention</span> and code
            </h2>
            <p className="about__text">
              I'm a B.Tech Computer Technology student at Ahinsa Institute of Technology, Dondaicha, Maharashtra,
              passionate about building meaningful software. My journey spans from frontend development at
              creative agencies to full-stack engineering, with a curiosity-driven detour into academic research.
            </p>
            <p className="about__text">
              What sets me apart is the intersection of my technical skills and research mindset — I don't
              just write code, I understand the impact technology has on people, having co-authored a published
              paper on digital technology and mental health.
            </p>
          </div>

          <div className="about__card about__card--info reveal reveal-delay-1">
            <div className="about__info-item">
              <span className="about__info-icon">📍</span>
              <div>
                <span className="about__info-label">Location</span>
                <span className="about__info-value">Maharashtra, India</span>
              </div>
            </div>
            <div className="about__info-item">
              <span className="about__info-icon">🎓</span>
              <div>
                <span className="about__info-label">Education</span>
                <span className="about__info-value">B.Tech Computer Technology</span>
              </div>
            </div>
            <div className="about__info-item">
              <span className="about__info-icon">💼</span>
              <div>
                <span className="about__info-label">Current Role</span>
                <span className="about__info-value">Full Stack Dev Intern @ ITView</span>
              </div>
            </div>
            <div className="about__info-item">
              <span className="about__info-icon">📧</span>
              <div>
                <span className="about__info-label">Email</span>
                <a href="mailto:khatibfaizan141@gmail.com" className="about__info-value about__info-link">
                  khatibfaizan141@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
