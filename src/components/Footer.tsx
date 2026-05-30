import { Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-850 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6">
          
          {/* Copyright Stamp */}
          <div className="text-center font-sans text-[11px] text-zinc-500 dark:text-zinc-400 space-y-1 uppercase tracking-wider">
            <p className="font-black text-slate-950 dark:text-white">
              © {new Date().getFullYear()} ISHRAT JERIN. ALL RIGHTS RESERVED.
            </p>
           </div>

          {/* Social Profiles & Up Anchor */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/ishrat-jerin-9518a317b/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white dark:bg-zinc-900 text-zinc-550 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-400 border border-zinc-200 dark:border-zinc-800 rounded-none transition-all"
              aria-label="LinkedIn profile connection link"
              id="footer-linkedin"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:ishrat.jerin.bd@gmail.com"
              className="p-2.5 bg-white dark:bg-zinc-900 text-zinc-550 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-400 border border-zinc-200 dark:border-zinc-800 rounded-none transition-all"
              aria-label="Primary email connection link"
              id="footer-email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-1"></div>

            {/* Back to Top */}
            <button
              onClick={handleScrollToTop}
              className="p-2.5 bg-white dark:bg-zinc-900 text-zinc-550 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-400 border border-zinc-200 dark:border-zinc-800 rounded-none transition-all cursor-pointer pointer-events-auto"
              title="Back to top"
              aria-label="Back to top navigation"
              id="back-to-top-btn"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
