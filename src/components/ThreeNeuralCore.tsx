import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeNeuralCore: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL or low-power GPU
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

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050508, 0.035);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // Group for mouse parallax
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Core: Inner metallic sphere with emissive neural cracks
    const coreGeo = new THREE.IcosahedronGeometry(1.6, isSoftwareGl ? 2 : 4);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x1a0f2e,
      roughness: 0.2,
      metalness: 0.85,
      wireframe: false
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // 2. Holographic wireframe cage
    const wireGeo = new THREE.IcosahedronGeometry(1.68, isSoftwareGl ? 1 : 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x9333ea,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // 3. Glowing Orbital Energy Rings (Torus)
    const ringGroup = new THREE.Group();
    coreGroup.add(ringGroup);

    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      emissive: 0x8b5cf6,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: false
    });
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0284c7,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.8
    });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.035, 16, 100), ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ringGroup.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.8, 0.025, 16, 100), ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ringGroup.add(ring2);

    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.02, 16, 100), ringMat1);
    ring3.rotation.z = Math.PI / 6;
    ringGroup.add(ring3);

    // 4. Orbiting Neural Satellite Nodes
    const satelliteGroup = new THREE.Group();
    coreGroup.add(satelliteGroup);
    const satelliteCount = isSoftwareGl ? 6 : 12;
    const satellites: THREE.Mesh[] = [];

    const nodeGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0xe9d5ff,
      emissive: 0xa855f7,
      emissiveIntensity: 0.9,
      roughness: 0.1
    });

    for (let i = 0; i < satelliteCount; i++) {
      const sat = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (i / satelliteCount) * Math.PI * 2;
      const radius = 2.4 + (i % 3) * 0.4;
      sat.position.set(
        Math.cos(angle) * radius,
        (Math.sin(i * 1.5) * 0.8),
        Math.sin(angle) * radius
      );
      satelliteGroup.add(sat);
      satellites.push(sat);
    }

    // 5. Floating Ambient Particle Dust
    const particleCount = isSoftwareGl ? 120 : 350;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 14;
      posArray[i + 1] = (Math.random() - 0.5) * 10;
      posArray[i + 2] = (Math.random() - 0.5) * 10;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0xc084fc,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0x0f0b1f, 1.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xd8b4fe, 2.5);
    dirLight1.position.set(5, 6, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x06b6d4, 1.8);
    dirLight2.position.set(-5, -4, -2);
    scene.add(dirLight2);

    const coreLight = new THREE.PointLight(0xa855f7, 3, 10);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    // Mouse Tracking for Parallax
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      targetX = (e.clientX - halfW) / halfW;
      targetY = (e.clientY - halfH) / halfH;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });

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

    // Animation Loop
    let animationFrameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Exponential damping toward target mouse coordinate
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      // Rotate group smoothly
      coreGroup.rotation.y = elapsed * 0.2 + currentX * 0.4;
      coreGroup.rotation.x = currentY * 0.25;

      // Rotate rings with differential velocities
      ring1.rotation.z += delta * 0.35;
      ring2.rotation.x += delta * 0.25;
      ring3.rotation.y += delta * 0.18;

      // Pulse inner core slightly
      const scale = 1 + Math.sin(elapsed * 2) * 0.025;
      coreMesh.scale.set(scale, scale, scale);
      wireMesh.scale.set(scale * 1.02, scale * 1.02, scale * 1.02);

      // Rotate particles slowly
      particleSystem.rotation.y = elapsed * 0.03;
      particleSystem.rotation.x = elapsed * 0.015;

      // Orbit satellites
      satellites.forEach((sat, i) => {
        const speed = 0.5 + (i % 3) * 0.2;
        const angle = (i / satelliteCount) * Math.PI * 2 + elapsed * speed;
        const radius = 2.4 + (i % 3) * 0.4;
        sat.position.x = Math.cos(angle) * radius;
        sat.position.z = Math.sin(angle) * radius;
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);

      // Clean up geometries and materials
      coreGeo.dispose();
      coreMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-90"
      aria-hidden="true"
    />
  );
};
