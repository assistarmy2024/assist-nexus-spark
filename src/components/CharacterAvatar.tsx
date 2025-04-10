
import React from 'react';
import { cn } from '@/lib/utils';
import Avatar from './Avatar';

interface CharacterAvatarProps {
  character: 'child' | 'elderly' | 'homemaker';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const characterImages = {
  child: "/child-avatar.png", // This is a placeholder path
  elderly: "/elderly-avatar.png", // This is a placeholder path
  homemaker: "/homemaker-avatar.png" // This is a placeholder path
};

const characterNames = {
  child: "Chhota Dost",
  elderly: "Mitraji",
  homemaker: "GharSakhi"
};

const CharacterAvatar = ({ character, className, size = 'md' }: CharacterAvatarProps) => {
  // Fallback to a placeholder if image isn't available
  const imageSrc = characterImages[character] || "https://via.placeholder.com/150";
  
  return (
    <div className={cn('flex flex-col items-center', className)}>
      <Avatar 
        src={imageSrc} 
        alt={characterNames[character]} 
        size={size}
        className={cn(
          'animate-float',
          character === 'child' && 'border-4 border-assist-yellow',
          character === 'elderly' && 'border-4 border-assist-teal',
          character === 'homemaker' && 'border-4 border-assist-pink'
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
