import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiBox } from "react-icons/fi";

const PLACEHOLDER_PROJECTS = [
  {
    id: 1,
    title: "Academic and Online Exam Management System",
    description: "A comprehensive academic and online examination management system designed to streamline school operations, manage student assessments, and facilitate secure online testing with automated grading and performance analytics.",
    image: "https://placehold.co/600x300/e2e8f0/64748b?text=Academic+System",
    hasVideo: false,
  },
  {
    id: 2,
    title: "E-Commerce Application",
    description: "A full-stack e-commerce platform built with Flutter, and Supabase. A comprehensive online store with payment integration and admin dashboard.",
    image: "https://placehold.co/600x300/e2e8f0/64748b?text=E-Commerce+App",
    hasVideo: true,
  },
  {
    id: 3,
    title: "Job Portal",
    description: "A modern job portal built with React, TypeScript, Tailwind CSS, and Supabase. Includes authentication, data persistence, and a responsive UI for browsing and managing job listings.",
    image: "https://placehold.co/600x300/e2e8f0/64748b?text=Job+Portal",
    hasVideo: true,
  }
];

export default function Projects() {
  return (
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
          {PLACEHOLDER_PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[var(--card-bg)] rounded-[20px] p-6 shadow-sm flex flex-col group h-full border border-gray-100 dark:border-white/5"
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
              <p className="text-gray-500 dark:text-[var(--text-muted)] text-xs mb-5 flex-grow leading-relaxed">
                {project.description}
              </p>

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
                <a href="#" className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <FiGithub size={16} />
                </a>
                
                <div className="flex gap-2">
                  {project.hasVideo && (
                    <button className="bg-black dark:bg-white text-white dark:text-black text-[11px] px-4 py-2 rounded-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-md">
                      View in Video
                    </button>
                  )}
                  <button className="bg-black dark:bg-white text-white dark:text-black text-[11px] px-4 py-2 rounded-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-md">
                    Gallery
                  </button>
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
  );
}
