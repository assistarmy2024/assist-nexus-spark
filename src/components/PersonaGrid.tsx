
import React from 'react';
import { BrainCog, Lightbulb, Home } from 'lucide-react';
import { PersonaCard } from './PersonaCard';
import { cn } from '@/lib/utils';

interface PersonaGridProps {
  className?: string;
  isVisible?: boolean;
}

const PersonaGrid = ({ className, isVisible = false }: PersonaGridProps) => {
  return (
    <div className={cn(
      `grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6 transition-all duration-700`, 
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
      className
    )}>
      <PersonaCard
        type="children"
        title="KidBot"
        description="Engaging educational assistance for children."
        route="/child"
        icon={<BrainCog className="w-12 h-12" />}
        delay={100}
      />
      
      <PersonaCard
        type="elderly"
        title="ElderAssist"
        description="Support and companionship for elderly individuals."
        route="/elderly"
        icon={<Lightbulb className="w-12 h-12" />}
        delay={200}
      />
      
      <PersonaCard
        type="homemaker"
        title="HomeCompanion"
        description="Efficient home management and lifestyle assistance."
        route="/homemaker"
        icon={<Home className="w-12 h-12" />}
        delay={300}
      />
    </div>
  );
};

export default PersonaGrid;
