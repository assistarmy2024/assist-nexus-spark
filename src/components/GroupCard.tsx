
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
      "flex flex-col items-center p-4 text-center",
      className
    )}>
      <AvatarSphere seed={SEED_MAP[groupKey]} size={1.2} width={150} height={150} />
      <h3 className="mt-2 mb-1 text-lg font-bold">{title}</h3>
      <p className="text-sm text-white/75 m-0">{TAGLINE_MAP[groupKey]}</p>
    </div>
  );
}
