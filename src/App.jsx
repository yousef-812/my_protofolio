import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpressiveWorks from './components/ImpressiveWorks';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-[#F4F4F6] min-h-screen text-zinc-900 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ImpressiveWorks onSelectProject={setSelectedProject} />
        <Skills />
        <Projects onSelectProject={setSelectedProject} />
        <Contact />
      </main>
      <Footer />

      {/* Case Study Technical Specs Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}

export default App;
