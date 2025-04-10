
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import CharacterAvatar from '@/components/CharacterAvatar';
import { ArrowRight, Search, MessageCircle, Home, Sparkles, Shield, Users } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  const handlePathSelect = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/80">
      {/* Hero section */}
      <header className="w-full py-10 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-assist-blue via-assist-purple to-assist-pink rounded-full blur"></div>
                <div className="relative px-6 py-3 bg-background rounded-full">
                  <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-assist-blue via-assist-purple to-assist-pink text-transparent bg-clip-text">
                    AssistSphere
                  </h1>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-lg">Your personalized assistance companion</p>
          </div>
          
          <GlassCard className="max-w-4xl mx-auto" is3D={true} metallic={true}>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
              Choose your personalized journey
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Child Journey */}
              <GlassCard 
                className="flex flex-col items-center p-6"
                glowing={true}
                theme="children"
                is3D={true}
                onClick={() => handlePathSelect('/child')}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-assist-yellow/20 rounded-full blur-md animate-pulse-gentle"></div>
                  <CharacterAvatar character="child" size="lg" />
                </div>
                <h3 className="text-xl font-medium mt-4 text-assist-yellow">Chhota Dost</h3>
                <p className="text-gray-400 text-sm mt-2 text-center">Fun learning & interactive stories for kids</p>
                <GlassButton 
                  className="mt-4 bg-assist-yellow/10 text-assist-yellow"
                  variant="neon"
                  theme="children"
                  icon={<ArrowRight className="h-4 w-4" />}
                  iconPosition="right"
                  onClick={() => handlePathSelect('/child')}
                >
                  Start
                </GlassButton>
              </GlassCard>
              
              {/* Elderly Journey */}
              <GlassCard 
                className="flex flex-col items-center p-6"
                glowing={true}
                theme="elderly"
                is3D={true}
                onClick={() => handlePathSelect('/elderly')}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-assist-teal/20 rounded-full blur-md animate-pulse-gentle"></div>
                  <CharacterAvatar character="elderly" size="lg" />
                </div>
                <h3 className="text-xl font-medium mt-4 text-assist-teal">Mitraji</h3>
                <p className="text-gray-400 text-sm mt-2 text-center">Simple, accessible support for seniors</p>
                <GlassButton 
                  className="mt-4 bg-assist-teal/10 text-assist-teal"
                  variant="neon"
                  theme="elderly"
                  icon={<ArrowRight className="h-4 w-4" />}
                  iconPosition="right"
                  onClick={() => handlePathSelect('/elderly')}
                >
                  Start
                </GlassButton>
              </GlassCard>
              
              {/* Homemaker Journey */}
              <GlassCard 
                className="flex flex-col items-center p-6"
                glowing={true}
                theme="homemaker"
                is3D={true}
                onClick={() => handlePathSelect('/homemaker')}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-assist-pink/20 rounded-full blur-md animate-pulse-gentle"></div>
                  <CharacterAvatar character="homemaker" size="lg" />
                </div>
                <h3 className="text-xl font-medium mt-4 text-assist-pink">GharSakhi</h3>
                <p className="text-gray-400 text-sm mt-2 text-center">Home management & daily task assistance</p>
                <GlassButton 
                  className="mt-4 bg-assist-pink/10 text-assist-pink"
                  variant="neon"
                  theme="homemaker"
                  icon={<ArrowRight className="h-4 w-4" />}
                  iconPosition="right"
                  onClick={() => handlePathSelect('/homemaker')}
                >
                  Start
                </GlassButton>
              </GlassCard>
            </div>
          </GlassCard>
        </div>
      </header>
      
      {/* Features section */}
      <section className="flex-grow w-full py-10 px-6">
        <div className="container mx-auto">
          <GlassCard className="mb-10 p-8" is3D={true}>
            <h2 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-assist-blue to-assist-purple text-transparent bg-clip-text">
              Our Intelligent Assistants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full bg-assist-blue/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-assist-blue/20">
                  <Sparkles className="h-10 w-10 text-assist-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-blue">Smart Search</h3>
                <p className="text-gray-400 text-center">Intelligent searching tailored to your needs</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full bg-assist-purple/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-assist-purple/20">
                  <MessageCircle className="h-10 w-10 text-assist-purple" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-purple">Personalized Chat</h3>
                <p className="text-gray-400 text-center">Context-aware conversations that understand you</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full bg-assist-pink/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-assist-pink/20">
                  <Shield className="h-10 w-10 text-assist-pink" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-pink">Private & Secure</h3>
                <p className="text-gray-400 text-center">Your data stays private with advanced security</p>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="metallic-gradient neo-shadow">
            <div className="flex flex-col md:flex-row items-center justify-between p-6">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">Join the AssistSphere family</h3>
                <p className="text-gray-300">Experience personalized AI assistance designed for every member of your family.</p>
              </div>
              <div>
                <GlassButton 
                  variant="metallic" 
                  size="lg"
                  className="shadow-lg" 
                  icon={<Users className="h-5 w-5" />}
                >
                  Learn More
                </GlassButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer with chat input */}
      <footer className="w-full py-6 px-6">
        <div className="container mx-auto">
          <GlassCard className="p-6" metallic={true}>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask me anything..." 
                className="w-full bg-black/30 border border-white/20 rounded-full px-6 py-4 pr-16 text-white outline-none focus:ring-2 focus:ring-assist-blue/50 shadow-inner"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-assist-blue to-assist-purple rounded-full p-3 shadow-lg hover:shadow-assist-blue/30 transition duration-300">
                <MessageCircle className="h-6 w-6 text-white" />
              </button>
            </div>
          </GlassCard>
        </div>
      </footer>
    </div>
  );
};

export default Index;
