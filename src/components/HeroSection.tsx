
import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
  onThemeToggle?: () => void;
  isLoaded?: boolean;
}

const HeroSection = ({ className, onThemeToggle, isLoaded = true }: HeroSectionProps) => {
  return (
    <header className={cn(
      `text-center mb-8 md:mb-16 transition-all duration-700`,
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
      className
    )}>
      <div className="relative inline-block mb-4">
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 blur-lg rounded-full animate-pulse-gentle"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 relative z-10">
          Welcome to <span className="bg-gradient-to-r from-white via-blue-400 to-white text-transparent bg-clip-text">AssistAI</span> <Sparkles className="inline-block h-6 w-6 md:h-8 md:w-8 ml-2 text-blue-300" />
        </h1>
      </div>
      <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
        Your personalized AI assistant for every stage of life.
      </p>
    </header>
  );
};

export default HeroSection;
