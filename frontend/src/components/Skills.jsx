import React, { useEffect, useRef } from 'react';

const skillData = [
  {
    icon: '💻',
    title: 'Languages',
    skills: ['C++', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    icon: '⚛️',
    title: 'Frontend',
    skills: ['React', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    icon: '🔧',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    skills: ['Supabase', 'MongoDB', 'SQL'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Others',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux'],
  },
  {
    icon: '🤝',
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Communication', 'Teamwork', 'Leadership'],
  },
];

export default function Skills() {
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.fade-in').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 100);
        });
      }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="skills" style={{ background: 'rgba(13,21,48,0.6)' }} ref={ref}>
      <div className="container">
        <p className="section-label fade-in">What I Know</p>
        <h2 className="section-title fade-in">Technical <span className="gradient-text">Skills</span></h2>
        <div className="section-divider fade-in" />
        <div className="skills-grid">
          {skillData.map((cat, i) => (
            <div className="skill-category fade-in" key={cat.title} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="skill-cat-icon">{cat.icon}</div>
              <div className="skill-cat-title">{cat.title}</div>
              <div className="skill-tags">
                {cat.skills.map(s => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
