"use client";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { HiAtSymbol } from "react-icons/hi";
import { Globe } from "lucide-react";

const contactLinks = [
  {
    name: "Phone",
    value: "+91 9566585325",
    href: "tel:+919566585325",
    icon: FaPhoneAlt,
    iconBg: "bg-[#4A2E1E]",
    iconColor: "text-[#D47E3D]",
    rotate: -3,
  },
  {
    name: "Email",
    value: "aishwariya.j2024aids@sece.ac.in",
    href: "mailto:aishwariya.j2024aids@sece.ac.in",
    icon: HiAtSymbol,
    iconBg: "bg-[#3B2A45]",
    iconColor: "text-[#8B5CF6]",
    rotate: -1,
  },
  {
    name: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
    iconBg: "bg-[#1E3048]",
    iconColor: "text-[#00E5FF]",
    rotate: 1,
    external: true,
  },
  {
    name: "GitHub",
    value: "Explore Code",
    href: "https://github.com",
    icon: FaGithub,
    iconBg: "bg-[#1A332B]",
    iconColor: "text-[#10B981]",
    rotate: 3,
    external: true,
  },
  {
    name: "Portfolio",
    value: "aishwariya-portfolio",
    href: "#home",
    icon: Globe,
    iconBg: "bg-[#3D2C20]",
    iconColor: "text-orange-400",
    rotate: 0,
  },
];

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
          className="mb-14"
        >
          <span className="text-[#00E5FF] font-semibold tracking-widest text-sm uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 tracking-tight text-white">
            Let&apos;s build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D47E3D] via-[#8B5CF6] to-[#00E5FF]">intelligent</span> solutions
          </h2>
          <p className="text-[#D47E3D] text-lg md:text-xl font-medium">
            Open for new opportunities, research collaborations, and internships.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mt-4 max-w-4xl">
          {contactLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="w-48 p-6 bg-[#21160F] border border-white/5 hover:border-white/20 rounded-3xl flex flex-col items-center justify-center gap-3 shadow-xl cursor-pointer group transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition-transform`}>
                  <Icon size={24} />
                </div>
                <div className="text-center">
                  <span className="text-white font-semibold block text-base">{item.name}</span>
                  <span className="text-gray-400 text-xs mt-1 block truncate max-w-[150px]" title={item.value}>
                    {item.value}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}