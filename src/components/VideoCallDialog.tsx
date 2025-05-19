
import React from 'react';
import { Video } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface VideoCallDialogProps {
  selectedVideo: string | null;
  onOpenChange: (open: boolean) => void;
}

export const VideoCallDialog = ({ selectedVideo, onOpenChange }: VideoCallDialogProps) => {
  if (!selectedVideo) return null;

  const getTitle = () => {
    switch (selectedVideo) {
      case 'general': return 'General Lobby';
      case 'children': return 'KidBot';
      case 'elderly': return 'ElderAssist';
      case 'homemaker': return 'HomeCompanion';
      case 'student': return 'StudyBuddy';
      case 'healthcare': return 'MedicoMate';
      case 'business': return 'BizAdvisor';
      default: return '';
    }
  };

  return (
    <Dialog open={!!selectedVideo} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#121a3a] border border-white/10 text-white max-w-lg">
        <DialogHeader>
          <DialogTitle>Video Call - {getTitle()}</DialogTitle>
          <DialogDescription className="text-white/70">
            Your video call session would start here
          </DialogDescription>
        </DialogHeader>
        <div className="aspect-video bg-black/50 rounded-md flex items-center justify-center">
          <Video className="w-16 h-16 text-white/30" />
        </div>
        <p className="text-center text-white/70">
          Video call functionality would be implemented here
        </p>
      </DialogContent>
    </Dialog>
  );
};
