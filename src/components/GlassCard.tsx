
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
}: GlassCardProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Add a small delay before enabling 3D effects to prevent initial animation jumps
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handle3DEffect = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!is3D || !isInitialized) return;
    
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Reduce rotation intensity for smoother effect (divided by 25 instead of 15)
    const rotateXValue = ((y - centerY) / 25) * -1;
    const rotateYValue = (x - centerX) / 25;
    
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

  const style: React.CSSProperties = is3D ? {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transition: `transform ${transitionDuration}s ease-out`,
    willChange: 'transform', // Optimize for animations
  } : {};

  return (
    <div 
      ref={cardRef}
      className={cn(
        'glass-card backdrop-blur-md',
        theme && `${theme}-theme`,
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
