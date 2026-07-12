import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => (e) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-card border-none bg-opacity-70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative z-20">
        {/* Brand/Logo */}
        <a 
          href="#home" 
          onClick={handleScroll('home')}
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent font-display"
        >
          yousef.dev
        </a>

        {/* Nav Links - Desktop View */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
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

        {/* Request Service CTA - Desktop View */}
        <a
          href="#contact"
          onClick={handleScroll('contact')}
          className="hidden md:inline-flex px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 rounded-full transition-all duration-200 shadow-lg shadow-indigo-500/20"
        >
          Request Service
        </a>

        {/* Hamburger Menu Toggle Button - Mobile View */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Drawer Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#121214]/98 border-b border-zinc-800/90 backdrop-blur-xl flex flex-col p-6 space-y-4 md:hidden animate-slideDown z-10">
          <a 
            href="#home" 
            onClick={handleScroll('home')} 
            className="text-sm font-semibold text-zinc-200 hover:text-indigo-400 py-2.5 border-b border-zinc-900 transition-colors"
          >
            Home
          </a>
          <a 
            href="#skills" 
            onClick={handleScroll('skills')} 
            className="text-sm font-semibold text-zinc-200 hover:text-indigo-400 py-2.5 border-b border-zinc-900 transition-colors"
          >
            Skills
          </a>
          <a 
            href="#projects" 
            onClick={handleScroll('projects')} 
            className="text-sm font-semibold text-zinc-200 hover:text-indigo-400 py-2.5 border-b border-zinc-900 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={handleScroll('contact')}
            className="w-full mt-2 py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/10"
          >
            Request Service
          </a>
        </div>
      )}
    </nav>
  );
}
