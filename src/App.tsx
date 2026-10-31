import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ThreeUniverse } from './components/ThreeUniverse';
import { ProjectShowcase } from './components/ProjectShowcase';
import { SkillsEcosystem } from './components/SkillsEcosystem';
import { AiToolsEcosystem } from './components/AiToolsEcosystem';
import { ExperienceSection } from './components/ExperienceSection';
import { HackathonsSection } from './components/HackathonsSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { CertificatesGallery } from './components/CertificatesGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PageNavigator } from './components/PageNavigator';

import { CertificateModal } from './components/CertificateModal';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';

import { Project } from './data/projectsData';
import { Certificate } from './data/certificatesData';

export default function App() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#050508] text-slate-100 flex flex-col font-sans selection:bg-purple-600/30 selection:text-purple-200 relative overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Next-Next Page Format Navigator */}
      <PageNavigator />

      {/* Main Stepped Page Sections */}
      <main className="flex-1">
        {/* Page 01. Hero Section with 3D Neural AI Core */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Page 02. Complete About Me & Education Timeline */}
        <About />

        {/* Page 03. Interactive 3D Digital Universe Explorer */}
        <section id="universe" data-page-section className="py-16 sm:py-24 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ThreeUniverse onSelectProject={(proj) => setSelectedProject(proj)} />
        </section>

        {/* Page 04. Complete Project Showcase Gallery */}
        <ProjectShowcase onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* Page 05. Complete Technical Skills Ecosystem */}
        <SkillsEcosystem />

        {/* Page 06. AI Tools & Development Ecosystem (50+ Tools Directory) */}
        <AiToolsEcosystem />

        {/* Page 07. Experience & Leadership Roles (with Coordinator details) */}
        <ExperienceSection onOpenCertificate={(cert) => setSelectedCertificate(cert)} />

        {/* Page 08. Hackathons (NASA Space Apps 2025, HackVega, V-Medithon 3.0, etc.) */}
        <HackathonsSection onOpenCertificate={(cert) => setSelectedCertificate(cert)} />

        {/* Page 09. Workshops & Hands-on Training (AI/ML/IoT Robotics, Drone Tech) */}
        <WorkshopsSection onOpenCertificate={(cert) => setSelectedCertificate(cert)} />

        {/* Page 10. Verified Certifications Gallery with Instant Previews */}
        <CertificatesGallery onOpenCertificate={(cert) => setSelectedCertificate(cert)} />

        {/* Page 11. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
