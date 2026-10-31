export interface Project {
  id: string;
  title: string;
  category: 'AI' | 'Full-Stack' | 'Robotics' | 'Computer Vision' | 'IoT' | 'Embedded Systems';
  categoryLabel: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  keyFeatures: string[];
  systemHighlights: string[];
  status: 'Deployed' | 'Completed' | 'Research Prototype' | 'Academic Engineering';
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'live-agent',
    title: 'Live Agent',
    category: 'AI',
    categoryLabel: 'AI / Full-Stack Development',
    tagline: 'Real-time conversational intelligence with multi-modal voice & tutoring interaction',
    description: 'Live Agent is an AI-powered real-time conversational application designed to provide interactive communication, intelligent assistance, tutoring, and engaging user experiences.',
    longDescription: 'Live Agent explores the integration of AI capabilities into a modern web application, combining an interactive frontend with real-time AI communication. The application is designed to support conversational interaction and demonstrate the potential of real-time AI systems with low-latency streaming audio, multimodal comprehension, and dynamic state feedback.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Gemini Live API', 'Google GenAI SDK'],
    liveDemoUrl: 'https://live-agent-er18.vercel.app/',
    githubUrl: 'https://github.com/Akash-R-tech',
    keyFeatures: [
      'Bidirectional conversational AI with ultra-low latency response streaming',
      'Adaptive educational tutoring with interactive knowledge clarification',
      'Modern responsive interface with dynamic audio frequency visualizer',
      'Integrated Google GenAI Live SDK for real-time WebSocket communication'
    ],
    systemHighlights: [
      'Built for Google Hackathon project submission',
      'WebSocket stream orchestration with resilient reconnect fallbacks',
      'Tailwind CSS styled cybernetic audio visualizer'
    ],
    status: 'Deployed'
  },
  {
    id: 'jarvis-ai',
    title: 'Jarvis AI Virtual Assistant',
    category: 'AI',
    categoryLabel: 'AI / Automation',
    tagline: 'Task-oriented intelligent personal assistant system built for intuitive interaction',
    description: 'Jarvis is an AI virtual assistant project inspired by intelligent personal assistants, exploring natural interaction through assistant-style functionality and task automation.',
    longDescription: 'The project explores the interaction between users and AI systems through assistant-style functionality, intelligent processing, and task-oriented workflows. It represents my interest in building AI applications that can help users interact with technology more naturally and seamlessly.',
    technologies: ['Python', 'OpenAI', 'Automation', 'Voice Assistant'],
    githubUrl: 'https://github.com/Akash-R-tech',
    keyFeatures: [
      'Speech recognition and natural language intent parsing',
      'Automated desktop workflow triggers and system task handling',
      'Intelligent context retention across multi-turn queries',
      'Modular skill plugin architecture for custom integrations'
    ],
    systemHighlights: [
      'Zero synthetic dependencies; modular python event loops',
      'Audio capture pipeline optimized for ambient noise suppression',
      'Extensible command registry for productivity automation'
    ],
    status: 'Completed'
  },
  {
    id: 'pcb-assembly-robot',
    title: 'Autonomous Dual-Arm PCB Assembly Robot',
    category: 'Robotics',
    categoryLabel: 'Robotics / Automation',
    tagline: 'Multi-degree dual robotic arms for automated SMD component placement and precision soldering',
    description: 'This project focuses on developing an autonomous dual-arm robotic system for PCB assembly and soldering-related operations, integrating robotic motion, hardware control, and computer vision.',
    longDescription: 'The architecture uses two robotic arms to support different stages of PCB assembly. The system integrates robotic motion, hardware control, computer vision concepts, and software-based coordination. The project combines electronics, robotics, automation, and software engineering to explore intelligent PCB assembly.',
    technologies: ['Raspberry Pi', 'ESP8266', 'ROS 2', 'SG90 Servo Motors', 'OpenCV'],
    keyFeatures: [
      'Dual-arm coordinated inverse kinematics for pick-and-place and soldering tasks',
      'Distributed computing using Raspberry Pi 3B+ orchestrator and ESP8266 motor controllers',
      'ROS 2 node-based telemetry, action servers, and state monitoring',
      'Vision-assisted alignment for component footprint registration'
    ],
    systemHighlights: [
      'Custom 3D printed end-effectors with precision vacuum suction and iron mount',
      'Multi-bus I2C/PWM servo synchronization reducing jitter to under 1.2 degrees',
      'Real-world hands-on engineering developed at Dr. N.G.P. Center for Robotics'
    ],
    status: 'Research Prototype'
  },
  {
    id: 'ai-object-detection',
    title: 'AI Laboratory Equipment Detection',
    category: 'Computer Vision',
    categoryLabel: 'Computer Vision / Edge AI',
    tagline: 'Automated optical detection and categorization for lab instrumentation using YOLOv4-tiny',
    description: 'This project explores camera-based object detection for identifying laboratory equipment, combining image processing, AI inference, backend communication, and hardware integration.',
    longDescription: 'The system uses computer vision and object detection techniques to recognize objects and support automated monitoring in laboratory environments. It combines edge image processing, optimized neural inference, RESTful backend communication, and embedded Raspberry Pi integration.',
    technologies: ['Python', 'OpenCV', 'YOLO', 'Express.js', 'Raspberry Pi'],
    githubUrl: 'https://github.com/Akash-R-tech',
    keyFeatures: [
      'High-frame-rate edge inference using lightweight YOLOv4-tiny model weights',
      'Automated bounding-box generation and class confidence scoring',
      'Flask microservice streaming annotated video frames over local network',
      'Custom dataset collection covering oscilloscopes, multimeters, and function generators'
    ],
    systemHighlights: [
      'Inference optimization for ARM Cortex-A53 quad-core architecture',
      'Real-time OpenCV morphological filtering and ROI extraction',
      'Integrated alerting pipeline when critical instruments are misplaced'
    ],
    status: 'Completed'
  },
  {
    id: 'inventory-tracking-system',
    title: 'Smart Inventory Tracking & Alert System',
    category: 'IoT',
    categoryLabel: 'IoT / Computer Vision',
    tagline: 'Vision-augmented inventory management system with automated threshold alerts',
    description: 'An intelligent inventory monitoring system for laboratory equipment combining camera detection with software inventory management to maintain stock availability.',
    longDescription: 'This project focuses on developing an intelligent inventory monitoring system for laboratory equipment. The system combines a camera-based detection approach with software-based inventory management to help track laboratory items, providing visibility into equipment availability and supporting alert-based inventory monitoring.',
    technologies: ['Raspberry Pi', 'Python', 'OpenCV', 'React', 'MongoDB', 'IoT'],
    githubUrl: 'https://github.com/Akash-R-tech',
    keyFeatures: [
      'Automated optical stock scanning with visual shelf verification',
      'Threshold-based notification triggers via email and dashboard alerts',
      'Real-time equipment checkout/check-in ledger with timestamp logs',
      'Responsive web management dashboard for laboratory administrators'
    ],
    systemHighlights: [
      'Eliminates manual barcode scanning via overhead camera recognition',
      'MongoDB persistent store tracking equipment lifetime and audit trail',
      'Designed to prevent laboratory tool misplacement during practical classes'
    ],
    status: 'Completed'
  },
  {
    id: 'examease',
    title: 'ExamEase Examination Management System',
    category: 'Full-Stack',
    categoryLabel: 'Full-Stack Development',
    tagline: 'Comprehensive examination administration and student workflow mobile platform',
    description: 'ExamEase is an examination management application designed to support student-related workflows and examination administration with modern mobile frontends and relational databases.',
    longDescription: 'The project explores full-stack application development by combining a modern mobile frontend with backend services and a relational database. It demonstrates my interest in building practical software applications that support academic workflows such as hall-ticket issuance, seating layout allocations, and grade inquiries.',
    technologies: ['React Native', 'Spring Boot', 'MySQL', 'REST APIs', 'Java'],
    githubUrl: 'https://github.com/Akash-R-tech',
    keyFeatures: [
      'Student profile dashboard with real-time exam schedules and hall allocation',
      'Enterprise-grade Spring Boot REST API layer with JPA/Hibernate ORM',
      'Relational MySQL schema enforcing atomic transaction integrity',
      'Cross-platform mobile UI built with React Native for student convenience'
    ],
    systemHighlights: [
      'Role-based access controls for students, invigilators, and faculty admins',
      'Automated seat randomization algorithm eliminating exam clustering',
      'Production-style database indexes for high-concurrency exam day queries'
    ],
    status: 'Completed'
  },
  {
    id: 'lifeos-ai',
    title: 'LifeOS AI Student Platform',
    category: 'AI',
    categoryLabel: 'AI / Productivity',
    tagline: 'Personalized AI assistant organizing student schedules, learning paths, and career milestones',
    description: 'LifeOS AI is an AI-powered productivity and opportunity platform concept focused on supporting students in learning, productivity, and career development.',
    longDescription: 'The project explores the application of AI capabilities to organize information, improve productivity, and create useful digital experiences for engineering students. It reflects my interest in combining AI application development with real-world user needs, such as tracking hackathon deadlines and summarizing technical papers.',
    technologies: ['React', 'Gemini', 'Tailwind CSS', 'Node.js', 'Generative AI'],
    githubUrl: 'https://github.com/Akash-R-tech',
    keyFeatures: [
      'Curated AI assistant offering personalized study plans and deadline tracking',
      'Smart technical resume analyzer providing constructive engineering feedback',
      'Automated opportunity radar aggregating relevant hackathons and tech internships',
      'Clean glassmorphic productivity dashboard with milestone tracking'
    ],
    systemHighlights: [
      'Zero-clutter interface built with strict typographic focus',
      'Context-aware prompt templates for technical subject breakdown',
      'Exportable markdown study notes and scheduled reminder integration'
    ],
    status: 'Research Prototype'
  },
  {
    id: 'obstacle-avoiding-robot',
    title: 'Obstacle-Avoiding Autonomous Vehicle',
    category: 'Embedded Systems',
    categoryLabel: 'Embedded Systems / Robotics',
    tagline: 'Autonomous four-wheel rover featuring ultrasonic obstacle detection and servo path routing',
    description: 'An autonomous robotic vehicle designed to detect obstacles and navigate around them, introducing practical robotics concepts, sensor-based decision making, and motor control.',
    longDescription: 'Developed during early academic semesters, this project focuses on an autonomous robotic vehicle designed to detect obstacles and navigate around them. The project introduced me to practical robotics concepts, embedded system integration, sensor-based decision-making, and motor control. It represents one of my foundational engineering projects.',
    technologies: ['Arduino', 'ESP8266', 'Sensors', 'Robotics'],
    keyFeatures: [
      'Ultrasonic distance transducer scanning 180-degree forward arc on SG90 servo',
      'Differential drive steering algorithms for real-time collision prevention',
      'L298N H-bridge dual motor driver with PWM speed regulation',
      'Autonomous roaming state machine with dead-end recovery maneuvers'
    ],
    systemHighlights: [
      'Hardware-level interrupt handling ensuring instantaneous emergency stops',
      'Self-contained rechargeable Li-ion power distribution circuit',
      'Foundation for advanced dual-arm robotic systems and ROS 2 exploration'
    ],
    status: 'Completed'
  },
  {
    id: 'nasa-weather-prediction',
    title: 'NASA Space Apps Weather Prediction',
    category: 'AI',
    categoryLabel: 'AI / Data / Weather Analytics',
    tagline: 'Predictive weather analysis and computational meteorological modeling from satellite telemetry',
    description: 'This project focuses on weather prediction and weather-related data analysis, exploring computational techniques to investigate predictive atmospheric insights.',
    longDescription: 'Developed as part of the NASA Space Apps Challenge 2025 exploration where Akash R was recognized as a Galactic Problem Solver. The project explores the use of computational techniques to work with weather information and investigate predictive insights. Note: Developed as an independent hackathon submission; not officially affiliated with NASA.',
    technologies: ['Python', 'OpenCV', 'Data Analysis', 'Machine Learning'],
    githubUrl: 'https://github.com/Akash-R-tech/wather-pridication-NASA',
    keyFeatures: [
      'Meteorological time-series processing for atmospheric temperature and precipitation modeling',
      'Data preprocessing pipeline handling missing sensors and satellite noise',
      'Predictive regression modeling evaluating precipitation probability',
      'Visualized atmospheric charts and localized climate trend exploration'
    ],
    systemHighlights: [
      'Verified repository: github.com/Akash-R-tech/wather-pridication-NASA',
      'Awarded Galactic Problem Solver certification at NASA International Space Apps Challenge 2025',
      'Grounded in publicly accessible meteorological satellite datasets'
    ],
    status: 'Completed'
  }
];
