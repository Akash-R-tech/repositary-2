export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Leadership & Coordination' | 'Freelance' | 'Internship';
  description: string;
  responsibilities: string[];
  technologies: string[];
  certificatePath?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  grade: string;
  location: string;
  coursework: string[];
  description: string;
}

export interface HackathonItem {
  id: string;
  name: string;
  organizer: string;
  date: string;
  location?: string;
  duration?: string;
  awardOrCertificate: string;
  team?: string;
  projectAssociated?: string;
  summary: string;
  assetPath?: string;
}

export interface WorkshopItem {
  id: string;
  title: string;
  organizer: string;
  duration: string;
  date: string;
  summary: string;
  assetPath?: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'ece-coordinator',
    role: 'Association Student Coordinator',
    organization: 'ECE Association (Technoblast), Dr. N.G.P. Institute of Technology',
    period: 'Academic Year 2025 – 2026',
    location: 'Coimbatore, Tamil Nadu, India',
    type: 'Leadership & Coordination',
    description: 'Served as an active Student Coordinator for the departmental activities of the ECE Association (Technoblast) at Dr. N.G.P. Institute of Technology. Worked under Association Coordinator Ms. S. Sasikala and Head of Department Dr. N. Chandrasekharan, leading student technical teams, robotics exhibitions, and technical symposium events.',
    responsibilities: [
      'Orchestrated departmental technical events, symposiums, and robotics workshops',
      'Coordinated between faculty leadership, guest lecturers, and engineering student cohorts',
      'Organized hardware project exhibitions demonstrating student IoT and embedded prototypes',
      'Awarded official Certificate of Appreciation by Dr. N.G.P. iTech for outstanding leadership and dedicated contribution'
    ],
    technologies: ['Event Leadership', 'Technical Coordination', 'Embedded Robotics', 'Team Management', 'Public Speaking'],
    certificatePath: '/assets/aistudio/co_ordinater_40c4e3cc.jpeg'
  },
  {
    id: 'freelance-dev',
    role: 'Freelance Developer',
    organization: 'Independent Engineering Projects',
    period: '4 Months · 2025',
    location: 'Coimbatore, India',
    type: 'Freelance',
    description: 'Worked on freelance development activities and technical projects, gaining practical experience in programming, implementation, and project execution. This experience helped explore development workflows, technical problem-solving, independent work, and the process of translating project requirements into practical solutions.',
    responsibilities: [
      'Engineered functional web interfaces and automation scripts for technical requirements',
      'Implemented clean, modular code architectures adhering to modern best practices',
      'Conducted independent research, debugging, and continuous integration testing',
      'Delivered client-tailored technical problem solving and feature execution'
    ],
    technologies: ['Python', 'JavaScript', 'React', 'Git', 'Automation']
  },
  {
    id: 'apex-isys-internship',
    role: 'MERN Full-Stack Developer Intern',
    organization: 'Apex I Sys',
    period: 'May 16, 2026 – May 30, 2026',
    location: 'Gandhipuram, Coimbatore, India',
    type: 'Internship',
    description: 'Completed a MERN Full-Stack Developer internship with exposure to modern web application development. The internship provided practical experience exploring frontend development, backend development, and full-stack application workflows.',
    responsibilities: [
      'Developed responsive single-page application components using React',
      'Configured Express.js backend routing and RESTful API endpoints',
      'Connected MongoDB collections and validated JSON request payloads',
      'Collaborated on practical full-stack application deployment pipelines'
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs', 'Postman'],
    certificatePath: '/assets/aistudio/Screenshot_2026-07-04_093329_2eeb1429.png'
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'dr-ngp-itech',
    institution: 'Dr. N.G.P. Institute of Technology',
    degree: 'Bachelor of Engineering in Electronics and Communication Engineering',
    period: '2025 – 2028 (Expected)',
    grade: 'CGPA: 8.1',
    location: 'Coimbatore, Tamil Nadu, India',
    coursework: [
      'Analog & Digital Communication',
      'Microcontrollers & Embedded Systems',
      'Computer Architecture & Networks',
      'Signals & Systems Simulation (MATLAB)',
      'Robotics & Industrial Automation',
      'Object-Oriented Programming & Data Structures'
    ],
    description: 'Undergraduate engineering program focusing on the intersection of embedded electronics, autonomous robotics, hardware controllers, and software development. Active coordinator in the ECE Association (Technoblast).'
  },
  {
    id: 'csc-dca',
    institution: 'CSC Computer Software College',
    degree: 'Diploma in Computer Applications (DCA)',
    period: 'March 2024 – September 2024',
    grade: 'Overall Grade: A (Excellent)',
    location: 'Tirupur-I (North) Centre, Tamil Nadu',
    coursework: [
      'C Programming Language',
      'Object-Oriented Programming using C++',
      'MS Windows & Systems Operation',
      'MS Word, MS Excel & Advanced Spreadsheets',
      'MS PowerPoint Presentations',
      'Internet Protocols & Networking Fundamentals'
    ],
    description: 'Foundational 6-month intensive diploma covering algorithmic programming in C and C++, object-oriented principles, memory handling, and office computing systems.'
  }
];

export const HACKATHONS: HackathonItem[] = [
  {
    id: 'nasa-space-apps',
    name: 'NASA International Space Apps Challenge 2025',
    organizer: 'NASA & Global Space Partners',
    date: 'October 4–5, 2025',
    awardOrCertificate: 'Galactic Problem Solver',
    projectAssociated: 'NASA Weather Prediction',
    summary: 'Engineered satellite data processing and predictive weather modeling to address real-world climate challenges facing Earth and space systems.',
    assetPath: '/assets/aistudio/certificate_akash.r_2025__n_a_s_a__space__apps__challenge_08280b8a.jpeg'
  },
  {
    id: 'v-medithon',
    name: 'V-Medithon 3.0 Healthcare Hackathon',
    organizer: 'VIT Chennai (SCOPE & Yenepoya Technology Incubator)',
    date: 'September 15–16, 2026',
    duration: '24 Hours',
    location: 'MG Auditorium, VIT Chennai',
    team: 'Electo tech',
    awardOrCertificate: 'Certificate of Participation (ID: P-0005)',
    summary: 'Competed in an intense 24-hour sprint engineering healthcare solutions bridging embedded hardware and software.',
    assetPath: '/assets/aistudio/V_MEDITHON_04075a8c.pdf'
  },
  {
    id: 'samsung-solve-for-tomorrow',
    name: 'Samsung Solve for Tomorrow 2026',
    organizer: 'Samsung (Enabling People - Education for Future Generations)',
    date: '2026',
    awardOrCertificate: 'Certificate of Participation (National Cohort)',
    summary: 'Recognized for valuable contribution to Samsung Solve for Tomorrow 2026, applying Design Thinking and developing innovative solutions for societal impact.',
    assetPath: '/assets/aistudio/WhatsApp_Image_2026-10-31_at_12.19.43_PM_5fe17835.jpeg'
  },
  {
    id: 'kpr-hackzilla',
    name: 'Hackzilla 24-Hour Hackathon — IEEE ComSoc',
    organizer: 'IEEE ComSoc & KPR Institute of Engineering and Technology',
    date: 'September 12–13, 2025',
    duration: '24 Hours',
    awardOrCertificate: 'Certificate of Participation (No: IEEE/SLC/2025/126A)',
    summary: '24-hour continuous hackathon conducted as part of the IEEE ComSoc Student Leadership Conference tackling rapid software-hardware development.',
    assetPath: '/assets/aistudio/WhatsApp_Image_2026-10-31_at_12.54.18_PM_65565e5f.jpeg'
  },
  {
    id: 'hackvega',
    name: 'HackVega 2.0 National Hackathon',
    organizer: 'Careernet / MyCareernet',
    date: '2026',
    awardOrCertificate: 'Certificate of Participation',
    summary: 'Selected among top engineering participants nationwide, competing against 47,000+ peers in algorithmic and full-stack software development.',
    assetPath: '/assets/aistudio/Hackvaga_2.0_4e3966bd.jpg'
  },
  {
    id: 'google-hackathon',
    name: 'Google Hackathon',
    organizer: 'Google Developers Ecosystem',
    date: '2026',
    awardOrCertificate: 'Hackathon Submission & Project Showcase',
    projectAssociated: 'Live Agent (Gemini Live API)',
    summary: 'Engineered Live Agent, a real-time multimodal conversational assistant leveraging the Gemini Live WebSocket API with bidirectional streaming audio.'
  },
  {
    id: 'sih',
    name: 'Smart India Hackathon (SIH)',
    organizer: 'Ministry of Education & AICTE, Govt of India',
    date: '2025–2026',
    awardOrCertificate: 'Innovation & Problem Solving Participant',
    summary: 'Participated in collaborative national problem solving focusing on societal and industrial challenges with software-hardware integration.'
  },
  {
    id: 'msme-hackathon',
    name: 'MSME Hackathon',
    organizer: 'Ministry of MSME, Govt of India',
    date: '2025–2026',
    awardOrCertificate: 'Technology Innovation Participant',
    summary: 'Participated in technical innovation initiatives targeting manufacturing, laboratory tracking, and automated small-enterprise workflows.'
  }
];

export const WORKSHOPS: WorkshopItem[] = [
  {
    id: 'ai-ml-iot-robotics',
    title: 'AI, Machine Learning, and IoT in Robotics',
    organizer: 'Dr. N.G.P. Institute of Technology & Robomiracle (AIM / NITI Aayog)',
    duration: '2-Day One Credit Course',
    date: 'August 10–11, 2026',
    summary: 'Intensive credit course covering neural inference, embedded microcontroller communication, and sensory feedback loops in autonomous robotics.',
    assetPath: '/assets/aistudio/AI__MEACHIN_LEARNING__720bffe4.jpeg'
  },
  {
    id: 'drone-technologies',
    title: 'Drone Technologies Hands-on Training',
    organizer: 'VEI Technologies Pvt. Ltd. & ECE Dept, Dr. N.G.P. iTech',
    duration: '2 Days Hands-On',
    date: 'July 24–25, 2026',
    summary: 'Comprehensive workshop on drone aerodynamics, multi-rotor assembly, flight controller tuning, and RF telemetry command links.',
    assetPath: '/assets/aistudio/VEI_TECHNOLOGIES_00f26dec.jpeg'
  },
  {
    id: 'drone-vcet',
    title: 'Drone Technology Workshop',
    organizer: 'Velalar College of Engineering and Technology (VCET), Erode',
    duration: '1 Day Intensive',
    date: 'May 7, 2025',
    summary: 'Practical training on electronic speed controllers, brushless DC motors, and autonomous GPS waypoint navigation.',
    assetPath: '/assets/aistudio/DRONE_TECHNOLOGY_df3678c7.jpeg'
  },
  {
    id: 'embedded-triox',
    title: 'Embedded Based Robotics Design',
    organizer: 'TrioX Technology & Center for Robotics, Dr. N.G.P. iTech',
    duration: '2 Days Hands-On',
    date: 'September 25–26, 2025',
    summary: 'Hands-on embedded robotic circuit design, H-bridge driver interfacing, optical sensor arrays, and microcontroller kinematics.',
    assetPath: '/assets/aistudio/2024-25-NGP-robotics-_certificate-AKASH_R_99703a21.pdf'
  },
  {
    id: 'robotics-atmel',
    title: 'Robotics with ATMEL Controller',
    organizer: 'Center for Robotics, Dr. N.G.P. iTech & e-Yantra IIT Bombay',
    duration: '1 Day Hands-On',
    date: 'September 19, 2025',
    summary: 'Specialized training on ATMEL AVR microcontroller registers, timer interrupts, ADC conversions, and robotic chassis control.',
    assetPath: '/assets/aistudio/robotics_6296ec5e.pdf'
  }
];
