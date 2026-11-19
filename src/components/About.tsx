"use client";
import { motion } from "framer-motion";
import { Award, Code2, Terminal, ExternalLink } from "lucide-react";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const educationData = [
  {
    year: "2024 - 2028",
    degree: "B.Tech-AI&DS",
    institution: "Sri Eshwar college of Engineering",
    score: "CGPA : 8.17 (upto 4th sem)",
    color: "#00E5FF", // cyan
  },
  {
    year: "2022 - 2024",
    degree: "HSC",
    institution: "Metro Matriculation Hr Sec School",
    score: "83.8%",
    color: "#8B5CF6", // purple
  },
  {
    year: "2021 - 2022",
    degree: "SSLC",
    institution: "Amala convent Girls Hr Sec School",
    score: "91.6%",
    color: "#D47E3D", // orange
  },
];

const codingProfiles = [
  {
    platform: "Leetcode",
    icon: SiLeetcode,
    stats: "Solved 300+ problems",
    rank: "Ranking: 5,44,710",
    color: "#FFA116",
    linkText: "Profile",
    href: "https://leetcode.com",
  },
  {
    platform: "CodeChef",
    icon: SiCodechef,
    stats: "Solved 180+ problems",
    rank: null,
    color: "#D4A373",
    linkText: "Profile",
    href: "https://www.codechef.com",
  },
  {
    platform: "Skillrack",
    icon: Terminal,
    stats: "Solved 1000+ Problems",
    rank: "Ranking: 21,349",
    highlight: "Completed 5 certificates",
    color: "#00E5FF",
    linkText: "Profile",
    href: "https://www.skillrack.com",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-24 min-h-screen flex flex-col justify-center bg-primary-bg relative">
      <div className="max-w-5xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-2 tracking-tight">
            About <span className="text-accent-cyan">Me</span>
          </h2>
          <p className="text-xl text-accent-purple font-medium">Education &amp; Coding Profile</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold font-display text-white mb-8 flex items-center gap-3">
              <Award className="text-accent-cyan" size={24} />
              Education
            </h3>

            <div className="relative border-l-2 ml-4" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative pl-8 pb-10 last:pb-0"
                >
                  {/* Connecting colored line */}
                  {index < educationData.length - 1 && (
                    <div 
                      className="absolute left-[-2px] top-6 w-[2px] h-[calc(100%+24px)]"
                      style={{
                        background: `linear-gradient(to bottom, ${item.color}, ${educationData[index + 1].color})`
                      }}
                    />
                  )}

                  {/* The Timeline Dot */}
                  <div 
                    className="absolute left-[-7px] top-1.5 w-3.5 h-3.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />

                  <div className="flex flex-col">
                    <span className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: item.color }}>
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-1 tracking-tight">
                      {item.degree}
                    </h4>
                    <p className="text-gray-300 text-sm md:text-base font-medium">
                      {item.institution}
                    </p>
                    <p className="text-accent-cyan text-sm mt-1 font-semibold">
                      {item.score}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Coding Profiles */}
          <div>
            <h3 className="text-2xl font-bold font-display text-white mb-8 flex items-center gap-3">
              <Code2 className="text-accent-cyan" size={24} />
              Coding Profile
            </h3>

            <div className="space-y-5">
              {codingProfiles.map((cp, idx) => (
                <motion.div
                  key={cp.platform}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/15 transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                        <cp.icon size={24} style={{ color: cp.color }} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                          {cp.platform}
                        </h4>
                        <p className="text-accent-purple font-semibold text-sm">
                          {cp.stats}
                        </p>
                      </div>
                    </div>

                    <a
                      href={cp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-white px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      {cp.linkText}
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-2 text-xs">
                    {cp.rank && (
                      <span className="px-3 py-1 rounded-full bg-black/40 text-gray-300 border border-white/5 font-mono">
                        {cp.rank}
                      </span>
                    )}
                    {cp.highlight && (
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
                        {cp.highlight}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}