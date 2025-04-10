
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  theme?: 'children' | 'elderly' | 'homemaker';
}

const variantClasses = {
  default: 'glass-button',
  outline: 'glass-button border-2',
  ghost: 'bg-transparent hover:bg-white/5'
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

const GlassButton = ({ 
  children, 
  className, 
  variant = 'default', 
  size = 'md', 
  theme,
  ...props 
}: GlassButtonProps) => {
  return (
    <button 
      className={cn(
        variantClasses[variant],
        sizeClasses[size],
        theme && `${theme}-theme`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default GlassButton;
