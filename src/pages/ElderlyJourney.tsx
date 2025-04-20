
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import CharacterAvatar from '@/components/CharacterAvatar';
import LiveInteraction from '@/components/LiveInteraction';
import { Calendar, Clock, PillBottle, Stethoscope, Heart, Video, Phone, Info, Bell } from 'lucide-react';

const ElderlyJourney = () => {
  const navigate = useNavigate();
  const [showLiveInteraction, setShowLiveInteraction] = useState(false);
  
  return (
    <div className="bg-gradient-to-b from-[#0C4A6E] to-[#0E7490] min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full px-4 py-4 flex justify-between items-center bg-gradient-to-r from-[#0C4A6E]/80 to-[#0E7490]/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center mr-3">
            <Heart className="h-5 w-5 text-teal-400" />
          </div>
          <h1 className="text-xl font-bold text-white">ElderAssist</h1>
        </div>
        <div className="flex items-center space-x-2">
          <GlassButton 
            variant="ghost" 
            className="text-white"
            size="sm"
          >
            Settings
          </GlassButton>
          <GlassButton 
            onClick={() => navigate('/')}
            variant="outline" 
            className="text-white border-white/20"
            size="sm"
          >
            Exit
          </GlassButton>
        </div>
      </header>
      
      {/* Main Content with fixed height container */}
      <main className="flex-1 container mx-auto px-4 py-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 160px)' }}>
        {/* Welcome Section */}
        <section className="mb-8">
          <GlassCard 
            className="p-4 md:p-6 border border-teal-500/30 shadow-lg" 
            theme="elderly"
            hoverEffect={false}
            appear="fade"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-4 md:mb-0 md:pr-4">
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-white">
                  Welcome to ElderAssist
                </h2>
                <p className="text-teal-100 mb-4">
                  Your personal assistant for health tracking, medication reminders, and staying connected with loved ones.
                </p>
                <GlassButton 
                  className="bg-teal-500/30 border border-teal-500/50 text-white"
                  onClick={() => setShowLiveInteraction(true)}
                >
                  How Can I Help?
                </GlassButton>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <CharacterAvatar character="elderly" size="lg" animated={false} />
              </div>
            </div>
          </GlassCard>
        </section>
        
        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-white">Daily Assistance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button 
              className="bg-gradient-to-br from-teal-600/30 to-teal-800/30 p-4 rounded-xl flex flex-col items-center hover:from-teal-600/40 hover:to-teal-800/40 transition-colors"
              onClick={() => navigate('/elderly/medications')}
            >
              <div className="w-14 h-14 rounded-full bg-teal-500/20 flex items-center justify-center mb-2">
                <PillBottle className="h-7 w-7 text-teal-300" />
              </div>
              <span className="text-white font-medium">Medications</span>
            </button>
            
            <button 
              className="bg-gradient-to-br from-blue-600/30 to-blue-800/30 p-4 rounded-xl flex flex-col items-center hover:from-blue-600/40 hover:to-blue-800/40 transition-colors"
              onClick={() => navigate('/elderly/health')}
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
                <Stethoscope className="h-7 w-7 text-blue-300" />
              </div>
              <span className="text-white font-medium">Health</span>
            </button>
            
            <button 
              className="bg-gradient-to-br from-cyan-600/30 to-cyan-800/30 p-4 rounded-xl flex flex-col items-center hover:from-cyan-600/40 hover:to-cyan-800/40 transition-colors"
              onClick={() => navigate('/elderly/calendar')}
            >
              <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center mb-2">
                <Calendar className="h-7 w-7 text-cyan-300" />
              </div>
              <span className="text-white font-medium">Calendar</span>
            </button>
            
            <button 
              className="bg-gradient-to-br from-sky-600/30 to-sky-800/30 p-4 rounded-xl flex flex-col items-center hover:from-sky-600/40 hover:to-sky-800/40 transition-colors"
              onClick={() => navigate('/elderly/contacts')}
            >
              <div className="w-14 h-14 rounded-full bg-sky-500/20 flex items-center justify-center mb-2">
                <Phone className="h-7 w-7 text-sky-300" />
              </div>
              <span className="text-white font-medium">Contacts</span>
            </button>
          </div>
        </section>
        
        {/* Today's Overview */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-white">Today's Overview</h2>
          <GlassCard className="p-5 mb-4 bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-white">Medication Schedule</h3>
              <Clock className="h-5 w-5 text-teal-300" />
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="text-white font-medium">Blood Pressure Medication</p>
                  <p className="text-teal-200 text-sm">1 tablet with breakfast</p>
                </div>
                <div className="bg-teal-500/20 px-2 py-1 rounded text-sm text-teal-300">
                  8:00 AM
                </div>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="text-white font-medium">Vitamin D Supplement</p>
                  <p className="text-teal-200 text-sm">1 tablet daily</p>
                </div>
                <div className="bg-teal-500/20 px-2 py-1 rounded text-sm text-teal-300">
                  8:00 AM
                </div>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="text-white font-medium">Heart Medication</p>
                  <p className="text-teal-200 text-sm">1 tablet after dinner</p>
                </div>
                <div className="bg-teal-500/20 px-2 py-1 rounded text-sm text-teal-300">
                  6:00 PM
                </div>
              </div>
            </div>
            
            <GlassButton className="w-full mt-4" variant="outline">
              View Full Schedule
            </GlassButton>
          </GlassCard>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GlassCard className="p-5 bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-white">Appointments</h3>
                <Calendar className="h-5 w-5 text-blue-300" />
              </div>
              
              <div className="p-3 bg-white/5 rounded-lg mb-3">
                <p className="text-white font-medium">Dr. Johnson - Checkup</p>
                <p className="text-blue-200 text-sm">Tomorrow, 10:00 AM</p>
              </div>
              
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-white font-medium">Physical Therapy</p>
                <p className="text-blue-200 text-sm">Friday, 2:00 PM</p>
              </div>
            </GlassCard>
            
            <GlassCard className="p-5 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-white">Family Check-ins</h3>
                <Video className="h-5 w-5 text-cyan-300" />
              </div>
              
              <div className="p-3 bg-white/5 rounded-lg mb-3">
                <p className="text-white font-medium">Video Call with Sarah</p>
                <p className="text-cyan-200 text-sm">Today, 5:00 PM</p>
              </div>
              
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-white font-medium">Call with Michael</p>
                <p className="text-cyan-200 text-sm">Wednesday, 7:00 PM</p>
              </div>
            </GlassCard>
          </div>
        </section>
        
        {/* Health Tips */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-4 text-white">Health Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-teal-900/30 to-blue-900/30 hover:from-teal-900/40 hover:to-blue-900/40 cursor-pointer transition-colors">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center mr-2">
                  <Info className="h-4 w-4 text-teal-300" />
                </div>
                <h3 className="text-lg font-medium text-white">Stay Hydrated</h3>
              </div>
              <p className="text-teal-100 text-sm">Remember to drink at least 8 glasses of water daily for optimal health.</p>
            </div>
            
            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-900/30 to-cyan-900/30 hover:from-blue-900/40 hover:to-cyan-900/40 cursor-pointer transition-colors">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                  <Heart className="h-4 w-4 text-blue-300" />
                </div>
                <h3 className="text-lg font-medium text-white">Daily Movement</h3>
              </div>
              <p className="text-blue-100 text-sm">A short walk each day helps maintain heart health and joint mobility.</p>
            </div>
            
            <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-900/30 to-sky-900/30 hover:from-cyan-900/40 hover:to-sky-900/40 cursor-pointer transition-colors">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center mr-2">
                  <Bell className="h-4 w-4 text-cyan-300" />
                </div>
                <h3 className="text-lg font-medium text-white">Medication Adherence</h3>
              </div>
              <p className="text-cyan-100 text-sm">Taking medications at the same time each day helps maintain their effectiveness.</p>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="w-full px-4 py-4 bg-gradient-to-r from-[#0C4A6E]/80 to-[#0E7490]/80 backdrop-blur-md mt-auto sticky bottom-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-white text-sm">© 2025 ElderAssist</p>
          <GlassButton 
            onClick={() => setShowLiveInteraction(true)}
            variant="outline" 
            className="border-teal-500/30 text-teal-100"
            size="sm"
          >
            Ask ElderAssist
          </GlassButton>
        </div>
      </footer>
      
      {showLiveInteraction && (
        <LiveInteraction 
          character="elderly" 
          onClose={() => setShowLiveInteraction(false)} 
        />
      )}
    </div>
  );
};

export default ElderlyJourney;
