"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code, Terminal } from "lucide-react";

type Project = {
  id: string;
  title: string;
  objective: string;
  role: string;
  techStack: string[];
  fullDescription: string;
  link?: string;
  github?: string;
  featured?: boolean;
  accentClass?: string;
};

const FEATURED_PROJECTS: Project[] = [
  {
    id: "f1",
    title: "Omni-Platform File Indexer",
    objective: "Lightning-fast desktop file lookups & offline mapping.",
    role: "Lead Architect",
    techStack: ["Next.js", "Desktop APIs", "Node.js"],
    fullDescription: "Resolved severe performance issues caused by OneDrive 'Files On-Demand' by implementing a robust file-attribute-based skipping mechanism. Overhauled the UI into a true high-contrast terminal-style interface.",
    featured: true,
    accentClass: "border-purple-400/50 text-purple-400 group-hover:border-purple-400 group-hover:shadow-[0_0_20px_rgba(192,132,252,0.15)]"
  },
  {
    id: "f2",
    title: "Global Wager Protocol",
    objective: "Engineered 'first-to-submit' competitive settlements.",
    role: "Backend Engineer",
    techStack: ["Node.js", "React", "PostgreSQL"],
    fullDescription: "Implemented logic for global challenges requiring strict time-expiry configurations. The system handles automated settlement via wager resolvers and routes funds dynamically without human oversight.",
    featured: true,
    accentClass: "border-orange-400/50 text-orange-400 group-hover:border-orange-400 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.15)]"
  }
];

const MOCK_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Dell InnovateFest Portal",
    objective: "Engineered high-performance voting system.",
    role: "Lead Frontend Engineer",
    techStack: ["React", "Next.js", "Firebase", "Tailwind CSS"],
    fullDescription: "A fully custom web application built to handle high-traffic voting during the Dell InnovateFest. Engineered with Next.js for SSR optimization and Firebase for real-time leaderboards. The system successfully supported hundreds of concurrent users without a single downtime event, securing 1st place overall in technical execution.",
    github: "https://github.com",
    accentClass: "border-border hover:border-accent text-foreground group-hover:text-accent"
  },
  {
    id: "p4",
    title: "Trojan / Virus Development",
    objective: "Developed persistent malware bypassing AV signatures.",
    role: "Security Researcher",
    techStack: ["C++", "Assembly", "x64dbg"],
    fullDescription: "Developed a persistent virus/backdoor while bypassing antivirus signature recognition. Conducted advanced reverse engineering using tools like x64dbg.",
    accentClass: "border-border hover:border-accent text-foreground group-hover:text-accent"
  },
  {
    id: "p5",
    title: "Data Visualization for Schools",
    objective: "Software solution to visualize students' data efficiently.",
    role: "Full-Stack Developer",
    techStack: ["React", "Flask", "Express.js"],
    fullDescription: "Developed the frontend and backend using React, Flask, and Express to visualize student data efficiently.",
    accentClass: "border-border hover:border-accent text-foreground group-hover:text-accent"
  },
  {
    id: "p6",
    title: "Automated OSINT framework",
    objective: "OSINT framework for automated background checks.",
    role: "Python Engineer",
    techStack: ["Python", "Selenium", "Bypasses"],
    fullDescription: "Created an OSINT framework for automated background checks. Bypassed bot protection mechanisms such as Cloudflare to scrape valuable data.",
    accentClass: "border-border hover:border-accent text-foreground group-hover:text-accent"
  },
  {
    id: "p7",
    title: "Embedded Hacking Tools",
    objective: "Built USB Rubber Duckies and packet sniffers.",
    role: "Hardware Hacker",
    techStack: ["Raspberry Pi", "ESP-32", "C"],
    fullDescription: "Utilized Raspberry Pi and ESP-32 to build cybersecurity tools like rubber duckies and network packet capture devices for penetration testing.",
    accentClass: "border-border hover:border-accent text-foreground group-hover:text-accent"
  },
  {
    id: "p8",
    title: "NEAT Algorithmic Evolution",
    objective: "Researched NEAT genetic algorithms for finance.",
    role: "AI Researcher",
    techStack: ["Python", "NEAT", "Neural Networks"],
    fullDescription: "Researched and implemented NEAT genetic algorithms to evolve neural networks. Modified existing algorithms for improved training performance.",
    link: "https://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf",
    accentClass: "border-border hover:border-accent text-foreground group-hover:text-accent"
  },
  {
    id: "p9",
    title: "Server Hardening / Firewalls",
    objective: "Secured Active Directory servers & Firewalls.",
    role: "System Administrator",
    techStack: ["Linux", "Active Directory", "Palo Alto"],
    fullDescription: "Configured and secured Linux and Active Directory servers. Implemented Palo Alto firewall policies and site-to-site VPNs.",
    accentClass: "border-border hover:border-accent text-foreground group-hover:text-accent"
  },
  {
    id: "p10",
    title: "Bug Bounties (HackerOne)",
    objective: "Discovered CVSS 8.1 race condition exploit.",
    role: "Bug Hunter",
    techStack: ["Nmap", "Ettercap", "Burp Suite"],
    fullDescription: "Participated in HackerOne programs, discovering a CVSS 8.1 race condition exploit. Conducted security assessments using Nmap, Ettercap, and more.",
    accentClass: "border-border hover:border-accent text-foreground group-hover:text-accent"
  },
  {
    id: "p11",
    title: "Apple Swift Accelerator",
    objective: "Developed and marketed an internal iOS application.",
    role: "Team Lead & iOS Dev",
    techStack: ["Swift", "iOS", "AppSec"],
    fullDescription: "Led a team to develop and market an iOS application. Learned application security, branding, and best practices from Apple’s App Developers Program.",
    accentClass: "border-border hover:border-accent text-foreground group-hover:text-accent"
  },
  {
    id: "p12",
    title: "WorldSkills SG Core Team",
    objective: "Training for the 2025 Web Technologies bracket.",
    role: "Competitor",
    techStack: ["Full-Stack", "DSA", "Databases"],
    fullDescription: "Training for the 2025 WorldSkills competition in Web Technologies. Specializing in full-stack development, database management, and DSA.",
    accentClass: "border-border hover:border-accent text-foreground group-hover:text-accent"
  }
];

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const renderCard = (project: Project, index: number) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, ease: "easeOut" }}
      onClick={() => setSelectedProject(project)}
      className={`group cursor-pointer bg-surface/20 backdrop-blur-sm border p-0 transition-all duration-500 relative overflow-hidden ${project.accentClass} flex flex-col h-full`}
    >
      {/* Terminal Header */}
      <div className="w-full bg-surface/80 border-b border-inherit px-3 py-2 flex items-center gap-2">
         <div className="w-2 h-2 rounded-full bg-border group-hover:bg-red-500/50 transition-colors" />
         <div className="w-2 h-2 rounded-full bg-border group-hover:bg-yellow-500/50 transition-colors" />
         <div className="w-2 h-2 rounded-full bg-border group-hover:bg-green-500/50 transition-colors" />
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-10">
        <h3 className={`text-lg font-mono font-bold mb-3 transition-colors ${project.featured ? project.accentClass?.split(" ")[0].replace('border-', 'text-').replace('/50','') : 'text-foreground group-hover:text-accent'}`}>{project.title}</h3>
        <p className="text-sm opacity-70 text-foreground mb-6 flex-grow">{project.objective}</p>
        
        <div className="flex gap-2 flex-wrap mt-auto">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="text-[10px] font-mono bg-background/50 border border-border px-2 py-1 rounded text-foreground">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && <span className="text-[10px] font-mono text-foreground/50 px-2 py-1">+{project.techStack.length - 3}</span>}
        </div>
      </div>
      
      {/* Ambient hover light */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-current to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );

  return (
    <section id="projects" className="min-h-[100dvh] w-full flex flex-col justify-center p-8 sm:p-16 sm:py-24 snap-start relative bg-background border-t border-border">
      <div className="z-10 w-full max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-3xl font-mono text-foreground mb-2 uppercase tracking-wider flex items-center gap-3">
            <span className="text-accent">&gt;</span> High_Priority_Ops
          </h2>
          <p className="text-foreground/50 font-mono text-sm max-w-2xl mb-8">
            RECENT DEPLOYMENTS // Advanced Systems Architecture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURED_PROJECTS.map((project, index) => renderCard(project, index))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-mono text-foreground mb-2 uppercase tracking-wider flex items-center gap-3">
            <span className="text-foreground/40">&gt;</span> Archived_Fragments
          </h2>
          <p className="text-foreground/40 font-mono text-xs max-w-2xl mb-8">
            AUTHORIZED LEGACY PORTFOLIO ACCESS.
          </p>
          {/* Using auto-fill grid for better masonry-like dense presentation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {MOCK_PROJECTS.map((project, index) => renderCard(project, index))}
          </div>
        </div>
      </div>

      {/* Modal - Intel Report */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-surface border border-accent p-0 shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col max-h-[90vh] overflow-hidden"
            >
              {/* Modal Terminal Header */}
              <div className="bg-background border-b border-border px-4 py-3 flex justify-between items-center">
                <span className="text-xs font-mono text-accent-blue uppercase tracking-widest flex items-center gap-2">
                  <Terminal className="w-3 h-3" /> Intel_Report.exe
                </span>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-foreground/50 hover:text-red-400 transition-colors focus:outline-none"
                  aria-label="Close Intel Report"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-8 bg-surface">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-mono text-foreground mb-2">{selectedProject.title}</h3>
                  <p className="text-sm font-semibold text-accent">{selectedProject.objective}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-background/50 p-4 border border-border rounded-sm">
                  <div>
                    <h4 className="text-[10px] font-mono text-foreground/50 uppercase mb-1">Assigned Role</h4>
                    <p className="text-sm font-mono">{selectedProject.role}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-foreground/50 uppercase mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.map(tech => (
                        <span key={tech} className="text-[10px] font-mono bg-border/50 text-foreground px-2 py-0.5 rounded-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono text-foreground/50 uppercase mb-2">Executive Summary</h4>
                  <p className="text-sm leading-relaxed text-foreground/80 font-sans">{selectedProject.fullDescription}</p>
                </div>

                <div className="flex gap-4 pt-6 border-t border-border">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-foreground hover:text-accent transition-colors">
                      <Code className="w-4 h-4" /> Source_Array
                    </a>
                  )}
                  {selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-foreground hover:text-accent-blue transition-colors">
                      <ExternalLink className="w-4 h-4" /> Access_Node
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
