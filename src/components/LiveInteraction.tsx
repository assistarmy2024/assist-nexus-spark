
import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Video, VideoOff, Users, MessageCircle, ScreenShare, Phone, Smile, Paperclip, Image, Video as VideoIcon, FileText, Loader } from 'lucide-react';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import CharacterAvatar from './CharacterAvatar';
import { toast } from '@/hooks/use-toast';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface LiveInteractionProps {
  character: 'child' | 'elderly' | 'homemaker';
  onClose: () => void;
}

interface Message {
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

// Dummy data for different sections
const dummyQuizData = [
  { question: "What is the capital of France?", options: ["London", "Paris", "Berlin", "Madrid"], answer: "Paris" },
  { question: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], answer: "8" },
  { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" }
];

const dummyHealthTips = [
  "Drink at least 8 glasses of water daily",
  "Take a 30-minute walk every day",
  "Eat leafy greens with every meal",
  "Practice deep breathing for 5 minutes daily"
];

const dummyGroceryList = [
  { item: "Milk", quantity: "1 gallon", priority: "High" },
  { item: "Eggs", quantity: "1 dozen", priority: "High" },
  { item: "Bread", quantity: "1 loaf", priority: "Medium" },
  { item: "Apples", quantity: "6", priority: "Medium" }
];

const dummyStories = [
  "The Adventures of Space Cat: Join Mittens the cat on an adventure through the stars!",
  "The Friendly Robot: Learn about friendship with Robo the helpful robot.",
  "Dinosaur Days: Travel back in time to when dinosaurs ruled the Earth!"
];

const getGreeting = (character: 'child' | 'elderly' | 'homemaker'): string => {
  switch (character) {
    case 'child':
      return "Hi there! I'm KidBot. What would you like to learn about today?";
    case 'elderly':
      return "Hello! I'm ElderAssist. How may I assist you today?";
    case 'homemaker':
      return "Hello! I'm HomeCompanion. How can I help manage your home today?";
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
  const [activeTab, setActiveTab] = useState<'chat' | 'quiz' | 'health' | 'grocery' | 'stories'>('chat');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  
  const suggestedResponses = getSuggestedResponses(character);
  
  const characterColors = {
    child: 'from-blue-500 to-indigo-600',
    elderly: 'from-teal-500 to-blue-600',
    homemaker: 'from-indigo-500 to-purple-600'
  };
  
  const characterNames = {
    child: 'KidBot',
    elderly: 'ElderAssist',
    homemaker: 'HomeCompanion'
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

  useEffect(() => {
    // Scroll to the bottom of the messages container
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
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
  
  const generateAIResponse = (userText: string): string => {
    // Simple pattern matching for demo purposes
    if (userText.toLowerCase().includes('hello') || userText.toLowerCase().includes('hi')) {
      return `Hello! How can I help you today?`;
    } else if (userText.toLowerCase().includes('help')) {
      return `I'd be happy to help! What would you like assistance with?`;
    } else if (userText.toLowerCase().includes('game') || userText.toLowerCase().includes('play')) {
      return `I know lots of fun games! Would you like to try a quiz or word game?`;
    } else if (userText.toLowerCase().includes('weather')) {
      return `I don't have real-time weather data, but I can help you access a weather app if needed!`;
    } else if (userText.toLowerCase().includes('quiz')) {
      setActiveTab('quiz');
      return `I've opened the quiz section for you. Let's test your knowledge!`;
    } else if (userText.toLowerCase().includes('video')) {
      return `I can show you some educational videos. Simply say "show videos" to see what's available.`;
    } else if (userText.toLowerCase().includes('thank')) {
      return `You're very welcome! I'm always here to help.`;
    } else if (userText.toLowerCase().includes('meal') || userText.toLowerCase().includes('food') || userText.toLowerCase().includes('recipe')) {
      return `I can suggest recipes based on ingredients you have or dietary preferences. Would you like some meal planning help?`;
    } else if (userText.toLowerCase().includes('organize') || userText.toLowerCase().includes('clean')) {
      return `Here's a quick tip: Try the "one in, one out" rule to maintain organized spaces. For every new item you bring into your home, remove one item. Would you like more detailed organizing advice?`;
    } else if (userText.toLowerCase().includes('budget') || userText.toLowerCase().includes('expense') || userText.toLowerCase().includes('money')) {
      return `Creating a household budget starts with tracking your spending. I can help you set up a simple tracking system or suggest apps that make this easier. What specific aspect of financial management are you interested in?`;
    } else if (userText.toLowerCase().includes('health') || userText.toLowerCase().includes('wellness')) {
      setActiveTab('health');
      return `I've opened the health tips section for you. Here are some daily wellness suggestions!`;
    } else if (userText.toLowerCase().includes('grocery') || userText.toLowerCase().includes('shopping')) {
      setActiveTab('grocery');
      return `I've opened your grocery list. Here are the items you need to buy!`;
    } else if (userText.toLowerCase().includes('story') || userText.toLowerCase().includes('stories') || userText.toLowerCase().includes('book')) {
      setActiveTab('stories');
      return `I've opened the stories section. Here are some fun stories we can read together!`;
    } else {
      return `That's an interesting question! I'm here to help with learning, organizing, and daily activities. What specific area would you like to know more about?`;
    }
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
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const responseText = generateAIResponse(text);
      
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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'quiz':
        return (
          <div className="bg-black/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Knowledge Quiz</h3>
            <div className="space-y-6">
              {dummyQuizData.map((quiz, index) => (
                <div key={index} className="bg-white/5 p-4 rounded-lg">
                  <p className="text-white font-medium mb-2">{quiz.question}</p>
                  <div className="grid grid-cols-1 gap-2">
                    {quiz.options.map((option, optIndex) => (
                      <button 
                        key={optIndex} 
                        className={`p-2 rounded-lg text-left pl-4 transition-colors ${option === quiz.answer ? 'hover:bg-green-500/30 border border-green-500/30' : 'hover:bg-white/10 border border-white/10'}`}
                        onClick={() => {
                          if (option === quiz.answer) {
                            toast({
                              title: "Correct!",
                              description: `${option} is the right answer.`,
                            });
                          } else {
                            toast({
                              title: "Not quite right",
                              description: `The correct answer is ${quiz.answer}.`,
                              variant: "destructive"
                            });
                          }
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'health':
        return (
          <div className="bg-black/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Daily Health Tips</h3>
            <div className="space-y-3">
              {dummyHealthTips.map((tip, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    character === 'elderly' ? 'bg-teal-500/20' : 'bg-blue-500/20'
                  }`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-300">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'grocery':
        return (
          <div className="bg-black/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Grocery List</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white">Item</TableHead>
                  <TableHead className="text-white">Quantity</TableHead>
                  <TableHead className="text-white">Priority</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyGroceryList.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-white">{item.item}</TableCell>
                    <TableCell className="text-gray-300">{item.quantity}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.priority === 'High' 
                          ? 'bg-red-500/20 text-red-300' 
                          : item.priority === 'Medium'
                            ? 'bg-yellow-500/20 text-yellow-300'
                            : 'bg-green-500/20 text-green-300'
                      }`}>
                        {item.priority}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );
      case 'stories':
        return (
          <div className="bg-black/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Interactive Stories</h3>
            <div className="space-y-4">
              {dummyStories.map((story, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg bg-gradient-to-br from-blue-900/30 to-purple-900/30 hover:from-blue-900/40 hover:to-purple-900/40 cursor-pointer transition-colors"
                  onClick={() => {
                    sendMessage(`Tell me the story about ${story.split(":")[0]}`);
                    setActiveTab('chat');
                  }}
                >
                  <p className="text-white font-medium">{story.split(":")[0]}</p>
                  <p className="text-gray-400 text-sm mt-1">{story.split(":")[1]}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
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
              <div ref={messagesEndRef} />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50">
      <GlassCard 
        className="w-full max-w-5xl p-6" 
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <GlassCard className="p-4 h-full flex flex-col">
              <h3 className="text-lg font-semibold mb-4 text-white">Features</h3>
              <div className="space-y-2 flex-grow">
                <button 
                  className={`w-full p-3 text-left rounded-lg transition-colors flex items-center ${activeTab === 'chat' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                  onClick={() => setActiveTab('chat')}
                >
                  <MessageCircle className="h-5 w-5 mr-3 text-blue-400" />
                  <span className="text-white">Chat</span>
                </button>
                
                <button 
                  className={`w-full p-3 text-left rounded-lg transition-colors flex items-center ${activeTab === 'quiz' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                  onClick={() => setActiveTab('quiz')}
                >
                  <Brain className="h-5 w-5 mr-3 text-purple-400" />
                  <span className="text-white">Quiz</span>
                </button>
                
                <button 
                  className={`w-full p-3 text-left rounded-lg transition-colors flex items-center ${activeTab === 'health' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                  onClick={() => setActiveTab('health')}
                >
                  <FileText className="h-5 w-5 mr-3 text-teal-400" />
                  <span className="text-white">Health Tips</span>
                </button>
                
                <button 
                  className={`w-full p-3 text-left rounded-lg transition-colors flex items-center ${activeTab === 'grocery' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                  onClick={() => setActiveTab('grocery')}
                >
                  <Image className="h-5 w-5 mr-3 text-green-400" />
                  <span className="text-white">Grocery List</span>
                </button>
                
                <button 
                  className={`w-full p-3 text-left rounded-lg transition-colors flex items-center ${activeTab === 'stories' ? 'bg-white/20' : 'hover:bg-white/10'}`}
                  onClick={() => setActiveTab('stories')}
                >
                  <VideoIcon className="h-5 w-5 mr-3 text-amber-400" />
                  <span className="text-white">Stories</span>
                </button>
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
                    <Brain className="h-4 w-4 mr-1" /> Quiz
                  </GlassButton>
                  <GlassButton 
                    className="text-sm justify-start"
                    variant="outline"
                    onClick={() => sendMessage("Do you have any health tips?")}
                  >
                    <FileText className="h-4 w-4 mr-1" /> Health
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
          </div>
          
          <GlassCard className="p-4 flex flex-col md:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">
                {activeTab === 'chat' ? 'Chat' : 
                 activeTab === 'quiz' ? 'Knowledge Quiz' :
                 activeTab === 'health' ? 'Health Tips' :
                 activeTab === 'grocery' ? 'Grocery List' : 'Interactive Stories'}
              </h3>
              {activeTab !== 'chat' && (
                <GlassButton 
                  variant="ghost" 
                  size="sm"
                  className="text-white hover:text-blue-400"
                  onClick={() => setActiveTab('chat')}
                >
                  <MessageCircle className="h-4 w-4 mr-1" /> Back to Chat
                </GlassButton>
              )}
            </div>
            
            {renderTabContent()}
            
            {activeTab === 'chat' && (
              <>
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
              </>
            )}
          </GlassCard>
        </div>
      </GlassCard>
    </div>
  );
};

export default LiveInteraction;
