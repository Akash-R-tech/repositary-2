import React from 'react';
import { WORKSHOPS } from '../data/timelineData';
import { Certificate, CERTIFICATES_DATA } from '../data/certificatesData';
import { BookOpen, Calendar, Clock, Eye, Sparkles } from 'lucide-react';

interface WorkshopsSectionProps {
  onOpenCertificate: (cert: Certificate) => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({ onOpenCertificate }) => {
  return (
    <section id="workshops" data-page-section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
            <BookOpen className="w-4 h-4 text-purple-400" />
            <span>CONTINUOUS TECHNICAL TRAINING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Workshops &amp; Hands-on Training
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Specialized industrial courses covering UAV drone avionics, embedded robotics controllers, AI in robotics, and electronic circuits.
          </p>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {WORKSHOPS.map((workshop) => {
            const matchingCert = CERTIFICATES_DATA.find(
              c => c.assetPath === workshop.assetPath || c.title.toLowerCase().includes(workshop.title.toLowerCase().slice(0, 10))
            );

            return (
              <div
                key={workshop.id}
                className="p-6 rounded-2xl glass-panel glass-panel-hover border border-purple-500/20 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                    <span className="flex items-center gap-1 text-purple-300">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {workshop.date}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-purple-400" />
                      {workshop.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-1 group-hover:text-purple-200 transition-colors">
                    {workshop.title}
                  </h3>

                  <div className="text-xs text-purple-300 font-medium mb-3">
                    {workshop.organizer}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {workshop.summary}
                  </p>
                </div>

                {matchingCert && (
                  <div className="pt-4 mt-4 border-t border-purple-500/15">
                    <button
                      onClick={() => onOpenCertificate(matchingCert)}
                      className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-purple-200 hover:text-white bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/25 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5 text-purple-400" />
                      <span>View Training Certificate</span>
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
