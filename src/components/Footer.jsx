import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-zinc-900 bg-zinc-950/30">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div>
          <p className="text-zinc-500 text-xs">
            &copy; {currentYear} yousef.dev. All rights reserved.
          </p>
        </div>

        {/* Signature from Figma screenshot */}
        <div className="flex flex-col items-center md:items-end gap-1">
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-600">
            your friendly chaos creator
          </span>
          <span className="text-lg font-bold font-display text-white bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Yousef Yousry
          </span>
        </div>
      </div>
    </footer>
  );
}
