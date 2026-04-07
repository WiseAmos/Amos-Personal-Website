"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export default function AiGuide() {
  const [message, setMessage] = useState("Initializing Fuku LLM...");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show AI guide after a short delay
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
      setMessage("Operator, you can scroll down to inspect Amos's skill nodes.");
    }, 4000);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      if (scrollY < vh / 2) {
        setMessage("Operator, scroll down to inspect Amos's skill nodes.");
      } else if (scrollY >= vh / 2 && scrollY < vh * 1.5) {
        setMessage("These are the Ability Trees. Notice the high proficiency in Python and Next.js.");
      } else if (scrollY >= vh * 1.5) {
        setMessage("Database accessed. Select a Data Fragment to view the Intel Report.");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(initialDelay);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-24 right-4 sm:bottom-8 sm:right-8 z-50 flex items-end gap-3 pointer-events-none"
        >
          {/* Speech Bubble */}
          <motion.div 
            key={message}
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            className="bg-surface border border-accent/30 text-foreground font-mono text-xs sm:text-sm p-3 rounded-xl max-w-[200px] shadow-lg shadow-accent/10 relative"
          >
            <p>{message}</p>
            {/* Bubble Tail */}
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-surface border-b border-r border-accent/30 transform rotate-45"></div>
          </motion.div>

          {/* Sprite / Avatar */}
          <div className="w-12 h-12 rounded-full bg-surface border border-accent flex items-center justify-center relative shadow-lg shadow-accent/20">
            <Terminal className="text-accent w-6 h-6" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
