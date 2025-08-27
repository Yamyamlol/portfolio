import React from 'react';
import { HeroSection } from '@/components/portfolio/HeroSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { SkillsSection } from '@/components/portfolio/SkillsSection';
import { ContactSection } from '@/components/portfolio/ContactSection';
import { ScrollytellBackground } from '@/components/portfolio/ScrollytellBackground';
import { GlassDock } from '@/components/portfolio/GlassDock';
import { LazySection } from '@/components/portfolio/LazySection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <ScrollytellBackground />
      
      {/* Glass dock navigation */}
      <GlassDock />
      
      {/* Portfolio sections with smooth scrolling */}
      <div className="relative z-10">
        <div id="hero">
          <HeroSection />
        </div>
        <LazySection>
          <div id="about">
            <ExperienceSection />
          </div>
        </LazySection>
        <LazySection>
          <div id="projects">
            <ProjectsSection />
          </div>
        </LazySection>
        <LazySection>
          <div id="skills">
            <SkillsSection />
          </div>
        </LazySection>
        <LazySection>
          <div id="contact">
            <ContactSection />
          </div>
        </LazySection>
      </div>
    </div>
  );
};

export default Index;