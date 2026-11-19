"use client";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "AI / GenAI",
    skills: [
      "Large Language Models",
      "RAG",
      "AI Agents",
      "Computer Vision",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    category: "Web & Backend",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "MongoDB",
      "Redis",
    ],
  },
  {
    category: "Programming Languages",
    skills: ["Python", "Java"],
  },
  {
    category: "Core Concepts",
    skills: ["DSA", "OOP", "SQL"],
  },
  {
    category: "Tools",
    skills: [
      "Pycharm",
      "Visual Studio Code",
      "powerBI",
      "Excel",
      "MsOffice",
      "Git",
      "Github",
      "Google colab",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-24 min-h-screen relative">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Core technologies, frameworks, and tools from my technical skillset.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((group, groupIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.1, duration: 0.5 }}
                className="glass-card p-6 rounded-2xl hover:shadow-[0_0_30px_rgba(212,126,61,0.2)] transition-shadow duration-300 group border border-white/5"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-accent-cyan group-hover:text-white transition-colors">
                    {group.category}
                  </h3>
                  <span className="text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-full">
                    {group.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-white/85 hover:text-white hover:bg-white/10 hover:border-accent-purple transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}