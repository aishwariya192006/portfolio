"use client";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "WebPulse",
    subtitle: "Website Intelligence & SEO Analytics Dashboard",
    year: "2026",
    description:
      "Built a website analytics dashboard to analyze page structure, internal links, and SEO metrics, using graph-based analysis to identify important pages and improve website organization.",
    techStack: ["Python", "Pandas", "BeautifulSoup", "NetworkX", "Streamlit"],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-cyan-500/50",
    hasGithub: false,
    githubUrl: "https://github.com",
  },
  {
    title: "AgriMate AI",
    subtitle: "Intelligent Smart Farming Assistant",
    year: "2026",
    description:
      "AgriMate AI is an AI-powered smart farming platform that helps farmers through soil analysis, crop disease detection, smart seed recommendations, weather-based irrigation alerts, market intelligence, government scheme awareness, and multilingual voice assistance. It provides personalized recommendations to improve productivity, reduce crop losses, promote sustainable agriculture, and increase farmers' profitability.",
    techStack: ["Python", "AI/ML", "Computer Vision", "GenAI"],
    color: "from-emerald-500/20 to-green-500/20",
    border: "group-hover:border-emerald-500/50",
    hasGithub: true,
    githubUrl: "https://github.com",
  },
  {
    title: "MovieSense",
    subtitle: "Movie Recommendation & Analytics System",
    year: "2025",
    description:
      "Built a movie recommendation system that suggests similar movies based on genres, keywords, cast, and story details using TF-IDF and cosine similarity. Developed an interactive dashboard to explore movie ratings, genres, popularity, and trends, with personalized filters and recommendation insights.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Plotly"],
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
    hasGithub: false,
    githubUrl: "https://github.com",
  },
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real-world systems, intelligence dashboards, and AI-driven solutions built with modern technology stacks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectsData.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`group relative glass-card rounded-3xl overflow-hidden transition-all duration-500 ${project.border} border border-white/5 flex flex-col`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-7 h-full flex flex-col z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-accent-cyan">
                          {project.year}
                        </span>
                        {project.hasGithub && (
                          <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            [GITHUB]
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-accent-purple font-medium text-sm">{project.subtitle}</p>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 hover:bg-white/15 rounded-full transition-colors text-white/70 hover:text-white"
                        title="GitHub Repository"
                      >
                        <FaGithub size={18} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-white/75 leading-relaxed text-sm mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                      Tech Stack:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-black/40 text-white/80 border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
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