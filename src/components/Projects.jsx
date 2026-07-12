import React from 'react';
import { Cloud, Database, GraduationCap, ShoppingBag, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "SaaS Enterprise Platform",
      description: "A comprehensive cloud-based SaaS platform for businesses, featuring centralized control portals, role-based access, and an integrated real-time ERP inventory manager.",
      icon: <Cloud className="w-6 h-6 text-indigo-400" />,
      tech: ["React", "Tailwind CSS", ".NET Core", "SQL Server"],
      badge: "Enterprise"
    },
    {
      title: "ERP Master System",
      description: "A full-scale Enterprise Resource Planning (ERP) solution with customized interactive dashboards, detailed data analysis pipelines, and workflow automation trackers.",
      icon: <Database className="w-6 h-6 text-violet-400" />,
      tech: ["React", "Zustand", ".NET (ASP.NET Core)", "PostgreSQL"],
      badge: "SaaS"
    },
    {
      title: "Educational Platform (LMS)",
      description: "A fully integrated Learning Management System supporting real-time student-teacher interaction rooms, secure authentication, and active session progress tracking.",
      icon: <GraduationCap className="w-6 h-6 text-emerald-400" />,
      tech: ["React", "Vite", ".NET Core", "SignalR"],
      badge: "Real-time"
    },
    {
      title: "Scalable E-Commerce Store",
      description: "A complete, highly responsive online storefront solution optimized for SEO and high traffic, featuring a streamlined checkout flow and robust catalog management.",
      icon: <ShoppingBag className="w-6 h-6 text-pink-400" />,
      tech: ["React", "Tailwind CSS", ".NET Core", "Redis"],
      badge: "B2C Store"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white mb-4">
            welcome to my realm of wild projects and awesome creations
          </h2>
          <p className="text-gray-400">
            A curated list of enterprise platforms, real-time web applications, and digital products I have built.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-8 border border-zinc-900 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* Header row */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                    {project.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-gray-400">
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-display text-white mb-3 flex items-center gap-2 group-hover:text-indigo-400 transition-colors duration-200">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Footer Tech badges */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-xs px-2.5 py-1 rounded bg-zinc-950 text-gray-400 border border-zinc-900"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
