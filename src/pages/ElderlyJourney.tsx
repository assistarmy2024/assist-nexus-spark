
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import CharacterAvatar from '@/components/CharacterAvatar';
import { ArrowLeft, Phone, Bell, Heart, Music, Newspaper } from 'lucide-react';

const ElderlyJourney = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-radial from-assist-teal/10 to-transparent">
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
            <div className="flex items-center">
              <CharacterAvatar character="elderly" size="sm" />
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow w-full py-6 px-6">
        <div className="container mx-auto">
          <GlassCard 
            theme="elderly" 
            glowing={true} 
            className="mb-8 text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-assist-teal">
                  Welcome, Mitraji is here!
                </h1>
                <p className="text-gray-300 mb-4 text-lg">
                  Your helpful companion for daily assistance, health reminders, and staying connected.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <CharacterAvatar character="elderly" size="xl" />
              </div>
            </div>
          </GlassCard>
          
          <h2 className="text-2xl font-semibold mb-6 text-center text-assist-teal">
            How can I help you today?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <GlassCard className="hover:scale-105 transition-transform cursor-pointer p-6">
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-full bg-assist-teal/20 flex items-center justify-center mr-6">
                  <Phone className="h-10 w-10 text-assist-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-assist-teal">Call Family</h3>
                  <p className="text-gray-400">Connect with your loved ones with a simple voice command</p>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="hover:scale-105 transition-transform cursor-pointer p-6">
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-full bg-assist-teal/20 flex items-center justify-center mr-6">
                  <Bell className="h-10 w-10 text-assist-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-assist-teal">Medication Reminders</h3>
                  <p className="text-gray-400">Never miss your important medications</p>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="hover:scale-105 transition-transform cursor-pointer p-6">
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-full bg-assist-teal/20 flex items-center justify-center mr-6">
                  <Heart className="h-10 w-10 text-assist-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-assist-teal">Health Journal</h3>
                  <p className="text-gray-400">Track your health readings and symptoms</p>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="hover:scale-105 transition-transform cursor-pointer p-6">
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-full bg-assist-teal/20 flex items-center justify-center mr-6">
                  <Music className="h-10 w-10 text-assist-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-assist-teal">Music & Devotional</h3>
                  <p className="text-gray-400">Listen to your favorite music and devotional content</p>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="hover:scale-105 transition-transform cursor-pointer p-6">
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-full bg-assist-teal/20 flex items-center justify-center mr-6">
                  <Newspaper className="h-10 w-10 text-assist-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-assist-teal">News Headlines</h3>
                  <p className="text-gray-400">Listen to the latest news updates</p>
                </div>
              </div>
            </GlassCard>
          </div>
          
          {/* Emergency button */}
          <GlassCard 
            theme="elderly" 
            glowing={true} 
            className="text-center p-8 border-2 border-red-500"
          >
            <button className="w-full bg-red-500 text-white text-xl font-bold py-4 rounded-xl">
              EMERGENCY ASSISTANCE
            </button>
            <p className="text-gray-400 mt-2">Tap for immediate help or to contact emergency services</p>
          </GlassCard>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-4 px-6">
        <div className="container mx-auto">
          <GlassCard className="p-6">
            <div className="text-center mb-4">
              <p className="text-xl text-assist-teal">Speak to Mitraji</p>
              <p className="text-gray-400">Just say "Hey Mitraji" or tap the button below</p>
            </div>
            <div className="flex justify-center">
              <button className="w-20 h-20 rounded-full bg-assist-teal/20 flex items-center justify-center">
                <div className="h-10 w-10 text-assist-teal flex items-center justify-center">
                  🎤
                </div>
              </button>
            </div>
          </GlassCard>
        </div>
      </footer>
    </div>
  );
};

export default ElderlyJourney;
