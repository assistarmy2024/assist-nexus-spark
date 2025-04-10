
import React from 'react';
import { cn } from '@/lib/utils';
import Avatar from './Avatar';

interface CharacterAvatarProps {
  character: 'child' | 'elderly' | 'homemaker';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const characterImages = {
  child: "/assets/child-avatar.png", // Updated path
  elderly: "/assets/elderly-avatar.png", // Updated path
  homemaker: "/assets/homemaker-avatar.png" // Updated path
};

const characterAlternatives = {
  child: "👦", // Fallback emoji
  elderly: "👵", // Fallback emoji
  homemaker: "👩‍🍳" // Fallback emoji
};

const characterNames = {
  child: "Chhota Dost",
  elderly: "Mitraji",
  homemaker: "GharSakhi"
};

const CharacterAvatar = ({ character, className, size = 'md' }: CharacterAvatarProps) => {
  const imageSrc = characterImages[character];
  
  return (
    <div className={cn('flex flex-col items-center', className)}>
      <Avatar 
        src={imageSrc} 
        fallback={characterAlternatives[character]}
        alt={characterNames[character]} 
        size={size}
        className={cn(
          'animate-float shadow-lg',
          character === 'child' && 'border-4 border-assist-yellow shadow-assist-yellow/20',
          character === 'elderly' && 'border-4 border-assist-teal shadow-assist-teal/20',
          character === 'homemaker' && 'border-4 border-assist-pink shadow-assist-pink/20'
        )}
      />
      <span className={cn(
        'mt-2 font-medium',
        character === 'child' && 'text-assist-yellow',
        character === 'elderly' && 'text-assist-teal',
        character === 'homemaker' && 'text-assist-pink'
      )}>
        {characterNames[character]}
      </span>
    </div>
  );
};

export default CharacterAvatar;
