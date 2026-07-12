import React from 'react';
import { Home, User, Cpu, FolderGit2, Mail, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const avatarUrl = 'https://github.com/yousef-812.png';

  const handleScroll = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-12 px-6 bg-[#F4F4F6] text-[#1E1E1E] flex flex-col items-center">
      <div className="max-w-4xl w-full">
        
        {/* Large Hero Card Block (matching Figma screenshot) */}
        <div className="relative w-full h-[400px] md:h-[500px] bg-[#E4E4E6] rounded-3xl overflow-hidden border border-zinc-300/50 shadow-sm flex flex-col justify-between p-6 md:p-8">
          
          {/* Top row elements */}
          <div className="flex justify-between items-start z-10 w-full">
            {/* Top-left: Code author */}
            <span className="text-[10px] md:text-xs font-semibold tracking-wider text-zinc-500 font-mono">
              @ Code by Yousef
            </span>
            {/* Top-right: Mini paragraph */}
            <p className="text-[10px] md:text-xs text-zinc-500 max-w-[200px] md:max-w-[280px] text-right leading-relaxed font-medium">
              Passionate Full-Stack Web Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies.
            </p>
          </div>

          {/* Center Background Text & Portrait Image */}
          <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none">
            <h1 className="text-[55px] sm:text-[90px] md:text-[110px] font-black text-white/80 tracking-tighter leading-none text-center uppercase font-display">
              Web<br />Developer
            </h1>
          </div>

          {/* Portrait Container */}
          <div className="absolute inset-0 flex items-center justify-center z-5 pointer-events-none">
            <div className="w-[200px] h-[200px] md:w-[320px] md:h-[320px] flex items-center justify-center">
              <img 
                src={avatarUrl} 
                alt="Yousef Yousry" 
                className="w-full h-full object-cover rounded-full border-4 border-white/60 shadow-lg grayscale hover:grayscale-0 transition-all duration-300 pointer-events-auto"
              />
            </div>
          </div>

          {/* Right Floating Arrow Button */}
          <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-10">
            <a 
              href="#projects" 
              onClick={handleScroll('projects')}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/40 hover:text-indigo-600 flex items-center justify-center text-zinc-800 transition-all duration-200"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          {/* BOTTOM: Floating Capsule Dock Menu (matching Figma screenshot) */}
          <div className="w-full flex justify-center z-10 pb-2">
            <div className="flex items-center gap-5 px-5 py-2.5 bg-black/60 border border-white/10 backdrop-blur-lg rounded-full shadow-xl">
              <a href="#home" onClick={handleScroll('home')} title="Home" className="text-white/70 hover:text-white transition-colors duration-200">
                <Home className="w-4 h-4" />
              </a>
              <span className="w-[1px] h-3.5 bg-white/10"></span>
              <a href="#skills" onClick={handleScroll('skills')} title="Skills" className="text-white/70 hover:text-white transition-colors duration-200">
                <Cpu className="w-4 h-4" />
              </a>
              <span className="w-[1px] h-3.5 bg-white/10"></span>
              <a href="#projects" onClick={handleScroll('projects')} title="Projects" className="text-white/70 hover:text-white transition-colors duration-200">
                <FolderGit2 className="w-4 h-4" />
              </a>
              <span className="w-[1px] h-3.5 bg-white/10"></span>
              <a href="#contact" onClick={handleScroll('contact')} title="Contact" className="text-white/70 hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Details Row (matching Figma screenshot) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-sm md:text-base leading-relaxed">
          {/* Left Column: Bullet point + Bio */}
          <div className="flex gap-4 items-start">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 mt-2 flex-shrink-0"></span>
            <p className="font-semibold text-zinc-850">
              Driven by curiosity and a love for design, I create simple, functional, and visually striking digital experiences. As a student, I'm always learning and exploring new ideas.
            </p>
          </div>

          {/* Right Column: Paragraph + Link */}
          <div className="flex flex-col justify-between h-full pl-0 md:pl-6">
            <p className="text-zinc-500 font-medium text-xs md:text-sm">
              The fusion of my passion for design, development, and seamless user experiences places me at the intersection of creativity and technology in the digital world.
            </p>
            <a 
              href="#skills" 
              onClick={handleScroll('skills')}
              className="inline-flex items-center gap-1.5 mt-4 text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-900 pb-0.5 w-fit hover:text-indigo-600 hover:border-indigo-600 transition-all duration-200"
            >
              More about me 
              <span>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
