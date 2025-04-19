import React from 'react';
import { cn } from '@/lib/utils';
import Avatar from './Avatar';
import { Home, BrainCog, Lightbulb, Bot, Sparkles } from 'lucide-react';

interface CharacterAvatarProps {
  character: 'child' | 'elderly' | 'homemaker';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showName?: boolean;
  animated?: boolean;
}

const characterFallbacks = {
  child: <BrainCog className="h-full w-full p-2 text-blue-400" />,
  elderly: <Lightbulb className="h-full w-full p-2 text-teal-400" />,
  homemaker: <Home className="h-full w-full p-2 text-indigo-400" />
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
  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div className="relative">
        <div className={cn(
          "absolute -inset-2 rounded-full blur-md opacity-50 animate-pulse-gentle bg-gradient-to-br",
          character === 'child' ? "from-blue-400 to-indigo-600" : 
          character === 'elderly' ? "from-teal-400 to-blue-600" : 
          "from-indigo-400 to-purple-600"
        )}></div>
        <div className={cn(
          "rounded-full overflow-hidden flex items-center justify-center",
          size === 'sm' ? 'w-12 h-12' : 
          size === 'md' ? 'w-20 h-20' : 
          size === 'lg' ? 'w-32 h-32' : 
          'w-40 h-40',
          'border-2 shadow-xl transition-all duration-300',
          character === 'child' ? 'border-blue-500 shadow-blue-500/30 bg-gradient-to-br from-blue-500/20 to-indigo-500/20' : 
          character === 'elderly' ? 'border-teal-500 shadow-teal-500/30 bg-gradient-to-br from-teal-500/20 to-blue-500/20' : 
          'border-indigo-500 shadow-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-purple-500/20'
        )}>
          <div className={cn(
            "w-full h-full flex items-center justify-center p-3",
            animated && "animate-float"
          )}>
            {characterFallbacks[character]}
          </div>
        </div>
      </div>
      {showName && (
        <span className={cn(
          'mt-2 font-bold text-lg',
          character === 'child' ? 'text-blue-400' : 
          character === 'elderly' ? 'text-teal-400' : 
          'text-indigo-400'
        )}>
          {characterNames[character]}
        </span>
      )}
    </div>
  );
};

export default CharacterAvatar;
