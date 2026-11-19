"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Trophy, Award, ExternalLink, Code2 } from "lucide-react";

type Category = "all" | "internships" | "achievements" | "certifications";

const internships = [
  {
    type: "Internship",
    title: "DATA ENGINEERING & GEN AI ON CLOUD",
    organization: "Cloud Platforms",
    year: "2026",
    description:
      "Worked on building and managing data pipelines, processing large datasets, and deploying Generative AI applications using cloud platforms. Gained hands-on experience with cloud services, data storage, ETL workflows, and AI model integration to develop scalable, data-driven solutions.",
    techStack: ["Python", "SQL", "ETL", "Cloud", "GenAI"],
    hasCertificate: false,
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    type: "Internship",
    title: "ALGOTUTOR-MERN FULL STACK DEVELOPMENT",
    organization: "AlgoTutor",
    year: "2025",
    description:
      "During this internship,I gained practical knowledge of the MERN technology stack(MONGODB,Express.js,React.js,and node.js) and actively participated in real-time project development aligned with modern web development practices",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    hasCertificate: true,
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
  },
  {
    type: "Internship",
    title: "OCTANET SERVICES PVT LTD – WEB DEVELOPMENT",
    organization: "OctaNet Services Pvt Ltd",
    year: "2025",
    description:
      "Using HTML,CSS and JAVASCRIPT focusing on responsive UI/UX. Gained hands-on experience in full-stack development and learnt corporate culture as well.",
    techStack: ["HTML", "CSS", "JavaScript"],
    hasCertificate: true,
    icon: Briefcase,
    color: "from-emerald-400 to-teal-500",
  },
];

const achievements = [
  {
    type: "Achievement",
    title: "Top 20 Finalist | AI for Social Impact Challenge 2026",
    organization: "HCLFoundation & StartupTN",
    year: "2026",
    description:
      "Selected as Top 20 Finalist in the AI for Social Impact Challenge 2026 organized by HCLFoundation & StartupTN.",
    hasCertificate: true,
    icon: Trophy,
    color: "from-amber-400 to-orange-500",
  },
  {
    type: "Achievement",
    title: "National Finalist (6th Rank among 1,006 Teams)",
    organization: "TechCircuit National | WeCode Coders",
    year: "2026",
    description:
      "Secured 6th Rank among 1,006 competing teams nationwide in TechCircuit National organized by WeCode Coders.",
    hasCertificate: true,
    icon: Trophy,
    color: "from-cyan-400 to-blue-500",
  },
  {
    type: "Achievement",
    title: "Secured Second place in Coding Carnival",
    organization: "Coding Carnival",
    year: "2026",
    description: "Secured 2nd place in the Coding Carnival competitive programming contest.",
    hasCertificate: true,
    icon: Trophy,
    color: "from-purple-400 to-indigo-500",
  },
  {
    type: "Achievement",
    title: "Secured 1st place in the inter college level event",
    organization: "Inter College Level",
    year: "2025",
    description: "Secured 1st place in the inter college level event.",
    hasCertificate: true,
    icon: Trophy,
    color: "from-yellow-400 to-amber-500",
  },
];

const certifications = [
  {
    type: "Certification",
    title: "Design Thinking-A Primer",
    organization: "NPTEL",
    year: "2026",
    description: "Certification in Design Thinking - A Primer accredited by NPTEL.",
    hasCertificate: true,
    icon: Award,
    color: "from-cyan-400 to-emerald-500",
  },
  {
    type: "Certification",
    title: "Programming in Java",
    organization: "NPTEL",
    year: "2025",
    description: "Certification in Programming in Java accredited by NPTEL.",
    hasCertificate: true,
    icon: Award,
    color: "from-blue-500 to-purple-500",
  },
  {
    type: "Certification",
    title: "Data Visualization usingTableau",
    organization: "Great Learning",
    year: "2025",
    description: "Professional certification in Data Visualization using Tableau by Great Learning.",
    hasCertificate: true,
    icon: Award,
    color: "from-orange-400 to-red-500",
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const getFilteredItems = () => {
    switch (activeTab) {
      case "internships":
        return internships.map((item) => ({ ...item, category: "internships" as const }));
      case "achievements":
        return achievements.map((item) => ({ ...item, category: "achievements" as const }));
      case "certifications":
        return certifications.map((item) => ({ ...item, category: "certifications" as const }));
      case "all":
      default:
        return [
          ...internships.map((item) => ({ ...item, category: "internships" as const })),
          ...achievements.map((item) => ({ ...item, category: "achievements" as const })),
          ...certifications.map((item) => ({ ...item, category: "certifications" as const })),
        ];
    }
  };

  const filteredItems = getFilteredItems();

  return (
    <section id="experience" className="py-24 px-6 md:px-12 min-h-screen relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-4"
          >
            Experience &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">Recognitions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Internships, competitive hackathons, national rankings, and accredited certifications.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {[
            { id: "all", label: "All Items", count: internships.length + achievements.length + certifications.length },
            { id: "internships", label: "Internships", count: internships.length },
            { id: "achievements", label: "Achievements", count: achievements.length },
            { id: "certifications", label: "Certifications", count: certifications.length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-accent-purple text-[#050816] shadow-lg shadow-orange-500/20"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  activeTab === tab.id ? "bg-black/20 text-[#050816]" : "bg-white/10 text-gray-400"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  layout
                  key={`${item.type}-${item.title}-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-7 rounded-2xl border border-white/5 hover:border-white/15 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${item.color} text-white`}
                        >
                          {item.type}
                        </span>
                        <span className="text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>

                      {item.hasCertificate && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                          Certificate
                          <ExternalLink size={11} />
                        </span>
                      )}
                    </div>

                    <div className="flex items-start gap-3.5 mb-3">
                      <div className="p-2.5 rounded-xl bg-white/5 text-white group-hover:scale-105 transition-transform shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display text-white group-hover:text-accent-cyan transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-accent-purple font-medium text-sm mt-0.5">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-sm mt-3">
                      {item.description}
                    </p>
                  </div>

                  {"techStack" in item && item.techStack && (
                    <div className="mt-5 pt-4 border-t border-white/5">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Tech Stack:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-black/40 text-gray-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}