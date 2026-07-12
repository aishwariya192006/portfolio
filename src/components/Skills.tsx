"use client";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C", "C++", "HTML", "CSS", "JavaScript", "SQL"]
  },
  {
    category: "Data Science & AI",
    skills: ["Pandas", "NumPy", "Matplotlib", "Data Structures", "Algorithms"]
  },
  {
    category: "Tools & Cloud",
    skills: ["AWS", "Cloud", "Git", "GitHub", "Google Colab", "PyCharm", "VS Code"]
  },
  {
    category: "Other Tools",
    skills: ["PowerBI", "Excel", "MS Office", "Canva"]
  }
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
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((group, groupIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.1, duration: 0.5 }}
                className="glass-card p-6 rounded-2xl hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] transition-shadow duration-300 group"
              >
                <h3 className="text-xl font-semibold text-accent-cyan mb-6 group-hover:text-white transition-colors">{group.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 hover:border-accent-purple transition-all cursor-default"
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
