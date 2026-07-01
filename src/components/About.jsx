import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[var(--bg)] transition-colors duration-300">
      {/* Transparent Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: "url('/developer-bg.png')" }}
      />

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Column: Text Content */}
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
                Hello! I'm Temesgen, a Full-Stack Software Developer and Web Developer passionate about building secure, scalable, and user-friendly digital solutions.
                Currently, I work as a Software Engineer, developing web and mobile applications. I enjoy transforming complex challenges into simple, effective solutions using modern technologies such as React, Node.js, Flutter, PostgreSQL, and MongoDB.
                My focus is on writing clean, maintainable code, optimizing performance, and creating impactful products that deliver real value to users.
              </p>
            </div>

          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-transparent to-emerald-400/20 blur-2xl pointer-events-none" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-[#161a2c]/60 backdrop-blur-xl shadow-2xl">
                <img
                  src="/about-workspace.png"
                  alt="Developer workspace setup"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
