import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Layers, ArrowUpRight, FolderOpen, X, CheckCircle } from "lucide-react";
import { Project } from "../types";
import { projectsData } from "../data";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "Statistical Research", "Impact Evaluation", "Data Analytics & MIS", "Social Studies"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 text-emerald-500 font-mono text-[10px] font-black tracking-widest uppercase mb-2">
            <span className="w-2.5 h-2.5 bg-emerald-500"></span>
            <span>RESEARCH & STATISTICAL CATALOG</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-sans font-black tracking-tighter uppercase text-slate-950 dark:text-white leading-none" id="projects-title">
            CASE STUDIES & RESEARCH
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-3 font-sans text-xs sm:text-sm uppercase tracking-wider leading-relaxed max-w-2xl">
            A curated catalog of impact evaluations, client diagnostics, and automated statistical processors. Inspect the methodologies and data configurations.
          </p>
        </div>

        {/* Category Filter Pills (Boxy and Tracked) */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" id="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2.5 text-[10px] font-sans font-black uppercase tracking-widest transition-all cursor-pointer border rounded-none ${
                selectedCategory === category
                  ? "bg-emerald-500 text-black border-emerald-500"
                  : "bg-transparent border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400 dark:hover:border-zinc-600"
              }`}
              id={`filter-pill-${category.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="project-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-zinc-50 dark:bg-zinc-950 rounded-none border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-emerald-500 transition-all flex flex-col h-full"
                id={`project-card-${project.id}`}
              >
                {/* Visual Image */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-200 dark:bg-zinc-900 border-b border-zinc-205 dark:border-zinc-805">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent"></div>
                  
                  {/* Category Stamp */}
                  <span className="absolute top-3 left-3 px-2 py-0.5 text-[9px] font-mono font-black tracking-widest uppercase bg-emerald-500 text-black">
                    {project.category}
                  </span>
                  
                  {project.featured && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 text-[9px] font-mono font-black uppercase tracking-widest bg-zinc-100 text-zinc-950 border border-zinc-300">
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-sm font-sans font-black text-slate-950 dark:text-white uppercase tracking-wider group-hover:text-emerald-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-[11px] leading-relaxed uppercase font-mono">
                      {project.description}
                    </p>
                  </div>

                  {/* Languages/Tags */}
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-zinc-200/50 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border border-zinc-350 dark:border-zinc-850">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 text-[9px] font-mono font-bold tracking-wider bg-zinc-200/50 dark:bg-zinc-900/60 text-zinc-400 dark:text-zinc-5000">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-4"></div>

                    {/* Footer Actions Inside Card */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300 font-sans font-black text-[10px] tracking-widest uppercase flex items-center gap-1 cursor-pointer"
                        id={`btn-open-${project.id}`}
                      >
                        INSPECT DETAILS
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 text-zinc-400 hover:text-slate-800 dark:text-zinc-500 dark:hover:text-white border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-colors"
                            aria-label="GitHub Repository"
                            id={`card-github-${project.id}`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 text-zinc-400 hover:text-slate-800 dark:text-zinc-500 dark:hover:text-white border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-colors"
                            aria-label="Live Stream"
                            id={`card-live-${project.id}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal System */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
                id="modal-overlay"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 15 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white dark:bg-zinc-900 rounded-none border border-zinc-950 dark:border-zinc-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 p-6 sm:p-8"
                id="project-modal"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors pointer-events-auto cursor-pointer"
                  aria-label="Close details"
                  id="close-modal-btn"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Art Cover */}
                <div className="h-48 sm:h-56 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 relative overflow-hidden bg-zinc-250 dark:bg-zinc-950 border-b border-zinc-205 dark:border-zinc-805">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 sm:left-6">
                    <span className="px-2 py-0.5 text-[9px] font-mono font-black uppercase tracking-widest bg-emerald-500 text-black">
                      {activeProject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-sans font-black text-white mt-1.5 leading-tight uppercase tracking-wide">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>

                {/* Core Description content */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-emerald-500 uppercase tracking-widest mb-1.5">
                      // INVESTIGATION SCOPE SUMMARY
                    </h4>
                    <p className="font-sans text-zinc-650 dark:text-zinc-350 text-xs sm:text-sm leading-relaxed">
                      {activeProject.detailedDescription}
                    </p>
                  </div>

                  {/* Feature Blocks */}
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-emerald-500 uppercase tracking-widest mb-3">
                      // STUDY DELIVERABLES & OUTCOMES
                    </h4>
                    <ul className="space-y-2.5">
                      {activeProject.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-3 text-zinc-700 dark:text-zinc-300 text-xs font-sans items-start leading-snug">
                          <span className="w-1.5 h-1.5 bg-emerald-500 mt-1.5 flex-shrink-0 animate-pulse"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Methodology & Database Tags */}
                  <div>
                    <h4 className="text-[10px] font-mono font-black text-emerald-500 uppercase tracking-widest mb-2.5">
                      // DISCIPLINE & PIPELINE TOOLING
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-[9px] font-mono font-bold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-zinc-200 dark:bg-zinc-800 pt-1"></div>

                  {/* Destination Actions */}
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    {activeProject.githubUrl && (
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-1/2 justify-center px-4 py-3 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 text-center text-xs font-sans font-black uppercase tracking-widest transition-colors"
                        id="modal-link-github"
                      >
                        <Github className="w-4 h-4 mr-2 inline" />
                        SOURCE REPOSITORY
                      </a>
                    )}
                    {activeProject.liveUrl && (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-1/2 justify-center px-4 py-3 bg-emerald-500 text-black hover:bg-white border border-emerald-500 hover:border-zinc-200 text-center text-xs font-sans font-black uppercase tracking-widest transition-colors"
                        id="modal-link-live"
                      >
                        LIVE SANDBOX
                        <ExternalLink className="w-4 h-4 ml-2 inline" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
