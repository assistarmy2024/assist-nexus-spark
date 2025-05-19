
import React from 'react';
import { Calculator, Languages, CheckSquare, Brain, Newspaper, CloudSun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface UtilityItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export const UtilityItem = ({ icon, label, onClick }: UtilityItemProps) => (
  <button 
    onClick={onClick}
    className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
  >
    <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-blue-500/20">
      <div className="text-blue-300">
        {icon}
      </div>
    </div>
    <span className="text-white/90 font-medium">{label}</span>
  </button>
);

const QuickUtilities = () => {
  const navigate = useNavigate();
  
  // Placeholder function for when features are implemented
  const handleUtilityClick = (feature: string) => {
    // This would navigate to the proper feature when implemented
    console.log(`Clicked on ${feature}`);
  };

  return (
    <div className="w-full mt-16 mb-8">
      <h2 className="text-2xl font-bold text-white/90 mb-6 px-4 md:px-0">Quick Utilities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <UtilityItem 
          icon={<Calculator className="w-6 h-6" />} 
          label="Calculator" 
          onClick={() => handleUtilityClick('calculator')}
        />
        <UtilityItem 
          icon={<Languages className="w-6 h-6" />} 
          label="Languages" 
          onClick={() => handleUtilityClick('languages')}
        />
        <UtilityItem 
          icon={<CheckSquare className="w-6 h-6" />} 
          label="To-Do List" 
          onClick={() => handleUtilityClick('todo')}
        />
        <UtilityItem 
          icon={<Brain className="w-6 h-6" />} 
          label="Meditation" 
          onClick={() => handleUtilityClick('meditation')}
        />
        <UtilityItem 
          icon={<Newspaper className="w-6 h-6" />} 
          label="News Flash" 
          onClick={() => handleUtilityClick('news')}
        />
        <UtilityItem 
          icon={<CloudSun className="w-6 h-6" />} 
          label="Weather" 
          onClick={() => handleUtilityClick('weather')}
        />
      </div>
    </div>
  );
};

export default QuickUtilities;
