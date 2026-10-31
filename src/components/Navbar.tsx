import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050508]/85 backdrop-blur-md border-b border-purple-500/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl font-extrabold tracking-tight text-white hover:text-purple-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-sm shadow-purple-500" />
            <span className="font-display">AKASH R</span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs lg:text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0">
              About
            </a>
            <a href="#universe" className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0">
              3D Universe
            </a>
            <a href="#projects" className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0">
              Projects
            </a>
            <a href="#skills" className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0">
              Skills &amp; AI Tools
            </a>
            <a href="#experience" className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0">
              Experience
            </a>
            <a href="#certificates" className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0">
              Certificates
            </a>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-purple-200 bg-purple-950/50 hover:bg-purple-900/60 border border-purple-500/30 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-md shadow-purple-600/30 flex items-center gap-1"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-purple-950/40 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-purple-500/15 mt-3 space-y-2 bg-[#0b0b14]/95 backdrop-blur-xl rounded-xl p-4">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-purple-300 hover:bg-purple-950/40 rounded-lg"
            >
              About Me &amp; Education
            </a>
            <a
              href="#universe"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-purple-300 hover:bg-purple-950/40 rounded-lg"
            >
              3D Digital Universe
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-purple-300 hover:bg-purple-950/40 rounded-lg"
            >
              Featured Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-purple-300 hover:bg-purple-950/40 rounded-lg"
            >
              Skills &amp; AI Tools
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-purple-300 hover:bg-purple-950/40 rounded-lg"
            >
              Experience &amp; Hackathons
            </a>
            <a
              href="#certificates"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-200 hover:text-purple-300 hover:bg-purple-950/40 rounded-lg"
            >
              Verified Certificates
            </a>
            <div className="pt-2 border-t border-purple-500/15">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2 text-xs font-medium text-center text-purple-200 bg-purple-950/60 border border-purple-500/30 rounded-lg flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-purple-400" />
                <span>View Digital Resume</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
