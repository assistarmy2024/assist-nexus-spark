
import React, { useState } from 'react';
import AvatarCard3D from '@/components/AvatarCard3D';
import { BrainCog, Lightbulb, Home, Sparkles } from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#03071E] to-[#1E3A8A] text-white flex items-center justify-center p-4 overflow-auto">
      <div className="container mx-auto max-w-7xl py-12">
        <header className={`text-center mb-12 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to <span className="text-blue-400">AssistAI</span> <Sparkles className="inline-block h-8 w-8 ml-2 animate-pulse" />
          </h1>
          <p className="text-lg text-gray-300">
            Your personalized AI assistant for every stage of life.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <AvatarCard3D
            title="KidBot"
            description="Engaging and educational assistance for children"
            character="children"
            route="/child"
            fallbackIcon={<BrainCog className="h-16 w-16 text-blue-400" />}
            glbUrl="/models/child-studying.glb"
          />
          
          <AvatarCard3D
            title="ElderAssist"
            description="Support and companionship for elderly individuals"
            character="elderly"
            route="/elderly"
            fallbackIcon={<Lightbulb className="h-16 w-16 text-teal-400" />}
            glbUrl="/models/elderly-reading.glb"
          />
          
          <AvatarCard3D
            title="HomeCompanion"
            description="Efficient home management and lifestyle assistance"
            character="homemaker"
            route="/homemaker"
            fallbackIcon={<Home className="h-16 w-16 text-indigo-400" />}
            glbUrl="/models/chef-cooking.glb"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
