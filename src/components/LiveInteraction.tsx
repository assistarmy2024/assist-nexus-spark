
import React, { useState } from 'react';
import { Mic, MicOff, Video, VideoOff, Users, MessageCircle, ScreenShare, Phone } from 'lucide-react';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import CharacterAvatar from './CharacterAvatar';

interface LiveInteractionProps {
  character: 'child' | 'elderly' | 'homemaker';
  onClose: () => void;
}

const LiveInteraction = ({ character, onClose }: LiveInteractionProps) => {
  const [micOn, setMicOn] = useState(false);
  const [videoOn, setVideoOn] = useState(false);
  const [screenShareOn, setScreenShareOn] = useState(false);
  
  const characterColors = {
    child: 'from-blue-500 to-indigo-600',
    elderly: 'from-teal-500 to-blue-600',
    homemaker: 'from-pink-500 to-purple-600'
  };
  
  const toggleMic = () => setMicOn(!micOn);
  const toggleVideo = () => setVideoOn(!videoOn);
  const toggleScreenShare = () => setScreenShareOn(!screenShareOn);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50">
      <GlassCard 
        className="w-full max-w-4xl p-6" 
        is3D={true} 
        metallic={true}
        glowing={true}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Live Interaction Session</h2>
          <GlassButton 
            variant="ghost" 
            onClick={onClose}
            className="text-white hover:text-red-400"
          >
            Close
          </GlassButton>
        </div>
        
        <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-gray-900 to-black">
          <div className="absolute inset-0 flex items-center justify-center">
            {!videoOn ? (
              <div className="flex flex-col items-center">
                <CharacterAvatar character={character} size="xl" />
                <p className="text-white mt-4 text-lg">Start video to see digital assistant</p>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className={`w-64 h-64 rounded-full bg-gradient-to-r ${characterColors[character]} animate-pulse-gentle flex items-center justify-center`}>
                  <CharacterAvatar character={character} size="lg" />
                </div>
              </div>
            )}
          </div>
          
          {/* Video controls overlay */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
            <GlassButton 
              variant="neon" 
              onClick={toggleMic}
              className={`rounded-full p-3 ${micOn ? 'bg-blue-500/20' : 'bg-red-500/20'}`}
            >
              {micOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
            </GlassButton>
            
            <GlassButton 
              variant="neon" 
              onClick={toggleVideo}
              className={`rounded-full p-3 ${videoOn ? 'bg-blue-500/20' : 'bg-red-500/20'}`}
            >
              {videoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
            </GlassButton>
            
            <GlassButton 
              variant="neon" 
              onClick={toggleScreenShare}
              className={`rounded-full p-3 ${screenShareOn ? 'bg-blue-500/20' : 'bg-gray-500/20'}`}
            >
              <ScreenShare className="h-5 w-5" />
            </GlassButton>
            
            <GlassButton 
              variant="neon" 
              onClick={onClose}
              className="rounded-full p-3 bg-red-500/40 hover:bg-red-500/60"
            >
              <Phone className="h-5 w-5 rotate-135" />
            </GlassButton>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GlassCard className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-white">Participants</h3>
            <div className="flex items-center space-x-3 p-2 hover:bg-white/5 rounded-lg">
              <Users className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">You</span>
            </div>
            <div className="flex items-center space-x-3 p-2 hover:bg-white/5 rounded-lg">
              <Users className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">{character === 'child' ? 'KidBot' : character === 'elderly' ? 'ElderAssist' : 'HomeCompanion'}</span>
            </div>
          </GlassCard>
          
          <GlassCard className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-white">Chat</h3>
            <div className="h-40 overflow-y-auto mb-2 p-2 bg-black/20 rounded-lg">
              <div className="flex flex-col space-y-2">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <p className="font-medium text-blue-400">System</p>
                  <p className="text-gray-300">Welcome to your live session!</p>
                </div>
                <div className="bg-green-500/10 p-2 rounded-lg">
                  <p className="font-medium text-green-400">Digital Assistant</p>
                  <p className="text-gray-300">Hello! How can I help you today?</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-grow bg-black/30 border border-white/20 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <GlassButton variant="neon">
                <MessageCircle className="h-5 w-5" />
              </GlassButton>
            </div>
          </GlassCard>
        </div>
      </GlassCard>
    </div>
  );
};

export default LiveInteraction;
