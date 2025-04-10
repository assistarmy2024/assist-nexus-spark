
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowing?: boolean;
  theme?: 'children' | 'elderly' | 'homemaker';
  onClick?: () => void; // Added onClick handler
}

const GlassCard = ({ children, className, glowing = false, theme, onClick }: GlassCardProps) => {
  return (
    <div 
      className={cn(
        'glass-card',
        theme && `${theme}-theme`,
        glowing && 'glowing-card',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;
