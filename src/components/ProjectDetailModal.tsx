import React from 'react';
import { Project } from '../data/projectsData';
import { RenderTechLogo } from '../data/techLogos';
import { X, ExternalLink, Github, CheckCircle, Cpu, Layers } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0b0b14] border border-purple-500/30 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0b0b14]/95 backdrop-blur-md border-b border-purple-500/20">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-xs font-mono text-slate-400">{project.status}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-950/50 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-purple-300 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Detailed Narrative */}
          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20">
            <h3 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-purple-400" />
              <span>Project Overview &amp; Architecture</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-purple-400" />
              <span>Key Features &amp; Implementation</span>
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {project.keyFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-purple-500/15 text-xs sm:text-sm text-slate-300"
                >
                  <span className="text-purple-400 font-bold shrink-0">{i + 1}.</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* System Highlights */}
          {project.systemHighlights && project.systemHighlights.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>System Highlights &amp; Hardware Details</span>
              </h3>
              <div className="space-y-2">
                {project.systemHighlights.map((hl, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-purple-950/25 border border-purple-500/20 text-xs text-purple-200"
                  >
                    {hl}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Stack with Official Logos */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Technologies &amp; Frameworks
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-950/40 border border-purple-500/30 text-xs font-medium text-slate-200"
                >
                  <RenderTechLogo name={tech} size={18} />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="sticky bottom-0 px-6 py-4 bg-[#0b0b14]/95 backdrop-blur-md border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400 font-mono">
            Verified Project Record
          </div>

          <div className="flex items-center gap-2.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white transition-colors flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-medium bg-purple-600 hover:bg-purple-500 text-white transition-colors flex items-center gap-1.5 shadow-lg shadow-purple-600/30"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
