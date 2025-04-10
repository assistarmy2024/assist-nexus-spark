
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import { ArrowLeft } from 'lucide-react';

const ElderlyJourney = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0A192F] to-[#0F2540]">
      {/* Header */}
      <header className="w-full py-6 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <GlassButton 
              variant="ghost" 
              className="text-white text-lg" 
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="mr-2 h-6 w-6" /> Back
            </GlassButton>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-teal-500/20 border border-teal-500/40"></div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow w-full py-6 px-6">
        <div className="container mx-auto">
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-70"></div>
            <GlassCard className="relative p-8 bg-gradient-to-br from-[#0F2540]/90 to-[#0A192F]/90 border border-teal-500/30 shadow-[0_8px_32px_rgba(31,41,55,0.4)]">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Hello! How can I assist you today?
                  </h1>
                  <p className="text-gray-300 mb-4 text-lg">
                    I'm Mitraji, your friendly assistant.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <img 
                    src="/lovable-uploads/90dbbc65-0863-4336-be06-5bb181d34086.png" 
                    alt="Elderly Assistant" 
                    className="w-48 h-48 object-contain animate-float"
                  />
                </div>
              </div>
            </GlassCard>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {/* Call Family */}
            <div className="relative group cursor-pointer col-span-1 md:col-span-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#0F2540]/90 to-[#0A192F]/90 backdrop-blur-md rounded-2xl border border-teal-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex items-center">
                <div className="p-3 mr-4 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg">
                  <div className="text-teal-400 text-3xl">📞</div>
                </div>
                <div>
                  <p className="text-white font-medium">Call Family</p>
                  <p className="text-gray-400 text-sm">Connect with your loved ones</p>
                </div>
              </div>
            </div>
            
            {/* Messages */}
            <div className="relative group cursor-pointer col-span-1 md:col-span-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#0F2540]/90 to-[#0A192F]/90 backdrop-blur-md rounded-2xl border border-blue-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex items-center">
                <div className="p-3 mr-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg">
                  <div className="text-blue-400 text-3xl">💬</div>
                </div>
                <div>
                  <p className="text-white font-medium">Messages</p>
                  <p className="text-gray-400 text-sm">Send & receive messages</p>
                </div>
              </div>
            </div>
            
            {/* Reminder */}
            <div className="relative group cursor-pointer col-span-1 md:col-span-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#0F2540]/90 to-[#0A192F]/90 backdrop-blur-md rounded-2xl border border-amber-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex items-center">
                <div className="p-3 mr-4 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-lg">
                  <div className="text-amber-400 text-3xl">⏰</div>
                </div>
                <div>
                  <p className="text-white font-medium">Medication Reminder</p>
                  <p className="text-gray-400 text-sm">Never miss your important medications</p>
                </div>
              </div>
            </div>
            
            {/* Emergency */}
            <div className="relative group cursor-pointer col-span-1 md:col-span-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-200"></div>
              <div className="relative p-5 bg-gradient-to-br from-[#0F2540]/90 to-[#0A192F]/90 backdrop-blur-md rounded-2xl border border-red-500/20 transition-all duration-300 group-hover:translate-y-[-4px] h-full flex items-center">
                <div className="p-3 mr-4 bg-gradient-to-br from-red-500/20 to-rose-500/20 rounded-lg">
                  <div className="text-red-400 text-3xl">🚨</div>
                </div>
                <div>
                  <p className="text-white font-medium">Emergency</p>
                  <p className="text-gray-400 text-sm">Get immediate assistance</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative mb-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-50"></div>
            <GlassCard className="relative bg-gradient-to-br from-[#0F2540]/90 to-[#0A192F]/90 border border-teal-500/20">
              <h2 className="text-xl font-semibold mb-3 text-white">Today's Schedule</h2>
              <div className="space-y-3">
                <div className="flex items-center p-3 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center mr-4 text-xl">
                    💊
                  </div>
                  <div className="flex-grow">
                    <p className="text-white">Blood pressure medicine - 9:00 AM</p>
                    <p className="text-gray-400 text-sm">Take with food</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4 text-xl">
                    🧠
                  </div>
                  <div className="flex-grow">
                    <p className="text-white">Memory exercise - 11:00 AM</p>
                    <p className="text-gray-400 text-sm">Daily brain training</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mr-4 text-xl">
                    📱
                  </div>
                  <div className="flex-grow">
                    <p className="text-white">Video call with family - 6:00 PM</p>
                    <p className="text-gray-400 text-sm">Weekly call with children</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
          
          {/* Emergency button */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-rose-500 rounded-xl blur opacity-70"></div>
            <GlassCard className="relative text-center p-5 bg-gradient-to-br from-[#3A0F13]/90 to-[#2C0F14]/90 border-2 border-red-500/40">
              <button className="w-full bg-gradient-to-r from-red-500 to-rose-500 text-white text-xl font-bold py-4 rounded-xl">
                EMERGENCY ASSISTANCE
              </button>
              <p className="text-gray-400 mt-2">Tap for immediate help or to contact emergency services</p>
            </GlassCard>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-4 px-6">
        <div className="container mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl blur opacity-60"></div>
            <GlassCard className="relative p-6 bg-gradient-to-br from-[#0F2540]/90 to-[#0A192F]/90 border border-teal-500/20">
              <div className="text-center mb-4">
                <p className="text-xl text-teal-400">Speak to Mitraji</p>
                <p className="text-gray-400">Just say "Hey Mitraji" or tap the button below</p>
              </div>
              <div className="flex justify-center">
                <button className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 flex items-center justify-center shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:scale-105 transition-all duration-300">
                  <div className="text-teal-400 text-2xl">🎤</div>
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ElderlyJourney;
