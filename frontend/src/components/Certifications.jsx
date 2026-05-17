import React, { useEffect, useRef } from 'react';

const certs = [
  { icon: '📊', title: 'Introduction to Data Science', issuer: 'IBM SkillsBuild' },
  { icon: '🔐', title: 'Introduction to Cybersecurity', issuer: 'IBM SkillsBuild' },
  { icon: '🤖', title: 'Introduction to Modern AI', issuer: 'IBM SkillsBuild' },
  { icon: '🧠', title: 'AI Fundamentals', issuer: 'IBM SkillsBuild' },
  { icon: '🌐', title: 'Introduction to IoT & Digital Transformation', issuer: 'IBM SkillsBuild' },
  { icon: '📱', title: 'Android Development Virtual Internship', issuer: 'Google via Eduskills' },
  { icon: '☁️', title: 'IoT Cloud Engineer Virtual Internship', issuer: 'Google via Eduskills' },
];

export default function Certifications() {
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.fade-in').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 80);
        });
      }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="certifications" ref={ref}>
      <div className="container">
        <p className="section-label fade-in">Credentials</p>
        <h2 className="section-title fade-in">My <span className="gradient-text">Certifications</span></h2>
        <div className="section-divider fade-in" />
        <div className="certs-grid">
          {certs.map((c, i) => (
            <div className="cert-card fade-in" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="cert-icon">{c.icon}</span>
              <div>
                <div className="cert-title">{c.title}</div>
                <div className="cert-issuer">{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
