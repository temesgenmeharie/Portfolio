import React from "react";
import { motion } from "framer-motion";
import {
  SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiGit, SiFigma, SiMongodb, SiTypescript
} from "react-icons/si";

const SKILLS = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Subtle BG Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent2)]/5 to-transparent pointer-events-none"></div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white inline-block relative">
            Tech Stack
            <span className="block h-1 w-1/2 mx-auto mt-3 bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] rounded-full"></span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)] text-lg max-w-lg mx-auto">
            The tools and technologies I use to bring products to life.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.08 }}
              className="flex flex-col items-center gap-3 group cursor-default"
            >
              {/* Icon Box */}
              <div
                className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center text-4xl relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
                  style={{ background: skill.color }}
                ></div>
                <skill.icon style={{ color: skill.color }} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="text-sm font-semibold text-[var(--text-muted)] group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
