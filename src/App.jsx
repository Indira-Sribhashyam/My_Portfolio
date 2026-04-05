import React, { useState, useEffect } from 'react';
import Intro from './components/Intro';
import Hero from './components/Hero';
import CaseFiles from './components/CaseFiles';
import FieldRecords from './components/FieldRecords';
import Skills from './components/Skills';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import ProjectExpo from './components/ProjectExpo';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    localStorage.setItem('hasVisited', 'true');
  };

  return (
    <div className="min-h-screen bg-off-black text-white selection:bg-electric-blue/30 selection:text-white">
      <div className="film-grain" />

      {showIntro ? (
        <Intro onComplete={handleIntroComplete} />
      ) : (
        <div className="animate-in fade-in zoom-in-95 duration-1000 ease-out">
          <header className="fixed top-0 left-0 w-full z-40 p-8 flex justify-between items-center mix-blend-difference pointer-events-none">
            <div className="font-mono text-xs tracking-widest pointer-events-auto">IS.2026</div>
            <nav className="hidden md:flex gap-8 font-mono text-[10px] uppercase tracking-widest pointer-events-auto">
              <a href="#cases" className="hover:text-electric-blue transition-colors">Case Files</a>
              <a href="#records" className="hover:text-electric-blue transition-colors">Field Records</a>
              <a href="#expo" className="hover:text-electric-blue transition-colors">Project Expo</a>
              <a href="#skills" className="hover:text-electric-blue transition-colors">Skills</a>
              <a href="#about" className="hover:text-electric-blue transition-colors">About</a>
            </nav>
          </header>

          <main>
            <Hero />
            <div id="cases">
              <CaseFiles />
            </div>
            <div id="records">
              <FieldRecords />
            </div>
            <div id="expo">
              <ProjectExpo />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="about">
              <About />
            </div>
            <Philosophy />
            <Contact />
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
