import React, { useEffect, useRef } from 'react';

const achievements = [
  {
    icon: '🏆',
    title: 'National Hackathon Finalist',
    desc: 'Code Slayer — NIT Delhi',
  },
  {
    icon: '🥇',
    title: 'Hack CBS 8.0 Finalist',
    desc: 'Hack CBS 8.0 — Delhi',
  },
  {
    icon: '⚡',
    title: 'NXT Gen Chennai',
    desc: 'Competed and reached finals at NXT Gen Chennai hackathon',
  },
];

export default function Achievements() {
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.fade-in').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 120);
        });
      }
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="achievements" style={{ background: 'rgba(13,21,48,0.6)' }} ref={ref}>
      <div className="container">
        <p className="section-label fade-in">What I've Won</p>
        <h2 className="section-title fade-in">My <span className="gradient-text">Achievements</span></h2>
        <div className="section-divider fade-in" />
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <div className="achievement-card fade-in" key={i} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="achievement-icon">{a.icon}</div>
              <div className="achievement-title">{a.title}</div>
              <div className="achievement-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
