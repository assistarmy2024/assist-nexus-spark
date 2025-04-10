
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowing?: boolean;
  theme?: 'children' | 'elderly' | 'homemaker';
}

const GlassCard = ({ children, className, glowing = false, theme }: GlassCardProps) => {
  return (
    <div 
      className={cn(
        'glass-card',
        theme && `${theme}-theme`,
        glowing && 'glowing-card',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
