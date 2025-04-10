
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import CharacterAvatar from '@/components/CharacterAvatar';
import LiveInteraction from '@/components/LiveInteraction';
import Quiz from '@/components/Quiz';
import InteractiveVideo from '@/components/InteractiveVideo';
import Documents from '@/components/Documents';
import { ArrowLeft, Video, MessageCircle, Sparkles, Shield, Users, PhoneCall, Calendar, Bell, Clock, Heart, BookOpen, Brain, Lightbulb } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ElderlyJourney = () => {
  const navigate = useNavigate();
  const [showLiveInteraction, setShowLiveInteraction] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);

  const handleFeatureClick = (feature: string) => {
    toast({
      title: `Professor Wilson says:`,
      description: `I'll help you with ${feature}.`,
    });
    
    if (feature === 'health knowledge') {
      setShowQuiz(true);
    } else if (feature === 'video tutorials') {
      setShowVideo(true);
    } else if (feature === 'health guides') {
      setShowDocuments(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0A192F] to-[#0F2540]">
      {/* Header */}
      <header className="w-full py-6 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <GlassButton 
              variant="ghost" 
              className="text-white text-lg" 
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="mr-2 h-6 w-6" /> Back
            </GlassButton>
            <div className="flex items-center gap-4">
              <GlassButton 
                className="bg-teal-500/20 border border-teal-500/30 text-white"
                variant="neon"
                onClick={() => setShowLiveInteraction(true)}
                icon={<Video className="h-4 w-4 mr-2" />}
              >
                Video Call
              </GlassButton>
              <CharacterAvatar character="elderly" size="sm" />
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow w-full py-6 px-6">
        <div className="container mx-auto">
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-70"></div>
            <GlassCard className="relative p-8 bg-gradient-to-br from-[#0F2540]/90 to-[#0A192F]/90 border border-teal-500/30 shadow-[0_8px_32px_rgba(31,41,55,0.4)]">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Welcome back! I'm Professor Wilson
                  </h1>
                  <p className="text-gray-300 mb-4 text-lg">
                    How may I assist you today?
                  </p>
                  <GlassButton 
                    className="bg-teal-500/20 border border-teal-500/30 text-white"
                    variant="neon"
                    onClick={() => setShowLiveInteraction(true)}
                    icon={<Video className="h-4 w-4 mr-2" />}
                  >
                    Start Video Call
                  </GlassButton>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-teal-500/30 blur-xl animate-pulse-gentle"></div>
                    <img 
                      src="/lovable-uploads/4f8f135a-6243-488c-92ba-c324f470b2a9.png" 
                      alt="Elderly Assistant" 
                      className="w-60 h-60 object-contain animate-float"
                    />
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {/* Call Family */}
            <div className="relative group cursor-pointer col-span-1 md:col-span-2" onClick={() => handleFeatureClick('family calls')}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#0F2540]/90 to-[#0A192F]/90 backdrop-blur-md rounded-2xl border border-teal-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex items-center">
                <div className="p-4 mr-4 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg w-16 h-16 flex items-center justify-center">
                  <PhoneCall className="h-8 w-8 text-teal-400" />
                </div>
                <div>
                  <p className="text-white font-bold">Call Family</p>
                  <p className="text-gray-400 text-sm">Connect with your loved ones</p>
                </div>
              </div>
            </div>
            
            {/* Messages */}
            <div className="relative group cursor-pointer col-span-1 md:col-span-2" onClick={() => handleFeatureClick('messages')}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#0F2540]/90 to-[#0A192F]/90 backdrop-blur-md rounded-2xl border border-blue-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex items-center">
                <div className="p-4 mr-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg w-16 h-16 flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-bold">Messages</p>
                  <p className="text-gray-400 text-sm">Send & receive messages</p>
                </div>
              </div>
            </div>
            
            {/* Interactive Learning Tiles */}
            <div className="relative group cursor-pointer col-span-1 md:col-span-2" onClick={() => handleFeatureClick('health knowledge')}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#0F2540]/90 to-[#0A192F]/90 backdrop-blur-md rounded-2xl border border-emerald-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex items-center">
                <div className="p-4 mr-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg w-16 h-16 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-bold">Health Quiz</p>
                  <p className="text-gray-400 text-sm">Test your knowledge</p>
                </div>
              </div>
            </div>
            
            {/* Video Tutorials */}
            <div className="relative group cursor-pointer col-span-1 md:col-span-2" onClick={() => handleFeatureClick('video tutorials')}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#0F2540]/90 to-[#0A192F]/90 backdrop-blur-md rounded-2xl border border-blue-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex items-center">
                <div className="p-4 mr-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg w-16 h-16 flex items-center justify-center">
                  <Video className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-bold">Video Guides</p>
                  <p className="text-gray-400 text-sm">Watch helpful tutorials</p>
                </div>
              </div>
            </div>
            
            {/* Reminder */}
            <div className="relative group cursor-pointer col-span-1 md:col-span-2" onClick={() => handleFeatureClick('medication reminders')}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#0F2540]/90 to-[#0A192F]/90 backdrop-blur-md rounded-2xl border border-amber-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex items-center">
                <div className="p-4 mr-4 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-lg w-16 h-16 flex items-center justify-center">
                  <Bell className="h-8 w-8 text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-bold">Medication Reminder</p>
                  <p className="text-gray-400 text-sm">Never miss your medications</p>
                </div>
              </div>
            </div>
            
            {/* Health Guides */}
            <div className="relative group cursor-pointer col-span-1 md:col-span-2" onClick={() => handleFeatureClick('health guides')}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#0F2540]/90 to-[#0A192F]/90 backdrop-blur-md rounded-2xl border border-teal-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex items-center">
                <div className="p-4 mr-4 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-lg w-16 h-16 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-teal-400" />
                </div>
                <div>
                  <p className="text-white font-bold">Health Guides</p>
                  <p className="text-gray-400 text-sm">Important information</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative mb-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-50"></div>
            <GlassCard className="relative bg-gradient-to-br from-[#0F2540]/90 to-[#0A192F]/90 border border-teal-500/20">
              <h2 className="text-xl font-semibold mb-3 text-white">Today's Schedule</h2>
              <div className="space-y-3">
                <div className="flex items-center p-3 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 transition-all duration-300 cursor-pointer" onClick={() => handleFeatureClick('medication schedule')}>
                  <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-teal-400" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-white">Blood pressure medicine - 9:00 AM</p>
                    <p className="text-gray-400 text-sm">Take with food</p>
                  </div>
                  <div>
                    <button className="p-2 rounded-full hover:bg-teal-500/10">
                      <Bell className="h-4 w-4 text-teal-400" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center p-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer" onClick={() => handleFeatureClick('memory exercise')}>
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4">
                    <Sparkles className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-white">Memory exercise - 11:00 AM</p>
                    <p className="text-gray-400 text-sm">Daily brain training</p>
                  </div>
                  <div>
                    <button className="p-2 rounded-full hover:bg-blue-500/10">
                      <Bell className="h-4 w-4 text-blue-400" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center p-3 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 transition-all duration-300 cursor-pointer" onClick={() => handleFeatureClick('family call')}>
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-amber-400" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-white">Video call with family - 6:00 PM</p>
                    <p className="text-gray-400 text-sm">Weekly call with children</p>
                  </div>
                  <div>
                    <button className="p-2 rounded-full hover:bg-amber-500/10">
                      <Bell className="h-4 w-4 text-amber-400" />
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
          
          {/* Daily Learning */}
          <div className="relative mb-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-50"></div>
            <GlassCard className="relative bg-gradient-to-br from-[#0F2540]/90 to-[#0A192F]/90 border border-blue-500/20">
              <h2 className="text-xl font-semibold mb-3 text-white flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-yellow-400" />
                Daily Learning
              </h2>
              <div className="p-4 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl">
                <h3 className="text-lg font-medium text-white mb-2">Did You Know?</h3>
                <p className="text-gray-300">Regular brain exercises like puzzles, reading, and learning new skills can help maintain cognitive function as you age.</p>
                <div className="mt-3">
                  <GlassButton
                    variant="outline"
                    className="text-sm"
                    onClick={() => handleFeatureClick('brain health')}
                  >
                    Learn More
                  </GlassButton>
                </div>
              </div>
            </GlassCard>
          </div>
          
          {/* Emergency button */}
          <div className="relative" onClick={() => handleFeatureClick('emergency services')}>
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-rose-500 rounded-xl blur opacity-70"></div>
            <GlassCard className="relative text-center p-5 bg-gradient-to-br from-[#3A0F13]/90 to-[#2C0F14]/90 border-2 border-red-500/40">
              <button className="w-full bg-gradient-to-r from-red-500 to-rose-500 text-white text-xl font-bold py-4 rounded-xl">
                EMERGENCY ASSISTANCE
              </button>
              <p className="text-gray-400 mt-2">Tap for immediate help or to contact emergency services</p>
            </GlassCard>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-4 px-6">
        <div className="container mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-60"></div>
            <GlassCard className="relative p-6 bg-gradient-to-br from-[#0F2540]/90 to-[#0A192F]/90 border border-teal-500/20">
              <div className="text-center mb-4">
                <p className="text-xl text-teal-400">Speak to Professor Wilson</p>
                <p className="text-gray-400">Just say "Hello Professor" or tap the button below</p>
              </div>
              <div className="flex justify-center">
                <button 
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 flex items-center justify-center shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:scale-105 transition-all duration-300"
                  onClick={() => setShowLiveInteraction(true)}
                >
                  <Video className="h-8 w-8 text-teal-400" />
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </footer>

      {/* Interactive Components */}
      {showLiveInteraction && (
        <LiveInteraction character="elderly" onClose={() => setShowLiveInteraction(false)} />
      )}
      
      {showQuiz && (
        <Quiz character="elderly" onClose={() => setShowQuiz(false)} />
      )}
      
      {showVideo && (
        <InteractiveVideo character="elderly" onClose={() => setShowVideo(false)} />
      )}
      
      {showDocuments && (
        <Documents character="elderly" onClose={() => setShowDocuments(false)} />
      )}
    </div>
  );
};

export default ElderlyJourney;
