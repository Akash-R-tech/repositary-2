import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Github, Linkedin, MapPin, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
AKASH R
Software Engineer | Full-Stack Developer | AI & Generative AI Enthusiast
Email: akash.r2007.28@gmail.com | Phone/Location: Coimbatore, Tamil Nadu, India
GitHub: https://github.com/Akash-R-tech
LinkedIn: https://www.linkedin.com/in/akash-r-a51229326/

CAREER OBJECTIVE
To become a skilled Software Engineer capable of developing intelligent, scalable, and innovative software applications by combining software engineering, full-stack development, artificial intelligence, IoT, robotics, and problem-solving skills.

EDUCATION
- Bachelor of Engineering in Electronics and Communication Engineering
  Dr. N.G.P. Institute of Technology, Coimbatore (2025–2028 Expected) | CGPA: 8.1
- Diploma in Computer Applications (DCA)
  CSC Computer Software College (March 2024 – September 2024) | Grade: A (Excellent)
  Coverage: C Language, OOPS using C++, MS Office suite, Windows, Internet

EXPERIENCE
- Freelance Developer (4 Months, 2025)
  Technical implementation, independent full-stack programming, and client problem-solving.
- MERN Full-Stack Developer Intern (Apex I Sys, May 2026)
  React, Node.js, Express.js, MongoDB database workflows, and REST APIs.

KEY PROJECTS
- Live Agent: Real-time conversational AI app with Gemini Live WebSocket API and React.
- Jarvis AI Virtual Assistant: Natural language voice processing & automation assistant in Python.
- Autonomous Dual-Arm PCB Robot: Dual robotic arms with ROS 2, Raspberry Pi, ESP8266 & OpenCV.
- AI Object Detection: Lab equipment recognition using YOLOv4-tiny and OpenCV on Raspberry Pi.
- ExamEase: Examination management app built with React Native, Spring Boot & MySQL.
- NASA Weather Prediction: Meteorological data analysis & time-series modeling (NASA Space Apps 2025).

TECHNICAL SKILLS
- Languages: Java, Python, JavaScript, C, C++
- Frontend: React, React Native, Tailwind CSS, HTML5, CSS3, Vite
- Backend & DB: Node.js, Express.js, Spring Boot, REST APIs, MongoDB, MySQL
- AI & Vision: Gemini Live API, OpenCV, YOLO, OpenAI, Generative AI, Prompt Engineering
- Hardware & Robotics: Raspberry Pi, ESP8266, Arduino, ROS 2, Embedded Systems
- Engineering Tools: MATLAB, Simulink, Multisim, Fusion, Git, GitHub, VS Code
    `.trim();

    navigator.clipboard.writeText(resumeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0b0b14] border border-purple-500/30 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0b0b14]/95 backdrop-blur-md border-b border-purple-500/20">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-400" />
            <span className="text-xs font-mono text-purple-300 uppercase tracking-wider">
              Interactive Digital Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-950/40 border border-purple-500/30 text-slate-300 hover:text-white hover:border-purple-400 transition-colors flex items-center gap-1.5"
              title="Copy plain text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-600 hover:bg-purple-500 text-white transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-950/50 transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div id="printable-resume" className="p-6 sm:p-10 space-y-8 text-slate-200">
          {/* Header */}
          <div className="border-b border-purple-500/20 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              AKASH R
            </h1>
            <p className="text-base sm:text-lg text-purple-300 font-medium mb-4">
              Software Engineer | Full-Stack Developer | AI &amp; IoT Enthusiast
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 font-mono">
              <a href="mailto:akash.r2007.28@gmail.com" className="flex items-center gap-1.5 hover:text-purple-300">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>akash.r2007.28@gmail.com</span>
              </a>
              <span aria-hidden="true">·</span>
              <a href="https://github.com/Akash-R-tech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-purple-300">
                <Github className="w-3.5 h-3.5 text-purple-400" />
                <span>github.com/Akash-R-tech</span>
              </a>
              <span aria-hidden="true">·</span>
              <a href="https://www.linkedin.com/in/akash-r-a51229326/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-purple-300">
                <Linkedin className="w-3.5 h-3.5 text-purple-400" />
                <span>linkedin.com/in/akash-r-a51229326</span>
              </a>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </span>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 mb-2">
              Career Objective
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              To become a skilled Software Engineer capable of developing intelligent, scalable, and innovative software applications by combining software engineering, full-stack development, artificial intelligence, IoT, robotics, and problem-solving skills.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 mb-4">
              Education
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Bachelor of Engineering in Electronics and Communication Engineering
                  </h3>
                  <p className="text-xs text-purple-300">Dr. N.G.P. Institute of Technology, Coimbatore</p>
                  <p className="text-xs text-slate-400 mt-1">Coursework: Microcontrollers, Robotics, Signals, Digital Communication, OOP &amp; Data Structures</p>
                </div>
                <div className="text-xs font-mono text-slate-400 sm:text-right shrink-0">
                  <div>2025 – 2028 Expected</div>
                  <div className="text-purple-300 font-semibold">CGPA: 8.1</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 pt-3 border-t border-purple-500/10">
                <div>
                  <h3 className="text-sm font-bold text-white">
                    Diploma in Computer Applications (DCA)
                  </h3>
                  <p className="text-xs text-purple-300">CSC Computer Software College</p>
                  <p className="text-xs text-slate-400 mt-1">Coursework: C Language, OOPS using C++, MS Office, Internet</p>
                </div>
                <div className="text-xs font-mono text-slate-400 sm:text-right shrink-0">
                  <div>Completed Sept 2024</div>
                  <div className="text-purple-300 font-semibold">Overall Grade: A (Excellent)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 mb-4">
              Work &amp; Internship Experience
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-sm font-bold text-white">Association Student Coordinator</h3>
                  <span className="text-xs font-mono text-slate-400">AY 2025 – 2026</span>
                </div>
                <p className="text-xs text-slate-300 mb-2">ECE Association (Technoblast), Dr. N.G.P. Institute of Technology</p>
                <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
                  <li>Coordinated department technical symposiums, robotics exhibitions, and workshop initiatives</li>
                  <li>Liaised between faculty leadership, guest speakers, and engineering student cohorts</li>
                  <li>Awarded official Certificate of Appreciation by Dr. N.G.P. iTech for outstanding dedication</li>
                </ul>
              </div>

              <div className="pt-3 border-t border-purple-500/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-sm font-bold text-white">Freelance Developer</h3>
                  <span className="text-xs font-mono text-slate-400">4 Months · 2025</span>
                </div>
                <p className="text-xs text-slate-300 mb-2">Independent Software &amp; Technical Projects</p>
                <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
                  <li>Engineered custom software features, Python scripts, and web interfaces for technical requirements</li>
                  <li>Executed end-to-end development workflows, testing, and debugging independently</li>
                </ul>
              </div>

              <div className="pt-3 border-t border-purple-500/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-sm font-bold text-white">MERN Full-Stack Developer Intern</h3>
                  <span className="text-xs font-mono text-slate-400">May 16, 2026 – May 30, 2026</span>
                </div>
                <p className="text-xs text-slate-300 mb-2">Apex I Sys, Coimbatore</p>
                <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
                  <li>Developed full-stack web applications using MongoDB, Express.js, React, and Node.js</li>
                  <li>Implemented RESTful API endpoints and integrated dynamic frontend state management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 mb-4">
              Featured Software &amp; Engineering Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-lg bg-purple-950/20 border border-purple-500/20">
                <h3 className="text-sm font-bold text-white mb-1">Live Agent (Gemini Live API)</h3>
                <p className="text-xs text-slate-300 mb-2">Real-time bidirectional AI conversational web application with audio streaming.</p>
                <div className="text-[11px] font-mono text-purple-300">Stack: React · Vite · Tailwind · Gemini Live API</div>
              </div>

              <div className="p-3.5 rounded-lg bg-purple-950/20 border border-purple-500/20">
                <h3 className="text-sm font-bold text-white mb-1">Dual-Arm PCB Assembly Robot</h3>
                <p className="text-xs text-slate-300 mb-2">Autonomous dual robotic arms for pick-and-place soldering and vision alignment.</p>
                <div className="text-[11px] font-mono text-purple-300">Stack: Raspberry Pi · ESP8266 · ROS 2 · SG90 Servos</div>
              </div>

              <div className="p-3.5 rounded-lg bg-purple-950/20 border border-purple-500/20">
                <h3 className="text-sm font-bold text-white mb-1">AI Lab Equipment Detection</h3>
                <p className="text-xs text-slate-300 mb-2">Camera-based optical detection and categorization using edge YOLOv4-tiny inference.</p>
                <div className="text-[11px] font-mono text-purple-300">Stack: Python · OpenCV · YOLOv4-tiny · Flask</div>
              </div>

              <div className="p-3.5 rounded-lg bg-purple-950/20 border border-purple-500/20">
                <h3 className="text-sm font-bold text-white mb-1">NASA Weather Prediction</h3>
                <p className="text-xs text-slate-300 mb-2">Satellite meteorological data processing and atmospheric time-series modeling.</p>
                <div className="text-[11px] font-mono text-purple-300">Stack: Python · Data Analysis · Machine Learning</div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 mb-3">
              Technical Skills Matrix
            </h2>
            <div className="space-y-2 text-xs">
              <div><strong className="text-white">Programming:</strong> <span className="text-slate-300">Java, Python, JavaScript, C, C++</span></div>
              <div><strong className="text-white">Web &amp; Mobile:</strong> <span className="text-slate-300">React, React Native, Node.js, Express.js, Spring Boot, Tailwind CSS, HTML5, CSS3, Vite</span></div>
              <div><strong className="text-white">Databases &amp; APIs:</strong> <span className="text-slate-300">MongoDB, MySQL, REST APIs</span></div>
              <div><strong className="text-white">AI &amp; Computer Vision:</strong> <span className="text-slate-300">Gemini Live API, OpenAI, OpenCV, YOLO, Generative AI, Prompt Engineering</span></div>
              <div><strong className="text-white">Hardware &amp; Robotics:</strong> <span className="text-slate-300">Raspberry Pi, ESP8266, Arduino, ROS 2, Servo Motor Control, Sensor Integration</span></div>
              <div><strong className="text-white">Engineering Tools:</strong> <span className="text-slate-300">MATLAB, Simulink, Multisim, Fusion, Git, GitHub, VS Code</span></div>
            </div>
          </div>

          {/* Hackathons & Honors */}
          <div className="border-t border-purple-500/20 pt-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 mb-2">
              Key Hackathons &amp; Honors
            </h2>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li><strong className="text-white">NASA Space Apps Challenge 2025:</strong> Awarded Galactic Problem Solver credential.</li>
              <li><strong className="text-white">Samsung Solve for Tomorrow 2026:</strong> Recognized for Design Thinking and innovation.</li>
              <li><strong className="text-white">Hackzilla 24-Hour Hackathon (IEEE ComSoc):</strong> Continuous 24-hr sprint prototype development.</li>
              <li><strong className="text-white">V-Medithon 3.0 (VIT Chennai):</strong> 24-hour healthcare innovation hackathon with Team Electo tech.</li>
              <li><strong className="text-white">HackVega 2.0:</strong> Nationwide engineering competition against 47,000+ student cohorts.</li>
              <li><strong className="text-white">Zone Level Sports (Kho-Kho):</strong> Under-17 District Tournament Runner representing school.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
