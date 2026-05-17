import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>
            Designed &amp; built by{' '}
            <span className="gradient-text">Sanjay Balan M</span>
          </p>
          <p className="footer-sub">© {new Date().getFullYear()} — All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
