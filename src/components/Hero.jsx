import React from 'react';

export default function Hero() {
  const avatarUrl = 'https://github.com/yousef-812.png';

  return (
    <section id="home" className="pt-28 pb-20 px-6 bg-[#F4F4F6] text-[#1E1E1E] flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {/* Large Hero Card Block (matching Figma) */}
        <div className="relative w-full h-[400px] md:h-[500px] bg-[#E4E4E6] rounded-3xl overflow-hidden flex items-center justify-center border border-zinc-300/50 shadow-sm">
          
          {/* Background Text: DEVELOPER & (matches "e Developer &") */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black text-white/70 tracking-tighter text-center uppercase font-display leading-none">
              Developer &amp;<br />Designer
            </h1>
          </div>

          {/* Developer Portrait Image (from GitHub Profile) */}
          <div className="relative z-10 w-[240px] h-[240px] md:w-[350px] md:h-[350px] flex items-center justify-center">
            <img 
              src={avatarUrl} 
              alt="Yousef Yousry" 
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>

        {/* Bio Text Block (matching Figma layout) */}
        <div className="mt-12 text-left max-w-2xl">
          <p className="text-xl md:text-2xl font-medium leading-relaxed font-sans text-zinc-800">
            Driven by curiosity and a love for design. I build simple, functional, and visually dynamic web projects. 
            As a full-stack engineer, I'm always learning and exploring new ideas.
          </p>

          <a 
            href="#skills" 
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold tracking-wider uppercase text-zinc-900 group hover:text-indigo-600 transition-colors duration-200"
          >
            More about me 
            <span className="transform group-hover:translate-y-1 transition-transform duration-200">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
