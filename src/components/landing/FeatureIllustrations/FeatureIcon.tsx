
import React from 'react';
import { 
  Plus, Puzzle, BrainCircuit, Brain, 
  Sparkles, Paperclip, Monitor, Search, 
  Lock, ScanSearch, Share, Sun 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureIconProps {
  index: number;
  size?: number;
  className?: string;
}

export const FeatureIcon: React.FC<FeatureIconProps> = ({ 
  index, 
  size = 64,
  className 
}) => {
  const icons = [
    <Plus size={size} strokeWidth={1.5} />,             // Add Cells
    <Puzzle size={size} strokeWidth={1.5} />,           // Plug & Play
    <BrainCircuit size={size} strokeWidth={1.5} />,     // Spatial Thinking
    <Brain size={size} strokeWidth={1.5} />,            // Contextual
    <Sparkles size={size} strokeWidth={1.5} />,         // Intelligence
    <Paperclip size={size} strokeWidth={1.5} />,        // Clip
    <Monitor size={size} strokeWidth={1.5} />,          // Agnostic
    <Search size={size} strokeWidth={1.5} />,           // Search
    <Lock size={size} strokeWidth={1.5} />,             // Private
    <ScanSearch size={size} strokeWidth={1.5} />,       // Recognition
    <Share size={size} strokeWidth={1.5} />,            // Share
    <Sun size={size} strokeWidth={1.5} />               // D/L mode
  ];

  return (
    <div className={cn("text-primary", className)}>
      {icons[index % icons.length]}
    </div>
  );
};
