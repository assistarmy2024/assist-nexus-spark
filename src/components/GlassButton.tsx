
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'metallic' | 'neon' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  theme?: 'children' | 'elderly' | 'homemaker';
  is3D?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  glow?: boolean;
}

const variantClasses = {
  default: 'glass-button',
  outline: 'glass-button border-2',
  ghost: 'bg-transparent hover:bg-white/5',
  metallic: 'glass-button metallic-gradient',
  neon: 'glass-button shadow-[0_0_10px_var(--card-glow)]',
  primary: 'glass-button bg-gradient-to-r from-primary/80 to-primary/60 text-white',
  secondary: 'glass-button bg-gradient-to-r from-secondary/80 to-secondary/60 text-white'
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

const themeGradients = {
  children: 'from-blue-500/20 to-indigo-500/20 hover:from-blue-500/30 hover:to-indigo-500/30',
  elderly: 'from-teal-500/20 to-blue-500/20 hover:from-teal-500/30 hover:to-blue-500/30',
  homemaker: 'from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30'
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
  glow = false,
  ...props 
}: GlassButtonProps) => {
  return (
    <button 
      className={cn(
        variantClasses[variant],
        sizeClasses[size],
        theme && `${theme}-theme bg-gradient-to-r ${themeGradients[theme]}`,
        is3D && 'transform hover:-translate-y-0.5 active:translate-y-0',
        glow && 'relative',
        'inline-flex items-center justify-center transition-all duration-200',
        className
      )}
      {...props}
    >
      {glow && (
        <span className="absolute inset-0 rounded-full opacity-40 blur-md -z-10 bg-gradient-to-r from-white/10 to-white/5"></span>
      )}
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default GlassButton;
