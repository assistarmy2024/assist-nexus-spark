import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import CharacterAvatar from '@/components/CharacterAvatar';
import { ArrowRight, MessageCircle, Sparkles, Shield, Users, Brain, Home, Lightbulb, Rocket, Bot, Zap, Globe, Blocks, BookOpen, HeartPulse, ShoppingCart } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const handlePathSelect = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#070B34] to-[#0A1128]">
      {/* Hero section */}
      <header className="w-full py-10 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full blur"></div>
                <div className="relative px-6 py-3 bg-[#070B34]/80 backdrop-blur-md rounded-full">
                  <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
                    AssistSphere
                  </h1>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-lg">Your intelligent digital companion ecosystem</p>
          </div>
          
          <GlassCard className="max-w-4xl mx-auto" is3D={true} metallic={true}>
            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center">
              Choose your digital assistant
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Child Journey */}
              <div 
                className="relative group transform transition hover:scale-105" 
                onClick={() => handlePathSelect('/child')}
                onMouseEnter={() => setHoveredCard('child')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-pulse-gentle"></div>
                <div className="relative flex flex-col items-center p-6 bg-gradient-to-br from-[#101643]/80 to-[#0F2357]/90 backdrop-blur-md rounded-2xl border border-blue-500/20 shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-blue-400/20 cursor-pointer h-full">
                  <div className="p-3 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full mb-4 w-40 h-40 flex items-center justify-center transform transition-transform hover:scale-105">
                    <CharacterAvatar 
                      character="children" 
                      size="lg" 
                      showName={false} 
                      animated={hoveredCard === 'children'}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">KidBot</h3>
                  <p className="text-gray-300 text-sm text-center">Fun learning & interactive stories for kids</p>
                  <div className="mt-4 w-full">
                    <GlassButton 
                      className="w-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-white border border-blue-500/30 btn-3d"
                      variant="neon"
                      icon={<ArrowRight className="h-4 w-4" />}
                      iconPosition="right"
                    >
                      Start
                    </GlassButton>
                  </div>
                </div>
              </div>
              
              {/* Elderly Journey */}
              <div 
                className="relative group transform transition hover:scale-105" 
                onClick={() => handlePathSelect('/elderly')}
                onMouseEnter={() => setHoveredCard('elderly')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-pulse-gentle"></div>
                <div className="relative flex flex-col items-center p-6 bg-gradient-to-br from-[#153346]/80 to-[#0F2357]/90 backdrop-blur-md rounded-2xl border border-teal-500/20 shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-teal-400/20 cursor-pointer h-full">
                  <div className="p-3 bg-gradient-to-br from-teal-400/20 to-blue-600/20 rounded-full mb-4 w-40 h-40 flex items-center justify-center transform transition-transform hover:scale-105">
                    <CharacterAvatar 
                      character="elderly" 
                      size="lg" 
                      showName={false}
                      animated={hoveredCard === 'elderly'}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">ElderAssist</h3>
                  <p className="text-gray-300 text-sm text-center">Simple, accessible support for seniors</p>
                  <div className="mt-4 w-full">
                    <GlassButton 
                      className="w-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-white border border-teal-500/30 btn-3d"
                      variant="neon"
                      icon={<ArrowRight className="h-4 w-4" />}
                      iconPosition="right"
                    >
                      Start
                    </GlassButton>
                  </div>
                </div>
              </div>
              
              {/* HomeCompanion Journey */}
              <div 
                className="relative group transform transition hover:scale-105" 
                onClick={() => handlePathSelect('/homemaker')}
                onMouseEnter={() => setHoveredCard('homemaker')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-pulse-gentle"></div>
                <div className="relative flex flex-col items-center p-6 bg-gradient-to-br from-[#1F1346]/80 to-[#0F1346]/90 backdrop-blur-md rounded-2xl border border-indigo-500/20 shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-indigo-400/20 cursor-pointer h-full">
                  <div className="p-3 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full mb-4 w-40 h-40 flex items-center justify-center transform transition-transform hover:scale-105">
                    <CharacterAvatar 
                      character="homemaker" 
                      size="lg" 
                      showName={false}
                      animated={hoveredCard === 'homemaker'}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">HomeCompanion</h3>
                  <p className="text-gray-300 text-sm text-center">Smart home management & organization</p>
                  <div className="mt-4 w-full">
                    <GlassButton 
                      className="w-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white border border-indigo-500/30 btn-3d"
                      variant="neon"
                      icon={<ArrowRight className="h-4 w-4" />}
                      iconPosition="right"
                    >
                      Start
                    </GlassButton>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </header>
      
      {/* Features section */}
      <section className="flex-grow w-full py-10 px-6">
        <div className="container mx-auto">
          <GlassCard className="mb-10 p-8" is3D={true} glowing={true}>
            <h2 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Our Intelligent Assistants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center group transform transition hover:scale-105">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-600/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-400/30 shadow-lg shadow-blue-400/10 group-hover:shadow-blue-400/30">
                  <Brain className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-blue-400">Smart Learning</h3>
                <p className="text-gray-400 text-center">Personalized learning experiences for all ages</p>
              </div>
              <div className="flex flex-col items-center group transform transition hover:scale-105">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400/20 to-indigo-500/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-400/30 shadow-lg shadow-purple-400/10 group-hover:shadow-purple-400/30">
                  <Bot className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-purple-400">Interactive Experience</h3>
                <p className="text-gray-400 text-center">Immersive 3D virtual companions for real conversations</p>
              </div>
              <div className="flex flex-col items-center group transform transition hover:scale-105">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400/20 to-blue-500/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-400/30 shadow-lg shadow-indigo-400/10 group-hover:shadow-indigo-400/30">
                  <Zap className="h-10 w-10 text-indigo-400" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-indigo-400">Intelligent Help</h3>
                <p className="text-gray-400 text-center">AI-powered assistance tailored to your specific needs</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="flex flex-col items-center group transform transition hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-600/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-400/30">
                  <BookOpen className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-sm font-medium mb-1 text-green-400">Interactive Stories</h3>
              </div>
              <div className="flex flex-col items-center group transform transition hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-600/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-400/30">
                  <HeartPulse className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-sm font-medium mb-1 text-amber-400">Health Monitoring</h3>
              </div>
              <div className="flex flex-col items-center group transform transition hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-400/30">
                  <Blocks className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-sm font-medium mb-1 text-cyan-400">Smart Home</h3>
              </div>
              <div className="flex flex-col items-center group transform transition hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400/20 to-rose-600/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-pink-400/30">
                  <ShoppingCart className="h-8 w-8 text-pink-400" />
                </div>
                <h3 className="text-sm font-medium mb-1 text-pink-400">Auto-Grocery</h3>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 shadow-[0_8px_32px_rgba(31,41,55,0.3)] border border-white/10" is3D={true} metallic={true}>
            <div className="flex flex-col md:flex-row items-center justify-between p-6">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">Join the AssistSphere family</h3>
                <p className="text-gray-300">Experience personalized AI assistance designed for every member of your family.</p>
              </div>
              <div>
                <GlassButton 
                  variant="metallic" 
                  size="lg"
                  className="shadow-lg bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-white/20 hover:border-white/30 btn-3d" 
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
                className="w-full bg-black/30 border border-white/20 rounded-full px-6 py-4 pr-16 text-white outline-none focus:ring-2 focus:ring-blue-500/50 shadow-inner"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    navigate('/homemaker');
                  }
                }}
              />
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 shadow-lg hover:shadow-blue-500/30 transition duration-300"
                onClick={() => navigate('/homemaker')}
              >
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
