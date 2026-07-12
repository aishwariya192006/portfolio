"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy, Code, BookOpen } from "lucide-react";

const experiences = [
  {
    type: "Internship",
    title: "Data Engineering & Gen AI on Cloud",
    company: "Cloud Platforms",
    period: "June 2026",
    description: "Worked on building and managing data pipelines, processing large datasets, and deploying Generative AI applications using cloud platforms. Gained hands-on experience with cloud services, data storage, ETL workflows, and AI model integration.",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    type: "Internship",
    title: "MERN Full Stack Development",
    company: "AlgoTutor",
    period: "Dec 2025",
    description: "Gained practical knowledge of the MERN technology stack (MongoDB, Express.js, React.js, Node.js) and actively participated in real-time project development aligned with modern web development practices.",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
  },
  {
    type: "Internship",
    title: "Web Development Intern",
    company: "OctaNet Services Pvt Ltd",
    period: "Feb - Mar 2025",
    description: "Focused on responsive UI/UX using HTML, CSS, and JavaScript. Gained hands-on experience in full-stack development and learned corporate culture.",
    icon: Code,
    color: "from-green-400 to-emerald-600",
  },
  {
    type: "Achievement",
    title: "1st Place - Inter College Event",
    company: "College Level",
    period: "Recent",
    description: "Secured 1st place in the inter-college level event, demonstrating strong competitive programming and problem-solving skills.",
    icon: Trophy,
    color: "from-yellow-400 to-orange-500",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 min-h-screen relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-4"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">Experience</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            A timeline of my journey through tech, internships, and hackathons.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2" />
          
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center justify-between mb-12 w-full ${isEven ? "md:flex-row-reverse" : "md:flex-row"} flex-row`}
              >
                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block w-5/12" />

                {/* Timeline Icon */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#050816] border-2 border-accent-cyan flex items-center justify-center z-20 shadow-[0_0_15px_#00F5FF]">
                  <exp.icon size={14} className="text-white" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                  <div className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group interactive border border-white/5 hover:border-accent-cyan/30">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${exp.color} text-white mb-4`}>
                      {exp.type}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent-cyan transition-colors">
                      {exp.title}
                    </h3>
                    <div className="text-accent-purple font-medium mt-1 mb-3">{exp.company}</div>
                    <div className="text-sm text-gray-500 mb-4">{exp.period}</div>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
