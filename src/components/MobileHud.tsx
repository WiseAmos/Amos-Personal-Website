"use client";

import { User, Code, TerminalSquare, FileText } from "lucide-react";

export default function MobileHud() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 sm:hidden z-40 bg-surface/80 backdrop-blur-md border-t border-border px-4 py-3 flex justify-around items-center">
      <button 
        onClick={() => scrollTo("hero")}
        className="flex flex-col items-center gap-1 text-foreground/70 hover:text-accent transition-colors duration-200 focus:outline-none"
      >
        <TerminalSquare className="w-5 h-5" />
        <span className="text-[10px] font-mono uppercase">System</span>
      </button>

      <button 
        onClick={() => scrollTo("about")}
        className="flex flex-col items-center gap-1 text-foreground/70 hover:text-accent transition-colors duration-200 focus:outline-none"
      >
        <User className="w-5 h-5" />
        <span className="text-[10px] font-mono uppercase">Stats</span>
      </button>

      <button 
        onClick={() => scrollTo("projects")}
        className="flex flex-col items-center gap-1 text-foreground/70 hover:text-accent transition-colors duration-200 focus:outline-none"
      >
        <Code className="w-5 h-5" />
        <span className="text-[10px] font-mono uppercase">Quests</span>
      </button>

      <button 
        onClick={() => scrollTo("resume")}
        className="flex flex-col items-center gap-1 text-foreground/70 hover:text-accent transition-colors duration-200 focus:outline-none"
      >
        <FileText className="w-5 h-5" />
        <span className="text-[10px] font-mono uppercase">Dossier</span>
      </button>
    </div>
  );
}
