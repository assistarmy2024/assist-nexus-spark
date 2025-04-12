
import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Video, VideoOff, Users, MessageCircle, ScreenShare, Phone, Smile, Paperclip, Image, Video as VideoIcon, FileText } from 'lucide-react';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import CharacterAvatar from './CharacterAvatar';
import { toast } from '@/hooks/use-toast';

interface LiveInteractionProps {
  character: 'child' | 'elderly' | 'homemaker';
  onClose: () => void;
}

interface Message {
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

const getGreeting = (character: 'child' | 'elderly' | 'homemaker'): string => {
  switch (character) {
    case 'child':
      return "Hi there! I'm Alex. What would you like to learn about today?";
    case 'elderly':
      return "Hello! I'm Professor Wilson. How may I assist you today?";
    case 'homemaker':
      return "Hello! I'm HomeAssist AI. How can I help you manage your home today?";
  }
};

const getSuggestedResponses = (character: 'child' | 'elderly' | 'homemaker'): string[] => {
  switch (character) {
    case 'child':
      return [
        "Tell me a fun fact",
        "Can we play a game?",
        "Help me with my homework"
      ];
    case 'elderly':
      return [
        "How do I stay healthy?",
        "Show me how to video call my family",
        "Tell me about today's news"
      ];
    case 'homemaker':
      return [
        "Help me plan my meals this week",
        "Give me organization tips",
        "How can I track household expenses?"
      ];
  }
};

const LiveInteraction = ({ character, onClose }: LiveInteractionProps) => {
  const [micOn, setMicOn] = useState(false);
  const [videoOn, setVideoOn] = useState(false);
  const [screenShareOn, setScreenShareOn] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const suggestedResponses = getSuggestedResponses(character);
  
  const characterColors = {
    child: 'from-blue-500 to-indigo-600',
    elderly: 'from-teal-500 to-blue-600',
    homemaker: 'from-indigo-500 to-purple-600'
  };
  
  const characterNames = {
    child: 'Alex',
    elderly: 'Professor Wilson',
    homemaker: 'HomeAssist AI'
  };
  
  useEffect(() => {
    // Add initial greeting message
    setMessages([
      {
        sender: 'assistant',
        text: getGreeting(character),
        timestamp: new Date()
      }
    ]);
  }, [character]);
  
  const toggleMic = () => {
    setMicOn(!micOn);
    toast({
      title: micOn ? "Microphone turned off" : "Microphone turned on",
      description: micOn ? "You are now muted" : "You can now speak",
    });
  };
  
  const toggleVideo = () => {
    setVideoOn(!videoOn);
    toast({
      title: videoOn ? "Video turned off" : "Video turned on",
      description: videoOn ? "Your camera is now off" : "Your camera is now on",
    });
  };
  
  const toggleScreenShare = () => {
    setScreenShareOn(!screenShareOn);
    toast({
      title: screenShareOn ? "Screen sharing stopped" : "Screen sharing started",
      description: screenShareOn ? "You are no longer sharing your screen" : "You are now sharing your screen",
    });
  };
  
  const sendMessage = (text: string = inputValue) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      sender: 'user',
      text,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate assistant typing
    setIsTyping(true);
    
    // Simulate assistant response after a delay
    setTimeout(() => {
      let responseText = '';
      
      if (text.toLowerCase().includes('hello') || text.toLowerCase().includes('hi')) {
        responseText = `Hello! How can I help you today?`;
      } else if (text.toLowerCase().includes('help')) {
        responseText = `I'd be happy to help! What would you like assistance with?`;
      } else if (text.toLowerCase().includes('game') || text.toLowerCase().includes('play')) {
        responseText = `I know lots of fun games! Would you like to try a quiz or word game?`;
      } else if (text.toLowerCase().includes('weather')) {
        responseText = `I don't have real-time weather data, but I can help you access a weather app if needed!`;
      } else if (text.toLowerCase().includes('quiz')) {
        responseText = `I'd love to give you a quiz! Just say "start quiz" when you're ready.`;
      } else if (text.toLowerCase().includes('video')) {
        responseText = `I can show you some educational videos. Simply say "show videos" to see what's available.`;
      } else if (text.toLowerCase().includes('thank')) {
        responseText = `You're very welcome! I'm always here to help.`;
      } else if (text.toLowerCase().includes('meal') || text.toLowerCase().includes('food') || text.toLowerCase().includes('recipe')) {
        responseText = `I can suggest recipes based on ingredients you have or dietary preferences. Would you like some meal planning help?`;
      } else if (text.toLowerCase().includes('organize') || text.toLowerCase().includes('clean')) {
        responseText = `Here's a quick tip: Try the "one in, one out" rule to maintain organized spaces. For every new item you bring into your home, remove one item. Would you like more detailed organizing advice?`;
      } else if (text.toLowerCase().includes('budget') || text.toLowerCase().includes('expense') || text.toLowerCase().includes('money')) {
        responseText = `Creating a household budget starts with tracking your spending. I can help you set up a simple tracking system or suggest apps that make this easier. What specific aspect of financial management are you interested in?`;
      } else {
        responseText = `That's an interesting question! I'm here to help with learning, organizing, and daily activities. What specific area would you like to know more about?`;
      }
      
      const assistantMessage: Message = {
        sender: 'assistant',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50">
      <GlassCard 
        className="w-full max-w-4xl p-6" 
        is3D={true} 
        metallic={true}
        glowing={true}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Live Interaction with {characterNames[character]}</h2>
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
                <CharacterAvatar character={character} size="xl" animated={true} />
                <p className="text-white mt-4 text-lg">Turn on video to see {characterNames[character]}</p>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className={`w-64 h-64 rounded-full bg-gradient-to-r ${characterColors[character]} animate-pulse-gentle flex items-center justify-center`}>
                  <CharacterAvatar character={character} size="lg" animated={true} />
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
              <span className="ml-auto text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Active</span>
            </div>
            <div className="flex items-center space-x-3 p-2 hover:bg-white/5 rounded-lg">
              <Users className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">{characterNames[character]}</span>
              <span className="ml-auto text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Active</span>
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2 text-white">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-2">
                <GlassButton 
                  className="text-sm justify-start"
                  variant="outline"
                  onClick={() => sendMessage("Can you show me some videos?")}
                >
                  <VideoIcon className="h-4 w-4 mr-1" /> Videos
                </GlassButton>
                <GlassButton 
                  className="text-sm justify-start"
                  variant="outline"
                  onClick={() => sendMessage("I'd like to take a quiz")}
                >
                  <Image className="h-4 w-4 mr-1" /> Quiz
                </GlassButton>
                <GlassButton 
                  className="text-sm justify-start"
                  variant="outline"
                  onClick={() => sendMessage("Do you have any documents I can read?")}
                >
                  <FileText className="h-4 w-4 mr-1" /> Docs
                </GlassButton>
                <GlassButton 
                  className="text-sm justify-start"
                  variant="outline"
                  onClick={() => {
                    toast({
                      title: "Request Sent",
                      description: "Your assistance request has been sent",
                    });
                  }}
                >
                  <Users className="h-4 w-4 mr-1" /> Help
                </GlassButton>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="p-4 flex flex-col">
            <h3 className="text-lg font-semibold mb-2 text-white">Chat</h3>
            <div className="h-40 overflow-y-auto mb-2 p-2 bg-black/20 rounded-lg flex-grow">
              <div className="flex flex-col space-y-2">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`p-2 rounded-lg max-w-[85%] ${
                      message.sender === 'assistant' 
                        ? 'bg-blue-500/10 self-start' 
                        : 'bg-green-500/10 self-end'
                    }`}
                  >
                    <p className={`font-medium ${
                      message.sender === 'assistant' 
                      ? character === 'homemaker' 
                        ? 'text-indigo-400' 
                        : character === 'elderly' 
                          ? 'text-teal-400' 
                          : 'text-blue-400'
                      : 'text-green-400'
                    }`}>
                      {message.sender === 'assistant' ? characterNames[character] : 'You'}
                    </p>
                    <p className="text-gray-300">{message.text}</p>
                    <p className="text-xs text-gray-500 text-right mt-1">
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                ))}
                {isTyping && (
                  <div className="bg-blue-500/10 self-start p-2 rounded-lg">
                    <p className={`font-medium ${
                      character === 'homemaker' 
                        ? 'text-indigo-400' 
                        : character === 'elderly' 
                          ? 'text-teal-400' 
                          : 'text-blue-400'
                    }`}>
                      {characterNames[character]}
                    </p>
                    <div className="flex space-x-1">
                      <div className={`w-2 h-2 rounded-full animate-bounce ${
                        character === 'homemaker' 
                          ? 'bg-indigo-400' 
                          : character === 'elderly' 
                            ? 'bg-teal-400' 
                            : 'bg-blue-400'
                      }`}></div>
                      <div className={`w-2 h-2 rounded-full animate-bounce ${
                        character === 'homemaker' 
                          ? 'bg-indigo-400' 
                          : character === 'elderly' 
                            ? 'bg-teal-400' 
                            : 'bg-blue-400'
                      }`} style={{ animationDelay: '0.2s' }}></div>
                      <div className={`w-2 h-2 rounded-full animate-bounce ${
                        character === 'homemaker' 
                          ? 'bg-indigo-400' 
                          : character === 'elderly' 
                            ? 'bg-teal-400' 
                            : 'bg-blue-400'
                      }`} style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mb-2">
              <div className="flex flex-wrap gap-2">
                {suggestedResponses.map((response, index) => (
                  <button
                    key={index}
                    onClick={() => sendMessage(response)}
                    className={`px-3 py-1 text-sm bg-white/10 hover:bg-white/20 rounded-full text-gray-300 transition-colors hover:scale-105 transform ${
                      character === 'homemaker' 
                        ? 'hover:bg-indigo-500/20' 
                        : character === 'elderly' 
                          ? 'hover:bg-teal-500/20' 
                          : 'hover:bg-blue-500/20'
                    }`}
                  >
                    {response}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-2">
              <div className="relative flex-grow">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="w-full bg-black/30 border border-white/20 rounded-lg px-3 py-2 pr-24 text-white outline-none focus:ring-2 focus:ring-blue-500/50"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                  <button className="p-1 rounded-full hover:bg-white/10">
                    <Smile className="h-5 w-5 text-gray-400" />
                  </button>
                  <button className="p-1 rounded-full hover:bg-white/10">
                    <Paperclip className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>
              <GlassButton 
                variant="neon"
                onClick={() => sendMessage()}
                disabled={!inputValue.trim()}
                className={`${
                  character === 'homemaker' 
                    ? 'bg-indigo-500/20' 
                    : character === 'elderly' 
                      ? 'bg-teal-500/20' 
                      : 'bg-blue-500/20'
                } ${!inputValue.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
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
