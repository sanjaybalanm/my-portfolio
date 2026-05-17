import React, { useEffect, useRef } from 'react';

export default function About() {
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { e.target.querySelectorAll('.fade-in').forEach((el,i) => { setTimeout(() => el.classList.add('visible'), i * 120); }); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <p className="section-label fade-in">Who I Am</p>
        <h2 className="section-title fade-in">About <span className="gradient-text">Me</span></h2>
        <div className="section-divider fade-in" />
        <div className="about-grid">
          <div className="about-text fade-in">
            <p>
              I'm an aspiring software developer currently pursuing my B.E. in Computer Science Engineering
              at <strong>Chennai Institute of Technology</strong> (CGPA: 7.9). I have hands-on experience
              in backend development and web technologies.
            </p>
            <p>
              I have a solid background in building scalable applications and possess a strong
              problem-solving mindset focused on clean code practices. I'm eager to learn and
              contribute to innovative projects.
            </p>
            <p>
              I'm actively seeking opportunities in backend, full-stack, or software development roles
              where I can apply my skills and continue growing as a developer.
            </p>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">7.9</div>
                <div className="stat-label">CGPA</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2</div>
                <div className="stat-label">Internships</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3+</div>
                <div className="stat-label">Hackathons</div>
              </div>
            </div>
          </div>
          <div className="about-info fade-in">
            {[
              { icon: '🎓', label: 'Degree', value: 'B.E. Computer Science Engineering' },
              { icon: '🏫', label: 'College', value: 'Chennai Institute of Technology' },
              { icon: '📍', label: 'Location', value: 'Chennai, India' },
              { icon: '📧', label: 'Email', value: <a href="mailto:sanjaybalanmcse2024@citchennai.net">sanjaybalanmcse2024@citchennai.net</a> },
              { icon: '📱', label: 'Phone', value: '6383795983' },
              { icon: '💼', label: 'LinkedIn', value: <a href="https://linkedin.com/in/sanjay-balan-m-558747316" target="_blank" rel="noreferrer">linkedin.com/in/sanjay-balan-m</a> },
              { icon: '🐙', label: 'GitHub', value: <a href="https://github.com/sanjaybalanm" target="_blank" rel="noreferrer">github.com/sanjaybalanm</a> },
              { icon: '🎯', label: 'Status', value: 'Open to Opportunities' },
            ].map(item => (
              <div className="info-item" key={item.label}>
                <span className="info-icon">{item.icon}</span>
                <div className="info-content">
                  <div className="info-label">{item.label}</div>
                  <div className="info-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
