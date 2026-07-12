"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["A", "AI", "Artificial Intelligence", "Portfolio"];

export default function Loader() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2; // Adjust speed as necessary
      });
    }, 40);

    // Word change animation
    const wordInterval = setInterval(() => {
      setIndex((prev) => {
        if (prev < words.length - 1) {
          return prev + 1;
        }
        clearInterval(wordInterval);
        return prev;
      });
    }, 600); // 600ms per word

    // Total loading time
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Wait 3 seconds total

    return () => {
      clearInterval(progressInterval);
      clearInterval(wordInterval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary-bg"
        >
          {/* Neural Network Abstract BG (Simple dots/lines placeholder for now, could be enhanced) */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
             <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-cyan rounded-full blur-[100px]"></div>
             <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-accent-purple rounded-full blur-[100px]"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="h-20 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan"
                >
                  {words[index]}
                </motion.h1>
              </AnimatePresence>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-sm text-gray-400 font-sans uppercase tracking-widest"
            >
              Loading...
            </motion.p>
            
            <div className="w-64 h-1 bg-white/10 rounded-full mt-4 overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-accent-cyan shadow-[0_0_10px_#00F5FF]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
