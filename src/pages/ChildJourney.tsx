
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import CharacterAvatar from '@/components/CharacterAvatar';
import LiveInteraction from '@/components/LiveInteraction';
import { Brain, Gamepad, Book, Video, Headphones, Heart, Shield } from 'lucide-react';
import { games, quizzes, mathExercises, videos, audios } from '@/data/childPortalData';

const ChildJourney = () => {
  const navigate = useNavigate();
  const [showLiveInteraction, setShowLiveInteraction] = useState(false);
  
  return (
    <div className="relative bg-gradient-to-b from-[#1E2A78] to-[#662E9B] min-h-screen overflow-y-auto">
      {/* Header */}
      <header className="w-full px-4 py-4 flex justify-between items-center bg-gradient-to-r from-[#1E2A78]/80 to-[#662E9B]/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
            <Brain className="h-5 w-5 text-blue-400" />
          </div>
          <h1 className="text-xl font-bold text-white">KidBot Portal</h1>
        </div>
        <div className="flex items-center space-x-2">
          <GlassButton 
            variant="ghost" 
            className="text-white"
            size="sm"
          >
            Settings
          </GlassButton>
          <GlassButton 
            onClick={() => navigate('/')}
            variant="outline" 
            className="text-white border-white/20"
            size="sm"
          >
            Exit
          </GlassButton>
        </div>
      </header>
      
      {/* Main Content - Using fixed height and overflow auto to ensure content stays in frame */}
      <main className="container mx-auto px-4 py-6 overflow-y-auto" style={{ height: 'calc(100vh - 160px)' }}>
        {/* Welcome Section */}
        <section className="mb-8">
          <GlassCard 
            className="p-4 md:p-6 border border-blue-500/30 shadow-lg" 
            hoverEffect={false}
            appear="fade"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-4 md:mb-0 md:pr-4">
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-white">
                  Welcome to Your Learning Adventure!
                </h2>
                <p className="text-blue-100 mb-4">
                  Explore games, quizzes, math challenges, videos, and stories—all designed to make learning fun!
                </p>
                <GlassButton 
                  className="bg-blue-500/30 border border-blue-500/50 text-white"
                  onClick={() => setShowLiveInteraction(true)}
                >
                  Start Adventure
                </GlassButton>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <CharacterAvatar character="child" size="lg" animated={false} />
              </div>
            </div>
          </GlassCard>
        </section>
        
        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-white">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button 
              className="bg-gradient-to-br from-purple-600/30 to-purple-800/30 p-4 rounded-xl flex flex-col items-center hover:from-purple-600/40 hover:to-purple-800/40 transition-colors"
              onClick={() => navigate('/child/games')}
            >
              <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
                <Gamepad className="h-7 w-7 text-purple-300" />
              </div>
              <span className="text-white font-medium">Games</span>
            </button>
            
            <button 
              className="bg-gradient-to-br from-blue-600/30 to-blue-800/30 p-4 rounded-xl flex flex-col items-center hover:from-blue-600/40 hover:to-blue-800/40 transition-colors"
              onClick={() => navigate('/child/learning')}
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
                <Book className="h-7 w-7 text-blue-300" />
              </div>
              <span className="text-white font-medium">Learning</span>
            </button>
            
            <button 
              className="bg-gradient-to-br from-emerald-600/30 to-emerald-800/30 p-4 rounded-xl flex flex-col items-center hover:from-emerald-600/40 hover:to-emerald-800/40 transition-colors"
              onClick={() => navigate('/child/health')}
            >
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center mb-2">
                <Heart className="h-7 w-7 text-emerald-300" />
              </div>
              <span className="text-white font-medium">Health</span>
            </button>
            
            <button 
              className="bg-gradient-to-br from-amber-600/30 to-amber-800/30 p-4 rounded-xl flex flex-col items-center hover:from-amber-600/40 hover:to-amber-800/40 transition-colors"
              onClick={() => navigate('/child/help')}
            >
              <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center mb-2">
                <Shield className="h-7 w-7 text-amber-300" />
              </div>
              <span className="text-white font-medium">Help</span>
            </button>
          </div>
        </section>
        
        {/* Feature Cards */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-white">Explore Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <GlassCard 
              className="p-4 flex flex-col items-center text-center" 
              appear="fade" 
              appearDelay={100}
              theme="children"
              hoverEffect={false}
            >
              <div className="mb-3">
                <CharacterAvatar character="child" size="md" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">KidBot</h3>
              <p className="text-blue-100 text-sm mb-4">Your friendly AI companion for learning and playing.</p>
              <GlassButton 
                variant="outline" 
                size="sm"
                className="mt-auto border-blue-500/30 text-blue-100"
                onClick={() => navigate('/child')}
              >
                Explore
              </GlassButton>
            </GlassCard>
            
            <GlassCard 
              className="p-4 flex flex-col items-center text-center" 
              appear="fade" 
              appearDelay={200}
              theme="elderly"
              hoverEffect={false}
            >
              <div className="mb-3">
                <CharacterAvatar character="elderly" size="md" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ElderAssist</h3>
              <p className="text-teal-100 text-sm mb-4">Helping loved ones with personalized care and reminders.</p>
              <GlassButton 
                variant="outline" 
                size="sm"
                className="mt-auto border-teal-500/30 text-teal-100"
                onClick={() => navigate('/elderly')}
              >
                Explore
              </GlassButton>
            </GlassCard>
            
            <GlassCard 
              className="p-4 flex flex-col items-center text-center" 
              appear="fade" 
              appearDelay={300}
              theme="homemaker"
              hoverEffect={false}
            >
              <div className="mb-3">
                <CharacterAvatar character="homemaker" size="md" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">HomeCompanion</h3>
              <p className="text-indigo-100 text-sm mb-4">Streamline your home with smart automation.</p>
              <GlassButton 
                variant="outline" 
                size="sm"
                className="mt-auto border-indigo-500/30 text-indigo-100"
                onClick={() => navigate('/homemaker')}
              >
                Explore
              </GlassButton>
            </GlassCard>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="w-full px-4 py-4 bg-gradient-to-r from-[#1E2A78]/80 to-[#662E9B]/80 backdrop-blur-md mt-auto sticky bottom-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-white text-sm">© 2025 AssistAI</p>
          <button 
            className="text-sm text-blue-200 hover:text-white transition-colors"
            onClick={() => setShowLiveInteraction(true)}
          >
            Need help?
          </button>
        </div>
      </footer>
      
      {showLiveInteraction && (
        <LiveInteraction 
          character="child" 
          onClose={() => setShowLiveInteraction(false)} 
        />
      )}
    </div>
  );
};

export default ChildJourney;
