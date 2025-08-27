import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['C++', 'TypeScript', 'JavaScript', 'Python']
  },
  {
    category: 'Frontend Technologies',
    skills: ['React.js', 'Angular', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Flutter']
  },
  {
    category: 'Backend & Databases',
    skills: ['Node.js', 'Express.js', 'Flask', 'MongoDB', 'MySQL', 'Firebase']
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'REST APIs', 'Socket.IO']
  }
];

const certifications = [
  'NPTEL UI/UX Design',
  'NPTEL Blockchain Technology',
  'NPTEL Computer Networks',
  'AWS Cloud Quest',
];

const additionalAchievements = [
  'SSB Shortlisted (TES-48)',
  '3x AWES Scholarships'
];

interface SkillTagProps {
  skill: string;
  index: number;
  isVisible: boolean;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, index, isVisible }) => {
  return (
    <Badge 
      variant="outline" 
      className={`glass border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {skill}
    </Badge>
  );
};

export const SkillsSection = () => {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proficiency in modern technologies and frameworks for building scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.category}
              ref={el => sectionRefs.current[categoryIndex] = el}
              className="glass glow-card hover-lift"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                  <div className="w-2 h-8 bg-primary rounded-full mr-3" />
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillTag
                      key={skill}
                      skill={skill}
                      index={skillIndex}
                      isVisible={visibleSections.has(categoryIndex)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {certifications.map((cert, index) => (
              <Badge key={cert} variant="outline" className="glass border-secondary/20 text-secondary px-4 py-2" style={{ animationDelay: `${index * 100}ms` }}>
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* Additional Achievements */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-accent mb-8">Additional Achievements</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalAchievements.map((achievement, index) => (
              <Badge key={achievement} variant="outline" className="glass border-accent/20 text-accent px-4 py-2" style={{ animationDelay: `${index * 100}ms` }}>
                {achievement}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};