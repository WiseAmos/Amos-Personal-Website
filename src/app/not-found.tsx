"use client";

import Link from "next/link";
import { TerminalSquare, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center bg-background text-foreground bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] px-6 from-surface/50 via-background to-background relative overflow-hidden">
      
      {/* Glitch Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: "linear-gradient(transparent 50%, rgba(0, 255, 0, 0.02) 50%)", backgroundSize: "100% 4px" }} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl border border-accent p-8 sm:p-16 bg-surface/50 backdrop-blur-sm shadow-[0_0_30px_rgba(57,255,20,0.1)]">
        <AlertTriangle className="text-accent w-16 h-16 mb-6 opacity-80" />
        
        <h1 className="text-6xl font-mono text-accent font-bold mb-4 tracking-widest">
          404
        </h1>
        
        <h2 className="text-xl sm:text-2xl font-mono text-foreground mb-6 uppercase">
          Sector Not Found
        </h2>
        
        <p className="text-foreground/70 font-mono text-sm max-w-md mb-8 leading-relaxed">
          WARNING: The requested directory does not exist in the mainframe. Access denied or data fragment corrupted.
        </p>

        <Link 
          href="/" 
          className="flex items-center gap-2 group border border-border bg-background hover:border-accent hover:bg-surface px-6 py-3 transition-colors duration-300"
        >
          <TerminalSquare className="w-5 h-5 text-foreground/70 group-hover:text-accent transition-colors" />
          <span className="font-mono text-sm uppercase tracking-widest group-hover:text-accent transition-colors">
            Return to Root
          </span>
        </Link>
      </div>
    </div>
  );
}
