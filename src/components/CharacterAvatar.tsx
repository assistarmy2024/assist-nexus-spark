
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Avatar from './Avatar';
import { Home, BrainCog, Lightbulb, Bot, Sparkles } from 'lucide-react';

interface CharacterAvatarProps {
  character: 'children' | 'child' | 'elderly' | 'homemaker';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showName?: boolean;
  animated?: boolean;
}

const characterFallbacks = {
  children: <BrainCog className="h-full w-full p-2 text-blue-400" />,
  child: <BrainCog className="h-full w-full p-2 text-blue-400" />,
  elderly: <Lightbulb className="h-full w-full p-2 text-teal-400" />,
  homemaker: <Home className="h-full w-full p-2 text-indigo-400" />
};

const characterNames = {
  children: "KidBot",
  child: "KidBot",
  elderly: "ElderAssist",
  homemaker: "HomeCompanion"
};

const characterGradients = {
  children: "from-blue-400 to-indigo-600",
  child: "from-blue-400 to-indigo-600",
  elderly: "from-teal-400 to-blue-600",
  homemaker: "from-indigo-400 to-purple-600"
};

const CharacterAvatar = ({ character, className, size = 'md', showName = true, animated = false }: CharacterAvatarProps) => {
  // Normalize character prop to ensure both 'child' and 'children' map to the same visual representation
  const normalizedCharacter = character === 'child' ? 'children' : character;
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add a small delay to trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div 
      className={cn('flex flex-col items-center', 
        className,
        isVisible ? 'opacity-100' : 'opacity-0',
        'transition-all duration-300'
      )}
    >
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={cn(
          "absolute -inset-2 rounded-full blur-md opacity-40 bg-gradient-to-br",
          characterGradients[character],
          isHovered && "opacity-60 duration-300"
        )}></div>
        <div className={cn(
          "rounded-full overflow-hidden flex items-center justify-center",
          size === 'sm' ? 'w-12 h-12' : 
          size === 'md' ? 'w-20 h-20' : 
          size === 'lg' ? 'w-32 h-32' : 
          'w-40 h-40',
          'border-2 shadow-lg transition-all duration-300',
          normalizedCharacter === 'children' ? 'border-blue-500 shadow-blue-500/30 bg-gradient-to-br from-blue-500/20 to-indigo-500/20' : 
          normalizedCharacter === 'elderly' ? 'border-teal-500 shadow-teal-500/30 bg-gradient-to-br from-teal-500/20 to-blue-500/20' : 
          'border-indigo-500 shadow-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-purple-500/20',
          isHovered && "transform scale-[1.03]"
        )}>
          <div className={cn(
            "w-full h-full flex items-center justify-center p-3",
            animated && "animate-pulse",
            isHovered && "scale-105 transition-transform duration-300"
          )}>
            {characterFallbacks[character]}
          </div>
        </div>
      </div>
      {showName && (
        <span className={cn(
          'mt-2 font-bold text-lg',
          normalizedCharacter === 'children' ? 'text-blue-400' : 
          normalizedCharacter === 'elderly' ? 'text-teal-400' : 
          'text-indigo-400'
        )}>
          {characterNames[character]}
        </span>
      )}
    </div>
  );
};

export default CharacterAvatar;
