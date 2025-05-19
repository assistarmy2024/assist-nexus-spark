
import React from 'react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  isActive?: boolean;
}

export const NavItem = ({ 
  icon, 
  label, 
  onClick, 
  isActive = false 
}: NavItemProps) => (
  <button 
    onClick={onClick}
    className={`flex items-center w-full p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 text-white/80 hover:text-white transform hover:translate-x-1`}
  >
    <div className="mr-3">{icon}</div>
    <span>{label}</span>
  </button>
);

export const MobileNavItem = ({ 
  icon, 
  label, 
  isActive = false,
  onClick 
}: NavItemProps) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full space-x-3 p-3 rounded-lg transition-colors ${
      isActive
        ? 'bg-white/20 text-white'
        : 'text-gray-300 hover:bg-white/10 hover:text-white'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);
