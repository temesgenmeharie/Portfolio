import React from "react";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-[var(--accent)]">Showcase Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="card">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[var(--accent)] text-white rounded hover:bg-[var(--accent2)] transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
