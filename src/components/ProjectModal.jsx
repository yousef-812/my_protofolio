import React, { useState } from 'react';
import { X, Cpu, Server, FileText, Database, ShieldAlert, GitFork, Award } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center p-3 md:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="bg-[#121214] text-white rounded-3xl border border-zinc-800 w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] overflow-hidden flex flex-col shadow-2xl relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-zinc-900 border border-zinc-850 hover:bg-zinc-850 hover:text-indigo-400 transition-all duration-200 z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-5 md:p-8 pb-4 border-b border-zinc-900 flex items-center gap-3 md:gap-4 pr-14">
          <div className="p-2 md:p-3 rounded-2xl bg-zinc-900 border border-zinc-800">
            {project.icon}
          </div>
          <div>
            <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-indigo-400 px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              {project.badge || 'Project Specs'}
            </span>
            <h2 className="text-xl md:text-3xl font-bold font-display text-white mt-1">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Tab Navigation (Scrolls horizontally on mobile, prevents wrapping) */}
        <div className="flex px-5 md:px-8 border-b border-zinc-900 text-xs md:text-sm overflow-x-auto whitespace-nowrap scrollbar-none">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 md:px-4 font-semibold border-b-2 transition-all duration-200 cursor-pointer flex-shrink-0 ${activeTab === 'overview' ? 'border-indigo-500 text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
          >
            Overview &amp; Features
          </button>
          <button 
            onClick={() => setActiveTab('specs')}
            className={`py-3 px-3 md:px-4 font-semibold border-b-2 transition-all duration-200 cursor-pointer flex-shrink-0 ${activeTab === 'specs' ? 'border-indigo-500 text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
          >
            Technical Specs
          </button>
          <button 
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-3 md:px-4 font-semibold border-b-2 transition-all duration-200 cursor-pointer flex-shrink-0 ${activeTab === 'architecture' ? 'border-indigo-500 text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
          >
            Architecture &amp; Code
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 md:p-8 overflow-y-auto flex-1 text-left text-zinc-300 text-xs md:text-sm leading-relaxed">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-bold text-sm md:text-base mb-2 font-display">Project Overview</h4>
                <p className="text-zinc-400 leading-relaxed">{project.details.overview}</p>
              </div>

              <div>
                <h4 className="text-white font-bold text-sm md:text-base mb-3 font-display">Core Features &amp; Workflows</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.details.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 bg-zinc-950 p-4 rounded-xl border border-zinc-900">
                      <span className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        {idx + 1}
                      </span>
                      <div>
                        <strong className="text-zinc-200 block text-xs mb-1 font-semibold">{feature.title}</strong>
                        <span className="text-zinc-450 text-[11px] leading-normal">{feature.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: TECH SPECS */}
          {activeTab === 'specs' && (
            <div className="space-y-6">
              <h4 className="text-white font-bold text-sm md:text-base mb-4 font-display">Software Stack &amp; Integrations</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tech specifications table list */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between py-2 border-b border-zinc-900 gap-4">
                    <span className="text-zinc-550 flex items-center gap-2 flex-shrink-0"><Cpu className="w-3.5 h-3.5" /> Frontend</span>
                    <span className="text-zinc-200 font-medium text-[11px] text-right">{project.details.specs.frontend}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-zinc-900 gap-4">
                    <span className="text-zinc-550 flex items-center gap-2 flex-shrink-0"><Server className="w-3.5 h-3.5" /> Backend</span>
                    <span className="text-zinc-200 font-medium text-[11px] text-right">{project.details.specs.backend}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-zinc-900 gap-4">
                    <span className="text-zinc-550 flex items-center gap-2 flex-shrink-0"><Database className="w-3.5 h-3.5" /> Database</span>
                    <span className="text-zinc-200 font-medium text-[11px] text-right">{project.details.specs.database}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-zinc-900 gap-4">
                    <span className="text-zinc-550 flex items-center gap-2 flex-shrink-0"><Award className="w-3.5 h-3.5" /> Integrations</span>
                    <span className="text-zinc-200 font-medium text-[11px] text-right">{project.details.specs.integrations}</span>
                  </div>
                </div>

                {/* Security details card */}
                <div className="bg-[#18181B] p-5 rounded-2xl border border-zinc-800 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2.5 text-amber-500">
                    <ShieldAlert className="w-4.5 h-4.5" />
                    <h5 className="font-bold font-display text-white text-xs">Security &amp; Engineering Focus</h5>
                  </div>
                  <p className="text-zinc-450 text-[11px] leading-relaxed">
                    {project.details.specs.security}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-bold text-sm md:text-base mb-2 font-display">Directory Structure</h4>
                <p className="text-zinc-400 text-[11px] mb-3">Actual code directory organization retrieved from the repository codebase:</p>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-900 font-mono text-[11px] overflow-x-auto text-indigo-300">
                  <pre className="leading-tight">{project.details.architecture.structure}</pre>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold text-sm md:text-base mb-2 font-display flex items-center gap-2">
                  <GitFork className="w-3.5 h-3.5 text-violet-400" /> Deployment &amp; Infrastructure
                </h4>
                <p className="text-zinc-405 text-xs leading-relaxed">
                  {project.details.architecture.deployment}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-5 md:p-6 bg-zinc-950 border-t border-zinc-900 flex justify-between items-center gap-4">
          <div className="hidden sm:flex gap-1.5 overflow-x-auto">
            {project.tech.map((t, idx) => (
              <span key={idx} className="text-[9px] px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-500 rounded font-semibold whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
          <button 
            onClick={onClose}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold text-xs transition-colors duration-200 cursor-pointer ml-auto"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
