
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import CharacterAvatar from '@/components/CharacterAvatar';
import { ArrowRight, Search, MessageCircle, Home } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  const handlePathSelect = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section */}
      <header className="w-full py-10 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-assist-blue via-assist-purple to-assist-pink text-transparent bg-clip-text">
              AssistSphere
            </h1>
            <p className="text-gray-400">Your personalized assistance companion</p>
          </div>
          
          <GlassCard className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
              Choose your personalized journey
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Child Journey */}
              <GlassCard 
                className="flex flex-col items-center p-6 cursor-pointer hover:scale-105 transition-transform"
                glowing={true}
                theme="children"
                onClick={() => handlePathSelect('/child')}
              >
                <CharacterAvatar character="child" size="lg" />
                <h3 className="text-xl font-medium mt-4 text-assist-yellow">Chhota Dost</h3>
                <p className="text-gray-400 text-sm mt-2 text-center">Fun learning & interactive stories for kids</p>
                <GlassButton 
                  className="mt-4 bg-assist-yellow/10 text-assist-yellow"
                  onClick={() => handlePathSelect('/child')}
                >
                  Start <ArrowRight className="ml-2 h-4 w-4" />
                </GlassButton>
              </GlassCard>
              
              {/* Elderly Journey */}
              <GlassCard 
                className="flex flex-col items-center p-6 cursor-pointer hover:scale-105 transition-transform"
                glowing={true}
                theme="elderly"
                onClick={() => handlePathSelect('/elderly')}
              >
                <CharacterAvatar character="elderly" size="lg" />
                <h3 className="text-xl font-medium mt-4 text-assist-teal">Mitraji</h3>
                <p className="text-gray-400 text-sm mt-2 text-center">Simple, accessible support for seniors</p>
                <GlassButton 
                  className="mt-4 bg-assist-teal/10 text-assist-teal"
                  onClick={() => handlePathSelect('/elderly')}
                >
                  Start <ArrowRight className="ml-2 h-4 w-4" />
                </GlassButton>
              </GlassCard>
              
              {/* Homemaker Journey */}
              <GlassCard 
                className="flex flex-col items-center p-6 cursor-pointer hover:scale-105 transition-transform"
                glowing={true}
                theme="homemaker"
                onClick={() => handlePathSelect('/homemaker')}
              >
                <CharacterAvatar character="homemaker" size="lg" />
                <h3 className="text-xl font-medium mt-4 text-assist-pink">GharSakhi</h3>
                <p className="text-gray-400 text-sm mt-2 text-center">Home management & daily task assistance</p>
                <GlassButton 
                  className="mt-4 bg-assist-pink/10 text-assist-pink"
                  onClick={() => handlePathSelect('/homemaker')}
                >
                  Start <ArrowRight className="ml-2 h-4 w-4" />
                </GlassButton>
              </GlassCard>
            </div>
          </GlassCard>
        </div>
      </header>
      
      {/* Features section */}
      <section className="flex-grow w-full py-10 px-6">
        <div className="container mx-auto">
          <GlassCard className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Intelligent Assistants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-assist-blue/20 flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-assist-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2">Smart Search</h3>
                <p className="text-gray-400 text-center">Intelligent searching tailored to your needs</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-assist-purple/20 flex items-center justify-center mb-4">
                  <MessageCircle className="h-8 w-8 text-assist-purple" />
                </div>
                <h3 className="text-lg font-medium mb-2">Personalized Chat</h3>
                <p className="text-gray-400 text-center">Context-aware conversations that understand you</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-assist-pink/20 flex items-center justify-center mb-4">
                  <Home className="h-8 w-8 text-assist-pink" />
                </div>
                <h3 className="text-lg font-medium mb-2">Voice Control</h3>
                <p className="text-gray-400 text-center">Handsfree assistance with natural voice commands</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer with chat input */}
      <footer className="w-full py-4 px-6">
        <div className="container mx-auto">
          <GlassCard className="p-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask me anything..." 
                className="w-full bg-black/30 border border-white/10 rounded-full px-6 py-3 pr-12 text-white outline-none focus:ring-2 focus:ring-assist-blue/50"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-assist-blue rounded-full p-2">
                <MessageCircle className="h-5 w-5 text-white" />
              </button>
            </div>
          </GlassCard>
        </div>
      </footer>
    </div>
  );
};

export default Index;
