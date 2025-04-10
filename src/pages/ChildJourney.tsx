
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import CharacterAvatar from '@/components/CharacterAvatar';
import { ArrowLeft, Book, Gamepad2, Video, Brain, Star } from 'lucide-react';

const ChildJourney = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-radial from-assist-yellow/10 to-transparent">
      {/* Header */}
      <header className="w-full py-6 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <GlassButton 
              variant="ghost" 
              className="text-white" 
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </GlassButton>
            <div className="flex items-center">
              <CharacterAvatar character="child" size="sm" />
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow w-full py-6 px-6">
        <div className="container mx-auto">
          <GlassCard 
            theme="children" 
            glowing={true} 
            className="mb-8 text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-assist-yellow">
                  Welcome to Chhota Dost!
                </h1>
                <p className="text-gray-300 mb-4">
                  Your fun learning companion that tells stories, plays games and helps with homework!
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <CharacterAvatar character="child" size="xl" />
              </div>
            </div>
          </GlassCard>
          
          <h2 className="text-2xl font-semibold mb-6 text-center text-assist-yellow">
            What would you like to do today?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <GlassCard className="hover:scale-105 transition-transform cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-assist-yellow/20 flex items-center justify-center mb-4">
                  <Book className="h-8 w-8 text-assist-yellow" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-yellow">Story Time</h3>
                <p className="text-gray-400 text-center">Listen to exciting stories and adventures</p>
              </div>
            </GlassCard>
            
            <GlassCard className="hover:scale-105 transition-transform cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-assist-yellow/20 flex items-center justify-center mb-4">
                  <Gamepad2 className="h-8 w-8 text-assist-yellow" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-yellow">Fun Games</h3>
                <p className="text-gray-400 text-center">Play educational games that help you learn</p>
              </div>
            </GlassCard>
            
            <GlassCard className="hover:scale-105 transition-transform cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-assist-yellow/20 flex items-center justify-center mb-4">
                  <Video className="h-8 w-8 text-assist-yellow" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-yellow">Fun Videos</h3>
                <p className="text-gray-400 text-center">Watch entertaining educational videos</p>
              </div>
            </GlassCard>
            
            <GlassCard className="hover:scale-105 transition-transform cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-assist-yellow/20 flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-assist-yellow" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-yellow">Homework Help</h3>
                <p className="text-gray-400 text-center">Get help with your school assignments</p>
              </div>
            </GlassCard>
            
            <GlassCard className="hover:scale-105 transition-transform cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-assist-yellow/20 flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-assist-yellow" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-yellow">Achievements</h3>
                <p className="text-gray-400 text-center">See your stars and badges from learning</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-4 px-6">
        <div className="container mx-auto">
          <GlassCard className="p-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask Chhota Dost..." 
                className="w-full bg-black/30 border border-assist-yellow/30 rounded-full px-6 py-3 pr-12 text-white outline-none focus:ring-2 focus:ring-assist-yellow/50"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-assist-yellow rounded-full p-2">
                <div className="h-5 w-5 text-black flex items-center justify-center">
                  🎭
                </div>
              </button>
            </div>
          </GlassCard>
        </div>
      </footer>
    </div>
  );
};

export default ChildJourney;
