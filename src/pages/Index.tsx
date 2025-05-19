
import React, { useState, useEffect } from 'react';
import { 
  Calculator,
  ListTodo,
  Newspaper,
  CloudSun,
  Languages,
  Sparkles
} from 'lucide-react';

import { UtilityTile } from '@/components/UtilityTile';
import { ChatBanner } from '@/components/ChatBanner';
import { LoadingScreen } from '@/components/LoadingScreen';
import { NavigationSheet } from '@/components/NavigationSheet';
import { ChatDialog } from '@/components/ChatDialog';
import { VideoCallDialog } from '@/components/VideoCallDialog';
import HeroSection from '@/components/HeroSection';
import PersonaGrid from '@/components/PersonaGrid';

const Index = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [quickActionsVisible, setQuickActionsVisible] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    // Initial app loading
    const loadingTimer = setTimeout(() => {
      setIsAppLoading(false);
    }, 1500);
    
    // First animate the header
    const timerHeader = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    // Then animate the cards with a slight delay
    const timerCards = setTimeout(() => {
      setCardsVisible(true);
    }, 800);
    
    // Finally show quick actions
    const timerActions = setTimeout(() => {
      setQuickActionsVisible(true);
    }, 1200);
    
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(timerHeader);
      clearTimeout(timerCards);
      clearTimeout(timerActions);
    };
  }, []);

  const handleChatClick = () => {
    setIsOpenDialog(true);
  };

  const handleVideoCallSelect = (persona: string) => {
    setSelectedVideo(persona);
  };

  // Initial loading screen
  if (isAppLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#03071E] to-[#1E3A8A] text-white flex flex-col items-center p-4 overflow-auto">
      <div className="container mx-auto max-w-7xl py-6 md:py-12 flex-1 flex flex-col">
        {/* Hero Section */}
        <HeroSection isLoaded={isLoaded} />

        {/* Main Persona Cards */}
        <PersonaGrid isVisible={cardsVisible} />
        
        {/* Chat Banner */}
        <ChatBanner 
          onChatClick={handleChatClick}
          onVideoCallSelect={handleVideoCallSelect}
          className="my-8"
        />
        
        {/* Utility Tiles */}
        <div className={`mt-8 transition-all duration-700 ${quickActionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-semibold mb-4 text-white/90 px-2 md:px-6">Quick Utilities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 px-2 md:px-6">
            <UtilityTile title="Calculator" icon={<Calculator className="w-6 h-6" />} delay={700} />
            <UtilityTile title="Languages" icon={<Languages className="w-6 h-6" />} delay={750} />
            <UtilityTile title="To-Do List" icon={<ListTodo className="w-6 h-6" />} delay={800} />
            <UtilityTile title="Meditation" icon={<Sparkles className="w-6 h-6" />} delay={850} />
            <UtilityTile title="News Flash" icon={<Newspaper className="w-6 h-6" />} delay={900} />
            <UtilityTile title="Weather" icon={<CloudSun className="w-6 h-6" />} delay={950} />
          </div>
        </div>
        
        <footer className={`mt-16 text-center text-sm text-gray-400 transition-all duration-700 delay-500 ${cardsVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
          </div>
          <p>© 2025 AssistAI - Enhancing lives with intelligent assistance</p>
        </footer>
      </div>

      {/* Chat Dialog/Drawer */}
      <ChatDialog 
        isOpen={isOpenDialog} 
        onOpenChange={setIsOpenDialog} 
        isMobile={isMobile} 
      />

      {/* Video Call Modal */}
      <VideoCallDialog 
        selectedVideo={selectedVideo} 
        onOpenChange={() => setSelectedVideo(null)} 
      />

      {/* Side Sheet for Navigation on Mobile */}
      <NavigationSheet 
        onOpenDialog={handleChatClick}
        onVideoSelect={handleVideoCallSelect}
      />
    </div>
  );
};

export default Index;
