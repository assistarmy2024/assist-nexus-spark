
import React, { useState } from 'react';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import { FileText, Download, Bookmark, Search, ChevronRight, ArrowLeft, Share2 } from 'lucide-react';

interface DocumentsProps {
  character: 'child' | 'elderly' | 'homemaker';
  onClose: () => void;
}

interface Document {
  title: string;
  description: string;
  content: string[];
}

const getDocuments = (character: 'child' | 'elderly' | 'homemaker'): Document[] => {
  switch (character) {
    case 'child':
      return [
        {
          title: "Fun Science Facts",
          description: "Amazing facts about animals, space and nature",
          content: [
            "# Amazing Animal Facts",
            "- Octopuses have three hearts and blue blood!",
            "- A group of flamingos is called a 'flamboyance'",
            "- Koalas sleep up to 22 hours a day",
            "",
            "# Cool Space Facts",
            "- One day on Venus is longer than one year on Venus",
            "- The Sun makes up 99.86% of the mass in our solar system",
            "- There are more stars in the universe than grains of sand on Earth"
          ]
        },
        {
          title: "Easy Math Tricks",
          description: "Simple ways to solve math problems faster",
          content: [
            "# Multiplication by 9",
            "To multiply any number by 9, first multiply it by 10, then subtract the original number.",
            "For example: 9 × 7 = (10 × 7) - 7 = 70 - 7 = 63",
            "",
            "# Quick Addition",
            "When adding numbers, start with the largest one and add the smaller ones.",
            "For example: 3 + 24 + 6 = 24 + 6 + 3 = 30 + 3 = 33"
          ]
        },
        {
          title: "World Geography",
          description: "Interesting facts about countries and continents",
          content: [
            "# Continent Facts",
            "- Asia is the largest continent",
            "- Antarctica is the coldest continent",
            "- Australia is the only continent that is also a country",
            "",
            "# Amazing Places",
            "- The Amazon Rainforest produces about 20% of Earth's oxygen",
            "- The Great Wall of China is over 13,000 miles long",
            "- The Sahara Desert is almost as large as the United States"
          ]
        }
      ];
    case 'elderly':
      return [
        {
          title: "Health Guidelines",
          description: "Tips for maintaining good health as you age",
          content: [
            "# Daily Habits for Healthy Aging",
            "- Stay physically active with moderate exercise like walking",
            "- Keep your mind active with puzzles, reading, and learning new skills",
            "- Maintain social connections through regular interaction with friends and family",
            "",
            "# Nutrition Tips",
            "- Eat plenty of fruits, vegetables, and whole grains",
            "- Stay hydrated by drinking water throughout the day",
            "- Limit processed foods, sugar, and salt"
          ]
        },
        {
          title: "Technology Guide",
          description: "Simple instructions for using modern devices",
          content: [
            "# Smartphone Basics",
            "1. To turn on your smartphone, press and hold the power button",
            "2. Swipe up or press the home button to unlock your phone",
            "3. Tap on app icons to open applications",
            "",
            "# Video Calling",
            "1. Open your video call app (like FaceTime or WhatsApp)",
            "2. Select the contact you want to call",
            "3. Tap the video call button to start the call"
          ]
        },
        {
          title: "Financial Planning",
          description: "Managing finances in retirement",
          content: [
            "# Budget Management",
            "- Track all your monthly expenses to understand your spending patterns",
            "- Categorize expenses as essential (housing, food, healthcare) and non-essential",
            "- Set a realistic monthly budget based on your retirement income",
            "",
            "# Saving Tips",
            "- Look for senior discounts on services and products",
            "- Consider downsizing your home if it's too large for your needs",
            "- Review insurance policies regularly to ensure you're not overpaying"
          ]
        }
      ];
    case 'homemaker':
      return [
        {
          title: "Meal Planning",
          description: "Strategies for efficient and healthy meal planning",
          content: [
            "# Weekly Meal Planning",
            "1. Set aside time each week to plan meals (e.g., Sunday afternoon)",
            "2. Check your pantry and fridge for items you already have",
            "3. Plan meals that use similar ingredients to reduce waste",
            "4. Make a detailed shopping list organized by store sections",
            "",
            "# Batch Cooking Tips",
            "- Prepare large quantities of base ingredients (rice, pasta, roasted vegetables)",
            "- Freeze portions in meal-sized containers",
            "- Label all containers with contents and date"
          ]
        },
        {
          title: "Home Organization",
          description: "Systems for keeping your home tidy and functional",
          content: [
            "# Daily Maintenance",
            "- Spend 10-15 minutes each evening tidying up",
            "- Follow the 'one-touch rule': handle items only once before putting them away",
            "- Create 'drop zones' for items that tend to accumulate",
            "",
            "# Storage Solutions",
            "- Use clear containers for items you need to see",
            "- Store similar items together",
            "- Keep frequently used items in easily accessible places",
            "- Rotate seasonal items to optimize space"
          ]
        },
        {
          title: "Budget Management",
          description: "Household budget and expense tracking",
          content: [
            "# Creating a Household Budget",
            "1. Track all income sources and expenses for a month",
            "2. Categorize expenses: fixed (rent/mortgage, utilities) and variable (groceries, entertainment)",
            "3. Allocate percentages of income to different categories",
            "4. Review and adjust monthly",
            "",
            "# Money-Saving Strategies",
            "- Meal plan to reduce food waste and impulse purchases",
            "- Use cashback apps and loyalty programs",
            "- Buy in bulk for non-perishable items you use frequently",
            "- Consider secondhand for furniture, appliances, and clothing"
          ]
        }
      ];
  }
};

const Documents = ({ character, onClose }: DocumentsProps) => {
  const documents = getDocuments(character);
  const [currentDocIndex, setCurrentDocIndex] = useState(0);
  const [showDocContent, setShowDocContent] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const themeColors = {
    child: {
      gradient: 'from-blue-500 to-indigo-600',
      primary: 'blue',
      secondary: 'indigo'
    },
    elderly: {
      gradient: 'from-teal-500 to-blue-600',
      primary: 'teal',
      secondary: 'blue'
    },
    homemaker: {
      gradient: 'from-pink-500 to-purple-600',
      primary: 'pink',
      secondary: 'purple'
    }
  };
  
  const filteredDocs = documents.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    doc.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleDocSelect = (index: number) => {
    setCurrentDocIndex(index);
    setShowDocContent(true);
  };
  
  const renderDocumentContent = (content: string[]) => {
    return content.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h3 key={index} className="text-xl font-bold mt-4 mb-2 text-white">{line.substring(2)}</h3>;
      } else if (line.startsWith('- ')) {
        return <li key={index} className="ml-5 text-gray-300 mb-2">{line.substring(2)}</li>;
      } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ')) {
        return <div key={index} className="ml-5 text-gray-300 mb-2">{line}</div>;
      } else if (line === '') {
        return <div key={index} className="h-4"></div>;
      } else {
        return <p key={index} className="text-gray-300 mb-2">{line}</p>;
      }
    });
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
          <h2 className="text-2xl font-bold text-white flex items-center">
            {showDocContent ? (
              <button 
                className="mr-2 p-1 rounded-full hover:bg-white/10"
                onClick={() => setShowDocContent(false)}
              >
                <ArrowLeft className="h-5 w-5 text-white" />
              </button>
            ) : (
              <FileText className="mr-2 h-6 w-6 text-white" />
            )}
            {showDocContent ? documents[currentDocIndex].title : "Learning Materials"}
          </h2>
          <GlassButton 
            variant="ghost" 
            onClick={onClose}
            className="text-white hover:text-red-400"
          >
            Close
          </GlassButton>
        </div>
        
        {!showDocContent ? (
          <>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search documents..."
                className="w-full bg-black/30 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white outline-none focus:ring-2 focus:ring-white/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {filteredDocs.length > 0 ? filteredDocs.map((doc, index) => (
                <div 
                  key={index}
                  onClick={() => handleDocSelect(documents.findIndex(d => d.title === doc.title))}
                  className={`flex items-start p-4 rounded-lg cursor-pointer transition-all duration-300 bg-black/30 hover:bg-white/10 border border-white/10 hover:border-${themeColors[character].primary}-500/30`}
                >
                  <div className={`w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center mr-4 bg-gradient-to-br ${themeColors[character].gradient} bg-opacity-20`}>
                    <FileText className={`h-6 w-6 text-${themeColors[character].primary}-400`} />
                  </div>
                  <div className="flex-grow">
                    <h3 className={`text-lg font-semibold text-${themeColors[character].primary}-400`}>{doc.title}</h3>
                    <p className="text-gray-400 text-sm">{doc.description}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 self-center" />
                </div>
              )) : (
                <div className="text-center py-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center">
                    <Search className="h-8 w-8 text-gray-500" />
                  </div>
                  <p className="text-gray-400">No documents match your search.</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-col h-[70vh]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
              <p className="text-gray-400">{documents[currentDocIndex].description}</p>
              <div className="flex items-center space-x-2">
                <GlassButton 
                  variant="outline" 
                  className="text-sm flex items-center" 
                  size="sm"
                >
                  <Bookmark className="h-4 w-4 mr-1" /> Save
                </GlassButton>
                <GlassButton 
                  variant="outline" 
                  className="text-sm flex items-center" 
                  size="sm"
                >
                  <Share2 className="h-4 w-4 mr-1" /> Share
                </GlassButton>
                <GlassButton 
                  variant="outline" 
                  className="text-sm flex items-center" 
                  size="sm"
                >
                  <Download className="h-4 w-4 mr-1" /> Download
                </GlassButton>
              </div>
            </div>
            
            <div className="flex-grow overflow-y-auto bg-black/20 rounded-lg p-6 border border-white/10">
              <div className="max-w-3xl mx-auto">
                {renderDocumentContent(documents[currentDocIndex].content)}
              </div>
            </div>
          </div>
        )}
      </GlassCard>
    </div>
  );
};

export default Documents;
