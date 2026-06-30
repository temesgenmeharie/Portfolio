import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact, SiCss3, SiTailwindcss, SiJavascript,
  SiPhp, SiPython, SiNodedotjs, SiExpress,
  SiPostgresql, SiDocker, SiMysql, SiFirebase, SiSupabase,
  SiGit, SiGithub
} from "react-icons/si";
import { FiUsers, FiClock, FiMessageCircle, FiRefreshCw, FiCode } from "react-icons/fi";

const TECHNICAL_SKILLS = [
  {
    title: "Frontend Development",
    icon: SiReact,
    iconColor: "#61DAFB",
    skills: [
      { name: "CSS3", icon: SiCss3, color: "#1572B6", textColor: "#1572B6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", textColor: "#06B6D4" },
      { name: "React.js", icon: SiReact, color: "#61DAFB", textColor: "#0ea5e9" },
      { name: "JS", icon: SiJavascript, color: "#F7DF1E", textColor: "#b45309" },
    ]
  },
  {
    title: "Backend Development",
    icon: SiNodedotjs,
    iconColor: "#339933",
    skills: [
      { name: "PHP", icon: SiPhp, color: "#777BB4", textColor: "#777BB4" },
      { name: "Python", icon: SiPython, color: "#3776AB", textColor: "#3776AB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", textColor: "#339933" },
      { name: "Express", icon: SiExpress, color: "#68A063", textColor: "#3d6b3b" },
    ]
  },
  {
    title: "Database & Cloud",
    icon: SiSupabase,
    iconColor: "#3ECF8E",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", textColor: "#336791" },
      { name: "Docker", icon: SiDocker, color: "#2496ED", textColor: "#2496ED" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1", textColor: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28", textColor: "#b45309" },
    ]
  }
];

const SOFT_SKILLS = [
  { name: "Problem Solving", icon: FiCode, bg: "bg-blue-600" },
  { name: "Team Collaboration", icon: FiUsers, bg: "bg-green-500" },
  { name: "Adaptability", icon: FiRefreshCw, bg: "bg-purple-500" },
  { name: "Communication", icon: FiMessageCircle, bg: "bg-red-500" },
  { name: "Time Management", icon: FiClock, bg: "bg-teal-400" },
];

const TOOLS = [
  { name: "VS Code", icon: FiCode, iconColor: "text-black dark:text-white", textColor: "text-blue-500" },
  { name: "Git", icon: SiGit, iconColor: "text-black dark:text-white", textColor: "text-red-500" },
  { name: "GitHub", icon: SiGithub, iconColor: "text-black dark:text-white", textColor: "text-blue-400" },
  { name: "Docker", icon: SiDocker, iconColor: "text-black dark:text-white", textColor: "text-blue-500" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Technical");
  const TABS = ["Technical", "Soft Skills", "Tools"];

  return (
    <section id="skills" className="py-24 bg-[#f3f4f6] dark:bg-[var(--bg)] transition-colors duration-300">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-normal mb-3 text-blue-500">
            Skills
          </h2>
          <p className="text-gray-600 dark:text-[var(--text-muted)] max-w-3xl mx-auto text-sm">
            Technical competences and professional skills I've developed through experience and continuous learning
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md font-bold text-sm transition-all duration-200 ${
                activeTab === tab
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-md border border-black dark:border-white"
                  : "bg-white text-black border border-black hover:bg-gray-50 dark:bg-transparent dark:text-white dark:border-white/50 dark:hover:bg-white/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto min-h-[300px]">
          <AnimatePresence mode="wait">
            {/* TECHNICAL TAB */}
            {activeTab === "Technical" && (
              <motion.div
                key="Technical"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {TECHNICAL_SKILLS.map((category, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white dark:bg-[var(--card-bg)] rounded-[20px] p-6 shadow-sm flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl" style={{ color: category.iconColor }}>
                        <category.icon />
                      </div>
                      <h3 className="font-bold text-base text-black dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="w-full border-b-[1.5px] border-dotted border-gray-200 dark:border-gray-700 mb-5"></div>
                    
                    <div className="flex flex-wrap gap-x-5 gap-y-4">
                      {category.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-1.5 cursor-pointer">
                          <skill.icon className="text-base" style={{ color: skill.color }} />
                          <span className="text-xs font-bold" style={{ color: skill.textColor || skill.color }}>
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* SOFT SKILLS TAB */}
            {activeTab === "Soft Skills" && (
              <motion.div
                key="Soft Skills"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-wrap justify-center gap-5"
              >
                {SOFT_SKILLS.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white dark:bg-[var(--card-bg)] rounded-[16px] py-3 px-5 shadow-sm flex items-center gap-4 w-[200px]"
                  >
                    <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-white text-lg ${skill.bg}`}>
                      <skill.icon />
                    </div>
                    <span className="font-bold text-sm text-black dark:text-white leading-snug">
                      {skill.name.split(" ").map((word, i) => (
                        <React.Fragment key={i}>
                          {word}
                          {i < skill.name.split(" ").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TOOLS TAB */}
            {activeTab === "Tools" && (
              <motion.div
                key="Tools"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex justify-center"
              >
                <div className="bg-white dark:bg-[var(--card-bg)] rounded-[20px] p-8 shadow-sm w-full max-w-xs">
                  <div className="flex items-center gap-3 mb-6">
                    <SiGithub className="text-2xl text-blue-500" />
                    <h3 className="font-bold text-lg text-black dark:text-white underline decoration-2 underline-offset-4">
                      Development Tools
                    </h3>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    {TOOLS.map((tool, idx) => (
                      <div key={idx} className="flex items-center gap-3 cursor-pointer">
                        <div className="w-6 flex justify-center">
                          <tool.icon className={`text-xl ${tool.iconColor}`} />
                        </div>
                        <span className={`font-semibold text-sm ${tool.textColor}`}>
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
