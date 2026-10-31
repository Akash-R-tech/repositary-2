import React from 'react';
import { EDUCATION_LIST } from '../data/timelineData';
import { GraduationCap, BookOpen, CheckCircle, Award, Sparkles, MapPin, Calendar, Users, MessageSquare, Brain, Rocket, Trophy, Linkedin, Github, Mail, Instagram } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" data-page-section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>ACADEMIC FOUNDATION &amp; PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            About Akash R
          </h2>
        </div>

        {/* 2-Column Split: Comprehensive About Me on Left, Profile & Stats on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column: Full Professional Introduction */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-purple-500/20 space-y-4">
              <p>
                I am <strong className="text-white font-semibold">Akash R</strong>, a Bachelor of Engineering student in Electronics and Communication Engineering at Dr. N.G.P. Institute of Technology, Coimbatore.
              </p>
              <p>
                I am passionate about software engineering, full-stack development, artificial intelligence, generative AI, IoT, robotics, and automation.
              </p>
              <p>
                My journey combines software development with electronics and engineering. I enjoy exploring new technologies, developing practical solutions, participating in hackathons, and transforming ideas into working applications.
              </p>
              <p>
                I have experience exploring and developing projects involving AI-powered applications, web development, computer vision, robotic systems, embedded systems, and intelligent automation.
              </p>
              <p>
                Through academic projects, hackathons, workshops, freelance development, and internship experience, I continue to develop my technical knowledge and practical engineering skills.
              </p>
              <p>
                I am particularly interested in <span className="text-purple-300 font-medium">Software Engineer</span> opportunities where I can contribute to software development, AI-driven applications, backend systems, full-stack development, and innovative engineering projects.
              </p>
              <p className="pt-2 text-white font-medium border-t border-purple-500/15">
                My long-term goal is to become a highly skilled Software Engineer and build impactful technology solutions.
              </p>
            </div>

            {/* Leadership & Soft Skills Highlights */}
            <div className="p-6 rounded-2xl glass-panel border border-purple-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display">Leadership &amp; Communication</h3>
                  <p className="text-xs text-purple-300 font-mono">Department Coordinator &amp; Hackathon Team Lead</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Experienced in coordinating academic symposiums and robotics events, guiding cross-functional teams in 24-hour hackathons, and communicating technical architectures effectively.
              </p>

              {/* Achievement Badges from Reference Portfolio */}
              <div className="flex flex-wrap gap-2 pt-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/50 border border-purple-500/25 text-xs text-purple-200">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span>Team Leader</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/50 border border-purple-500/25 text-xs text-purple-200">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Technical Communication</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/50 border border-purple-500/25 text-xs text-purple-200">
                  <Brain className="w-3.5 h-3.5 text-fuchsia-400" />
                  <span>50+ AI Tools Explored</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/50 border border-purple-500/25 text-xs text-purple-200">
                  <Rocket className="w-3.5 h-3.5 text-emerald-400" />
                  <span>NASA Galactic Problem Solver</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image Card & Interactive Stats Grid */}
          <div className="lg:col-span-5 space-y-6">
            {/* Profile Image with Social Links Overlay (from reference portfolio) */}
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-purple-500/25 group p-3">
              <div className="relative aspect-[4/4.5] rounded-xl overflow-hidden bg-[#030305]">
                <img
                  src="/assets/aistudio/ME2_97eaf099.jpeg"
                  alt="Akash R"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay with social channels */}
                <div className="absolute inset-0 bg-[#050508]/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <h4 className="text-xl font-bold text-white font-display">Akash R</h4>
                  <p className="text-xs text-purple-300 font-mono">B.E. ECE Student &amp; Software Engineer</p>

                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href="https://www.linkedin.com/in/akash-r-a51229326/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-purple-950/80 border border-purple-500/30 text-white hover:bg-purple-600 transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="https://github.com/Akash-R-tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-purple-950/80 border border-purple-500/30 text-white hover:bg-purple-600 transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="mailto:akash.r2007.28@gmail.com"
                      className="p-2.5 rounded-lg bg-purple-950/80 border border-purple-500/30 text-white hover:bg-purple-600 transition-colors"
                      title="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/black_boy.ak/?__pwa=1#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-purple-950/80 border border-purple-500/30 text-white hover:bg-purple-600 transition-colors"
                      title="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Stats Cards Grid (from reference portfolio) */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl glass-panel border border-purple-500/20 hover:border-purple-400/40 transition-all">
                <Rocket className="w-5 h-5 text-purple-400 mb-1" />
                <div className="text-2xl font-extrabold text-white font-mono">5+</div>
                <div className="text-xs text-slate-400">Hackathons Participated</div>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-purple-500/20 hover:border-purple-400/40 transition-all">
                <Brain className="w-5 h-5 text-cyan-400 mb-1" />
                <div className="text-2xl font-extrabold text-white font-mono">50+</div>
                <div className="text-xs text-slate-400">AI Tools Explored</div>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-purple-500/20 hover:border-purple-400/40 transition-all">
                <GraduationCap className="w-5 h-5 text-amber-400 mb-1" />
                <div className="text-2xl font-extrabold text-white font-mono">4+</div>
                <div className="text-xs text-slate-400">Workshops Attended</div>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-purple-500/20 hover:border-purple-400/40 transition-all">
                <Sparkles className="w-5 h-5 text-fuchsia-400 mb-1" />
                <div className="text-2xl font-extrabold text-white font-mono">9+</div>
                <div className="text-xs text-slate-400">Software Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline Below */}
        <div className="pt-8 border-t border-purple-500/15">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-8">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span>Academic Degrees &amp; Diplomas</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {EDUCATION_LIST.map((edu) => (
              <div key={edu.id} className="p-6 sm:p-7 rounded-2xl glass-panel glass-panel-hover border border-purple-500/20 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-display">
                        {edu.degree}
                      </h3>
                      <p className="text-xs sm:text-sm text-purple-300 font-medium">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="text-xs font-mono text-purple-300 font-bold shrink-0">
                      {edu.grade}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {edu.period}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {edu.description}
                  </p>
                </div>

                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="pt-3 border-t border-purple-500/15">
                    <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3 text-purple-400" />
                      <span>Curriculum &amp; Course Coverage</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-purple-950/40 border border-purple-500/20"
                        >
                          {course}
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
