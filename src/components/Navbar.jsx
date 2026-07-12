import React from 'react';

export default function Navbar() {
  const handleScroll = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-card border-none bg-opacity-70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand/Logo */}
        <a 
          href="#home" 
          onClick={handleScroll('home')}
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent font-display"
        >
          yousef.dev
        </a>

        {/* Nav Links */}
        <div className="flex gap-8 text-sm font-medium text-gray-300">
          <a href="#home" onClick={handleScroll('home')} className="hover:text-white transition-colors duration-200">
            Home
          </a>
          <a href="#skills" onClick={handleScroll('skills')} className="hover:text-white transition-colors duration-200">
            Skills
          </a>
          <a href="#projects" onClick={handleScroll('projects')} className="hover:text-white transition-colors duration-200">
            Projects
          </a>
        </div>

        {/* Contact CTA */}
        <a
          href="#contact"
          onClick={handleScroll('contact')}
          className="hidden sm:inline-flex px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 rounded-full transition-all duration-200 shadow-lg shadow-indigo-500/20"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
