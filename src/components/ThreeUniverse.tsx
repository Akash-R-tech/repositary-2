import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RenderTechLogo } from '../data/techLogos';
import { PROJECTS_DATA, Project } from '../data/projectsData';
import { ExternalLink, Github, ChevronRight, Sparkles, Compass, Eye, Box, Cpu, Bot, Scan, Activity, Terminal } from 'lucide-react';

export interface UniverseNode {
  id: string;
  name: string;
  color: string;
  hex: number;
  emissiveHex: number;
  categoryKey: string;
  position: [number, number, number];
  technologies: string[];
  description: string;
  shapeType: 'torus-cluster' | 'icosahedron-core' | 'silicon-chip' | 'gimbal-gyro' | 'vision-pyramid' | 'harmonic-lattice';
  model3DTitle: string;
  model3DDetails: string;
}

export const UNIVERSE_NODES: UniverseNode[] = [
  {
    id: 'software-dev',
    name: 'Software Development',
    color: '#8b5cf6',
    hex: 0x8b5cf6,
    emissiveHex: 0x6d28d9,
    categoryKey: 'Full-Stack',
    position: [3.3, 0.8, 0],
    technologies: ['React', 'Node.js', 'Express.js', 'Spring Boot', 'MySQL', 'MongoDB'],
    description: 'Modern full-stack web applications, REST microservices, relational and NoSQL databases, and responsive mobile systems.',
    shapeType: 'torus-cluster',
    model3DTitle: 'Cyber Torus Knot & Data Ring',
    model3DDetails: 'Segmented multi-twist cyber torus knot interlaced with orbital hexagonal code-packet frames.'
  },
  {
    id: 'ai-genai',
    name: 'AI & Generative AI',
    color: '#c084fc',
    hex: 0xc084fc,
    emissiveHex: 0x9333ea,
    categoryKey: 'AI',
    position: [1.8, 2.6, 1.4],
    technologies: ['Gemini', 'OpenAI', 'Python', 'Prompt Engineering'],
    description: 'Bidirectional streaming audio assistants, real-time Gemini Live WebSocket apps, and predictive machine learning models.',
    shapeType: 'icosahedron-core',
    model3DTitle: 'Neural Icosahedron Synaptic Core',
    model3DDetails: 'Dual-core neural icosahedron with glowing octahedron crystal and pulsating synaptic nodes.'
  },
  {
    id: 'iot-embedded',
    name: 'IoT & Embedded Systems',
    color: '#06b6d4',
    hex: 0x06b6d4,
    emissiveHex: 0x0891b2,
    categoryKey: 'IoT',
    position: [-2.4, 2.0, 1.8],
    technologies: ['Raspberry Pi', 'ESP8266', 'Arduino', 'Sensors'],
    description: 'Hardware telemetry, Wi-Fi microcontroller sensors, automated inventory alerting, and low-latency edge computing.',
    shapeType: 'silicon-chip',
    model3DTitle: 'Silicon Microprocessor Die & Antenna',
    model3DDetails: 'Faceted microchip silicon carrier with gold conductive pin leads and RF telemetry antenna.'
  },
  {
    id: 'robotics',
    name: 'Robotics & Automation',
    color: '#ec4899',
    hex: 0xec4899,
    emissiveHex: 0xdb2777,
    categoryKey: 'Robotics',
    position: [-3.1, -1.0, 0.8],
    technologies: ['ROS 2', 'Raspberry Pi', 'ESP8266', 'SG90 Servo Motors'],
    description: 'Autonomous dual-arm PCB soldering and assembly systems, differential rover navigation, and inverse kinematics.',
    shapeType: 'gimbal-gyro',
    model3DTitle: 'Articulated Dual Gimbal Gyroscope',
    model3DDetails: 'Counter-rotating concentric metallic gimbal rings enclosing a central robotic actuator gear.'
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision',
    color: '#10b981',
    hex: 0x10b981,
    emissiveHex: 0x059669,
    categoryKey: 'Computer Vision',
    position: [-0.6, -2.8, -1.2],
    technologies: ['OpenCV', 'YOLO', 'Python', 'Raspberry Pi'],
    description: 'Edge-optimized YOLO object detection, laboratory equipment identification, and real-time bounding box video analysis.',
    shapeType: 'vision-pyramid',
    model3DTitle: 'Optical Sensor Frustum & Laser Scanner',
    model3DDetails: '4-sided optical vision sensor frustum with concentric aperture lens and sweeping 360° laser sweep.'
  },
  {
    id: 'engineering-sim',
    name: 'Engineering & Simulation',
    color: '#f59e0b',
    hex: 0xf59e0b,
    emissiveHex: 0xd97706,
    categoryKey: 'Engineering',
    position: [2.5, -1.8, -1.6],
    technologies: ['MATLAB', 'Simulink', 'Multisim', 'Fusion'],
    description: 'Analog and digital signal modulation, MathWorks dynamic block modeling, SPICE simulation, and 3D CAD chassis design.',
    shapeType: 'harmonic-lattice',
    model3DTitle: 'Resonant Octahedral Wave Lattice',
    model3DDetails: 'Crystalline octahedral resonator encompassed by harmonic sinusoidal oscillation wave rings.'
  }
];

interface ThreeUniverseProps {
  onSelectProject?: (project: Project) => void;
}

export const ThreeUniverse: React.FC<ThreeUniverseProps> = ({ onSelectProject }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('ai-genai');
  const [activeCategory, setActiveCategory] = useState<UniverseNode>(UNIVERSE_NODES[1]);
  const [matchingProjects, setMatchingProjects] = useState<Project[]>([]);
  const [isRotating, setIsRotating] = useState(true);

  // Update matching projects when selected node changes
  useEffect(() => {
    const node = UNIVERSE_NODES.find(n => n.id === selectedNodeId) || UNIVERSE_NODES[0];
    setActiveCategory(node);
    const matched = PROJECTS_DATA.filter(
      p => p.category === node.categoryKey || p.technologies.some(t => node.technologies.includes(t))
    );
    setMatchingProjects(matched.slice(0, 3));
  }, [selectedNodeId]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050508, 0.038);

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 550;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 9.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Planetary Group
    const universeGroup = new THREE.Group();
    scene.add(universeGroup);

    // Central Cosmic Cyber Sphere
    const planetGeo = new THREE.SphereGeometry(1.5, isSoftwareGl ? 20 : 36, isSoftwareGl ? 20 : 36);
    const planetMat = new THREE.MeshStandardMaterial({
      color: 0x0a071c,
      roughness: 0.35,
      metalness: 0.85,
      wireframe: false
    });
    const planet = new THREE.Mesh(planetGeo, planetMat);
    universeGroup.add(planet);

    // Planet atmosphere glow wireframe
    const atmosphereGeo = new THREE.SphereGeometry(1.58, 24, 24);
    const atmosphereMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    const atmosphere = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    universeGroup.add(atmosphere);

    // Central Dynamic Category Spotlight Showcase
    // This central object transforms to highlight the active category in 3D
    const centralShowcaseGroup = new THREE.Group();
    universeGroup.add(centralShowcaseGroup);

    // Orbit Guide Rings
    const orbitRingGroup = new THREE.Group();
    universeGroup.add(orbitRingGroup);

    const orbitMat = new THREE.LineBasicMaterial({
      color: 0x4c2882,
      transparent: true,
      opacity: 0.45
    });

    [3.2, 3.8, 4.4].forEach(radius => {
      const ringPoints: THREE.Vector3[] = [];
      const segments = 64;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        ringPoints.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
      }
      const ringGeo = new THREE.BufferGeometry().setFromPoints(ringPoints);
      const orbitLine = new THREE.Line(ringGeo, orbitMat);
      orbitRingGroup.add(orbitLine);
    });

    // Node Containers and Animation Callbacks
    interface NodeObjectEntry {
      subGroup: THREE.Group;
      node: UniverseNode;
      clickableTarget: THREE.Object3D;
      halo: THREE.Mesh;
      animator: (elapsed: number, isSelected: boolean) => void;
      dispose: () => void;
    }

    const nodeEntries: NodeObjectEntry[] = [];
    const nodeGroup = new THREE.Group();
    universeGroup.add(nodeGroup);

    // BUILD DISTINCT 3D GEOMETRY FOR EACH CATEGORY
    UNIVERSE_NODES.forEach((node) => {
      const nodeSubGroup = new THREE.Group();
      nodeSubGroup.position.set(...node.position);

      const disposables: (THREE.BufferGeometry | THREE.Material)[] = [];
      let clickable: THREE.Object3D;
      let animator: (elapsed: number, isSelected: boolean) => void;

      // 1. SOFTWARE DEV / FULL-STACK: Cyber Torus Knot + Hex Data Frame
      if (node.shapeType === 'torus-cluster') {
        const knotGeo = new THREE.TorusKnotGeometry(0.25, 0.07, 48, 12, 2, 3);
        const knotMat = new THREE.MeshStandardMaterial({
          color: node.hex,
          emissive: node.emissiveHex,
          emissiveIntensity: 0.75,
          metalness: 0.85,
          roughness: 0.2
        });
        const knotMesh = new THREE.Mesh(knotGeo, knotMat);
        knotMesh.userData = { nodeId: node.id };
        nodeSubGroup.add(knotMesh);

        // Hexagonal wireframe code frame
        const hexGeo = new THREE.RingGeometry(0.42, 0.46, 6);
        const hexMat = new THREE.MeshBasicMaterial({
          color: 0xc084fc,
          wireframe: true,
          side: THREE.DoubleSide
        });
        const hexMesh = new THREE.Mesh(hexGeo, hexMat);
        nodeSubGroup.add(hexMesh);

        // Orbiting small data cube
        const cubeGeo = new THREE.BoxGeometry(0.08, 0.08, 0.08);
        const cubeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const dataCube = new THREE.Mesh(cubeGeo, cubeMat);
        nodeSubGroup.add(dataCube);

        disposables.push(knotGeo, knotMat, hexGeo, hexMat, cubeGeo, cubeMat);
        clickable = knotMesh;

        animator = (elapsed) => {
          knotMesh.rotation.x = elapsed * 1.2;
          knotMesh.rotation.y = elapsed * 0.9;
          hexMesh.rotation.z = -elapsed * 0.7;
          dataCube.position.set(
            Math.cos(elapsed * 2) * 0.48,
            Math.sin(elapsed * 2) * 0.48,
            Math.sin(elapsed * 3) * 0.2
          );
        };
      }
      // 2. AI & GENERATIVE AI: Neural Icosahedron + Synaptic Core
      else if (node.shapeType === 'icosahedron-core') {
        const icoGeo = new THREE.IcosahedronGeometry(0.3, 1);
        const icoMat = new THREE.MeshStandardMaterial({
          color: node.hex,
          emissive: node.emissiveHex,
          emissiveIntensity: 0.8,
          wireframe: true,
          metalness: 0.5,
          roughness: 0.2
        });
        const icoMesh = new THREE.Mesh(icoGeo, icoMat);
        icoMesh.userData = { nodeId: node.id };
        nodeSubGroup.add(icoMesh);

        // Inner glowing crystal
        const innerGeo = new THREE.OctahedronGeometry(0.18, 0);
        const innerMat = new THREE.MeshStandardMaterial({
          color: 0xf5d0fe,
          emissive: 0xd946ef,
          emissiveIntensity: 1.2,
          roughness: 0.1
        });
        const innerMesh = new THREE.Mesh(innerGeo, innerMat);
        nodeSubGroup.add(innerMesh);

        disposables.push(icoGeo, icoMat, innerGeo, innerMat);
        clickable = icoMesh;

        animator = (elapsed, isSelected) => {
          icoMesh.rotation.y = elapsed * 1.1;
          icoMesh.rotation.z = elapsed * 0.6;
          innerMesh.rotation.y = -elapsed * 1.5;
          innerMesh.rotation.x = elapsed * 0.8;
          const pulse = 1 + Math.sin(elapsed * 4) * (isSelected ? 0.12 : 0.05);
          innerMesh.scale.set(pulse, pulse, pulse);
        };
      }
      // 3. IOT & EMBEDDED: Silicon Microchip Die + Antenna + Gold Pins
      else if (node.shapeType === 'silicon-chip') {
        const chipGeo = new THREE.BoxGeometry(0.42, 0.12, 0.42);
        const chipMat = new THREE.MeshStandardMaterial({
          color: 0x0f172a,
          emissive: node.emissiveHex,
          emissiveIntensity: 0.4,
          roughness: 0.3,
          metalness: 0.85
        });
        const chipMesh = new THREE.Mesh(chipGeo, chipMat);
        chipMesh.userData = { nodeId: node.id };
        nodeSubGroup.add(chipMesh);

        // Top Silicon core badge
        const coreDieGeo = new THREE.BoxGeometry(0.24, 0.04, 0.24);
        const coreDieMat = new THREE.MeshBasicMaterial({ color: node.hex });
        const coreDieMesh = new THREE.Mesh(coreDieGeo, coreDieMat);
        coreDieMesh.position.y = 0.07;
        chipMesh.add(coreDieMesh);

        // Antenna
        const antGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.4, 8);
        const antMat = new THREE.MeshBasicMaterial({ color: 0x67e8f9 });
        const antMesh = new THREE.Mesh(antGeo, antMat);
        antMesh.position.set(0.16, 0.25, 0.16);
        chipMesh.add(antMesh);

        // Telemetry LED bead
        const ledGeo = new THREE.SphereGeometry(0.04, 8, 8);
        const ledMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee });
        const ledMesh = new THREE.Mesh(ledGeo, ledMat);
        ledMesh.position.set(0.16, 0.45, 0.16);
        chipMesh.add(ledMesh);

        disposables.push(chipGeo, chipMat, coreDieGeo, coreDieMat, antGeo, antMat, ledGeo, ledMat);
        clickable = chipMesh;

        animator = (elapsed) => {
          chipMesh.rotation.y = elapsed * 0.8;
          chipMesh.rotation.x = Math.sin(elapsed) * 0.15;
          const ledPulse = Math.sin(elapsed * 6) > 0 ? 1 : 0.2;
          ledMesh.scale.set(ledPulse, ledPulse, ledPulse);
        };
      }
      // 4. ROBOTICS & AUTOMATION: Articulated Dual Gimbal Rings + Servo Actuator
      else if (node.shapeType === 'gimbal-gyro') {
        const gimbalGroup = new THREE.Group();
        nodeSubGroup.add(gimbalGroup);

        // Outer gimbal ring
        const outerRingGeo = new THREE.TorusGeometry(0.38, 0.03, 8, 32);
        const ringMat1 = new THREE.MeshStandardMaterial({
          color: node.hex,
          emissive: node.emissiveHex,
          emissiveIntensity: 0.8,
          metalness: 0.9,
          roughness: 0.15
        });
        const outerRing = new THREE.Mesh(outerRingGeo, ringMat1);
        outerRing.userData = { nodeId: node.id };
        gimbalGroup.add(outerRing);

        // Inner gimbal ring (tilted)
        const innerRingGeo = new THREE.TorusGeometry(0.28, 0.024, 8, 32);
        const ringMat2 = new THREE.MeshStandardMaterial({
          color: 0xf43f5e,
          emissive: 0xbe123c,
          emissiveIntensity: 0.7,
          metalness: 0.9,
          roughness: 0.15
        });
        const innerRing = new THREE.Mesh(innerRingGeo, ringMat2);
        innerRing.rotation.x = Math.PI / 2;
        gimbalGroup.add(innerRing);

        // Center robotic actuator core
        const actGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.15, 8);
        const actMat = new THREE.MeshStandardMaterial({
          color: 0x334155,
          emissive: node.emissiveHex,
          emissiveIntensity: 0.5,
          metalness: 0.8
        });
        const actMesh = new THREE.Mesh(actGeo, actMat);
        gimbalGroup.add(actMesh);

        disposables.push(outerRingGeo, ringMat1, innerRingGeo, ringMat2, actGeo, actMat);
        clickable = outerRing;

        animator = (elapsed) => {
          outerRing.rotation.y = elapsed * 1.4;
          innerRing.rotation.x = -elapsed * 1.8;
          actMesh.rotation.z = elapsed * 0.9;
        };
      }
      // 5. COMPUTER VISION: Optical Vision Frustum + Laser Scanner
      else if (node.shapeType === 'vision-pyramid') {
        const cvGroup = new THREE.Group();
        nodeSubGroup.add(cvGroup);

        // 4-sided vision frustum
        const frustumGeo = new THREE.ConeGeometry(0.34, 0.5, 4, 1, true);
        const frustumMat = new THREE.MeshBasicMaterial({
          color: node.hex,
          wireframe: true,
          side: THREE.DoubleSide
        });
        const frustumMesh = new THREE.Mesh(frustumGeo, frustumMat);
        frustumMesh.rotation.x = Math.PI / 2;
        frustumMesh.userData = { nodeId: node.id };
        cvGroup.add(frustumMesh);

        // Concentric lens ring
        const lensGeo = new THREE.TorusGeometry(0.22, 0.025, 8, 24);
        const lensMat = new THREE.MeshStandardMaterial({
          color: 0x34d399,
          emissive: 0x059669,
          emissiveIntensity: 0.9,
          roughness: 0.2
        });
        const lensMesh = new THREE.Mesh(lensGeo, lensMat);
        cvGroup.add(lensMesh);

        // Sweeping radar scan fan
        const radarGeo = new THREE.RingGeometry(0.02, 0.35, 16, 1, 0, Math.PI / 2.5);
        const radarMat = new THREE.MeshBasicMaterial({
          color: 0x6ee7b7,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.65
        });
        const radarMesh = new THREE.Mesh(radarGeo, radarMat);
        cvGroup.add(radarMesh);

        disposables.push(frustumGeo, frustumMat, lensGeo, lensMat, radarGeo, radarMat);
        clickable = frustumMesh;

        animator = (elapsed) => {
          cvGroup.rotation.y = elapsed * 0.9;
          cvGroup.rotation.z = Math.sin(elapsed * 1.2) * 0.2;
          radarMesh.rotation.z = elapsed * 3.5;
        };
      }
      // 6. ENGINEERING & SIMULATION: Resonant Octahedral Wave Lattice
      else {
        const simGroup = new THREE.Group();
        nodeSubGroup.add(simGroup);

        const octGeo = new THREE.OctahedronGeometry(0.32, 0);
        const octMat = new THREE.MeshStandardMaterial({
          color: node.hex,
          emissive: node.emissiveHex,
          emissiveIntensity: 0.8,
          metalness: 0.6,
          roughness: 0.25
        });
        const octMesh = new THREE.Mesh(octGeo, octMat);
        octMesh.userData = { nodeId: node.id };
        simGroup.add(octMesh);

        // Dynamic Wave Ring
        const waveGeo = new THREE.TorusGeometry(0.44, 0.025, 8, 36);
        const waveMat = new THREE.MeshBasicMaterial({
          color: 0xfde047,
          wireframe: true
        });
        const waveMesh = new THREE.Mesh(waveGeo, waveMat);
        waveMesh.rotation.x = Math.PI / 3;
        simGroup.add(waveMesh);

        disposables.push(octGeo, octMat, waveGeo, waveMat);
        clickable = octMesh;

        animator = (elapsed) => {
          octMesh.rotation.y = elapsed * 1.0;
          octMesh.rotation.x = elapsed * 0.7;
          waveMesh.rotation.z = -elapsed * 1.2;
          const wobble = Math.sin(elapsed * 3) * 0.08;
          octMesh.position.y = wobble;
        };
      }

      // Dynamic Halo that tracks camera
      const haloGeo = new THREE.RingGeometry(0.46, 0.54, 24);
      const haloMat = new THREE.MeshBasicMaterial({
        color: node.hex,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
      });
      const haloMesh = new THREE.Mesh(haloGeo, haloMat);
      haloMesh.lookAt(camera.position);
      nodeSubGroup.add(haloMesh);
      disposables.push(haloGeo, haloMat);

      // Connecting energy ray from center to 3D node
      const linePoints = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(...node.position)];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
      const lineMat = new THREE.LineBasicMaterial({
        color: node.hex,
        transparent: true,
        opacity: 0.25
      });
      const connLine = new THREE.Line(lineGeo, lineMat);
      universeGroup.add(connLine);
      disposables.push(lineGeo, lineMat);

      nodeGroup.add(nodeSubGroup);

      nodeEntries.push({
        subGroup: nodeSubGroup,
        node,
        clickableTarget: clickable,
        halo: haloMesh,
        animator,
        dispose: () => {
          disposables.forEach(d => d.dispose());
        }
      });
    });

    // Ambient Starfield
    const starCount = isSoftwareGl ? 100 : 250;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 22;
      starPositions[i + 1] = (Math.random() - 0.5) * 18;
      starPositions[i + 2] = (Math.random() - 0.5) * 18;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x9333ea,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // Studio Dynamic Lights
    const ambientLight = new THREE.AmbientLight(0x0f0b24, 2.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xd8b4fe, 2.6);
    dirLight1.position.set(6, 6, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x06b6d4, 1.8);
    dirLight2.position.set(-6, -4, -4);
    scene.add(dirLight2);

    // Raycaster for clicking 3D structures directly
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onCanvasClick = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const targets = nodeEntries.map(e => e.clickableTarget);
      const intersects = raycaster.intersectObjects(targets, true);

      if (intersects.length > 0) {
        let hitObj: THREE.Object3D | null = intersects[0].object;
        while (hitObj && !hitObj.userData.nodeId && hitObj.parent) {
          hitObj = hitObj.parent;
        }
        if (hitObj && hitObj.userData.nodeId) {
          setSelectedNodeId(hitObj.userData.nodeId);
        }
      }
    };

    renderer.domElement.addEventListener('click', onCanvasClick);

    // Drag rotation controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      universeGroup.rotation.y += deltaX * 0.006;
      universeGroup.rotation.x += deltaY * 0.006;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    // Main 3D Animation Loop
    let animationFrameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      if (!isDragging && isRotating) {
        universeGroup.rotation.y += 0.0035;
        planet.rotation.y += 0.007;
      }

      // Animate each distinct category 3D structure independently
      nodeEntries.forEach(({ halo, node, subGroup, animator }) => {
        halo.quaternion.copy(camera.quaternion);

        const isSelected = node.id === selectedNodeId;
        animator(elapsed, isSelected);

        // Highlight selected node with pulsing energetic aura
        if (isSelected) {
          const s = 1.25 + Math.sin(elapsed * 4) * 0.18;
          halo.scale.set(s, s, 1);
          subGroup.scale.set(1.2, 1.2, 1.2);
        } else {
          halo.scale.set(1, 1, 1);
          subGroup.scale.set(1, 1, 1);
        }
      });

      starField.rotation.y = elapsed * 0.01;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      renderer.domElement.removeEventListener('click', onCanvasClick);
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);

      nodeEntries.forEach(e => e.dispose());
      planetGeo.dispose();
      planetMat.dispose();
      atmosphereGeo.dispose();
      atmosphereMat.dispose();
      starGeo.dispose();
      starMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isRotating, selectedNodeId]);

  // Helper icon for category 3D shape
  const getCategoryIcon = (shape: UniverseNode['shapeType']) => {
    switch (shape) {
      case 'torus-cluster': return <Terminal className="w-4 h-4 text-purple-400" />;
      case 'icosahedron-core': return <Sparkles className="w-4 h-4 text-fuchsia-400" />;
      case 'silicon-chip': return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'gimbal-gyro': return <Bot className="w-4 h-4 text-pink-400" />;
      case 'vision-pyramid': return <Scan className="w-4 h-4 text-emerald-400" />;
      case 'harmonic-lattice': return <Activity className="w-4 h-4 text-amber-400" />;
      default: return <Box className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <div className="relative w-full rounded-2xl glass-panel border border-purple-500/20 overflow-hidden p-4 sm:p-6 lg:p-8">
      {/* Header & Controls Strip */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-purple-500/15">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
            <Compass className="w-4 h-4 text-purple-400" />
            <span>INTERACTIVE 3D ORBITAL EXPLORER</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">Click individual 3D category objects or select below</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-display">
            Explore My Digital Universe
          </h3>
        </div>

        {/* Rotation toggle & controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-purple-950/40 border border-purple-500/30 hover:border-purple-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{isRotating ? 'Pause Orbit' : 'Resume Orbit'}</span>
          </button>
        </div>
      </div>

      {/* Accessible Interactive Category Selector Tabs */}
      <div className="py-4 flex flex-wrap items-center gap-2 overflow-x-auto no-scrollbar">
        {UNIVERSE_NODES.map((node) => {
          const isActive = selectedNodeId === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNodeId(node.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                isActive
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/50'
                  : 'bg-slate-900/60 text-slate-400 border border-purple-500/15 hover:border-purple-500/40 hover:text-slate-200'
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: node.color }}
              />
              <span>{node.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Grid: 3D Viewport on Left, Active Category Data on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
        {/* 3D WebGL Canvas */}
        <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] rounded-xl overflow-hidden bg-gradient-to-b from-[#090715] to-[#050508] border border-purple-500/20 flex items-center justify-center">
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

          {/* Active 3D Geometry Identifier Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0b0b14]/90 backdrop-blur-md border border-purple-500/30 text-xs shadow-lg">
            {getCategoryIcon(activeCategory.shapeType)}
            <div className="font-mono">
              <span className="text-white font-semibold">{activeCategory.model3DTitle}</span>
              <span className="text-slate-400 text-[10px] ml-2 hidden sm:inline">({activeCategory.name})</span>
            </div>
          </div>
          
          {/* Subtle Canvas Overlay Hint */}
          <div className="absolute bottom-3 left-3 pointer-events-none text-[11px] text-slate-400 font-mono bg-[#050508]/85 backdrop-blur-sm px-2.5 py-1 rounded-md border border-purple-500/15">
            Click any 3D category object or drag to rotate universe
          </div>
        </div>

        {/* Node Inspection & Project Cluster Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-purple-950/20 border border-purple-500/20 p-5 sm:p-6 space-y-5">
          <div>
            {/* Active Node Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-3.5 h-3.5 rounded-full shadow-md"
                  style={{ backgroundColor: activeCategory.color }}
                />
                <h4 className="text-base font-bold text-white font-display">
                  {activeCategory.name}
                </h4>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30 text-purple-300">
                Category 3D Object
              </span>
            </div>

            {/* Distinct 3D Model Spec Card */}
            <div className="p-3.5 rounded-xl bg-[#090715]/80 border border-purple-500/25 mb-4 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-300 font-semibold">
                {getCategoryIcon(activeCategory.shapeType)}
                <span>3D Visual: {activeCategory.model3DTitle}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeCategory.model3DDetails}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              {activeCategory.description}
            </p>

            {/* Official Tech Logos Strip for this Domain */}
            <div className="mb-5">
              <div className="text-xs font-mono text-slate-400 mb-2">Core Technology Ecosystem</div>
              <div className="flex flex-wrap items-center gap-1.5">
                {activeCategory.technologies.map(tech => (
                  <div
                    key={tech}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-500/25 text-xs text-slate-200"
                  >
                    <RenderTechLogo name={tech} size={14} />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Projects in this Cluster */}
            <div>
              <div className="text-xs font-mono text-slate-400 mb-2 flex items-center justify-between">
                <span>Featured Projects in This Domain</span>
                <span className="text-purple-400 font-medium">{matchingProjects.length} Verified</span>
              </div>

              <div className="space-y-2.5">
                {matchingProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="group p-3 rounded-xl bg-slate-900/60 border border-purple-500/15 hover:border-purple-400/40 transition-all flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-white truncate group-hover:text-purple-300 transition-colors">
                        {proj.title}
                      </div>
                      <div className="text-xs text-slate-400 truncate">
                        {proj.tagline}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-purple-950/60 text-slate-300 hover:text-white hover:bg-purple-900/60 transition-colors"
                          title="View on GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {proj.liveDemoUrl && (
                        <a
                          href={proj.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-purple-950/60 text-purple-300 hover:text-white hover:bg-purple-900/60 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {onSelectProject && (
                        <button
                          onClick={() => onSelectProject(proj)}
                          className="p-1.5 rounded-lg bg-purple-600/30 text-purple-300 hover:bg-purple-600 hover:text-white transition-colors"
                          title="View Project Details"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Jump to Full Projects Gallery */}
          <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between">
            <span className="text-xs text-slate-400">Want to inspect all 9 projects?</span>
            <a
              href="#projects"
              className="text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
            >
              <span>View Full Gallery</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
