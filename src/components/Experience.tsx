import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, GraduationCap, Award, Calendar, ChevronRight, Check } from "lucide-react";
import { experiencesData, educationData, seminarData } from "../data";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"career" | "education" | "seminars" | "skills">("career");

  const skillGroups = [
    {
      category: "Core Analytical Tools",
      items: ["SPSS", "STATA", "R", "Python", "MySQL", "ArcGIS"]
    },
    {
      category: "Digital Survey Scripting",
      items: ["KoBo Toolbox", "SurveyCTO", "Survey to go", "Survey Solution", "Go.data"]
    },
    {
      category: "Office & Analytics Solutions",
      items: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Microsoft Outlook"]
    }
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 text-emerald-500 font-mono text-[10px] font-black tracking-widest uppercase mb-2">
            <span className="w-2.5 h-2.5 bg-emerald-500"></span>
            <span>PROFESSIONAL RECORD & EDUCATION</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-sans font-black tracking-tighter uppercase text-slate-950 dark:text-white leading-none" id="experience-title">
            WORK HISTORY & ARCHIVE
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-3 font-sans text-xs sm:text-sm uppercase tracking-wider leading-relaxed max-w-2xl">
            A precise record of statistical evaluation, development sector governance, academic foundation, and technical mastery.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-zinc-200 dark:border-zinc-800 pb-4 w-full" id="experience-tabs">
          <button
            onClick={() => setActiveTab("career")}
            className={`px-5 py-3 text-[10px] sm:text-xs font-sans font-black uppercase tracking-widest relative cursor-pointer border rounded-none transition-all ${
              activeTab === "career"
                ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950 border-slate-950 dark:border-white"
                : "bg-transparent border-transparent text-zinc-500 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-white"
            }`}
            id="tab-btn-career"
          >
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              PROFESSIONAL CAREER
            </span>
          </button>

          <button
            onClick={() => setActiveTab("education")}
            className={`px-5 py-3 text-[10px] sm:text-xs font-sans font-black uppercase tracking-widest relative cursor-pointer border rounded-none transition-all ${
              activeTab === "education"
                ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950 border-slate-950 dark:border-white"
                : "bg-transparent border-transparent text-zinc-500 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-white"
            }`}
            id="tab-btn-education"
          >
            <span className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              ACADEMIC FOUNDATION
            </span>
          </button>

          <button
            onClick={() => setActiveTab("seminars")}
            className={`px-5 py-3 text-[10px] sm:text-xs font-sans font-black uppercase tracking-widest relative cursor-pointer border rounded-none transition-all ${
              activeTab === "seminars"
                ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950 border-slate-950 dark:border-white"
                : "bg-transparent border-transparent text-zinc-500 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-white"
            }`}
            id="tab-btn-seminars"
          >
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              SEMINARS & INITIATIVES
            </span>
          </button>

          <button
            onClick={() => setActiveTab("skills")}
            className={`px-5 py-3 text-[10px] sm:text-xs font-sans font-black uppercase tracking-widest relative cursor-pointer border rounded-none transition-all ${
              activeTab === "skills"
                ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950 border-slate-950 dark:border-white"
                : "bg-transparent border-transparent text-zinc-500 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-white"
            }`}
            id="tab-btn-skills"
          >
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              TECHNICAL SKILLSETS
            </span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="mt-8" id="experience-pane">
          <AnimatePresence mode="wait">
            
            {/* Career Timeline Tab */}
            {activeTab === "career" && (
              <motion.div
                key="career-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {experiencesData.map((exp, idx) => (
                  <div
                    key={exp.id}
                    className="p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-none relative overflow-hidden transition-all duration-300 hover:border-emerald-500/55 shadow-sm group"
                    id={`exp-card-${exp.id}`}
                  >
                    {/* Corner Tag */}
                    <div className="absolute top-0 right-0 py-1.5 px-4 text-[9px] font-mono font-black tracking-widest uppercase bg-zinc-100 dark:bg-zinc-800 border-l border-b border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
                      {exp.category}
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="font-sans font-black text-xl sm:text-2xl text-slate-950 dark:text-white uppercase tracking-tight group-hover:text-emerald-500 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="font-sans font-extrabold text-sm text-emerald-500 uppercase tracking-widest mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="p-2 bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-emerald-500">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-600 dark:text-zinc-400 uppercase">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 border-t border-zinc-100 dark:border-zinc-800 pt-5">
                      <h4 className="text-[10px] font-mono font-black text-emerald-500 uppercase tracking-widest mb-3">
                        // CORE RESPONSIBILITIES & SUMMARY
                      </h4>
                      <ul className="grid gap-3 sm:grid-cols-1">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-3">
                            <span className="p-1 text-emerald-500 shrink-0 mt-0.5">
                              <ChevronRight className="w-4 h-4" />
                            </span>
                            <span className="font-sans text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed uppercase">
                              {resp}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Academic Tab */}
            {activeTab === "education" && (
              <motion.div
                key="education-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {educationData.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-none relative transition-all duration-300 hover:border-emerald-500/55 shadow-sm space-y-4"
                    id={`edu-card-${idx}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="px-2 py-0.5 border border-emerald-500 text-[9px] font-mono font-black text-emerald-500 inline-block uppercase tracking-wider mb-2.5">
                          {edu.year} GRADUATION
                        </div>
                        <h3 className="font-sans font-black text-lg sm:text-xl text-slate-950 dark:text-white uppercase tracking-tight">
                          {edu.degree}
                        </h3>
                        <p className="font-sans font-bold text-sm text-zinc-500 uppercase tracking-wide mt-1">
                          MAJOR: <span className="text-emerald-500">{edu.major}</span>
                        </p>
                      </div>
                      <div className="p-3 bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-emerald-500">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4 space-y-3 font-mono text-xs uppercase text-zinc-600 dark:text-zinc-400">
                      <div>
                        <span className="font-bold text-zinc-400">INSTITUTION:</span> {edu.institution}
                      </div>
                      {edu.board && (
                        <div>
                          <span className="font-bold text-zinc-400">BOARD:</span> {edu.board}
                        </div>
                      )}
                      <div className="flex items-center gap-1 bg-zinc-50 dark:bg-zinc-950 p-2.5 border border-zinc-100 dark:border-zinc-800 text-emerald-500 font-sans font-bold tracking-tight text-sm">
                        <span>CGPA:</span>
                        <span className="font-mono text-base font-black">{edu.cgpa}</span>
                        <span className="text-[10px] text-zinc-400">/ 4.00 or 5.00</span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Seminars & Workshops Tab */}
            {activeTab === "seminars" && (
              <motion.div
                key="seminars-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {seminarData.map((sem, idx) => (
                  <div
                    key={sem.id}
                    className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-none flex items-start gap-4 hover:border-emerald-500/55 transition-all duration-200"
                    id={`sem-card-${sem.id}`}
                  >
                    <div className="p-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-250 dark:border-zinc-800 text-emerald-500 shrink-0 font-mono text-[10px] font-bold">
                      {sem.year}
                    </div>
                    <div>
                      <span className="text-[9px] font-mono uppercase bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 border border-zinc-250 dark:border-zinc-700 text-zinc-500 font-bold tracking-wider mb-1.5 inline-block">
                        {sem.type}
                      </span>
                      <h4 className="font-sans font-bold text-xs uppercase tracking-wide leading-relaxed text-slate-900 dark:text-zinc-200">
                        {sem.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Skills Matrix Tab */}
            {activeTab === "skills" && (
              <motion.div
                key="skills-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {skillGroups.map((group, gIdx) => (
                  <div
                    key={gIdx}
                    className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-none"
                    id={`skill-group-${gIdx}`}
                  >
                    <h3 className="font-sans font-black text-sm uppercase tracking-wider text-emerald-500 mb-6 border-b border-zinc-100 dark:border-zinc-800 pb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-500"></span>
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-[11px] font-bold uppercase tracking-wider hover:border-emerald-500 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
