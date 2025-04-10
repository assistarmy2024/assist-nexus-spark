
import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string; // Fallback prop for when image fails to load
  glow?: boolean;
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-20 h-20',
  lg: 'w-32 h-32',
  xl: 'w-40 h-40'
};

const Avatar = ({ src, alt, className, size = 'md', fallback, glow = false }: AvatarProps) => {
  return (
    <div className={cn('relative', glow && 'avatar-glow', className)}>
      <div className={cn(
        'rounded-full overflow-hidden shadow-xl', 
        sizeClasses[size],
        glow && 'animate-pulse-gentle'
      )}>
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
          onError={(e) => {
            // If image fails to load and fallback is provided, show fallback content
            if (fallback) {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentNode as HTMLElement;
              if (parent) {
                parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900 text-4xl">${fallback}</div>`;
              }
            }
          }}
        />
      </div>
      {glow && (
        <div className="absolute inset-0 -z-10 rounded-full blur-xl opacity-60 bg-gradient-to-r from-blue-400 to-blue-600"></div>
      )}
    </div>
  );
};

export default Avatar;
