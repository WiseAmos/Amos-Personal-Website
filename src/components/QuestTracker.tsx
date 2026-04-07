"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "System Boot" },
  { id: "about", label: "Ability Tree" },
  { id: "projects", label: "Data Fragments" }
];

export default function QuestTracker() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      
      const currentIndex = Math.min(
        SECTIONS.length - 1,
        Math.max(0, Math.floor((scrollY + vh / 2) / vh))
      );
      
      setActiveSection(currentIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-4">
      {SECTIONS.map((section, index) => {
        const isActive = index === activeSection;
        const isPast = index < activeSection;

        return (
          <div key={section.id} className="relative flex items-center group">
            {/* Label (shows on hover or active) */}
            <motion.div 
              initial={false}
              animate={{ 
                opacity: isActive ? 1 : 0, 
                x: isActive ? 0 : 10,
              }}
              className="absolute right-8 mr-2 font-mono text-xs whitespace-nowrap hidden md:block text-accent transition-opacity group-hover:opacity-100 group-hover:x-0"
            >
              {section.label}
            </motion.div>

            {/* Node */}
            <div 
              className={`w-3 h-3 rotate-45 border ${
                isActive 
                  ? "bg-accent border-accent shadow-[0_0_10px_rgba(57,255,20,0.5)]" 
                  : isPast 
                    ? "bg-accent/40 border-accent/40" 
                    : "bg-surface border-border"
              } transition-colors duration-300`}
            />

            {/* Connecting Line */}
            {index < SECTIONS.length - 1 && (
              <div 
                className={`absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-8 ${
                  isPast || isActive ? "bg-accent/40" : "bg-border"
                } transition-colors duration-300`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
