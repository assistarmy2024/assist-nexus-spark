
import React, { useState, useEffect } from 'react';
import { GroupCard } from '@/components/GroupCard';
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // First animate the header
    const timerHeader = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    // Then animate the cards with a slight delay
    const timerCards = setTimeout(() => {
      setCardsVisible(true);
    }, 800);
    
    return () => {
      clearTimeout(timerHeader);
      clearTimeout(timerCards);
    };
  }, []);

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#03071E] to-[#1E3A8A] text-white flex items-center justify-center p-4 overflow-auto">
      <div className="container mx-auto max-w-7xl py-12">
        <header className={`text-center mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="relative inline-block mb-4">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 blur-lg rounded-full animate-pulse-gentle"></div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-400 text-transparent bg-clip-text relative z-10">
              AssistAI <Sparkles className="inline-block h-8 w-8 ml-2 text-blue-300" />
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Your personalized AI assistant for every stage of life, designed to enhance your daily experience.
          </p>
        </header>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 transition-all duration-700 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <GroupCard
            groupKey="children"
            title="KidBot"
            className={`transition-all duration-500 delay-100 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer`}
          />
          
          <GroupCard
            groupKey="elderly"
            title="ElderAssist"
            className={`transition-all duration-500 delay-200 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20 cursor-pointer`}
          />
          
          <GroupCard
            groupKey="homemaker"
            title="HomeCompanion"
            className={`transition-all duration-500 delay-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 cursor-pointer`}
          />
        </div>
        
        <footer className={`mt-20 text-center text-sm text-gray-400 transition-all duration-700 delay-500 ${cardsVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p>© 2025 AssistAI - Enhancing lives with intelligent assistance</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
