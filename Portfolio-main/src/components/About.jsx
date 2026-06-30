import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiServer, FiLayout } from "react-icons/fi";

const CARDS = [
  { icon: FiLayout, title: "Frontend", desc: "Crafting responsive, accessible UIs with React & Tailwind." },
  { icon: FiServer, title: "Backend", desc: "Building scalable APIs and handling data storage solutions." },
  { icon: FiCode, title: "Problem Solving", desc: "Turning complex requirements into clean, maintainable code." },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-4 text-white">
              About Me
              <span className="h-[2px] bg-gradient-to-r from-[var(--accent2)] to-transparent flex-grow max-w-sm ml-4 rounded-full"></span>
            </h2>
            <div className="text-[var(--text-muted)] space-y-6 text-lg leading-relaxed font-light">
              <p>
                Hi, I'm Temesgen, a web developer who enjoys turning ideas into practical digital solutions. I’m passionate about building clean, user-friendly applications and continuously improving my skills through real-world projects. I enjoy solving problems, learning new technologies, and creating software that makes a meaningful impact.

              </p>
              <p>
                {/* Fast-forward to today, and I’ve had the privilege of building software for a variety of clients.
                My main focus these days is building accessible, inclusive products and digital experiences. */}
              </p>
            </div>
          </motion.div>

          <div className="lg:w-1/2 grid gap-6 w-full">
            {CARDS.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl glass-card group relative overflow-hidden"
              >
                {/* Glowing Hover Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent2)]/10 rounded-full blur-3xl group-hover:bg-[var(--accent)]/20 transition-colors duration-500"></div>
                
                <div className="relative z-10 flex items-start gap-6">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 group-hover:border-[var(--accent)]/30 transition-colors">
                    <card.icon className="text-3xl text-[var(--accent)] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-white">{card.title}</h3>
                    <p className="text-base text-[var(--text-muted)] group-hover:text-gray-300 transition-colors">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
