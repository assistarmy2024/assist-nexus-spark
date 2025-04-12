
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import CharacterAvatar from '@/components/CharacterAvatar';
import LiveInteraction from '@/components/LiveInteraction';
import HomeCompanionNavBar from '@/components/HomeCompanionNavBar';
import { 
  SmartKitchenModule, 
  FamilyHealthModule, 
  AutoGroceryModule, 
  SmartHomeModule, 
  EnergyMonitorModule, 
  CalendarReminderModule 
} from '@/components/HomeCompanionModules';
import { ArrowRight, MessageCircle, Calendar, Clock, Video, Bell, Search } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const HomemakerJourney = () => {
  const navigate = useNavigate();
  const [showLiveInteraction, setShowLiveInteraction] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFeatureClick = (feature: string) => {
    toast({
      title: `HomeCompanion says:`,
      description: `I'll help you with ${feature}.`,
    });
    setShowLiveInteraction(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setShowLiveInteraction(true);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#141436] to-[#22143B]">
      <HomeCompanionNavBar onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      
      {/* Main content */}
      <main className="flex-grow w-full py-20 px-6">
        <div className="container mx-auto">
          {/* Welcome Section */}
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-70"></div>
            <GlassCard className="relative p-8 bg-gradient-to-br from-[#1F1346]/90 to-[#22143B]/90 border border-indigo-500/30 shadow-[0_8px_32px_rgba(31,41,55,0.4)]">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Welcome to HomeCompanion
                  </h1>
                  <p className="text-gray-300 mb-4 text-lg">
                    Your intelligent home management assistant
                  </p>
                  <div className="flex space-x-3">
                    <GlassButton 
                      className="bg-indigo-500/20 border border-indigo-500/30 text-white"
                      variant="neon"
                      onClick={() => setShowLiveInteraction(true)}
                      icon={<Video className="h-4 w-4 mr-2" />}
                    >
                      Start Interaction
                    </GlassButton>
                    <GlassButton 
                      className="border border-white/10 text-white"
                      variant="ghost"
                      onClick={() => handleFeatureClick('control panel')}
                    >
                      Control Panel
                    </GlassButton>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-full bg-indigo-500/30 blur-xl animate-pulse-gentle"></div>
                    <CharacterAvatar character="homemaker" size="xl" animated={true} />
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
          
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for automation, tips, or ask a question..." 
                className="w-full bg-white/5 border border-indigo-500/20 rounded-full px-6 py-4 pr-12 text-white outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-inner"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                onClick={() => setShowLiveInteraction(true)}
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <SmartKitchenModule onViewMore={() => handleFeatureClick('smart kitchen')} />
            <FamilyHealthModule onViewMore={() => handleFeatureClick('family health')} />
            <AutoGroceryModule onViewMore={() => handleFeatureClick('grocery assistant')} />
            <SmartHomeModule onViewMore={() => handleFeatureClick('smart home')} />
            <EnergyMonitorModule onViewMore={() => handleFeatureClick('energy usage')} />
            <CalendarReminderModule onViewMore={() => handleFeatureClick('calendar')} />
          </div>
          
          {/* Tips and Insights */}
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-60"></div>
            <GlassCard className="relative p-6 bg-gradient-to-br from-[#1F1346]/90 to-[#22143B]/90 border border-indigo-500/20">
              <h2 className="text-xl font-bold mb-4 text-white">Tips & Insights</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-900/30 to-purple-900/30 hover:from-indigo-900/40 hover:to-purple-900/40 cursor-pointer transition-colors">
                  <h3 className="text-lg font-medium text-white mb-2">Energy Saving Tip</h3>
                  <p className="text-gray-300 text-sm">Schedule your high-energy appliances to run during off-peak hours to save up to 20% on your electric bill.</p>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-br from-violet-900/30 to-indigo-900/30 hover:from-violet-900/40 hover:to-indigo-900/40 cursor-pointer transition-colors">
                  <h3 className="text-lg font-medium text-white mb-2">Meal Planning</h3>
                  <p className="text-gray-300 text-sm">Based on your refrigerator inventory, I've suggested 3 new recipes for this week that use ingredients you already have.</p>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-br from-fuchsia-900/30 to-pink-900/30 hover:from-fuchsia-900/40 hover:to-pink-900/40 cursor-pointer transition-colors">
                  <h3 className="text-lg font-medium text-white mb-2">Home Maintenance</h3>
                  <p className="text-gray-300 text-sm">Your HVAC filter is due for replacement. I can order a new one for delivery or add it to your shopping list.</p>
                </div>
              </div>
            </GlassCard>
          </div>
          
          {/* Quick Actions */}
          <div className="relative mb-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-50"></div>
            <GlassCard className="relative bg-gradient-to-br from-[#1F1346]/90 to-[#22143B]/90 border border-indigo-500/20">
              <h2 className="text-xl font-semibold mb-3 text-white">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button className="flex flex-col items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        onClick={() => handleFeatureClick('smart lights')}>
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-2">
                    <Sun className="h-6 w-6 text-yellow-400" />
                  </div>
                  <span className="text-white">Lights</span>
                </button>
                
                <button className="flex flex-col items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        onClick={() => handleFeatureClick('temperature')}>
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-2">
                    <Thermometer className="h-6 w-6 text-red-400" />
                  </div>
                  <span className="text-white">Temperature</span>
                </button>
                
                <button className="flex flex-col items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        onClick={() => handleFeatureClick('security')}>
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                    <Bell className="h-6 w-6 text-green-400" />
                  </div>
                  <span className="text-white">Security</span>
                </button>
                
                <button className="flex flex-col items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        onClick={() => handleFeatureClick('shopping list')}>
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
                    <Calendar className="h-6 w-6 text-blue-400" />
                  </div>
                  <span className="text-white">Calendar</span>
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-4 px-6">
        <div className="container mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-60"></div>
            <GlassCard className="relative p-4 bg-gradient-to-br from-[#1F1346]/90 to-[#22143B]/90 border border-indigo-500/20">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ask HomeCompanion..." 
                  className="w-full bg-black/20 border border-indigo-500/30 rounded-full px-6 py-3 pr-12 text-white outline-none focus:ring-2 focus:ring-indigo-500/50"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      setShowLiveInteraction(true);
                    }
                  }}
                />
                <button 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-2 shadow-lg shadow-indigo-500/20"
                  onClick={() => setShowLiveInteraction(true)}
                >
                  <div className="h-5 w-5 text-white flex items-center justify-center">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </footer>

      {/* Live Interaction Overlay */}
      {showLiveInteraction && (
        <LiveInteraction character="homemaker" onClose={() => setShowLiveInteraction(false)} />
      )}
    </div>
  );
};

export default HomemakerJourney;
