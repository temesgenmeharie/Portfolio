import React from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from "react-icons/fi";

const SOCIAL = [
  { href: "https://github.com/temesgenmeharie", icon: FiGithub, label: "GitHub" },
  { href: "#", icon: FiLinkedin, label: "LinkedIn" },
  { href: "#", icon: FiTwitter, label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"></div>

      <div className="section-container py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold font-display tracking-tighter text-white group">
          TM<span className="text-gradient">.</span>
        </a>

        {/* Social Icons */}
        <div className="flex gap-5">
          {SOCIAL.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href !== "#" ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="p-2 text-[var(--text-muted)] hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Credit */}
        <p className="text-sm text-[var(--text-muted)] flex items-center gap-1.5">
          Built with <FiHeart size={12} className="text-[var(--accent3)] animate-pulse" /> by{" "}
          <span className="text-gradient font-semibold">Temesgen Meharie</span>
        </p>
      </div>
    </footer>
  );
}