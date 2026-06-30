import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/temesgenmeharie" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors transform hover:-translate-y-1">
          <FiGithub size={20} />
        </a>
        <a href="#" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors transform hover:-translate-y-1">
          <FiLinkedin size={20} />
        </a>
        <a href="#" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors transform hover:-translate-y-1">
          <FiTwitter size={20} />
        </a>
      </div>
      <p className="text-sm text-[var(--text-muted)]">
        Designed & Built by <span className="text-[var(--accent)]">Temesgen Meharie</span>
      </p>
    </footer>
  );
}