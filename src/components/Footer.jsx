import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer({ onAdminClick }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-zinc-900 bg-zinc-950/30">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p className="text-zinc-500 text-xs">
            &copy; {currentYear} yousef.dev. All rights reserved.
          </p>
          <button 
            onClick={onAdminClick}
            className="text-[10px] text-zinc-650 hover:text-indigo-400 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Shield className="w-3 h-3" /> Admin Panel
          </button>
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
