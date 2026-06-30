import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[var(--accent2)]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[var(--accent)] font-mono text-sm tracking-[0.2em] uppercase mb-4 px-4 py-1 border border-[var(--accent)]/30 rounded-full bg-[var(--accent)]/5">
            What's Next?
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 text-white">Get In Touch</h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto text-lg leading-relaxed font-light">
            I'm currently open to new opportunities. Whether you have a project in mind or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <h3 className="text-2xl font-bold text-white">Let's build something <span className="text-gradient">amazing</span>.</h3>

            <div className="flex items-center gap-5 group">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[var(--accent)] group-hover:border-[var(--accent)]/40 transition-colors">
                <FiMail size={22} />
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-white text-sm uppercase tracking-wider">Email</h4>
                <a href="mailto:temesgen@example.com" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors text-base">
                  temesgen@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[var(--accent2)] group-hover:border-[var(--accent2)]/40 transition-colors">
                <FiMapPin size={22} />
              </div>
              <div>
                <h4 className="font-semibold mb-1 text-white text-sm uppercase tracking-wider">Location</h4>
                <p className="text-[var(--text-muted)] text-base">Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-4">Follow Me</p>
              <div className="flex gap-4">
                <a href="https://github.com/temesgenmeharie" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-[var(--text-muted)] hover:text-white hover:border-white/30 hover:-translate-y-1 transition-all">
                  <FiGithub size={20} />
                </a>
                <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 text-[var(--text-muted)] hover:text-[#0a66c2] hover:border-[#0a66c2]/40 hover:-translate-y-1 transition-all">
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all duration-300 text-white placeholder:text-white/30 text-base"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all duration-300 text-white placeholder:text-white/30 text-base"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest">Message</label>
              <textarea
                rows="5"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none transition-all duration-300 resize-none text-white placeholder:text-white/30 text-base"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="group w-full py-4 relative overflow-hidden rounded-xl font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[var(--accent)]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] via-[var(--accent2)] to-[var(--accent3)]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent3)] via-[var(--accent2)] to-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex justify-center items-center gap-3 text-base">
                <FiSend className="group-hover:rotate-45 transition-transform duration-300" />
                Send Message
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
