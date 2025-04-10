
import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-20 h-20',
  lg: 'w-32 h-32',
  xl: 'w-40 h-40'
};

const Avatar = ({ src, alt, className, size = 'md' }: AvatarProps) => {
  return (
    <div className={cn('relative', className)}>
      <div className={cn('rounded-full overflow-hidden', sizeClasses[size])}>
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Avatar;
