import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrintResume from "./components/PrintResume";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Synchronize dark class state
  useEffect(() => {
    const isDarkStored = localStorage.getItem("portfolio_theme");
    const initialDark = isDarkStored !== "light"; // Default to dark mode for prime tech look
    setDarkMode(initialDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio_theme", "light");
    }
  }, [darkMode]);

  // Track active section via IntersectionObserver for flawless scroll sync
  useEffect(() => {
    const sections = ["hero", "projects", "experience", "blog", "contact"];
    const observers = sections.map((secId) => {
      const element = document.getElementById(secId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(secId);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen transition-colors duration-300 antialiased font-sans flex flex-col justify-between">
      {/* Dynamic portfolio view (hidden during printing) */}
      <div className="print:hidden flex flex-col min-h-screen justify-between">
        <div>
          <Header
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <main>
            <Hero onLearnMore={setActiveSection} />
            <Projects />
            <Experience />
            <Blog />
            <Contact />
          </main>
        </div>
        <Footer />
      </div>

      {/* Publications-grade printable CV (only displayed during printing) */}
      <PrintResume />
    </div>
  );
}
