import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

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

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative bg-zinc-950/10">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="max-w-4xl mx-auto glass-card rounded-2xl p-12 border border-zinc-900 text-center relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-emerald-500"></div>

        {/* Small Icon Bubble */}
        <div className="w-12 h-12 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center mx-auto mb-6">
          <MessageSquare className="w-5 h-5" />
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white mb-4">
          Got a project in mind?
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
          Let's collaborate! Feel free to reach out for project inquiries, collaboration, or just a chat about technology.
        </p>

        {/* Giant CTA Button */}
        <a 
          href="mailto:yousefftaalip@gmail.com" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/30 transition-all duration-200 text-base"
        >
          <Mail className="w-5 h-5" />
          yousefftaalip@gmail.com
        </a>

        {/* Social Link Row */}
        <div className="flex justify-center gap-6 mt-12 pt-8 border-t border-zinc-900 text-gray-500">
          <a 
            href="https://www.linkedin.com/in/yousef-taalip" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors duration-200"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/yousef-812" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors duration-200"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
