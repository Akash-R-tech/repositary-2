export interface SkillItem {
  name: string;
  category: string;
  proficiency: 'Advanced' | 'Proficient' | 'Working Knowledge';
  highlight: string;
  relatedProjects: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Foundational syntax, object-oriented paradigms, and systems-level algorithms',
    skills: [
      { name: 'Python', category: 'Language', proficiency: 'Advanced', highlight: 'Data modeling, OpenCV vision pipelines, AI integrations & backend scripts', relatedProjects: ['NASA Weather Prediction', 'AI Object Detection', 'Jarvis AI'] },
      { name: 'Java', category: 'Language', proficiency: 'Proficient', highlight: 'Object-oriented programming, Spring Boot microservices, enterprise architectures', relatedProjects: ['ExamEase'] },
      { name: 'JavaScript', category: 'Language', proficiency: 'Advanced', highlight: 'Modern ES6+, asynchronous async/await, full-stack event orchestration', relatedProjects: ['Live Agent', 'LifeOS AI', 'MERN Internship'] },
      { name: 'C', category: 'Language', proficiency: 'Proficient', highlight: 'Low-level memory management, pointers, and embedded microcontroller drivers', relatedProjects: ['Obstacle-Avoiding Vehicle', 'DCA Diploma'] },
      { name: 'C++', category: 'Language', proficiency: 'Proficient', highlight: 'OOP data structures, high-performance robotic kinematics, ROS 2 nodes', relatedProjects: ['PCB Assembly Robot', 'DCA Diploma'] }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Modern component-driven web and native mobile client architectures',
    skills: [
      { name: 'React', category: 'Frontend', proficiency: 'Advanced', highlight: 'Hooks, custom state orchestration, responsive component design & Vercel deployment', relatedProjects: ['Live Agent', 'Smart Inventory System', 'Personal Portfolio'] },
      { name: 'React Native', category: 'Frontend', proficiency: 'Proficient', highlight: 'Cross-platform mobile apps for Android, native device views, state handling', relatedProjects: ['ExamEase'] },
      { name: 'Tailwind CSS', category: 'Frontend', proficiency: 'Advanced', highlight: 'Utility-first typography, fluid layouts, custom themes & responsive design', relatedProjects: ['Live Agent', 'Portfolio'] },
      { name: 'HTML', category: 'Frontend', proficiency: 'Advanced', highlight: 'Semantic DOM architecture, accessibility (WCAG AA), SEO meta and structured data', relatedProjects: ['All Web Projects'] },
      { name: 'CSS', category: 'Frontend', proficiency: 'Advanced', highlight: 'Modern flexbox, CSS grid, glassmorphism filters, keyframe transitions', relatedProjects: ['All Web Projects'] },
      { name: 'Vite', category: 'Frontend', proficiency: 'Advanced', highlight: 'Lightning-fast ES module bundler, tree-shaking, production builds', relatedProjects: ['Live Agent', 'Portfolio'] }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Scalable server microservices, RESTful interfaces, and database persistence',
    skills: [
      { name: 'Node.js', category: 'Backend', proficiency: 'Proficient', highlight: 'Non-blocking I/O event loops, stream handling, REST APIs, full-stack backends', relatedProjects: ['MERN Internship', 'LifeOS AI'] },
      { name: 'Express.js', category: 'Backend', proficiency: 'Proficient', highlight: 'Modular routing, middleware chains, token validation, JSON payloads', relatedProjects: ['MERN Internship', 'Live Agent API'] },
      { name: 'Spring Boot', category: 'Backend', proficiency: 'Proficient', highlight: 'Java Spring MVC, JPA/Hibernate repository patterns, relational endpoints', relatedProjects: ['ExamEase'] },
      { name: 'REST APIs', category: 'Backend', proficiency: 'Advanced', highlight: 'Clean HTTP methods, status code semantics, pagination, error models', relatedProjects: ['ExamEase', 'Live Agent'] }
    ]
  },
  {
    id: 'database',
    title: 'Databases & Storage',
    description: 'Relational schemas and document-oriented databases for transactional data',
    skills: [
      { name: 'MongoDB', category: 'Database', proficiency: 'Proficient', highlight: 'NoSQL collections, document indexing, aggregation pipelines, MERN architecture', relatedProjects: ['MERN Internship', 'Smart Inventory'] },
      { name: 'MySQL', category: 'Database', proficiency: 'Proficient', highlight: 'Relational table design, foreign keys, ACID compliance, complex JOIN queries', relatedProjects: ['ExamEase', 'DCA Studies'] }
    ]
  },
  {
    id: 'ai-vision',
    title: 'AI, Generative AI & Computer Vision',
    description: 'Deep learning inference, real-time multimodal APIs, and image processing',
    skills: [
      { name: 'Gemini', category: 'AI', proficiency: 'Advanced', highlight: 'Google GenAI SDK, Gemini Live real-time audio streams, function calling', relatedProjects: ['Live Agent', 'LifeOS AI'] },
      { name: 'OpenCV', category: 'Computer Vision', proficiency: 'Proficient', highlight: 'Image morphology, edge detection, video stream capture, bounding-box tracking', relatedProjects: ['AI Object Detection', 'Inventory System'] },
      { name: 'YOLO', category: 'Computer Vision', proficiency: 'Proficient', highlight: 'YOLOv4-tiny neural networks, real-time multi-class object classification', relatedProjects: ['AI Object Detection'] },
      { name: 'OpenAI', category: 'AI', proficiency: 'Proficient', highlight: 'Prompt engineering, structured outputs, multi-agent assistant flows', relatedProjects: ['Jarvis AI'] }
    ]
  },
  {
    id: 'iot-robotics',
    title: 'IoT, Robotics & Embedded Systems',
    description: 'Hardware-software integration, microcontroller programming, and kinematics',
    skills: [
      { name: 'Raspberry Pi', category: 'Hardware', proficiency: 'Proficient', highlight: 'Single-board Linux computing, GPIO interfacing, vision server host', relatedProjects: ['PCB Assembly Robot', 'AI Object Detection', 'Inventory System'] },
      { name: 'Arduino', category: 'Hardware', proficiency: 'Advanced', highlight: 'Microcontroller firmware, analog/digital sensors, PWM actuator control', relatedProjects: ['Obstacle-Avoiding Vehicle', 'Drone Workshop'] },
      { name: 'ESP8266', category: 'Hardware', proficiency: 'Proficient', highlight: 'Wi-Fi enabled microcontrollers, HTTP telemetry, distributed motor control', relatedProjects: ['PCB Assembly Robot', 'Obstacle Vehicle'] },
      { name: 'ROS 2', category: 'Robotics', proficiency: 'Proficient', highlight: 'Robot Operating System, node publish-subscribe topics, kinematics coordination', relatedProjects: ['PCB Assembly Robot'] }
    ]
  },
  {
    id: 'engineering-tools',
    title: 'Engineering Simulation & Dev Tools',
    description: 'Electronics simulation, circuit CAD, 3D modeling, and version control',
    skills: [
      { name: 'MATLAB', category: 'Engineering', proficiency: 'Proficient', highlight: 'Mathematical computing, numerical analysis, algorithm prototyping', relatedProjects: ['Academic ECE Coursework'] },
      { name: 'Simulink', category: 'Engineering', proficiency: 'Proficient', highlight: 'Model-based design, dynamic system modeling (MathWorks Certified)', relatedProjects: ['Simulink Onramp'] },
      { name: 'Multisim', category: 'Engineering', proficiency: 'Proficient', highlight: 'Analog circuit schematic capture, SPICE simulation, frequency response', relatedProjects: ['Analog Communication'] },
      { name: 'Fusion', category: 'Engineering', proficiency: 'Proficient', highlight: 'Parametric 3D CAD modeling, robot chassis design, assembly verification', relatedProjects: ['PCB Assembly Robot Chassis'] },
      { name: 'Git', category: 'Tool', proficiency: 'Advanced', highlight: 'Branching, commit histories, merge conflict resolution, CI/CD pipelines', relatedProjects: ['All Repositories'] },
      { name: 'GitHub', category: 'Tool', proficiency: 'Advanced', highlight: 'Public open-source repository hosting, release versioning, team collaboration', relatedProjects: ['github.com/Akash-R-tech'] },
      { name: 'VS Code', category: 'Tool', proficiency: 'Advanced', highlight: 'Primary development environment, multi-language tooling, extension configs', relatedProjects: ['All Projects'] }
    ]
  }
];
