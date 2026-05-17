import React, { useState, useEffect, useRef } from 'react';

const roles = ['Aspiring Software Developer', 'Backend Developer', 'Full-Stack Enthusiast', 'Problem Solver'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const ref = useRef();

  useEffect(() => {
    const target = roles[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="orb orb1" />
        <div className="orb orb2" />
      </div>
      <div className="container">
        <div>
          <p className="hero-greeting">👋 Hi there, I'm</p>
          <h1 className="hero-name gradient-text">Sanjay Balan M</h1>
          <p className="hero-role">
            <span>{displayed}</span>
            <span style={{ opacity: 0.7, animation: 'none' }}>|</span>
          </p>
          <p className="hero-desc">
            Aspiring software developer with hands-on experience in backend development
            and web technologies. Focused on clean code and scalable solutions.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              🚀 View Projects
            </a>
            <a href="#contact" className="btn btn-outline" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              📬 Contact Me
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/sanjaybalanm" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.17c-3.34.72-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.73-1.33-1.73-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.79 1.3 3.47.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.66.26 2.88.13 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12C24 5.37 18.63 0 12 0z"/></svg>
            </a>
            <a href="https://linkedin.com/in/sanjay-balan-m-558747316" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/></svg>
            </a>
            <a href="mailto:sanjaybalanmcse2024@citchennai.net" className="social-link" title="Email">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>
        <div className="hero-avatar">
          <img src="/avatar.png" alt="Sanjay Balan M" onError={e => { e.target.style.display='none'; e.target.parentElement.style.display='flex'; e.target.parentElement.style.alignItems='center'; e.target.parentElement.style.justifyContent='center'; e.target.parentElement.style.fontSize='72px'; e.target.parentElement.textContent='👨‍💻'; }} />
        </div>
      </div>
    </section>
  );
}
