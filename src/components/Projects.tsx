"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "SkillTrack",
    subtitle: "Full Stack Learning Dashboard",
    description: "Built a gamified learning platform with AI-generated lessons, live code sandbox, skill gap analyzer mapped to 12 career paths, and JWT authentication with role-based access control.",
    tags: ["React", "JWT", "AI", "Role-Based Access"],
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50"
  },
  {
    title: "Website Link Structure Analyzer",
    subtitle: "Data Science Project",
    description: "Developed a data science application to analyze and visualize website internal link structures. Automated link scraping using BeautifulSoup, performed network analysis with NetworkX, and built an interactive Streamlit dashboard.",
    tags: ["BeautifulSoup", "NetworkX", "Pandas", "Plotly", "Streamlit"],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-cyan-500/50"
  },
  {
    title: "AgriMate AI",
    subtitle: "Intelligent Smart Farming Assistant",
    description: "AI-powered smart farming platform that helps farmers through soil analysis, crop disease detection, smart seed recommendations, weather-based irrigation alerts, market intelligence, and multilingual voice assistance.",
    tags: ["AI", "Crop Detection", "Market Intelligence", "Voice Assistant"],
    color: "from-emerald-500/20 to-green-500/20",
    border: "group-hover:border-emerald-500/50"
  },
  {
    title: "ThermGuard AI",
    subtitle: "Intelligent Thermal Runaway Prediction",
    description: "Developed an AI-powered battery safety platform for early thermal runaway prediction and prevention by continuously analyzing battery temperature, voltage, and current. Integrated real-time cloud monitoring and intelligent mobile alerts.",
    tags: ["Predictive Analytics", "Cloud Monitoring", "Mobile Alerts"],
    color: "from-red-500/20 to-orange-500/20",
    border: "group-hover:border-orange-500/50"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-24 min-h-screen relative">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`group relative glass-card rounded-3xl overflow-hidden transition-all duration-500 ${project.border} cursor-pointer`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-8 h-full flex flex-col z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-accent-cyan font-medium text-sm">{project.subtitle}</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white">
                        <FaGithub size={20} />
                      </button>
                      <button className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white">
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-white/70 leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-black/40 text-white/80 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
