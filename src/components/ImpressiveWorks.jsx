import React from 'react';
import { Cloud, Database, GraduationCap, ShoppingBag, ArrowUpRight } from 'lucide-react';
import saasCover from '../assets/saas_enterprise_cover.jpg';
import erpCover from '../assets/erp_system_cover.jpg';
import lmsCover from '../assets/lms_platform_cover.jpg';
import shopCover from '../assets/ecommerce_store_cover.jpg';

export default function ImpressiveWorks() {
  const projects = [
    {
      title: "SaaS Enterprise",
      description: "A comprehensive cloud-based SaaS platform for businesses, featuring centralized control portals and an integrated ERP inventory system.",
      icon: <Cloud className="w-4 h-4 text-indigo-400" />,
      tech: ["React", "Tailwind CSS", ".NET Core"],
      cover: saasCover,
      link: "#"
    },
    {
      title: "ERP Master System",
      description: "A complete Enterprise Resource Planning (ERP) system featuring advanced interactive dashboards for data analysis and managing complex daily operations.",
      icon: <Database className="w-4 h-4 text-violet-400" />,
      tech: ["React", "Zustand", ".NET (ASP.NET Core)"],
      cover: erpCover,
      link: "#"
    },
    {
      title: "Educational Platform (LMS)",
      description: "A fully integrated e-learning platform that supports real-time student interactions and secure authentication.",
      icon: <GraduationCap className="w-4 h-4 text-emerald-400" />,
      tech: ["React", "Vite", ".NET Core", "SignalR"],
      cover: lmsCover,
      link: "#"
    },
    {
      title: "E-Commerce Store",
      description: "A complete, highly responsive, and scalable e-commerce store solution designed for seamless shopping experiences.",
      icon: <ShoppingBag className="w-4 h-4 text-pink-400" />,
      tech: ["React", "Tailwind CSS", ".NET"],
      cover: shopCover,
      link: "#"
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#F4F4F6] text-[#1E1E1E] flex flex-col items-center border-t border-zinc-200">
      <div className="max-w-4xl w-full">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold tracking-tight font-display mb-12 text-[#1E1E1E]">
          Impressive Works
        </h2>

        {/* 2-Column Grid (matches Figma) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#121214] text-white rounded-3xl overflow-hidden border border-zinc-800 flex flex-col justify-between transition-all duration-300 relative group hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5"
            >
              <div>
                {/* Project Cover Image */}
                <div className="w-full h-48 bg-zinc-950 overflow-hidden relative border-b border-zinc-800">
                  <img 
                    src={project.cover} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 p-2.5 rounded-full bg-zinc-900/90 border border-zinc-800/80 backdrop-blur-sm">
                    {project.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  {/* Title */}
                  <h3 className="text-xl font-bold font-display mb-3 flex items-center gap-2 group-hover:text-indigo-400 transition-colors duration-200">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="mx-8 mb-8 pt-4 border-t border-zinc-800 flex flex-wrap gap-2">
                {project.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-xs px-2.5 py-1 rounded-md bg-zinc-950 text-zinc-500 border border-zinc-900 font-medium"
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
