
import React from 'react';
import { cn } from '@/lib/utils';
import Avatar from './Avatar';
import { Home, BrainCog, Lightbulb } from 'lucide-react';

interface CharacterAvatarProps {
  character: 'child' | 'elderly' | 'homemaker';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showName?: boolean;
  animated?: boolean;
}

// Updated to use more professional 3D avatar images with transparent backgrounds
const characterImages = {
  child: "/lovable-uploads/610f4704-240f-4beb-afc6-e84478522871.png", // Updated to use 3D kid-friendly avatar
  elderly: "/lovable-uploads/4f8f135a-6243-488c-92ba-c324f470b2a9.png", // Updated to use 3D elderly avatar
  homemaker: "/lovable-uploads/7682db02-e18a-405a-937a-7b7f525828eb.png" // Updated to use 3D gender-neutral home assistant avatar
};

const characterIcons = {
  child: <BrainCog className="h-full w-full p-3 text-blue-400" />,
  elderly: <Lightbulb className="h-full w-full p-3 text-teal-400" />,
  homemaker: <Home className="h-full w-full p-3 text-indigo-400" />
};

const characterAlternatives = {
  child: "👦",
  elderly: "👴",
  homemaker: "🏠"
};

const characterNames = {
  child: "KidBot",
  elderly: "ElderAssist",
  homemaker: "HomeCompanion"
};

const characterGradients = {
  child: "from-blue-400 to-indigo-600",
  elderly: "from-teal-400 to-blue-600",
  homemaker: "from-indigo-400 to-purple-600"
};

const CharacterAvatar = ({ character, className, size = 'md', showName = true, animated = false }: CharacterAvatarProps) => {
  const imageSrc = characterImages[character];
  
  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div className="relative">
        <div className={cn(
          "absolute -inset-2 rounded-full blur-md opacity-50 animate-pulse-gentle bg-gradient-to-br",
          character === 'child' && "from-blue-400 to-indigo-600",
          character === 'elderly' && "from-teal-400 to-blue-600",
          character === 'homemaker' && "from-indigo-400 to-purple-600"
        )}></div>
        <Avatar 
          src={imageSrc} 
          fallback={characterIcons[character] || characterAlternatives[character]}
          alt={characterNames[character]} 
          size={size}
          glow={true}
          animated={animated}
          className={cn(
            'border-2 shadow-xl',
            character === 'child' && 'border-blue-500 shadow-blue-500/30',
            character === 'elderly' && 'border-teal-500 shadow-teal-500/30',
            character === 'homemaker' && 'border-indigo-500 shadow-indigo-500/30'
          )}
        />
      </div>
      {showName && (
        <span className={cn(
          'mt-2 font-bold text-lg',
          character === 'child' && 'text-blue-400',
          character === 'elderly' && 'text-teal-400',
          character === 'homemaker' && 'text-indigo-400'
        )}>
          {characterNames[character]}
        </span>
      )}
    </div>
  );
};

export default CharacterAvatar;
