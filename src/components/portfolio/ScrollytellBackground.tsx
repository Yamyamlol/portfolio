import React, { useEffect, useRef, useState } from 'react';

interface FloatingElement {
  id: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
  speed: number;
  type: 'code' | 'tech' | 'geometric';
  content: string;
  color: string;
}

const codeSnippets = [
  'const hero = () => {}',
  'function create()',
  'npm install',
  'git commit -m',
  'React.useState()',
  'async/await',
  'TypeScript',
  '.map(item => {})',
  'export default',
  'import React'
];

const techIcons = ['⚛️', '📱', '💻', '⚡', '🚀', '🎨', '📊', '🔧', '💡', '🌟'];
const geometricShapes = ['◆', '▲', '●', '■', '◇', '▼', '◯', '□'];

export const ScrollytellBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const elementsRef = useRef<FloatingElement[]>([]);
  const animationRef = useRef<number>();




  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createFloatingElement = (): FloatingElement => {
      const types = ['code', 'tech', 'geometric'] as const;
      const type = types[Math.floor(Math.random() * types.length)];
      
      let content = '';
      let color = '';
      
      switch (type) {
        case 'code':
          content = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
          color = 'hsl(220, 85%, 65%)'; // Primary color
          break;
        case 'tech':
          content = techIcons[Math.floor(Math.random() * techIcons.length)];
          color = 'hsl(250, 50%, 70%)'; // Secondary color
          break;
        case 'geometric':
          content = geometricShapes[Math.floor(Math.random() * geometricShapes.length)];
          color = 'hsl(160, 50%, 60%)'; // Accent color
          break;
      }

      return {
        id: Math.random().toString(36),
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.8 + 0.2,
        opacity: Math.random() * 0.3 + 0.1,
        speed: Math.random() * 0.5 + 0.1,
        type,
        content,
        color
      };
    };

    const initElements = () => {
      elementsRef.current = [];
      const elementCount = Math.floor((canvas.width * canvas.height) / 20000);
      
      for (let i = 0; i < elementCount; i++) {
        elementsRef.current.push(createFloatingElement());
      }
    };

    const updateElement = (element: FloatingElement) => {
      // Independent movement without scroll dependency
      element.y -= element.speed;
      element.x += Math.sin(Date.now() * 0.001 + element.id.charCodeAt(0)) * 0.2;
      element.rotation += 0.5;
      
      // Subtle opacity pulse independent of scroll
      element.opacity = Math.max(0.05, Math.min(0.4, 
        element.opacity + Math.sin(Date.now() * 0.002 + element.id.charCodeAt(1)) * 0.002
      ));

      // Reset position if off screen
      if (element.y < -100) {
        element.y = canvas.height + 100;
        element.x = Math.random() * canvas.width;
      }
      
      if (element.x < -100) element.x = canvas.width + 100;
      if (element.x > canvas.width + 100) element.x = -100;
    };

    const drawElement = (element: FloatingElement) => {
      ctx.save();
      
      ctx.globalAlpha = element.opacity;
      ctx.translate(element.x, element.y);
      ctx.rotate((element.rotation * Math.PI) / 180);
      ctx.scale(element.scale, element.scale);
      
      if (element.type === 'code') {
        ctx.font = '14px JetBrains Mono, monospace';
        ctx.fillStyle = element.color;
        ctx.textAlign = 'center';
        ctx.fillText(element.content, 0, 0);
      } else if (element.type === 'tech') {
        ctx.font = '24px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(element.content, 0, 8);
      } else {
        ctx.font = '20px system-ui';
        ctx.fillStyle = element.color;
        ctx.textAlign = 'center';
        ctx.fillText(element.content, 0, 6);
      }
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      elementsRef.current.forEach(element => {
        updateElement(element);
        drawElement(element);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initElements();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initElements();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, );

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ 
        background: `
          radial-gradient(circle at 20% 50%, hsl(220 85% 65% / 0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, hsl(250 50% 70% / 0.03) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, hsl(160 50% 60% / 0.03) 0%, transparent 50%)
        `
      }}
    />
  );
};