
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import CharacterAvatar from '@/components/CharacterAvatar';
import LiveInteraction from '@/components/LiveInteraction';
import Quiz from '@/components/Quiz';
import InteractiveVideo from '@/components/InteractiveVideo';
import Documents from '@/components/Documents';
import { ArrowLeft, Calendar, ShoppingCart, Utensils, Wallet, Clock, Bell, Heart, Check, Plus, Video, BookOpen, ImageIcon, Sparkles } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const HomemakerJourney = () => {
  const navigate = useNavigate();
  const [showLiveInteraction, setShowLiveInteraction] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);

  const handleFeatureClick = (feature: string) => {
    toast({
      title: `Sarah says:`,
      description: `I'll help you manage your ${feature}.`,
    });
    
    if (feature === 'home knowledge') {
      setShowQuiz(true);
    } else if (feature === 'video guides') {
      setShowVideo(true);
    } else if (feature === 'management guides') {
      setShowDocuments(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-assist-pink/10 to-transparent">
      {/* Header */}
      <header className="w-full py-6 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <GlassButton 
              variant="ghost" 
              className="text-white backdrop-blur-md" 
              onClick={() => navigate('/')}
              icon={<ArrowLeft className="h-4 w-4" />}
              iconPosition="left"
              is3D={true}
            >
              Back
            </GlassButton>
            <div className="flex items-center gap-4">
              <GlassButton 
                className="bg-pink-500/20 border border-pink-500/30 text-white"
                variant="neon"
                onClick={() => setShowLiveInteraction(true)}
                icon={<Video className="h-4 w-4 mr-2" />}
              >
                Video Call
              </GlassButton>
              <CharacterAvatar character="homemaker" size="sm" />
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow w-full py-6 px-6">
        <div className="container mx-auto">
          <GlassCard 
            theme="homemaker" 
            glowing={true} 
            className="mb-8 text-center"
            is3D={true}
            metallic={true}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-assist-pink">
                  Welcome to Home with Sarah!
                </h1>
                <p className="text-gray-300 mb-4">
                  Your personal home management assistant for planning, meals, and household tasks.
                </p>
                <GlassButton 
                  className="bg-pink-500/20 border border-pink-500/30 text-white"
                  variant="neon"
                  onClick={() => setShowLiveInteraction(true)}
                  icon={<Video className="h-4 w-4 mr-2" />}
                >
                  Start Video Call
                </GlassButton>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-assist-pink/20 to-assist-purple/20 blur-xl animate-pulse-gentle"></div>
                  <img 
                    src="/lovable-uploads/7682db02-e18a-405a-937a-7b7f525828eb.png" 
                    alt="HomeMaker Assistant" 
                    className="w-60 h-60 object-contain animate-float"
                  />
                </div>
              </div>
            </div>
          </GlassCard>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
            {/* Today's Overview */}
            <GlassCard className="md:col-span-8 p-6" is3D={true}>
              <h2 className="text-xl font-semibold mb-4 text-assist-pink">Today's Overview</h2>
              <div className="space-y-4">
                <div className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer" onClick={() => handleFeatureClick('school schedule')}>
                  <div className="w-10 h-10 rounded-full bg-assist-pink/20 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-assist-pink" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-300">9:00 AM - School drop-off</p>
                  </div>
                  <div>
                    <button className="p-2 rounded-full hover:bg-assist-pink/10">
                      <Check className="h-4 w-4 text-assist-pink" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer" onClick={() => handleFeatureClick('grocery shopping')}>
                  <div className="w-10 h-10 rounded-full bg-assist-pink/20 flex items-center justify-center mr-4">
                    <ShoppingCart className="h-5 w-5 text-assist-pink" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-300">11:00 AM - Grocery shopping</p>
                  </div>
                  <div>
                    <button className="p-2 rounded-full hover:bg-assist-pink/10">
                      <Check className="h-4 w-4 text-assist-pink" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer" onClick={() => handleFeatureClick('meal preparation')}>
                  <div className="w-10 h-10 rounded-full bg-assist-pink/20 flex items-center justify-center mr-4">
                    <Utensils className="h-5 w-5 text-assist-pink" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-300">1:00 PM - Prepare lunch</p>
                  </div>
                  <div>
                    <button className="p-2 rounded-full hover:bg-assist-pink/10">
                      <Check className="h-4 w-4 text-assist-pink" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer" onClick={() => handleFeatureClick('school pickup')}>
                  <div className="w-10 h-10 rounded-full bg-assist-pink/20 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-assist-pink" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-300">3:00 PM - School pickup</p>
                  </div>
                  <div>
                    <button className="p-2 rounded-full hover:bg-assist-pink/10">
                      <Check className="h-4 w-4 text-assist-pink" />
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            {/* Quick Actions */}
            <GlassCard className="md:col-span-4 p-6" is3D={true}>
              <h2 className="text-xl font-semibold mb-4 text-assist-pink">Quick Actions</h2>
              <div className="space-y-3">
                <GlassButton 
                  className="w-full bg-assist-pink/10 text-assist-pink justify-start" 
                  variant="neon"
                  theme="homemaker"
                  icon={<Calendar className="h-4 w-4" />}
                  onClick={() => handleFeatureClick('tasks')}
                >
                  Add Task
                </GlassButton>
                <GlassButton 
                  className="w-full bg-assist-pink/10 text-assist-pink justify-start"
                  variant="neon"
                  theme="homemaker"
                  icon={<ShoppingCart className="h-4 w-4" />}
                  onClick={() => handleFeatureClick('shopping list')}
                >
                  Add to Shopping List
                </GlassButton>
                <GlassButton 
                  className="w-full bg-assist-pink/10 text-assist-pink justify-start"
                  variant="neon"
                  theme="homemaker"
                  icon={<Wallet className="h-4 w-4" />}
                  onClick={() => handleFeatureClick('expenses')}
                >
                  Track Expense
                </GlassButton>
              </div>
              
              <h3 className="text-lg font-semibold mt-6 mb-3 text-assist-pink">Learning & Tools</h3>
              <div className="space-y-3">
                <GlassButton 
                  className="w-full bg-assist-pink/10 text-assist-pink justify-start" 
                  variant="neon"
                  theme="homemaker"
                  icon={<Video className="h-4 w-4" />}
                  onClick={() => handleFeatureClick('video guides')}
                >
                  Video Guides
                </GlassButton>
                <GlassButton 
                  className="w-full bg-assist-pink/10 text-assist-pink justify-start"
                  variant="neon"
                  theme="homemaker"
                  icon={<BookOpen className="h-4 w-4" />}
                  onClick={() => handleFeatureClick('management guides')}
                >
                  Home Guides
                </GlassButton>
                <GlassButton 
                  className="w-full bg-assist-pink/10 text-assist-pink justify-start"
                  variant="neon"
                  theme="homemaker"
                  icon={<Sparkles className="h-4 w-4" />}
                  onClick={() => handleFeatureClick('home knowledge')}
                >
                  Home Quiz
                </GlassButton>
              </div>
            </GlassCard>
          </div>
          
          <h2 className="text-2xl font-semibold mb-6 text-center text-assist-pink">
            What would you like to manage today?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <GlassCard 
              className="hover:scale-105 transition-transform cursor-pointer p-6" 
              is3D={true}
              onClick={() => handleFeatureClick('daily schedule')}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-assist-pink/30 to-assist-purple/20 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-assist-pink" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-pink">Daily Planner</h3>
                <p className="text-gray-400 text-center">Organize your schedule and tasks</p>
              </div>
            </GlassCard>
            
            <GlassCard 
              className="hover:scale-105 transition-transform cursor-pointer p-6" 
              is3D={true}
              onClick={() => handleFeatureClick('shopping lists')}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-assist-pink/30 to-assist-purple/20 flex items-center justify-center mb-4">
                  <ShoppingCart className="h-8 w-8 text-assist-pink" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-pink">Shopping & Groceries</h3>
                <p className="text-gray-400 text-center">Manage shopping lists and deliveries</p>
              </div>
            </GlassCard>
            
            <GlassCard 
              className="hover:scale-105 transition-transform cursor-pointer p-6" 
              is3D={true}
              onClick={() => handleFeatureClick('recipes')}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-assist-pink/30 to-assist-purple/20 flex items-center justify-center mb-4">
                  <Utensils className="h-8 w-8 text-assist-pink" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-pink">Recipe Manager</h3>
                <p className="text-gray-400 text-center">Discover and save your favorite recipes</p>
              </div>
            </GlassCard>
            
            <GlassCard 
              className="hover:scale-105 transition-transform cursor-pointer p-6" 
              is3D={true}
              onClick={() => handleFeatureClick('budget')}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-assist-pink/30 to-assist-purple/20 flex items-center justify-center mb-4">
                  <Wallet className="h-8 w-8 text-assist-pink" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-pink">Budget Tracker</h3>
                <p className="text-gray-400 text-center">Track household expenses and budgets</p>
              </div>
            </GlassCard>
          </div>
          
          {/* Featured Recipe */}
          <GlassCard className="p-6 mb-8" is3D={true} metallic={true}>
            <h2 className="text-xl font-semibold mb-4 text-assist-pink">Today's Recipe Suggestion</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-black/50 to-assist-pink/10 flex items-center justify-center">
                    <Utensils className="h-16 w-16 text-assist-pink/50" />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-lg font-medium mb-2 text-white">Easy Dinner Pasta</h3>
                <p className="text-gray-400 mb-4">A quick and nutritious pasta dish perfect for busy weeknights.</p>
                <div className="flex flex-wrap gap-4">
                  <div className="text-gray-400 text-sm px-3 py-1 rounded-full bg-white/5">
                    <span className="font-medium text-assist-pink">Prep:</span> 10 mins
                  </div>
                  <div className="text-gray-400 text-sm px-3 py-1 rounded-full bg-white/5">
                    <span className="font-medium text-assist-pink">Cook:</span> 20 mins
                  </div>
                  <div className="text-gray-400 text-sm px-3 py-1 rounded-full bg-white/5">
                    <span className="font-medium text-assist-pink">Servings:</span> 4
                  </div>
                </div>
                <GlassButton 
                  className="mt-4 bg-assist-pink/10 text-assist-pink"
                  variant="neon"
                  theme="homemaker"
                  icon={<Utensils className="h-4 w-4" />}
                  onClick={() => handleFeatureClick('recipe details')}
                >
                  View Recipe
                </GlassButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-4 px-6">
        <div className="container mx-auto">
          <GlassCard className="p-4" is3D={true} metallic={true}>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask Sarah..." 
                className="w-full bg-black/30 border border-assist-pink/30 rounded-full px-6 py-3 pr-12 text-white outline-none focus:ring-2 focus:ring-assist-pink/50 shadow-inner"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    setShowLiveInteraction(true);
                  }
                }}
              />
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-assist-pink to-assist-purple rounded-full p-2 shadow-lg hover:shadow-assist-pink/30 transition duration-300"
                onClick={() => setShowLiveInteraction(true)}
              >
                <div className="h-5 w-5 text-white flex items-center justify-center">
                  🏡
                </div>
              </button>
            </div>
          </GlassCard>
        </div>
      </footer>

      {/* Interactive Components */}
      {showLiveInteraction && (
        <LiveInteraction character="homemaker" onClose={() => setShowLiveInteraction(false)} />
      )}
      
      {showQuiz && (
        <Quiz character="homemaker" onClose={() => setShowQuiz(false)} />
      )}
      
      {showVideo && (
        <InteractiveVideo character="homemaker" onClose={() => setShowVideo(false)} />
      )}
      
      {showDocuments && (
        <Documents character="homemaker" onClose={() => setShowDocuments(false)} />
      )}
    </div>
  );
};

export default HomemakerJourney;
