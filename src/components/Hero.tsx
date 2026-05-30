import { motion } from "motion/react";
import { ArrowDown, Mail, ArrowRight, BarChart2, Database, LineChart, Globe } from "lucide-react";

interface HeroProps {
  onLearnMore: (sec: string) => void;
}

export default function Hero({ onLearnMore }: HeroProps) {
  const skillsList = [
    { name: "Statistical Modeling", icon: BarChart2, desc: "R, STATA & SPSS pipelines", color: "from-blue-500 to-indigo-500" },
    { name: "MIS & SQL Databases", icon: Database, desc: "Python automated workflows", color: "from-emerald-500 to-teal-500" },
    { name: "Interactive Analytics", icon: LineChart, desc: "Power BI and Excel Dashboards", color: "from-purple-500 to-pink-500" },
    { name: "Survey Scripting", icon: Globe, desc: "Kobo Toolbox & SurveyCTO", color: "from-orange-500 to-red-500" },
  ];

  const handleScrollTo = (sectionId: string) => {
    onLearnMore(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 select-none"
    >
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-emerald-100 dark:bg-emerald-950/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Branding */}
          <div className="lg:col-span-8 space-y-8 text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono font-bold tracking-widest uppercase"
              id="hero-badge"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              HI, I'M ISHRAT JERIN • STATISTICIAN & RESEARCHER
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-[110px] font-sans font-black tracking-tighter uppercase text-slate-950 dark:text-white leading-[0.85]"
              id="hero-heading"
            >
              <span className="block">Research Enthusiast &</span>
              <span className="block text-emerald-500">Impact Evaluation</span>
              <span className="block">Quant Specialist.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed font-sans"
              id="hero-lead"
            >
              More than 06 years of experience in market and social research, with 02 years in the development sector (UNICEF, World Bank, USAID, Gallup). Expert in programming dynamic survey scripts and executing robust multivariate data modeling using R, Python, STATA, and SPSS.
            </motion.p>

            {/* Action Buttons with Boxy Bold Theme */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
              id="hero-actions"
            >
              <button
                onClick={() => handleScrollTo("projects")}
                className="px-8 py-4 bg-emerald-500 hover:bg-white text-black hover:text-black font-sans font-black tracking-widest uppercase text-xs transition-colors cursor-pointer border border-emerald-500 hover:border-white shadow-md flex items-center justify-center gap-2"
                id="view-projects-btn"
              >
                EXPLORE PROJECTS
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScrollTo("contact")}
                className="px-8 py-4 bg-transparent hover:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-white font-sans font-black tracking-widest uppercase text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                id="contact-me-btn"
              >
                <Mail className="w-4 h-4" />
                GET IN TOUCH
              </button>
            </motion.div>
          </div>

          {/* Interactive Skill Grid */}
          <div className="lg:col-span-4 relative mt-8 lg:mt-0" id="hero-interactive-skills">
            <div className="absolute inset-0 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-none filter blur-2xl pointer-events-none"></div>
            
            <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto relative z-10">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-emerald-500"></span> CORE LANDMARKS
              </h2>
              {skillsList.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="p-4 bg-white dark:bg-zinc-900 rounded-none border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-4 transition-all duration-200 hover:border-emerald-500"
                    id={`skill-card-${index}`}
                  >
                    <div className="p-2.5 bg-zinc-100 dark:bg-zinc-950 text-emerald-500 border border-zinc-200 dark:border-zinc-805">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-sans font-black text-slate-900 dark:text-white text-xs uppercase tracking-wider">
                        {skill.name}
                      </h3>
                      <p className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase mt-0.5">
                        {skill.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={() => handleScrollTo("projects")}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-400 hover:text-emerald-500 cursor-pointer hidden sm:flex text-[10px] font-mono font-bold uppercase tracking-[0.2em] mt-12"
          id="scroll-indicator"
        >
          <span>SCROLL</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
}
