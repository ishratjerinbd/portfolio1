import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Calendar, Clock, ArrowLeft, Layers, Terminal, Copy, Check, ChevronRight, HelpCircle, HardDrive, Cpu } from "lucide-react";
import { BlogPost } from "../types";
import { blogPostsData, cmsGuides } from "../data";

export default function Blog() {
  const [activeTab, setActiveTab] = useState<"articles" | "cms_guide">("articles");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedCms, setSelectedCms] = useState<"kobo" | "surveycto">("kobo");
  const [copied, setCopied] = useState<boolean>(false);

  // Quick manually styled markdown previewing
  const renderSimpleMarkdown = (text: string) => {
    return text.split("\n\n").map((paragraph, index) => {
      // Headers
      if (paragraph.startsWith("### ")) {
        return (
          <h4 key={index} className="text-base sm:text-lg font-sans font-black text-slate-900 dark:text-white pt-4 pb-1">
            {paragraph.replace("### ", "")}
          </h4>
        );
      }
      if (paragraph.startsWith("## ")) {
        return (
          <h3 key={index} className="text-lg sm:text-xl font-sans font-black text-slate-900 dark:text-white pt-6 pb-2 border-b border-slate-100 dark:border-slate-800">
            {paragraph.replace("## ", "")}
          </h3>
        );
      }
      // Bullet lists
      if (paragraph.startsWith("- ") || paragraph.startsWith("* ")) {
        const items = paragraph.split("\n");
        return (
          <ul key={index} className="list-disc pl-5 my-3 space-y-1.5 font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300">
            {items.map((item, id) => (
              <li key={id}>{item.replace(/^[-*]\s+/, "")}</li>
            ))}
          </ul>
        );
      }
      // Numbered lists
      if (/^\d+\.\s+/.test(paragraph)) {
        const items = paragraph.split("\n");
        return (
          <ol key={index} className="list-decimal pl-5 my-3 space-y-1.5 font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300">
            {items.map((item, id) => (
              <li key={id}>{item.replace(/^\d+\.\s+/, "")}</li>
            ))}
          </ol>
        );
      }
      // Code blocks
      if (paragraph.startsWith("```")) {
        const lines = paragraph.split("\n");
        const language = lines[0].replace("```", "") || "typescript";
        const codeContent = lines.slice(1, -1).join("\n");
        return (
          <div key={index} className="relative rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 my-4">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-100 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 text-[10px] font-mono text-slate-500 dark:text-slate-400">
              <span>{language.toUpperCase()}</span>
              <span className="text-[9px]">READ-ONLY CODE</span>
            </div>
            <pre className="p-4 bg-slate-50 dark:bg-slate-950/60 overflow-x-auto text-[11px] sm:text-xs font-mono text-indigo-600 dark:text-indigo-300 leading-relaxed">
              <code>{codeContent}</code>
            </pre>
          </div>
        );
      }
      // Bold text replacement
      const processed = paragraph.split(/(\*\*.*?\*\*)/g).map((part, pIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={pIdx} className="font-extrabold text-slate-950 dark:text-white">{part.slice(2, -2)}</strong>;
        }
        // Code quotes
        const contentWithCode = part.split(/`([^`]+)`/g).map((snippet, sIdx) => {
          if (sIdx % 2 !== 0) {
            return <code key={sIdx} className="px-1.5 py-0.5 rounded-sm bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-medium">{snippet}</code>;
          }
          return snippet;
        });
        return contentWithCode;
      });

      return (
        <p key={index} className="font-sans text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          {processed}
        </p>
      );
    });
  };

  const activeCmsData = cmsGuides[selectedCms];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeCmsData.clientCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="blog"
      className="py-24 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Title Wrapper */}
        <div className="max-w-3xl mx-auto mb-12 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-2 text-emerald-500 font-mono text-[10px] font-black tracking-widest uppercase mb-2">
            <span className="w-2.5 h-2.5 bg-emerald-500"></span>
            <span>TECHNICAL JOURNAL</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-sans font-black tracking-tighter uppercase text-slate-950 dark:text-white leading-none mb-3" id="blog-title">
            TECHNICAL JOURNAL
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 font-sans text-xs sm:text-sm uppercase tracking-wider leading-relaxed max-w-2xl">
            Written methodology guidelines, statistical analysis deep-dives, and field survey integration blueprints.
          </p>
        </div>

        {/* Section Tabs: Browse Articles or CMS Configuration */}
        <div className="flex justify-center gap-6 border-b border-zinc-200 dark:border-zinc-800 mb-8 w-full" id="blog-nav-tabs">
          <button
            onClick={() => { setActiveTab("articles"); setSelectedPost(null); }}
            className={`pb-3 text-xs font-sans font-black tracking-widest uppercase transition-all relative cursor-pointer ${
              activeTab === "articles"
                ? "text-emerald-500"
                : "text-zinc-500 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-white"
            }`}
            id="tab-btn-articles"
          >
            LOCAL JOURNAL
            {activeTab === "articles" && (
              <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("cms_guide")}
            className={`pb-3 text-xs font-sans font-black tracking-widest uppercase transition-all relative cursor-pointer ${
              activeTab === "cms_guide"
                ? "text-emerald-500"
                : "text-zinc-500 hover:text-slate-950 dark:text-zinc-400 dark:hover:text-white"
            }`}
            id="tab-btn-cms"
          >
            API INTEGRATION
            {activeTab === "cms_guide" && (
              <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500" />
            )}
          </button>
        </div>

        {/* Dynamic Panel Wrapper */}
        <div id="blog-content-area">
          <AnimatePresence mode="wait">
            {activeTab === "articles" ? (
              // ARTICLES SUBPANEL
              !selectedPost ? (
                /* ARTICLES LIST GRID */
                <motion.div
                  key="list"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                   id="articles-list"
                >
                  {blogPostsData.map((post) => (
                    <article
                      key={post.id}
                      onClick={() => setSelectedPost(post)}
                      className="group p-6 bg-white dark:bg-zinc-900 rounded-none border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 cursor-pointer transition-all flex flex-col justify-between h-full"
                      id={`post-card-${post.slug}`}
                    >
                      <div className="space-y-4">
                        {/* Meta Tags */}
                        <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-wider uppercase text-zinc-400">
                          <span className="px-2 py-0.5 bg-emerald-500 text-black font-black">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Title and Summary */}
                        <div className="space-y-2">
                          <h3 className="text-sm font-sans font-black text-slate-950 dark:text-white uppercase tracking-wider group-hover:text-emerald-500 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-zinc-500 dark:text-zinc-400 text-[11px] leading-relaxed uppercase font-mono line-clamp-3">
                            {post.summary}
                          </p>
                        </div>
                      </div>

                      {/* Card Footer Author Stamp */}
                      <div className="mt-6">
                        <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-4"></div>
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-mono font-bold text-zinc-400">
                            {post.publishedAt}
                          </span>
                          <span className="text-[10px] font-sans font-black text-emerald-500 uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            READ FULL WALKTHROUGH
                            <ChevronRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </motion.div>
              ) : (
                /* INDIVIDUAL COMPACT READER PORT */
                <motion.div
                  key="reader"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-zinc-900 rounded-none border border-zinc-950 dark:border-zinc-805 p-6 sm:p-10 max-w-4xl mx-auto"
                  id="article-reader-pane"
                >
                  {/* Exit Reader */}
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="mb-8 px-4 py-2.5 text-[9px] font-sans font-black uppercase tracking-widest text-zinc-650 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 hover:border-emerald-500 flex items-center gap-2 cursor-pointer rounded-none"
                    id="exit-reader-btn"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    BACK TO JOURNAL
                  </button>

                  {/* Header Segment */}
                  <div className="space-y-4">
                    <span className="px-2 py-0.5 text-[10px] font-mono font-black uppercase bg-emerald-500 text-black">
                      {selectedPost.category}
                    </span>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-black uppercase tracking-tight text-white leading-tight">
                      {selectedPost.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-[9px] font-mono font-black text-zinc-400 pt-2 border-b border-zinc-200 dark:border-zinc-805 pb-6 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-emerald-500" />
                        <span>PUBLISHED: {selectedPost.publishedAt}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-emerald-500" />
                        <span>ESTIMATE: {selectedPost.readTime}</span>
                      </div>
                      <div>
                        <span>AUTHOR: {selectedPost.author.name}</span>
                      </div>
                    </div>
                  </div>

                  {/* Text Parser Body */}
                  <div className="mt-8 space-y-6 text-zinc-750 dark:text-zinc-305" id="reader-body">
                    {renderSimpleMarkdown(selectedPost.content)}
                  </div>
                </motion.div>
              )
            ) : (
              // HEADLESS CMS PLATFORMS GUIDE
              <motion.div
                key="cms"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid lg:grid-cols-12 gap-8"
                id="cms-platform-guide"
              >
                {/* CMS Choice Segment */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="p-5 bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-none space-y-4">
                    <h3 className="font-sans font-black text-sm uppercase text-slate-950 dark:text-white flex items-center gap-2 tracking-wider">
                      <HelpCircle className="w-5 h-5 text-emerald-500" />
                      AUTOMATED FIELD INGESTION
                    </h3>
                    <p className="font-sans text-[11px] text-zinc-500 dark:text-zinc-400 uppercase leading-relaxed font-mono">
                      Integrating real-time field data with your statistical analysis is critical. Pulling submissions live via secure APIs enables continuous reporting and visual oversight.
                    </p>
                  </div>

                  {/* CMS Selector Card Tabs */}
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => setSelectedCms("kobo")}
                      className={`p-4 text-left border rounded-none flex items-start gap-4 transition-all duration-200 cursor-pointer ${
                        selectedCms === "kobo"
                          ? "bg-white dark:bg-zinc-900 border-2 border-emerald-500"
                          : "bg-zinc-100 border-zinc-200 dark:border-zinc-800 text-zinc-650 hover:border-zinc-400 dark:bg-zinc-950/30 dark:hover:border-zinc-800 dark:text-zinc-400"
                      }`}
                      id="cms-sel-kobo"
                    >
                      <div className="p-2.5 bg-zinc-100 dark:bg-zinc-950 text-emerald-500 border border-zinc-205 dark:border-zinc-805">
                        <HardDrive className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-sans font-black text-slate-950 dark:text-white text-xs uppercase tracking-wider">
                          Kobo Toolbox API
                        </h4>
                        <p className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug uppercase">
                          Fetch remote JSON survey submittals dynamically into local matrices using Python or Webhooks.
                        </p>
                      </div>
                    </button>

                    <button
                      onClick={() => setSelectedCms("surveycto")}
                      className={`p-4 text-left border rounded-none flex items-start gap-4 transition-all duration-200 cursor-pointer ${
                        selectedCms === "surveycto"
                          ? "bg-white dark:bg-zinc-900 border-2 border-emerald-500"
                          : "bg-zinc-100 border-zinc-200 dark:border-zinc-800 text-zinc-650 hover:border-zinc-400 dark:bg-zinc-950/30 dark:hover:border-zinc-800 dark:text-zinc-400"
                      }`}
                      id="cms-sel-surveycto"
                    >
                      <div className="p-2.5 bg-zinc-100 dark:bg-zinc-950 text-emerald-500 border border-zinc-205 dark:border-zinc-805">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-sans font-black text-slate-950 dark:text-white text-xs uppercase tracking-wider">
                          SurveyCTO API
                        </h4>
                        <p className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug uppercase">
                          Download encrypted double-entry CSV matrices directly over secure REST interfaces for analysis.
                        </p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Code Boilerplate Segment */}
                <div className="lg:col-span-7">
                  <div className="bg-zinc-900 rounded-none border border-zinc-950 dark:border-zinc-805 overflow-hidden flex flex-col h-full">
                    {/* Console Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-zinc-950 border-b border-zinc-850">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-emerald-400" />
                        <span className="font-mono text-[10px] text-zinc-300 font-bold uppercase tracking-wider">
                          {activeCmsData.name} - Fetch Blueprint
                        </span>
                      </div>
                      
                      {/* Copy Action */}
                      <button
                        onClick={handleCopyCode}
                        className="px-3 py-1.5 text-[9px] font-sans font-black uppercase tracking-widest bg-emerald-500 text-black hover:bg-white transition-all cursor-pointer pointer-events-auto"
                        id="copy-snippet-btn"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 text-black" />
                            <span>COPIED!</span>
                          </>
                        ) : (
                          <span>COPY BOILERPLATE</span>
                        )}
                      </button>
                    </div>

                    {/* Meta Specifications */}
                    <div className="p-4 bg-zinc-950/30 border-b border-zinc-850 space-y-2 text-[10px] font-mono uppercase tracking-wider">
                      <div className="text-zinc-400 leading-relaxed">
                        {activeCmsData.description}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-emerald-400 font-mono">NPM INSTALL:</span>
                        <div className="flex flex-wrap gap-1">
                          {activeCmsData.npmPackages.map((pkg) => (
                            <code key={pkg} className="px-2 py-0.5 bg-zinc-800 text-zinc-200 font-mono text-[9px]">
                              {pkg}
                            </code>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Preformated Code */}
                    <div className="p-4 flex-1 bg-zinc-950/40 font-mono text-xs text-zinc-200 overflow-x-auto min-h-[300px]">
                      <pre>
                        <code>{activeCmsData.clientCode}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
