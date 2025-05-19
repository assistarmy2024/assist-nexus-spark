
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface UtilityTileProps {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  delay?: number;
}

export function UtilityTile({ 
  title, 
  icon, 
  onClick,
  className,
  delay = 0
}: UtilityTileProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300 + delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center p-4 text-center rounded-xl backdrop-blur-lg transition-all duration-300 cursor-pointer border border-white/10 bg-white/5 hover:bg-white/10",
        isHovered ? 'transform scale-105 shadow-lg' : '',
        !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0',
        className
      )}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-2 text-white/90">
        {icon}
      </div>
      <span className="text-sm font-medium text-white/80">{title}</span>
    </div>
  );
}
