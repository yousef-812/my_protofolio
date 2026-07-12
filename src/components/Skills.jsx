import React from 'react';
import { Layout, Cpu, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-indigo-400" />,
      description: "Developing scalable, fast, and accessible single-page applications and responsive layouts.",
      skills: ["React", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3"]
    },
    {
      title: "Backend Development",
      icon: <Cpu className="w-6 h-6 text-violet-400" />,
      description: "Architecting high-performance APIs, database integrations, and secure enterprise services.",
      skills: [".NET / ASP.NET Core", "C#", "Node.js", "RESTful APIs", "SignalR (Real-time)", "Zustand State Management"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6 text-emerald-400" />,
      description: "Utilizing modern development environments and workflows to build clean, maintainable software.",
      skills: ["Git & GitHub", "Visual Studio Code", "Visual Studio Professional", "Enterprise SaaS Deployments", "Clean Code & Best Practices"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-zinc-950/20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-500/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white mb-4">
            Skills that Fuel My Passion
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I specialize in full-stack engineering, combining robust backend logic with smooth interactive frontends.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-8 border border-zinc-900 flex flex-col text-left transition-all duration-300 relative overflow-hidden group"
            >
              {/* Card top border glow on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  {category.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                {category.description}
              </p>

              {/* Skill chips */}
              <div className="mt-auto flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-xs px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800/80 text-gray-300 hover:border-indigo-500/40 hover:text-white transition-colors duration-200"
                  >
                    {skill}
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
