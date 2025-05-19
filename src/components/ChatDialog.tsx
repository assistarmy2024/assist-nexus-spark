
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { ChatInterface } from './ChatInterface';

interface ChatDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  isMobile: boolean;
}

export const ChatDialog = ({ isOpen, onOpenChange, isMobile }: ChatDialogProps) => {
  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={onOpenChange}>
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
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
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
  );
};
