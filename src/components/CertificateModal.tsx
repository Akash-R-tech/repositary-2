import React from 'react';
import { Certificate } from '../data/certificatesData';
import { X, ExternalLink, Calendar, Award, CheckCircle, Download, FileText } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[94vh] overflow-y-auto rounded-2xl bg-[#0b0b14] border border-purple-500/30 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0b0b14]/95 backdrop-blur-md border-b border-purple-500/20">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-400" />
            <span className="text-xs font-mono text-purple-300 uppercase tracking-wider">
              Verified Credential Certificate Preview
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={certificate.assetPath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-purple-200 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              <span>{certificate.assetType === 'pdf' ? 'Download Original PDF' : 'Original File'}</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-950/50 transition-colors"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="p-6 space-y-6">
          {/* Direct Crisp High-Resolution Image Preview */}
          <div className="relative w-full rounded-xl overflow-hidden bg-[#030305] border border-purple-500/25 flex items-center justify-center min-h-[360px] sm:min-h-[500px] p-2 sm:p-4">
            <img
              src={certificate.previewImage || certificate.assetPath}
              alt={certificate.title}
              className="max-h-[72vh] w-auto object-contain mx-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Certificate Metadata & Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
                {certificate.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 font-mono">
                <span className="text-purple-300 font-medium">{certificate.issuer}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  {certificate.date}
                </span>
                {certificate.credentialId && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-300">
                      ID: {certificate.credentialId}
                    </span>
                  </>
                )}
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {certificate.description}
            </p>

            {/* Skills Validated */}
            {certificate.skills && certificate.skills.length > 0 && (
              <div>
                <div className="text-xs font-mono text-slate-400 mb-2">Skills &amp; Knowledge Validated</div>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-purple-950/40 text-purple-200 border border-purple-500/25 flex items-center gap-1.5"
                    >
                      <CheckCircle className="w-3 h-3 text-purple-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 px-6 py-4 bg-[#0b0b14]/95 backdrop-blur-md border-t border-purple-500/20 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            {certificate.assetType === 'pdf' ? 'Official PDF Certificate' : 'Official Verified Asset'}
          </span>
          <a
            href={certificate.assetPath}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors flex items-center gap-1.5 shadow-md shadow-purple-600/30"
          >
            <span>Open High-Res Document</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
