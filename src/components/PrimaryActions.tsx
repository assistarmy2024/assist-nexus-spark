
import React from 'react';
import { MessageSquare, Video } from 'lucide-react';
import GlassButton from './GlassButton';

interface PrimaryActionsProps {
  onChatClick: () => void;
  onVideoClick: () => void;
}

const PrimaryActions: React.FC<PrimaryActionsProps> = ({ onChatClick, onVideoClick }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10 mb-12">
      <GlassButton 
        className="py-3 px-8 bg-white/10 border border-white/20 text-white hover:bg-white/15"
        onClick={onChatClick}
        icon={<MessageSquare className="h-5 w-5" />}
      >
        General Chat
      </GlassButton>
      
      <GlassButton 
        className="py-3 px-8 bg-white/10 border border-white/30 text-white hover:bg-white/15"
        variant="outline"
        onClick={onVideoClick}
        icon={<Video className="h-5 w-5" />}
        glow
      >
        Video Call
      </GlassButton>
    </div>
  );
};

export default PrimaryActions;
