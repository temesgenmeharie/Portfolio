import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import "./index.css";

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />

      {/* Scroll-to-top button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] text-white shadow-2xl shadow-[var(--accent)]/30 hover:scale-110 transition-transform"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}