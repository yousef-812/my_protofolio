import React from 'react';
import { Mail, Terminal, Code2 } from 'lucide-react';

const GithubIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex flex-col justify-center items-center px-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left text column */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider w-fit">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
            Available for new opportunities
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display text-white">
            Creative Developer & <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              Full-Stack Engineer
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Driven by curiosity and a love for design. I don't just wonder how the web works; 
            I engineer it from scratch—bridging complex back-end systems with effortless front-end magic.
          </p>

          {/* Call to actions */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg shadow-lg shadow-indigo-500/25 transition-all duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-lg border border-zinc-800 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4 text-gray-500">
            <a
              href="https://github.com/yousef-812"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900/50 rounded-full border border-zinc-800 hover:text-white hover:border-zinc-700 transition-all duration-200"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/yousef-taalip"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900/50 rounded-full border border-zinc-800 hover:text-white hover:border-zinc-700 transition-all duration-200"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:yousefftaalip@gmail.com"
              className="p-3 bg-zinc-900/50 rounded-full border border-zinc-800 hover:text-white hover:border-zinc-700 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right code/terminal column */}
        <div className="lg:col-span-5 w-full">
          <div className="w-full glass-card rounded-xl border border-zinc-800/80 overflow-hidden shadow-2xl">
            {/* Terminal Window Header */}
            <div className="bg-zinc-900/80 px-4 py-3 flex justify-between items-center border-b border-zinc-800/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>yousef.js</span>
              </div>
              <div className="w-12"></div> {/* Spacer for symmetry */}
            </div>

            {/* Terminal Content */}
            <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-zinc-350 bg-black/40">
              <pre className="text-left text-zinc-300">
                <code className="language-javascript">
                  <span className="text-violet-400">const</span>{' '}
                  <span className="text-indigo-300">yousef</span> = {'{'}
                  <br />
                  &nbsp;&nbsp;pronowns:{' '}
                  <span className="text-emerald-400">"he/him"</span>,
                  <br />
                  &nbsp;&nbsp;languages: [
                  <span className="text-emerald-400">"JavaScript"</span>,{' '}
                  <span className="text-emerald-400">"TypeScript"</span>,{' '}
                  <span className="text-emerald-400">"C#"</span>],
                  <br />
                  &nbsp;&nbsp;frontend: [
                  <span className="text-emerald-400">"React"</span>,{' '}
                  <span className="text-emerald-400">"Next.js"</span>,{' '}
                  <span className="text-emerald-400">"Tailwind CSS"</span>],
                  <br />
                  &nbsp;&nbsp;backend: [
                  <span className="text-emerald-400">".NET Core"</span>,{' '}
                  <span className="text-emerald-400">"Node.js"</span>],
                  <br />
                  &nbsp;&nbsp;passion:{' '}
                  <span className="text-emerald-400">
                    "I engineer the web from scratch"
                  </span>
                  ,
                  <br />
                  &nbsp;&nbsp;focus:{' '}
                  <span className="text-emerald-400">
                    "Bridging APIs with frontend magic"
                  </span>
                  <br />
                  {'};'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
