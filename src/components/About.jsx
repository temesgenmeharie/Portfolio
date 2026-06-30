import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiServer, FiLayout, FiCheckCircle } from "react-icons/fi";

const CARDS = [
  { icon: FiLayout, title: "Frontend Engineering", desc: "Crafting fluid, accessible, and responsive user interfaces with React, Next.js, and modern CSS frameworks like Tailwind." },
  { icon: FiServer, title: "Backend Architecture", desc: "Building scalable and secure RESTful APIs and microservices with Node.js, Express, and robust database solutions." },
  { icon: FiCode, title: "Creative Problem Solving", desc: "Transforming complex business requirements into elegant, clean, and highly maintainable codebases." },
];

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

            {/* Quick Stats or Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-emerald-500 text-xl" />
                <span className="text-[var(--text-main)] font-medium">Clean Code</span>
              </div>
              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-emerald-500 text-xl" />
                <span className="text-[var(--text-main)] font-medium">Modern Stack</span>
              </div>
              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-emerald-500 text-xl" />
                <span className="text-[var(--text-main)] font-medium">Responsive Design</span>
              </div>
              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-emerald-500 text-xl" />
                <span className="text-[var(--text-main)] font-medium">User-Centric</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Cards */}
          <div className="lg:w-1/2 w-full grid gap-6">
            {CARDS.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative p-6 md:p-8 rounded-2xl bg-white/60 dark:bg-[#161a2c]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col sm:flex-row gap-5 items-start">
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <card.icon className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-[var(--text-main)]">{card.title}</h3>
                    <p className="text-sm md:text-base text-[var(--text-muted)] leading-relaxed">{card.desc}</p>
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
