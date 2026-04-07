"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BOOT_LOGS = [
  "Initialize neural subsystems... [OK]",
  "Bypassing mainframe security... [OK]",
  "Loading user profile 'Amos'... [OK]",
  "Access Granted. Welcome, Operator.",
  "Scroll to initiate system scan."
];

export default function BootSequence() {
  const [logs, setLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < BOOT_LOGS.length) {
      const timeout = setTimeout(() => {
        setLogs((prev) => [...prev, BOOT_LOGS[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, currentIndex === BOOT_LOGS.length - 1 ? 1000 : 500); // Wait longer before final line
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section className="h-[100dvh] w-full flex flex-col justify-end p-8 sm:p-16 pb-32 snap-start relative overflow-hidden bg-background">
      {/* Background ambient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface/50 via-background to-background pointer-events-none"></div>
      
      <div className="z-10 w-full max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-mono text-foreground font-bold mb-8 uppercase tracking-widest leading-tight">
          System<br/><span className="text-accent">Booting</span>
        </h1>

        <div className="font-mono text-sm sm:text-lg flex flex-col space-y-2">
          {logs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-center space-x-2 ${
                index >= BOOT_LOGS.length - 2 ? "text-accent" : "text-foreground/70"
              }`}
            >
              <span className="opacity-50">&gt;</span>
              <span>{log}</span>
              {index === BOOT_LOGS.length - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-5 bg-accent inline-block ml-2 align-middle"
                />
              )}
            </motion.div>
          ))}
          {currentIndex < BOOT_LOGS.length && (
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-5 bg-foreground/70 inline-block align-middle"
            />
          )}
        </div>
      </div>
    </section>
  );
}
