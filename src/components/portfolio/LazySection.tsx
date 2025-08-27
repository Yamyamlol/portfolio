import React, { ReactNode } from 'react';
import { useLazyLoad } from '@/hooks/useLazyLoad';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

export const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  className = '', 
  threshold = 0.1 
}) => {
  const { elementRef, isVisible } = useLazyLoad(threshold);

  return (
    <div 
      ref={elementRef}
      className={`transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {isVisible ? children : (
        <div className="h-96 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};