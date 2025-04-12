
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import CharacterAvatar from '@/components/CharacterAvatar';
import LiveInteraction from '@/components/LiveInteraction';
import Quiz from '@/components/Quiz';
import InteractiveVideo from '@/components/InteractiveVideo';
import Documents from '@/components/Documents';
import { 
  ArrowLeft, Calendar, ShoppingCart, Utensils, Wallet, Clock, 
  Bell, Heart, Check, Plus, Video, BookOpen, ImageIcon, 
  Sparkles, Briefcase, Home, Settings, LayoutDashboard,
  Moon, Sun, Star, Zap, FileText, Users, ListChecks, LineChart
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Dummy data for the home management system
const dummyTasks = [
  { id: 1, title: "School drop-off", time: "9:00 AM", icon: "Clock", category: "daily", completed: false },
  { id: 2, title: "Grocery shopping", time: "11:00 AM", icon: "ShoppingCart", category: "shopping", completed: false },
  { id: 3, title: "Prepare lunch", time: "1:00 PM", icon: "Utensils", category: "meals", completed: false },
  { id: 4, title: "School pickup", time: "3:00 PM", icon: "Clock", category: "daily", completed: false },
  { id: 5, title: "Home maintenance", time: "5:00 PM", icon: "Home", category: "home", completed: true },
  { id: 6, title: "Family dinner", time: "7:00 PM", icon: "Utensils", category: "meals", completed: true },
];

const dummyRecipes = [
  {
    id: 1,
    title: "Easy Dinner Pasta",
    description: "A quick and nutritious pasta dish perfect for busy weeknights.",
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: 4,
    image: "/lovable-uploads/6092619e-e957-4c21-b480-20454027a7e2.png"
  },
  {
    id: 2,
    title: "One-Pot Quinoa Bowl",
    description: "Healthy, protein-rich meal that's easy to prepare and customize.",
    prepTime: "5 mins",
    cookTime: "15 mins",
    servings: 2,
    image: "/lovable-uploads/4f8f135a-6243-488c-92ba-c324f470b2a9.png"
  }
];

const HomemakerJourney = () => {
  const navigate = useNavigate();
  const [showLiveInteraction, setShowLiveInteraction] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);
  const [tasks, setTasks] = useState(dummyTasks);
  const [currentRecipe, setCurrentRecipe] = useState(dummyRecipes[0]);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [timeOfDay, setTimeOfDay] = useState<string>('');

  useEffect(() => {
    // Set time of day greeting
    const hours = new Date().getHours();
    if (hours < 12) setTimeOfDay('Good morning');
    else if (hours < 18) setTimeOfDay('Good afternoon');
    else setTimeOfDay('Good evening');
    
    // Cycle between recipes
    const interval = setInterval(() => {
      setCurrentRecipe(prev => 
        prev.id === dummyRecipes[0].id ? dummyRecipes[1] : dummyRecipes[0]
      );
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  const handleFeatureClick = (feature: string) => {
    toast({
      title: `HomeAssist AI says:`,
      description: `I'll help you manage your ${feature}.`,
    });
    
    if (feature === 'home knowledge') {
      setShowQuiz(true);
    } else if (feature === 'video guides') {
      setShowVideo(true);
    } else if (feature === 'management guides') {
      setShowDocuments(true);
    }
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    
    toast({
      title: "Task Updated",
      description: `Task status has been updated`,
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0F172A]/80 to-[#1E293B]/60">
      {/* Header */}
      <header className="w-full py-6 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <GlassButton 
              variant="ghost" 
              className="text-white backdrop-blur-md" 
              onClick={() => navigate('/')}
              icon={<ArrowLeft className="h-4 w-4" />}
              iconPosition="left"
              is3D={true}
            >
              Back
            </GlassButton>
            <div className="flex items-center gap-4">
              <GlassButton 
                className="bg-indigo-500/20 border border-indigo-500/30 text-white"
                variant="neon"
                onClick={() => setShowLiveInteraction(true)}
                icon={<Video className="h-4 w-4 mr-2" />}
              >
                Video Call
              </GlassButton>
              <CharacterAvatar character="homemaker" size="sm" />
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow w-full py-6 px-6">
        <div className="container mx-auto">
          <GlassCard 
            glowing={true} 
            className="mb-8 text-center"
            is3D={true}
            metallic={true}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
                  {timeOfDay}, Welcome to HomeAssist!
                </h1>
                <p className="text-gray-300 mb-4">
                  Your intelligent home management assistant for planning, organization, and household tasks.
                </p>
                <GlassButton 
                  className="bg-indigo-500/20 border border-indigo-500/30 text-white"
                  variant="neon"
                  onClick={() => setShowLiveInteraction(true)}
                  icon={<Video className="h-4 w-4 mr-2" />}
                >
                  Start Video Call
                </GlassButton>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-xl animate-pulse-gentle"></div>
                  <CharacterAvatar 
                    character="homemaker" 
                    size="xl" 
                    animated={true}
                  />
                </div>
              </div>
            </div>
          </GlassCard>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
            {/* Today's Overview */}
            <GlassCard className="md:col-span-8 p-6" is3D={true}>
              <h2 className="text-xl font-semibold mb-4 text-indigo-400 flex items-center">
                <LayoutDashboard className="mr-2 h-5 w-5" /> Today's Overview
              </h2>
              <div className="space-y-4">
                {tasks.map(task => (
                  <div 
                    key={task.id}
                    className={cn(
                      "flex items-center p-3 rounded-lg transition-all duration-300 cursor-pointer",
                      task.completed ? "bg-indigo-900/20" : "bg-white/5 hover:bg-white/10"
                    )} 
                    onClick={() => toggleTaskCompletion(task.id)}
                  >
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-4">
                      {task.icon === "Clock" && <Clock className="h-5 w-5 text-indigo-400" />}
                      {task.icon === "ShoppingCart" && <ShoppingCart className="h-5 w-5 text-indigo-400" />}
                      {task.icon === "Utensils" && <Utensils className="h-5 w-5 text-indigo-400" />}
                      {task.icon === "Home" && <Home className="h-5 w-5 text-indigo-400" />}
                    </div>
                    <div className="flex-grow">
                      <p className={cn(
                        "text-gray-300",
                        task.completed && "line-through text-gray-500"
                      )}>{task.title}</p>
                      <p className="text-gray-500 text-sm">{task.time}</p>
                    </div>
                    <div>
                      <button className={cn(
                        "p-2 rounded-full", 
                        task.completed ? "bg-indigo-500/30" : "hover:bg-indigo-500/10"
                      )}>
                        <Check className={cn(
                          "h-4 w-4", 
                          task.completed ? "text-indigo-300" : "text-indigo-500/50"
                        )} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
            
            {/* Quick Actions */}
            <GlassCard className="md:col-span-4 p-6" is3D={true}>
              <h2 className="text-xl font-semibold mb-4 text-indigo-400 flex items-center">
                <Zap className="mr-2 h-5 w-5" /> Quick Actions
              </h2>
              <div className="space-y-3">
                <GlassButton 
                  className="w-full bg-indigo-500/10 text-indigo-300 justify-start" 
                  variant="neon"
                  icon={<Calendar className="h-4 w-4" />}
                  onClick={() => handleFeatureClick('tasks')}
                >
                  Add Task
                </GlassButton>
                <GlassButton 
                  className="w-full bg-indigo-500/10 text-indigo-300 justify-start"
                  variant="neon"
                  icon={<ShoppingCart className="h-4 w-4" />}
                  onClick={() => handleFeatureClick('shopping list')}
                >
                  Add to Shopping List
                </GlassButton>
                <GlassButton 
                  className="w-full bg-indigo-500/10 text-indigo-300 justify-start"
                  variant="neon"
                  icon={<Wallet className="h-4 w-4" />}
                  onClick={() => handleFeatureClick('expenses')}
                >
                  Track Expense
                </GlassButton>
              </div>
              
              <h3 className="text-lg font-semibold mt-6 mb-3 text-indigo-400 flex items-center">
                <Sparkles className="mr-2 h-5 w-5" /> Learning & Tools
              </h3>
              <div className="space-y-3">
                <GlassButton 
                  className="w-full bg-indigo-500/10 text-indigo-300 justify-start" 
                  variant="neon"
                  icon={<Video className="h-4 w-4" />}
                  onClick={() => handleFeatureClick('video guides')}
                >
                  Video Guides
                </GlassButton>
                <GlassButton 
                  className="w-full bg-indigo-500/10 text-indigo-300 justify-start"
                  variant="neon"
                  icon={<BookOpen className="h-4 w-4" />}
                  onClick={() => handleFeatureClick('management guides')}
                >
                  Home Guides
                </GlassButton>
                <GlassButton 
                  className="w-full bg-indigo-500/10 text-indigo-300 justify-start"
                  variant="neon"
                  icon={<Sparkles className="h-4 w-4" />}
                  onClick={() => handleFeatureClick('home knowledge')}
                >
                  Home Quiz
                </GlassButton>
              </div>
            </GlassCard>
          </div>
          
          <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text flex items-center justify-center">
            <Star className="mr-2 h-6 w-6 text-indigo-400" /> Home Management Hub
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <GlassCard 
              className="hover:scale-105 transition-transform cursor-pointer p-6" 
              is3D={true}
              onClick={() => handleFeatureClick('daily schedule')}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/20 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-indigo-400" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-indigo-400">Smart Scheduler</h3>
                <p className="text-gray-400 text-center">Organize your time and tasks efficiently</p>
              </div>
            </GlassCard>
            
            <GlassCard 
              className="hover:scale-105 transition-transform cursor-pointer p-6" 
              is3D={true}
              onClick={() => handleFeatureClick('shopping lists')}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/20 flex items-center justify-center mb-4">
                  <ShoppingCart className="h-8 w-8 text-indigo-400" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-indigo-400">Inventory Manager</h3>
                <p className="text-gray-400 text-center">Track supplies and create smart shopping lists</p>
              </div>
            </GlassCard>
            
            <GlassCard 
              className="hover:scale-105 transition-transform cursor-pointer p-6" 
              is3D={true}
              onClick={() => handleFeatureClick('recipes')}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/20 flex items-center justify-center mb-4">
                  <Utensils className="h-8 w-8 text-indigo-400" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-indigo-400">Meal Planner</h3>
                <p className="text-gray-400 text-center">Discover and organize recipes for the week</p>
              </div>
            </GlassCard>
            
            <GlassCard 
              className="hover:scale-105 transition-transform cursor-pointer p-6" 
              is3D={true}
              onClick={() => handleFeatureClick('budget')}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/20 flex items-center justify-center mb-4">
                  <LineChart className="h-8 w-8 text-indigo-400" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-indigo-400">Finance Tracker</h3>
                <p className="text-gray-400 text-center">Monitor expenses and optimize your budget</p>
              </div>
            </GlassCard>
          </div>
          
          {/* Featured Recipe */}
          <GlassCard className="p-6 mb-8" is3D={true} metallic={true}>
            <h2 className="text-xl font-semibold mb-4 text-indigo-400 flex items-center">
              <Utensils className="mr-2 h-5 w-5" /> Today's Recipe Suggestion
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  {currentRecipe.image ? (
                    <img 
                      src={currentRecipe.image} 
                      alt={currentRecipe.title} 
                      className="w-full h-48 object-cover transform transition-transform hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-black/50 to-indigo-500/10 flex items-center justify-center">
                      <Utensils className="h-16 w-16 text-indigo-500/50" />
                    </div>
                  )}
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-lg font-medium mb-2 text-white">{currentRecipe.title}</h3>
                <p className="text-gray-400 mb-4">{currentRecipe.description}</p>
                <div className="flex flex-wrap gap-4">
                  <div className="text-gray-400 text-sm px-3 py-1 rounded-full bg-white/5">
                    <span className="font-medium text-indigo-400">Prep:</span> {currentRecipe.prepTime}
                  </div>
                  <div className="text-gray-400 text-sm px-3 py-1 rounded-full bg-white/5">
                    <span className="font-medium text-indigo-400">Cook:</span> {currentRecipe.cookTime}
                  </div>
                  <div className="text-gray-400 text-sm px-3 py-1 rounded-full bg-white/5">
                    <span className="font-medium text-indigo-400">Servings:</span> {currentRecipe.servings}
                  </div>
                </div>
                <GlassButton 
                  className="mt-4 bg-indigo-500/10 text-indigo-300"
                  variant="neon"
                  icon={<Utensils className="h-4 w-4" />}
                  onClick={() => handleFeatureClick('recipe details')}
                >
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
          <GlassCard className="p-4" is3D={true} metallic={true}>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask HomeAssist AI..." 
                className="w-full bg-black/30 border border-indigo-500/30 rounded-full px-6 py-3 pr-12 text-white outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-inner"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    setShowLiveInteraction(true);
                  }
                }}
              />
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-2 shadow-lg hover:shadow-indigo-500/30 transition duration-300"
                onClick={() => setShowLiveInteraction(true)}
              >
                <Sparkles className="h-5 w-5 text-white" />
              </button>
            </div>
          </GlassCard>
        </div>
      </footer>

      {/* Interactive Components */}
      {showLiveInteraction && (
        <LiveInteraction character="homemaker" onClose={() => setShowLiveInteraction(false)} />
      )}
      
      {showQuiz && (
        <Quiz character="homemaker" onClose={() => setShowQuiz(false)} />
      )}
      
      {showVideo && (
        <InteractiveVideo character="homemaker" onClose={() => setShowVideo(false)} />
      )}
      
      {showDocuments && (
        <Documents character="homemaker" onClose={() => setShowDocuments(false)} />
      )}
    </div>
  );
};

// Helper function
const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

export default HomemakerJourney;
