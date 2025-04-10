
import React from 'react';
import { cn } from '@/lib/utils';
import Avatar from './Avatar';

interface CharacterAvatarProps {
  character: 'child' | 'elderly' | 'homemaker';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showName?: boolean;
}

const characterImages = {
  child: "/lovable-uploads/610f4704-240f-4beb-afc6-e84478522871.png",
  homemaker: "/lovable-uploads/7682db02-e18a-405a-937a-7b7f525828eb.png",
  elderly: "/lovable-uploads/4f8f135a-6243-488c-92ba-c324f470b2a9.png"
};

const characterAlternatives = {
  child: "👦",
  elderly: "👴",
  homemaker: "👩"
};

const characterNames = {
  child: "Alex",
  elderly: "Professor Wilson",
  homemaker: "Sarah"
};

const characterGradients = {
  child: "from-blue-400 to-indigo-600",
  elderly: "from-teal-400 to-blue-600",
  homemaker: "from-pink-400 to-purple-600"
};

const CharacterAvatar = ({ character, className, size = 'md', showName = true }: CharacterAvatarProps) => {
  const imageSrc = characterImages[character];
  
  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div className="relative">
        <div className={cn(
          "absolute -inset-2 rounded-full blur-md opacity-70 animate-pulse-gentle bg-gradient-to-br",
          character === 'child' && "from-blue-400 to-indigo-600",
          character === 'elderly' && "from-teal-400 to-blue-600",
          character === 'homemaker' && "from-pink-400 to-purple-600"
        )}></div>
        <Avatar 
          src={imageSrc} 
          fallback={characterAlternatives[character]}
          alt={characterNames[character]} 
          size={size}
          glow={true}
          className={cn(
            'border-2 shadow-xl',
            character === 'child' && 'border-blue-500 shadow-blue-500/30',
            character === 'elderly' && 'border-teal-500 shadow-teal-500/30',
            character === 'homemaker' && 'border-pink-500 shadow-pink-500/30'
          )}
        />
      </div>
      {showName && (
        <span className={cn(
          'mt-2 font-bold text-lg',
          character === 'child' && 'text-blue-400',
          character === 'elderly' && 'text-teal-400',
          character === 'homemaker' && 'text-pink-400'
        )}>
          {characterNames[character]}
        </span>
      )}
    </div>
  );
};

export default CharacterAvatar;
