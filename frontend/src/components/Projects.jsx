import React, { useEffect, useRef } from 'react';

const projects = [
  {
    num: '01',
    title: 'Competition Dashboard',
    desc: 'A full-stack web application to track, manage, and analyze hackathon participation. Features real-time updates, team management, and analytics dashboard.',
    tags: ['React', 'Node.js', 'Supabase', 'Gmail API'],
    github: 'https://github.com/sanjaybalanm',
    live: null,
  },
  {
    num: '02',
    title: 'NILACHUMAI',
    desc: 'An AI-powered chatbot focused on rural land dispute resolution. Helps users understand their rights and navigate legal procedures through intelligent conversation.',
    tags: ['AI', 'Chatbot', 'NLP', 'JavaScript'],
    github: 'https://github.com/sanjaybalanm',
    live: null,
  },
  {
    num: '03',
    title: 'Tamil Movie Recommender',
    desc: 'A machine learning based recommendation system using similarity analysis and user behavior data to suggest Tamil movies tailored to user preferences.',
    tags: ['Python', 'Machine Learning', 'Similarity Analysis', 'Flask'],
    github: 'https://github.com/sanjaybalanm',
    live: null,
  },
];

export default function Projects() {
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.fade-in').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 120);
        });
      }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <p className="section-label fade-in">What I've Built</p>
        <h2 className="section-title fade-in">Featured <span className="gradient-text">Projects</span></h2>
        <div className="section-divider fade-in" />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card fade-in" key={p.num} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="project-number">PROJECT {p.num}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.17c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.73-1.33-1.73-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.79 1.3 3.47.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.66.26 2.88.13 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12C24 5.37 18.63 0 12 0z"/></svg>
                  GitHub
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-link">
                    🔗 Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
