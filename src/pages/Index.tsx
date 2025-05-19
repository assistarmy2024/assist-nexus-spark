
import React, { useState, useEffect } from 'react';
import { GroupCard } from '@/components/GroupCard';
import { Sparkles, MessageSquare, BookOpen, ShoppingCart, Video, Loader } from 'lucide-react';
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
import { Skeleton } from "@/components/ui/skeleton";
import QuickUtilities from '@/components/QuickUtilities';
import PrimaryActions from '@/components/PrimaryActions';

const Index = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [quickActionsVisible, setQuickActionsVisible] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const navigate = useNavigate();
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

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  // Initial loading screen
  if (isAppLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#03071E] to-[#1E3A8A] flex flex-col items-center justify-center">
        <div className="animate-pulse-gentle">
          <Sparkles className="w-16 h-16 text-blue-400 mb-6" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-3 animate-pulse-slow">
          AssistAI
        </h1>
        <div className="flex items-center space-x-2">
          <Loader className="h-5 w-5 animate-spin text-blue-400" />
          <p className="text-white/70">Loading your AI assistant...</p>
        </div>
      </div>
    );
  }

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

        {/* Primary Actions - Video Call and General Chat */}
        <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <PrimaryActions 
            onChatClick={() => setIsOpenDialog(true)}
            onVideoClick={() => console.log("Video call clicked")}
          />
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 px-2 transition-all duration-700 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <GroupCard
            groupKey="children"
            title="KidBot"
            onClick={() => handleCardClick('/child')}
            className="transition-all duration-500 delay-100 transform hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
          />
          
          <GroupCard
            groupKey="elderly"
            title="ElderAssist"
            onClick={() => handleCardClick('/elderly')}
            className="transition-all duration-500 delay-200 transform hover:shadow-lg hover:shadow-teal-500/20 cursor-pointer"
          />
          
          <GroupCard
            groupKey="homemaker"
            title="HomeCompanion"
            onClick={() => handleCardClick('/homemaker')}
            className="transition-all duration-500 delay-300 transform hover:shadow-lg hover:shadow-indigo-500/20 cursor-pointer"
          />
        </div>
        
        {/* Quick Utilities Section */}
        <div className={`transition-all duration-700 ${quickActionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <QuickUtilities />
        </div>
        
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
    className="flex items-center justify-center flex-col p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 active:scale-95"
  >
    <div className="mb-1 text-white/90">{icon}</div>
    <span className="text-sm font-medium text-white/80">{label}</span>
  </button>
);

const NavItem = ({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="flex items-center w-full p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 text-white/80 hover:text-white transform hover:translate-x-1"
  >
    <div className="mr-3">{icon}</div>
    <span>{label}</span>
  </button>
);

const SuggestionButton = ({ text }: { text: string }) => (
  <button className="w-full text-left p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 text-white/80 hover:text-white text-sm transform hover:translate-x-1">
    {text}
  </button>
);

const ChatInterface = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { isBot: true, text: "Hello! How can I assist you today?" },
    { isBot: false, text: "I'd like to know more about healthy habits." },
    { isBot: true, text: "Great choice! Some key healthy habits include:\n- Getting 7-8 hours of sleep\n- Drinking plenty of water\n- Regular physical activity\n- Balanced nutrition\nWould you like more specific information on any of these?" }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = document.getElementById('chat-input') as HTMLInputElement;
    if (!input.value.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { isBot: false, text: input.value }]);
    input.value = '';
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        isBot: true, 
        text: "I understand your interest. For the best personalized advice, could you tell me more about your current lifestyle habits?" 
      }]);
    }, 1500);
  };
  
  return (
    <div className="flex flex-col h-[400px]">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-2">
        {messages.map((msg, i) => (
          <div key={i} className={`${msg.isBot 
            ? "bg-blue-600/20 p-3 rounded-lg rounded-tl-none max-w-[80%]" 
            : "bg-white/10 p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto"} text-white/90`}>
            {msg.text.split('\n').map((line, j) => (
              line.startsWith('-') ? 
                <li key={j} className="ml-5">{line.substring(1).trim()}</li> : 
                <p key={j} className={j > 0 ? "mt-2" : ""}>{line}</p>
            ))}
          </div>
        ))}
        
        {isTyping && (
          <div className="bg-blue-600/20 p-3 rounded-lg rounded-tl-none max-w-[80%] text-white/90 flex space-x-1">
            <div className="w-2 h-2 bg-white/80 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-white/80 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-white/80 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="relative">
        <input 
          id="chat-input"
          type="text" 
          placeholder="Type your message..." 
          className="w-full p-3 pr-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        />
        <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white">
          <Sparkles className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default Index;
