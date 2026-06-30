import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle, FiLoader } from "react-icons/fi";
import emailjs from "@emailjs/browser";

// ─── EmailJS config ────────────────────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add an Email Service (Gmail, Outlook, etc.) → copy the Service ID
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//    → copy the Template ID
// 4. Go to Account → Public Key → copy it
// Replace the three placeholders below:
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // e.g. "abcDEFghiJKL123"
// ───────────────────────────────────────────────────────────────────────────────

const INITIAL = { from_name: "", from_email: "", subject: "", message: "" };

function validate({ from_name, from_email, subject, message }) {
  if (!from_name.trim())                                return "Please enter your name.";
  if (!from_email.trim())                               return "Please enter your email.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from_email))  return "Please enter a valid email address.";
  if (!subject.trim())                                  return "Please enter a subject.";
  if (!message.trim())                                  return "Please enter your message.";
  if (message.trim().length < 10)                       return "Message must be at least 10 characters.";
  return null;
}

export default function Contact() {
  const formRef = useRef(null);
  const [fields, setFields]   = useState(INITIAL);
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState("idle"); // idle | loading | success | error
  const [errMsg, setErrMsg]   = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateField = (name, value) => {
    if (!value.trim()) return "This field is required.";
    if (name === "from_email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Invalid email address.";
    if (name === "message" && value.trim().length < 10)
      return "Message must be at least 10 characters.";
    return "";
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Full validation before submit
    const globalErr = validate(fields);
    if (globalErr) {
      // Set all field errors
      const newErrors = {};
      Object.keys(INITIAL).forEach((key) => {
        newErrors[key] = validateField(key, fields[key]);
      });
      setErrors(newErrors);
      return;
    }

    setStatus("loading");
    setErrMsg("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFields(INITIAL);
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrMsg("Something went wrong. Please try again or email me directly.");
    }
  };

  const isLoading = status === "loading";

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-emerald-50 dark:bg-[#103024] min-h-[90vh] flex items-center transition-colors duration-300">
      {/* Background Image Overlay */}
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
            Have a project in mind? Fill out the form and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start max-w-5xl mx-auto">

          {/* ── Left: Contact Info Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Card: Contact */}
            <div className="bg-white dark:bg-slate-800 rounded-[24px] p-6 md:p-8 shadow-2xl text-gray-800 dark:text-gray-200 space-y-6 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-emerald-100 text-emerald-600 dark:bg-black dark:text-white rounded-full transition-colors duration-300">
                  <FiMail size={20} />
                </div>
                <h3 className="font-bold text-xl text-black dark:text-white transition-colors duration-300">Contact</h3>
              </div>
              <div className="flex items-center gap-5 pl-1">
                <div className="p-2.5 bg-green-100 text-green-500 rounded-full shrink-0">
                  <FiPhone size={18} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium text-sm md:text-base transition-colors duration-300">+2519 85250001</p>
              </div>
              <div className="flex items-center gap-5 pl-1">
                <div className="p-2.5 bg-red-100 text-red-500 rounded-full shrink-0">
                  <FiMail size={18} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium text-sm md:text-base transition-colors duration-300 break-all">temesgenmeharie71@gmail.com</p>
              </div>
            </div>

            {/* Card: Location */}
            <div className="bg-white dark:bg-slate-800 rounded-[24px] p-6 md:p-8 shadow-2xl text-gray-800 dark:text-gray-200 space-y-6 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-emerald-100 text-emerald-600 dark:bg-black dark:text-white rounded-full transition-colors duration-300">
                  <FiMapPin size={20} />
                </div>
                <h3 className="font-bold text-xl text-black dark:text-white transition-colors duration-300">Location</h3>
              </div>
              <div className="flex items-center gap-5 pl-1">
                <div className="p-2.5 bg-blue-100 text-blue-500 rounded-full shrink-0">
                  <FiMapPin size={18} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium text-sm md:text-base transition-colors duration-300">Addis Ababa, Ethiopia</p>
              </div>
            </div>

            {/* Quick Note */}
            <p className="text-slate-500 dark:text-slate-400 text-xs pl-1 leading-relaxed">
              💬 I typically respond within <span className="font-semibold text-emerald-600 dark:text-emerald-400">24 hours</span>. For urgent matters, reach me on Telegram.
            </p>
          </motion.div>

          {/* ── Right: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {/* ── SUCCESS STATE ── */}
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-slate-100 dark:bg-[#c2d1c7] p-8 rounded-[24px] shadow-2xl border border-slate-200 dark:border-transparent flex flex-col items-center text-center gap-4 min-h-[400px] justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                    <FiCheckCircle size={36} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-900">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-700 text-sm max-w-xs">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-2.5 bg-black text-white text-sm font-bold rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                /* ── FORM STATE ── */
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-slate-100 dark:bg-[#c2d1c7] p-6 md:p-8 rounded-[24px] space-y-4 shadow-2xl border border-slate-200 dark:border-transparent transition-colors duration-300"
                >
                  {/* Name */}
                  <div>
                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      value={fields.from_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Name *"
                      disabled={isLoading}
                      className={`w-full bg-white border-2 rounded-xl px-5 py-3.5 text-gray-800 placeholder-gray-400 focus:ring-0 outline-none transition-all shadow-sm text-sm ${
                        errors.from_name ? "border-red-400" : "border-transparent focus:border-blue-400"
                      }`}
                    />
                    {errors.from_name && (
                      <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1">
                        <FiAlertCircle size={12} /> {errors.from_name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      id="from_email"
                      name="from_email"
                      type="email"
                      value={fields.from_email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Email *"
                      disabled={isLoading}
                      className={`w-full bg-white border-2 rounded-xl px-5 py-3.5 text-gray-800 placeholder-gray-400 focus:ring-0 outline-none transition-all shadow-sm text-sm ${
                        errors.from_email ? "border-red-400" : "border-transparent focus:border-blue-400"
                      }`}
                    />
                    {errors.from_email && (
                      <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1">
                        <FiAlertCircle size={12} /> {errors.from_email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={fields.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Subject *"
                      disabled={isLoading}
                      className={`w-full bg-white border-2 rounded-xl px-5 py-3.5 text-gray-800 placeholder-gray-400 focus:ring-0 outline-none transition-all shadow-sm text-sm ${
                        errors.subject ? "border-red-400" : "border-transparent focus:border-blue-400"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1">
                        <FiAlertCircle size={12} /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={fields.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Message *"
                      disabled={isLoading}
                      className={`w-full bg-white border-2 rounded-xl px-5 py-3.5 text-gray-800 placeholder-gray-400 focus:ring-0 outline-none transition-all resize-none shadow-sm text-sm ${
                        errors.message ? "border-red-400" : "border-transparent focus:border-blue-400"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1">
                        <FiAlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error Banner */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm">
                      <FiAlertCircle size={16} className="shrink-0" />
                      {errMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-black text-white font-bold rounded-xl shadow-lg hover:bg-gray-800 transform hover:-translate-y-1 transition-all flex justify-center items-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <>
                        <FiLoader className="animate-spin" size={18} />
                        Sending…
                      </>
                    ) : (
                      <>
                        <FiSend size={16} />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Social Links */}
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
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
