import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiBox, FiExternalLink, FiImage } from "react-icons/fi";
import projects from "../data/projects";
import ShowcaseModal from "./ShowcaseModal";

export default function Projects() {
  const [showcaseProject, setShowcaseProject] = useState(null);

  return (
    <>
      <section id="projects" className="py-24 bg-[#f3f4f6] dark:bg-[var(--bg)] transition-colors duration-300">
        <div className="section-container">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-normal mb-3 text-blue-500">
              My Projects
            </h2>
            <p className="text-gray-600 dark:text-[var(--text-muted)] max-w-2xl mx-auto text-sm">
              My work that shows my technical proficiency and problem-solving abilities in a variety of domains
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-[var(--card-bg)] rounded-[20px] p-6 shadow-sm flex flex-col group h-full border border-gray-100 dark:border-white/5 hover:shadow-md transition-shadow"
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shrink-0">
                    <FiBox size={20} />
                  </div>
                  <h3 className="font-bold text-sm text-black dark:text-white leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 dark:text-[var(--text-muted)] text-xs mb-4 flex-grow leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {/* Tech Stack Badges — show first 5 tags to keep card tidy */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 5).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400">
                        +{project.tags.length - 5} more
                      </span>
                    )}
                  </div>
                )}

                {/* Image Area */}
                <div className="w-full h-[180px] bg-gray-100 rounded-lg mb-5 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between mt-auto">
                  <a
                    href={project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View GitHub Repository"
                    className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                  >
                    <FiGithub size={16} />
                  </a>

                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white text-[11px] px-3 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md flex items-center gap-1"
                      >
                        Live Demo <FiExternalLink size={12} />
                      </a>
                    )}
                    {project.hasVideo && (
                      <button className="bg-black dark:bg-white text-white dark:text-black text-[11px] px-4 py-2 rounded-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-md">
                        View in Video
                      </button>
                    )}

                    {/* Gallery button — opens ShowcaseModal when gallery images exist */}
                    {project.gallery && project.gallery.length > 0 ? (
                      <button
                        onClick={() => setShowcaseProject(project)}
                        className="flex items-center gap-1 bg-black dark:bg-white text-white dark:text-black text-[11px] px-4 py-2 rounded-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-md"
                      >
                        <FiImage size={12} /> Gallery
                      </button>
                    ) : (
                      <button
                        disabled
                        className="flex items-center gap-1 bg-gray-200 dark:bg-white/10 text-gray-400 dark:text-gray-500 text-[11px] px-4 py-2 rounded-lg font-bold cursor-not-allowed shadow-md"
                        title="No gallery available"
                      >
                        <FiImage size={12} /> Gallery
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Global Action Button */}
          <div className="flex justify-center mt-12">
            <button className="bg-[#475569] hover:bg-[#334155] dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white font-bold text-sm px-6 py-3 rounded-lg shadow-md transition-colors">
              View All Projects
            </button>
          </div>

        </div>
      </section>

      {/* Showcase Modal — rendered outside the section so it can overlay the full page */}
      {showcaseProject && (
        <ShowcaseModal
          project={showcaseProject}
          onClose={() => setShowcaseProject(null)}
        />
      )}
    </>
  );
}
