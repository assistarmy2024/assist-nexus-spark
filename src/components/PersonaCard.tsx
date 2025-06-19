
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export type PersonaType = 'children' | 'elderly' | 'homemaker' | 'student' | 'healthcare' | 'business';

interface PersonaCardProps {
  type: PersonaType;
  title: string;
  description: string;
  route: string;
  className?: string;
  icon: React.ReactNode;
  delay?: number;
}

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

  const getGradient = () => {
    switch (type) {
      case 'children':
        return 'from-blue-600/20 to-blue-800/10 border-blue-500/20';
      case 'elderly':
        return 'from-teal-600/20 to-teal-800/10 border-teal-500/20';
      case 'homemaker':
        return 'from-purple-600/20 to-purple-800/10 border-purple-500/20';
      default:
        return 'from-gray-600/20 to-gray-800/10 border-gray-500/20';
    }
  };

  const getIconColor = () => {
    switch (type) {
      case 'children':
        return 'text-blue-400';
      case 'elderly':
        return 'text-teal-400';
      case 'homemaker':
        return 'text-purple-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className={cn(
        "flex flex-col items-center p-8 text-center rounded-3xl backdrop-blur-md transition-all duration-500 cursor-pointer border border-white/10 overflow-hidden bg-gradient-to-br",
        getGradient(),
        isHovered ? 'shadow-xl transform scale-105' : 'shadow-lg',
        !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0',
        className
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={cn(
        "relative w-24 h-24 mb-6 rounded-full flex items-center justify-center transition-all duration-300",
        isHovered ? 'transform scale-110' : ''
      )}>
        <div className={cn(
          "absolute inset-0 rounded-full opacity-50 blur-md",
          type === 'children' ? 'bg-blue-400' : 
          type === 'elderly' ? 'bg-teal-400' : 
          'bg-purple-400'
        )}></div>
        <div className={cn(
          "relative z-10 w-full h-full flex items-center justify-center",
          getIconColor()
        )}>
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-white/80">{description}</p>
    </motion.div>
  );
}
