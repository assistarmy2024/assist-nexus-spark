
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import CharacterAvatar from '@/components/CharacterAvatar';
import LiveInteraction from '@/components/LiveInteraction';
import Quiz from '@/components/Quiz';
import InteractiveVideo from '@/components/InteractiveVideo';
import Documents from '@/components/Documents';
import { ArrowLeft, Video, MessageCircle, Sparkles, Shield, Users, PhoneCall, Calendar, Clock, Brain, Gamepad2, Trophy, BookOpen, Rocket, Dices, Music, Rabbit, GraduationCap } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ChildJourney = () => {
  const navigate = useNavigate();
  const [showLiveInteraction, setShowLiveInteraction] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);

  const handleFeatureClick = (feature: string) => {
    toast({
      title: `Alex says:`,
      description: `Let's explore ${feature} together!`,
    });
    
    if (feature === 'quiz') {
      setShowQuiz(true);
    } else if (feature === 'videos') {
      setShowVideo(true);
    } else if (feature === 'documents') {
      setShowDocuments(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#070B34] to-[#0A1128]">
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
            <div className="flex items-center gap-4">
              <GlassButton 
                className="bg-blue-500/20 border border-blue-500/30 text-white"
                variant="neon"
                onClick={() => setShowLiveInteraction(true)}
                icon={<Video className="h-4 w-4 mr-2" />}
              >
                Live Chat
              </GlassButton>
              <CharacterAvatar character="child" size="sm" />
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow w-full py-6 px-6">
        <div className="container mx-auto">
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-70"></div>
            <GlassCard className="relative p-8 bg-gradient-to-br from-[#101643]/80 to-[#0F2357]/90 border border-blue-500/30 shadow-[0_8px_32px_rgba(31,41,55,0.4)]">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Hello! I'm Alex!
                  </h1>
                  <p className="text-gray-300 mb-4 text-lg">
                    What exciting adventure shall we go on today?
                  </p>
                  <GlassButton 
                    className="bg-blue-500/20 border border-blue-500/30 text-white"
                    variant="neon"
                    onClick={() => setShowLiveInteraction(true)}
                    icon={<Video className="h-4 w-4 mr-2" />}
                  >
                    Start Video Chat
                  </GlassButton>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-blue-500/30 blur-xl animate-pulse-gentle"></div>
                    <CharacterAvatar character="child" size="xl" />
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {/* Activity Tiles - Tell me a story */}
            <div className="relative group cursor-pointer transform transition hover:scale-105" onClick={() => handleFeatureClick('interactive stories')}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#101643]/90 to-[#0F2357]/90 backdrop-blur-md rounded-2xl border border-blue-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex flex-col items-center justify-center">
                <div className="p-3 mb-3 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg w-16 h-16 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-blue-400" />
                </div>
                <p className="text-white font-bold text-center">Stories</p>
                <p className="text-xs text-blue-300 text-center mt-1">Magical adventures</p>
              </div>
            </div>
            
            {/* Fun facts */}
            <div className="relative group cursor-pointer transform transition hover:scale-105" onClick={() => handleFeatureClick('documents')}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#3A1F0B]/90 to-[#2C1A14]/90 backdrop-blur-md rounded-2xl border border-orange-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex flex-col items-center justify-center">
                <div className="p-3 mb-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg w-16 h-16 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-orange-400" />
                </div>
                <p className="text-white font-bold text-center">Fun Facts</p>
                <p className="text-xs text-orange-300 text-center mt-1">Amazing discoveries</p>
              </div>
            </div>
            
            {/* Let's draw */}
            <div className="relative group cursor-pointer transform transition hover:scale-105" onClick={() => handleFeatureClick('videos')}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#0B2A3A]/90 to-[#0D1F36]/90 backdrop-blur-md rounded-2xl border border-cyan-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex flex-col items-center justify-center">
                <div className="p-3 mb-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg w-16 h-16 flex items-center justify-center">
                  <Rocket className="h-8 w-8 text-cyan-400" />
                </div>
                <p className="text-white font-bold text-center">Videos</p>
                <p className="text-xs text-cyan-300 text-center mt-1">Watch and learn</p>
              </div>
            </div>
            
            {/* Games */}
            <div className="relative group cursor-pointer transform transition hover:scale-105" onClick={() => handleFeatureClick('quiz')}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#2D1434]/90 to-[#1F1346]/90 backdrop-blur-md rounded-2xl border border-pink-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex flex-col items-center justify-center">
                <div className="p-3 mb-3 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg w-16 h-16 flex items-center justify-center">
                  <Gamepad2 className="h-8 w-8 text-pink-400" />
                </div>
                <p className="text-white font-bold text-center">Quiz</p>
                <p className="text-xs text-pink-300 text-center mt-1">Fun learning games</p>
              </div>
            </div>
            
            {/* Additional activity tiles */}
            <div className="relative group cursor-pointer transform transition hover:scale-105" onClick={() => handleFeatureClick('math games')}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#0F342B]/90 to-[#0D2D20]/90 backdrop-blur-md rounded-2xl border border-green-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex flex-col items-center justify-center">
                <div className="p-3 mb-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg w-16 h-16 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-green-400" />
                </div>
                <p className="text-white font-bold text-center">Math Fun</p>
                <p className="text-xs text-green-300 text-center mt-1">Numbers & puzzles</p>
              </div>
            </div>
            
            {/* Animals */}
            <div className="relative group cursor-pointer transform transition hover:scale-105" onClick={() => handleFeatureClick('animal facts')}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#332D0B]/90 to-[#2D270B]/90 backdrop-blur-md rounded-2xl border border-yellow-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex flex-col items-center justify-center">
                <div className="p-3 mb-3 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-lg w-16 h-16 flex items-center justify-center">
                  <Rabbit className="h-8 w-8 text-yellow-400" />
                </div>
                <p className="text-white font-bold text-center">Animals</p>
                <p className="text-xs text-yellow-300 text-center mt-1">Animal adventures</p>
              </div>
            </div>
            
            {/* Music */}
            <div className="relative group cursor-pointer transform transition hover:scale-105" onClick={() => handleFeatureClick('music')}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#221634]/90 to-[#1A1443]/90 backdrop-blur-md rounded-2xl border border-violet-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex flex-col items-center justify-center">
                <div className="p-3 mb-3 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-lg w-16 h-16 flex items-center justify-center">
                  <Music className="h-8 w-8 text-violet-400" />
                </div>
                <p className="text-white font-bold text-center">Music</p>
                <p className="text-xs text-violet-300 text-center mt-1">Songs & sounds</p>
              </div>
            </div>
            
            {/* Puzzles */}
            <div className="relative group cursor-pointer transform transition hover:scale-105" onClick={() => handleFeatureClick('puzzles')}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#0B2A3A]/90 to-[#0D1F36]/90 backdrop-blur-md rounded-2xl border border-sky-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex flex-col items-center justify-center">
                <div className="p-3 mb-3 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-lg w-16 h-16 flex items-center justify-center">
                  <Dices className="h-8 w-8 text-sky-400" />
                </div>
                <p className="text-white font-bold text-center">Challenges</p>
                <p className="text-xs text-sky-300 text-center mt-1">Brain teasers</p>
              </div>
            </div>
          </div>
          
          <div className="relative mb-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-50"></div>
            <GlassCard className="relative bg-gradient-to-br from-[#101643]/80 to-[#0F2357]/90 border border-blue-500/20">
              <h2 className="text-xl font-semibold mb-3 text-white">Continue learning</h2>
              <div className="space-y-3">
                <div className="flex items-center p-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer" onClick={() => handleFeatureClick('alphabet game')}>
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4 text-xl">
                    <div className="text-blue-400 text-2xl font-bold">A</div>
                  </div>
                  <div className="flex-grow">
                    <p className="text-white">Continue Alphabet Game</p>
                    <div className="w-full h-2 bg-blue-900/50 rounded-full mt-1">
                      <div className="h-full bg-blue-500 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-3 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 transition-all duration-300 cursor-pointer" onClick={() => handleFeatureClick('dinosaurs')}>
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mr-4 text-xl">
                    <div className="text-indigo-400 text-2xl">🦕</div>
                  </div>
                  <div className="flex-grow">
                    <p className="text-white">World of Dinosaurs</p>
                    <div className="w-full h-2 bg-indigo-900/50 rounded-full mt-1">
                      <div className="h-full bg-indigo-500 rounded-full" style={{width: '40%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-4 px-6">
        <div className="container mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-60"></div>
            <GlassCard className="relative p-4 bg-gradient-to-br from-[#101643]/80 to-[#0F2357]/90 border border-blue-500/20">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ask Alex..." 
                  className="w-full bg-blue-900/20 border border-blue-500/30 rounded-full px-6 py-3 pr-12 text-white outline-none focus:ring-2 focus:ring-blue-500/50"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      setShowLiveInteraction(true);
                    }
                  }}
                />
                <button 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-2 shadow-lg shadow-blue-500/20"
                  onClick={() => setShowLiveInteraction(true)}
                >
                  <div className="h-5 w-5 text-white flex items-center justify-center">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </footer>

      {/* Interactive Components */}
      {showLiveInteraction && (
        <LiveInteraction character="child" onClose={() => setShowLiveInteraction(false)} />
      )}
      
      {showQuiz && (
        <Quiz character="child" onClose={() => setShowQuiz(false)} />
      )}
      
      {showVideo && (
        <InteractiveVideo character="child" onClose={() => setShowVideo(false)} />
      )}
      
      {showDocuments && (
        <Documents character="child" onClose={() => setShowDocuments(false)} />
      )}
    </div>
  );
};

export default ChildJourney;
