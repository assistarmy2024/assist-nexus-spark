
import React, { useState } from 'react';
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
}: GlassCardProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handle3DEffect = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!is3D) return;
    
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const centerX = width / 2;
    const centerY = height / 2;
    
    const rotateXValue = ((y - centerY) / 15) * -1;
    const rotateYValue = (x - centerX) / 15;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };
  
  const resetRotation = () => {
    if (!is3D) return;
    setRotateX(0);
    setRotateY(0);
  };

  const style: React.CSSProperties = is3D ? {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transition: 'transform 0.1s ease-out',
  } : {};

  return (
    <div 
      className={cn(
        'glass-card backdrop-blur-md',
        theme && `${theme}-theme`,
        glowing && 'glowing-card',
        is3D && 'card-3d transform-gpu',
        metallic && 'metallic-gradient',
        neoEffect && 'neo-morphism',
        hoverEffect && 'hover:shadow-xl transition-all duration-300',
        onClick && 'cursor-pointer',
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
