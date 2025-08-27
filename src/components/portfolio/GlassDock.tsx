import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, FolderOpen, Award, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface DockItem {
  icon: React.ElementType;
  label: string;
  href: string;
  action?: () => void;
}

export const GlassDock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const dockItems: DockItem[] = [
    { icon: Home, label: 'Home', href: '#hero', action: () => scrollToSection('hero') },
    { icon: User, label: 'About', href: '#about', action: () => scrollToSection('about') },
    { icon: Briefcase, label: 'Experience', href: '#experience', action: () => scrollToSection('experience') },
    { icon: FolderOpen, label: 'Projects', href: '#projects', action: () => scrollToSection('projects') },
    { icon: Award, label: 'Skills', href: '#skills', action: () => scrollToSection('skills') },
    { icon: Mail, label: 'Contact', href: '#contact', action: () => scrollToSection('contact') }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass rounded-2xl p-3 border border-border/40 shadow-2xl">
        <div className="flex items-end space-x-1">
          {dockItems.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;
            const isAdjacent = hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1;
            
            let scale = 'scale-100';
            if (isHovered) {
              scale = 'scale-150';
            } else if (isAdjacent) {
              scale = 'scale-125';
            }

            return (
              <button
                key={item.label}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={item.action}
                className={`
                  relative group p-3 rounded-xl transition-all duration-300 ease-out
                  hover:bg-primary/20 active:scale-95
                  ${scale}
                  ${isHovered ? 'z-20' : 'z-10'}
                `}
                style={{
                  transformOrigin: 'bottom center',
                  marginBottom: isHovered ? '20px' : isAdjacent ? '10px' : '0px',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <Icon 
                  className={`
                    h-6 w-6 transition-colors duration-200
                    ${isHovered 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                    }
                  `}
                />
                
                {/* Tooltip */}
                <div className={`
                  absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                  opacity-0 group-hover:opacity-100 transition-opacity duration-200
                  pointer-events-none
                `}>
                  <div className="glass px-2 py-1 rounded-md">
                    <span className="text-xs text-foreground whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                </div>

                {/* Ripple effect */}
                <div className={`
                  absolute inset-0 rounded-xl opacity-0 group-active:opacity-20
                  bg-gradient-to-r from-primary to-secondary
                  transition-opacity duration-150
                `} />
              </button>
            );
          })}
          
          {/* Theme Toggle */}
          <div className="ml-2 pl-2 border-l border-border/40">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};