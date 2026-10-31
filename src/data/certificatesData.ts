export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'AI & Data' | 'Robotics & Hardware' | 'Academic & Systems' | 'Hackathons';
  credentialId?: string;
  assetPath: string; // Original asset (image or PDF)
  previewImage: string; // Direct image preview for instant visual display
  assetType: 'image' | 'pdf';
  description: string;
  skills: string[];
}

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'nasa-space-apps',
    title: 'Galactic Problem Solver — NASA Space Apps Challenge 2025',
    issuer: 'NASA International Space Apps Challenge',
    date: 'October 4–5, 2025',
    category: 'Hackathons',
    credentialId: 'Galactic Problem Solver',
    assetPath: '/assets/aistudio/certificate_akash.r_2025__n_a_s_a__space__apps__challenge_08280b8a.jpeg',
    previewImage: '/assets/aistudio/certificate_akash.r_2025__n_a_s_a__space__apps__challenge_08280b8a.jpeg',
    assetType: 'image',
    description: 'Awarded for outstanding participation and efforts to address challenges faced on Earth and in space with computational weather prediction modeling.',
    skills: ['Space Science', 'Predictive Modeling', 'Python', 'Atmospheric Data']
  },
  {
    id: 'samsung-solve-for-tomorrow',
    title: 'Samsung Solve for Tomorrow 2026',
    issuer: 'Samsung (Enabling People - Education for Future Generations)',
    date: '2026',
    category: 'Hackathons',
    credentialId: 'National Participant',
    assetPath: '/assets/aistudio/WhatsApp_Image_2026-10-31_at_12.19.43_PM_5fe17835.jpeg',
    previewImage: '/assets/aistudio/WhatsApp_Image_2026-10-31_at_12.19.43_PM_5fe17835.jpeg',
    assetType: 'image',
    description: 'Presented in recognition of valuable contribution to Samsung Solve for Tomorrow 2026, celebrating commitment to applying Design Thinking and sharing innovative ideas for a better tomorrow.',
    skills: ['Design Thinking', 'Social Innovation', 'System Prototyping', 'Ideation']
  },
  {
    id: 'kpr-hackzilla',
    title: 'Hackzilla 24-Hour Hackathon — IEEE ComSoc',
    issuer: 'IEEE ComSoc & KPR Institute of Engineering and Technology',
    date: 'September 12–13, 2025',
    category: 'Hackathons',
    credentialId: 'Certificate No: IEEE/SLC/2025/126A',
    assetPath: '/assets/aistudio/WhatsApp_Image_2026-10-31_at_12.54.18_PM_65565e5f.jpeg',
    previewImage: '/assets/aistudio/WhatsApp_Image_2026-10-31_at_12.54.18_PM_65565e5f.jpeg',
    assetType: 'image',
    description: 'Participated in Hackzilla, a 24-Hour continuous Hackathon conducted as part of the IEEE ComSoc Student Leadership Conference at KPR Institute of Engineering and Technology.',
    skills: ['24-Hour Hackathon', 'Rapid Prototyping', 'IEEE ComSoc', 'Team Sprint']
  },
  {
    id: 'v-medithon',
    title: 'V-Medithon 3.0 Healthcare Hackathon',
    issuer: 'School of CSE, VIT Chennai (SCOPE)',
    date: 'September 15–16, 2026',
    category: 'Hackathons',
    credentialId: 'Participant ID: P-0005 | Team Electo tech',
    assetPath: '/assets/aistudio/V_MEDITHON_04075a8c.pdf',
    previewImage: '/assets/aistudio/v_medithon_preview.png',
    assetType: 'pdf',
    description: '24-hour national hackathon at MG Auditorium, VIT Chennai with Team Electo tech, engineering healthcare solutions bridging embedded hardware and software.',
    skills: ['Healthcare IoT', 'Hardware Prototyping', 'Embedded Sensors', 'Team Leadership']
  },
  {
    id: 'hackvega-participation',
    title: 'HackVega 2.0 National Hackathon',
    issuer: 'Careernet / MyCareernet',
    date: '2026',
    category: 'Hackathons',
    credentialId: 'Top 47,000+ Cohort',
    assetPath: '/assets/aistudio/Hackvaga_2.0_4e3966bd.jpg',
    previewImage: '/assets/aistudio/Hackvaga_2.0_4e3966bd.jpg',
    assetType: 'image',
    description: 'Participated in nationwide HackVega 2.0 engineering hackathon competing against 47,000+ engineering students from 2026-2029 cohorts in algorithmic problem solving.',
    skills: ['Algorithmic Thinking', 'Full-Stack Rapid Prototyping', 'System Design']
  },
  {
    id: 'ai-ml-iot-robotics',
    title: 'AI, Machine Learning, and IoT in Robotics',
    issuer: 'Dr. N.G.P. Institute of Technology & Robomiracle (AIM / NITI Aayog)',
    date: 'August 10–11, 2026',
    category: 'Robotics & Hardware',
    credentialId: 'Reg: 710724106003',
    assetPath: '/assets/aistudio/AI__MEACHIN_LEARNING__720bffe4.jpeg',
    previewImage: '/assets/aistudio/AI__MEACHIN_LEARNING__720bffe4.jpeg',
    assetType: 'image',
    description: 'Comprehensive two-day, one-credit course covering artificial intelligence, machine learning, and IoT hardware integration in autonomous robotic platforms.',
    skills: ['Robotics', 'Machine Learning', 'IoT Integration', 'Edge Computing']
  },
  {
    id: 'drone-technologies-vei',
    title: 'Drone Technologies Hands-on Training',
    issuer: 'VEI Technologies Pvt. Ltd. & Dr. N.G.P. Institute of Technology',
    date: 'July 24–25, 2026',
    category: 'Robotics & Hardware',
    credentialId: 'Corporate Id: 61515598827ee1632720280',
    assetPath: '/assets/aistudio/VEI_TECHNOLOGIES_00f26dec.jpeg',
    previewImage: '/assets/aistudio/VEI_TECHNOLOGIES_00f26dec.jpeg',
    assetType: 'image',
    description: 'Two-day hands-on training organized by the Department of ECE at Dr. N.G.P. iTech covering UAV aerodynamics, flight controllers, telemetry, and avionics assembly.',
    skills: ['UAV Avionics', 'Drone Assembly', 'Flight Control', 'Telemetry']
  },
  {
    id: 'kit-code-craft',
    title: 'Code Craft — UDHAYAM\'26 Technical Fest',
    issuer: 'KIT - Kalaignarkarunanidhi Institute of Technology',
    date: 'February 27–28, 2026',
    category: 'Academic & Systems',
    assetPath: '/assets/aistudio/WhatsApp_Image_2026-10-31_at_12.54.18_PM_7dd4dfd0.jpeg',
    previewImage: '/assets/aistudio/WhatsApp_Image_2026-10-31_at_12.54.18_PM_7dd4dfd0.jpeg',
    assetType: 'image',
    description: 'Certificate of Appreciation for active technical coding and algorithmic problem solving in Code Craft during UDHAYAM\'26 Intercollegiate Fest.',
    skills: ['Algorithmic Coding', 'Problem Solving', 'Data Structures', 'Competitive Coding']
  },
  {
    id: 'kit-paper-presentation',
    title: 'Paper Presentation — UDHAYAM\'26 Intercollegiate Fest',
    issuer: 'KIT - Kalaignarkarunanidhi Institute of Technology',
    date: 'February 27–28, 2026',
    category: 'Academic & Systems',
    assetPath: '/assets/aistudio/KIT_PAPER_PRESENTATIONS__649a8c68.jpeg',
    previewImage: '/assets/aistudio/KIT_PAPER_PRESENTATIONS__649a8c68.jpeg',
    assetType: 'image',
    description: 'Certificate of Appreciation for presenting research and engineering work in the Paper Presentation event at UDHAYAM\'26.',
    skills: ['Research Presentation', 'Technical Writing', 'Public Speaking', 'Electronics Engineering']
  },
  {
    id: 'sports-kho-kho-runner',
    title: 'Zone Level Games & Sports — Runner in Kho-Kho',
    issuer: 'School Education Department, Government of Tamil Nadu',
    date: '2022–2023',
    category: 'Academic & Systems',
    credentialId: 'Tirupur South Zone · Runner',
    assetPath: '/assets/aistudio/SPORT_fc99bfeb.jpeg',
    previewImage: '/assets/aistudio/SPORT_fc99bfeb.jpeg',
    assetType: 'image',
    description: 'Awarded Certificate of Merit as Runner in the Under-17 Kho-Kho tournament in Zone Level Bharathiyar Day / Republic Day Games representing Vikas Vidyalaya MHSS.',
    skills: ['Athletic Endurance', 'Team Sports', 'Strategy', 'Agility']
  },
  {
    id: 'dca-diploma',
    title: 'Diploma in Computer Application (DCA) — Grade A',
    issuer: 'CSC Computer Software College (ISO 9001:2015)',
    date: 'September 24, 2024',
    category: 'Academic & Systems',
    credentialId: 'TPR2502',
    assetPath: '/assets/aistudio/DCA_c8b131ed.jpeg',
    previewImage: '/assets/aistudio/DCA_c8b131ed.jpeg',
    assetType: 'image',
    description: 'Completed 6-month intensive diploma program with Grade A (Excellent). Coursework covered C Language, OOP in C++, MS-Windows, MS-Office, and Internet systems.',
    skills: ['C Programming', 'C++ OOP', 'Database Systems', 'Systems Administration']
  },
  {
    id: 'mern-internship',
    title: 'MERN Full-Stack Developer Internship',
    issuer: 'Apex I Sys, Coimbatore',
    date: 'May 16–30, 2026',
    category: 'Academic & Systems',
    credentialId: 'Cert Date: 29.06.2026',
    assetPath: '/assets/aistudio/Screenshot_2026-07-04_093329_2eeb1429.png',
    previewImage: '/assets/aistudio/Screenshot_2026-07-04_093329_2eeb1429.png',
    assetType: 'image',
    description: 'Successfully completed intensive MERN Full-Stack Developer internship covering React component architecture, Node.js/Express REST APIs, and MongoDB schemas.',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs']
  },
  {
    id: 'ece-technoblast-appreciation',
    title: 'Certificate of Appreciation — Technoblast ECE Coordinator',
    issuer: 'Dr. N.G.P. Institute of Technology',
    date: 'Academic Year 2025–2026',
    category: 'Academic & Systems',
    assetPath: '/assets/aistudio/co_ordinater_40c4e3cc.jpeg',
    previewImage: '/assets/aistudio/co_ordinater_40c4e3cc.jpeg',
    assetType: 'image',
    description: 'Awarded for active, enthusiastic involvement and valuable contribution in the departmental activities and event coordination of the ECE Association (Technoblast).',
    skills: ['Leadership', 'Event Coordination', 'Electronics Association', 'Symposium Management']
  },
  {
    id: 'drone-tech-vcet',
    title: 'Drone Technology Workshop',
    issuer: 'Velalar College of Engineering and Technology (VCET)',
    date: 'May 7, 2025',
    category: 'Robotics & Hardware',
    assetPath: '/assets/aistudio/DRONE_TECHNOLOGY_df3678c7.jpeg',
    previewImage: '/assets/aistudio/DRONE_TECHNOLOGY_df3678c7.jpeg',
    assetType: 'image',
    description: 'Hands-on workshop on drone architectures, multi-rotor stabilization, electronic speed controllers, and remote command protocols.',
    skills: ['Multi-Rotor Systems', 'ESC Drivers', 'Radio Frequencies', 'Hardware Integration']
  },
  {
    id: 'embedded-robotics-triox',
    title: 'Embedded Based Robotics Design',
    issuer: 'TrioX Technology & Dr. N.G.P. Center for Robotics',
    date: 'September 25–26, 2025',
    category: 'Robotics & Hardware',
    credentialId: 'Roll: 24UGECE00100',
    assetPath: '/assets/aistudio/2024-25-NGP-robotics-_certificate-AKASH_R_99703a21.pdf',
    previewImage: '/assets/aistudio/ngp_robotics_triox_preview.png',
    assetType: 'pdf',
    description: 'Two days hands-on training on embedded robotic circuits, motor driving H-bridges, sensor bus communication, and real-time firmware loops.',
    skills: ['Embedded Robotics', 'Microcontrollers', 'Sensor Interfacing', 'Motor Drives']
  },
  {
    id: 'robotics-atmel',
    title: 'Robotics with ATMEL Controller',
    issuer: 'Dr. N.G.P. Institute of Technology & e-Yantra IIT Bombay',
    date: 'September 19, 2025',
    category: 'Robotics & Hardware',
    assetPath: '/assets/aistudio/robotics_6296ec5e.pdf',
    previewImage: '/assets/aistudio/robotics_atmel_preview.png',
    assetType: 'pdf',
    description: 'One day hands-on refreshment training in robotics with ATMEL microcontrollers, organized by Center for Robotics in collaboration with IIT Bombay e-Yantra.',
    skills: ['ATMEL AVR', 'C Firmware', 'Register-level Coding', 'Hardware Timers']
  },
  {
    id: 'ibm-prompt-engineering',
    title: 'Prompt Engineering for Everyone',
    issuer: 'IBM Developer Skills Network / Cognitive Class',
    date: 'May 25, 2026',
    category: 'AI & Data',
    credentialId: 'aa36670d2fb2411db501ca09b243e55e',
    assetPath: '/assets/aistudio/IBMSkillsNetwork_AI0117EN_Certificate___Cognitive_Class_18ed53ea.pdf',
    previewImage: '/assets/aistudio/ibm_prompt_preview.png',
    assetType: 'pdf',
    description: 'Mastered foundational and advanced prompt engineering methodologies, structured outputs, few-shot prompting, and AI application prompting strategies.',
    skills: ['Prompt Engineering', 'Generative AI', 'LLM Chains', 'Context Optimization']
  },
  {
    id: 'msft-dream-destination',
    title: 'Design a Dream Destination using Microsoft Copilot',
    issuer: 'Microsoft Learn (Signed by Satya Nadella)',
    date: 'November 21, 2025',
    category: 'AI & Data',
    assetPath: '/assets/aistudio/Achievements_-_akashr-5641___Microsoft_Learn_ee2eaef5.pdf',
    previewImage: '/assets/aistudio/msft_copilot_preview.png',
    assetType: 'pdf',
    description: 'Earned achievement in generative AI workflows and multimodal synthesis using Microsoft Copilot technology.',
    skills: ['Microsoft Copilot', 'Generative AI', 'Creative Synthesis']
  },
  {
    id: 'msft-explore-genai',
    title: 'Explore Generative AI',
    issuer: 'Microsoft Learn (Signed by Satya Nadella)',
    date: 'November 21, 2025',
    category: 'AI & Data',
    assetPath: '/assets/aistudio/Achievements_-_akashr-5641___Microsoft_Learn1_2056b1f2.pdf',
    previewImage: '/assets/aistudio/msft_genai_preview.png',
    assetType: 'pdf',
    description: 'Successfully completed the core principles of Generative AI, transformer architectures, and ethical generative models.',
    skills: ['Generative AI', 'Deep Learning Concepts', 'AI Ethics']
  },
  {
    id: 'mathworks-simulink',
    title: 'Simulink Onramp — 100% Course Completion',
    issuer: 'MathWorks Training Services',
    date: 'July 7, 2026',
    category: 'Academic & Systems',
    assetPath: '/assets/aistudio/simulink_onramp_ccfe5634.pdf',
    previewImage: '/assets/aistudio/simulink_onramp_preview.png',
    assetType: 'pdf',
    description: '100% completion of self-paced simulation training covering graphical modeling, continuous and discrete signals, feedback systems, and dynamic analysis.',
    skills: ['Simulink', 'System Modeling', 'Control Systems', 'Dynamic Simulation']
  },
  {
    id: 'mathworks-stateflow',
    title: 'Stateflow Onramp — 77% Course Completion',
    issuer: 'MathWorks Training Services',
    date: 'July 5, 2026',
    category: 'Academic & Systems',
    assetPath: '/assets/aistudio/stateflow_Onramp_ee375bd7.pdf',
    previewImage: '/assets/aistudio/stateflow_onramp_preview.png',
    assetType: 'pdf',
    description: 'Completed comprehensive state machine modeling course covering finite state machines, state transitions, flowchart logic, and event-driven architectures.',
    skills: ['Stateflow', 'Finite State Machines', 'Control Logic', 'Event Handling']
  },
  {
    id: 'analog-communication',
    title: 'Analog Communication Certificate of Achievement',
    issuer: 'IEM-UEM Online Learning Platform',
    date: 'March 15, 2026',
    category: 'Academic & Systems',
    credentialId: 'qt3v9eskyz',
    assetPath: '/assets/aistudio/ANALOG_64b036c7.pdf',
    previewImage: '/assets/aistudio/analog_comm_preview.png',
    assetType: 'pdf',
    description: 'Mastery in amplitude modulation (AM), frequency modulation (FM), phase modulation, noise analysis, and RF transmission fundamentals.',
    skills: ['Analog Signals', 'AM/FM Modulation', 'RF Communication', 'Filter Design']
  },
  {
    id: 'autodesk-bim',
    title: 'Introduction to BIM for the AECO Industry',
    issuer: 'Autodesk',
    date: 'November 21, 2025',
    category: 'Academic & Systems',
    assetPath: '/assets/aistudio/introduction_to_bim_for_the_aeco_industry_b33c65ea.pdf',
    previewImage: '/assets/aistudio/autodesk_bim_preview.png',
    assetType: 'pdf',
    description: 'Completed 5-hour professional Autodesk course on Building Information Modeling (BIM) architectures and digital project lifecycle collaboration.',
    skills: ['BIM', 'Autodesk', 'Digital Twins', 'Architecture Technology']
  },
  {
    id: 'udemy-java',
    title: 'Java for Beginners — Learn all the Basics of Java',
    issuer: 'Udemy',
    date: 'October 18, 2025',
    category: 'Academic & Systems',
    credentialId: 'UC-ce67a261-f485-4eeb-b7f1-e516f90c5bd6',
    assetPath: '/assets/aistudio/JAVA_FOR_BIGENER_f2a50380.pdf',
    previewImage: '/assets/aistudio/java_beginner_preview.png',
    assetType: 'pdf',
    description: '5.5 hours intensive Java training on OOP encapsulation, inheritance, polymorphism, abstract classes, collections framework, and JVM memory.',
    skills: ['Java Core', 'OOP Concepts', 'Java Collections', 'Data Structures']
  }
];
