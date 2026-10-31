import React, { useState } from 'react';
import { CERTIFICATES_DATA, Certificate } from '../data/certificatesData';
import { Award, Eye, Calendar, CheckCircle2, FileText, Image as ImageIcon } from 'lucide-react';

interface CertificatesGalleryProps {
  onOpenCertificate: (cert: Certificate) => void;
}

export const CertificatesGallery: React.FC<CertificatesGalleryProps> = ({ onOpenCertificate }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: `All Credentials (${CERTIFICATES_DATA.length})` },
    { id: 'AI & Data', label: 'AI & Data Science' },
    { id: 'Robotics & Hardware', label: 'Robotics & Hardware' },
    { id: 'Academic & Systems', label: 'Academic & Software' },
    { id: 'Hackathons', label: 'Hackathons' }
  ];

  const filteredCertificates = CERTIFICATES_DATA.filter((cert) => {
    if (filter === 'all') return true;
    return cert.category === filter;
  });

  return (
    <section id="certificates" data-page-section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
            <Award className="w-4 h-4 text-purple-400" />
            <span>AUTHENTIC CREDENTIALS &amp; CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Verified Certifications Gallery
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Authentic certifications and official achievements earned across artificial intelligence, robotics, NASA Space Apps, embedded systems, and full-stack software development. Click any credential to preview the original document.
          </p>
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

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-xl glass-panel glass-panel-hover border border-purple-500/20 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Certificate Media Preview */}
              <div
                onClick={() => onOpenCertificate(cert)}
                className="relative h-48 w-full bg-[#030305] border-b border-purple-500/15 overflow-hidden cursor-pointer flex items-center justify-center p-2"
              >
                <img
                  src={cert.previewImage || cert.assetPath}
                  alt={cert.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 opacity-95 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Document Type Badge */}
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono bg-[#050508]/85 text-purple-300 border border-purple-500/30">
                  {cert.assetType === 'pdf' ? 'PDF Doc' : 'Image Cert'}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-purple-950/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-medium text-white">
                  <Eye className="w-4 h-4 text-purple-300" />
                  <span>Click to Inspect Fullscreen</span>
                </div>
              </div>

              {/* Certificate Metadata */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                    <span className="text-purple-400 font-semibold">{cert.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-purple-400" />
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white line-clamp-2 mb-1 group-hover:text-purple-200 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-purple-300 font-medium line-clamp-1 mb-2">
                    {cert.issuer}
                  </p>

                  <p className="text-[11px] text-slate-400 line-clamp-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Inspect Button */}
                <button
                  onClick={() => onOpenCertificate(cert)}
                  className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-purple-200 hover:text-white bg-purple-950/50 hover:bg-purple-900/60 border border-purple-500/25 transition-colors flex items-center justify-center gap-1.5 mt-2"
                >
                  <Eye className="w-3.5 h-3.5 text-purple-400" />
                  <span>Inspect Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
