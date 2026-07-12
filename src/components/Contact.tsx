"use client";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";
import { ArrowDown } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-24 min-h-screen relative flex items-center justify-center bg-primary-bg overflow-hidden">
      
      {/* Background Decorative Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#4A3224]/80 rounded-full blur-[2px] pointer-events-none" />
      <div className="absolute top-12 right-12 w-6 h-6 bg-[#00E5FF] rounded-full blur-[1px] pointer-events-none" />
      <div className="absolute bottom-32 left-32 w-4 h-4 bg-[#D47E3D] rounded-full blur-[1px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-10 w-64 h-64 bg-[#3B2A45]/80 rounded-[4rem] rotate-12 blur-[2px] pointer-events-none" />

      <div className="max-w-5xl w-full z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#00E5FF] font-semibold tracking-widest text-sm uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-6 tracking-tight text-white">
            Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D47E3D] via-[#8B5CF6] to-[#00E5FF]">intelligent</span> solutions
          </h2>
          <p className="text-[#D47E3D] text-lg md:text-xl font-medium">
            Open for new opportunities. Pick your preferred way to connect.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          
          {/* Email Card */}
          <motion.a
            href="mailto:email@example.com"
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            viewport={{ once: true }}
            className="w-40 h-48 bg-[#21160F] border border-white/5 rounded-3xl flex flex-col items-center justify-center gap-4 shadow-xl cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#4A3224] flex items-center justify-center text-[#D47E3D]">
              <HiAtSymbol size={28} />
            </div>
            <span className="text-white font-semibold">Email</span>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-40 h-48 bg-[#21160F] border border-white/5 rounded-3xl flex flex-col items-center justify-center gap-4 shadow-xl cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#3B2A45] flex items-center justify-center text-[#8B5CF6]">
              <FaLinkedinIn size={28} />
            </div>
            <span className="text-white font-semibold">LinkedIn</span>
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            href="https://github.com"
            target="_blank"
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-40 h-48 bg-[#21160F] border border-white/5 rounded-3xl flex flex-col items-center justify-center gap-4 shadow-xl cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#1A332B] flex items-center justify-center text-[#10B981]">
              <span className="font-bold text-xl">gh</span>
            </div>
            <span className="text-white font-semibold">GitHub</span>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
