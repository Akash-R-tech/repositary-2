import React from 'react';
import { HACKATHONS } from '../data/timelineData';
import { Certificate, CERTIFICATES_DATA } from '../data/certificatesData';
import { Trophy, Calendar, Award, ArrowUpRight, Eye } from 'lucide-react';

interface HackathonsSectionProps {
  onOpenCertificate: (cert: Certificate) => void;
}

export const HackathonsSection: React.FC<HackathonsSectionProps> = ({ onOpenCertificate }) => {
  return (
    <section id="hackathons" data-page-section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
            <Trophy className="w-4 h-4 text-purple-400" />
            <span>INNOVATION MARATHONS &amp; COMPETITIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Hackathons &amp; Innovation Sprints
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            High-intensity 24-hour sprints, national engineering hackathons, and collaborative problem solving.
          </p>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {HACKATHONS.map((hack) => {
            const matchingCert = CERTIFICATES_DATA.find(
              c => c.assetPath === hack.assetPath || c.title.toLowerCase().includes(hack.name.toLowerCase().slice(0, 8))
            );

            return (
              <div
                key={hack.id}
                className="p-6 rounded-2xl glass-panel glass-panel-hover border border-purple-500/20 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  {/* Top Badge/Date */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                    <span className="flex items-center gap-1 text-purple-300 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {hack.date}
                    </span>
                    {hack.duration && (
                      <span className="px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/20 text-purple-300">
                        {hack.duration}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-1 group-hover:text-purple-200 transition-colors">
                    {hack.name}
                  </h3>

                  <div className="text-xs text-purple-300 font-medium mb-3">
                    {hack.organizer}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {hack.summary}
                  </p>

                  {/* Recognition & Team info */}
                  <div className="space-y-1.5 pt-3 border-t border-purple-500/15 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <Award className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <strong className="text-white font-medium">{hack.awardOrCertificate}</strong>
                    </div>
                    {hack.team && (
                      <div className="text-slate-400 pl-5">
                        Team: <span className="text-purple-200">{hack.team}</span>
                      </div>
                    )}
                    {hack.projectAssociated && (
                      <div className="text-slate-400 pl-5">
                        Project: <span className="text-purple-200">{hack.projectAssociated}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom View Certificate Action if asset available */}
                {matchingCert && (
                  <div className="pt-4 mt-4 border-t border-purple-500/15">
                    <button
                      onClick={() => onOpenCertificate(matchingCert)}
                      className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-purple-200 hover:text-white bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/25 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-purple-400" />
                      <span>View Verified Credential</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
