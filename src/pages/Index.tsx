
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import CharacterAvatar from '@/components/CharacterAvatar';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<'children' | 'elderly' | 'homemaker' | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Add a small delay to trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#03071E] to-[#1E3A8A] text-white flex items-center justify-center p-4 overflow-auto">
      <div className="container mx-auto max-w-5xl py-12">
        <header className={`text-center mb-12 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to <span className="text-blue-400">AssistAI</span> <Sparkles className="inline-block h-8 w-8 ml-2 animate-pulse" />
          </h1>
          <p className="text-lg text-gray-300">
            Your personalized AI assistant for every stage of life.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Child Card */}
          <div 
            className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
            onClick={() => navigate('/child')}
            onMouseEnter={() => setHoveredCard('children')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <GlassCard className="h-full" is3D={true} hoverEffect={true}>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="relative flex flex-col items-center p-6 bg-gradient-to-br from-[#101643]/80 to-[#0F2357]/90 backdrop-blur-md rounded-2xl border border-blue-500/20 shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-blue-400/20 h-full">
                  <div className="p-3 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full mb-4 w-32 md:w-40 h-32 md:h-40 flex items-center justify-center transform transition-transform hover:scale-105">
                    <CharacterAvatar 
                      character="children" 
                      size="lg" 
                      showName={false} 
                      animated={hoveredCard === 'children' || isLoaded}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">KidBot</h3>
                  <p className="text-gray-300 text-center">
                    Engaging and educational assistance for children.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Elderly Card */}
          <div 
            className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
            onClick={() => navigate('/elderly')}
            onMouseEnter={() => setHoveredCard('elderly')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <GlassCard className="h-full" is3D={true} hoverEffect={true}>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="relative flex flex-col items-center p-6 bg-gradient-to-br from-[#132B2B]/80 to-[#003636]/90 backdrop-blur-md rounded-2xl border border-teal-500/20 shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-teal-400/20 h-full">
                  <div className="p-3 bg-gradient-to-br from-teal-400/20 to-blue-600/20 rounded-full mb-4 w-32 md:w-40 h-32 md:h-40 flex items-center justify-center transform transition-transform hover:scale-105">
                    <CharacterAvatar 
                      character="elderly" 
                      size="lg" 
                      showName={false} 
                      animated={hoveredCard === 'elderly' || isLoaded}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">ElderAssist</h3>
                  <p className="text-gray-300 text-center">
                    Support and companionship for elderly individuals.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Homemaker Card */}
          <div 
            className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
            onClick={() => navigate('/homemaker')}
            onMouseEnter={() => setHoveredCard('homemaker')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <GlassCard className="h-full" is3D={true} hoverEffect={true}>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="relative flex flex-col items-center p-6 bg-gradient-to-br from-[#311147]/80 to-[#4B0942]/90 backdrop-blur-md rounded-2xl border border-pink-500/20 shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-pink-400/20 h-full">
                  <div className="p-3 bg-gradient-to-br from-pink-400/20 to-purple-600/20 rounded-full mb-4 w-32 md:w-40 h-32 md:h-40 flex items-center justify-center transform transition-transform hover:scale-105">
                    <CharacterAvatar 
                      character="homemaker" 
                      size="lg" 
                      showName={false} 
                      animated={hoveredCard === 'homemaker' || isLoaded}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">HomeCompanion</h3>
                  <p className="text-gray-300 text-center">
                    Efficient home management and lifestyle assistance.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
