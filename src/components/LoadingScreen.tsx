
import React from 'react';
import { Sparkles, Loader } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
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
};
