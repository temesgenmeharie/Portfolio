import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiExternalLink, FiServer, FiMonitor } from "react-icons/fi";

/**
 * ShowcaseModal
 * Opens over the page to display a project's full gallery (marquee),
 * tech-stack breakdown, description, and links.
 *
 * Props:
 *   project  — project object from projects.js (or null to close)
 *   onClose  — callback to clear the selected project
 */
export default function ShowcaseModal({ project, onClose }) {
  const [lightbox, setLightbox] = useState(null); // index of full-size image
  const scrollRef = useRef(null);

  // Keyboard navigation — read gallery from project directly to avoid TDZ issue
  useEffect(() => {
    const imgs = project?.gallery ?? [];
    const handler = (e) => {
      if (e.key === "Escape") {
        if (lightbox !== null) setLightbox(null);
        else onClose();
      }
      if (lightbox !== null && imgs.length > 0) {
        if (e.key === "ArrowRight") {
          setLightbox((prev) => (prev + 1) % imgs.length);
        }
        if (e.key === "ArrowLeft") {
          setLightbox((prev) => (prev - 1 + imgs.length) % imgs.length);
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, onClose, project]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!project) return null;

  const { title, description, techStack, gallery, githubUrl, liveUrl, tags } = project;

  // Duplicate gallery images so marquee looks seamless.
  // For small galleries repeat enough times to fill the strip.
  const marqueeImages = (() => {
    if (!gallery || gallery.length === 0) return [];
    const minItems = 8; // enough to fill the strip without gaps
    const repeated = [];
    while (repeated.length < minItems) repeated.push(...gallery);
    return [...repeated, ...repeated]; // double for seamless loop
  })();

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="showcase-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        aria-modal="true"
        role="dialog"
        aria-label={`${title} showcase`}
      >
        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          className="relative bg-white dark:bg-[var(--card-bg)] rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col"
          ref={scrollRef}
        >
          {/* ── Close Button ── */}
          <button
            onClick={onClose}
            aria-label="Close showcase"
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <FiX size={16} />
          </button>

          {/* ── Marquee Gallery Strip ── */}
          {marqueeImages.length > 0 && (
            <div className="marquee-wrapper rounded-t-2xl bg-gray-50 dark:bg-black/20 py-4">
              <div className="marquee-track gap-3 px-3">
                {marqueeImages.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightbox(idx % gallery.length)}
                    className="shrink-0 w-[320px] h-[190px] rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={`View screenshot ${(idx % gallery.length) + 1}`}
                  >
                    <img
                      src={src}
                      alt={`${title} screenshot ${(idx % gallery.length) + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                ))}
              </div>
              <p className="text-center text-[10px] text-gray-400 dark:text-gray-500 mt-2">
                Hover to pause · Click a screenshot to enlarge
              </p>
            </div>
          )}

          {/* ── Content Body ── */}
          <div className="p-6 flex flex-col gap-6">

            {/* Header */}
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                  {title}
                </h2>
                {/* Action Links */}
                <div className="flex gap-2 shrink-0">
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
                    >
                      <FiGithub size={13} /> GitHub
                    </a>
                  )}
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      <FiExternalLink size={13} /> Live Demo
                    </a>
                  )}
                  {!liveUrl && (
                    <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/40">
                      Live Demo Coming Soon
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-[var(--text-muted)] leading-relaxed">
                {description}
              </p>
            </div>

            {/* ── Tech Stack ── */}
            {techStack ? (
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-bold text-gray-800 dark:text-white uppercase tracking-wider">
                  Tech Stack
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Backend */}
                  <div className="rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <FiServer size={14} className="text-blue-500" />
                      <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">
                        Backend
                      </span>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {techStack.backend.map((item, i) => (
                        <li key={i} className="flex items-start justify-between gap-2">
                          <span className="text-xs font-semibold text-gray-800 dark:text-white">
                            {item.name}
                          </span>
                          <span className="text-[10px] text-gray-400 dark:text-gray-500 text-right shrink-0">
                            {item.note}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Frontend */}
                  <div className="rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <FiMonitor size={14} className="text-violet-500" />
                      <span className="text-xs font-bold text-violet-500 uppercase tracking-widest">
                        Frontend
                      </span>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {techStack.frontend.map((item, i) => (
                        <li key={i} className="flex items-start justify-between gap-2">
                          <span className="text-xs font-semibold text-gray-800 dark:text-white">
                            {item.name}
                          </span>
                          <span className="text-[10px] text-gray-400 dark:text-gray-500 text-right shrink-0">
                            {item.note}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              /* Fallback: tag pills for projects without a detailed techStack */
              tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="tech-pill bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* ── Lightbox (full-size single image) ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={gallery[lightbox]}
              alt={`${title} screenshot ${lightbox + 1}`}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="max-w-full max-h-full rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Prev / Next */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + gallery.length) % gallery.length); }}
              aria-label="Previous screenshot"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl transition-colors"
            >
              ‹
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % gallery.length); }}
              aria-label="Next screenshot"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl transition-colors"
            >
              ›
            </button>
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <FiX size={16} />
            </button>
            {/* Counter */}
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/60">
              {lightbox + 1} / {gallery.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}
