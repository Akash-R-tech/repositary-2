import React, { useState } from 'react';
import { PROJECTS_DATA, Project } from '../data/projectsData';
import { RenderTechLogo } from '../data/techLogos';
import { ExternalLink, Github, Eye, Layers, Sparkles, ArrowRight } from 'lucide-react';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'AI', label: 'Artificial Intelligence' },
    { id: 'Full-Stack', label: 'Full-Stack Development' },
    { id: 'Robotics', label: 'Robotics & Hardware' },
    { id: 'Computer Vision', label: 'Computer Vision' },
    { id: 'IoT', label: 'IoT & Embedded' }
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'Robotics') return project.category === 'Robotics' || project.category === 'Embedded Systems';
    return project.category === filter;
  });

  return (
    <section id="projects" data-page-section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
              <Layers className="w-4 h-4 text-purple-400" />
              <span>VERIFIED REPOSITORIES &amp; SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Featured Software &amp; Engineering Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Real projects verified against <a href="https://github.com/Akash-R-tech" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">github.com/Akash-R-tech</a> spanning AI, full-stack, robotics, and computer vision.
            </p>
          </div>

          <a
            href="https://github.com/Akash-R-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-purple-500/30 hover:border-purple-400 transition-all flex items-center gap-2 shrink-0 self-start md:self-auto"
          >
            <Github className="w-4 h-4 text-purple-400" />
            <span>View All on GitHub</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Clean Interactive Filter Bar */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-950/60 border border-purple-500/20 rounded-xl mb-10 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filter === cat.id
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-purple-950/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl glass-panel glass-panel-hover border border-purple-500/20 flex flex-col justify-between overflow-hidden p-6 sm:p-7 relative transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Card Top: Metadata without pills */}
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                  <span className="text-purple-300 font-semibold">{project.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-400">{project.status}</span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-purple-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 line-clamp-4">
                  {project.description}
                </p>
              </div>

              {/* Card Bottom: Technology Stack with Official Logos & Actions */}
              <div className="space-y-5 pt-4 border-t border-purple-500/15">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 mb-2">Technology Stack</div>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-purple-950/40 border border-purple-500/20 text-xs text-slate-200"
                        title={tech}
                      >
                        <RenderTechLogo name={tech} size={14} />
                        <span className="text-[11px]">{tech}</span>
                      </div>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-[11px] font-mono text-purple-400 self-center">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card CTA Buttons */}
                <div className="flex items-center justify-between gap-2 pt-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-purple-200 hover:text-white bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-purple-400" />
                    <span>View Details</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900 border border-purple-500/20 text-slate-300 hover:text-white hover:border-purple-400 transition-colors"
                        title="View Repository on GitHub"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors shadow-md shadow-purple-600/30"
                        title="Open Live Demo"
                        aria-label={`Open Live Demo for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
