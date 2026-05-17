import React, { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [msg, setMsg] = useState('');

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

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    setMsg('');
    // Use the backend API URL from env var in production, or relative path in local dev
    const apiBase = import.meta.env.VITE_API_URL || '';
    try {
      const res = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setMsg(data.message || 'Message sent! I\'ll get back to you soon.');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMsg('Network error. Please check your connection.');
    }
  };

  return (
    <section className="section" id="contact" style={{ background: 'rgba(13,21,48,0.6)' }} ref={ref}>
      <div className="container">
        <p className="section-label fade-in">Get In Touch</p>
        <h2 className="section-title fade-in">Contact <span className="gradient-text">Me</span></h2>
        <div className="section-divider fade-in" />
        <div className="contact-grid">
          <div className="contact-info fade-in">
            <h3>Let's work together!</h3>
            <p>
              I'm currently open to new opportunities. Whether you have a project in mind,
              a question, or just want to say hello — my inbox is always open!
            </p>
            <div className="contact-items">
              <a href="mailto:sanjaybalanmcse2024@citchennai.net" className="contact-item">
                <span className="contact-item-icon">📧</span>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 2 }}>Email</div>
                  <div style={{ fontSize: 14 }}>sanjaybalanmcse2024@citchennai.net</div>
                </div>
              </a>
              <a href="tel:6383795983" className="contact-item">
                <span className="contact-item-icon">📱</span>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 2 }}>Phone</div>
                  <div style={{ fontSize: 14 }}>+91 6383795983</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/sanjay-balan-m-558747316" target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-item-icon">💼</span>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 2 }}>LinkedIn</div>
                  <div style={{ fontSize: 14 }}>linkedin.com/in/sanjay-balan-m</div>
                </div>
              </a>
              <a href="https://github.com/sanjaybalanm" target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-item-icon">🐙</span>
                <div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 2 }}>GitHub</div>
                  <div style={{ fontSize: 14 }}>github.com/sanjaybalanm</div>
                </div>
              </a>
            </div>
          </div>
          <div className="contact-form fade-in">
            <form onSubmit={handleSubmit} id="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Hi Sanjay, I'd like to talk about..." value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary" id="submit-btn" disabled={status === 'loading'} style={{ width: '100%', justifyContent: 'center' }}>
                {status === 'loading' ? '⏳ Sending...' : '🚀 Send Message'}
              </button>
              {msg && (
                <div className={`form-msg ${status === 'success' ? 'success' : 'error'}`}>
                  {status === 'success' ? '✅ ' : '❌ '}{msg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
