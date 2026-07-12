import React from 'react';
import { Cloud, Database, GraduationCap, ShoppingBag, ArrowUpRight } from 'lucide-react';
import saasCover from '../assets/saas_enterprise_cover.jpg';
import erpCover from '../assets/erp_system_cover.jpg';
import lmsCover from '../assets/lms_platform_cover.jpg';
import shopCover from '../assets/ecommerce_store_cover.jpg';

export default function ImpressiveWorks({ onSelectProject }) {
  const projects = [
    {
      title: "SaaS Enterprise",
      description: "A comprehensive cloud-based SaaS platform for businesses, featuring centralized control portals and an integrated ERP inventory system.",
      icon: <Cloud className="w-4 h-4 text-indigo-400" />,
      tech: ["React", "Tailwind CSS", ".NET Core"],
      cover: saasCover,
      badge: "SaaS & Mediator",
      details: {
        overview: "A specialized multi-tenant command broker and central orchestration system designed to route background scripts, manage distributed execution agents, and configure tenants across containers.",
        features: [
          { title: "Mediator Command Queue", desc: "Express Node.js broker mapping custom HTTP API requests on port 9876. Routes pending/claimed loops from senders to agents." },
          { title: "Central Portal Grid", desc: "A unified control room workspace that displays broker logs, command statuses, agent load, and allows visual execution triggers." },
          { title: "Agent Watcher Loop", desc: "PowerShell worker loop execution engines that automatically claim tasks, update mediator text state buffers, and postback responses." }
        ],
        specs: {
          frontend: "React, Next.js, Tailwind CSS",
          backend: "Node.js (Express), Mediator Broker Pattern, PowerShell scripts",
          database: "JSON State logs & plain-text task buffers",
          integrations: "Local CLI execution loops, REST APIs, flyctl deployment tools",
          security: "CORS locks, isolated client claims, strict local server bindings, and .env production config rules."
        },
        architecture: {
          structure: `SaaS_Enterprise/
├── mediator-server/             # Message Broker
│   ├── server.js                # Core API Server
│   ├── watcher.ps1              # Background watch daemon
│   ├── client.ps1               # Command Dispatch script
│   └── INSTRUCTIONS.md          # Guide & Operations specs
│
├── frontend/                    # Admin portals
│   ├── central-portal/          # SaaS orchestrator view
│   └── erp-front/               # Client-side enterprise dashboard
│
└── e2e-tests/                   # Automated E2E verification`,
          deployment: "The mediator server and central portals are containerized and deployed to Fly.io using custom Dockerfiles and flyctl. Watcher agents execute locally as secure Windows/Linux daemons."
        }
      }
    },
    {
      title: "ERP Master System",
      description: "A complete Enterprise Resource Planning (ERP) system featuring advanced interactive dashboards for data analysis and managing complex daily operations.",
      icon: <Database className="w-4 h-4 text-violet-400" />,
      tech: ["React", "Zustand", ".NET (ASP.NET Core)"],
      cover: erpCover,
      badge: "Double-Entry GL",
      details: {
        overview: "An enterprise-grade business management system featuring automated double-entry general ledger accounting, complete procurement PO flows, and department payroll settings.",
        features: [
          { title: "Accounting General Ledger", desc: "Custom C# ledger engine auto-generating double-entry debits/credits on transactions, yielding dynamic P&L and Balance Sheet reports." },
          { title: "Procurement & PO Cycle", desc: "Formal workflow tracking: creating Purchase Orders, confirming Goods Received, and posting inventory increments & accounts payable." },
          { title: "Granular RBAC Matrix", desc: "Atomic permission control UI allowing admins to toggle access rules like Can.View.Payroll or Can.Approve.PO for individual accounts." }
        ],
        specs: {
          frontend: "React, Zustand State Management, Tailwind CSS",
          backend: "ASP.NET Core, Entity Framework Core",
          database: "PostgreSQL / SQL Server",
          integrations: "Custom PDF rendering templates for payslips, POs, and tax invoices",
          security: "Granular Role-Based Access Control (RBAC) permission matrices, salted password hashing, and secure Bearer JWT tokens."
        },
        architecture: {
          structure: `ERP_System/
├── Client/                      # React frontend
│   ├── src/
│   │   ├── components/          # RBAC tables, charts
│   │   ├── store/               # Zustand state logic
│   │   └── views/               # Financial modules
│
├── Server/                      # ASP.NET Core API
│   ├── Controllers/             # General Ledger & PO logic
│   ├── Models/                  # Double-entry ledger schemas
│   └── Program.cs               # WebApi configurations
│
└── ERP_Usage_Guide.md           # Operation sequence guide`,
          deployment: "Packaged using multi-stage Dockerfiles with separate client/server builds. Deployed to standard VPS hosting environments with an Nginx reverse proxy."
        }
      }
    },
    {
      title: "Educational Platform (LMS)",
      description: "A fully integrated e-learning platform that supports real-time student interactions and secure authentication.",
      icon: <GraduationCap className="w-4 h-4 text-emerald-400" />,
      tech: ["React", "Vite", ".NET Core", "SignalR"],
      cover: lmsCover,
      badge: "WebRTC Video",
      details: {
        overview: "A highly specialized, integrated Quran memorization LMS coordinating online peer-to-peer tutoring classrooms, payment schedules, and tutor performance monitoring.",
        features: [
          { title: "Real-time Video Classrooms", desc: "Seamless WebRTC video streams embedded in dashboards using Daily.co React SDK for direct tutor-student interactive lessons." },
          { title: "SignalR Messaging", desc: "WebSocket instant chat rooms and real-time session notifications directly linking teachers and student groups." },
          { title: "Egyptian Payment Gateway", desc: "Secure EGP wallet recharging and credit card payouts integrated directly via the Kashier payment gateway APIs." }
        ],
        specs: {
          frontend: "React 18, TypeScript, Vite 7, Tailwind CSS 3, React Router 7",
          backend: "ASP.NET Core 10 Web API, Entity Framework Core 10",
          database: "PostgreSQL (Neon cloud-native scale, quran schema)",
          integrations: "Daily.co (Video WebRTC), SignalR (WebSockets), Kashier API, S3 Audio storage",
          security: "JWT Authentication, Google SSO integration, admin document auditing for certified teachers, and CORS-locked origins."
        },
        architecture: {
          structure: `LMS_Bdaey/
├── quran-front/                 # React 18 frontend
│   ├── src/
│   │   ├── pages/               # Tutors, Students, Admins
│   │   ├── context/             # Auth & Session state
│   │   └── services/            # Axios API calls
│
└── backend/                     # ASP.NET Core Web API
    ├── Controllers/             # Lesson slots & wallet endpoints
    ├── Hubs/                    # SignalR chat sockets
    └── Services/                # Payouts & scheduling logic`,
          deployment: "Fully containerized deployment utilizing Docker. The React frontend is served via Node, and both client and server are hosted on Fly.io cloud nodes."
        }
      }
    },
    {
      title: "E-Commerce Store",
      description: "A complete, highly responsive, and scalable e-commerce store solution designed for seamless shopping experiences.",
      icon: <ShoppingBag className="w-4 h-4 text-pink-400" />,
      tech: ["React", "Tailwind CSS", ".NET"],
      cover: shopCover,
      badge: "Angular SSR & Caching",
      details: {
        overview: "A high-performance B2C retail storefront engineered for massive traffic loads, featuring dynamic search engines, Angular SSR page loading, and custom rate limit guards.",
        features: [
          { title: "Angular SSR Rendering", desc: "Server-side rendering (SSR) built with Angular 21 and Node 22, yielding instant crawler indexing and superb load speeds." },
          { title: "Dynamic Hreflang Sitemap", desc: "API sitemap router creating multi-language (EN/AR) sitemaps dynamically compile product links from database on request." },
          { title: "IP Rate Limiter Middleware", desc: "Custom C# RateLimit filter mapping requests to MemoryCache windows to defend APIs against brute-force crawlers." }
        ],
        specs: {
          frontend: "Angular 21 (SSR, Node 22), TypeScript",
          backend: ".NET 10 Web API, AutoMapper 15.1.1, Entity Framework Core",
          database: "PostgreSQL 16 (production) / SQLite (local dev)",
          integrations: "Cloudinary upload APIs, AutoMapper data transfer object (DTO) pipelines",
          security: "CORS configurations, JWT authorization, explicit secure SQLite packages, and customized rate limit policies."
        },
        architecture: {
          structure: `Bdaey_Store/
├── store-front/                 # Angular 21 client
│   ├── src/
│   │   ├── app/                 # SSR modules, shopping cart
│   │   └── environments/        # Production endpoints
│
└── backend/                     # .NET 10 Web API
    ├── Dtos/                    # AutoMapper target mappings
    ├── Filters/                 # Custom Rate-Limiting filter
    └── Controllers/             # Admin controls & checkout`,
          deployment: "Orchestrated using Docker Compose (postgres, API backend, Angular SSR frontend). Deployed via Vercel for frontend components and Fly.io for database/APIs."
        }
      }
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
              onClick={() => onSelectProject(project)}
              className="bg-[#121214] text-white rounded-3xl overflow-hidden border border-zinc-800 flex flex-col justify-between transition-all duration-300 relative group hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5 cursor-pointer"
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
                  <span className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-800/80 backdrop-blur-sm text-indigo-400">
                    Specs ↓
                  </span>
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
