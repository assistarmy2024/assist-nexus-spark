
import React, { useState } from 'react';
import { MessageSquare, Video } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ChatBannerProps {
  onChatClick: () => void;
  onVideoCallSelect: (persona: string) => void;
  className?: string;
}

export function ChatBanner({ onChatClick, onVideoCallSelect, className }: ChatBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(
      "w-full py-4 px-6 backdrop-blur-lg bg-white/5 border-y border-white/10 transition-all duration-700",
      !isVisible ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0',
      className
    )}>
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-4">
        <Button 
          variant="outline" 
          className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
          onClick={onChatClick}
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          General Chat
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
            >
              <Video className="mr-2 h-4 w-4" />
              Video Call
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#121a3a] border border-white/10 text-white">
            <DropdownMenuItem onClick={() => onVideoCallSelect('general')}>
              General Lobby
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onVideoCallSelect('children')}>
              KidBot
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onVideoCallSelect('elderly')}>
              ElderAssist
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onVideoCallSelect('homemaker')}>
              HomeCompanion
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onVideoCallSelect('student')}>
              StudyBuddy
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onVideoCallSelect('healthcare')}>
              MedicoMate
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onVideoCallSelect('business')}>
              BizAdvisor
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
