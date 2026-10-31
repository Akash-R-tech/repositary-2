import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050508] border-t border-purple-500/15 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-extrabold tracking-tight text-lg mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              <span>AKASH R</span>
            </div>
            <p className="text-xs text-slate-400">
              Designed and developed by Akash R.
            </p>
            <p className="text-xs text-purple-300 font-mono mt-0.5">
              Building the future, one project at a time.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Akash-R-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-purple-500/20 text-slate-300 hover:text-white hover:border-purple-400 transition-colors"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/akash-r-a51229326/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-purple-500/20 text-slate-300 hover:text-white hover:border-purple-400 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="mailto:akash.r2007.28@gmail.com"
              className="p-2.5 rounded-lg bg-slate-900 border border-purple-500/20 text-slate-300 hover:text-white hover:border-purple-400 transition-colors"
              title="Send Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/60 transition-colors flex items-center gap-1 text-xs font-mono"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-purple-500/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono gap-2">
          <span>&copy; {new Date().getFullYear()} Akash R. All rights reserved.</span>
          <span>Electronics &amp; Communication Engineering · Dr. N.G.P. iTech</span>
        </div>
      </div>
    </footer>
  );
};
