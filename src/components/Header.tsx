import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X, Linkedin, Github, Mail, Cpu, FileDown } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Header({
  darkMode,
  toggleDarkMode,
  activeSection,
  setActiveSection,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "blog", label: "ARTICLES" },
    { id: "contact", label: "CONTACT" },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-2.5 font-sans font-black text-xl tracking-tighter text-slate-950 dark:text-white uppercase cursor-pointer group"
            id="logo-btn"
          >
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="font-mono font-bold tracking-tighter">
              Ishrat<span className="text-emerald-500"> Jerin</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-1.5 font-sans text-xs font-black tracking-widest transition-all duration-200 cursor-pointer border-b-2 ${
                  activeSection === item.id
                    ? "text-emerald-500 border-emerald-500"
                    : "text-zinc-500 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-white border-transparent"
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Socials & Theme Toggle (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/ishrat-jerin-9518a317b/"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-zinc-500 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-400 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              aria-label="LinkedIn Profile"
              id="lnk-linkedin"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:ishrat.jerin.bd@gmail.com"
              className="p-2 text-zinc-500 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-white rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              aria-label="Email Address"
              id="lnk-mail"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-1"></div>

           {/* Print/Save Resume Button */}
            <a
              href="https://drive.google.com/file/d/1HTKul1QdGF27RqBXWYzs_tdjmJckkSPR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-all duration-200 cursor-pointer text-[10px] font-mono font-black tracking-widest flex items-center gap-1.5 uppercase shrink-0"
              aria-label="Download Resume"
              id="download-resume-btn"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>DOWNLOAD CV</span>
            </a>

            <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-1"></div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="px-3 py-1.5 relative rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer text-[10px] font-mono font-bold tracking-wider flex items-center gap-1.5"
              aria-label="Toggle scheme"
              id="scheme-toggle-btn"
            >
              <div className={`w-2 h-2 rounded-full ${darkMode ? "bg-emerald-500" : "bg-zinc-400"}`}></div>
              <span>{darkMode ? "DARK MODE" : "LIGHT MODE"}</span>
            </button>
          </div>

          {/* Mobile Actions Header */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 pointer-events-auto cursor-pointer"
              aria-label="Toggle scheme"
              id="mobile-scheme-toggle"
            >
              {darkMode ? <Sun className="w-4 h-4 text-emerald-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-zinc-600 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-white pointer-events-auto cursor-pointer"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-lg"
            id="mobile-menu-pane"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-black tracking-widest transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? "text-emerald-500 bg-zinc-100 dark:bg-zinc-900"
                      : "text-zinc-600 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-white"
                  }`}
                  id={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-zinc-155 dark:bg-zinc-800 my-3"></div>

              {/* Mobile Print/Save CV action */}
              <div className="px-4 pb-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    // Slight delay to allow the drawer animation to transition smoothly
                    setTimeout(() => {
                      window.print();
                    }, 300);
                  }}
                  className="w-full py-3 px-4 border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-sans text-xs font-black tracking-widest text-center flex items-center justify-center gap-2 uppercase transition-all duration-200 rounded-none cursor-pointer"
                  id="mobile-cv-btn"
                >
                  <FileDown className="w-4 h-4 text-emerald-500" />
                  <span>DOWNLOAD PRINTABLE CV</span>
                </button>
              </div>

              <div className="flex items-center gap-4 px-4 py-1">
                <a
                  href="https://www.linkedin.com/in/ishrat-jerin-9518a317b/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-emerald-500"
                  id="mobile-link-linkedin"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href="mailto:ishrat.jerin.bd@gmail.com"
                  className="flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-emerald-500"
                  id="mobile-link-mail"
                >
                  <Mail className="w-4 h-4" />
                  <span>EMAIL</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
