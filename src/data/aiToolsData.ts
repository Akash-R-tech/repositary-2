export interface ToolItem {
  name: string;
  category: 'AI Platform' | 'AI Coding' | 'UI/UX Design' | 'Engineering';
  subcategory: string;
  description: string;
}

export const AI_TOOLS_DATA: ToolItem[] = [
  // AI Platforms and Automation
  { name: 'n8n', category: 'AI Platform', subcategory: 'Workflow Automation', description: 'Node-based open automation platform for multi-agent workflows and API chaining' },
  { name: 'On Space AI', category: 'AI Platform', subcategory: 'Autonomous Workspaces', description: 'Collaborative AI workspace environment for automated technical tasks' },
  { name: 'Opal', category: 'AI Platform', subcategory: 'Intelligence Pipelines', description: 'AI orchestration framework for continuous data processing' },
  { name: 'Stitch', category: 'AI Platform', subcategory: 'ETL & Integration', description: 'Automated data pipeline connector linking AI apps with external databases' },
  { name: 'Vellum', category: 'AI Platform', subcategory: 'Prompt Engineering', description: 'Production-grade prompt management, evaluation, and latency benchmarking' },
  { name: 'Getsleek', category: 'AI Platform', subcategory: 'Automation Systems', description: 'Modern automation tool designed for fast workflow orchestration' },
  { name: 'Noclick', category: 'AI Platform', subcategory: 'No-Code AI Automation', description: 'Autonomous agent platform for direct execution of recurring workflows' },
  { name: 'SketricGen', category: 'AI Platform', subcategory: 'Generative Synthesis', description: 'Generative framework exploring automated schematic and code creation' },
  { name: 'Bud', category: 'AI Platform', subcategory: 'Edge AI Systems', description: 'Lightweight AI inference management framework for embedded architectures' },

  // AI Coding and Application Development
  { name: 'Antigravity', category: 'AI Coding', subcategory: 'Agentic Development', description: 'Autonomous multi-file software engineering agent architecture' },
  { name: 'Cursor', category: 'AI Coding', subcategory: 'AI Code Editor', description: 'AI-first code editor featuring multi-file edits, codebase indexing, and terminal assistance' },
  { name: 'VS Code', category: 'AI Coding', subcategory: 'Primary IDE', description: 'Extensible development platform powering full-stack, Python, and C/C++ projects' },
  { name: 'Windsurf', category: 'AI Coding', subcategory: 'Flow-State IDE', description: 'AI IDE with Cascade agent providing predictive contextual coding' },
  { name: 'Bolt', category: 'AI Coding', subcategory: 'Full-Stack Web Sandbox', description: 'In-browser development sandbox for generating and running full-stack React applications' },
  { name: 'Replit', category: 'AI Coding', subcategory: 'Cloud IDE & Hosting', description: 'Cloud-native collaborative development platform with instant deployment' },
  { name: 'Android Studio', category: 'AI Coding', subcategory: 'Mobile IDE', description: 'Official IDE for Android development with Gradle build pipelines and emulators' },
  { name: 'Arduino IDE', category: 'AI Coding', subcategory: 'Hardware Firmware', description: 'Embedded development environment for compiling and flashing C/C++ to microcontrollers' },
  { name: 'Firebase AI', category: 'AI Coding', subcategory: 'Serverless Intelligence', description: 'Cloud functions and Firestore extensions integrating GenAI capabilities' },
  { name: 'Lovable', category: 'AI Coding', subcategory: 'Full-Stack GenAI', description: 'Visual AI web application generator converting prompts into React & Vite code' },
  { name: 'Manus', category: 'AI Coding', subcategory: 'General Autonomous Agent', description: 'Multi-modal autonomous agent capable of executing complex multi-step technical tasks' },
  { name: 'Opencode', category: 'AI Coding', subcategory: 'Open Source Assistant', description: 'Open platform for AI-assisted code completion and refactoring' },
  { name: 'Compyle', category: 'AI Coding', subcategory: 'Build Automation', description: 'Smart code build and compilation utility' },
  { name: 'Code Flying', category: 'AI Coding', subcategory: 'Rapid Prototyping', description: 'Fast code scaffolding environment for web applications' },
  { name: 'Code X', category: 'AI Coding', subcategory: 'Model Engineering', description: 'Specialized coding model harness for technical code generation' },
  { name: 'Qoder', category: 'AI Coding', subcategory: 'Intelligent Scaffolding', description: 'Code assistant designed for modular application development' },
  { name: 'Kiro', category: 'AI Coding', subcategory: 'Dev Assistant', description: 'Interactive development assistant for debugging and syntax checking' },
  { name: 'Open Builder', category: 'AI Coding', subcategory: 'Visual Architecture', description: 'Web development builder leveraging modern component systems' },
  { name: 'Rocket AI', category: 'AI Coding', subcategory: 'App Generation', description: 'High-speed app scaffolding suite for modern web tools' },
  { name: 'Emargent AI', category: 'AI Coding', subcategory: 'Emergent Architecture', description: 'Code synthesis tool exploring emergent development workflows' },
  { name: 'Blink', category: 'AI Coding', subcategory: 'Instant Web Apps', description: 'Rapid micro-app creation and hosting tool' },
  { name: 'MetaGPT X', category: 'AI Coding', subcategory: 'Multi-Agent Dev Teams', description: 'Multi-agent role-playing software development framework' },
  { name: 'Orchids', category: 'AI Coding', subcategory: 'Workflow Automation', description: 'Developer productivity tool for orchestrating coding steps' },
  { name: 'Vibe Flow', category: 'AI Coding', subcategory: 'Creative Prototyping', description: 'Modern developer workflow tool focused on frictionless coding' },
  { name: 'Rork', category: 'AI Coding', subcategory: 'Code Utilities', description: 'Modular toolset for automated formatting and code auditing' },
  { name: 'Tile', category: 'AI Coding', subcategory: 'Component Layouts', description: 'Modular UI component layout generator' },
  { name: 'Mocha cloud', category: 'AI Coding', subcategory: 'Cloud Runtimes', description: 'Cloud runtime environment for fast execution and testing' },
  { name: 'Imagine', category: 'AI Coding', subcategory: 'Prompt-to-App', description: 'AI generation utility for turning product concepts into running apps' },
  { name: 'Webild', category: 'AI Coding', subcategory: 'Site Generator', description: 'Static and interactive site builder using AI templates' },
  { name: 'Bytez', category: 'AI Coding', subcategory: 'ML Model APIs', description: 'Developer API platform for integrating open-source machine learning models' },
  { name: 'Bubble', category: 'AI Coding', subcategory: 'Visual Programming', description: 'No-code web development framework for interactive database applications' },
  { name: 'Fimo', category: 'AI Coding', subcategory: 'Interface Prototyping', description: 'Interactive prototyping tool for application UI experiments' },
  { name: 'Pinspec', category: 'AI Coding', subcategory: 'Code Inspection', description: 'Static analysis and codebase inspection helper' },
  { name: 'MeDo', category: 'AI Coding', subcategory: 'Task Management', description: 'Developer task and milestone organization app' },
  { name: 'Solo', category: 'AI Coding', subcategory: 'Autonomous Dev', description: 'Single-developer assistant simplifying project setups' },
  { name: 'Soft', category: 'AI Coding', subcategory: 'Software Utilities', description: 'Clean developer toolkit for utility script management' },
  { name: 'Vibedream.ai', category: 'AI Coding', subcategory: 'Generative Canvas', description: 'Creative developer canvas for brainstorming and code synthesis' },
  { name: 'Surgent.dev', category: 'AI Coding', subcategory: 'Developer Operations', description: 'Developer platform streamlining deployment and continuous testing' },

  // UI/UX and Design
  { name: 'Figma', category: 'UI/UX Design', subcategory: 'Collaborative UI Design', description: 'Industry standard vector design and interactive prototyping software' },
  { name: 'Canva', category: 'UI/UX Design', subcategory: 'Visual Media & Graphics', description: 'Design platform for creating presentation decks, graphics, and visual assets' },
  { name: 'Uizard', category: 'UI/UX Design', subcategory: 'AI Wireframing', description: 'AI-powered wireframe and prototype generator from hand-drawn sketches' },
  { name: 'Relume', category: 'UI/UX Design', subcategory: 'Sitemap & Wireframes', description: 'AI website architecture builder generating structured component wireframes' },
  { name: 'Affinity', category: 'UI/UX Design', subcategory: 'Vector Graphics', description: 'Professional graphic design and illustration software suite' },
  { name: 'Artus AI', category: 'UI/UX Design', subcategory: 'Design Assistant', description: 'AI-assisted visual asset creation tool' },
  { name: 'Moda', category: 'UI/UX Design', subcategory: 'Layout Explorer', description: 'Visual layout design tool for web components' },
  { name: 'Wayframe', category: 'UI/UX Design', subcategory: 'UX Architecture', description: 'User flow mapping and low-fidelity wireframing suite' },
  { name: 'Clover', category: 'UI/UX Design', subcategory: 'Visual Notes & Moodboards', description: 'Digital canvas blending notes, visual moodboards, and design specs' },
  { name: 'Wonder', category: 'UI/UX Design', subcategory: 'Creative Synthesis', description: 'Visual concept generator exploring design styles' },
  { name: 'Draftly', category: 'UI/UX Design', subcategory: 'Rapid Wireframing', description: 'Clean sketching tool for quick user interface proposals' },

  // Engineering & Simulation
  { name: 'MATLAB', category: 'Engineering', subcategory: 'Numerical Simulation', description: 'High-performance technical computing language for matrix algebra and modeling' },
  { name: 'Simulink', category: 'Engineering', subcategory: 'Model-Based Design', description: 'Block diagram environment for multi-domain simulation and Model-Based Design' },
  { name: 'Multisim', category: 'Engineering', subcategory: 'SPICE Circuit Analysis', description: 'Interactive schematic capture and SPICE simulation for electronic circuits' },
  { name: 'Fusion', category: 'Engineering', subcategory: 'Parametric CAD/CAM', description: 'Cloud 3D CAD, CAM, CAE, and PCB software for hardware robotics design' }
];
