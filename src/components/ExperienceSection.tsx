import React from 'react';
import { EXPERIENCES } from '../data/timelineData';
import { RenderTechLogo } from '../data/techLogos';
import { Certificate, CERTIFICATES_DATA } from '../data/certificatesData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Eye } from 'lucide-react';

interface ExperienceSectionProps {
  onOpenCertificate?: (cert: Certificate) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenCertificate }) => {
  return (
    <section id="experience" data-page-section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
            <Briefcase className="w-4 h-4 text-purple-400" />
            <span>PRACTICAL INDUSTRY, LEADERSHIP &amp; FREELANCE TRACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Experience &amp; Leadership History
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Practical development workflows, department student coordination, client technical implementations, and production web application development.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {EXPERIENCES.map((exp) => {
            const matchingCert = exp.certificatePath
              ? CERTIFICATES_DATA.find((c) => c.assetPath === exp.certificatePath)
              : null;

            return (
              <div
                key={exp.id}
                className="p-6 sm:p-7 rounded-2xl glass-panel glass-panel-hover border border-purple-500/20 flex flex-col justify-between"
              >
                <div>
                  {/* Role & Org */}
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-purple-400 mb-2">
                    <span className="px-2.5 py-0.5 rounded bg-purple-950/50 border border-purple-500/25">
                      {exp.type}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1 font-display">
                    {exp.role}
                  </h3>
                  <div className="text-xs sm:text-sm text-purple-300 font-medium mb-1">
                    {exp.organization}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Core Responsibilities
                    </div>
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-purple-500/15">
                  {/* Technologies or Competencies */}
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 mb-2">Key Competencies</div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {exp.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-purple-950/40 border border-purple-500/20 text-[11px] text-slate-200"
                        >
                          <RenderTechLogo name={tech} size={12} />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate if available */}
                  {matchingCert && onOpenCertificate && (
                    <div className="pt-2 space-y-2">
                      <div
                        onClick={() => onOpenCertificate(matchingCert)}
                        className="relative rounded-xl overflow-hidden border border-purple-500/25 bg-[#030305]/80 p-2 cursor-pointer group/thumb hover:border-purple-400/60 transition-all flex items-center gap-3"
                      >
                        <img
                          src={matchingCert.previewImage || matchingCert.assetPath}
                          alt={matchingCert.title}
                          className="w-14 h-10 object-contain rounded-md bg-black/50 group-hover/thumb:scale-105 transition-transform shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-semibold text-white truncate group-hover/thumb:text-purple-300 transition-colors">
                            {matchingCert.title}
                          </div>
                          <div className="text-[10px] font-mono text-purple-400 flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>Click to Inspect Certificate</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onOpenCertificate(matchingCert)}
                        className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-purple-200 hover:text-white bg-purple-950/60 hover:bg-purple-900/70 border border-purple-500/30 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <Award className="w-3.5 h-3.5 text-purple-400" />
                        <span>
                          {exp.type === 'Leadership & Coordination'
                            ? 'View Appreciation Certificate'
                            : 'View Official MERN Certificate'}
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
