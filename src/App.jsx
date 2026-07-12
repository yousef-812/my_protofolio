import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpressiveWorks from './components/ImpressiveWorks';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className="bg-[#F4F4F6] min-h-screen text-zinc-900 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ImpressiveWorks onSelectProject={setSelectedProject} />
        <Skills />
        <Contact />
      </main>
      <Footer onAdminClick={() => setShowAdmin(true)} />

      {/* Case Study Technical Specs Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Admin Dashboard Modal */}
      {showAdmin && (
        <AdminDashboard 
          onClose={() => setShowAdmin(false)} 
        />
      )}
    </div>
  );
}

export default App;
