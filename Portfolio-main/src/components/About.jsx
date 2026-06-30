import React from "react";
import { motion } from "framer-motion";

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
                Hello! I&apos;m Temesgen, a software developer who enjoys turning ideas into thoughtful digital experiences. I care about building work that feels clear, useful, and meaningful for the people who use it.
              </p>
              <p>
                My journey in development is guided by curiosity, consistency, and a desire to keep growing with every project. I enjoy solving real problems, refining details, and shaping ideas into experiences that feel simple, polished, and practical.
              </p>
              <p>
                Beyond writing code, I value learning, collaboration, and steady improvement. I&apos;m inspired by the creative energy of development and the process of building something that people can truly use and enjoy.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative overflow-hidden rounded-3xl glass-card border border-white/10">
              <img
                src="/about-dev-inspiration.jpg"
                alt="Development inspired workspace"
                className="w-full h-auto max-h-[420px] object-contain bg-[#050816]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
