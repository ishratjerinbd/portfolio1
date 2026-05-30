import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle, Database, Trash2, HeartHandshake } from "lucide-react";
import { ContactMessage } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [pastMessages, setPastMessages] = useState<ContactMessage[]>([]);

  // Load past submissions from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("portfolio_submissions");
      if (stored) {
        setPastMessages(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Storage reading issues", e);
    }
  }, []);

  const validateField = (name: string, value: string) => {
    if (!value.trim()) {
      return "This field is required";
    }
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
    }
    if (name === "message" && value.length < 10) {
      return "Message must be at least 10 characters long";
    }
    return "";
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Full form validation
    const formErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      const val = formData[key as keyof typeof formData];
      const err = validateField(key, val);
      if (err) {
        formErrors[key] = err;
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate endpoint submission with beautiful transitions
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: crypto.randomUUID(),
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        createdAt: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      const updated = [newMessage, ...pastMessages];
      setPastMessages(updated);
      try {
        localStorage.setItem("portfolio_submissions", JSON.stringify(updated));
      } catch (e) {
        console.warn("Could not save submission", e);
      }

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }, 1200);
  };

  const handleClearSpec = (id: string) => {
    const updated = pastMessages.filter((msg) => msg.id !== id);
    setPastMessages(updated);
    localStorage.setItem("portfolio_submissions", JSON.stringify(updated));
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Content */}
        <div className="max-w-3xl mx-auto mb-12 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 text-emerald-500 font-mono text-[10px] font-black tracking-widest uppercase mb-2">
            <HeartHandshake className="w-4 h-4" />
            <span>COLLABORATION INQUIRIES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-sans font-black tracking-tighter uppercase text-slate-950 dark:text-white leading-none mb-3" id="contact-title">
            GET IN TOUCH
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs sm:text-sm uppercase tracking-wider leading-relaxed max-w-2xl">
            I am always open to exploring full-time research opportunities, statistical consultancies, and monitoring evaluation projects. Submit your inquiry below to initiate the query handshake.
          </p>
        </div>

        {/* Contact Split layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Informational Cards Segment */}
          <div className="lg:col-span-4 space-y-6" id="contact-details">
            <div className="p-6 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-none space-y-4 shadow-sm">
              <h3 className="font-sans font-black text-slate-950 dark:text-white text-xs uppercase tracking-widest">
                // CONTACT PARAMETERS
              </h3>
              
              <div className="space-y-4 text-xs font-mono uppercase">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <div>
                    <p className="text-[10px] text-zinc-400 font-mono">PRIMARY EMAIL</p>
                    <a href="mailto:ishrat.jerin.bd@gmail.com" className="font-black text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 uppercase">
                      ishrat.jerin.bd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <div>
                    <p className="text-[10px] text-zinc-400 font-mono">LOCATION PREFERENCE</p>
                    <p className="font-black text-zinc-700 dark:text-zinc-300 uppercase">
                      Mirpur, Dhaka-1216, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Past Submissions Log Tracker */}
            <AnimatePresence>
              {pastMessages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="p-6 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-805 rounded-none space-y-4"
                  id="past-submissions-card"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-sans font-black text-slate-950 dark:text-white text-[10px] flex items-center gap-1.5 uppercase tracking-widest">
                      <Database className="w-4 h-4 text-emerald-500" />
                      LOCAL JOURNAL ({pastMessages.length})
                    </h4>
                  </div>
                  
                  <div className="max-h-56 overflow-y-auto space-y-2 pr-1 font-mono text-[10px] uppercase">
                    {pastMessages.map((msg) => (
                      <div key={msg.id} className="p-3 bg-white dark:bg-zinc-900 rounded-none border border-zinc-200 dark:border-zinc-800 space-y-1 group">
                        <div className="flex justify-between items-start gap-2">
                          <span className="font-black text-zinc-850 dark:text-zinc-200 truncate">{msg.subject}</span>
                          <button
                            onClick={() => handleClearSpec(msg.id)}
                            className="text-zinc-400 hover:text-red-500 rounded p-0.5 transition-colors cursor-pointer pointer-events-auto"
                            title="Delete Submission Log"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-zinc-500 dark:text-zinc-400 font-semibold truncate">FROM: {msg.name}</p>
                        <p className="text-zinc-400 dark:text-zinc-505 text-[9px]">{msg.createdAt}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Interactive Form Segment */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 bg-zinc-50 dark:bg-zinc-950 border-2 border-zinc-950 dark:border-zinc-800 rounded-none shadow-sm">
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  // SUCCESS RESPONSE SEGMENT
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="text-center py-8 space-y-4"
                    id="success-banner"
                  >
                    <div className="inline-flex items-center justify-center p-3 rounded-none bg-emerald-500 text-black mb-2 animate-bounce">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-sans font-black uppercase text-slate-950 dark:text-white tracking-wider">
                      MESSAGE LOGGED
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm max-w-sm mx-auto font-mono uppercase leading-relaxed">
                      Handshake registered. Your query was compiled and recorded successfully in local state. Response will dispatch to your target email shortly.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-3.5 bg-emerald-500 hover:bg-white text-black font-sans font-black text-xs uppercase tracking-widest transition-colors cursor-pointer rounded-none border border-emerald-500 hover:border-zinc-200"
                      id="reset-form-btn"
                    >
                      SEND ANOTHER INQUIRY
                    </button>
                  </motion.div>
                ) : (
                  // ACTIVE FORM SEGMENT
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5 font-mono text-xs uppercase tracking-wider"
                    id="contact-form"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label htmlFor="name-input" className="text-[10px] font-black text-zinc-550 dark:text-zinc-400">
                          Your Name
                        </label>
                        <input
                          id="name-input"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white dark:bg-zinc-900 border rounded-none outline-none transition-all ${
                            errors.name
                              ? "border-red-500 focus:border-red-500"
                              : "border-zinc-250 dark:border-zinc-800 focus:border-emerald-500"
                          }`}
                          placeholder="A R U N"
                        />
                        {errors.name && <p className="text-red-500 text-[10px] font-bold">{errors.name}</p>}
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label htmlFor="email-input" className="text-[10px] font-black text-zinc-550 dark:text-zinc-400">
                          Email Address
                        </label>
                        <input
                          id="email-input"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white dark:bg-zinc-900 border rounded-none outline-none transition-all ${
                            errors.email
                              ? "border-red-500 focus:border-red-500"
                              : "border-zinc-250 dark:border-zinc-800 focus:border-emerald-500"
                          }`}
                          placeholder="EMAIL@DOMAIN.COM"
                        />
                        {errors.email && <p className="text-red-500 text-[10px] font-bold">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject-input" className="text-[10px] font-black text-zinc-550 dark:text-zinc-400">
                        Inquiry Subject
                      </label>
                      <input
                        id="subject-input"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white dark:bg-zinc-900 border rounded-none outline-none transition-all ${
                          errors.subject
                            ? "border-red-500 focus:border-red-500"
                            : "border-zinc-250 dark:border-zinc-800 focus:border-emerald-500"
                        }`}
                        placeholder="DATA INQUIRY • EVALUATION STUDY"
                      />
                      {errors.subject && <p className="text-red-500 text-[10px] font-bold">{errors.subject}</p>}
                    </div>

                    {/* Message body input */}
                    <div className="space-y-1.5">
                      <label htmlFor="msg-input" className="text-[10px] font-black text-zinc-550 dark:text-zinc-400">
                        Detailed Message
                      </label>
                      <textarea
                        id="msg-input"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white dark:bg-zinc-900 border rounded-none outline-none transition-all ${
                          errors.message
                            ? "border-red-500 focus:border-red-500"
                            : "border-zinc-250 dark:border-zinc-800 focus:border-emerald-500"
                        }`}
                        placeholder="HI ISHRAT, INITIATING QUERY HANDSHAKE..."
                      />
                      {errors.message && <p className="text-red-500 text-[10px] font-bold">{errors.message}</p>}
                    </div>

                    {/* Submission CTA Button */}
                    <button
                      name="submit"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-emerald-500 hover:bg-white text-black font-sans font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer disabled:opacity-50 border border-emerald-500 hover:border-zinc-300"
                      id="submit-contact-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black rounded-full border-t-transparent animate-spin"></div>
                          <span>DISPATCHING STATE...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SUBMIT SECURE QUERY</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
