
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CharacterAvatar from './CharacterAvatar';

export type PersonaType = 'children' | 'elderly' | 'homemaker' | 'student' | 'healthcare' | 'business';

interface PersonaCardProps {
  type: PersonaType;
  title: string;
  description: string;
  route: string;
  className?: string;
  icon?: React.ReactNode;
  delay?: number;
}

const getGradient = (type: PersonaType) => {
  switch (type) {
    case 'children':
      return 'from-blue-600/30 to-indigo-600/10 hover:from-blue-600/40 hover:to-indigo-600/20 border-blue-500/20';
    case 'elderly':
      return 'from-teal-600/30 to-blue-600/10 hover:from-teal-600/40 hover:to-blue-600/20 border-teal-500/20';
    case 'homemaker':
      return 'from-indigo-600/30 to-purple-600/10 hover:from-indigo-600/40 hover:to-purple-600/20 border-indigo-500/20';
    case 'student':
      return 'from-violet-600/30 to-blue-600/10 hover:from-violet-600/40 hover:to-blue-600/20 border-violet-500/20';
    case 'healthcare':
      return 'from-red-600/30 to-pink-600/10 hover:from-red-600/40 hover:to-pink-600/20 border-red-500/20';
    case 'business':
      return 'from-amber-600/30 to-orange-600/10 hover:from-amber-600/40 hover:to-orange-600/20 border-amber-500/20';
    default:
      return 'from-gray-600/30 to-slate-600/10 hover:from-gray-600/40 hover:to-slate-600/20 border-gray-500/20';
  }
};

export function PersonaCard({ 
  type, 
  title, 
  description, 
  route,
  className,
  icon,
  delay = 0
}: PersonaCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300 + delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div 
      className={cn(
        "flex flex-col items-center p-6 text-center rounded-xl backdrop-blur-lg transition-all duration-500 cursor-pointer border border-white/10",
        `bg-gradient-to-br ${getGradient(type)}`,
        isHovered ? 'transform scale-105 shadow-lg' : '',
        !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0',
        className
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative transform transition-transform duration-500">
        <div className={cn(
          "absolute -inset-3 blur-xl opacity-30 rounded-full transition-all duration-500",
          type === 'children' ? 'bg-blue-500' : 
          type === 'elderly' ? 'bg-teal-500' : 
          type === 'homemaker' ? 'bg-indigo-500' :
          type === 'student' ? 'bg-violet-500' :
          type === 'healthcare' ? 'bg-red-500' :
          type === 'business' ? 'bg-amber-500' :
          'bg-gray-500',
          isHovered ? 'opacity-70 scale-110' : 'opacity-30'
        )}></div>
        <div className="flex items-center justify-center w-20 h-20">
          {icon || <Sparkles className="w-10 h-10 text-white" />}
        </div>
      </div>
      <h3 className={cn(
        "mt-4 mb-1 text-xl font-bold transition-all duration-500",
        type === 'children' ? 'text-blue-400' : 
        type === 'elderly' ? 'text-teal-400' : 
        type === 'homemaker' ? 'text-indigo-400' :
        type === 'student' ? 'text-violet-400' :
        type === 'healthcare' ? 'text-red-400' :
        type === 'business' ? 'text-amber-400' :
        'text-gray-400',
        isHovered ? 'transform scale-110' : ''
      )}>{title}</h3>
      <p className="text-sm text-white/75 m-0">{description}</p>
    </div>
  );
}
