
import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string; // Added fallback prop
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-20 h-20',
  lg: 'w-32 h-32',
  xl: 'w-40 h-40'
};

const Avatar = ({ src, alt, className, size = 'md', fallback }: AvatarProps) => {
  return (
    <div className={cn('relative', className)}>
      <div className={cn('rounded-full overflow-hidden', sizeClasses[size])}>
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
                parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-200 text-4xl">${fallback}</div>`;
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default Avatar;
