import React, { useEffect, useRef } from 'react';

const education = [
  {
    period: '2024 – PRESENT',
    title: 'B.E. in Computer Science Engineering',
    org: 'Chennai Institute of Technology',
    detail: 'CGPA: 7.9 | Chennai',
  },
  {
    period: '2023 – 2024',
    title: 'Senior School Certificate (Class XII)',
    org: 'The Ashok Leyland School',
    detail: 'Grade: 75 | Honours',
  },
  {
    period: '2021 – 2022',
    title: 'Secondary School (Class X)',
    org: 'The Ashok Leyland School',
    detail: 'Grade: 84.8 | Honours',
  },
];

export default function Education() {
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
    <section className="section" id="education" ref={ref}>
      <div className="container">
        <p className="section-label fade-in">Academic Background</p>
        <h2 className="section-title fade-in">My <span className="gradient-text">Education</span></h2>
        <div className="section-divider fade-in" />
        <div className="timeline fade-in" style={{ maxWidth: 700 }}>
          {education.map((edu, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-period">{edu.period}</div>
                <div className="timeline-title">{edu.title}</div>
                <div className="timeline-org">🎓 {edu.org}</div>
                <div className="timeline-detail">{edu.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
