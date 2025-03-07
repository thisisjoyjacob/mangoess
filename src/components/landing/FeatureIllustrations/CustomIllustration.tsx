
import React from 'react';
import { FeatureIcon } from './FeatureIcon';
import { cn } from '@/lib/utils';

interface CustomIllustrationProps {
  featureIndex: number;
  className?: string;
}

export const CustomIllustration: React.FC<CustomIllustrationProps> = ({ 
  featureIndex,
  className 
}) => {
  // Colors for the illustration backgrounds
  const bgColors = [
    'from-blue-500/20 to-purple-500/20',  // Add Cells
    'from-green-500/20 to-blue-500/20',   // Plug & Play
    'from-purple-500/20 to-pink-500/20',  // Spatial Thinking
    'from-indigo-500/20 to-blue-500/20',  // Contextual
    'from-amber-500/20 to-orange-500/20', // Intelligence
    'from-teal-500/20 to-green-500/20',   // Clip
    'from-blue-500/20 to-indigo-500/20',  // Agnostic
    'from-violet-500/20 to-purple-500/20',// Search
    'from-emerald-500/20 to-teal-500/20', // Private
    'from-rose-500/20 to-pink-500/20',    // Recognition
    'from-cyan-500/20 to-blue-500/20',    // Share
    'from-orange-500/20 to-amber-500/20', // D/L mode
  ];

  const titles = [
    "Add Cells",
    "Plug & Play",
    "Spatial Thinking",
    "Contextual",
    "Intelligence",
    "Clip",
    "Agnostic",
    "Search",
    "Private",
    "Recognition",
    "Share",
    "D/L mode"
  ];

  const descriptions = [
    "Seamlessly import data (CSV, HTML, AI scraping, or clipping) or create new entries effortlessly.",
    "Fully customizable with an open-source framework that adapts to your workflow.",
    "Visualize ideas with brain cells, lists, galleries, tables, maps, or timelines.",
    "Say goodbye to folders—create sub-brains tailored to specific projects or tasks.",
    "AI-powered insights that extract what they mention from every pinned topic.",
    "Collect data from any source or device directly into your second brain.",
    "Clip any type of content with built-in extraction tools.",
    "Find what you're looking for with intelligent, precision-focused search capabilities.",
    "Keep all your work secure in a private, controlled space.",
    "Identify and extract text from images, videos, and more.",
    "Share thoughts and ideas to collaborate seamlessly.",
    "Toggle between dark and simplified interface with custom color modes for focus."
  ];

  const bgColor = bgColors[featureIndex % bgColors.length];
  const title = titles[featureIndex % titles.length];
  const description = descriptions[featureIndex % descriptions.length];

  return (
    <div className={cn(
      "w-full rounded-xl overflow-hidden shadow-xl bg-card/30 backdrop-blur-sm border border-border/50",
      className
    )}>
      <div className={cn(
        "relative h-64 w-full bg-gradient-to-br p-8 flex flex-col items-center justify-center text-center",
        bgColor
      )}>
        {/* Neural network nodes background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden opacity-40">
          <div className="absolute top-[20%] left-[15%] w-8 h-8 rounded-full bg-primary/30 animate-pulse-slow"></div>
          <div className="absolute top-[60%] left-[25%] w-6 h-6 rounded-full bg-primary/20 animate-pulse-slow delay-300"></div>
          <div className="absolute top-[30%] left-[60%] w-10 h-10 rounded-full bg-primary/30 animate-pulse-slow delay-700"></div>
          <div className="absolute top-[70%] right-[20%] w-8 h-8 rounded-full bg-primary/20 animate-pulse-slow delay-500"></div>
          <div className="absolute top-[40%] right-[30%] w-6 h-6 rounded-full bg-primary/30 animate-pulse-slow delay-200"></div>
          <div className="absolute top-[20%] right-[10%] w-4 h-4 rounded-full bg-primary/20 animate-pulse-slow delay-600"></div>
        </div>

        {/* Main icon with glow effect */}
        <div className="relative z-10 mb-4">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl transform scale-150"></div>
          <div className="relative glass-panel p-6 rounded-full">
            <FeatureIcon index={featureIndex} size={48} />
          </div>
        </div>

        {/* Title and description */}
        <h2 className="text-2xl font-bold mb-2 text-foreground relative z-10">{title}</h2>
        <p className="text-muted-foreground max-w-md relative z-10">{description}</p>
      </div>
    </div>
  );
};
