"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code } from "lucide-react";
type Project = {
  id: string;
  title: string;
  objective: string;
  role: string;
  techStack: string[];
  fullDescription: string;
  link?: string;
  github?: string;
};

const MOCK_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Dell InnovateFest Portal",
    objective: "Engineered high-performance voting system.",
    role: "Lead Frontend Engineer",
    techStack: ["React", "Next.js", "Firebase", "Tailwind CSS"],
    fullDescription: "A fully custom web application built to handle high-traffic voting during the Dell InnovateFest. Engineered with Next.js for SSR optimization and Firebase for real-time leaderboards. The system successfully supported hundreds of concurrent users without a single downtime event, securing 1st place overall in technical execution.",
    github: "https://github.com",
  },
  {
    id: "p2",
    title: "Project Fuku LLM",
    objective: "Deploy local, high-privacy conversational agent.",
    role: "AI Integration Specialist",
    techStack: ["Python", "FastAPI", "Llama.cpp", "React"],
    fullDescription: "A self-hosted, air-gapped Large Language Model designed for analyzing sensitive logs without sending data to third-party APIs. Used Llama.cpp to run inference on edge devices, coupled with a highly responsive React frontend.",
  },
  {
    id: "p3",
    title: "Mind Ease AI",
    objective: "Architected real-time voice synthesis and STT pipeline.",
    role: "Full-Stack Developer",
    techStack: ["WebSockets", "NeMo", "Node.js", "Redis"],
    fullDescription: "Built a fully local voice assistant backend that streams audio chunks over WebSockets to Nvidia NeMo models, generating real-time text-to-speech responses with under 500ms latency.",
  },
  {
    id: "p4",
    title: "Trojan / Virus Development",
    objective: "Developed persistent malware bypassing AV signatures.",
    role: "Security Researcher",
    techStack: ["C++", "Assembly", "x64dbg"],
    fullDescription: "Developed a persistent virus/backdoor while bypassing antivirus signature recognition. Conducted advanced reverse engineering using tools like x64dbg.",
  },
  {
    id: "p5",
    title: "Data Visualization for Schools",
    objective: "Built a software solution to visualize students' data efficiently.",
    role: "Full-Stack Developer",
    techStack: ["React", "Flask", "Express.js"],
    fullDescription: "Developed the frontend and backend using React, Flask, and Express to visualize student data efficiently.",
  },
  {
    id: "p6",
    title: "Automated OSINT & Web Scraping",
    objective: "Created OSINT framework for automated background checks.",
    role: "Python Engineer",
    techStack: ["Python", "Selenium", "Cloudflare Bypass"],
    fullDescription: "Created an OSINT framework for automated background checks. Bypassed bot protection mechanisms such as Cloudflare to scrape valuable data.",
  },
  {
    id: "p7",
    title: "Embedded Hacking Tools",
    objective: "Built cybersecurity tools like rubber duckies.",
    role: "Hardware Hacker",
    techStack: ["Raspberry Pi", "ESP-32", "C"],
    fullDescription: "Utilized Raspberry Pi and ESP-32 to build cybersecurity tools like rubber duckies and network packet capture devices for penetration testing.",
  },
  {
    id: "p8",
    title: "NEAT Machine Learning Research",
    objective: "Researched NEAT genetic algorithms for finance.",
    role: "AI Researcher",
    techStack: ["Python", "NEAT", "Neural Networks"],
    fullDescription: "Researched and implemented NEAT genetic algorithms to evolve neural networks. Modified existing algorithms for improved training performance.",
    link: "https://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf",
  },
  {
    id: "p9",
    title: "Server Hardening & Firewalls",
    objective: "Configured and secured Linux and Active Directory servers.",
    role: "System Administrator",
    techStack: ["Linux", "Active Directory", "Palo Alto"],
    fullDescription: "Configured and secured Linux and Active Directory servers. Implemented Palo Alto firewall policies and site-to-site VPNs.",
  },
  {
    id: "p10",
    title: "Penetration Testing & Bug Bounties",
    objective: "Discovered CVSS 8.1 race condition exploit.",
    role: "Bug Hunter",
    techStack: ["Nmap", "Ettercap", "Burp Suite"],
    fullDescription: "Participated in HackerOne programs, discovering a CVSS 8.1 race condition exploit. Conducted security assessments using Nmap, Ettercap, and more.",
  },
  {
    id: "p11",
    title: "Apple Swift Accelerator",
    objective: "Led team to develop and market an iOS application.",
    role: "Team Lead & iOS Dev",
    techStack: ["Swift", "iOS", "AppSec"],
    fullDescription: "Led a team to develop and market an iOS application. Learned application security, branding, and best practices from Apple’s App Developers Program.",
  },
  {
    id: "p12",
    title: "WorldSkills Singapore Training",
    objective: "Training for the 2025 WorldSkills in Web Technologies.",
    role: "Competitor",
    techStack: ["Full-Stack", "DSA", "Databases"],
    fullDescription: "Training for the 2025 WorldSkills competition in Web Technologies. Specializing in full-stack development, database management, and DSA.",
  }
];

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="min-h-screen w-full flex flex-col justify-center p-8 sm:p-16 snap-start relative bg-background border-t border-border">
      <div className="z-10 w-full max-w-5xl mx-auto">
        <h2 className="text-3xl font-mono text-accent mb-2 uppercase tracking-wider">&gt; Data_Fragments</h2>
        <p className="text-foreground/70 mb-12 font-mono text-sm max-w-2xl">
          AUTHORIZED ACCESS: Inspecting project database. Press [A] to inspect details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-surface/40 hover:bg-surface border border-border hover:border-accent p-6 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-mono font-bold text-foreground group-hover:text-accent transition-colors">{project.title}</h3>
                  <span className="text-xs font-mono text-foreground/40 hidden md:block">Press [A]</span>
                </div>
                <p className="text-sm text-foreground/70">{project.objective}</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono text-accent-blue bg-accent-blue/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && <span className="text-[10px] font-mono text-foreground/50 px-2 py-1">+{project.techStack.length - 3}</span>}
                </div>
              </div>
            </motion.div>
          ))}
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
              className="relative w-full max-w-2xl bg-surface border border-accent p-6 sm:p-8 shadow-2xl flex flex-col max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-foreground/50 hover:text-accent transition-colors"
                aria-label="Close Intel Report"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="border-b border-border mb-6 pb-2">
                <span className="text-xs font-mono text-accent-blue uppercase tracking-widest">Intel Report</span>
                <h3 className="text-2xl sm:text-3xl font-mono text-foreground mt-1 mb-2">{selectedProject.title}</h3>
              </div>

              <div className="overflow-y-auto pr-2 custom-scrollbar space-y-6">
                <div>
                  <h4 className="text-xs font-mono text-foreground/50 uppercase mb-1">Role</h4>
                  <p className="text-sm">{selectedProject.role}</p>
                </div>
                
                <div>
                  <h4 className="text-xs font-mono text-foreground/50 uppercase mb-1">Objective</h4>
                  <p className="text-sm font-semibold text-accent">{selectedProject.objective}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-foreground/50 uppercase mb-1">Details</h4>
                  <p className="text-sm leading-relaxed text-foreground/80">{selectedProject.fullDescription}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-foreground/50 uppercase mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map(tech => (
                      <span key={tech} className="text-xs font-mono bg-border/50 text-foreground px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-border mt-4">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-foreground hover:text-accent transition-colors">
                      <Code className="w-4 h-4" /> Source Array
                    </a>
                  )}
                  {selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-foreground hover:text-accent-blue transition-colors">
                      <ExternalLink className="w-4 h-4" /> Access Node
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
