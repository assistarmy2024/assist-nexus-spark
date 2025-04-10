
import React, { useState } from 'react';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import { Play, Pause, Volume2, VolumeX, Maximize, SkipForward, ChevronRight } from 'lucide-react';

interface InteractiveVideoProps {
  character: 'child' | 'elderly' | 'homemaker';
  onClose: () => void;
}

const getVideoContent = (character: 'child' | 'elderly' | 'homemaker'): {title: string, description: string}[] => {
  switch (character) {
    case 'child':
      return [
        {
          title: "Fun Science Experiments",
          description: "Learn amazing science facts with interactive experiments you can do at home!"
        },
        {
          title: "Space Adventure",
          description: "Travel through our solar system and learn about planets, stars and galaxies."
        },
        {
          title: "Animal World",
          description: "Explore the fascinating world of animals and their habitats."
        }
      ];
    case 'elderly':
      return [
        {
          title: "Daily Exercise Guide",
          description: "Simple, effective exercises to maintain mobility and strength."
        },
        {
          title: "Memory Enhancement",
          description: "Activities and techniques to keep your mind sharp and improve memory."
        },
        {
          title: "Technology Made Simple",
          description: "Easy-to-follow guides for using smartphones, tablets and computers."
        }
      ];
    case 'homemaker':
      return [
        {
          title: "Quick & Healthy Recipes",
          description: "Delicious meals that are quick to prepare and nutritionally balanced."
        },
        {
          title: "Organization Hacks",
          description: "Clever solutions for keeping your home tidy and well-organized."
        },
        {
          title: "Budget-Friendly Decorating",
          description: "Transform your space with affordable and stylish decorating ideas."
        }
      ];
  }
};

const InteractiveVideo = ({ character, onClose }: InteractiveVideoProps) => {
  const videos = getVideoContent(character);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  
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
  
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    
    if (!isPlaying) {
      // Simulate video playing with progress bar movement
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    }
  };
  
  const handleVideoChange = (index: number) => {
    setCurrentVideo(index);
    setProgress(0);
    setIsPlaying(false);
  };
  
  const characterEmoji = {
    child: "🎮",
    elderly: "🧠",
    homemaker: "🏠"
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
            <span className="mr-2">{characterEmoji[character]}</span>
            Interactive Learning
          </h2>
          <GlassButton 
            variant="ghost" 
            onClick={onClose}
            className="text-white hover:text-red-400"
          >
            Close
          </GlassButton>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
              <div className={`absolute inset-0 bg-gradient-to-br ${themeColors[character].gradient} opacity-10`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                {!isPlaying ? (
                  <div className="text-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${themeColors[character].gradient} flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300`} onClick={handlePlayPause}>
                      <Play className="h-10 w-10 text-white" fill="white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{videos[currentVideo].title}</h3>
                    <p className="text-gray-300 mt-2">{videos[currentVideo].description}</p>
                  </div>
                ) : (
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${themeColors[character].gradient} flex items-center justify-center animate-pulse-gentle`}>
                    <span className="text-4xl">{characterEmoji[character]}</span>
                  </div>
                )}
              </div>
              
              {/* Video controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm p-3 flex flex-col">
                <div className="relative w-full h-1 bg-white/20 rounded-full mb-3">
                  <div 
                    className={`absolute h-full rounded-full bg-gradient-to-r ${themeColors[character].gradient}`}
                    style={{ width: `${progress}%` }}
                  ></div>
                  <div 
                    className="absolute h-3 w-3 rounded-full bg-white -top-1"
                    style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
                  ></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <button 
                      className="p-2 rounded-full hover:bg-white/10 transition-colors"
                      onClick={handlePlayPause}
                    >
                      {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
                    </button>
                    <button 
                      className="p-2 rounded-full hover:bg-white/10 transition-colors"
                      onClick={() => setIsMuted(!isMuted)}
                    >
                      {isMuted ? <VolumeX className="h-5 w-5 text-white" /> : <Volume2 className="h-5 w-5 text-white" />}
                    </button>
                    <span className="text-white text-sm">
                      {Math.floor(progress / 100 * 10)}:
                      {Math.floor((progress / 100 * 600) % 60).toString().padStart(2, '0')} / 10:00
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button 
                      className="p-2 rounded-full hover:bg-white/10 transition-colors"
                      onClick={() => {
                        setProgress(0);
                        handlePlayPause();
                      }}
                    >
                      <SkipForward className="h-5 w-5 text-white" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                      <Maximize className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-3 text-white">Available Videos</h3>
            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
              {videos.map((video, index) => (
                <div 
                  key={index}
                  onClick={() => handleVideoChange(index)}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    currentVideo === index 
                      ? `bg-${themeColors[character].primary}-500/20 border border-${themeColors[character].primary}-500/40` 
                      : 'bg-black/20 hover:bg-white/10'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    currentVideo === index 
                      ? `bg-${themeColors[character].primary}-500/30` 
                      : 'bg-white/10'
                  }`}>
                    {currentVideo === index ? (
                      <Play className={`h-5 w-5 text-${themeColors[character].primary}-400`} />
                    ) : (
                      <span className="text-gray-400">{index + 1}</span>
                    )}
                  </div>
                  <div>
                    <p className={`font-medium ${
                      currentVideo === index 
                        ? `text-${themeColors[character].primary}-400` 
                        : 'text-white'
                    }`}>
                      {video.title}
                    </p>
                    <p className="text-gray-400 text-sm truncate">{video.description}</p>
                  </div>
                  {currentVideo === index && (
                    <ChevronRight className={`ml-auto h-5 w-5 text-${themeColors[character].primary}-400`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default InteractiveVideo;
