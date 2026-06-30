import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

const PROJECTS = [
  {
    id: "task-management",
    title: "TaskMaster App",
    description: "A responsive task management app with category filters, drag-and-drop reordering and persistent local storage.",
    tech: ["React", "Tailwind", "LocalStorage"],
    github: "https://github.com/temesgenmeharie/ToDoList",
    demo: "#",
  },
  {
    id: "apple-clone",
    title: "Apple Landing Page",
    description: "A pixel-perfect, accessible landing page replica demonstrating responsive layout and modern CSS techniques.",
    tech: ["HTML", "CSS", "Responsive"],
    github: "https://github.com/temesgenmeharie/Apple_html_and_css_replica",
    demo: "#",
  },
  {
    id: "ecommerce-sample",
    title: "E‑commerce UI",
    description: "A front-end e-commerce experience with product cards, filters and a checkout flow prototype built with React.",
    tech: ["React", "Stripe API", "Context"],
    github: "https://github.com/temesgenmeharie/ToDoList",
    demo: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-4 text-white">
            Selected Work
            <span className="h-[2px] bg-gradient-to-r from-[var(--accent)] to-transparent flex-grow max-w-sm ml-4 rounded-full"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 flex flex-col group relative overflow-hidden h-full"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <FiFolder className="text-5xl text-[var(--accent)] group-hover:text-[var(--accent2)] transition-colors duration-500" />
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-white transition-all transform hover:scale-110">
                      <FiGithub size={22} />
                    </a>
                    {project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-white transition-all transform hover:scale-110">
                        <FiExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[var(--accent)] transition-colors duration-300">
                  <a href={project.github} target="_blank" rel="noreferrer">{project.title}</a>
                </h3>

                <p className="text-[var(--text-muted)] mb-8 text-base leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-[var(--accent)] group-hover:border-[var(--accent)]/30 transition-colors duration-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
