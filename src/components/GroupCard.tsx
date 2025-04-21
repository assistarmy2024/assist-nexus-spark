
import React from 'react';
import { AvatarSphere } from './AvatarSphere';
import { cn } from '@/lib/utils';

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
  className 
}: { 
  groupKey: GroupKey; 
  title: string;
  className?: string;
}) {
  return (
    <div className={cn(
      "flex flex-col items-center p-4 text-center bg-gradient-to-br rounded-xl backdrop-blur-lg transition-all duration-300",
      groupKey === 'children' ? 'from-blue-600/20 to-indigo-600/10' : 
      groupKey === 'elderly' ? 'from-teal-600/20 to-blue-600/10' :
      'from-indigo-600/20 to-purple-600/10',
      className
    )}>
      <div className="relative transform transition-transform duration-300 hover:scale-105">
        <div className={cn(
          "absolute -inset-3 blur-xl opacity-30 rounded-full",
          groupKey === 'children' ? 'bg-blue-500' : 
          groupKey === 'elderly' ? 'bg-teal-500' : 
          'bg-indigo-500'
        )}></div>
        <AvatarSphere 
          seed={SEED_MAP[groupKey]} 
          size={1.2} 
          width={150} 
          height={150} 
          autoRotate={true} 
        />
      </div>
      <h3 className={cn(
        "mt-4 mb-1 text-xl font-bold",
        groupKey === 'children' ? 'text-blue-400' : 
        groupKey === 'elderly' ? 'text-teal-400' : 
        'text-indigo-400'
      )}>{title}</h3>
      <p className="text-sm text-white/75 m-0">{TAGLINE_MAP[groupKey]}</p>
    </div>
  );
}
