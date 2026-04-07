"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";

const REVIEWS = [
  {
    name: "Emmanuel Chang (Teammate)",
    description: "Amos is an exceptionally skilled technical teammate with a deep understanding of cybersecurity and software development. His ability to rapidly grasp complex concepts and implement effective solutions makes him a valuable asset in any project. Working alongside him, I’ve seen firsthand how he combines technical expertise with problem-solving skills to develop innovative solutions that optimize both security and efficiency. His adaptability and willingness to explore new technologies make collaboration both productive and insightful.",
    image: "/reviews/emmanuel.jpeg",
  },
  {
    name: "Ian Lim (Teammate)",
    description: "Amos is not only a technically proficient teammate but also a strong and inspiring leader. His ability to drive the team forward stems from his deep technical expertise in cybersecurity, software development, and system architecture, as well as his ability to keep everyone motivated. He ensures that the team stays focused and works cohesively by fostering a collaborative environment where every member's strengths are utilized effectively. His leadership qualities, coupled with his problem-solving mindset, make him an invaluable team player in both technical and strategic roles.",
    image: "/reviews/ian.jpeg",
  },
  {
    name: "Bryan Goh (Rizzer)",
    description: "Amos is a hardworking teammate, during our WISP assignment, he was the one thing between me and going insane as he actually did the work! he is amazing to work with (pls get with him xin er).",
    image: "/reviews/bryan.jpeg",
  }
];

export default function Resume() {
  const [index, setIndex] = useState(0);

  const nextReview = (dir: "left" | "right") => {
    if (dir === "left") {
      setIndex((prev) => (prev > 0 ? prev - 1 : REVIEWS.length - 1));
    } else {
      setIndex((prev) => (prev < REVIEWS.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section id="resume" className="min-h-screen w-full flex flex-col items-center justify-center p-8 sm:p-16 snap-start relative bg-background border-t border-border">
      <div className="z-10 w-full max-w-5xl mx-auto flex flex-col gap-12">
        <div>
          <h2 className="text-3xl font-mono text-accent mb-2 uppercase tracking-wider">&gt; Squad_Comm_Logs</h2>
          <p className="text-foreground/70 mb-4 font-mono text-sm max-w-2xl">
            Decrypting teammate testimonies and fetching Operator Dossier (Resume PDF).
          </p>
        </div>

        {/* Testimonials */}
        <div className="w-full bg-surface/50 border border-border p-6 sm:p-10 relative overflow-hidden flex flex-col sm:flex-row items-center gap-8 min-h-[300px]">
          <div className="absolute top-0 left-0 w-2 h-2 bg-accent opacity-50" />
          
          <button 
            onClick={() => nextReview("left")} 
            className="hidden sm:flex absolute left-4 z-20 text-foreground/50 hover:text-accent transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <div className="w-full max-w-3xl mx-auto relative z-10 flex flex-col items-center text-center">
             <AnimatePresence mode="wait">
               <motion.div
                 key={index}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.3 }}
                 className="flex flex-col items-center gap-6"
               >
                 {/* Fallback avatar if local image missing */}
                 <div className="w-20 h-20 rounded-full bg-border overflow-hidden border-2 border-accent relative">
                   <img 
                     src={REVIEWS[index].image} 
                     alt={REVIEWS[index].name} 
                     className="object-cover w-full h-full"
                     onError={(e) => {
                       (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${REVIEWS[index].name.split(' ')[0]}&background=222&color=39ff14`;
                     }}
                   />
                 </div>
                 <div>
                   <h3 className="font-mono text-accent mb-3">{REVIEWS[index].name}</h3>
                   <p className="text-sm font-sans text-foreground/80 leading-relaxed italic max-w-2xl mx-auto">
                     "{REVIEWS[index].description}"
                   </p>
                 </div>
               </motion.div>
             </AnimatePresence>
             
             <div className="flex gap-4 mt-8 sm:hidden">
                <button onClick={() => nextReview("left")} className="text-foreground/50 hover:text-accent p-2">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={() => nextReview("right")} className="text-foreground/50 hover:text-accent p-2">
                  <ChevronRight className="w-6 h-6" />
                </button>
             </div>
          </div>

          <button 
            onClick={() => nextReview("right")} 
            className="hidden sm:flex absolute right-4 z-20 text-foreground/50 hover:text-accent transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* PDF Iframe */}
        <div className="w-full flex justify-center flex-col items-center gap-4">
          <div className="w-full flex items-center justify-between border-b border-border pb-2">
            <h3 className="font-mono text-accent-blue uppercase tracking-widest text-sm flex items-center gap-2">
              <FileText className="w-4 h-4" /> Operator_Dossier.pdf
            </h3>
            <a 
              href="/pdf/amos.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-mono bg-surface border border-border px-3 py-1 hover:border-accent hover:text-accent transition-all"
            >
              [ Download ]
            </a>
          </div>
          <div className="w-full h-[600px] border border-border bg-surface p-2">
            <iframe 
              src="/pdf/amos.pdf" 
              className="w-full h-full border-none"
              title="Amos Resume"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
