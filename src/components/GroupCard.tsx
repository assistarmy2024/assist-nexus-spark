
import React, { useState, useEffect } from 'react';
import { AvatarSphere } from './AvatarSphere';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

type GroupKey = 'children' | 'elderly' | 'homemaker';

const SEED_MAP: Record<GroupKey, string> = {
  children: 'playful-kid',
  homemaker: 'friendly-cook',
  elderly: 'wise-reader'
};

const TAGLINE_MAP: Record<GroupKey, string> = {
  children: 'Learn Play Grow',
  homemaker: 'Cook Clean Relax',
  elderly: 'Wisdom at Hand'
};

export function GroupCard({ 
  groupKey, 
  title,
  onClick,
  className 
}: { 
  groupKey: GroupKey; 
  title: string;
  onClick?: () => void;
  className?: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      className={cn(
        "flex flex-col items-center p-6 text-center rounded-xl backdrop-blur-lg transition-all duration-500",
        groupKey === 'children' ? 'bg-gradient-to-br from-blue-600/30 to-indigo-600/10 hover:from-blue-600/40 hover:to-indigo-600/20' : 
        groupKey === 'elderly' ? 'bg-gradient-to-br from-teal-600/30 to-blue-600/10 hover:from-teal-600/40 hover:to-blue-600/20' :
        'bg-gradient-to-br from-indigo-600/30 to-purple-600/10 hover:from-indigo-600/40 hover:to-purple-600/20',
        isHovered ? 'transform scale-105 shadow-lg' : '',
        !isLoaded ? 'opacity-0' : 'opacity-100',
        className
      )}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isLoaded ? (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Skeleton className="w-32 h-32 rounded-full bg-white/10" />
          <Skeleton className="w-24 h-6 mt-4 bg-white/10" />
          <Skeleton className="w-32 h-4 mt-2 bg-white/10" />
        </div>
      ) : (
        <>
          <div className="relative transform transition-transform duration-500">
            <div className={cn(
              "absolute -inset-3 blur-xl opacity-30 rounded-full transition-all duration-500",
              groupKey === 'children' ? 'bg-blue-500' : 
              groupKey === 'elderly' ? 'bg-teal-500' : 
              'bg-indigo-500',
              isHovered ? 'opacity-70 scale-110' : 'opacity-30'
            )}></div>
            <AvatarSphere 
              seed={SEED_MAP[groupKey]} 
              size={1.2} 
              width={150} 
              height={150} 
              autoRotate={isHovered} 
            />
          </div>
          <h3 className={cn(
            "mt-4 mb-1 text-xl font-bold transition-all duration-500",
            groupKey === 'children' ? 'text-blue-400' : 
            groupKey === 'elderly' ? 'text-teal-400' : 
            'text-indigo-400',
            isHovered ? 'transform scale-110' : ''
          )}>{title}</h3>
          <p className="text-sm text-white/75 m-0">{TAGLINE_MAP[groupKey]}</p>
        </>
      )}
    </div>
  );
}
