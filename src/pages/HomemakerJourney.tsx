
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import CharacterAvatar from '@/components/CharacterAvatar';
import { ArrowLeft, Calendar, ShoppingCart, Utensils, Wallet, Clock } from 'lucide-react';

const HomemakerJourney = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-radial from-assist-pink/10 to-transparent">
      {/* Header */}
      <header className="w-full py-6 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <GlassButton 
              variant="ghost" 
              className="text-white" 
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </GlassButton>
            <div className="flex items-center">
              <CharacterAvatar character="homemaker" size="sm" />
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow w-full py-6 px-6">
        <div className="container mx-auto">
          <GlassCard 
            theme="homemaker" 
            glowing={true} 
            className="mb-8 text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-assist-pink">
                  Welcome to GharSakhi!
                </h1>
                <p className="text-gray-300 mb-4">
                  Your personal home management assistant for planning, meals, and household tasks.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <CharacterAvatar character="homemaker" size="xl" />
              </div>
            </div>
          </GlassCard>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
            {/* Today's Overview */}
            <GlassCard className="md:col-span-8 p-6">
              <h2 className="text-xl font-semibold mb-4 text-assist-pink">Today's Overview</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-assist-pink/20 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-assist-pink" />
                  </div>
                  <div>
                    <p className="text-gray-300">9:00 AM - School drop-off</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-assist-pink/20 flex items-center justify-center mr-4">
                    <ShoppingCart className="h-5 w-5 text-assist-pink" />
                  </div>
                  <div>
                    <p className="text-gray-300">11:00 AM - Grocery shopping</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-assist-pink/20 flex items-center justify-center mr-4">
                    <Utensils className="h-5 w-5 text-assist-pink" />
                  </div>
                  <div>
                    <p className="text-gray-300">1:00 PM - Prepare lunch</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-assist-pink/20 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-assist-pink" />
                  </div>
                  <div>
                    <p className="text-gray-300">3:00 PM - School pickup</p>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            {/* Quick Actions */}
            <GlassCard className="md:col-span-4 p-6">
              <h2 className="text-xl font-semibold mb-4 text-assist-pink">Quick Actions</h2>
              <div className="space-y-3">
                <GlassButton className="w-full bg-assist-pink/10 text-assist-pink justify-start">
                  <Calendar className="mr-2 h-4 w-4" /> Add Task
                </GlassButton>
                <GlassButton className="w-full bg-assist-pink/10 text-assist-pink justify-start">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Shopping List
                </GlassButton>
                <GlassButton className="w-full bg-assist-pink/10 text-assist-pink justify-start">
                  <Wallet className="mr-2 h-4 w-4" /> Track Expense
                </GlassButton>
              </div>
            </GlassCard>
          </div>
          
          <h2 className="text-2xl font-semibold mb-6 text-center text-assist-pink">
            What would you like to manage today?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <GlassCard className="hover:scale-105 transition-transform cursor-pointer">
              <div className="flex flex-col items-center p-6">
                <div className="w-16 h-16 rounded-full bg-assist-pink/20 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-assist-pink" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-pink">Daily Planner</h3>
                <p className="text-gray-400 text-center">Organize your schedule and tasks</p>
              </div>
            </GlassCard>
            
            <GlassCard className="hover:scale-105 transition-transform cursor-pointer">
              <div className="flex flex-col items-center p-6">
                <div className="w-16 h-16 rounded-full bg-assist-pink/20 flex items-center justify-center mb-4">
                  <ShoppingCart className="h-8 w-8 text-assist-pink" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-pink">Shopping & Groceries</h3>
                <p className="text-gray-400 text-center">Manage shopping lists and deliveries</p>
              </div>
            </GlassCard>
            
            <GlassCard className="hover:scale-105 transition-transform cursor-pointer">
              <div className="flex flex-col items-center p-6">
                <div className="w-16 h-16 rounded-full bg-assist-pink/20 flex items-center justify-center mb-4">
                  <Utensils className="h-8 w-8 text-assist-pink" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-pink">Recipe Manager</h3>
                <p className="text-gray-400 text-center">Discover and save your favorite recipes</p>
              </div>
            </GlassCard>
            
            <GlassCard className="hover:scale-105 transition-transform cursor-pointer">
              <div className="flex flex-col items-center p-6">
                <div className="w-16 h-16 rounded-full bg-assist-pink/20 flex items-center justify-center mb-4">
                  <Wallet className="h-8 w-8 text-assist-pink" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-assist-pink">Budget Tracker</h3>
                <p className="text-gray-400 text-center">Track household expenses and budgets</p>
              </div>
            </GlassCard>
          </div>
          
          {/* Featured Recipe */}
          <GlassCard className="p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-assist-pink">Today's Recipe Suggestion</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                <div className="rounded-xl overflow-hidden">
                  <div className="w-full h-48 bg-black/30 flex items-center justify-center">
                    <Utensils className="h-16 w-16 text-assist-pink/50" />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-lg font-medium mb-2 text-white">Easy Dinner Pasta</h3>
                <p className="text-gray-400 mb-4">A quick and nutritious pasta dish perfect for busy weeknights.</p>
                <div className="flex space-x-4">
                  <div className="text-gray-400 text-sm">
                    <span className="font-medium text-assist-pink">Prep Time:</span> 10 mins
                  </div>
                  <div className="text-gray-400 text-sm">
                    <span className="font-medium text-assist-pink">Cook Time:</span> 20 mins
                  </div>
                  <div className="text-gray-400 text-sm">
                    <span className="font-medium text-assist-pink">Servings:</span> 4
                  </div>
                </div>
                <GlassButton className="mt-4 bg-assist-pink/10 text-assist-pink">
                  View Recipe
                </GlassButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-4 px-6">
        <div className="container mx-auto">
          <GlassCard className="p-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask GharSakhi..." 
                className="w-full bg-black/30 border border-assist-pink/30 rounded-full px-6 py-3 pr-12 text-white outline-none focus:ring-2 focus:ring-assist-pink/50"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-assist-pink rounded-full p-2">
                <div className="h-5 w-5 text-white flex items-center justify-center">
                  🏡
                </div>
              </button>
            </div>
          </GlassCard>
        </div>
      </footer>
    </div>
  );
};

export default HomemakerJourney;
