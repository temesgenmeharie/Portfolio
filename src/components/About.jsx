import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[var(--bg)] transition-colors duration-300">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: "url('/developer-bg.png')" }}
      />

      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-8"
          >
            <div>
              <span className="text-[var(--accent)] font-mono text-sm tracking-widest uppercase mb-3 block font-semibold">Discover</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--text-main)]">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">Me</span>
              </h2>
            </div>

            <div className="text-[var(--text-muted)] space-y-5 text-lg leading-relaxed font-medium">
              <p>
                Hello! I&apos;m Temesgen, a software developer who enjoys turning ideas into thoughtful digital experiences. I care about building work that feels clear, useful, and meaningful for the people who use it.
              </p>
              <p>
                My journey in development is driven by curiosity, consistency, and the desire to keep improving with every project. I enjoy solving real problems, refining details, and creating products that balance function, simplicity, and a strong user experience.
              </p>
              <p>
                Beyond writing code, I value learning, collaboration, and steady growth. I&apos;m always inspired by the process of building, testing, and shaping ideas into something people can actually use and enjoy.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative rounded-[28px] overflow-hidden border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-[#161a2c]/60 backdrop-blur-xl shadow-2xl">
              <img
                src="/about-dev-inspiration.jpg"
                alt="Development inspired workspace"
                className="w-full h-auto max-h-[420px] object-contain bg-[#07111f]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
