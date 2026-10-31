import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, Copy, Check, MessageSquare, Phone, Instagram } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      const mailtoUrl = `mailto:akash.r2007.28@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('akash.r2007.28@gmail.com').then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  return (
    <section id="contact" data-page-section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
                <MessageSquare className="w-4 h-4 text-purple-400" />
                <span>COLLABORATION &amp; INQUIRIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-4">
                Let's Build Something Innovative.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                I am interested in connecting with developers, recruiters, engineers, and innovators who share a passion for technology, AI systems, and software engineering.
              </p>
            </div>

            {/* Verified Contact Details Cards */}
            <div className="space-y-3 pt-2">
              {/* Email */}
              <div className="p-4 rounded-xl glass-panel border border-purple-500/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Email Address</div>
                    <a
                      href="mailto:akash.r2007.28@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-purple-300 transition-colors truncate block"
                    >
                      akash.r2007.28@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-mono text-purple-300 hover:text-white bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/25 transition-colors shrink-0 flex items-center gap-1"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl glass-panel border border-purple-500/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Direct Phone</div>
                    <a
                      href="tel:+919345985499"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-purple-300 transition-colors truncate block"
                    >
                      +91 9345985499
                    </a>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">Available</span>
              </div>

              {/* GitHub */}
              <a
                href="https://github.com/Akash-R-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-panel glass-panel-hover border border-purple-500/20 flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">GitHub Profile</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-300 transition-colors truncate">
                      github.com/Akash-R-tech
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-400 group-hover:translate-x-0.5 transition-transform">
                  Visit &rarr;
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/akash-r-a51229326/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-panel glass-panel-hover border border-purple-500/20 flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">LinkedIn Network</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-300 transition-colors truncate">
                      linkedin.com/in/akash-r-a51229326
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-400 group-hover:translate-x-0.5 transition-transform">
                  Connect &rarr;
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/black_boy.ak/?__pwa=1#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-panel glass-panel-hover border border-purple-500/20 flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Instagram Profile</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-300 transition-colors truncate">
                      @black_boy.ak
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-400 group-hover:translate-x-0.5 transition-transform">
                  Follow &rarr;
                </span>
              </a>

              {/* Location */}
              <div className="p-4 rounded-xl glass-panel border border-purple-500/20 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    Coimbatore &amp; Tiruppur, Tamil Nadu, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-panel border border-purple-500/25">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2 font-display">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Feel free to reach out regarding engineering roles, freelance opportunities, or technical project collaborations.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-purple-950/30 border border-purple-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-purple-600/30 border border-purple-400 flex items-center justify-center mx-auto text-purple-300">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white font-display">Message Prepared</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Your message was prepared. If your email client didn't open automatically, you can directly email <a href="mailto:akash.r2007.28@gmail.com" className="text-purple-300 underline">akash.r2007.28@gmail.com</a>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-purple-200 bg-purple-950/60 hover:bg-purple-900/70 border border-purple-500/30 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-purple-500/25 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                    {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-purple-500/25 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-purple-500/25 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                  {errors.subject && <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-purple-500/25 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  />
                  {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Directly</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
