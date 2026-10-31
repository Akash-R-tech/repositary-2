import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/skillsData';
import { RenderTechLogo } from '../data/techLogos';
import { Code, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

export const SkillsEcosystem: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('languages');

  const activeCategory =
    SKILL_CATEGORIES.find((cat) => cat.id === activeCategoryId) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" data-page-section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
            <Code className="w-4 h-4 text-purple-400" />
            <span>CORE COMPETENCIES &amp; TECHNOLOGIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Technical Skills Ecosystem
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Verified technical stack with official technology logos, categorized across software engineering, AI, IoT, robotics, and simulation.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-950/60 border border-purple-500/20 rounded-xl mb-10 overflow-x-auto no-scrollbar">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeCategoryId === cat.id
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-purple-950/40'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-purple-500/15">
            <div>
              <h3 className="text-xl font-bold text-white">{activeCategory.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{activeCategory.description}</p>
            </div>
            <span className="text-xs font-mono text-purple-400">
              {activeCategory.skills.length} Technologies
            </span>
          </div>

          {/* Skills Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-xl glass-panel glass-panel-hover border border-purple-500/20 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  {/* Logo + Skill Name Header */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#050508] border border-purple-500/30 group-hover:border-purple-400/50 transition-colors">
                        <RenderTechLogo name={skill.name} size={22} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-purple-200 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] font-mono text-purple-400">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-950/50 text-purple-300 border border-purple-500/20">
                      {skill.proficiency}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {skill.highlight}
                  </p>
                </div>

                {/* Related Projects */}
                {skill.relatedProjects && skill.relatedProjects.length > 0 && (
                  <div className="pt-3 border-t border-purple-500/15">
                    <div className="text-[11px] font-mono text-slate-400 mb-1.5">Applied In:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.relatedProjects.map((p) => (
                        <span
                          key={p}
                          className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-slate-900/80 border border-purple-500/15"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
