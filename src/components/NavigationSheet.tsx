
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, MessageSquare, Video, Home, Bell, BookOpen, Briefcase, Heart } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { NavItem } from './NavItem';

interface NavigationSheetProps {
  onOpenDialog: () => void;
  onVideoSelect: (persona: string) => void;
}

export const NavigationSheet = ({ onOpenDialog, onVideoSelect }: NavigationSheetProps) => {
  const navigate = useNavigate();

  return (
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
          <NavItem icon={<Home className="w-5 h-5" />} label="KidBot" onClick={() => navigate('/child')} />
          <NavItem icon={<Bell className="w-5 h-5" />} label="ElderAssist" onClick={() => navigate('/elderly')} />
          <NavItem icon={<Home className="w-5 h-5" />} label="HomeCompanion" onClick={() => navigate('/homemaker')} />
          <NavItem icon={<BookOpen className="w-5 h-5" />} label="StudyBuddy" onClick={() => navigate('/student')} />
          <NavItem icon={<Heart className="w-5 h-5" />} label="MedicoMate" onClick={() => navigate('/healthcare')} />
          <NavItem icon={<Briefcase className="w-5 h-5" />} label="BizAdvisor" onClick={() => navigate('/business')} />
          <NavItem icon={<MessageSquare className="w-5 h-5" />} label="General Chat" onClick={onOpenDialog} />
          <NavItem icon={<Video className="w-5 h-5" />} label="Video Call" onClick={() => onVideoSelect('general')} />
        </nav>
      </SheetContent>
    </Sheet>
  );
};
