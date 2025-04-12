
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
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isVisible, setIsVisible] = useState(appear === 'none');
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Add a small delay before enabling 3D effects to prevent initial animation jumps
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle appearance animations
  useEffect(() => {
    if (appear !== 'none') {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, appearDelay);
      
      return () => clearTimeout(timer);
    }
  }, [appear, appearDelay]);

  const handle3DEffect = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!is3D || !isInitialized) return;
    
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Reduce rotation intensity for smoother effect (divided by 25 instead of 15)
    const rotateXValue = ((y - centerY) / 35) * -1; // Even gentler rotation
    const rotateYValue = (x - centerX) / 35;
    
    // Apply smooth transitions to rotation values
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };
  
  const resetRotation = () => {
    if (!is3D) return;
    // Smoothly reset rotation
    setRotateX(0);
    setRotateY(0);
  };

  const style: React.CSSProperties = {
    transform: is3D ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : undefined,
    transition: `transform ${transitionDuration}s ease-out, opacity 0.3s ease-out, transform 0.3s ease-out`,
    willChange: 'transform, opacity',
    opacity: isVisible ? 1 : 0,
    ...appear === 'scale' && { transform: isVisible ? (is3D ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : 'scale(1)') : 'scale(0.95)' },
    ...appear === 'slide' && { transform: isVisible ? (is3D ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` : 'translateY(0)') : 'translateY(20px)' },
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
        is3D && 'card-3d transform-gpu',
        metallic && 'metallic-gradient',
        neoEffect && 'neo-morphism',
        hoverEffect && 'hover:shadow-xl transition-all duration-300',
        onClick && 'cursor-pointer',
        isInitialized ? 'opacity-100' : 'opacity-90',
        className
      )}
      onClick={onClick}
      onMouseMove={handle3DEffect}
      onMouseLeave={resetRotation}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
