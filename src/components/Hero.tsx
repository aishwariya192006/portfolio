"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import AIBrain from "./AIBrain";

const roles = [
  "AI Engineer",
  "Data Scientist",
  "Full Stack Developer",
  "Hackathon Finalist",
  "Cloud Learner",
  "Problem Solver",
];

const highlights = [
  { value: "100+", label: "LeetCode Problems" },
  { value: "100+", label: "CodeChef Problems" },
  { value: "1000+", label: "Skillrack Problems" },
  { value: "3", label: "Certifications" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center pt-24 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center z-10 flex-1 mt-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="flex flex-col items-start space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-orange-200/80 font-sans tracking-wide">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-semibold text-white leading-[1.1] tracking-tight">
              Aishwariya <br />
              Jayakumar
            </h1>
          </div>

          <div className="px-6 py-2 rounded-full bg-orange-400/90 text-[#050816] font-bold text-sm md:text-base tracking-wide inline-flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          
          <p className="text-gray-300 max-w-lg text-lg leading-relaxed font-sans pt-2">
            Building intelligent systems with a focus on real-world impact and thoughtful design. Third-year AI & Data Science student.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="px-8 py-3 bg-[#F4F0EB] text-[#2A1E14] font-semibold rounded-xl hover:bg-white transition-colors shadow-sm">
              View projects
            </a>
            <a href="#contact" className="px-8 py-3 bg-transparent border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors">
              Let's connect
            </a>
          </div>
        </motion.div>

        {/* Right Content - Abstract Graphic & Floating Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 3.8 }}
          className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-end rounded-2xl overflow-visible interactive mt-12 lg:mt-0"
        >
          {/* Background shapes mimicking the screenshot graphic */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-[#4A3224]/80 rounded-full blur-[2px] pointer-events-none border border-[#5a3e2d]/50" />
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-[#D47E3D] rounded-3xl rotate-12 blur-[1px] pointer-events-none shadow-2xl" />

          {/* Floating Stats Card */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 4.2 }}
            className="absolute left-0 bottom-4 md:-bottom-12 lg:-left-12 lg:bottom-12 w-72 bg-[#2D2119] border border-white/10 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-4xl font-display font-bold text-[#F4F0EB]">4+</h3>
                <p className="text-gray-400 text-sm mt-1">Projects</p>
              </div>
              <div className="w-8 h-[1px] bg-white/10" />
              <div>
                <h3 className="text-3xl font-display font-bold text-[#D47E3D]">Top 100</h3>
                <p className="text-gray-400 text-sm mt-1">AI for social impact</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
