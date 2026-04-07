"use client";

import { motion } from "framer-motion";

const SKILLS = [
  { name: "Python", level: 85, category: "Core" },
  { name: "Next.js", level: 90, category: "Core" },
  { name: "Cybersecurity Ops", level: 75, category: "Specialty" },
  { name: "LLM Pipelines", level: 80, category: "AI" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
];

export default function AbilityTree() {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col justify-center p-8 sm:p-16 snap-start relative bg-background border-t border-border">
      <div className="z-10 w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-mono text-accent mb-2 uppercase tracking-wider">&gt; Operator_Stats</h2>
        <p className="text-foreground/70 mb-12 font-mono text-sm max-w-2xl">
           ANALYSIS COMPLETE. Subject demonstrates high proficiency in secure software development and AI engineering. Proceeding with Ability Tree rendering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="font-mono text-accent-blue uppercase tracking-widest text-sm border-b border-border pb-2">Active Skills</h3>
            {SKILLS.map((skill, index) => (
              <div key={skill.name} className="flex flex-col gap-2">
                <div className="flex justify-between font-mono text-sm">
                  <span className="text-foreground">{skill.name}</span>
                  <span className="text-foreground/50">Lvl {skill.level}</span>
                </div>
                <div className="h-2 w-full bg-surface border border-border overflow-hidden p-[1px]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full bg-accent relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/50" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-surface/50 border border-border p-6 font-mono text-sm relative">
            <div className="absolute top-0 left-0 w-2 h-2 bg-accent" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-accent" />
            <h3 className="text-accent-blue mb-4 uppercase">Biography.txt</h3>
            <p className="text-foreground/80 leading-relaxed opacity-90">
              Amos is a Cybersecurity & AI student exploring the intersection of defensive security engineering and large language models.
              <br /><br />
              He builds robust access control systems, custom AI interfaces (like Fuku LLM), and high-performance React architectures.
              <br /><br />
              Currently deploying zero-trust solutions and seeking the next challenging "raid".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
