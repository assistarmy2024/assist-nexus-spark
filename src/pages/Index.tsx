
import React, { useState, useEffect } from 'react';
import { GroupCard } from '@/components/GroupCard';
import { Sparkles, MessageSquare, BookOpen, ShoppingCart, Video } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [quickActionsVisible, setQuickActionsVisible] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
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
      clearTimeout(timerHeader);
      clearTimeout(timerCards);
      clearTimeout(timerActions);
    };
  }, []);

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  const renderQuickActions = () => (
    <div className={`mt-12 px-4 transition-all duration-700 ${quickActionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <h3 className="text-xl font-semibold mb-4 text-white/90">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <ActionButton icon={<MessageSquare className="w-5 h-5" />} label="Chat" onClick={() => setIsOpenDialog(true)} />
        <ActionButton icon={<Video className="w-5 h-5" />} label="Videos" />
        <ActionButton icon={<BookOpen className="w-5 h-5" />} label="Health" />
        <ActionButton icon={<ShoppingCart className="w-5 h-5" />} label="Shopping" />
      </div>
      
      <div className="mt-6 space-y-3">
        <SuggestionButton text="How do I stay healthy?" />
        <SuggestionButton text="Show me how to video call my family" />
        <SuggestionButton text="Tell me about today's news" />
      </div>
      
      <div className="mt-6 relative">
        <input 
          type="text" 
          placeholder="Type your message..." 
          className="w-full p-3 pr-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white">
          <Sparkles className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#03071E] to-[#1E3A8A] text-white flex flex-col items-center p-4 overflow-auto">
      <div className="container mx-auto max-w-7xl py-6 md:py-12 flex-1 flex flex-col">
        <header className={`text-center mb-8 md:mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="relative inline-block mb-4">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 blur-lg rounded-full animate-pulse-gentle"></div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-400 text-transparent bg-clip-text relative z-10">
              AssistAI <Sparkles className="inline-block h-6 w-6 md:h-8 md:w-8 ml-2 text-blue-300" />
            </h1>
          </div>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
            Your personalized AI assistant for every stage of life
          </p>
        </header>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 px-2 transition-all duration-700 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <GroupCard
            groupKey="children"
            title="KidBot"
            onClick={() => handleCardClick('/child')}
            className={`transition-all duration-500 delay-100 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer`}
          />
          
          <GroupCard
            groupKey="elderly"
            title="ElderAssist"
            onClick={() => handleCardClick('/elderly')}
            className={`transition-all duration-500 delay-200 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20 cursor-pointer`}
          />
          
          <GroupCard
            groupKey="homemaker"
            title="HomeCompanion"
            onClick={() => handleCardClick('/homemaker')}
            className={`transition-all duration-500 delay-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 cursor-pointer`}
          />
        </div>
        
        {renderQuickActions()}
        
        <footer className={`mt-10 text-center text-sm text-gray-400 transition-all duration-700 delay-500 ${cardsVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p>© 2025 AssistAI - Enhancing lives with intelligent assistance</p>
        </footer>
      </div>

      {/* Mobile Dialog */}
      {isMobile ? (
        <Drawer open={isOpenDialog} onOpenChange={setIsOpenDialog}>
          <DrawerContent className="bg-[#121a3a] border-t border-white/10">
            <DrawerHeader>
              <DrawerTitle className="text-white">Chat with AssistAI</DrawerTitle>
              <DrawerDescription className="text-white/70">
                Ask me anything and I'll help you find answers
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <ChatInterface />
            </div>
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
          <DialogContent className="bg-[#121a3a] border border-white/10 text-white max-w-md">
            <DialogHeader>
              <DialogTitle>Chat with AssistAI</DialogTitle>
              <DialogDescription className="text-white/70">
                Ask me anything and I'll help you find answers
              </DialogDescription>
            </DialogHeader>
            <ChatInterface />
          </DialogContent>
        </Dialog>
      )}

      {/* Side Sheet for Navigation on Mobile */}
      <Sheet>
        <SheetTrigger asChild>
          <button className="fixed top-4 left-4 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors z-50">
            <Sparkles className="w-5 h-5" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-[#121a3a] border-r border-white/10 w-[300px]">
          <SheetHeader>
            <SheetTitle className="text-white">AssistAI Menu</SheetTitle>
            <SheetDescription className="text-white/70">
              Navigate to your personalized AI assistants
            </SheetDescription>
          </SheetHeader>
          <nav className="mt-8 space-y-4">
            <NavItem icon={<MessageSquare className="w-5 h-5" />} label="Chat" onClick={() => setIsOpenDialog(true)} />
            <NavItem icon={<Video className="w-5 h-5" />} label="Videos" onClick={() => {}} />
            <NavItem icon={<BookOpen className="w-5 h-5" />} label="Health Tips" onClick={() => {}} />
            <NavItem icon={<ShoppingCart className="w-5 h-5" />} label="Grocery List" onClick={() => {}} />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

// Helper Components
const ActionButton = ({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className="flex items-center justify-center flex-col p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-colors"
  >
    <div className="mb-1 text-white/90">{icon}</div>
    <span className="text-sm font-medium text-white/80">{label}</span>
  </button>
);

const NavItem = ({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="flex items-center w-full p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white/80 hover:text-white"
  >
    <div className="mr-3">{icon}</div>
    <span>{label}</span>
  </button>
);

const SuggestionButton = ({ text }: { text: string }) => (
  <button className="w-full text-left p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-colors text-white/80 hover:text-white text-sm">
    {text}
  </button>
);

const ChatInterface = () => {
  return (
    <div className="flex flex-col h-[400px]">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-2">
        <div className="bg-blue-600/20 p-3 rounded-lg rounded-tl-none max-w-[80%] text-white/90">
          Hello! How can I assist you today?
        </div>
        
        <div className="bg-white/10 p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto text-white/90">
          I'd like to know more about healthy habits.
        </div>
        
        <div className="bg-blue-600/20 p-3 rounded-lg rounded-tl-none max-w-[80%] text-white/90">
          Great choice! Some key healthy habits include:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Getting 7-8 hours of sleep</li>
            <li>Drinking plenty of water</li>
            <li>Regular physical activity</li>
            <li>Balanced nutrition</li>
          </ul>
          Would you like more specific information on any of these?
        </div>
      </div>
      
      <div className="relative">
        <input 
          type="text" 
          placeholder="Type your message..." 
          className="w-full p-3 pr-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white">
          <Sparkles className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Index;
