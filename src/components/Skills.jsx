import React from 'react';
import { Layout, Cpu, Wrench, Database, FileCode, CheckCircle } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-5 h-5 text-indigo-400" />,
      skills: ["React", "Next.js", "Tailwind CSS", "Vanilla JS", "HTML5 & CSS3"]
    },
    {
      title: "Backend Development",
      icon: <Cpu className="w-5 h-5 text-violet-400" />,
      skills: [".NET Core", "Node.js", "RESTful APIs", "SignalR (Real-time)"]
    },
    {
      title: "Programming Languages",
      icon: <FileCode className="w-5 h-5 text-emerald-400" />,
      skills: ["JavaScript", "TypeScript", "C#"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      skills: ["Git & GitHub", "VS Code", "Visual Studio"]
    },
    {
      title: "Practices & Soft Skills",
      icon: <CheckCircle className="w-5 h-5 text-rose-400" />,
      skills: ["Clean Code", "System Architecture", "Enterprise Systems & SaaS", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#1E1E1E] text-white flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-left mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight font-display mb-4 text-white">
            Skills that fuel my passion
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl">
            A comprehensive overview of my technical abilities and development methodologies.
          </p>
        </div>

        {/* Custom grid based on Figma */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-[#121214] rounded-2xl p-6 border border-zinc-800/80 flex flex-col justify-between hover:border-zinc-700 transition-all duration-200"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-sm font-display text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skill items as custom list */}
                <ul className="space-y-2">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-xs text-zinc-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
