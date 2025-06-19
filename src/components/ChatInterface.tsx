
import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export const ChatInterface = () => {
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
