import React, { useState } from 'react';
import { AI_TOOLS_DATA } from '../data/aiToolsData';
import { RenderTechLogo } from '../data/techLogos';
import { Search, Sparkles, Cpu, Layers } from 'lucide-react';

export const AiToolsEcosystem: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: `All Tools (${AI_TOOLS_DATA.length})` },
    { id: 'AI Platform', label: 'AI Platforms & Automation' },
    { id: 'AI Coding', label: 'AI Coding & Application Dev' },
    { id: 'UI/UX Design', label: 'UI/UX & Design' },
    { id: 'Engineering', label: 'Engineering & Simulation' }
  ];

  const filteredTools = AI_TOOLS_DATA.filter((tool) => {
    const matchesCategory = filter === 'all' || tool.category === filter;
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="ai-tools" data-page-section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>EXPLORATION &amp; WORKFLOW STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              AI Tools &amp; Development Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              A comprehensive directory of 50+ cutting-edge AI platforms, agentic coding tools, design suites, and simulation environments explored across development, experimentation, and project workflows.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools or platforms..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950/80 border border-purple-500/25 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>
        </div>

        {/* Filter Tabs */}
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

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="group p-4 rounded-xl glass-panel glass-panel-hover border border-purple-500/15 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 relative"
            >
              <div>
                {/* Logo and Name */}
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="p-1.5 rounded-lg bg-[#050508] border border-purple-500/25 group-hover:border-purple-400/50 transition-colors shrink-0">
                    <RenderTechLogo name={tool.name} size={18} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-purple-300 transition-colors">
                      {tool.name}
                    </h3>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-purple-400/90 truncate mb-1.5">
                  {tool.subcategory}
                </div>

                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-purple-500/10 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>{tool.category}</span>
                <span className="text-purple-400/60">Explored</span>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16 text-slate-400 text-sm">
            No tools matched your search query "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
};
