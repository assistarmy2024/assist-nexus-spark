
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowing?: boolean;
  theme?: 'children' | 'elderly' | 'homemaker';
  onClick?: () => void;
  is3D?: boolean;
  metallic?: boolean;
  hoverEffect?: boolean;
  neoEffect?: boolean;
  transitionDuration?: number;
  appear?: 'fade' | 'scale' | 'slide' | 'none';
  appearDelay?: number;
}

const GlassCard = ({ 
  children, 
  className, 
  glowing = false, 
  theme, 
  onClick,
  is3D = false,
  metallic = false,
  hoverEffect = true,
  neoEffect = false,
  transitionDuration = 0.3,
  appear = 'none',
  appearDelay = 0,
}: GlassCardProps) => {
  const [isVisible, setIsVisible] = useState(appear === 'none');
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle appearance animations
  useEffect(() => {
    if (appear !== 'none') {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, appearDelay);
      
      return () => clearTimeout(timer);
    }
  }, [appear, appearDelay]);

  const style: React.CSSProperties = {
    transition: `transform ${transitionDuration}s ease-out, opacity 0.5s ease-out, box-shadow 0.3s ease-out`,
    willChange: 'opacity, box-shadow',
    opacity: isVisible ? 1 : 0,
    ...appear === 'scale' && { transform: isVisible ? 'scale(1)' : 'scale(0.95)' },
    ...appear === 'slide' && { transform: isVisible ? 'translateY(0)' : 'translateY(20px)' },
  };

  const themeClasses = {
    children: 'from-blue-600/10 to-indigo-600/5 border-blue-500/20 shadow-blue-500/10',
    elderly: 'from-teal-600/10 to-blue-600/5 border-teal-500/20 shadow-teal-500/10',
    homemaker: 'from-indigo-600/10 to-purple-600/5 border-indigo-500/20 shadow-indigo-500/10'
  };

  return (
    <div 
      ref={cardRef}
      className={cn(
        'glass-card backdrop-blur-md bg-gradient-to-br',
        theme && themeClasses[theme],
        glowing && 'glowing-card',
        metallic && 'metallic-gradient',
        neoEffect && 'neo-morphism',
        hoverEffect && 'transition-all duration-300',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
