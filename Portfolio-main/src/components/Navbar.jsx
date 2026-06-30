import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "bg-transparent py-6"
      }`}
    >
      {/* Dynamic Background on Scroll */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${scrolled ? 'opacity-100 glass' : 'opacity-0'}`}></div>

      <div className="section-container flex justify-between items-center relative z-10">
        <a href="#" className="text-3xl font-bold font-display tracking-tighter text-white relative group">
          TM<span className="text-[var(--accent)] transition-colors duration-300 group-hover:text-[var(--accent2)]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[var(--text-muted)] hover:text-white transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex gap-5">
            <a href="https://github.com/temesgenmeharie" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-white hover:-translate-y-1 transition-all duration-300"><FiGithub size={22} /></a>
            <a href="#" className="text-[var(--text-muted)] hover:text-[#0a66c2] hover:-translate-y-1 transition-all duration-300"><FiLinkedin size={22} /></a>
            <a href="#" className="text-[var(--text-muted)] hover:text-[#1da1f2] hover:-translate-y-1 transition-all duration-300"><FiTwitter size={22} /></a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-white hover:text-[var(--accent)] transition-colors p-2 rounded-full bg-white/5 border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/10 absolute top-full left-0 w-full"
          >
            <div className="flex flex-col p-8 space-y-6 text-center">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-[var(--text-muted)] hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center gap-8 pt-6 border-t border-white/10 mt-4"
              >
                <a href="https://github.com/temesgenmeharie" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-white"><FiGithub size={28} /></a>
                <a href="#" className="text-[var(--text-muted)] hover:text-[#0a66c2]"><FiLinkedin size={28} /></a>
                <a href="#" className="text-[var(--text-muted)] hover:text-[#1da1f2]"><FiTwitter size={28} /></a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}