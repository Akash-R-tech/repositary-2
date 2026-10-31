import React from 'react';
import { ThreeNeuralCore } from './ThreeNeuralCore';
import { Code2, Sparkles, Terminal, FileText, ArrowRight, Layers, Cpu, Award, Orbit, ShieldCheck, ChevronRight } from 'lucide-react';
import { RenderTechLogo } from '../data/techLogos';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" data-page-section className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden">
      {/* 3D Background Canvas */}
      <ThreeNeuralCore />

      {/* Hero Foreground Content: Split Command Center Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7">
            {/* Natural human subtitle lead-in */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Hi, I'm Akash R</span>
              <span aria-hidden="true" className="text-purple-500/60">·</span>
              <span className="text-slate-400">ECE Student &amp; Software Innovator</span>
            </div>

            {/* Main Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-display">
              Building Intelligent <br className="hidden sm:inline" />
              <span className="text-gradient-purple">Digital Experiences.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl font-medium text-purple-200/90 mb-4 tracking-tight">
              Software Engineer <span className="text-purple-400">·</span> Full-Stack Developer <span className="text-purple-400">·</span> AI &amp; IoT Enthusiast
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl">
              I am an engineering student at Dr. N.G.P. Institute of Technology passionate about building intelligent applications, innovative software, and real-world technology solutions using software engineering, artificial intelligence, IoT, robotics, and automation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 flex items-center gap-2 group"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-purple-200 bg-purple-950/60 hover:bg-purple-900/70 border border-purple-500/40 hover:border-purple-400 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#universe"
                className="px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800/60 border border-purple-500/20 transition-colors flex items-center gap-2"
              >
                <Orbit className="w-4 h-4 text-purple-400" />
                <span>3D Universe</span>
              </a>
            </div>

            {/* Animated Scroll Indicator */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <a
                href="#about"
                className="flex items-center gap-2 hover:text-purple-300 transition-colors py-2"
                aria-label="Scroll down to About section"
              >
                <div className="w-5 h-8 rounded-full border border-purple-500/40 flex items-start justify-center p-1">
                  <div className="w-1.5 h-2 bg-purple-400 rounded-full animate-bounce" />
                </div>
                <span>Scroll to explore portfolio</span>
              </a>
            </div>
          </div>

          {/* Right Column: Holographic Engineering & Telemetry Console (No image, no floating loose info) */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0">
            <div className="w-full rounded-2xl glass-panel border border-purple-500/30 p-6 sm:p-7 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl">
              {/* Header Status Bar */}
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-white tracking-wider">
                    ENGINEERING COMMAND CONSOLE
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30 text-purple-300">
                  COIMBATORE, TN
                </span>
              </div>

              {/* Verified Identity Specs */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Academic Track:</span>
                  <span className="text-white font-medium">B.E. ECE @ Dr. N.G.P. iTech</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Graduation:</span>
                  <span className="text-purple-300 font-mono font-semibold">2028 · CGPA 8.1</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Computer Diploma:</span>
                  <span className="text-white font-medium">DCA Grade A (CSC)</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">Target Role:</span>
                  <span className="px-2 py-0.5 rounded bg-purple-600/30 border border-purple-400/40 text-purple-200 font-mono text-[11px]">
                    Software Engineer
                  </span>
                </div>
              </div>

              {/* Core Technical Pillars */}
              <div className="space-y-2 pt-2 border-t border-purple-500/15">
                <div className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">
                  Technical Architecture Pillars
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-medium text-white">Full-Stack Development</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">React · Node · MERN</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-medium text-white">AI &amp; Generative Systems</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">Gemini Live · OpenCV · YOLO</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-pink-400" />
                      <span className="text-xs font-medium text-white">Robotics &amp; Edge Hardware</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">ROS 2 · Pi · ESP8266</span>
                  </div>
                </div>
              </div>

              {/* Quick Tech Logo Badges */}
              <div className="pt-2 border-t border-purple-500/15">
                <div className="text-[11px] font-mono text-slate-400 mb-2">Verified Core Languages &amp; Tools</div>
                <div className="flex flex-wrap items-center gap-2">
                  {['Java', 'Python', 'JavaScript', 'React', 'Node.js', 'ROS 2', 'OpenCV'].map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-purple-950/40 border border-purple-500/20 text-[11px] text-slate-300"
                    >
                      <RenderTechLogo name={tech} size={12} />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Jump Action */}
              <div className="pt-2">
                <a
                  href="#universe"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-700/60 to-purple-900/60 hover:from-purple-600 hover:to-purple-800 border border-purple-400/30 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Orbit className="w-4 h-4 text-purple-300" />
                  <span>Launch 3D Digital Universe Explorer</span>
                  <ChevronRight className="w-3.5 h-3.5 text-purple-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Verified Statistics Strip Below Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-8 border-t border-purple-500/15">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/15">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
              <Layers className="w-3.5 h-3.5" />
              <span>PROJECTS</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">9+</div>
            <div className="text-xs text-slate-400">Software &amp; Engineering</div>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/15">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
              <Cpu className="w-3.5 h-3.5" />
              <span>ECOSYSTEM</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">50+</div>
            <div className="text-xs text-slate-400">AI &amp; Dev Tools Explored</div>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/15">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
              <Terminal className="w-3.5 h-3.5" />
              <span>LEADERSHIP</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">ECE Coord</div>
            <div className="text-xs text-slate-400">Technoblast Association</div>
          </div>

          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/15">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
              <Code2 className="w-3.5 h-3.5" />
              <span>INTERNSHIP</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">MERN</div>
            <div className="text-xs text-slate-400">Full-Stack at Apex I Sys</div>
          </div>

          <div className="col-span-2 md:col-span-1 p-4 rounded-xl bg-purple-950/20 border border-purple-500/15">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
              <Award className="w-3.5 h-3.5" />
              <span>HONORS</span>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">24+ Certs</div>
            <div className="text-xs text-slate-400">NASA, Samsung, IEEE &amp; more</div>
          </div>
        </div>
      </div>
    </section>
  );
};
