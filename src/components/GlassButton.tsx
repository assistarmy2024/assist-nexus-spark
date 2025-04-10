
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'metallic' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  theme?: 'children' | 'elderly' | 'homemaker';
  is3D?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantClasses = {
  default: 'glass-button',
  outline: 'glass-button border-2',
  ghost: 'bg-transparent hover:bg-white/5',
  metallic: 'glass-button metallic-gradient',
  neon: 'glass-button shadow-[0_0_15px_var(--card-glow)]'
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
  is3D = false,
  icon,
  iconPosition = 'left',
  ...props 
}: GlassButtonProps) => {
  return (
    <button 
      className={cn(
        variantClasses[variant],
        sizeClasses[size],
        theme && `${theme}-theme`,
        is3D && 'card-3d',
        'inline-flex items-center justify-center',
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default GlassButton;
