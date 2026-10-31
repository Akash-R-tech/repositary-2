import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Layers } from 'lucide-react';

export interface PageSection {
  id: string;
  name: string;
  label: string;
}

export const PAGE_SECTIONS: PageSection[] = [
  { id: 'hero', name: 'Hero', label: '01. Home & 3D Core' },
  { id: 'about', name: 'About', label: '02. About & Education' },
  { id: 'universe', name: '3D Universe', label: '03. Digital Universe' },
  { id: 'projects', name: 'Projects', label: '04. Project Showcase' },
  { id: 'skills', name: 'Skills', label: '05. Technical Skills' },
  { id: 'ai-tools', name: 'AI Tools', label: '06. AI & Dev Tools' },
  { id: 'experience', name: 'Experience', label: '07. Experience & Roles' },
  { id: 'hackathons', name: 'Hackathons', label: '08. Hackathon Sprints' },
  { id: 'workshops', name: 'Workshops', label: '09. Hands-on Training' },
  { id: 'certificates', name: 'Certificates', label: '10. Verified Credentials' },
  { id: 'contact', name: 'Contact', label: '11. Get in Touch' }
];

export const PageNavigator: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Monitor scroll position to determine active page section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = PAGE_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(PAGE_SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    if (index < 0 || index >= PAGE_SECTIONS.length) return;
    const target = PAGE_SECTIONS[index];
    const el = document.getElementById(target.id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    scrollToSection(Math.min(PAGE_SECTIONS.length - 1, activeIndex + 1));
  };

  const handlePrevPage = () => {
    scrollToSection(Math.max(0, activeIndex - 1));
  };

  // Keyboard navigation for page-by-page stepping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return;
      }
      if (e.key === 'PageDown') {
        e.preventDefault();
        handleNextPage();
      } else if (e.key === 'PageUp') {
        e.preventDefault();
        handlePrevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <>
      {/* Right Desktop Floating Section Dots Indicator */}
      <nav
        aria-label="Page Section Quick Navigation"
        className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3 pointer-events-auto"
      >
        {PAGE_SECTIONS.map((sec, i) => {
          const isActive = activeIndex === i;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(i)}
              className="group flex items-center gap-2.5 py-1 focus:outline-none"
              aria-label={`Jump to page ${sec.label}`}
            >
              {/* Tooltip on hover */}
              <span
                className={`text-[11px] font-mono whitespace-nowrap transition-all duration-200 px-2 py-0.5 rounded bg-[#0b0b14]/90 border border-purple-500/20 ${
                  isActive
                    ? 'opacity-100 text-purple-300 translate-x-0'
                    : 'opacity-0 group-hover:opacity-100 text-slate-400 translate-x-1 group-hover:translate-x-0 pointer-events-none'
                }`}
              >
                {sec.label}
              </span>

              {/* Indicator Dot */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-3 h-3 bg-purple-500 shadow-md shadow-purple-500 ring-2 ring-purple-400/40'
                    : 'w-2 h-2 bg-slate-600/70 group-hover:bg-purple-400/80 group-hover:scale-125'
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* Floating Bottom Center / Right Next-Next Page Controller Dock */}
      <div className="fixed bottom-5 right-5 sm:right-8 z-40 flex items-center gap-2 p-1.5 rounded-xl bg-[#0b0b14]/90 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-black/80">
        <div className="px-3 py-1 flex items-center gap-2 text-xs font-mono border-r border-purple-500/20">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-purple-300 font-bold">
            {String(activeIndex + 1).padStart(2, '0')} / {String(PAGE_SECTIONS.length).padStart(2, '0')}
          </span>
          <span className="hidden sm:inline text-slate-400 truncate max-w-[120px]">
            {PAGE_SECTIONS[activeIndex]?.name}
          </span>
        </div>

        {/* Previous Page Button */}
        <button
          onClick={handlePrevPage}
          disabled={activeIndex === 0}
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-purple-950/60 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          title="Previous Page / Section"
          aria-label="Previous Page"
        >
          <ChevronUp className="w-4 h-4" />
        </button>

        {/* Next Page Button */}
        <button
          onClick={handleNextPage}
          disabled={activeIndex === PAGE_SECTIONS.length - 1}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 disabled:opacity-30 disabled:hover:bg-purple-600 transition-colors flex items-center gap-1 shadow-md shadow-purple-600/30"
          title="Next Page / Section"
          aria-label="Next Page"
        >
          <span>Next Page</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};
