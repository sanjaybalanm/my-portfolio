import React, { useEffect, useRef } from 'react';

const experiences = [
  {
    period: 'NOV 2025 – DEC 2025',
    title: 'AI Intern',
    org: 'Codec Technologies',
    detail: 'Worked on AI/ML projects, gaining hands-on experience in artificial intelligence applications and backend development.',
  },
  {
    period: 'MAY 2025 – JUN 2025',
    title: 'UI/UX Intern',
    org: 'Zero to Site',
    detail: 'Designed and developed user interfaces, focusing on creating intuitive and visually appealing web experiences.',
  },
];

export default function Experience() {
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.fade-in').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 150);
        });
      }
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="experience" style={{ background: 'rgba(13,21,48,0.6)' }} ref={ref}>
      <div className="container">
        <p className="section-label fade-in">Where I've Worked</p>
        <h2 className="section-title fade-in">Internship <span className="gradient-text">Experience</span></h2>
        <div className="section-divider fade-in" />
        <div className="timeline fade-in" style={{ maxWidth: 700 }}>
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-period">{exp.period}</div>
                <div className="timeline-title">{exp.title}</div>
                <div className="timeline-org">🏢 {exp.org}</div>
                <div className="timeline-detail">{exp.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
