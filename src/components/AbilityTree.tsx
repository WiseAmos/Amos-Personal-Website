"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Code2, Database } from "lucide-react";

const SKILL_GROUPS = [
  {
    category: "AI & Data Engineering",
    icon: Database,
    skills: ["Python", "Local LLM Optimization", "Llama.cpp", "FastAPI", "STT/TTS Pipelines"],
    color: "text-purple-400 bg-purple-400/10 border-purple-400/30"
  },
  {
    category: "Defensive Security",
    icon: Shield,
    skills: ["Zero-Trust Networks", "Active Directory", "Palo Alto Firewalls", "Malware Analysis", "x64dbg", "Burp Suite"],
    color: "text-accent bg-accent/10 border-accent/30"
  },
  {
    category: "Systems & Architecture",
    icon: Terminal,
    skills: ["Linux Server Administration", "WebSockets", "Redis", "C++ / Assembly", "Hardware IoT (ESP-32)"],
    color: "text-orange-400 bg-orange-400/10 border-orange-400/30"
  },
  {
    category: "High-Performance Frontend",
    icon: Code2,
    skills: ["React 19", "Next.js SSR", "Tailwind CSS", "Framer Motion", "GSAP Scroll Proxies"],
    color: "text-accent-blue bg-accent-blue/10 border-accent-blue/30"
  }
];

export default function AbilityTree() {
  return (
    <section id="about" className="min-h-[100dvh] w-full flex flex-col justify-center p-8 sm:p-16 snap-start relative bg-background border-t border-border">
      <div className="z-10 w-full max-w-5xl mx-auto">
        <h2 className="text-3xl font-mono text-accent mb-2 uppercase tracking-wider">&gt; Operator_Stats</h2>
        <p className="text-foreground/70 mb-12 font-mono text-sm max-w-2xl">
           ANALYSIS COMPLETE. Subject demonstrates high proficiency in secure full-stack development and AI engineering. Proceeding with Ability Tree rendering.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            {SKILL_GROUPS.map((group, index) => {
              const Icon = group.icon;
              return (
                <div key={group.category} className="flex flex-col gap-3">
                  <h3 className="font-mono text-foreground uppercase tracking-widest text-sm flex items-center gap-2 border-b border-border pb-2">
                    <Icon className="w-4 h-4 opacity-70" />
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (skillIdx * 0.05) }}
                        className={`text-xs font-mono px-3 py-1.5 border rounded-sm ${group.color}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-surface/50 border border-border p-6 font-mono text-sm relative h-fit lg:sticky lg:top-32">
            <div className="absolute top-0 left-0 w-2 h-2 bg-accent" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-accent" />
            <h3 className="text-accent-blue mb-4 uppercase">Biography.txt</h3>
            <p className="text-foreground/80 leading-relaxed opacity-90">
              Amos is a Cybersecurity & AI student exploring the intersection of defensive security engineering and large language models.
              <br /><br />
              He builds robust access control systems, custom AI interfaces (like Fuku LLM), and high-performance React architectures. His systems emphasize highly resilient backends, bypassing external API dependencies where possible in favor of localized, high-privacy microservices.
              <br /><br />
              Currently deploying zero-trust solutions and seeking the next challenging "raid".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
