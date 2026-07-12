"use client";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2021 - 2022",
    title: "SSLC",
    desc: "Amala Convent Girls Hr Sec School (91.6%)",
    color: "#D47E3D", // orange
  },
  {
    year: "2022 - 2024",
    title: "HSC",
    desc: "Metro Matriculation Hr Sec School (83.8%)",
    color: "#8B5CF6", // purple
  },
  {
    year: "2024 - 2028",
    title: "B.Tech in AI & Data Science",
    desc: "Sri Eshwar College of Engineering (CGPA: 8.17%)",
    color: "#00E5FF", // cyan
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-24 min-h-screen flex flex-col justify-center bg-primary-bg relative">
      <div className="max-w-3xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-2 tracking-tight">
            About <span className="text-accent-cyan">Me</span>
          </h2>
          <p className="text-xl text-accent-purple font-medium">My journey</p>
        </motion.div>

        <div className="relative border-l-2 ml-4 md:ml-0" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Connecting line that overlays the default border for colored effect */}
              {index < timelineData.length - 1 && (
                <div 
                  className="absolute left-[-2px] top-6 w-[2px] h-[calc(100%+24px)]"
                  style={{
                    background: `linear-gradient(to bottom, ${item.color}, ${timelineData[index + 1].color})`
                  }}
                />
              )}

              {/* The Timeline Dot */}
              <div 
                className="absolute left-[-7px] top-1.5 w-3.5 h-3.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />

              <div className="flex flex-col">
                <span className="text-sm font-medium mb-1" style={{ color: item.color }}>
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
