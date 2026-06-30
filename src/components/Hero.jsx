import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import {
  SiReact, SiHtml5, SiCss3, SiTailwindcss, SiJavascript,
  SiNodedotjs, SiExpress, SiPhp, SiMysql, SiFlutter
} from "react-icons/si";

const TECH_BADGES = [
  { name: "React", icon: SiReact, color: "#61DAFB", bg: "rgba(97, 218, 251, 0.1)", border: "rgba(97, 218, 251, 0.2)" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26", bg: "rgba(227, 79, 38, 0.1)", border: "rgba(227, 79, 38, 0.2)" },
  { name: "CSS", icon: SiCss3, color: "#1572B6", bg: "rgba(21, 114, 182, 0.1)", border: "rgba(21, 114, 182, 0.2)" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8", bg: "rgba(56, 189, 248, 0.1)", border: "rgba(56, 189, 248, 0.2)" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", bg: "rgba(247, 223, 30, 0.1)", border: "rgba(247, 223, 30, 0.2)" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", bg: "rgba(51, 153, 51, 0.1)", border: "rgba(51, 153, 51, 0.2)" },
  { name: "Express.js", icon: SiExpress, colorDark: "#FFFFFF", colorLight: "#333333", bg: "rgba(150, 150, 150, 0.1)", border: "rgba(150, 150, 150, 0.2)" },
  { name: "PHP", icon: SiPhp, color: "#777BB4", bg: "rgba(119, 123, 180, 0.1)", border: "rgba(119, 123, 180, 0.2)" },
  { name: "MySQL", icon: SiMysql, color: "#00758F", bg: "rgba(0, 117, 143, 0.1)", border: "rgba(0, 117, 143, 0.2)" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B", bg: "rgba(2, 86, 155, 0.1)", border: "rgba(2, 86, 155, 0.2)" }
];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Full Stack Developer", "Flutter Developer", "Mobile Developer"];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed]);

  const handleType = () => {
    const i = loopNum % words.length;
    const fullWord = words[i];

    if (!isDeleting) {
      setText(fullWord.substring(0, text.length + 1));
      setTypingSpeed(100);

      if (text === fullWord) {
        setTypingSpeed(1500); // Pause at end of word
        setIsDeleting(true);
      }
    } else {
      setText(fullWord.substring(0, text.length - 1));
      setTypingSpeed(50);

      if (text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before typing next word
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-20 relative overflow-hidden bg-[var(--bg)] transition-colors duration-300">
      {/* Blurred Developer Workstation Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 filter blur-[8px] scale-105 pointer-events-none select-none z-0"
        style={{ backgroundImage: "url('/developer-bg.png')" }}
      />

      {/* Deep Green/Teal Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-emerald-400/5 to-[var(--bg)]/90 dark:from-[#022c22]/50 dark:via-[#064e3b]/30 dark:to-[#0b0a10]/90 pointer-events-none z-0 transition-colors duration-300" />
      <div className="absolute inset-0 bg-[var(--bg)]/60 dark:bg-[#0b0a10]/60 pointer-events-none z-0 transition-colors duration-300" />

      <div className="section-container w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left flex flex-col justify-center"
        >
          {/* Name in Cyan/Sky blue */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-sky-600 dark:text-sky-400 mb-2 font-display">
            Temesgen Meharie
          </h1>

          {/* Typing Effect: "Hey I'm..." in Green */}
          <div className="text-xl md:text-2xl font-bold mb-6 font-display h-8">
            <span className="text-[var(--text-main)] transition-colors duration-300">Hey I'm </span>
            <span className="text-emerald-500 dark:text-emerald-400">{text}</span>
            <span className="animate-pulse text-emerald-400">|</span>
          </div>

          <p className="text-[var(--text-muted)] text-sm md:text-base max-w-xl mb-8 leading-relaxed">
            I design and develop responsive web applications that solve real-world problems. With a passion for clean code, intuitive user experiences, and continuous learning, I turn ideas into digital products that people enjoy using.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 bg-slate-800 border border-slate-600 text-white dark:bg-black dark:border-white/20 dark:hover:bg-white/10 dark:hover:border-white/40 hover:bg-slate-700 transition-all text-sm flex items-center gap-2"
            >
              <FiDownload />
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-slate-800 border border-slate-600 text-white dark:bg-black dark:border-white/20 dark:hover:bg-white/10 dark:hover:border-white/40 hover:bg-slate-700 transition-all text-sm flex items-center justify-center min-w-[110px]"
            >
              Hire Me
            </a>
          </div>

          {/* Tech Stack Badges Grid */}
          <div className="flex flex-wrap gap-3 max-w-xl">
            {TECH_BADGES.map((badge, idx) => {
              const Icon = badge.icon;
              // For badges that have separate light/dark icon colors
              const isDark = document.documentElement.classList.contains('dark');
              const iconColor = badge.colorDark
                ? (isDark ? badge.colorDark : badge.colorLight)
                : badge.color;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-2.5 rounded-xl transition-all hover:scale-105 select-none w-[76px] h-[68px] text-center"
                  style={{
                    backgroundColor: badge.bg,
                    border: `1px solid ${badge.border}`
                  }}
                >
                  <Icon className="text-xl mb-1.5" style={{ color: iconColor }} />
                  <span className="text-[9px] font-medium tracking-tight text-slate-700 dark:text-white/90">
                    {badge.name}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Content - Avatar inside Green Blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center md:justify-end items-center"
        >
          <div className="relative w-72 h-72 md:w-[340px] md:h-[340px] flex items-center justify-center">
            {/* Animating Organic Blob Frame behind picture */}
            <div className="absolute inset-0 bg-[#10B981]/15 border-2 border-[#10B981]/40 rounded-full animate-blob-bounce animate-pulse-glow z-0 filter blur-[1px]"></div>

            {/* Circular Avatar Image */}
            <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-[6px] border-white shadow-2xl z-10 bg-[var(--card-bg)]">
              <img
                src="/profile-placeholder.png"
                alt="Temesgen Meharie"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}