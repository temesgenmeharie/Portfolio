import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-emerald-50 dark:bg-[#103024] min-h-[90vh] flex items-center transition-colors duration-300">
      {/* Background Image Overlay (Subtle) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/developer-bg.png')" }}
      />

      <div className="section-container relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-slate-900 dark:text-white transition-colors duration-300">
            Get in <span className="text-[#38bdf8]">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-200 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-medium transition-colors duration-300">
            To say Hi, talk about opportunities, or work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Card 1: Contact */}
            <div className="bg-white dark:bg-slate-800 rounded-[24px] p-6 md:p-8 shadow-2xl text-gray-800 dark:text-gray-200 space-y-6 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-emerald-100 text-emerald-600 dark:bg-black dark:text-white rounded-full transition-colors duration-300">
                  <FiMail size={20} />
                </div>
                <h3 className="font-bold text-xl text-black dark:text-white transition-colors duration-300">Contact</h3>
              </div>

              <div className="flex items-center gap-5 pl-1">
                <div className="p-2.5 bg-green-100 text-green-500 rounded-full">
                  <FiPhone size={18} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium text-sm md:text-base transition-colors duration-300">+2519 85250001</p>
              </div>

              <div className="flex items-center gap-5 pl-1">
                <div className="p-2.5 bg-red-100 text-red-500 rounded-full">
                  <FiMail size={18} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium text-sm md:text-base transition-colors duration-300">temesgenmeharie71@gmail.com</p>
              </div>
            </div>

            {/* Card 2: Location */}
            <div className="bg-white dark:bg-slate-800 rounded-[24px] p-6 md:p-8 shadow-2xl text-gray-800 dark:text-gray-200 space-y-6 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-emerald-100 text-emerald-600 dark:bg-black dark:text-white rounded-full transition-colors duration-300">
                  <FiMapPin size={20} />
                </div>
                <h3 className="font-bold text-xl text-black dark:text-white transition-colors duration-300">Location</h3>
              </div>

              <div className="flex items-center gap-5 pl-1">
                <div className="p-2.5 bg-blue-100 text-blue-500 rounded-full">
                  <FiMapPin size={18} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium text-sm md:text-base transition-colors duration-300">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-100 dark:bg-[#c2d1c7] p-6 md:p-8 rounded-[24px] space-y-5 shadow-2xl border border-slate-200 dark:border-transparent transition-colors duration-300"
          >
            <div className="space-y-4">
              <input
                type="text"
                className="w-full bg-white border-none rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all shadow-sm text-sm"
                placeholder="Name"
              />
              <input
                type="email"
                className="w-full bg-white border-none rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all shadow-sm text-sm"
                placeholder="Email"
              />
              <textarea
                rows="5"
                className="w-full bg-white border-none rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none transition-all resize-none shadow-sm text-sm"
                placeholder="Message"
              ></textarea>
            </div>

            <button
              className="w-full py-4 bg-black text-white font-bold rounded-xl shadow-lg hover:bg-gray-800 transform hover:-translate-y-1 transition-all flex justify-center items-center gap-2 mt-2"
            >
              Send Message
            </button>
            
            {/* Social Links added to the right side of Contact section */}
            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-slate-300 dark:border-slate-500/50">
              <a href="https://github.com/temesgenmeharie" target="_blank" rel="noreferrer" className="text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors flex flex-col items-center gap-1 group">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm group-hover:shadow-md transition-all group-hover:-translate-y-1">
                  <FiGithub size={22} className="text-black dark:text-white" />
                </div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">GitHub</span>
              </a>
              <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-[#0a66c2] dark:hover:text-blue-400 transition-colors flex flex-col items-center gap-1 group">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm group-hover:shadow-md transition-all group-hover:-translate-y-1">
                  <FiLinkedin size={22} className="text-[#0a66c2] dark:text-blue-400" />
                </div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">LinkedIn</span>
              </a>
              <a href="https://t.me/Ethiopia2063" target="_blank" rel="noreferrer" className="text-slate-700 dark:text-slate-300 hover:text-[#229ED9] dark:hover:text-[#229ED9] transition-colors flex flex-col items-center gap-1 group">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm group-hover:shadow-md transition-all group-hover:-translate-y-1">
                  <FiSend size={22} className="text-[#229ED9]" />
                </div>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Telegram</span>
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
