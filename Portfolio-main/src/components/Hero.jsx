import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-20 relative overflow-hidden">
      {/* Premium Background Mesh */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[var(--accent)]/30 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[var(--accent2)]/20 rounded-full blur-[150px] pointer-events-none animate-blob"></div>
      <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-[var(--accent3)]/20 rounded-full blur-[100px] pointer-events-none animate-float"></div>
      
      <div className="section-container w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-left"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--border)] bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
            <span className="text-sm font-mono text-[var(--text-main)] tracking-wider">Available for work</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] text-white">
            Temesgen <br />
            <span className="text-gradient">Meharie</span>.
          </h1>

          <p className="text-[var(--text-muted)] text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
              I create engaging and user-friendly web experiences that combine beautiful design with reliable engineering. My focus is on building products that not only look great but also solve real problems for people.
          </p>

          <div className="flex flex-wrap gap-5">
            <a href="#projects" className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-xl font-semibold transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center gap-2 text-white z-10">
                View My Work
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-8 py-4 border border-[var(--border)] rounded-xl font-semibold hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 text-white glass">
              <FiDownload />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] animate-float group perspective-1000">
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent2)] to-[var(--accent)] rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 transform group-hover:scale-105"></div>
            
            {/* Image Container */}
            <div className="absolute inset-0 border border-white/20 rounded-3xl overflow-hidden transform transition-all duration-700 shadow-2xl glass z-10">
              <img
                src="/Profile.png"
                alt="Temesgen Meharie"
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700 ease-out"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-[var(--accent3)] to-[var(--accent2)] rounded-full blur-xl opacity-50 animate-pulse-slow"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}