
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import CharacterAvatar from '@/components/CharacterAvatar';
import { ArrowRight, MessageCircle, Sparkles, Shield, Users } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
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
                <div className="absolute -inset-1 bg-gradient-to-r from-assist-blue via-assist-purple to-assist-pink rounded-full blur"></div>
                <div className="relative px-6 py-3 bg-[#070B34]/80 backdrop-blur-md rounded-full">
                  <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-assist-blue via-assist-purple to-assist-pink text-transparent bg-clip-text">
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
              <div className="relative group" onClick={() => handlePathSelect('/child')}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-pulse-gentle"></div>
                <div className="relative flex flex-col items-center p-6 bg-gradient-to-br from-[#101643]/80 to-[#0F2357]/90 backdrop-blur-md rounded-2xl border border-blue-500/20 shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-blue-400/20 cursor-pointer h-full">
                  <div className="p-3 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full mb-4 w-40 h-40 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/6092619e-e957-4c21-b480-20454027a7e2.png" 
                      alt="Child Assistant" 
                      className="w-36 h-36 object-contain transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">KidBot</h3>
                  <p className="text-gray-300 text-sm text-center">Fun learning & interactive stories for kids</p>
                  <div className="mt-4 w-full">
                    <GlassButton 
                      className="w-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-white border border-blue-500/30"
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
              <div className="relative group" onClick={() => handlePathSelect('/elderly')}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-pulse-gentle"></div>
                <div className="relative flex flex-col items-center p-6 bg-gradient-to-br from-[#153346]/80 to-[#0F2357]/90 backdrop-blur-md rounded-2xl border border-teal-500/20 shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-teal-400/20 cursor-pointer h-full">
                  <div className="p-3 bg-gradient-to-br from-teal-400/20 to-blue-600/20 rounded-full mb-4 w-40 h-40 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/90dbbc65-0863-4336-be06-5bb181d34086.png" 
                      alt="Elderly Assistant" 
                      className="w-36 h-36 object-contain transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">ElderAssist</h3>
                  <p className="text-gray-300 text-sm text-center">Simple, accessible support for seniors</p>
                  <div className="mt-4 w-full">
                    <GlassButton 
                      className="w-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-white border border-teal-500/30"
                      variant="neon"
                      icon={<ArrowRight className="h-4 w-4" />}
                      iconPosition="right"
                    >
                      Start
                    </GlassButton>
                  </div>
                </div>
              </div>
              
              {/* Homemaker Journey */}
              <div className="relative group" onClick={() => handlePathSelect('/homemaker')}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-pulse-gentle"></div>
                <div className="relative flex flex-col items-center p-6 bg-gradient-to-br from-[#2D1434]/80 to-[#1F1346]/90 backdrop-blur-md rounded-2xl border border-pink-500/20 shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-pink-400/20 cursor-pointer h-full">
                  <div className="p-3 bg-gradient-to-br from-pink-400/20 to-purple-600/20 rounded-full mb-4 w-40 h-40 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/e6e6ee8f-a56b-41f0-9f84-b710bc57526c.png" 
                      alt="Homemaker Assistant" 
                      className="w-36 h-36 object-contain transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">HomeCompanion</h3>
                  <p className="text-gray-300 text-sm text-center">Home management & daily task assistance</p>
                  <div className="mt-4 w-full">
                    <GlassButton 
                      className="w-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white border border-pink-500/30"
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
          <GlassCard className="mb-10 p-8" is3D={true}>
            <h2 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-assist-blue to-assist-purple text-transparent bg-clip-text">
              Our Intelligent Assistants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-assist-blue/20 to-assist-purple/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-assist-blue/30 shadow-lg shadow-assist-blue/10 group-hover:shadow-assist-blue/30">
                  <Sparkles className="h-10 w-10 text-assist-blue" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-blue">Smart Search</h3>
                <p className="text-gray-400 text-center">Intelligent searching tailored to your needs</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-assist-purple/20 to-assist-pink/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-assist-purple/30 shadow-lg shadow-assist-purple/10 group-hover:shadow-assist-purple/30">
                  <MessageCircle className="h-10 w-10 text-assist-purple" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-purple">Personalized Chat</h3>
                <p className="text-gray-400 text-center">Context-aware conversations that understand you</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-assist-pink/20 to-assist-orange/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-assist-pink/30 shadow-lg shadow-assist-pink/10 group-hover:shadow-assist-pink/30">
                  <Shield className="h-10 w-10 text-assist-pink" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-pink">Private & Secure</h3>
                <p className="text-gray-400 text-center">Your data stays private with advanced security</p>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 shadow-[0_8px_32px_rgba(31,41,55,0.3)] border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between p-6">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">Join the AssistSphere family</h3>
                <p className="text-gray-300">Experience personalized AI assistance designed for every member of your family.</p>
              </div>
              <div>
                <GlassButton 
                  variant="metallic" 
                  size="lg"
                  className="shadow-lg bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-white/20 hover:border-white/30" 
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
